import type { Metadata } from 'next'
import HomePageClient from '../page-client'

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
  
}) {
  const lang = 'zh'

  const titles = {
    zh: { default: '实用计算器 - 10 个免费在线工具,即开即用', template: '%s | 实用计算器' },
    en: { default: 'Practical Tools — 10 Free Online Calculators & Utilities', template: '%s | Practical Tools' },
  }
  const descriptions = {
    zh: '10 个免费在线工具:折扣计算、BMI、倒计时、农历、单位换算、QR 码、字数统计、JSON 格式化、HEIC 转 JPG、发票生成。无需注册,无需下载,所有处理在浏览器本地完成。',
    en: '10 free online calculators and utilities — discount, BMI, countdown, lunar calendar, unit converter, QR code, word counter, JSON formatter, HEIC to JPG, invoice generator. No signup, no download, no tracking. All processing runs in your browser.',
  }

  return {
    title: { default: titles[lang].default, template: titles[lang].template },
    description: descriptions[lang],
    openGraph: {
      title: titles[lang].default,
      description: descriptions[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh',
      languages: {
        'zh-CN': '/zh',
        'en-US': '/',
        'x-default': '/',
      },
    },
  }
}

export default async function HomePage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
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