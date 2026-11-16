/**
 * Shared JSON-LD for both route groups.
 *
 * Extracted verbatim from the original root layout (src/app/layout.tsx) so the
 * structured data stays byte-identical. The old root layout read
 * `x-page-lang` through `await headers()`, which forced every route to be
 * dynamically rendered; each route group now owns its own <html lang> and
 * imports these schemas from here.
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Practical Tools',
  alternateName: '实用计算器',
  url: 'https://getpracticaltools.com',
  description: 'Free online tools: discount calculator, BMI, countdown, lunar calendar, unit converter, QR code, word counter, JSON formatter, and more.',
  inLanguage: ['en', 'zh'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://getpracticaltools.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Practical Tools',
  alternateName: '实用计算器',
  url: 'https://getpracticaltools.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://getpracticaltools.com/favicon.svg',
    width: 512,
    height: 512,
  },
  description: 'A collection of 12 fast, browser-based calculators and utilities. No signup, no installation, no tracking. Supports English and Chinese.',
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
    email: 'contact@getpracticaltools.com',
    url: 'https://getpracticaltools.com/about',
    availableLanguage: ['English', 'Chinese'],
  },
};

export const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Practical Tools',
  alternateName: '实用计算器',
  url: 'https://getpracticaltools.com',
  description: '12 free online calculators and utilities — discount, BMI, date countdown, lunar calendar, unit converter, QR code generator, invoice generator, JSON formatter, HEIC to JPG, and word counter.',
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
    'Sleep Calculator',
    'Password Generator',
  ],
  dateModified: '2026-10-21',
  datePublished: '2026-06-01',
  creator: {
    '@type': 'Organization',
    name: 'Practical Tools',
    url: 'https://getpracticaltools.com',
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
export const breadcrumbListSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://getpracticaltools.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Discount Calculator',
      item: 'https://getpracticaltools.com/discount-calculator',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'BMI Calculator',
      item: 'https://getpracticaltools.com/bmi-calculator',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Date Countdown',
      item: 'https://getpracticaltools.com/countdown',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'QR Code Generator',
      item: 'https://getpracticaltools.com/qr-code-generator',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'JSON Formatter',
      item: 'https://getpracticaltools.com/json-formatter',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'HEIC to JPG',
      item: 'https://getpracticaltools.com/heic-to-jpg',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Word Counter',
      item: 'https://getpracticaltools.com/word-counter',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'Lunar Calendar',
      item: 'https://getpracticaltools.com/lunar-calendar',
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'Unit Converter',
      item: 'https://getpracticaltools.com/unit-converter',
    },
    {
      '@type': 'ListItem',
      position: 11,
      name: 'Invoice Generator',
      item: 'https://getpracticaltools.com/invoice-generator',
    },
    {
      '@type': 'ListItem',
      position: 12,
      name: 'About',
      item: 'https://getpracticaltools.com/about',
    },
  ],
};
