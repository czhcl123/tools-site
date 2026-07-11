import type { Metadata } from 'next'
import Link from 'next/link'
import AboutClient from '../../about/about-client'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = {
    zh: '关于我们 - 实用计算器',
    en: 'About Practical Tools',
  }
  const descriptions = {
    zh: '了解实用计算器的使命、技术栈和联系方式。10 个完全本地处理的浏览器工具,保护您的隐私。',
    en: 'Learn about Practical Tools: mission, technology stack, contact information, and our privacy-first approach. 10 browser-based utilities that run entirely on your device.',
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
      canonical: 'https://tools-site-production.up.railway.app/zh/about',
      languages: {
        'en-US': 'https://tools-site-production.up.railway.app/about?lang=en',
        'zh-CN': 'https://tools-site-production.up.railway.app/about?lang=zh',
        'x-default': 'https://tools-site-production.up.railway.app/about',
      },
    },
  }
}

export default async function AboutPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return <AboutClient initialLang={lang} />
}