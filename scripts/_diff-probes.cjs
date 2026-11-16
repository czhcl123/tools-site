// Compare two probe snapshots field by field.
// Usage: node scripts/_diff-probes.cjs before.json after.json
const fs = require('fs');

const a = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const b = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

const A = new Map(a.results.map((r) => [r.route, r]));
const B = new Map(b.results.map((r) => [r.route, r]));

let issues = 0;
const report = [];

for (const [route, before] of A) {
  const after = B.get(route);
  if (!after) {
    report.push('MISSING after: ' + route);
    issues++;
    continue;
  }

  // status
  if (before.status !== after.status) {
    report.push('STATUS  ' + route + ': ' + before.status + ' -> ' + after.status);
    issues++;
  }
  // lang
  if (before.lang !== after.lang) {
    report.push('LANG    ' + route + ': ' + before.lang + ' -> ' + after.lang);
    issues++;
  }
  // title
  if ((before.title || '') !== (after.title || '')) {
    report.push('TITLE   ' + route + ': "' + before.title + '" -> "' + after.title + '"');
    issues++;
  }
  // description
  if ((before.description || '') !== (after.description || '')) {
    report.push('DESC    ' + route + ': "' + (before.description || '').slice(0, 70) + '" -> "' + (after.description || '').slice(0, 70) + '"');
    issues++;
  }
  // canonical
  if ((before.canonical || '') !== (after.canonical || '')) {
    report.push('CANON   ' + route + ': ' + before.canonical + ' -> ' + after.canonical);
    issues++;
  }
  // hreflang set
  const hb = (before.hreflang || []).slice().sort().join(' | ');
  const ha = (after.hreflang || []).slice().sort().join(' | ');
  if (hb !== ha) {
    report.push('HREFLANG ' + route + ': ' + hb + '  ->  ' + ha);
    issues++;
  }
  // CJK drop
  if (after.cjk < before.cjk * 0.7 && before.cjk > 50) {
    report.push('CJK     ' + route + ': ' + before.cjk + ' -> ' + after.cjk);
    issues++;
  }
}

for (const route of B.keys()) {
  if (!A.has(route)) {
    report.push('NEW     ' + route);
    issues++;
  }
}

console.log('routes compared:', A.size, '| differences:', issues);
report.forEach((r) => console.log('  ' + r));

// cache-control summary for the after snapshot
const cc = {};
for (const r of b.results) {
  const k = (r.cacheControl || 'null').replace(/max-age=\d+/, 'max-age=N');
  cc[k] = (cc[k] || 0) + 1;
}
console.log('after cache-control:', JSON.stringify(cc));
const dyn = b.results.filter((r) => (r.cacheControl || '').includes('no-store'));
console.log('still dynamic (' + dyn.length + '):', dyn.map((r) => r.route).join(', '));
