/**
 * Point the Chinese pages at the shared English client components.
 *
 * Before the route-group move, a Chinese page imported its client with
 * `../../<tool>/<tool>-client`, which resolved to `src/app/<tool>/...` —
 * the English copy. After the move the naive path rewrite produced
 * `@/app/(zh)/<tool>/...`, which does not exist (only two Chinese pages ship
 * their own client). This restores the original targets.
 *
 * Idempotent.
 *
 * Usage: node scripts/_fix-zh-imports.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const zhAppDir = path.join(root, 'src', 'app', '(zh)', 'zh');
const DRY = process.argv.includes('--dry');

// The two Chinese pages that ship their own client component.
const LOCAL_CLIENTS = new Set(['sleep-calculator']);

/**
 * fs.existsSync() returns false for paths containing parentheses on Windows
 * (they are treated as glob patterns) when the path has no file extension.
 * statSync + try/catch is the reliable check.
 */
function fileExists(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

let changed = 0;
const report = [];

for (const file of walk(zhAppDir).filter((f) => /\.tsx$/.test(f))) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const src = fs.readFileSync(file, 'utf8');

  const edits = [];
  const re = /from\s*(['"])@\/app\/\(zh\)\/([^'"]+)\1/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const target = m[2]; // e.g. 'word-counter/word-counter-client'
    const tool = target.split('/')[0];
    if (LOCAL_CLIENTS.has(tool)) continue; // its own client, keep as is
    // does the (en) copy exist? (resolve the extension the way TS/Next do)
    const enBase = path.join(root, 'src', 'app', '(en)', target);
    const found = ['.tsx', '.ts', '.js', '.jsx', '/index.tsx', '/index.ts'].some((ext) =>
      fileExists(enBase + ext)
    );
    if (!found) {
      report.push('!! EN TARGET MISSING  ' + rel + '  ->  ' + target);
      continue;
    }
    const start = m.index;
    const end = m.index + m[0].length;
    edits.push({ start, end, text: `from '@/app/(en)/${target}'` });
  }

  if (!edits.length) continue;
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const ed of edits) out = out.slice(0, ed.start) + ed.text + out.slice(ed.end);

  changed++;
  report.push('ok ' + rel + '  (' + edits.length + ')');
  if (!DRY) fs.writeFileSync(file, out, 'utf8');
}

console.log((DRY ? '[DRY] ' : '') + 'changed files: ' + changed);
report.forEach((r) => console.log('  ' + r));
