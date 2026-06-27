'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Footer from '../components/Footer'

type Tool = {
  path: string
  zh: string
  en: string
  descZh: string
  descEn: string
  icon: string
  color: string
}

const TOOLS: Tool[] = [
  // 5 new tools first (demo order)
  { path: '/qr-code-generator', zh: 'QR码生成器', en: 'QR Code Generator', descZh: '在线生成可下载二维码', descEn: 'Generate downloadable QR codes', icon: '📱', color: 'bg-rose-50 border-rose-200 hover:shadow-lg hover:shadow-rose-200/50 hover:-translate-y-0.5 hover:bg-rose-100' },
  { path: '/word-counter', zh: '字数统计', en: 'Word Counter', descZh: '中英文字数实时统计', descEn: 'Real-time word & char count', icon: '📝', color: 'bg-indigo-50 border-indigo-200 hover:shadow-lg hover:shadow-indigo-200/50 hover:-translate-y-0.5 hover:bg-indigo-100' },
  { path: '/json-formatter', zh: 'JSON格式化', en: 'JSON Formatter', descZh: 'JSON格式化与验证', descEn: 'Format & validate JSON', icon: '🔧', color: 'bg-emerald-50 border-emerald-200 hover:shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5 hover:bg-emerald-100' },
  { path: '/heic-to-jpg', zh: 'HEIC转JPG', en: 'HEIC to JPG', descZh: 'iPhone照片转JPG', descEn: 'iPhone photos to JPG', icon: '🖼️', color: 'bg-pink-50 border-pink-200 hover:shadow-lg hover:shadow-pink-200/50 hover:-translate-y-0.5 hover:bg-pink-100' },
  { path: '/invoice-generator', zh: '发票生成器', en: 'Invoice Generator', descZh: '免费PDF发票', descEn: 'Free PDF invoices', icon: '📄', color: 'bg-amber-50 border-amber-200 hover:shadow-lg hover:shadow-amber-200/50 hover:-translate-y-0.5 hover:bg-amber-100' },
  // 5 existing tools
  { path: '/discount-calculator', zh: '折扣计算器', en: 'Discount Calculator', descZh: '计算折扣价、省钱金额', descEn: 'Calculate discounted price & savings', icon: '🏷️', color: 'bg-orange-50 border-orange-200 hover:shadow-lg hover:shadow-orange-200/50 hover:-translate-y-0.5 hover:bg-orange-100' },
  { path: '/bmi-calculator', zh: 'BMI计算器', en: 'BMI Calculator', descZh: '身体质量指数计算', descEn: 'Body Mass Index calculation', icon: '⚖️', color: 'bg-blue-50 border-blue-200 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 hover:bg-blue-100' },
  { path: '/countdown', zh: '日期计算器', en: 'Date Calculator', descZh: '计算日期间隔与倒计时', descEn: 'Calculate days between dates', icon: '📅', color: 'bg-green-50 border-green-200 hover:shadow-lg hover:shadow-green-200/50 hover:-translate-y-0.5 hover:bg-green-100' },
  { path: '/lunar-calendar', zh: '农历转换', en: 'Lunar Calendar', descZh: '公历农历互转', descEn: 'Convert between lunar & solar', icon: '📆', color: 'bg-purple-50 border-purple-200 hover:shadow-lg hover:shadow-purple-200/50 hover:-translate-y-0.5 hover:bg-purple-100' },
  { path: '/unit-converter', zh: '单位换算', en: 'Unit Converter', descZh: '长度/重量/温度换算', descEn: 'Length/weight/temperature conversion', icon: '📐', color: 'bg-teal-50 border-teal-200 hover:shadow-lg hover:shadow-teal-200/50 hover:-translate-y-0.5 hover:bg-teal-100' },
]

function HomePageContent({ initialLang }: { initialLang?: 'zh' | 'en' }) {
  const searchParams = useSearchParams()
  const rawLang = searchParams.get('lang')
  const lang: 'zh' | 'en' = initialLang ?? (rawLang === 'en' ? 'en' : 'zh')
  const nextLang: 'zh' | 'en' = lang === 'zh' ? 'en' : 'zh'
  const [search, setSearch] = useState('')

  const filtered = TOOLS.filter((tool) => {
    const q = search.toLowerCase()
    if (!q) return true
    return (
      tool.zh.toLowerCase().includes(q) ||
      tool.en.toLowerCase().includes(q) ||
      tool.descZh.toLowerCase().includes(q) ||
      tool.descEn.toLowerCase().includes(q)
    )
  })

  const t = {
    zh: {
      searchPlaceholder: '搜索工具...',
      heroTitle: '10 个免费在线工具',
      heroSubtitle: '免费、无需注册、数据本地处理。所有计算在你浏览器内完成,不上传任何服务器。',
      badgeFree: '完全免费',
      badgeSignup: '无需注册',
      badgePrivacy: '保护隐私',
      badgeBilingual: '中英双语',
      emptyText: '未找到相关工具',
      sitemapTitle: '网站地图',
    },
    en: {
      searchPlaceholder: 'Search tools...',
      heroTitle: '10 Free Online Tools',
      heroSubtitle: 'Free, no signup, all data processed locally. Everything runs in your browser — nothing is uploaded.',
      badgeFree: '100% Free',
      badgeSignup: 'No Signup',
      badgePrivacy: 'Privacy First',
      badgeBilingual: 'Bilingual',
      emptyText: 'No tools found',
      sitemapTitle: 'Sitemap',
    },
  }[lang]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href={`/?lang=${lang}`} className="flex-shrink-0 flex items-center gap-1.5 text-base font-bold text-orange-500 hover:text-orange-600 transition-colors">
            <span className="text-xl">🧮</span>
            <span className="hidden sm:inline text-sm">{lang === 'zh' ? '实用计算器' : 'Practical Tools'}</span>
          </Link>
          <div className="relative flex-1 min-w-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none select-none">🔍</span>
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white focus:border-orange-300 focus:shadow-md"
            />
          </div>
          <Link
            href={`/?lang=${nextLang}`}
            title={lang === 'zh' ? 'Switch to English' : '切换到中文'}
            className="flex-shrink-0 flex items-center gap-1 text-xs px-3 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-orange-300 transition-colors"
          >
            <span>🌐</span>
            <span className="hidden sm:inline">{lang === 'zh' ? 'EN' : '中文'}</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Hero section */}
        {!search && (
          <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
            <div className="text-center">
              <div className="text-3xl mb-2">🧮</div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{t.heroTitle}</h1>
              <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed">{t.heroSubtitle}</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-3 py-1 bg-white border border-orange-200 text-orange-600 rounded-full">✓ {t.badgeFree}</span>
                <span className="px-3 py-1 bg-white border border-orange-200 text-orange-600 rounded-full">✓ {t.badgeSignup}</span>
                <span className="px-3 py-1 bg-white border border-orange-200 text-orange-600 rounded-full">✓ {t.badgePrivacy}</span>
                <span className="px-3 py-1 bg-white border border-orange-200 text-orange-600 rounded-full">✓ {t.badgeBilingual}</span>
              </div>
            </div>
          </section>
        )}

        {/* Unified tool grid - 3 cols on large, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((tool, i) => (
            <Link
              key={tool.path}
              href={`${tool.path}?lang=${lang}`}
              className={`block p-4 rounded-xl border transition-all ${tool.color} shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] ${
                i === filtered.length - 1 && filtered.length % 3 === 1 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="text-2xl mb-2">{tool.icon}</div>
              <div className="font-semibold text-gray-800">{lang === 'zh' ? tool.zh : tool.en}</div>
              <div className="text-sm text-gray-500 mt-0.5">{lang === 'zh' ? tool.descZh : tool.descEn}</div>
            </Link>
          ))}
        </div>

        {search && filtered.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-12">{t.emptyText}</p>
        )}

        {/* Sitemap */}
        <section className="border-t border-gray-200 pt-6">
          <h2 className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">{t.sitemapTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
            {TOOLS.map((tool) => (
              <Link
                key={tool.path}
                href={`${tool.path}?lang=${lang}`}
                className="text-sm text-gray-500 hover:text-orange-500 transition-colors py-0.5"
              >
                {tool.icon} {lang === 'zh' ? tool.zh : tool.en}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

export default function HomePageClient({ initialLang }: { initialLang?: 'zh' | 'en' }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <HomePageContent initialLang={initialLang} />
    </Suspense>
  )
}