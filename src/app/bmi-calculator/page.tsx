import type { Metadata } from 'next'
import BmiCalculatorClient from './bmi-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: 'BMI 计算器 — 男女标准，亚州人多指标、中英文、最高准确度',
    en: 'BMI Calculator — Women, Men & Asian Ranges, Metric & Imperial, Free',
  }
  const descriptions = {
    zh: '免费在线 BMI 计算器,男女不同标准,支持亚州人阈值(cm/kg)。含 BMI 范围表、健康状态解读、中英文双版,无需注册即可使用。',
    en: "Free BMI calculator with separate women, men, and Asian thresholds. Metric (cm/kg) and imperial (ft/lb) units. Includes age adjustment, healthy BMI range table, and instant result. No signup.",
  }
  const ogTitles = { zh: 'BMI计算器 - 实用计算器', en: 'BMI Calculator - Practical Tools' }
  const ogDescs = {
    zh: '快速计算身体质量指数（BMI），判断体重是否健康，支持中英文，免费使用。',
    en: "Free online BMI calculator. Compute your Body Mass Index instantly and see if you're in the healthy weight range. Supports metric and imperial units. No signup.",
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/bmi-calculator' : '/bmi-calculator'}`,
      languages: {
        'zh-CN': '/zh/bmi-calculator',
        'en-US': '/bmi-calculator',
        'x-default': '/bmi-calculator',
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
      name: 'BMI是什么?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI(Body Mass Index,身体质量指数)是国际上常用的衡量人体胖瘦程度的标准,计算公式为:体重(kg) ÷ 身高(m)的平方。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI正常范围是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '对于亚洲成年人,BMI 18.5-23.9 为正常范围,低于18.5为偏瘦,24.0-27.9为偏胖,28.0及以上为肥胖。不同人种标准略有差异。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI能完全反映健康状况吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI只是一个参考指标,不能完全反映健康状况。它没有考虑肌肉量、骨密度、年龄、性别等因素。建议结合腰围、体脂率等其他指标综合判断。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI计算器支持词与千克吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '支持。可输入身高(cm)、体重(kg)。也可以切换到英制单位(英寸、磅)。',
      },
    }
  ],
}

export default async function BmiCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BmiCalculator initialLang={lang} />
    </>
  )
}
