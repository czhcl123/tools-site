// Verify the redirect behaviour of the legacy ?lang= URLs.
const https = require('https');

const CASES = [
  'https://getpracticaltools.com/?lang=zh',
  'https://getpracticaltools.com/word-counter?lang=zh',
  'https://getpracticaltools.com/zh/word-counter?lang=en',
  'https://getpracticaltools.com/blog/word-counter?lang=zh',
  'https://getpracticaltools.com/blog?lang=zh',
  'https://getpracticaltools.com/about?lang=zh',
];

function probe(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; redirect-probe/1.0)' } }, (res) => {
      res.resume();
      resolve({ status: res.statusCode, location: res.headers.location || null });
    });
    req.on('error', (e) => resolve({ error: e.message }));
  });
}

(async () => {
  for (const u of CASES) {
    const r = await probe(u);
    console.log(
      u.replace('https://getpracticaltools.com', '') + '\n   ' +
        (r.error ? 'ERROR ' + r.error : r.status + '  ->  ' + (r.location || '(no Location header)'))
    );
  }
})();
