import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? '农历与节日：中国传统历法详解' : 'Chinese Lunar Calendar Traditions',
    description: lang === 'zh' ? '农历原理、闰月规则、传统节日日期,以及如何用农历转换器查询。' : 'Lunar calendar principles, leap month rules, traditional festival dates, and how to use a lunar converter.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/lunar-calendar-traditions',
      languages: { 'en-US': '/blog/lunar-calendar-traditions', 'x-default': '/blog/lunar-calendar-traditions' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/lunar-calendar-traditions' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">农历是什么?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          农历(Chinese Lunar Calendar)是中国传统的阴阳合历。<strong>月份按月相变化</strong>(朔望月约29.5天),年份通过闰月调整与太阳年同步。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">闰月规则</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          农历采用"19年7闰"的规则:在19年中插入7个闰月,使农历年平均长度接近太阳年。闰月出现在哪个月由"中气"决定。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">主要传统节日</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>春节</strong> — 农历正月初一(1月/2月)</li>
          <li><strong>元宵节</strong> — 正月十五</li>
          <li><strong>清明节</strong> — 公历4月4-6日</li>
          <li><strong>端午节</strong> — 五月初五(6月)</li>
          <li><strong>中秋节</strong> — 八月十五(9月/10月)</li>
          <li><strong>重阳节</strong> — 九月初九(10月)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">干支纪年</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          农历使用天干地支组合纪年,60年一循环。2024年是甲辰年(龙年),2025年是乙巳年(蛇年)。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → 查询任意日期的农历
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What is the Lunar Calendar?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Chinese Lunar Calendar is a traditional lunisolar calendar. <strong>Months follow lunar phases</strong> (synodic month ~29.5 days), with leap months added to synchronize with the solar year.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Leap Month Rules</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The calendar uses a "19-year, 7-leap" rule: 7 leap months are inserted over 19 years to keep the average year length close to the solar year.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Major Traditional Festivals</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Spring Festival</strong> — Lunar New Year (Jan/Feb)</li>
          <li><strong>Lantern Festival</strong> — 15th of first lunar month</li>
          <li><strong>Qingming</strong> — April 4-6 (solar)</li>
          <li><strong>Dragon Boat Festival</strong> — 5th of 5th month (June)</li>
          <li><strong>Mid-Autumn Festival</strong> — 15th of 8th month (Sep/Oct)</li>
          <li><strong>Double Ninth Festival</strong> — 9th of 9th month (Oct)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Heavenly Stems and Earthly Branches</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The calendar uses a 60-year cycle combining Heavenly Stems and Earthly Branches. 2024 is the Year of the Dragon, 2025 is the Year of the Snake.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → Look Up Any Date's Lunar Equivalent
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '农历与传统节日' : 'Lunar Calendar and Traditions'}
      </h1>
      {content[lang]}
    </div>
  )
}
