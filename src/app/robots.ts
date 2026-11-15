import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // `?lang=zh` is the legacy language switcher: every one of those URLs
        // 301-redirects to the matching /zh/<slug> page. Search engines were
        // still discovering and indexing them, which showed up in the
        // coverage report as "Webpage with redirect" URLs that compete with
        // the canonical /zh pages. They are not meant to be indexed.
        disallow: ['/*?lang='],
      },
    ],
    sitemap: 'https://getpracticaltools.com/sitemap.xml',
    host: 'https://getpracticaltools.com',
  }
}
