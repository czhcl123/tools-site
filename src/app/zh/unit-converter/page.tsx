import type { Metadata } from 'next'
import UnitConverterClient from '../../unit-converter/converter-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: '单位换算器', en: 'Unit Converter - Length, Weight, Temperature' }
  const descriptions = {
    zh: '长度、重量、温度单位快速互转。支持米、厘米、公斤、磅、摄氏度、华氏度等单位之间的换算。',
    en: 'Free online unit converter. Instantly convert length (m, cm, in, ft), weight (kg, lb, oz), temperature (C, F, K), and more. No signup.',
  }
  const ogTitles = { zh: '单位换算器 - 实用计算器', en: 'Unit Converter - Practical Tools' }
  const ogDescs = {
    zh: '长度、重量、温度单位快速互转。支持米、厘米、公斤、磅、摄氏度、华氏度等单位之间的换算。',
    en: 'Free online unit converter. Instantly convert length (m, cm, in, ft), weight (kg, lb, oz), temperature (C, F, K), and more. No signup.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/unit-converter',
      languages: {
        'zh-CN': '/zh/unit-converter',
        'en-US': '/unit-converter',
        'x-default': '/unit-converter',
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
      name: '支持哪些单位?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '长度：米、厘米、公里、英里、英寸、英尺。重量：公斤、千克、磅、直衡直帆。温度：摄氏度、华氏度、开尔文。',
      },
    },
    {
      '@type': 'Question',
      name: '转换结果准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '准确。我们使用国际标准的单位换算公式。',
      },
    }
  ],
}

export default async function UnitConverterPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UnitConverterClient initialLang={lang} />
    </>
  )
}