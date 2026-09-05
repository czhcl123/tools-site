import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '农历转换完全指南 — 公历农历互转'
      : 'Chinese Lunar Calendar Converter Guide — Solar to Lunar Date',
    description: lang === 'zh'
      ? '公历转农历、农历转公历的完整教程,含天干地支、生肖、节气解读和使用场景。'
      : 'How to convert solar dates to Chinese lunar dates and back. Includes Heavenly Stems, Chinese zodiac, solar terms, and real use cases.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/lunar-calendar',
      languages: { 'en-US': '/blog/lunar-calendar', 'x-default': '/blog/lunar-calendar' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/lunar-calendar' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">农历和公历的区别</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          公历（阳历）是国际通用的太阳历,一年 365/366 天。农历（阴历）是中国传统历法,实际上是阴阳合历——月份按月亮周期（29.5 天）,年份通过闰月对齐太阳年。所以农历和公历的日期每年都在变。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么要查农历?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>传统节日</strong>:春节、元宵、端午、中秋、重阳都是农历日期。<strong>生日</strong>:很多老人只记农历生日。<strong>择日</strong>:搬家、结婚、开业,传统上要选农历黄道吉日。<strong>命理</strong>:八字算命需要农历出生日期。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">天干地支和生肖</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          每个农历年都有天干地支纪年(如"甲辰年")和对应的生肖(如"龙年")。天干 10 个、地支 12 个,60 年一循环(六十甲子)。你的出生年份对应一个天干地支组合,这就是"八字"中的年柱。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">节气是什么?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          节气是根据太阳在黄道上的位置划分的 24 个时间节点,反映季节变化。立春(2 月 3-5 日)是农历新年的天文标志。节气在农历中很重要,影响农业生产和中医养生。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何使用农历转换器</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          输入公历日期(如 2026-01-29),计算器返回对应的农历日期(如乙巳年正月初一)。也支持反向查询:输入农历日期,得到公历。一秒钟搞定,不用翻万年历。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → 立即使用农历转换器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Lunar vs. Solar Calendar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The solar (Gregorian) calendar is the international standard: 365/366 days per year. The Chinese lunar calendar is actually a lunisolar calendar — months follow the moon cycle (29.5 days), while the year is aligned to the solar year through leap months. That's why lunar dates shift every year relative to the solar calendar.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need Lunar Date Conversion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Traditional festivals</strong>: Chinese New Year, Lantern Festival, Dragon Boat Festival, Mid-Autumn, and Double Ninth are all on lunar dates. <strong>Birthdays</strong>: many older Chinese people only remember their lunar birthday. <strong>Auspicious dates</strong>: moving, weddings, and business openings traditionally follow the lunar calendar. <strong>Chinese astrology (Bazi)</strong>: requires the lunar birth date.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Heavenly Stems and Chinese Zodiac</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each lunar year has a Heavenly Stem + Earthly Branch combination (e.g., "Jia Chen" for 2024) paired with a zodiac animal (Dragon). The 10 stems and 12 branches cycle every 60 years (the Sexagenary cycle). Your birth year determines one of the four pillars in Bazi astrology.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Are Solar Terms (Jieqi)?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Solar terms are 24 points along the sun's ecliptic path, marking seasonal changes. Start of Spring (Lichun, Feb 3-5) is the astronomical marker for the new year. Solar terms are crucial in the lunar calendar for agriculture and Traditional Chinese Medicine.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use the Lunar Calendar Converter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter a solar date (e.g., 2026-01-29), and the converter returns the corresponding lunar date (e.g., first day of the first lunar month, Year of the Snake). It also works in reverse: enter a lunar date to get the solar equivalent. Instant, no need to flip through a perpetual calendar.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → Try the Lunar Calendar Converter Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '农历转换完全指南' : 'Chinese Lunar Calendar Converter Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
