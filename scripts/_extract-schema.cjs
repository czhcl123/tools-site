// Extract the JSON-LD block from the original root layout into src/app/schema.ts
// verbatim, so the structured data cannot drift.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const layoutPath = path.join(root, 'src', 'app', 'layout.tsx');
const outPath = path.join(root, 'src', 'app', 'schema.ts');

const src = fs.readFileSync(layoutPath, 'utf8');
const start = src.indexOf('const websiteSchema');
const end = src.indexOf('export const metadata');
if (start < 0 || end < 0) {
  console.error('could not locate schema block in layout.tsx');
  process.exit(1);
}

let block = src.slice(start, end).trimEnd();
block = block.replace(
  /^const (websiteSchema|organizationSchema|webAppSchema|breadcrumbListSchema) =/gm,
  'export const $1 ='
);

const header = [
  '/**',
  ' * Shared JSON-LD for both route groups.',
  ' *',
  ' * Extracted verbatim from the original root layout (src/app/layout.tsx) so the',
  ' * structured data stays byte-identical. The old root layout read',
  ' * `x-page-lang` through `await headers()`, which forced every route to be',
  ' * dynamically rendered; each route group now owns its own <html lang> and',
  ' * imports these schemas from here.',
  ' */',
  '',
].join('\n');

fs.writeFileSync(outPath, header + block + '\n');
console.log('written:', outPath, (header + block).length, 'bytes');

const check = fs.readFileSync(outPath, 'utf8');
for (const n of ['websiteSchema', 'organizationSchema', 'webAppSchema', 'breadcrumbListSchema']) {
  console.log(' ', n, check.includes('export const ' + n + ' =') ? 'OK' : 'MISSING');
}

// verify the payload itself did not change
const origBlock = src.slice(start, end).trimEnd();
const newBlock = check
  .slice(check.indexOf('export const websiteSchema'))
  .replace(/^export const /gm, 'const ')
  .trimEnd();
console.log('  payload identical:', origBlock === newBlock);
if (origBlock !== newBlock) {
  console.log('  DIFF! original', origBlock.length, 'new', newBlock.length);
  process.exit(2);
}
