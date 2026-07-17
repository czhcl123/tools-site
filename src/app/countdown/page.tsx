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
    zh: '日期计算器 - 距目标还有多少天,双向倒计时和日期差',
    en: 'Countdown Timer - Days Until Any Date, Free Online Tool',
  }
  const descriptions = {
    zh: '免费在线日期计算器:计算任意目标日期距今多少天,或过去多少天。支持闰年、双向倒计时、周年纪念日追踪。',
    en: 'Free online countdown timer: count down to any future date or count days since any past date. Birthday reminder, deadline tracker, leap-year safe. No signup, no download.',
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
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      <strong>日期计算器</strong>三个数字就解决"距目标还有多少天"或"距某事件已过去多少天"。本工具按自然日精确计算,自动处理闰年 / 大小月,无需手算。所有计算在你浏览器本地完成,适合婚假规划、孕周计算、纪念日追踪、考前倒计时等。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">最常用的日期计算场景</h2>
    <p><strong>1. 高考 / 中考倒计时</strong>。距离高考 200 天 / 100 天 / 30 天节点,本工具一键显示。家长群每周自动播报孩子备考天数,适合做心理建设。</p>
    <p><strong>2. 周年纪念日</strong>。宝宝出生 100 天、结婚 1000 天、戒烟 365 天——这类里程碑(100 / 200 / 365 / 1000 天)用本工具查过往日期非常方便,比翻日历快。</p>
    <p><strong>3. 项目 deadline</strong>。"距离上线还有 21 天","距离 PR 截止还有 14 天"。跨时区团队(亚洲 / 欧洲)用截止日期 + 本工具,比 Excel 公式更直观。</p>
    <p><strong>4. 旅游 / 假期</strong>。"还有 X 天就放假"或"还有 X 天生日",节假日开始 / 结束倒计时,直接看结果。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">跟日历 App 区别在哪?</h2>
    <p>系统日历 App 需要手动建提醒事件,操作 3 步以上;本工具输入日期 + 1 次点击即可。适合:临时算"还有 X 天退休"、"宝宝出生 200 天"。长期重复事件用日历 App 更合适。本工具页面无 cookie、无登录、无追踪,适合简单查询场景。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      A <strong>countdown calculator</strong> answers three questions in one click: how many days until a future date, how many days since a past date, and how long between two arbitrary dates. This tool uses calendar days (not business days), handles leap years and month length automatically, and runs entirely in your browser so no data leaves your device.
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">Most common date counting scenarios</h2>
    <p><strong>1. Exam / graduation countdowns.</strong> "100 days until the bar exam", "30 days until finals week". Students and parents use this as a motivational milestone marker. The 50 / 100 / 200 day points are the most psychologically powerful.</p>
    <p><strong>2. Anniversary tracking.</strong> 100 days since launch, 365 days sober, 1000 days married. Milestone anniversaries at 100 / 200 / 365 / 1000 days are widely celebrated across cultures. This tool handles past dates as easily as future ones.</p>
    <p><strong>3. Project deadlines.</strong> "14 days until launch", "21 days until freeze". Cross-timezone teams pick a target calendar date, then use this calculator for consistent day counts across regions, regardless of working hours.</p>
    <p><strong>4. Vacation / birthday countdowns.</strong> "47 days until summer break", "9 days until the wedding". Simple visual countdown for any future event.</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">How is this different from my calendar app?</h2>
    <p>System calendar apps require you to create an event (3+ taps), then check countdown from the event detail. This tool is 1 input + 1 click, optimized for ad-hoc queries. For recurring events (weekly standups, monthly meetings) use your calendar app. For one-off "how many days until X" — use this.</p>
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Countdown initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
