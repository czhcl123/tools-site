import fs from 'node:fs'
import path from 'node:path'
import { MetadataRoute } from 'next'

// Bump this when page content changes: it is the only honest "last modified"
// signal we have (file mtimes are reset by the git checkout on every deploy).
const LAST_UPDATED = '2026-10-21'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://getpracticaltools.com'

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
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'en-US': base, 'zh-CN': `${base}/zh`, 'x-default': base } },
    },
    {
      url: `${base}/zh`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'en-US': base, 'zh-CN': `${base}/zh`, 'x-default': base } },
    }
  )

  // About (en + zh)
  entries.push(
    {
      url: `${base}/about`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: { languages: { 'en-US': `${base}/about`, 'zh-CN': `${base}/zh/about`, 'x-default': `${base}/about` } },
    },
    {
      url: `${base}/zh/about`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: { languages: { 'en-US': `${base}/about`, 'zh-CN': `${base}/zh/about`, 'x-default': `${base}/about` } },
    }
  )

  // Embed install page (English only; /embed/<slug> widgets are noindex)
  entries.push({
    url: `${base}/embed`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  // Tools (en + zh)
  for (const slug of tools) {
    entries.push({
      url: `${base}/${slug}`,
      lastModified: LAST_UPDATED,
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
  }

  // Blog index
  entries.push({
    url: `${base}/blog`,
    lastModified: LAST_UPDATED,
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
      lastModified: LAST_UPDATED,
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
