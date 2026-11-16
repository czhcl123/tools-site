/**
 * Restore the `searchParams` parameter on the countdown pages.
 *
 * The countdown tool has real share links (?to=...&from=...&t=...&name=...&bd=
 * &mode=), so its page component must stay dynamic. The staticize pass removed
 * the parameter but left `const sp = await searchParams` behind.
 *
 * Usage: node scripts/_fix-countdown-params.cjs
 */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.join(__dirname, '..');
const FILES = [
  path.join(root, 'src', 'app', '(en)', 'countdown', 'page.tsx'),
  path.join(root, 'src', 'app', '(zh)', 'zh', 'countdown', 'page.tsx'),
];

const SHARE_KEYS = ['to', 'from', 't', 'name', 'bd', 'mode'];

for (const file of FILES) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  let text = fs.readFileSync(file, 'utf8');

  // 1) remove the leftover `const sp = await searchParams` inside
  //    generateMetadata() (that function does not need the share params)
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let metaFn = null;
  let pageFn = null;
  for (const st of sf.statements) {
    if (!ts.isFunctionDeclaration(st)) continue;
    const name = st.name && st.name.text;
    if (name === 'generateMetadata') metaFn = st;
    if (name === 'CountdownPage') pageFn = st;
  }

  const edits = [];

  if (metaFn) {
    const body = metaFn.body;
    for (const st of body.statements) {
      if (ts.isVariableStatement(st)) {
        const d = st.declarationList.declarations[0];
        if (
          d &&
          ts.isIdentifier(d.name) &&
          d.name.text === 'sp' &&
          d.initializer &&
          ts.isAwaitExpression(d.initializer)
        ) {
          edits.push({ start: st.getStart(), end: st.getEnd(), text: '' });
        }
      }
    }
  }

  // 2) give the page component its searchParams parameter back
  if (pageFn && pageFn.parameters.length === 0) {
    const keyType =
      SHARE_KEYS.map((k) => `${k}?: string | string[]`).join('; ');
    const param = `{ searchParams }: { searchParams: Promise<{ ${keyType} }> }`;
    const open = text.indexOf('(', pageFn.name.getEnd());
    edits.push({
      start: open,
      end: open + 1,
      text: '(' + param + ')',
    });
  }

  edits.sort((a, b) => b.start - a.start);
  for (const ed of edits) text = text.slice(0, ed.start) + ed.text + text.slice(ed.end);

  fs.writeFileSync(file, text, 'utf8');
  console.log('ok ' + rel + '  (' + edits.length + ' edit(s))');
}
