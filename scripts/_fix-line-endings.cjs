// Normalize line endings to CRLF (the repo's .gitattributes convention) and
// make sure no file carries a UTF-8 BOM.
//
// PowerShell's Set-Content -Encoding UTF8 produced mixed line endings and
// (in older versions) a BOM. Run this after any PowerShell-based file edit.
//
// Usage: node scripts/_fix-line-endings.cjs [--check]
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const targets = [
  ...walk(path.join(root, 'src')),
  ...walk(path.join(root, 'scripts')),
].filter((f) => /\.(ts|tsx|mjs|cjs|js)$/.test(f));

let fixed = 0;
const report = [];

for (const f of targets) {
  const rel = path.relative(root, f).replace(/\\/g, '/');
  const buf = fs.readFileSync(f);
  let hadBom = false;
  let body = buf;
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    hadBom = true;
    body = buf.slice(3);
  }
  let text = body.toString('utf8');
  const crlf = (text.match(/\r\n/g) || []).length;
  const lf = (text.match(/(?<!\r)\n/g) || []).length;
  const normalized = text.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');
  // The repo uses core.autocrlf=true: the blob in git is LF, the working copy
  // is CRLF. A file is "wrong" only when it mixes the two, or has a BOM.
  const changed = hadBom || (crlf !== lf && lf !== 0);
  if (changed) {
    report.push((hadBom ? '[BOM] ' : '') + (crlf !== lf ? '[mixed] ' : '') + rel);
    if (!CHECK) {
      fs.writeFileSync(f, Buffer.from(normalized, 'utf8'));
      fixed++;
    }
  }
}

console.log((CHECK ? '[CHECK] ' : '') + 'files with issues: ' + report.length);
report.forEach((r) => console.log('  ' + r));
