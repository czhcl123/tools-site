import type { Metadata } from 'next'
import LunarCalendar from '../../lunar-calendar/lunar-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: '农历转换器', en: 'Lunar Calendar Converter - Solar to Lunar Date Tool' }
  const descriptions = {
    zh: '快速转换公历与农历日期，支持查看任意日期的农历信息，中英文免费使用。',
    en: 'Free online lunar calendar converter. Convert between Gregorian (solar) and Chinese lunar dates. See zodiac years, traditional festivals, and stem-branch info for any date.',
  }
  const ogTitles = { zh: '农历转换器 - 实用计算器', en: 'Lunar Calendar Converter - Practical Tools' }
  const ogDescs = {
    zh: '快速转换公历与农历日期，支持查看任意日期的农历信息，中英文免费使用。',
    en: 'Free online lunar calendar converter. Convert between Gregorian (solar) and Chinese lunar dates. See zodiac years, traditional festivals, and stem-branch info for any date.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/lunar-calendar',
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


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '农历和公历有什么区别?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '公历是根据地球公转计算的日期系统，农历是依据月相变化的传统日期系统。两者一年大约相差11天。',
      },
    },
    {
      '@type': 'Question',
      name: '如何查看某一天的农历?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '输入公历日期，点击转换后会显示对应农历、生肖、干支等信息。',
      },
    },
    {
      '@type': 'Question',
      name: '农历转换器准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '依据标准农历算法，准确度高。但需注意农历月可能有闰月。',
      },
    }
  ],
}

export default async function LunarCalendarPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <LunarCalendar initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}