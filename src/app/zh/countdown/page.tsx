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
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }],
      title: '日期计算器 - 实用计算器',
      description: '任意日期距今天数 / 已过去天数计算',
    },
    alternates: {
      canonical: 'https://getpracticaltools.com/zh/countdown',
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
        text: '选择未来某天作为目标日期,点击"计算",会显示"距离目标还有 X 天"。例如今天是 2026-07-14,目标是 2026-10-01,显示距离还有 79 天。天数是按自然日算的,凌晨 0 点跨天自动 +1;要排除周末和假日记工作日,勾选"只算工作日"。',
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
      name: '可以只算工作日吗?排除哪些日子?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。勾选"只算工作日",工具会排除周六、周日,以及 11 个美国联邦法定假日(元旦、马丁·路德·金日、总统日、阵亡将士纪念日、六月节、独立日、劳动节、哥伦布日、退伍军人节、感恩节、圣诞节),假日撞周末时按惯例顺延。口径是不含起始日、含目标日。注意不含中国的法定节假日和调休。',
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
    {
      '@type': 'Question',
      name: '距离圣诞节还有多少天?怎么倒计时?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '圣诞节是每年12月25日(平安夜12月24日)。2026年的圣诞节是12月25日星期五。在本工具选择12月25日作为目标日期,即可得到实时的"距离圣诞节还有多少天"。常见节点:12月1日(还有24天)、黑五(11月27日,购物截止)、平安夜(最后1天)。',
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
    <h3 className="font-semibold text-gray-700 text-base mt-4">2026 年圣诞节倒计时</h3>
    <p>2026 年的圣诞节是 <strong>12 月 25 日(星期五)</strong>,平安夜是 12 月 24 日。在工具里选 12 月 25 日作为目标日期,就能得到实时的「距离圣诞节还有多少天」。常见节点:12 月 1 日(还有 24 天)、黑五 11 月 27 日(购物截止)、平安夜(最后 1 天)。</p>
    <p className="text-xs text-gray-400 mt-4">所有计算在浏览器本地完成，数据不上传。</p>
  </div>
)

export default async function CountdownPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'en' ? 'en' : 'zh'
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)
  const initial = {
    to: one(sp.to),
    from: one(sp.from),
    t: one(sp.t),
    name: one(sp.name),
    bd: one(sp.bd),
    mode: one(sp.mode),
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '在线倒计时器 — 实时跳秒',
    alternateName: '倒计时器',
    url: 'https://getpracticaltools.com/zh/countdown',
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
    dateModified: '2026-10-06',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/countdown?lang=en" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">倒计时计算器：距任意日期还有几天</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <Countdown lang={lang} initial={initial} />
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
