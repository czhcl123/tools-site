import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is lunar calendar?", "acceptedAnswer": {"@type": "Answer", "text": "Chinese calendar combining sun and moon cycles."}}, {"@type": "Question", "name": "Same dates every year?", "acceptedAnswer": {"@type": "Answer", "text": "No. Chinese New Year floats between late Jan and mid-Feb."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Lunar Calendar Converter Guide",
  "description": "How to convert solar dates to Chinese lunar dates and back. Includes Heavenly Stems, Chinese zodiac, solar terms, and real use cases.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-08-22",
  "dateModified": "2026-10-21",
  "author": {
    "@type": "Organization",
    "name": "Practical Tools",
    "url": "https://getpracticaltools.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Practical Tools",
    "logo": {
      "@type": "ImageObject",
      "url": "https://getpracticaltools.com/favicon.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getpracticaltools.com/blog/lunar-calendar"
  },
  "inLanguage": "en"
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '农历转换完全指南 — 公历农历互转'
      : 'Lunar Calendar Converter Guide',
    description: lang === 'zh'
      ? '公历转农历、农历转公历的完整教程,含天干地支、生肖、节气解读和使用场景。'
      : 'How to convert solar dates to Chinese lunar dates and back. Includes Heavenly Stems, Chinese zodiac, solar terms, and real use cases.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/lunar-calendar',
      languages: { 'en-US': '/blog/lunar-calendar', 'x-default': '/blog/lunar-calendar' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/lunar-calendar' },
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

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">农历 vs 公历：一张表看清楚</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-semibold text-gray-800">对比项</th>
                <th className="py-2 pr-3 font-semibold text-gray-800">公历（阳历）</th>
                <th className="py-2 font-semibold text-gray-800">农历（阴阳合历）</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">依据</td><td className="py-2 pr-3">地球绕太阳</td><td className="py-2">月亮盈亏 + 太阳回归年</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">一年长度</td><td className="py-2 pr-3">365 或 366 天</td><td className="py-2">354 或 384 天（有闰月）</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">月份</td><td className="py-2 pr-3">固定 12 个月，28–31 天</td><td className="py-2">12 或 13 个月，29–30 天</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">修正方式</td><td className="py-2 pr-3">每 4 年加 1 个闰日</td><td className="py-2">每 2–3 年加 1 个闰月</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">新年</td><td className="py-2 pr-3">固定 1 月 1 日</td><td className="py-2">浮动于 1 月下旬至 2 月中旬</td></tr>
              <tr><td className="py-2 pr-3">使用场景</td><td className="py-2 pr-3">国际通用、商业、行政</td><td className="py-2">传统节日、生肖、择日、八字</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">公历转农历的三步</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>确定目标公历年份对应的农历年范围（从该年春节开始，到次年春节前一天结束）</li>
          <li>判断该农历年是否有闰月——有闰月的年份共 13 个月，日期会整体后移</li>
          <li>按朔日（新月）定位月份，再按日序推算日期</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">
          手工做这三步很麻烦，所以实际都交给转换器。这也是为什么「1990 年农历八月十五是几号」这类问题，很少有人能心算出来。
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

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">什么是农历?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">中国传统历法，结合太阳和月亮运行周期。春节、中秋基于农历。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">农历每年一样吗?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">不一样。春节在 1 月下旬到 2 月中旬之间浮动。</dd>
        </div>
      </dl>

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

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Lunar vs Gregorian Calendar: Side by Side</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-semibold text-gray-800">Aspect</th>
                <th className="py-2 pr-3 font-semibold text-gray-800">Gregorian (solar)</th>
                <th className="py-2 font-semibold text-gray-800">Chinese lunar (lunisolar)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Based on</td><td className="py-2 pr-3">Earth orbiting the sun</td><td className="py-2">Moon phases, anchored to the solar year</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Year length</td><td className="py-2 pr-3">365 or 366 days</td><td className="py-2">354 or 384 days (with leap month)</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Months</td><td className="py-2 pr-3">Always 12, 28–31 days each</td><td className="py-2">12 or 13, 29–30 days each</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Correction</td><td className="py-2 pr-3">Leap day every 4 years</td><td className="py-2">Leap month every 2–3 years</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">New year</td><td className="py-2 pr-3">Fixed: January 1</td><td className="py-2">Floats between late January and mid-February</td></tr>
              <tr><td className="py-2 pr-3">Used for</td><td className="py-2 pr-3">Business, government, everything global</td><td className="py-2">Festivals, zodiac, auspicious dates, Bazi</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Converting Gregorian to Lunar in Three Steps</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Locate the lunar year that contains your date — it starts on that year's Chinese New Year and ends the day before the next one</li>
          <li>Check whether that lunar year has a leap month: a 13-month year shifts every later date by roughly a month</li>
          <li>Place the month by new moon, then count days forward from the first day of that month</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">
          That is exactly why nobody does it in their head. Questions like "what date was the Mid-Autumn Festival in 1990" are converter problems, not mental-math problems.
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

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What is the lunar calendar?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">A traditional Chinese calendar combining sun and moon cycles.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Are lunar dates the same every year?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">No. Chinese New Year floats between late January and mid-February.</dd>
        </div>
      </dl>

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '农历转换完全指南' : 'Chinese Lunar Calendar Converter Guide'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {lang === 'zh' ? '实用计算器' : 'Practical Tools'}
        {' · '}
        {lang === 'zh' ? '发布于' : 'Published'} 2026-08-22
        {' · '}
        {lang === 'zh' ? '更新于' : 'Updated'} 2026-10-21
      </p>
      {content[lang]}
    </div>
  )
}
