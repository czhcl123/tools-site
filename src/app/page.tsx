import type { Metadata } from 'next'
import HomePageClient from './page-client'

export const dynamic = 'force-dynamic'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Practical Tools really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All 10 tools are completely free with no premium tier, no usage limits, and no signup required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you upload my files or data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tools such as HEIC to JPG and JSON Formatter process your files entirely in your browser. Your data never leaves your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these tools offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once a page has loaded, the JavaScript is cached by your browser and the tool continues to work without an internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the tools support Chinese?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every tool page is available in English (default) and Simplified Chinese. Switch language with the ?lang=en or ?lang=zh query parameter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate are the calculations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Calculations follow published standards: WHO BMI thresholds, SI unit definitions, ISO/IEC 18004 for QR codes, and Hong Kong Observatory ephemeris for the lunar calendar.',
      },
    },
  ],
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: { default: '实用计算器 - 在线工具箱', template: '%s | 实用计算器' },
    en: { default: 'Practical Tools - Free Online Calculators', template: '%s | Practical Tools' },
  }
  const descriptions = {
    zh: '提供折扣计算器、BMI计算器、日期计算器、农历转换、单位换算等实用在线工具，无需下载，打开即用。',
    en: 'Free online calculators: discount, BMI, date countdown, lunar calendar, unit converter. No download needed, works instantly.',
  }

  return {
    title: { default: titles[lang].default, template: titles[lang].template },
    description: descriptions[lang],
    openGraph: {
      title: titles[lang].default,
      description: descriptions[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app',
      languages: {
        'zh-CN': '/?lang=zh',
        'en-US': '/?lang=en',
        'x-default': '/',
      },
    },
  }
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient initialLang={lang} />
    </>
  )
}