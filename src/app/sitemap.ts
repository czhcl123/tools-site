import fs from 'node:fs'
import path from 'node:path'
import { MetadataRoute } from 'next'

const base = 'https://getpracticaltools.com'

// ---------------------------------------------------------------------------
// lastmod: report the real content-change date per URL.
//
// A single hardcoded date for the whole site told Google "nothing here has
// changed since 2026-10-24", which suppresses recrawls of the pages that DID
// change (2026-11-04, 2026-11-10). File mtimes are not usable here: the
// deploy does a fresh git checkout, so every file gets the build time as its
// mtime. Instead we read the `dateModified` the page already declares in its
// own metadata / JSON-LD, which is content-truthful and survives a redeploy.
//
// A page that does not declare one falls back to its last real content commit
// (recorded below, taken from git history) and finally to a site-wide floor.
// ---------------------------------------------------------------------------

const SITE_FLOOR = '2026-10-21'

// Routes whose source declares no dateModified: use the date of the last
// commit that actually changed their content.
const FALLBACK_DATES: Record<string, string> = {
  '': '2026-10-21',
  'about': '2026-10-21',
  'blog': '2026-11-04',
  'embed': '2026-11-04',
  'work': '2026-11-04',
  'bmi-calculator': '2026-11-04',
  'discount-calculator': '2026-10-31',
  'lunar-calendar': '2026-10-21',
  'zh': '2026-10-21',
  'zh/about': '2026-10-21',
  'zh/bmi-calculator': '2026-11-04',
  'zh/discount-calculator': '2026-11-04',
  'zh/heic-to-jpg': '2026-11-04',
  'zh/json-formatter': '2026-11-04',
  'zh/lunar-calendar': '2026-11-04',
}

/**
 * Resolve lastmod for a route.
 * `route` is the app-router path relative to src/app, e.g. '', 'zh/countdown',
 * 'blog/word-counter'.
 */
function lastModified(route: string): string {
  const file = path.join(process.cwd(), 'src', 'app', route, 'page.tsx')
  try {
    const src = fs.readFileSync(file, 'utf8')
    // metadata export form:  dateModified: '2026-10-22'
    const meta = src.match(/dateModified:\s*'(\d{4}-\d{2}-\d{2})'/)
    if (meta) return meta[1]
    // JSON-LD form:            "dateModified": "2026-11-10"
    const ld = src.match(/"dateModified":\s*"(\d{4}-\d{2}-\d{2})"/)
    if (ld) return ld[1]
  } catch {
    // no source file for this route (e.g. a route group) -> fall through
  }
  return FALLBACK_DATES[route] ?? SITE_FLOOR
}

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = [
    'discount-calculator',
    'bmi-calculator',
    'countdown',
    'lunar-calendar',
    'unit-converter',
    'qr-code-generator',
    'word-counter',
    'json-formatter',
    'heic-to-jpg',
    'invoice-generator',
    'sleep-calculator',
    'password-generator',
  ]

  const entries: MetadataRoute.Sitemap = []

  // Home (en + zh)
  entries.push(
    {
      url: base,
      lastModified: lastModified(''),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'en-US': base, 'zh-CN': `${base}/zh`, 'x-default': base } },
    },
    {
      url: `${base}/zh`,
      lastModified: lastModified('zh'),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'en-US': base, 'zh-CN': `${base}/zh`, 'x-default': base } },
    }
  )

  // About (en + zh)
  entries.push(
    {
      url: `${base}/about`,
      lastModified: lastModified('about'),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: { languages: { 'en-US': `${base}/about`, 'zh-CN': `${base}/zh/about`, 'x-default': `${base}/about` } },
    },
    {
      url: `${base}/zh/about`,
      lastModified: lastModified('zh/about'),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: { languages: { 'en-US': `${base}/about`, 'zh-CN': `${base}/zh/about`, 'x-default': `${base}/about` } },
    }
  )

  // Embed install page (English only; /embed/<slug> widgets are noindex)
  entries.push({
    url: `${base}/embed`,
    lastModified: lastModified('embed'),
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  // Case notes / services page (English only)
  entries.push({
    url: `${base}/work`,
    lastModified: lastModified('work'),
    changeFrequency: 'monthly',
    priority: 0.6,
  })

  // Tools (en + zh) — both language versions are listed. The Chinese tool
  // pages were missing from the sitemap entirely, so Google could only find
  // them through internal links, and they are the pages that actually rank
  // (e.g. /zh/countdown, /zh/sleep-calculator).
  for (const slug of tools) {
    entries.push({
      url: `${base}/${slug}`,
      lastModified: lastModified(slug),
      changeFrequency: 'weekly',
      priority: slug === 'sleep-calculator' ? 1.0 : 0.9,
      alternates: {
        languages: {
          'en-US': `${base}/${slug}`,
          'zh-CN': `${base}/zh/${slug}`,
          'x-default': `${base}/${slug}`,
        },
      },
    })

    entries.push({
      url: `${base}/zh/${slug}`,
      lastModified: lastModified(`zh/${slug}`),
      changeFrequency: 'weekly',
      priority: slug === 'sleep-calculator' ? 0.9 : 0.8,
      alternates: {
        languages: {
          'en-US': `${base}/${slug}`,
          'zh-CN': `${base}/zh/${slug}`,
          'x-default': `${base}/${slug}`,
        },
      },
    })
  }

  // Blog index
  entries.push({
    url: `${base}/blog`,
    lastModified: lastModified('blog'),
    changeFrequency: 'weekly',
    priority: 0.7,
    alternates: { languages: { 'en-US': `${base}/blog`, 'x-default': `${base}/blog` } },
  })

  // Blog posts, read from the filesystem so new posts can never be forgotten
  // again (14 of 63 were missing from the hand-maintained list before).
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog')
  const blogSlugs = fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(blogDir, entry.name, 'page.tsx')))
    .map((entry) => entry.name)
    .sort()

  for (const slug of blogSlugs) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: lastModified(`blog/${slug}`),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${base}/blog/${slug}`,
          'x-default': `${base}/blog/${slug}`,
        },
      },
    })
  }

  return entries
}
