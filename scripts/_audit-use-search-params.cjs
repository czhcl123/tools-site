// Report every useSearchParams() call and what it reads.
const fs = require('fs');
const path = require('path');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

for (const f of walk('src')) {
  if (!/\.(tsx|ts)$/.test(f)) continue;
  const s = fs.readFileSync(f, 'utf8');
  if (!/useSearchParams/.test(s)) continue;

  const gets = [...s.matchAll(/searchParams\.get\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]);
  const hasAll = /searchParams\.(getAll|has|keys|entries|forEach)/.test(s);
  const alsoPathname = /usePathname/.test(s);
  const hasSuspense = /<Suspense/.test(s);

  console.log(f.replace(/\\/g, '/'));
  console.log('   gets: ' + JSON.stringify(gets) + '  getAll/has/keys: ' + hasAll);
  console.log('   usePathname: ' + alsoPathname + '   Suspense: ' + hasSuspense);
}
