// Probe live site: capture lang / canonical / hreflang / CJK / status for every known URL.
// Usage: node scripts/_probe-live.cjs [baseUrl] [outFile]
const fs = require('fs');
const path = require('path');

const BASE = process.argv[2] || 'https://getpracticaltools.com';
const OUT = process.argv[3] || path.join(__dirname, '..', 'tmp', 'live-probe.json');

// Routes that should exist after the static refactor (94 per sitemap)
const TOOLS = [
  '', 'about', 'work', 'bmi-calculator', 'countdown', 'discount-calculator',
  'heic-to-jpg', 'invoice-generator', 'json-formatter', 'lunar-calendar',
  'password-generator', 'qr-code-generator', 'sleep-calculator', 'unit-converter',
  'word-counter',
];
const ZH = [
  'zh', 'zh/about', 'zh/bmi-calculator', 'zh/countdown', 'zh/discount-calculator',
  'zh/heic-to-jpg', 'zh/invoice-generator', 'zh/json-formatter', 'zh/lunar-calendar',
  'zh/password-generator', 'zh/qr-code-generator', 'zh/sleep-calculator',
  'zh/unit-converter', 'zh/word-counter',
];
const EMBED = ['embed', 'embed/word-counter'];

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', '(en)', 'blog');
const BLOG = fs
  .readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory() && fs.existsSync(path.join(BLOG_DIR, e.name, 'page.tsx')))
  .map((e) => 'blog/' + e.name);

const ROUTES = [...TOOLS, ...ZH, ...EMBED, ...BLOG];
console.log('routes to probe:', ROUTES.length);

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

(async () => {
  const results = [];
  const CONC = 8;
  for (let i = 0; i < ROUTES.length; i += CONC) {
    const batch = ROUTES.slice(i, i + CONC);
    await Promise.all(
      batch.map(async (route) => {
        const url = BASE + '/' + route;
        const t0 = Date.now();
        try {
          const res = await fetch(url, {
            redirect: 'manual',
            headers: { 'user-agent': 'Mozilla/5.0 (compatible; probe/1.0)' },
          });
          const html = await res.text();
          const cjk = (html.match(/[\u4e00-\u9fff]/g) || []).length;
          results.push({
            route,
            status: res.status,
            ms: Date.now() - t0,
            cacheControl: res.headers.get('cache-control'),
            xVercelCache: res.headers.get('x-vercel-cache'),
            location: res.headers.get('location'),
            lang: extract(html, /<html[^>]*\slang="([^"]*)"/i),
            title: extract(html, /<title[^>]*>([^<]*)<\/title>/i),
            description: extract(html, /<meta[^>]*name="description"[^>]*content="([^"]*)"/i),
            ogTitle: extract(html, /<meta[^>]*property="og:title"[^>]*content="([^"]*)"/i),
            ogDescription: extract(html, /<meta[^>]*property="og:description"[^>]*content="([^"]*)"/i),
            canonical: extract(html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i),
            hreflang: [...html.matchAll(/<link[^>]*rel="alternate"[^>]*hrefLang="([^"]*)"[^>]*href="([^"]*)"/gi)].map(
              (m) => m[1] + '=' + m[2]
            ),
            cjk,
            bytes: html.length,
          });
        } catch (e) {
          results.push({ route, error: String(e), ms: Date.now() - t0 });
        }
      })
    );
  }
  results.sort((a, b) => (a.route < b.route ? -1 : 1));
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ base: BASE, at: new Date().toISOString(), results }, null, 2));

  const bad = results.filter((r) => r.error || r.status !== 200);
  console.log('probed:', results.length, '| non-200/error:', bad.length);
  bad.forEach((r) => console.log('  !!', r.route, r.status || r.error, r.location || ''));
  const langs = {};
  results.forEach((r) => {
    langs[r.lang || 'null'] = (langs[r.lang || 'null'] || 0) + 1;
  });
  console.log('lang distribution:', JSON.stringify(langs));
  const ccs = {};
  results.forEach((r) => {
    const k = r.cacheControl || 'null';
    ccs[k] = (ccs[k] || 0) + 1;
  });
  console.log('cache-control distribution:', JSON.stringify(ccs));
  const vc = {};
  results.forEach((r) => {
    const k = r.xVercelCache || 'null';
    vc[k] = (vc[k] || 0) + 1;
  });
  console.log('x-vercel-cache distribution:', JSON.stringify(vc));
  const zhRoutes = results.filter((r) => r.route.startsWith('zh/'));
  console.log('zh pages CJK:', zhRoutes.map((r) => r.route + '=' + r.cjk).join(' '));
  const missTitle = results.filter((r) => !r.title);
  console.log('missing title:', missTitle.length, missTitle.map((r) => r.route).join(','));
  const missDesc = results.filter((r) => !r.description);
  console.log('missing description:', missDesc.length, missDesc.map((r) => r.route).join(','));
  const avg = Math.round(results.reduce((a, r) => a + (r.ms || 0), 0) / results.length);
  console.log('avg ms:', avg, '| max ms:', Math.max(...results.map((r) => r.ms || 0)));
  console.log('written:', OUT);
})();
