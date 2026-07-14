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
    zh: '农历转换器 - 公历 / 农历双向查询,生肖干支,节日',
    en: 'Lunar-Solar Calendar Converter - Zodiac, Stem-Branch, Festivals',
  }
  const descriptions = {
    zh: '免费在线农历转换器:公历转农历、农历转公历,支持生肖年、干支日、传统节日查询,1900-2100 年范围。',
    en: 'Free online lunar-solar calendar converter. Convert Gregorian dates to Chinese lunar and back. Includes zodiac year, heavenly stem-earthly branch, traditional festival lookup. Range 1900-2100.',
  }
  const ogTitles = { zh: '农历转换器 - 实用计算器', en: 'Lunar Calendar Converter - Practical Tools' }
  const ogDescs = {
    zh: '免费公历农历双向转换,生肖干支节日查询',
    en: 'Free solar-lunar converter, zodiac + stem-branch + festival lookup.',
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
    <p>
      <strong>农历转换器</strong>输入公历日期,直接得到对应农历、生肖、干支、传统节日信息。本工具覆盖 1900-2100 年(标准农历表范围),所有计算在浏览器本地完成。本工具也可反向:输入农历日期查对应公历。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">最常见的农历查询场景</h2>
    <p><strong>1. 生日 / 纪念日的农历对应</strong>。"爷爷是农历 1948 年三月初八出生,公历是几号?"——本工具一键查过去 + 未来 100 年的农历转公历。每年春节、端午、中秋的家庭聚会日期查起来特别方便。</p>
    <p><strong>2. 传统节日倒数</strong>。"距离今年中秋节还有 95 天"、"春节 2027 是公历 2 月 6 日"。本工具支持节日反向查询,对于规划婚礼、团聚、放假日期非常实用。</p>
    <p><strong>3. 命理 / 八字 / 黄历查询</strong>。"我是公历 1988 年 10 月 15 日出生,农历是几月几日?生肖?"——八字测算需要按农历生日,本工具帮你换算。</p>
    <p><strong>4. 海外华裔寻根</strong>。海外华人用本工具查家族背景、查祖辈农历生日、查清明节祖坟扫祭日期。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">为什么不用手机日历?</h2>
    <p>iPhone / Android 日历默认显示公历,农历通常作为"备选日历"显示一年。本工具适合<strong>任意日期</strong>查询,不依赖系统设置。Microsoft Outlook / Apple Calendar 也支持农历,但需要手动开启"中文农历日历"订阅。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      A <strong>lunar-solar calendar converter</strong> takes any Gregorian date (or any lunar date) and returns the matching Chinese lunar calendar day, including zodiac year, heavenly stem / earthly branch, and traditional festival status. The database covers 1900-2100. All conversion runs in your browser — no data sent anywhere.
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">Most common lunar calendar queries</h2>
    <p><strong>1. Birthdays and anniversaries in lunar terms.</strong> "My grandmother was born on lunar 3-8-1948 — when is that on the Gregorian calendar?" This tool handles both directions, covering the past and the next 100 years. Especially useful for Chinese New Year, Dragon Boat, Mid-Autumn family reunions.</p>
    <p><strong>2. Traditional festival countdowns.</strong> "95 days until Mid-Autumn 2026", "Chinese New Year 2027 falls on Feb 6". This tool supports festival reverse-lookup, useful for planning weddings, gatherings, and travel.</p>
    <p><strong>3. BaZi / Chinese astrology / almanac.</strong> "Born October 15, 1988 — what's the lunar date and zodiac?" Chinese birth-chart astrology uses lunar birthdays. This converter gives you the exact lunar day for any solar input.</p>
    <p><strong>4. Overseas Chinese heritage research.</strong> Diaspora families use this tool to convert ancestor birthdays, tomb-sweeping dates (清明节), and family history events.</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">Why not just use my phone's calendar?</h2>
    <p>iPhone and Android calendars default to Gregorian, with the Chinese lunar calendar as an optional overlay. This tool works for any date without needing to toggle system settings. Apple Calendar and Outlook also support lunar dates, but require manually enabling a "Chinese Lunar Calendar" subscription first.</p>
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
      <LunarCalendar initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
