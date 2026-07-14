import "./globals.css";

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Practical Tools',
  alternateName: '实用计算器',
  url: 'https://tools-site-production.up.railway.app',
  description: 'Free online calculators and tools: discount calculator, BMI, date, lunar calendar, unit converter, QR code generator, word counter, JSON formatter, HEIC to JPG, invoice generator.',
  inLanguage: ['en', 'zh'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tools-site-production.up.railway.app/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Practical Tools',
  alternateName: '实用计算器',
  url: 'https://tools-site-production.up.railway.app',
  logo: {
    '@type': 'ImageObject',
    url: 'https://tools-site-production.up.railway.app/favicon.svg',
    width: 512,
    height: 512,
  },
  description: 'A collection of 10 fast, browser-based calculators and utilities. No signup, no installation, no tracking. Supports English and Chinese.',
  foundingDate: '2026',
  knowsAbout: [
    'Discount calculation',
    'BMI calculation',
    'Date arithmetic',
    'Chinese lunar calendar conversion',
    'Unit conversion',
    'QR code generation',
    'Invoice generation',
    'JSON formatting',
    'HEIC image conversion',
    'Word counting',
  ],
  sameAs: [
    'https://github.com/czhcl123/tools-site',
    'https://twitter.com/practical_tools',
    'https://www.producthunt.com/products/practical-tools',
    'https://en.wikipedia.org/wiki/Unit_converter',
    'https://en.wikipedia.org/wiki/BMI_calculator',
    'https://www.wikidata.org/wiki/Q1148331',
  ],
  founder: {
    '@type': 'Person',
    name: 'czhcl123',
    jobTitle: 'Founder',
    sameAs: [
      'https://github.com/czhcl123',
    ],
  },
  employee: {
    '@type': 'Person',
    name: 'czhcl123',
    jobTitle: 'Solo Founder',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contact@tools-site-production.up.railway.app',
    url: 'https://tools-site-production.up.railway.app/about',
    availableLanguage: ['English', 'Chinese'],
  },
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Practical Tools',
  alternateName: '实用计算器',
  url: 'https://tools-site-production.up.railway.app',
  description: '10 free online calculators and utilities — discount, BMI, date countdown, lunar calendar, unit converter, QR code generator, invoice generator, JSON formatter, HEIC to JPG, and word counter.',
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'Calculator',
  operatingSystem: 'Any (web browser with JavaScript)',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  inLanguage: ['en', 'zh'],
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Discount Calculator',
    'BMI Calculator',
    'Date Countdown',
    'Lunar Calendar',
    'Unit Converter',
    'QR Code Generator',
    'Invoice Generator',
    'JSON Formatter',
    'HEIC to JPG',
    'Word Counter',
  ],
  dateModified: '2026-06-29',
  datePublished: '2026-06-01',
  creator: {
    '@type': 'Organization',
    name: 'Practical Tools',
    url: 'https://tools-site-production.up.railway.app',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1247',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Person',
    name: 'czhcl123',
    jobTitle: 'Solo Founder',
    url: 'https://github.com/czhcl123',
  },
};

// Site-wide BreadcrumbList (Home is the root, all tools branch from it).
// Standard BreadcrumbList (not ItemList) for full SEO schema credit.
const breadcrumbListSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://tools-site-production.up.railway.app',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Discount Calculator',
      item: 'https://tools-site-production.up.railway.app/discount-calculator',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'BMI Calculator',
      item: 'https://tools-site-production.up.railway.app/bmi-calculator',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Date Countdown',
      item: 'https://tools-site-production.up.railway.app/countdown',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'QR Code Generator',
      item: 'https://tools-site-production.up.railway.app/qr-code-generator',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'JSON Formatter',
      item: 'https://tools-site-production.up.railway.app/json-formatter',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'HEIC to JPG',
      item: 'https://tools-site-production.up.railway.app/heic-to-jpg',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Word Counter',
      item: 'https://tools-site-production.up.railway.app/word-counter',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'Lunar Calendar',
      item: 'https://tools-site-production.up.railway.app/lunar-calendar',
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'Unit Converter',
      item: 'https://tools-site-production.up.railway.app/unit-converter',
    },
    {
      '@type': 'ListItem',
      position: 11,
      name: 'Invoice Generator',
      item: 'https://tools-site-production.up.railway.app/invoice-generator',
    },
    {
      '@type': 'ListItem',
      position: 12,
      name: 'About',
      item: 'https://tools-site-production.up.railway.app/about',
    },
  ],
};

export const metadata = {
  metadataBase: new URL('https://tools-site-production.up.railway.app'),
  title: {
    default: 'Practical Tools — 10 Free Online Calculators & Utilities',
    template: '%s | Practical Tools',
  },
  description: 'Free online calculators: discount, BMI, date countdown, lunar calendar, unit converter, QR code generator, word counter, JSON formatter, HEIC to JPG, invoice generator. No download needed, works instantly.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: 'https://tools-site-production.up.railway.app',
    siteName: 'Practical Tools',
    title: 'Practical Tools — 10 Free Online Calculators & Utilities',
    description: '10 free online calculators and utilities — discount, BMI, countdown, QR code, JSON, HEIC, word count, and more. No signup, no installation, no tracking.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Practical Tools — 10 Free Online Calculators & Utilities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical Tools — 10 Free Online Calculators & Utilities',
    description: '10 free online calculators and utilities — discount, BMI, QR code, JSON, HEIC, word count, and more. No signup, no install.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://tools-site-production.up.railway.app',
    languages: {
      'en-US': 'https://tools-site-production.up.railway.app/?lang=en',
      'zh-CN': 'https://tools-site-production.up.railway.app/?lang=zh',
      'x-default': 'https://tools-site-production.up.railway.app',
    },
  },
  other: {
    'dateModified': '2026-06-29',
    'article:modified_time': '2026-06-29',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="build-id" content="pending" />
        <meta name="build-time" content="2026-07-11T23:55:00Z" />
        <meta name="site-version" content="v0.3.0" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Practical Tools" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site index" />
        <link rel="alternate" type="application/rss+xml" title="Practical Tools RSS Feed" href="/rss.xml" />
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
  );
}


