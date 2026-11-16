// Inventory: every page/route file under src/app, with searchParams usage, sp.* keys,
// force-dynamic, and whether it declares its own canonical / hreflang.
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

const files = walk(appDir).filter((f) => /\.(tsx|ts)$/.test(f) && !f.includes('node_modules'));
const rows = [];

for (const f of files) {
  const rel = path.relative(appDir, f).replace(/\\/g, '/');
  if (!/(^|\/)(page|layout|route)\.(tsx|ts)$/.test(rel)) continue;
  const s = fs.readFileSync(f, 'utf8');
  const spKeys = [...s.matchAll(/\bsp\.([A-Za-z_][A-Za-z0-9_]*)/g)].map((m) => m[1]);
  rows.push({
    file: rel,
    awaitsSearchParams: /await\s+searchParams/.test(s),
    spKeys: [...new Set(spKeys)],
    spLangCount: (s.match(/sp\.lang/g) || []).length,
    forceDynamic: /force-dynamic/.test(s),
    hasCanonical: /rel=["']canonical["']|canonical:/.test(s),
    hasHreflang: /languages\s*:/.test(s),
    hasLangAttr: /<html[^>]*lang=/.test(s),
  });
}

rows.sort((a, b) => (a.file < b.file ? -1 : 1));
console.log('PAGE/LAYOUT/ROUTE FILES:', rows.length);
console.log('');
const groups = {
  'awaits searchParams': rows.filter((r) => r.awaitsSearchParams),
  'force-dynamic': rows.filter((r) => r.forceDynamic),
  'no canonical': rows.filter((r) => !r.hasCanonical),
  'has hreflang(languages:)': rows.filter((r) => r.hasHreflang),
  'has <html lang=': rows.filter((r) => r.hasLangAttr),
};
for (const [k, v] of Object.entries(groups)) {
  console.log('--- ' + k + ' (' + v.length + ') ---');
  v.slice(0, 30).forEach((r) => console.log('   ' + r.file + (r.spKeys.length ? '  spKeys=' + r.spKeys.join(',') : '')));
  console.log('');
}
console.log('--- all sp.* keys across site ---');
const allKeys = {};
rows.forEach((r) => r.spKeys.forEach((k) => (allKeys[k] = (allKeys[k] || 0) + 1)));
console.log(JSON.stringify(allKeys, null, 2));
