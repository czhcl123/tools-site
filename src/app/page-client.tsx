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
  { path: '/qr-code-generator', zh: 'QR码生成器', en: 'QR Code Generator', descZh: '在线生成可下载二维码', descEn: 'Free QR code generator, no signup. PNG, SVG, PDF export.', icon: '📱', color: 'bg-rose-50 border-rose-200 hover:shadow-lg hover:shadow-rose-200/50 hover:-translate-y-0.5 hover:bg-rose-100' },
  { path: '/word-counter', zh: '字数统计', en: 'Word Counter', descZh: '中英文字数实时统计', descEn: 'Real-time word, character & reading time count.', icon: '📝', color: 'bg-indigo-50 border-indigo-200 hover:shadow-lg hover:shadow-indigo-200/50 hover:-translate-y-0.5 hover:bg-indigo-100' },
  { path: '/json-formatter', zh: 'JSON格式化', en: 'JSON Formatter', descZh: 'JSON格式化与验证', descEn: 'Format, validate & minify JSON in 1 click.', icon: '🔧', color: 'bg-emerald-50 border-emerald-200 hover:shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5 hover:bg-emerald-100' },
  { path: '/heic-to-jpg', zh: 'HEIC转JPG', en: 'HEIC to JPG', descZh: 'iPhone照片转JPG', descEn: 'Convert 100 iPhone HEIC photos to JPG in 30s, no upload.', icon: '🖼️', color: 'bg-pink-50 border-pink-200 hover:shadow-lg hover:shadow-pink-200/50 hover:-translate-y-0.5 hover:bg-pink-100' },
  { path: '/invoice-generator', zh: '发票生成器', en: 'Invoice Generator', descZh: '免费PDF发票', descEn: 'Free PDF invoice generator for freelancers.', icon: '📄', color: 'bg-amber-50 border-amber-200 hover:shadow-lg hover:shadow-amber-200/50 hover:-translate-y-0.5 hover:bg-amber-100' },
  // 5 existing tools
  { path: '/discount-calculator', zh: '折扣计算器', en: 'Discount Calculator', descZh: '计算折扣价、省钱金额', descEn: 'Calculate 30, 50, 70 percent off instantly.', icon: '🏷️', color: 'bg-orange-50 border-orange-200 hover:shadow-lg hover:shadow-orange-200/50 hover:-translate-y-0.5 hover:bg-orange-100' },
  { path: '/bmi-calculator', zh: 'BMI计算器', en: 'BMI Calculator', descZh: '身体质量指数计算', descEn: 'Calculate BMI from height & weight, metric/imperial.', icon: '⚖️', color: 'bg-blue-50 border-blue-200 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 hover:bg-blue-100' },
  { path: '/countdown', zh: '日期计算器', en: 'Date Calculator', descZh: '计算日期间隔与倒计时', descEn: 'Countdown to a date or count days since.', icon: '📅', color: 'bg-green-50 border-green-200 hover:shadow-lg hover:shadow-green-200/50 hover:-translate-y-0.5 hover:bg-green-100' },
  { path: '/lunar-calendar', zh: '农历转换', en: 'Lunar Calendar', descZh: '公历农历互转', descEn: 'Convert Gregorian to Chinese lunar, 1900-2100.', icon: '📆', color: 'bg-purple-50 border-purple-200 hover:shadow-lg hover:shadow-purple-200/50 hover:-translate-y-0.5 hover:bg-purple-100' },
  { path: '/unit-converter', zh: '单位换算', en: 'Unit Converter', descZh: '长度/重量/温度换算', descEn: 'cm to inches, kg to lb, °C to °F. 30+ units.', icon: '📐', color: 'bg-teal-50 border-teal-200 hover:shadow-lg hover:shadow-teal-200/50 hover:-translate-y-0.5 hover:bg-teal-100' },
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
      heroTitle: '免费在线计算工具 - 折扣 / BMI / QR 码 / 倒计时等 10 个工具',
      heroSubtitle: '10 个快速、免费的浏览器内计算与实用工具:折扣计算、BMI、倒计时、农历、单位换算、QR 码生成、字数统计、JSON 格式化、HEIC 转 JPG、发票生成。无需注册、无需下载、无跟踪,所有处理都在你的浏览器本地完成。',
      badgeFree: '完全免费',
      badgeSignup: '无需注册',
      badgePrivacy: '保护隐私',
      badgeBilingual: '中英双语',
      emptyText: '未找到相关工具',
      sitemapTitle: '网站地图',
    },
    en: {
      searchPlaceholder: 'Search calculators...',
      heroTitle: 'Free Online Calculators & Tools — Discount, BMI, QR Code & More',
      heroSubtitle: '10 fast, free, browser-based calculators and utilities: discount, BMI, countdown timer, lunar calendar, unit converter, QR code generator, word counter, JSON formatter, HEIC to JPG, and invoice generator. No signup, no download, no tracking. All processing runs in your browser.',
      badgeFree: '100% Free',
      badgeSignup: 'No Signup',
      badgePrivacy: 'Privacy First',
      badgeBilingual: 'Bilingual',
      emptyText: 'No results found',
      sitemapTitle: 'Sitemap',
      sectionWhatTitle: 'What you can do with Practical Tools',
      sectionWhatBody: 'Practical Tools is a curated set of 10 browser-based utilities for everyday calculations, conversions, and quick file tasks. The collection includes a discount calculator with stacked-discount support, a BMI calculator using the WHO formula, a date countdown with hour and minute precision, a Gregorian ↔ Chinese lunar (农历) converter, a multi-category unit converter, a QR code generator for URLs and contact cards, an invoice generator you can print to PDF, a JSON formatter that validates and minifies, a HEIC-to-JPG converter for iPhone photos, and a word counter that supports both English and Chinese text.',
      sectionWhoTitle: 'Who Practical Tools is for',
      sectionWhoBody: 'The tools serve shoppers comparing prices, students checking BMI, project managers tracking deadlines, bilingual users converting between Gregorian and lunar calendars, developers formatting JSON before commit, photographers converting HEIC images for sharing, freelancers writing invoices, and writers tracking word counts. Everything is built for fast, single-task use — open the page, do the work, close the tab.',
      sectionHowTitle: 'How it works',
      sectionHowBody: 'Every tool runs as a static Next.js page and executes entirely in your browser using client-side JavaScript. No accounts, no tracking pixels, no server-side processing of your inputs. Files such as HEIC images and JSON documents never leave your device. Once a tool page has loaded, it works offline as well, because the JavaScript is cached by your browser.',
      sectionTrustTitle: 'Why trust these results',
      sectionTrustBody: 'The discount, BMI, date, unit, and word-count calculators use standard published formulas. The lunar calendar converter is based on the Hong Kong Observatory ephemeris tables (see authoritative references below). The BMI calculator uses the WHO adult BMI classification thresholds established in 1995 and reaffirmed in 2004.',
      sectionAuthoritativeTitle: 'Authoritative references',
      sectionAuthoritativeBody: 'Our tools rely on these published standards and reference sources:',
      refWHO: 'World Health Organization — BMI classification',
      refHKO: 'Hong Kong Observatory — Lunar calendar ephemeris',
      refISO: 'ISO/IEC 18004:2015 — QR code standard',
      refNIST: 'NIST — International System of Units (SI)',
      sectionFaqTitle: 'Frequently asked questions',
      faq1Q: 'Is Practical Tools really free?',
      faq1A: 'Yes. All 10 tools are completely free with no premium tier, no usage limits, and no signup required.',
      faq2Q: 'Do you upload my files or data?',
      faq2A: 'No. Tools such as HEIC to JPG and JSON Formatter process your files entirely in your browser. Your data never leaves your device.',
      faq3Q: 'Can I use these tools offline?',
      faq3A: 'Yes. Once a page has loaded, the JavaScript is cached by your browser and the tool continues to work without an internet connection.',
      faq4Q: 'Do the tools support Chinese?',
      faq4A: 'Yes. Every tool page is available in English (default) and Simplified Chinese. Switch language with the ?lang=en or ?lang=zh query parameter.',
      faq5Q: 'How accurate are the calculations?',
      faq5A: 'Calculations follow published standards: WHO BMI thresholds, SI unit definitions, ISO/IEC 18004 for QR codes, and Hong Kong Observatory ephemeris for the lunar calendar.',
      sectionCtaTitle: 'Get started',
      sectionCtaBody: 'Pick a tool above and start working — no signup, no install, no waiting.',
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

        {/* SEO/GEO content sections - rendered only when not searching */}
        {!search && (
          <>
            {/* What you can do */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t.sectionWhatTitle}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{t.sectionWhatBody}</p>
            </section>

            {/* Who it is for */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t.sectionWhoTitle}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{t.sectionWhoBody}</p>
            </section>

            {/* How it works */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t.sectionHowTitle}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{t.sectionHowBody}</p>
            </section>

            {/* Why trust */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t.sectionTrustTitle}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{t.sectionTrustBody}</p>
            </section>

            {/* Authoritative references */}
            <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{t.sectionAuthoritativeTitle}</h2>
              <p className="text-sm text-gray-600 mb-3">{t.sectionAuthoritativeBody}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">
                    {t.refWHO} →
                  </a>
                </li>
                <li>
                  <a href="https://www.hko.gov.hk/en/gts/time/calendar/lunar.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">
                    {t.refHKO} →
                  </a>
                </li>
                <li>
                  <a href="https://www.iso.org/standard/62021.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">
                    {t.refISO} →
                  </a>
                </li>
                <li>
                  <a href="https://www.nist.gov/pml/weights-and-measures/metric-si/si-units" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">
                    {t.refNIST} →
                  </a>
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.sectionFaqTitle}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{t.faq1Q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.faq1A}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{t.faq2Q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.faq2A}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{t.faq3Q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.faq3A}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{t.faq4Q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.faq4A}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{t.faq5Q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.faq5A}</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center py-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">{t.sectionCtaTitle}</h2>
              <p className="text-sm text-gray-500">{t.sectionCtaBody}</p>
            </section>
          </>
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