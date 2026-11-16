import '../globals.css'
import {
  websiteSchema,
  organizationSchema,
  webAppSchema,
  breadcrumbListSchema,
} from '@/app/schema'

export const metadata = {
  metadataBase: new URL('https://getpracticaltools.com'),
  title: {
    default: '实用计算器 - 12 个免费在线工具,即开即用',
    // Same suffix as the English pages had before the route-group split.
    // Every <title> on the site ends with "| Practical Tools"; changing this
    // would change the title of every Chinese page (and burn the Ahrefs
    // meta-change allowance for no reason).
    template: '%s | Practical Tools',
  },
  description: '12 个免费在线工具:折扣计算、BMI、睡眠计算器 / 90 分钟睡眠周期、倒计时、农历、单位换算、QR 码、字数统计、JSON 格式化、HEIC 转 JPG、发票生成。无需注册,无需下载,所有处理在浏览器本地完成。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    url: 'https://getpracticaltools.com/zh',
    siteName: '实用计算器',
    title: '实用计算器 - 12 个免费在线工具,即开即用',
    description: '12 个免费在线工具:折扣计算、BMI、睡眠计算器、倒计时、农历、单位换算、QR 码、字数统计、JSON 格式化、HEIC 转 JPG、发票生成。无需注册,无需下载,所有处理在浏览器本地完成。',
    images: [
      {
        url: 'https://getpracticaltools.com/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: '实用计算器 - 12 个免费在线工具,即开即用',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '实用计算器 - 12 个免费在线工具,即开即用',
    description: '12 个免费在线工具:折扣计算、BMI、睡眠计算器、倒计时、农历、单位换算、QR 码、字数统计、JSON 格式化、HEIC 转 JPG、发票生成。无需注册。',
    images: ['https://getpracticaltools.com/og-image.png'],
  },
  alternates: {
    // Fallback only: every page under /zh declares its own canonical and
    // hreflang set in its own metadata, which overrides these.
    canonical: 'https://getpracticaltools.com/zh',
    languages: {
      'zh-CN': 'https://getpracticaltools.com/zh',
      'en-US': 'https://getpracticaltools.com',
      'x-default': 'https://getpracticaltools.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ZhRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="site-version" content="v0.3.0" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="实用计算器" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site index" />
        <link rel="alternate" type="application/rss+xml" title="Practical Tools RSS Feed" href="/rss.xml" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="cjsU3KU/EW7HI9mKf1+lbg" async></script>
      </head>
      <body className="min-h-full flex flex-col antialiased bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
