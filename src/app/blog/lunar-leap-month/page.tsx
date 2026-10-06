import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '农历闰月：为什么有的年份有 13 个月'
      : 'Leap Months in the Lunar Calendar: Why Some Years Have 13 Months',
    description: lang === 'zh'
      ? '农历为什么会有闰月？闰月怎么定、多久一次、对节日和生日有什么影响，一篇文章讲清楚。'
      : 'Why the Chinese lunar calendar inserts leap months, how they are decided, how often they occur, and what they mean for festivals and birthdays.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/lunar-leap-month',
      languages: { 'en-US': '/blog/lunar-leap-month', 'x-default': '/blog/lunar-leap-month' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/lunar-leap-month' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How often does a leap month occur?", "acceptedAnswer": {"@type": "Answer", "text": "Roughly seven times every 19 years. A leap month appears about every two to three years on average."}}, {"@type": "Question", "name": "Which year is the next leap month?", "acceptedAnswer": {"@type": "Answer", "text": "Use a lunar calendar converter to check any year — it shows the leap month (闰月) directly for the Chinese calendar in use."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">月亮和太阳对不上</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          农历（夏历）是阴阳合历：月份跟着月亮走，一年跟着太阳走。一个朔望月约 29.53 天，12 个月约 354 天；而太阳年约 365.24 天。两者每年差 11 天左右。如果不处理，32 年后农历正月会跑到夏天去，节日和季节就彻底脱节了。闰月就是用来补这个差额的。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">闰月是怎么定出来的</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          规则可以概括成一句话：<strong>十九年七闰，无中气置闰</strong>。农历把 24 个节气分成「节气」和「中气」两组，每月应该包含一个中气。当某一年出现 13 个月、且其中一个月完全没有中气时，这个月就被定为闰月，跟在前一个月后面，叫「闰几月」。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          为什么是 19 年？因为 19 个太阳年和 235 个朔望月几乎等长（误差只有 2 小时），所以 19 年里加 7 个闰月，农历日期和季节就能重新对齐。这个周期叫「默冬章」，公元前 432 年就被希腊天文学家发现了，中国独立推导出的「章法」与之殊途同归。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">闰月对生活的影响</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>传统节日</strong>：闰月里通常不过节。民间有「闰月不宜嫁娶」「闰月不过生日」的说法，各地习俗不同，信不信随你，但安排大事前查一下农历很有必要</li>
          <li><strong>生肖属相</strong>：按农历年算属相，闰月出生的人属相跟着前一个月份走，民间有两种算法，没有统一标准</li>
          <li><strong>二十四节气</strong>：节气属于阳历部分，完全不受闰月影响，农事照常</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">怎么查某一年有没有闰月</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不用背规则，用农历转换工具输入公历年份，结果里直接标注「闰几月」。比如 2023 年是闰二月，2025 年是闰六月，2028 年是闰五月。换算公历和农历日期、查某天对应的农历，也都在同一个工具里完成。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">闰月多少年出现一次？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">平均两到三年一次，19 年里出现 7 次。最近的例子：2020 闰四月、2023 闰二月、2025 闰六月。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">闰月里的节日算哪天过？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">各地风俗不一样。多数地区闰月不过传统节日；也有人按正常月份的日期过。提前用转换工具确认日期最稳妥。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → 用农历转换工具查任意年份的闰月
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Moon and the Sun Don't Line Up</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Chinese lunisolar calendar tracks two things at once: months follow the moon, years follow the sun. A synodic month runs about 29.53 days, so 12 lunar months total roughly 354 days — while the solar year is about 365.24 days. The gap is around 11 days a year. Left alone, the lunar new year would drift into summer within three decades, and festivals would detach from the seasons entirely. The leap month exists to close that gap.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How a Leap Month Is Decided</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The rule compresses into one line: <strong>seven leap months every 19 years, assigned where no major solar term falls</strong>. The calendar splits its 24 solar terms into two alternating groups, and every lunar month is supposed to contain one "major term" (中气). When a year carries 13 months and one of them contains no major term at all, that month becomes the leap month — named after the month it follows, as "leap second month," "leap sixth month," and so on.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Why 19 years? Because 19 solar years and 235 lunations differ by only about two hours, so inserting seven leap months in that span realigns lunar dates with the seasons. Astronomers call it the Metonic cycle; Chinese calendar scholars derived the same structure independently as the "chapter" system (章法).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Leap Months Mean for Daily Life</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Festivals</strong>: traditional holidays are usually skipped in leap months. Folk customs advise against weddings or birthdays in a leap month — traditions vary by region, but checking the calendar before booking anything big is practical</li>
          <li><strong>Chinese zodiac year</strong>: zodiac signs follow the lunar year, so a baby born in a leap month takes the sign of the preceding month; two folk counting methods exist and neither is official</li>
          <li><strong>Solar terms</strong>: terms belong to the solar half of the calendar and are untouched by leap months — farming schedules proceed as normal</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Check Any Year for a Leap Month</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          No need to memorize rules. Enter a Gregorian year into a lunar calendar converter and the result labels the leap month directly — 2023 had a leap second month, 2025 a leap sixth month, 2028 a leap fifth month. Converting dates both ways and looking up the lunar date for any day live in the same tool.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How often do leap months come around?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">On average every two to three years, seven times per 19-year cycle. Recent examples: leap fourth month 2020, leap second month 2023, leap sixth month 2025.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Do festivals in a leap month count?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Customs differ by region. Most areas skip traditional holidays during a leap month; others celebrate on the normal date. Confirming with a converter is the safe move.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → Look up the leap month for any year with the Lunar Calendar Converter
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '农历闰月：为什么有的年份有 13 个月' : 'Leap Months in the Lunar Calendar: Why Some Years Have 13 Months'}
      </h1>
      {content[lang]}
    </div>
  )
}
