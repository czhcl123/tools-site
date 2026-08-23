import type { Metadata } from 'next'
import LunarCalendar from '../../lunar-calendar/lunar-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '农历转换器 - 公历转农历日期查询|实用计算器',
    description: '免费公历农历双向转换工具:输入日期即可查询农历、生肖、干支、传统节日,覆盖 1900-2100 年,无需注册。',
    openGraph: {
      title: '农历转换器 - 实用计算器',
      description: '免费公历农历双向转换,生肖干支节日查询',
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
        text: '公历是太阳历,依据地球绕太阳一圈(365.2425 天)分 12 个月。农历是阴阳合历,月份按月相(月亮绕地球一圈 29.5 天),年按太阳回归,所以一年约 354 天,比公历短 11 天。农历通过"每 2-3 年加一个闰月"调和这个差。',
      },
    },
    {
      '@type': 'Question',
      name: '生肖和干支是怎么算的?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '生肖对应农历"年",每 12 年一轮。干支是 60 年一轮,10 天干 × 12 地支配对。本工具按农历新年(正月初一)计算生肖,而非公历 1 月 1 日。',
      },
    },
    {
      '@type': 'Question',
      name: '传统节日(春节、中秋)按农历怎么查?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '输入任一公历日期,会显示当天的农历 + 是否为传统节日。常见节日自动识别:春节、元宵、端午、七夕、中秋、重阳。也可反向查询。',
      },
    },
    {
      '@type': 'Question',
      name: '农历闰月是什么?为什么有的月份会重复?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '农历通过 19 年 7 闰的规则让总天数跟公历年相近。出现闰月时,当年有 13 个月。本工具会标明"闰月"标识。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>输入公历日期，立刻查到对应的农历、生肖、干支和传统节日。覆盖 1900-2100 年，支持反向查询（农历转公历），命理八字、节日规划必备。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持信息</h3>
    <ul className="space-y-1 text-sm">
      <li>📆 农历日期 + 闰月标识</li>
      <li>🐲 生肖 + 干支纪年</li>
      <li>🏮 传统节日自动识别</li>
      <li>🔄 公历 ↔ 农历双向转换</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有数据在浏览器本地处理，不上传服务器。</p>
  </div>
)

export default async function LunarCalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/lunar-calendar" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">农历转换器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <LunarCalendar lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/zh/countdown" className="text-orange-500 hover:underline">{lang === 'zh' ? '📅 倒计时' : '📅 Countdown'}</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/zh/sleep-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '😴 睡眠计算器' : '😴 Sleep Calculator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
