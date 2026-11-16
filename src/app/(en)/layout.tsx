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
    default: 'Practical Tools — 12 free online calculators & Utilities',
    template: '%s | Practical Tools',
  },
  description: 'Free online calculators: discount, BMI, countdown, lunar calendar, unit converter, QR code, word counter, JSON, HEIC to JPG, invoice. No signup.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: 'https://getpracticaltools.com',
    siteName: 'Practical Tools',
    title: 'Practical Tools — 12 free online calculators & Utilities',
    description: '12 free online calculators and utilities — discount, BMI, countdown, QR code, JSON, HEIC, word count, and more. No signup, no installation.',
    images: [
      {
        url: 'https://getpracticaltools.com/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Practical Tools — 12 free online calculators & Utilities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical Tools — 12 free online calculators & Utilities',
    description: '12 free online calculators and utilities — discount, BMI, countdown, QR code, JSON, HEIC, word count, and more. No signup, no install.',
    images: ['https://getpracticaltools.com/og-image.png'],
  },
  alternates: {
    // These must be real, crawlable URLs. `?lang=en` / `?lang=zh` are legacy
    // query URLs that 301-redirect (see middleware.ts) and are now disallowed
    // in robots.txt, so they must never be advertised as hreflang targets.
    canonical: 'https://getpracticaltools.com',
    languages: {
      'en-US': 'https://getpracticaltools.com',
      'zh-CN': 'https://getpracticaltools.com/zh',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="site-version" content="v0.3.0" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Practical Tools" />
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
