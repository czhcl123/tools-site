import type { Metadata } from 'next'
import CountdownClient from '../../countdown/countdown-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: '日期计算器', en: 'Countdown Calculator - Days Until or Since Any Date' }
  const descriptions = {
    zh: '计算任意日期距离今天还有多少天，或已过去多少天。支持倒计时和日期差计算。',
    en: 'Free online countdown calculator. Find how many days until or since any date. Perfect for event planning, anniversaries, and deadlines.',
  }
  const ogTitles = { zh: '日期计算器 - 实用计算器', en: 'Countdown Calculator - Practical Tools' }
  const ogDescs = {
    zh: '计算任意日期距离今天还有多少天，或已过去多少天。支持倒计时和日期差计算。',
    en: 'Free online countdown calculator. Find how many days until or since any date. Perfect for event planning, anniversaries, and deadlines.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/countdown',
      languages: {
        'zh-CN': '/zh/countdown',
        'en-US': '/countdown',
        'x-default': '/countdown',
      },
    },
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '如何计算两个日期之间的天数?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '选择起始日期和结束日期，点击计算后会显示两者之间的天数差、周数、小时数。',
      },
    },
    {
      '@type': 'Question',
      name: '可以计算过去的日期吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。输入任一过去的日期，会显示距今已经过去多少天。',
      },
    },
    {
      '@type': 'Question',
      name: '能处理闰年吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '能。我们会根据公历计算，包括闰年、乔丐年。',
      },
    }
  ],
}

export default async function CountdownPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CountdownClient initialLang={lang} />
    </>
  )
}
