'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Footer from '../../components/Footer'

function AboutContent({ initialLang }: { initialLang?: 'zh' | 'en' }) {
  const searchParams = useSearchParams()
  const rawLang = searchParams.get('lang')
  const lang: 'zh' | 'en' = initialLang ?? (rawLang === 'zh' ? 'zh' : 'en')
  const nextLang: 'zh' | 'en' = lang === 'zh' ? 'en' : 'zh'

  const t = {
    zh: {
      title: '关于实用计算器',
      subtitle: '10 个快速、私密、免费的浏览器工具',
      missionTitle: '我们的使命',
      missionBody: '实用计算器的使命是提供一套真正保护用户隐私的日常工具。每个工具都完全在浏览器内运行,你的文件、输入和数据永远不会被上传到任何服务器。这不是营销噱头——这是网站的技术架构决定的。',
      privacyTitle: '隐私优先',
      privacyBody: '我们不收集任何用户数据、不设置追踪 cookie、不接入分析平台(除非完全匿名且本地聚合)。HEIC 转 JPG 和 JSON 格式化等工具使用客户端 JavaScript 库(libheif-js 等)处理你的文件,文件不经过我们的服务器。',
      techTitle: '技术栈',
      techBody: '本网站使用 Next.js 16 + React 19 + TypeScript 构建,部署在 Railway。所有页面都是静态生成或服务端渲染,但所有计算逻辑都在客户端执行。',
      contactTitle: '联系我们',
      contactBody: '如有问题、建议或合作需求,请通过以下方式联系:',
      contactEmail: '邮箱',
      backHome: '← 返回首页',
      lastUpdated: '最后更新',
      lastUpdatedDate: '2026 年 6 月 29 日',
    },
    en: {
      title: 'About Practical Tools',
      subtitle: '10 fast, private, free browser-based utilities',
      missionTitle: 'Our mission',
      missionBody: 'Practical Tools is a curated collection of everyday utilities designed to keep your data where it belongs — on your device. Every tool runs entirely in the browser. No files are uploaded, no inputs are logged, no accounts are created. This is not a marketing claim; it is enforced by the technical architecture of the site.',
      privacyTitle: 'Privacy by design',
      privacyBody: 'We do not collect user data, set tracking cookies, or run analytics that profile individuals. Tools such as HEIC to JPG and JSON Formatter use client-side JavaScript libraries (libheif-js and others) so that your files are processed locally and never traverse our servers.',
      techTitle: 'Technology stack',
      techBody: 'Practical Tools is built with Next.js 16, React 19, and TypeScript, and is deployed on Railway. All pages are either statically generated or server-rendered, but every calculation and every file conversion runs in the browser via client-side JavaScript.',
      contactTitle: 'Contact us',
      contactBody: 'For questions, suggestions, or business inquiries, reach us at:',
      contactEmail: 'Email',
      backHome: '← Back to home',
      lastUpdated: 'Last updated',
      lastUpdatedDate: 'June 29, 2026',
    },
  }[lang]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href={`/?lang=${lang}`} className="flex-shrink-0 flex items-center gap-1.5 text-base font-bold text-orange-500 hover:text-orange-600 transition-colors">
            <span className="text-xl">🧮</span>
            <span className="hidden sm:inline text-sm">{lang === 'zh' ? '实用计算器' : 'Practical Tools'}</span>
          </Link>
          <div className="flex-1" />
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
        <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-sm text-gray-600">{t.subtitle}</p>
        </section>

        <article className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t.missionTitle}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{t.missionBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t.privacyTitle}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{t.privacyBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t.techTitle}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{t.techBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t.contactTitle}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.contactBody}</p>
            <ul className="text-sm space-y-1">
              <li>
                <strong className="text-gray-800">{t.contactEmail}:</strong>{' '}
                <a href="mailto:contact@tools-site-production.up.railway.app" className="text-orange-600 hover:underline">
                  contact@tools-site-production.up.railway.app
                </a>
              </li>
            </ul>
          </section>

          <section className="pt-4 border-t border-gray-100 text-xs text-gray-400">
            <p>{t.lastUpdated}: {t.lastUpdatedDate}</p>
          </section>
        </article>

        <div className="text-center">
          <Link href={`/?lang=${lang}`} className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
            {t.backHome}
          </Link>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

export default function AboutClient({ initialLang }: { initialLang?: 'zh' | 'en' }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <AboutContent initialLang={initialLang} />
    </Suspense>
  )
}