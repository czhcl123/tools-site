import type { Metadata } from 'next'
import LunarCalendarClient from '../../lunar-calendar/lunar-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: '农历转换器', en: 'Lunar Calendar Converter - Solar to Lunar Date Tool' }
  const descriptions = {
    zh: '快速转换公历与农历日期，支持查看任意日期的农历信息，中英文免费使用。',
    en: 'Free online lunar calendar converter. Convert between Gregorian (solar) and Chinese lunar dates. See zodiac years, traditional festivals, and stem-branch info for any date.',
  }
  const ogTitles = { zh: '农历转换器 - 实用计算器', en: 'Lunar Calendar Converter - Practical Tools' }
  const ogDescs = {
    zh: '快速转换公历与农历日期，支持查看任意日期的农历信息，中英文免费使用。',
    en: 'Free online lunar calendar converter. Convert between Gregorian (solar) and Chinese lunar dates. See zodiac years, traditional festivals, and stem-branch info for any date.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/lunar-calendar',
      languages: {
        'zh-CN': '/zh/lunar-calendar',
        'en-US': '/lunar-calendar',
        'x-default': '/lunar-calendar',
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
      name: '农历和公历有什么区别?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '公历是根据地球公转计算的日期系统，农历是依据月相变化的传统日期系统。两者一年大约相差11天。',
      },
    },
    {
      '@type': 'Question',
      name: '如何查看某一天的农历?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '输入公历日期，点击转换后会显示对应农历、生肖、干支等信息。',
      },
    },
    {
      '@type': 'Question',
      name: '农历转换器准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '依据标准农历算法，准确度高。但需注意农历月可能有闰月。',
      },
    }
  ],
}

export default async function LunarCalendarPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LunarCalendarClient initialLang={lang} />
    </>
  )
}