/**
 * Remove `useSearchParams()` from the client components.
 *
 * Why: every one of them used it for exactly one thing -- reading `?lang=`.
 * That query parameter is now 301-redirected to a real path everywhere
 * (middleware), and the server already passes the resolved language down as
 * `initialLang`.
 *
 * Why it matters: a client component that calls `useSearchParams()` must be
 * wrapped in <Suspense>, and React then renders the fallback instead of the
 * component during static generation. The pre-rendered HTML was an empty
 * shell (`<div hidden=""><!--$--><!--/$--></div>`) -- the tool list and all
 * Chinese copy were missing from the HTML that Googlebot receives.
 *
 * `usePathname()` is NOT touched: it does not trigger the Suspense bailout.
 *
 * Usage: node scripts/_remove-use-search-params.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src');
const DRY = process.argv.includes('--dry');

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

for (const file of walk(srcDir).filter((f) => /\.tsx$/.test(f))) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  let s = fs.readFileSync(file, 'utf8');
  const original = s;

  // 1) `const lang = initialLang ?? (searchParams.get('lang') === 'zh' ? 'zh' : 'en')`
  s = s.replace(
    /initialLang\s*\?\?\s*\(\s*searchParams\.get\(\s*['"]lang['"]\s*\)\s*===\s*['"]zh['"]\s*\?\s*['"]zh['"]\s*:\s*['"]en['"]\s*\)/g,
    "initialLang ?? 'en'"
  );

  // 2) `const lang = (searchParams.get('lang') === 'zh' ? 'zh' : 'en') as 'zh' | 'en'`
  s = s.replace(
    /\(\s*searchParams\.get\(\s*['"]lang['"]\s*\)\s*===\s*['"]zh['"]\s*\?\s*['"]zh['"]\s*:\s*['"]en['"]\s*\)\s*as\s*['"]zh['"]\s*\|\s*['"]en['"]/g,
    "(initialLang ?? 'en') as 'zh' | 'en'"
  );

  // 3) `const lang = (rawLang === 'en' ? 'en' : 'zh')`  (rawLang came from searchParams)
  s = s.replace(
    /initialLang\s*\?\?\s*\(\s*rawLang\s*===\s*['"]en['"]\s*\?\s*['"]en['"]\s*:\s*['"]zh['"]\s*\)/g,
    "initialLang ?? 'en'"
  );

  // 3b) `const isZh = pathname?.startsWith('/zh') || searchParams.get('lang') === 'zh'`
  //      -> the pathname check already decides the language: the English tool
  //      pages live at /<tool> and the Chinese ones at /zh/<tool>.
  s = s.replace(
    /pathname\?\.startsWith\(\s*['"]\/zh['"]\s*\)\s*\|\|\s*searchParams\.get\(\s*['"]lang['"]\s*\)\s*===\s*['"]zh['"]/g,
    "pathname?.startsWith('/zh')"
  );

  // 3c) `const isZh = initialLang === 'zh' || pathname?.startsWith('/zh') || searchParams.get('lang') === 'zh'`
  s = s.replace(
    /initialLang\s*===\s*['"]zh['"]\s*\|\|\s*pathname\?\.startsWith\(\s*['"]\/zh['"]\s*\)\s*\|\|\s*searchParams\.get\(\s*['"]lang['"]\s*\)\s*===\s*['"]zh['"]/g,
    "initialLang === 'zh' || pathname?.startsWith('/zh')"
  );

  // 4) drop the now-unused `const rawLang = searchParams.get('lang')`
  s = s.replace(/^[ \t]*const rawLang = searchParams\.get\(['"]lang['"]\)\r?\n/gm, '');

  // 5) drop the now-unused `const searchParams = useSearchParams()`
  if (!/searchParams\./.test(s)) {
    s = s.replace(/^[ \t]*const searchParams = useSearchParams\(\)\r?\n/gm, '');
    // remove the import when nothing else uses it
    if (!/useSearchParams/.test(s.replace(/import[^\n]*useSearchParams[^\n]*\n/g, ''))) {
      s = s.replace(
        /import\s*\{([^}]*)\}\s*from\s*['"]next\/navigation['"]\r?\n/,
        (m, names) => {
          const kept = names
            .split(',')
            .map((x) => x.trim())
            .filter((x) => x && x !== 'useSearchParams');
          if (!kept.length) return '';
          return `import { ${kept.join(', ')} } from 'next/navigation'\n`;
        }
      );
    }
  }

  if (s === original) continue;

  // guard: nothing may still read searchParams
  const leftover = [];
  if (/searchParams\./.test(s)) leftover.push('searchParams.*');
  if (/useSearchParams/.test(s)) leftover.push('useSearchParams');
  if (leftover.length) {
    report.push('!! LEFTOVER ' + rel + '  [' + leftover.join(',') + ']');
    continue;
  }

  changed++;
  report.push('ok ' + rel);
  if (!DRY) fs.writeFileSync(file, s, 'utf8');
}

console.log((DRY ? '[DRY] ' : '') + 'changed files: ' + changed);
report.forEach((r) => console.log('  ' + r));
