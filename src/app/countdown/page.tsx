import type { Metadata } from 'next'
import Countdown from './countdown-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '在线倒计时计算器：选择任意目标日期和时间，实时跳秒显示距离目标还有几天几小时几分钟几秒。支持正计时和倒计时两种模式，可用于考试倒计时、生日倒计时、项目截止日等场景，免费无需注册。',
    en: 'Countdown Calculator — Days Until Date',
  }
  const descriptions = {
    zh: '在线倒计时计算器:实时跳秒,选择目标日期+时间,显示还有几天几小时几分钟几秒。也支持距今已过去天数模式,免费无需注册。',
    en: 'Free countdown calculator: count down days, hours, minutes, seconds to any date. Live timer updates every second. Free, no signup.',
  }
  const ogTitles = { zh: '日期计算器 - 实用计算器', en: 'Countdown Calculator - Practical Tools' }
  const ogDescs = {
    zh: '任意日期距今天数 / 已过去天数计算',
    en: 'Countdown to any date or count days since. Free online countdown timer.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
        url: `${lang === 'zh' ? 'https://tools-site-production.up.railway.app/zh/countdown' : 'https://tools-site-production.up.railway.app/countdown'}`,
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/countdown' : '/countdown'}`,
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

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I count days until a future date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pick a target date, click Calculate, and the result shows "X days until target". The counter increments at midnight local time on the new day, not on the hour. This is useful for event countdowns (graduation, wedding, vacation start), project deadlines, and recurring anniversaries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I count days since a past date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pick any past date and the calculator shows "N days since". Common uses: tracking sobriety / sober milestones (90 / 180 / 365 days), baby age in days, work anniversary, days since quitting smoking, days since launch of a project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the calculator handle leap years and month length?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It uses the JavaScript Date engine, which follows Gregorian rules exactly. February 29 is counted in leap years (2024, 2028). 30-day and 31-day months are respected. There is no rounding to "30 days per month" — the difference is calculated day-by-day at 24-hour precision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I count only business days (excluding weekends)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This tool counts calendar days including weekends and holidays. For business day calculations (excluding Sat/Sun and US federal holidays), use Excel NETWORKDAYS, Google Sheets NETWORKDAYS.USA, or a project management tool. Calendar-day countdowns are for: exam prep, wedding countdowns, pregnancy weeks, anniversaries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the countdown tick every second in real time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Switch to the "Live Timer" mode, pick a target date and time (to the minute), and the timer updates every second showing days, hours, minutes, and seconds remaining. Common uses: wedding ceremony, New Year countdown, exam deadline, rocket launch. All calculations happen in your browser — no server calls, no latency.',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>输入目标日期,立刻算出距离今天还有多少天。支持生日倒计时、节假日倒计时、考试/截止日期倒计时,也能统计排除周末和节假日后的工作日数。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Enter any target date and instantly see how many days remain. Perfect for birthdays, holidays, exam deadlines, and project timelines. Also counts working days excluding weekends and public holidays.</p>
  </div>
)

export default async function CountdownPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: lang === 'zh' ? '在线倒计时器 — 实时跳秒' : 'Countdown Timer - Live Days Hours Minutes',
    alternateName: lang === 'zh' ? '倒计时器' : 'Countdown Calculator',
    url: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/countdown' : '/countdown'}`,
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'CountdownTimer',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      lang === 'zh'
        ? '实时倒计时器:选择目标日期+时间,每秒刷新显示剩余天数、小时、分钟、秒。也支持距今已过去 N 天模式。免费、无需注册。'
        : 'Live countdown timer that ticks every second showing days, hours, minutes, seconds remaining until any date or event. Also counts days since past dates. Free, no signup, browser-only.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/countdown?lang=en' : '/zh/countdown?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '倒计时计算器' : 'Countdown Calculator'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <Countdown lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/lunar-calendar" className="text-orange-500 hover:underline">{lang === 'zh' ? '📆 农历转换' : '📆 Lunar Calendar'}</a></li>
                  <li><a href="/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/sleep-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '😴 睡眠计算器' : '😴 Sleep Calculator'}</a></li>
                  <li><a href="/password-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔐 密码生成器' : '🔐 Password Generator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
