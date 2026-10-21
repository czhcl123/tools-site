// Generates public/llms.txt from the actual page files.
// Runs automatically before `next build` (see "prebuild" in package.json), so
// new blog posts and tools show up without anyone remembering to edit a list.
import fs from 'node:fs'
import path from 'node:path'

const base = 'https://getpracticaltools.com'
const root = process.cwd()

const tools = [
  ['discount-calculator', 'Discount Calculator', 'Compute the final price after a percentage discount. Supports stacked discounts, currency display, and "X% off when you buy Y" rules.'],
  ['bmi-calculator', 'BMI Calculator', 'Calculate Body Mass Index from height and weight using the WHO standard formula. Shows BMI category and the healthy weight range for a given height.'],
  ['countdown', 'Date Countdown', 'Count days, hours, minutes and seconds until or since any date. Deadlines, anniversaries, project milestones.'],
  ['lunar-calendar', 'Lunar Calendar', 'Convert between Gregorian (solar) and Chinese lunar calendars. Shows lunar dates, zodiac year and traditional festivals.'],
  ['unit-converter', 'Unit Converter', 'Convert length, weight, temperature, area, volume and time.'],
  ['sleep-calculator', 'Sleep Calculator', 'Pick the ideal bedtime or wake-up time from 90-minute sleep cycles.'],
  ['qr-code-generator', 'QR Code Generator', 'Generate QR codes for URLs, text, vCards and Wi-Fi credentials. Download as PNG.'],
  ['invoice-generator', 'Invoice Generator', 'Create invoices with line items, tax and totals. Print or save as PDF.'],
  ['json-formatter', 'JSON Formatter', 'Pretty-print, validate and minify JSON with syntax errors highlighted by line.'],
  ['password-generator', 'Password Generator', 'Generate random passwords in the browser with configurable length and character sets. Nothing is uploaded.'],
  ['heic-to-jpg', 'HEIC to JPG', 'Convert Apple HEIC photos to JPG in the browser. Files never leave the device.'],
  ['word-counter', 'Word Counter', 'Count words, characters, sentences, paragraphs and reading time for English and Chinese text.'],
]

function between(src, key) {
  const start = src.indexOf(`${key}:`)
  if (start === -1) return ''
  const rest = src.slice(start)
  const lines = rest.split('\n')
  const out = [lines[0]]
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (/^\s{0,6}[a-zA-Z_]+:\s/.test(line) || /^\s{0,6}\}/.test(line) || /^\s{0,6}return\b/.test(line)) break
    out.push(line)
  }
  return out.join('\n')
}

function quoted(text) {
  return [...text.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"))
}

function blogMeta(slug) {
  const file = path.join(root, 'src', 'app', 'blog', slug, 'page.tsx')
  const src = fs.readFileSync(file, 'utf8')
  const gm = src.slice(src.indexOf('generateMetadata'))
  const t = quoted(between(gm, 'title')).filter((s) => s !== 'zh' && s !== 'en')
  const d = quoted(between(gm, 'description')).filter((s) => s !== 'zh' && s !== 'en')
  return {
    title: t.length ? t[t.length - 1] : slug,
    desc: d.length ? d[d.length - 1] : '',
  }
}

function zhMeta(slug) {
  const file = path.join(root, 'src', 'app', 'zh', slug, 'page.tsx')
  if (!fs.existsSync(file)) return null
  const src = fs.readFileSync(file, 'utf8')
  const gm = src.slice(src.indexOf('generateMetadata'))
  // Two shapes: title: '...' directly, or titles = { zh: '...', en: '...' }
  const zhPairs = [...gm.matchAll(/zh:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1])
  if (zhPairs.length >= 2) return { title: zhPairs[0], desc: zhPairs[1] }
  const t = quoted(between(gm, 'title'))
  const d = quoted(between(gm, 'description'))
  return { title: t[0] || slug, desc: d[0] || '' }
}

const blogDir = path.join(root, 'src', 'app', 'blog')
const blogSlugs = fs
  .readdirSync(blogDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && fs.existsSync(path.join(blogDir, e.name, 'page.tsx')))
  .map((e) => e.name)
  .sort()

const lines = []
lines.push('# Practical Tools')
lines.push('')
lines.push(
  '> A collection of 12 free, browser-based calculators and utilities, plus a blog that explains the maths and the research behind them. No signup, no installation, nothing uploaded: every tool runs client-side. English pages use root URLs (e.g. `/bmi-calculator`); Chinese versions live under `/zh/` (e.g. `/zh/bmi-calculator`). The only third-party script is an aggregate analytics tag.'
)
lines.push('')

lines.push('## Tools (English)')
for (const [slug, title, desc] of tools) {
  lines.push(`- [${title}](${base}/${slug}): ${desc}`)
}
lines.push('')

lines.push('## 工具（中文）')
for (const [slug] of tools) {
  const zh = zhMeta(slug)
  if (!zh) continue
  lines.push(`- [${zh.title}](${base}/zh/${slug}): ${zh.desc}`)
}
lines.push('')

lines.push('## Blog')
for (const slug of blogSlugs) {
  const m = blogMeta(slug)
  lines.push(`- [${m.title}](${base}/blog/${slug})${m.desc ? `: ${m.desc}` : ''}`)
}
lines.push('')

lines.push('## About')
lines.push(`- [About Practical Tools](${base}/about): Mission, technology stack and contact information.`)
lines.push('')

lines.push('## Embed')
lines.push(
  `- [Embeddable word counter](${base}/embed): One-iframe widget that counts words, Chinese characters and reading time live. Free, no signup, no API key; the counting runs in the visitor's browser.`
)
lines.push('')

lines.push('## Optional')
lines.push(`- [Sitemap](${base}/sitemap.xml): Full XML sitemap of all pages.`)
lines.push(`- [RSS Feed](${base}/rss.xml): Updates when new tools or posts are added.`)

fs.writeFileSync(path.join(root, 'public', 'llms.txt'), `${lines.join('\n')}\n`)
console.log(`llms.txt written: ${tools.length} tools + ${blogSlugs.length} blog posts`)
