// Measure real TTFB (time to first byte) with keep-alive and multiple rounds.
const https = require('https');
const http = require('http');

const url = process.argv[2] || 'https://getpracticaltools.com';
const rounds = Number(process.argv[3] || 5);

const u = new URL(url);
const client = u.protocol === 'https:' ? https : http;
const agent = new client.Agent({ keepAlive: true, maxSockets: 1 });

function once(i) {
  return new Promise((resolve) => {
    const t0 = process.hrtime.bigint();
    const req = client.get(
      url,
      { agent, headers: { 'user-agent': 'Mozilla/5.0 (compatible; ttfb/1.0)', 'accept-encoding': 'gzip' } },
      (res) => {
        const ttfb = Number(process.hrtime.bigint() - t0) / 1e6;
        let bytes = 0;
        res.on('data', (d) => (bytes += d.length));
        res.on('end', () => {
          const total = Number(process.hrtime.bigint() - t0) / 1e6;
          resolve({
            round: i + 1,
            status: res.statusCode,
            ttfb: Math.round(ttfb),
            total: Math.round(total),
            bytes,
            cache: res.headers['x-vercel-cache'] || '-',
            cc: res.headers['cache-control'] || '-',
          });
        });
      }
    );
    req.on('error', (e) => resolve({ round: i + 1, error: e.message }));
  });
}

(async () => {
  const rows = [];
  for (let i = 0; i < rounds; i++) rows.push(await once(i));
  rows.forEach((r) => {
    if (r.error) console.log(`  #${r.round} ERROR ${r.error}`);
    else console.log(`  #${r.round} ${r.status}  ttfb=${r.ttfb}ms  total=${r.total}ms  ${r.bytes}B  cache=${r.cache}  cc=${r.cc}`);
  });
  const ok = rows.filter((r) => !r.error);
  const avg = (k) => Math.round(ok.reduce((a, r) => a + r[k], 0) / ok.length);
  console.log(`\n${url}`);
  console.log(`  avg ttfb: ${avg('ttfb')}ms   avg total: ${avg('total')}ms   min ttfb: ${Math.min(...ok.map((r) => r.ttfb))}ms`);
  agent.destroy();
})();
