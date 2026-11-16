/**
 * Staticize the site by removing the `?lang=` searchParams dependency.
 *
 * Uses the TypeScript compiler API so JSX / template-literal / identifier
 * ternary shapes are handled correctly (regex cannot).
 *
 * Decision (2026-11-16, option B):
 *   - blog posts lose the Chinese variant entirely -> English only.
 *     /blog/<slug>?lang=zh is 301'd back to the English post by middleware,
 *     so the same URL never serves two different contents.
 *   - English pages: lang is always 'en'.
 *   - Chinese pages: lang is always 'zh'.
 *   - countdown pages keep their share-link params (to/from/t/name/bd/mode)
 *     and therefore stay dynamic.
 *
 * Idempotent: a file without searchParams / sp.lang / `lang ===` is skipped.
 *
 * Usage: node scripts/_staticize-ast.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.join(__dirname, '..');
const appDir = path.join(root, 'src', 'app');
const DRY = process.argv.includes('--dry');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * AST helpers
 * ------------------------------------------------------------------ */

function unwrapParens(node) {
  let n = node;
  while (n && ts.isParenthesizedExpression(n)) n = n.expression;
  return n;
}

/** Is this the `sp.lang` / `sp && sp.lang` expression? */
function isSpLangExpr(node) {
  const n = unwrapParens(node);
  if (!n) return false;
  if (ts.isPropertyAccessExpression(n)) {
    return (
      ts.isIdentifier(n.expression) &&
      n.expression.text === 'sp' &&
      n.name.text === 'lang'
    );
  }
  // (sp && sp.lang)
  if (ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken) {
    return (
      ts.isIdentifier(n.left) &&
      n.left.text === 'sp' &&
      ts.isPropertyAccessExpression(n.right) &&
      ts.isIdentifier(n.right.expression) &&
      n.right.expression.text === 'sp' &&
      n.right.name.text === 'lang'
    );
  }
  return false;
}

/** Detect `lang === 'zh'` / `lang === 'en'` (possibly parenthesized). */
function matchLangCheck(node) {
  const cond = unwrapParens(node);
  if (!cond || !ts.isBinaryExpression(cond)) return null;
  if (cond.operatorToken.kind !== ts.SyntaxKind.EqualsEqualsEqualsToken) return null;
  const left = unwrapParens(cond.left);
  const right = unwrapParens(cond.right);
  let langSide = null;
  let litSide = null;
  if (left && ts.isIdentifier(left) && left.text === 'lang') {
    langSide = left;
    litSide = right;
  } else if (right && ts.isIdentifier(right) && right.text === 'lang') {
    langSide = right;
    litSide = left;
  } else if (left && isSpLangExpr(left)) {
    langSide = left;
    litSide = right;
  } else if (right && isSpLangExpr(right)) {
    langSide = right;
    litSide = left;
  } else return null;
  if (!langSide) return null;
  if (!litSide || !ts.isStringLiteral(litSide)) return null;
  const v = litSide.text;
  if (v !== 'zh' && v !== 'en') return null;
  return v;
}

/** Is this node a matching conditional? */
function isLangConditional(node) {
  return (
    ts.isConditionalExpression(node) &&
    matchLangCheck(node.condition) !== null
  );
}

/**
 * Resolve a node to its final source text for `targetLang`, recursively
 * resolving nested lang conditionals.
 */
function resolveText(node, sf, targetLang, depth = 0) {
  if (depth > 10) return node.getText(sf);
  if (ts.isConditionalExpression(node)) {
    const condLang = matchLangCheck(node.condition);
    if (condLang) {
      const branch = condLang === targetLang ? node.whenTrue : node.whenFalse;
      return resolveText(branch, sf, targetLang, depth + 1);
    }
  }
  // Not a lang conditional: return its own text, but if it contains nested
  // lang conditionals we resolve them via a nested scan.
  return node.getText(sf);
}

/** Collect every lang conditional in the tree. */
function collectLangConditionals(node, out) {
  if (ts.isConditionalExpression(node) && matchLangCheck(node.condition) !== null) {
    out.push(node);
  }
  ts.forEachChild(node, (c) => { collectLangConditionals(c, out); });
  return out;
}

/** Does the subtree contain a lang conditional? */
function containsLangConditional(node) {
  let found = false;
  const walk = (n) => {
    if (found) return;
    if (ts.isConditionalExpression(n) && matchLangCheck(n.condition) !== null) {
      found = true;
      return;
    }
    ts.forEachChild(n, (c) => { walk(c); });
  };
  walk(node);
  return found;
}

/** Find `const sp = await searchParams;` statements. */
function findSpStatements(node, out) {
  if (ts.isVariableStatement(node)) {
    const decl = node.declarationList.declarations[0];
    if (
      decl &&
      ts.isIdentifier(decl.name) &&
      decl.name.text === 'sp' &&
      decl.initializer &&
      ts.isAwaitExpression(decl.initializer)
    ) {
      out.push(node);
    }
  }
  ts.forEachChild(node, (c) => { findSpStatements(c, out); });
  return out;
}

/** Find `export const dynamic = 'force-dynamic'`. */
function findForceDynamic(node, out) {
  if (ts.isVariableStatement(node)) {
    const decl = node.declarationList.declarations[0];
    if (
      decl &&
      ts.isIdentifier(decl.name) &&
      decl.name.text === 'dynamic' &&
      decl.initializer &&
      ts.isStringLiteral(decl.initializer) &&
      decl.initializer.text === 'force-dynamic'
    ) {
      out.push(node);
    }
  }
  ts.forEachChild(node, (c) => { findForceDynamic(c, out); });
  return out;
}

/** Find function parameters bound to `searchParams`. */
function findSearchParamsParams(node, out) {
  if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isArrowFunction(node) || ts.isMethodDeclaration(node)) {
    node.parameters.forEach((p) => {
      if (ts.isIdentifier(p.name) && p.name.text === 'searchParams') out.push(p);
      else if (ts.isObjectBindingPattern(p.name)) {
        p.name.elements.forEach((el) => {
          if (ts.isIdentifier(el.name) && el.name.text === 'searchParams') out.push(p);
        });
      }
    });
  }
  ts.forEachChild(node, (c) => { findSearchParamsParams(c, out); });
  return out;
}

/** Find `X[lang]` element accesses (blog `content[lang]`). */
function findLangElementAccess(node, out) {
  if (ts.isElementAccessExpression(node)) {
    const arg = node.argumentExpression;
    if (arg && ts.isIdentifier(arg) && arg.text === 'lang') out.push(node);
  }
  ts.forEachChild(node, (c) => { findLangElementAccess(c, out); });
  return out;
}

/** Find `content = { zh: ..., en: ... }` object literals (blog). */
function findContentObjects(node, out) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === 'content') {
    const init = node.initializer;
    if (init && ts.isObjectLiteralExpression(init)) {
      const zhProp = init.properties.find(
        (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'zh'
      );
      const enProp = init.properties.find(
        (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'en'
      );
      if (zhProp && enProp) out.push({ decl: node, obj: init, zhProp, enProp });
    }
  }
  ts.forEachChild(node, (c) => { findContentObjects(c, out); });
  return out;
}

/* ------------------------------------------------------------------ *
 * Main transform
 * ------------------------------------------------------------------ */

function transformFile(file, targetLang, opts) {
  const rel = path.relative(appDir, file).replace(/\\/g, '/');
  let text = fs.readFileSync(file, 'utf8');
  const original = text;
  const notes = [];

  const isCountdown = /(^|\/)countdown\/page\.tsx$/.test(rel);
  const isBlogPost = /^blog\/.+\/page\.tsx$/.test(rel);

  // ---------------- pass 1..N : resolve lang conditionals --------------
  let sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let condHits = 0;
  for (let pass = 0; pass < 8; pass++) {
    const conds = collectLangConditionals(sf, []);
    if (!conds.length) break;
    // keep only outermost conditionals (no nested one inside another)
    const outermost = conds.filter(
      (c) => !conds.some((o) => o !== c && o.getStart() <= c.getStart() && o.getEnd() >= c.getEnd())
    );
    // apply them all in one pass, right-to-left so offsets stay valid
    const repls = outermost.map((c) => {
      const condLang = matchLangCheck(c.condition);
      const branch = condLang === targetLang ? c.whenTrue : c.whenFalse;
      return { start: c.getStart(), end: c.getEnd(), text: resolveText(branch, sf, targetLang) };
    });
    repls.sort((a, b) => b.start - a.start);
    for (const r of repls) {
      text = text.slice(0, r.start) + r.text + text.slice(r.end);
      condHits++;
    }
    sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  }
  if (condHits) notes.push(`${condHits} lang conditional(s) -> ${targetLang}`);

  // ---------------- pass 2 : other structural edits --------------------
  sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];

  // blog: drop the `zh:` content property, and point content[lang] at .en
  if (isBlogPost) {
    for (const { obj, zhProp } of findContentObjects(sf, [])) {
      const start = zhProp.getStart();
      let end = zhProp.getEnd();
      // swallow the trailing comma
      const after = text.slice(end, end + 2);
      if (/^\s*,/.test(after)) end += after.match(/^\s*,/)[0].length;
      edits.push({ start, end, text: '' });
      notes.push('dropped zh content block');
    }
    for (const ea of findLangElementAccess(sf, [])) {
      edits.push({ start: ea.getStart(), end: ea.getEnd(), text: `${ea.expression.getText(sf)}.en` });
    }
  }

  // force-dynamic
  for (const st of findForceDynamic(sf, [])) {
    edits.push({ start: st.getStart(), end: st.getEnd(), text: '' });
    notes.push('removed force-dynamic');
  }

  // searchParams parameters
  //
  // The whole parameter (binding pattern AND its type annotation) is removed
  // in one edit. Removing the type member separately would create a nested /
  // overlapping edit range, and applying two overlapping edits against stale
  // offsets silently corrupts the file.
  for (const p of findSearchParamsParams(sf, [])) {
    const parent = p.parent;
    const list = parent.parameters;
    const isOnly = list.length === 1;
    if (isOnly) {
      // '(' before the parameter, ')' after the parameter (end includes type)
      let open = p.getStart() - 1;
      while (open >= 0 && text[open] !== '(') open--;
      let close = p.getEnd();
      while (close < text.length && text[close] !== ')') close++;
      // replace the whole parameter list with an empty list `()`
      edits.push({ start: open, end: close + 1, text: '()' });
    } else {
      edits.push({ start: p.getStart(), end: p.getEnd(), text: '' });
    }
  }
  if (edits.length) notes.push('simplified searchParams signature');

  // `const sp = await searchParams;` — remove when `sp` is no longer used
  const spStatements = findSpStatements(sf, []);
  for (const st of spStatements) {
    const uses = (text.match(/\bsp\./g) || []).length;
    const needsSp = isCountdown && uses > 0;
    if (!needsSp) {
      edits.push({ start: st.getStart(), end: st.getEnd(), text: '' });
      notes.push('removed const sp = await searchParams');
    }
  }

  // apply edits (descending start so offsets stay valid)
  edits.sort((a, b) => b.start - a.start);
  let lastStart = Infinity;
  for (const ed of edits) {
    if (ed.end > lastStart) {
      // overlapping edit range -> would corrupt the file
      return { text: original, original, notes: ['!! OVERLAPPING EDITS'], changed: false, error: true };
    }
    lastStart = ed.start;
    text = text.slice(0, ed.start) + ed.text + text.slice(ed.end);
  }

  // tidy: blank-line artifacts left by removed statements
  text = text.replace(/\n{3,}/g, '\n\n');

  // syntax gate: never write a file that no longer parses
  const check = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  if (check.parseDiagnostics && check.parseDiagnostics.length) {
    return {
      text: original,
      original,
      notes: ['!! SYNTAX ERROR (' + check.parseDiagnostics.length + ')'],
      changed: false,
      error: true,
    };
  }

  return { text, original, notes, changed: text !== original };
}

/* ------------------------------------------------------------------ */

const files = walk(appDir).filter((f) => /\.tsx$/.test(f));
let changedFiles = 0;
const report = [];

for (const file of files) {
  const rel = path.relative(appDir, file).replace(/\\/g, '/');
  if (!/(^|\/)(page|layout)\.tsx$/.test(rel)) continue;
  if (rel === 'layout.tsx') continue; // handled separately (route groups)

  const targetLang = rel.startsWith('zh/') ? 'zh' : 'en';
  const src = fs.readFileSync(file, 'utf8');
  if (!/searchParams|sp\.lang|lang\s*===|force-dynamic|content\[lang\]/.test(src)) {
    report.push('skip (nothing to do) ' + rel);
    continue;
  }

  const r = transformFile(file, targetLang, {});
  if (r.error) {
    report.push('ERROR ' + rel + '  [' + r.notes.join('; ') + ']  (file left untouched)');
    continue;
  }
  if (!r.changed) {
    report.push('skip (no change) ' + rel);
    continue;
  }

  // leftover detection
  const leftovers = [];
  if (/sp\.lang/.test(r.text)) leftovers.push('sp.lang');
  if (/await searchParams/.test(r.text) && !/countdown/.test(rel)) leftovers.push('await searchParams');
  if (/lang\s*===/.test(r.text)) leftovers.push('lang ===');
  if (/content\[lang\]/.test(r.text)) leftovers.push('content[lang]');
  if (/force-dynamic/.test(r.text)) leftovers.push('force-dynamic');
  if (/searchParams/.test(r.text) && !/countdown/.test(rel)) leftovers.push('searchParams');

  changedFiles++;
  report.push(
    `${leftovers.length ? '!! LEFTOVER ' + leftovers.join(',') : 'ok'} ${rel}  [${r.notes.join('; ')}]`
  );
  if (!DRY) fs.writeFileSync(file, r.text, 'utf8');
}

console.log((DRY ? '[DRY] ' : '') + 'changed files: ' + changedFiles);
report.forEach((r) => console.log('  ' + r));
