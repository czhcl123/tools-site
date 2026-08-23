import type { Metadata } from 'next'
import Countdown from '../../countdown/countdown-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '倒计时计算器 - 距任意日期还有几天几小时几分钟几秒',
    description: '在线倒计时计算器:实时跳秒,选择目标日期+时间,显示还有几天几小时几分钟几秒。也支持距今已过去天数模式,免费无需注册。',
    openGraph: {
      title: '日期计算器 - 实用计算器',
      description: '任意日期距今天数 / 已过去天数计算',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/countdown',
      languages: {
        'zh-CN': '/zh/countdown',
        'en-US': '/countdown',
        'x-default': '/countdown',
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
      name: '怎么计算"距今天有多少天"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '选择未来某天作为目标日期,点击"计算",会显示"距离目标还有 X 天"。例如今天是 2026-07-14,目标是 2026-10-01,显示距离还有 79 天。本工具按自然日计算(不是工作日),凌晨 0 点跨天自动 +1。',
      },
    },
    {
      '@type': 'Question',
      name: '可以算过去的日期吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。选过去某天,会显示"已过去 X 天"。比如要算宝宝出生 100 天,选出生日期 + 今天,显示"已过去 N 天"——常用于纪念日追踪(月度 / 100 天 / 365 天 / 1000 天)。',
      },
    },
    {
      '@type': 'Question',
      name: '闰年 / 大小月怎么处理?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '本工具底层用 JavaScript Date 对象,严格按照公历处理。2 月 29 日闰年才会出现;4 月只有 30 天;其他月份也按公历规则。计算结果不会出现"1 个月 = 30 天"这种粗略估算,而是按每日 24 小时精确差。',
      },
    },
    {
      '@type': 'Question',
      name: '工作日怎么算?(排除周末)',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '本工具不算工作日,只算自然日(包含周末和法定节假日)。如果需要工作日计算,搭配 Excel NETWORKDAYS 函数或公司项目管理工具。本工具适合:高考倒计时、婚礼倒计时、孕周计算、周年纪念日——这些都按自然日。',
      },
    },
    {
      '@type': 'Question',
      name: '有实时跳秒的倒计时吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '有。点击页面顶部"实时倒计时"切换后,选择目标日期+时间(精确到分钟),工具会每秒刷新显示"还剩 X 天 X 小时 X 分钟 X 秒"。常用于婚礼仪式、跨年倒计时、考试交卷、太空发射等需要秒级精度的场景。所有计算在浏览器本地完成,不依赖服务器。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>输入目标日期,立刻算出距离今天还有多少天。支持生日倒计时、节假日倒计时、考试/截止日期倒计时,也能统计排除周末和节假日后的工作日数。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持模式</h3>
    <ul className="space-y-1 text-sm">
      <li>📅 <strong>天数模式</strong> — 距目标还有多少天</li>
      <li>⏱️ <strong>实时倒计时</strong> — 天+小时+分钟+秒</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有计算在浏览器本地完成，数据不上传。</p>
  </div>
)

export default async function CountdownPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '在线倒计时器 — 实时跳秒',
    alternateName: '倒计时器',
    url: 'https://tools-site-production.up.railway.app/zh/countdown',
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'CountdownTimer',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '实时倒计时器:选择目标日期+时间,每秒刷新显示剩余天数、小时、分钟、秒。也支持距今已过去 N 天模式。免费、无需注册。',
    featureList: [
      'Live tick every second (days, hours, minutes, seconds)',
      'Counts days until future date',
      'Counts days since past date',
      'Birthday / anniversary / deadline tracker',
      'Leap year safe',
      'Free, no signup, no ads',
      'Bilingual English / Chinese',
    ],
    dateModified: '2026-07-18',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/countdown" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">倒计时计算器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <Countdown lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/lunar-calendar" className="text-orange-500 hover:underline">{lang === 'zh' ? '📆 农历转换' : '📆 Lunar Calendar'}</a></li>
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
