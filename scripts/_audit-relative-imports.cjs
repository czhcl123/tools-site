// Audit relative imports under src/app (read-only, no side effects)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const appDir = path.join(root, 'src', 'app');

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
const rows = [];
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const re = /from\s+['"](\.[^'"]+)['"]/g;
  let m;
  while ((m = re.exec(s))) {
    rows.push({ file: path.relative(root, f).replace(/\\/g, '/'), target: m[1] });
  }
}

console.log('TOTAL RELATIVE IMPORTS:', rows.length);
const byDepth = {};
for (const r of rows) {
  const d = (r.target.match(/\.\.\//g) || []).length;
  byDepth[d] = (byDepth[d] || 0) + 1;
}
console.log('BY ../ DEPTH:', JSON.stringify(byDepth));

const uniq = [...new Set(rows.map((r) => r.file))].sort();
console.log('FILES WITH RELATIVE IMPORTS:', uniq.length);
for (const f of uniq) {
  const t = rows.filter((r) => r.file === f).map((r) => r.target);
  console.log('  ' + f + '  =>  ' + t.join(', '));
}
