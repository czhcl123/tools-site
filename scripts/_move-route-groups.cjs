/**
 * Move the site into two route groups so each group can own its own root
 * layout (<html lang>), which is what allows the pages to be statically
 * rendered.
 *
 *   src/app/(en)/...        -> /            (English)
 *   src/app/(zh)/zh/...     -> /zh/...     (Chinese, URL unchanged)
 *
 * The old single root layout read `x-page-lang` via `await headers()`,
 * which forced every route into dynamic rendering.
 *
 * Usage: node scripts/_move-route-groups.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const appDir = path.join(root, 'src', 'app');
const DRY = process.argv.includes('--dry');

// Top-level entries that belong to the English group.
const EN_DIRS = [
  'about',
  'blog',
  'bmi-calculator',
  'countdown',
  'discount-calculator',
  'embed',
  'heic-to-jpg',
  'invoice-generator',
  'json-formatter',
  'lunar-calendar',
  'password-generator',
  'qr-code-generator',
  'rss.xml',
  'sleep-calculator',
  'unit-converter',
  'word-counter',
  'work',
];

// Top-level files that belong to the English group.
const EN_FILES = ['page.tsx', 'page-client.tsx', 'not-found.tsx', 'robots.ts', 'sitemap.ts'];

function run(cmd, args) {
  if (DRY) {
    console.log('[DRY] ' + cmd + ' ' + args.join(' '));
    return;
  }
  execFileSync(cmd, args, { cwd: root, stdio: 'inherit' });
}

const enDir = path.join(appDir, '(en)');
const zhDir = path.join(appDir, '(zh)');

if (!DRY) {
  fs.mkdirSync(enDir, { recursive: true });
  fs.mkdirSync(path.join(zhDir, 'zh'), { recursive: true });
}

// English directories
for (const d of EN_DIRS) {
  const from = path.join(appDir, d);
  if (!fs.existsSync(from)) {
    console.log('MISSING dir (skipped): ' + d);
    continue;
  }
  run('git', ['mv', from, path.join(enDir, d)]);
}

// English files
for (const f of EN_FILES) {
  const from = path.join(appDir, f);
  if (!fs.existsSync(from)) {
    console.log('MISSING file (skipped): ' + f);
    continue;
  }
  run('git', ['mv', from, path.join(enDir, f)]);
}

// The Chinese tree: src/app/zh -> src/app/(zh)/zh
const zhFrom = path.join(appDir, 'zh');
if (fs.existsSync(zhFrom)) {
  run('git', ['mv', zhFrom, path.join(zhDir, 'zh')]);
}

// The old root layout is replaced by the two group layouts.
const oldLayout = path.join(appDir, 'layout.tsx');
if (fs.existsSync(oldLayout) && !DRY) {
  execFileSync('git', ['rm', '-f', oldLayout], { cwd: root, stdio: 'inherit' });
}

console.log('done' + (DRY ? ' (dry run)' : ''));
