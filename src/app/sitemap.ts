import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tools-site-production.up.railway.app'
  // Hardcoded to force re-crawl signal after 7-18 GKP title/desc updates
  const today = '2026-07-28'

  // 工具 slug 清单 (en + zh 双路径)
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
  ]

  const entries: MetadataRoute.Sitemap = []

  // 主页 (en + zh)
  entries.push(
    {
      url: base,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'en-US': base, 'zh-CN': `${base}/zh`, 'x-default': base } },
    },
    {
      url: `${base}/zh`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'en-US': base, 'zh-CN': `${base}/zh`, 'x-default': base } },
    }
  )

  // About (en + zh)
  entries.push(
    {
      url: `${base}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: { languages: { 'en-US': `${base}/about`, 'zh-CN': `${base}/zh/about`, 'x-default': `${base}/about` } },
    },
    {
      url: `${base}/zh/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: { languages: { 'en-US': `${base}/about`, 'zh-CN': `${base}/zh/about`, 'x-default': `${base}/about` } },
    }
  )

  // 工具页 (en + zh 双路径)
  for (const slug of tools) {
    entries.push({
      url: `${base}/${slug}`,
      lastModified: today,
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

  return entries
}