// Inspect the pre-rendered HTML for emptiness (Suspense bailout) and content.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const appDir = path.join(root, '.next', 'server', 'app');

const TARGETS = [
  'index.html',
  'zh.html',
  'about.html',
  'zh/about.html',
  'word-counter.html',
  'zh/word-counter.html',
  'blog.html',
  'blog/word-counter.html',
  'sleep-calculator.html',
  'zh/sleep-calculator.html',
];

const EMPTY_SUSPENSE = '<div hidden=""><!--$--><!--/$--></div>';

for (const t of TARGETS) {
  const f = path.join(appDir, t);
  if (!fs.existsSync(f)) {
    console.log('MISSING ' + t);
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const cjk = (html.match(/[\u4e00-\u9fff]/g) || []).length;
  const empty = html.includes(EMPTY_SUSPENSE);
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || '';
  const lang = (html.match(/<html[^>]*lang="([^"]*)"/) || [])[1] || '';
  console.log(
    t.padEnd(28) +
      ' bytes=' + String(html.length).padStart(7) +
      '  CJK=' + String(cjk).padStart(5) +
      '  lang=' + (lang || '-').padEnd(6) +
      '  emptySuspense=' + (empty ? 'YES  <-- content missing!' : 'no')
  );
  if (title) console.log('    title: ' + title);
}
