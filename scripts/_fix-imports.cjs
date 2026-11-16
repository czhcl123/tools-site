/**
 * Rewrite relative imports under src/app to the `@/` alias.
 *
 * The route-group move changed the directory depth of every page, which broke
 * 35 relative imports. The project already maps `@/* -> ./src/*`, so switching
 * to the alias makes the imports depth-independent.
 *
 * Idempotent: an import that already starts with `@/` or is not relative is
 * left alone.
 *
 * Usage: node scripts/_fix-imports.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');

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

const files = walk(appDir).filter((f) => /\.(ts|tsx)$/.test(f));
let changedFiles = 0;
const report = [];

for (const file of files) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const src = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  const edits = [];
  const re = /(\bfrom\s*|\bimport\s*\(\s*)(['"])(\.[^'"]*)\2/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const spec = m[3];
    // resolve against the file's directory
    const abs = path.resolve(dir, spec);
    // must land inside src/
    const relToSrc = path.relative(path.join(root, 'src'), abs).replace(/\\/g, '/');
    if (relToSrc.startsWith('..')) {
      report.push('!! OUTSIDE src  ' + rel + '  ' + spec);
      continue;
    }
    const next = '@/' + relToSrc;
    // m[1] already contains the `from` / `import(` prefix — do NOT add it again
    const start = m.index;
    const end = m.index + m[0].length;
    edits.push({ start, end, text: m[1] + m[2] + next + m[2] });
  }

  if (!edits.length) continue;
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const ed of edits) out = out.slice(0, ed.start) + ed.text + out.slice(ed.end);

  if (out === src) continue;
  changedFiles++;
  report.push('ok ' + rel + '  (' + edits.length + ' import(s))');
  if (!DRY) fs.writeFileSync(file, out, 'utf8');
}

console.log((DRY ? '[DRY] ' : '') + 'changed files: ' + changedFiles);
report.forEach((r) => console.log('  ' + r));
