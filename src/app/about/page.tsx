import type { Metadata } from 'next'
import Link from 'next/link'
import AboutClient from './about-client'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '了解实用计算器的使命和理念：10 个完全本地处理的免费在线工具，涵盖折扣计算、BMI、倒计时、农历转换等实用功能。无需注册、无广告、数据不上传，保护你的隐私安全。',
    en: 'About Practical Tools',
  }
  const descriptions = {
    zh: '了解实用计算器的使命、技术栈和联系方式。10 个完全本地处理的浏览器工具,保护您的隐私。',
    en: 'Learn about Practical Tools: our mission, privacy-first approach, and the 10 browser-based calculators that run entirely on your device.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      type: 'profile',
      url: 'https://tools-site-production.up.railway.app/about',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/about',
      languages: {
        'en-US': '/about',
        'zh-CN': '/zh/about',
        'x-default': '/about',
      },
    },
  }
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return <AboutClient initialLang={lang} />
}