'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Footer from './Footer'

function ToolLayoutContent({
  lang: initialLang,
  seoBody,
  children,
}: {
  lang?: 'zh' | 'en'
  seoBody?: React.ReactNode
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const lang = (searchParams.get('lang') === 'zh' ? 'zh' : 'en') as 'zh' | 'en'
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-orange-500">
            {lang === 'zh' ? '🧮 实用计算器' : '🧮 Tools'}
          </Link>
          <Link
            href={pathname.startsWith('/zh') ? pathname.replace('/zh', '') || '/' : `/zh${pathname}`}
            className="text-sm px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧：SEO 说明文字 */}
          {seoBody && (
            <div className="lg:col-span-1">
              {seoBody}
            </div>
          )}

          {/* 右侧：工具本体 */}
          <div className={seoBody ? 'lg:col-span-2' : 'lg:col-span-3'}>
            {children}
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

export default function ToolLayout({
  lang,
  seoBody,
  children,
}: {
  lang?: 'zh' | 'en'
  seoBody?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ToolLayoutContent lang={lang} seoBody={seoBody} children={children} />
    </Suspense>
  )
}
