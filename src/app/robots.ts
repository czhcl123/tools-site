import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // 屏蔽 www. 子域名 (Railway 自动配的二级域名,SEO 重复内容)
      { userAgent: '*', disallow: '/', host: 'https://www.tools-site-production.up.railway.app' },
    ],
    sitemap: 'https://tools-site-production.up.railway.app/sitemap.xml',
    host: 'https://tools-site-production.up.railway.app',
  }
}