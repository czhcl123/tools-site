import type { Metadata } from 'next'
import LunarCalendar from './lunar-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '农历转换器 - 公历转农历日期查询|实用计算器',
    en: 'Gregorian to Lunar Calendar Converter 2026 - Free Online Tool',
  }
  const descriptions = {
    zh: '免费公历农历双向转换工具:输入日期即可查询农历、生肖、干支、传统节日,覆盖 1900-2100 年,无需注册。',
    en: 'Free Gregorian to lunar calendar converter. Convert any date to Chinese lunar with zodiac, stem-branch, and festival info. 1900-2100 range, no signup needed.',
  }
  const ogTitles = { zh: '农历转换器 - 实用计算器', en: 'Lunar Calendar Converter - Practical Tools' }
  const ogDescs = {
    zh: '免费公历农历双向转换,生肖干支节日查询',
    en: 'Convert Gregorian dates to Chinese lunar. Free online lunar calendar tool.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/lunar-calendar' : '/lunar-calendar'}`,
      languages: {
        'zh-CN': '/zh/lunar-calendar',
        'en-US': '/lunar-calendar',
        'x-default': '/lunar-calendar',
      },
    },
  }
}

const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '农历和公历有什么区别?为什么一年差好几天?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '公历是太阳历,依据地球绕太阳一圈(365.2425 天)分 12 个月。农历是阴阳合历,月份按月相(月亮绕地球一圈 29.5 天),年按太阳回归,所以一年约 354 天,比公历短 11 天。农历通过"每 2-3 年加一个闰月"调和这个差,所以农历年有时 12 个月(353-355 天),有时 13 个月(383-385 天)。',
      },
    },
    {
      '@type': 'Question',
      name: '生肖和干支是怎么算的?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '生肖对应农历"年",每 12 年一轮(子鼠、丑牛、寅虎...).干支是 60 年一轮(甲子、乙丑、丙寅...),10 天干 × 12 地支配对。本工具按农历新年(正月初一)计算生肖,而非公历 1 月 1 日,所以 2026 年 1 月出生属蛇(乙巳年尾),2 月起属马(丙午年)。生日 / 命运查询常按此口径。',
      },
    },
    {
      '@type': 'Question',
      name: '传统节日(春节、中秋)按农历怎么查?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '本工具输入任一公历日期,会显示当天的农历 + 是否为传统节日 + 该节日的农历日期。常见节日自动识别:春节(正月初一)、元宵(正月十五)、端午(五月初五)、七夕(七月初七)、中秋(八月十五)、重阳(九月初九)。也可反向:输入"农历八月十五"查对应公历。',
      },
    },
    {
      '@type': 'Question',
      name: '农历闰月是什么?为什么有的月份会重复?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '农历通过 19 年 7 闰的规则让总天数跟公历年相近。出现闰月时,当年有 13 个月,例如 2020 年闰四月。闰月不算独立月份,只是把前一个月的天数拉长。本工具会标明"闰月"标识(如"闰四月初一"),方便买日历、挑日子、合八字等场景。',
      },
    },
  ],
}

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the difference between the solar (Gregorian) and lunar calendars?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The solar calendar is based on Earth revolving around the Sun (365.2425 days, divided into 12 months). The Chinese lunar calendar is lunisolar: months follow the Moon (29.5 days per cycle), but the year is anchored to the Sun, so a pure lunar year is only ~354 days — 11 days shorter than the solar year. To stay in sync with seasons, the calendar inserts a leap month roughly every 2-3 years, making some years 13 months long.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are Chinese zodiac years and heavenly stems / earthly branches calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zodiac years rotate every 12: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig. The stem-branch cycle (60 years) combines 10 heavenly stems and 12 earthly branches. This tool uses Chinese New Year (Lunar Jan 1) as the year boundary, not January 1. Example: someone born February 5, 2026 is still Year of the Snake (Yi-Si), not Horse (Bing-Wu) until Chinese New Year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are traditional festivals shown?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Type any Gregorian date. The result shows the lunar date, the zodiac year, and whether the day falls on a traditional festival: Chinese New Year (1-1), Lantern (1-15), Dragon Boat (5-5), Qixi (7-7), Mid-Autumn (8-15), Double Ninth (9-9). The tool also supports reverse lookup: type a lunar date and see the corresponding Gregorian date.',
      },
    },
    {
      '@type': 'Question',
      name: "What is a leap month (闰月), and why does it appear every few years?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Chinese calendar uses the Metonic 19-year cycle with 7 leap months to keep lunar and solar years aligned. In a leap year, there are 13 lunar months; the leap month takes the same number as the previous month (e.g. "leap 4th month"). The total of days is ~384 in a leap year vs ~354 in a regular one. The tool labels leap-month days explicitly (like 闰四月初一), useful for planning weddings, moves, or consulting the almanac (黄历).',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>输入公历日期,立刻查到对应的农历、生肖、干支和传统节日。覆盖 1900-2100 年,支持反向查询(农历转公历),命理八字、节日规划必备。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Enter any Gregorian date to instantly see the Chinese lunar date, zodiac year, heavenly stem, and traditional festivals. Covers 1900-2100 with reverse lookup — perfect for astrology, family events, and cultural planning.</p>
  </div>
)

export default async function LunarCalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/lunar-calendar?lang=en' : '/zh/lunar-calendar?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '农历转换器' : 'Lunar Calendar Converter'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <LunarCalendar lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/countdown" className="text-orange-500 hover:underline">📅 倒计时</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/sleep-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '😴 睡眠计算器' : '😴 Sleep Calculator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
