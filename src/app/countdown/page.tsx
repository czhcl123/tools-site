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
    zh: '在线倒计时计算器：距离目标日期还有几天',
    en: 'Countdown Calculator — Days Until Date',
  }
  const descriptions = {
    zh: '在线倒计时计算器:实时跳秒,选择目标日期+时间,显示还有几天几小时几分钟几秒。也支持距今已过去天数模式,免费无需注册。',
    en: 'Free countdown calculator and date counter: days until any date, days left, and days since. Live second-by-second timer. No signup.',
  }
  const ogTitles = { zh: '日期计算器 - 实用计算器', en: 'Countdown Calculator - Practical Tools' }
  const ogDescs = {
    zh: '任意日期距今天数 / 已过去天数计算',
    en: 'Countdown to any date or count days since. Free online countdown timer.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }],
        url: `${lang === 'zh' ? 'https://getpracticaltools.com/zh/countdown' : 'https://getpracticaltools.com/countdown'}`,
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://getpracticaltools.com${lang === 'zh' ? '/zh/countdown' : '/countdown'}`,
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
      name: '可以只算工作日吗?排除哪些日子?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。勾选"只算工作日",工具会排除周六、周日,以及美国联邦法定假日(元旦、马丁·路德·金日、总统日、阵亡将士纪念日、六月节、独立日、劳动节、哥伦布日、退伍军人节、感恩节、圣诞节),假日落在周末时按"周六提前到周五、周日顺延到周一"的惯例处理。计算口径是"不含起始日、含目标日"。',
      },
    },
    {
      '@type': 'Question',
      name: '两个日期之间相差多少天?含首尾吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '切到"两个日期之间"模式,输入起始日和结束日即可。默认显示的是不含起始日的间隔(例如 10 月 1 日到 10 月 31 日是 30 天),同屏还会给出"含首尾两天"的数字(31 天)、折合的周数、月数,以及工作日数。',
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
      name: 'Can I count only business days, and which holidays are excluded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tick "Business days only" and the calculator skips Saturdays, Sundays, and the 11 US federal holidays (New Year, MLK Day, Presidents Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas). Holidays that fall on a weekend use the standard observance shift — Saturday moves to Friday, Sunday moves to Monday. The count excludes the start date and includes the end date.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days are between two dates, and is it inclusive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Switch to "Between two dates" and enter a start and end date. The headline number excludes the start date (October 1 to October 31 is 30 days). The same panel also shows the inclusive count (31 days), the equivalent weeks and months, and the number of business days in that range.',
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
    {
      '@type': 'Question',
      name: 'How many days until Christmas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Christmas Day is December 25 every year (Christmas Eve is December 24). For 2026, Christmas falls on Friday, December 25. Set December 25 as the target date in this countdown calculator for the live days-until-Christmas number. Common milestones: December 1 (24 days out), Black Friday November 27 (shopping deadline), and December 24 (one day left).',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>输入目标日期,立刻算出距离今天还有多少天。支持生日倒计时、节假日倒计时、考试/截止日期倒计时,也能统计排除周末和节假日后的工作日数。</p>
    <h3 className="font-semibold text-gray-700">2026 年圣诞节倒计时</h3>
    <p>2026 年的圣诞节是 <strong>12 月 25 日(星期五)</strong>,平安夜是 12 月 24 日。在工具里选 12 月 25 日作为目标日期,就能得到实时的「距离圣诞节还有多少天」。常见节点:12 月 1 日(还有 24 天)、黑五 11 月 27 日(购物截止)、平安夜(最后 1 天)。黑五折扣力度用<a href="/discount-calculator" className="text-orange-500 hover:underline">折扣计算器</a>算实付价。</p>
    <p>想倒计时春节、中秋等农历节日？先用<a href="/lunar-calendar" className="text-orange-500 hover:underline">农历转换器</a>查出对应的公历日期,再来倒计时。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Enter any target date and instantly see how many days remain. This tool works as a countdown calculator, a date counter, and a days-left tracker — pick a future date to count down, or a past date to count how many days have passed.</p>
    <h3 className="font-semibold text-gray-700">What you can calculate</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>Days until a date</strong> — birthdays, holidays, exams, project deadlines, vacation start</li>
      <li><strong>Days left</strong> — how much time remains before a fixed deadline</li>
      <li><strong>Days since</strong> — sobriety milestones, baby age in days, work anniversaries, days since launch</li>
      <li><strong>Live countdown timer</strong> — second-by-second display for New Year, weddings, launches</li>
    </ul>
    <p>Counting down to Chinese New Year or Mid-Autumn Festival? Use our <a href="/lunar-calendar" className="text-orange-500 hover:underline">lunar calendar converter</a> first to find the exact Gregorian date.</p>
    <h3 className="font-semibold text-gray-700">Christmas 2026 countdown</h3>
    <p>Christmas Day 2026 falls on <strong>Friday, December 25</strong> (Christmas Eve: December 24). Set December 25 as your target date to get the live days-until-Christmas count. Common milestones: December 1 (24 days out), Black Friday November 27 (shopping deadline — check the real discount with our <a href="/discount-calculator" className="text-orange-500 hover:underline">discount calculator</a>), and December 24 (one day left).</p>
  </div>
)

const deepDiveZh = (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-[15px] space-y-4 [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-3xl">
    <h2 className="text-lg font-bold text-gray-800">倒计时的天数是怎么算出来的</h2>
    <p>
      工具把「今天」和「目标日」都归零到当天 00:00,再做减法,所以结果永远是整数天。这意味着两件事:第一,结果在<strong>当地时间的午夜跳变</strong>,不是在你设定的时刻跳变;第二,精确到秒的实时模式是另一套算法——它用真实的时间戳相减,所以跨夏令时那天会少或多 1 小时,但天数不变。
    </p>
    <p>
      举个例子:今天 2026-10-22,目标是 2026-12-25,自然日相差 <strong>64 天</strong>,折合 9 周 1 天、2 个月 3 天。如果你勾了「只算工作日」,同一天数是 <strong>43 个工作日</strong>——中间吃掉了 18 个周末日和感恩节。
    </p>

    <h2 className="text-lg font-bold text-gray-800">几个可以对照的算例</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-600">
            <th className="text-left px-3 py-2 border border-gray-100">起始日 → 结束日</th>
            <th className="text-right px-3 py-2 border border-gray-100">自然日</th>
            <th className="text-right px-3 py-2 border border-gray-100">工作日(美国)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2026-10-01 → 2026-10-31</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">30</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">20</td>
          </tr>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2026-12-20 → 2027-01-05</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">16</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">10</td>
          </tr>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2028-02-01 → 2028-03-01(闰年)</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">29</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">20</td>
          </tr>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2026-10-22 → 2026-12-25</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">64</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">43</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-500">
      口径:不含起始日、含结束日。所以 10 月 1 日到 10 月 31 日是 30 天,含首尾是 31 天——工具会把两个数都显示出来。
    </p>

    <h2 className="text-lg font-bold text-gray-800">工作日模式到底排除了什么</h2>
    <p>
      勾上以后,工具跳过周六、周日,以及 11 个美国联邦法定假日:元旦、马丁·路德·金日、总统日、阵亡将士纪念日、六月节、独立日、劳动节、哥伦布日、退伍军人节、感恩节、圣诞节。假日撞上周末时按惯例顺延——周六提前到周五休,周日顺延到周一休。
    </p>
    <p>
      <strong>注意:不含中国的法定节假日和调休。</strong> 如果你的截止日是国内的工期,请手动把春节、国庆等假期减掉,或者把口径理解成「美式工作日」。这一限制写在页面上,是因为大部分「工作日倒计时」的搜索需求来自跨国外包、跨境物流和美国税务节点。
    </p>

    <h2 className="text-lg font-bold text-gray-800">手算最容易错的三件事</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>2 月 29 日</strong>——闰年才存在。2028 年 2 月有 29 天,不是 28 天,手算时按「每月 30 天」估会差出好几天。</li>
      <li><strong>大小月交替</strong>——7 月、8 月连续两个 31 天,是最常见的漏算点。跨这两个月手数日历,差 1 天的概率极高。</li>
      <li><strong>夏令时</strong>——精确到小时的倒计时,在春季调表那天会少 1 小时,秋季多 1 小时。按「天数」算不受影响,但按「小时数」算会偏差。</li>
    </ul>

    <h2 className="text-lg font-bold text-gray-800">常见用法</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>婚礼 / 考试 / 项目上线 / 签证面试的倒数</li>
      <li>戒烟、戒酒、健身打卡的连续天数(把起始日设成过去某天)</li>
      <li>宝宝出生第 100 天、1000 天这类纪念节点</li>
      <li>合同到期、保修到期、订阅续费前还剩几天</li>
      <li>跨国外包排期:把交付日减去工作日,倒推最晚开工日</li>
    </ul>
    <p>
      要倒计时春节、中秋这类农历节日,先用<a href="/lunar-calendar" className="text-orange-500 hover:underline">农历转换器</a>查出对应公历日期;算黑五、双十一的实际折扣价用<a href="/discount-calculator" className="text-orange-500 hover:underline">折扣计算器</a>;倒时差前后该几点睡,用<a href="/sleep-calculator" className="text-orange-500 hover:underline">睡眠计算器</a>。婚礼按天倒排的完整清单见<a href="/blog/countdown-wedding-planner" className="text-orange-500 hover:underline">婚礼倒计时规划</a>,项目排期见<a href="/blog/countdown-project-management" className="text-orange-500 hover:underline">项目倒计时管理</a>。
    </p>
  </div>
)

const deepDiveEn = (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-[15px] space-y-4 [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-3xl">
    <h2 className="text-lg font-bold text-gray-800">How the day count is actually calculated</h2>
    <p>
      The calculator normalises both dates to 00:00 local time and subtracts, so the headline result is always a whole number of days. Two consequences follow. First, the number flips at <strong>midnight in your own timezone</strong>, not at the time you entered. Second, the live second-by-second mode is a different calculation — it subtracts real timestamps, so it can be off by one hour across a daylight-saving change while the day count stays correct.
    </p>
    <p>
      Concretely: from 22 October 2026 to 25 December 2026 is <strong>64 calendar days</strong>, which is 9 weeks and 1 day, or 2 months and 3 days. Tick "Business days only" and the same range is <strong>43 business days</strong> — that removes 18 weekend days and Thanksgiving.
    </p>

    <h2 className="text-lg font-bold text-gray-800">Worked examples you can check</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-600">
            <th className="text-left px-3 py-2 border border-gray-100">From → To</th>
            <th className="text-right px-3 py-2 border border-gray-100">Calendar days</th>
            <th className="text-right px-3 py-2 border border-gray-100">Business days (US)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2026-10-01 → 2026-10-31</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">30</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">20</td>
          </tr>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2026-12-20 → 2027-01-05</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">16</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">10</td>
          </tr>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2028-02-01 → 2028-03-01 (leap year)</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">29</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">20</td>
          </tr>
          <tr>
            <td className="px-3 py-2 border border-gray-100">2026-10-22 → 2026-12-25</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">64</td>
            <td className="text-right px-3 py-2 border border-gray-100 tabular-nums">43</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-500">
      Convention: the start date is excluded and the end date is included. October 1 to October 31 is therefore 30 days; counting both end days gives 31. The tool shows both numbers.
    </p>

    <h2 className="text-lg font-bold text-gray-800">What business-day mode excludes</h2>
    <p>
      It skips Saturdays, Sundays, and the 11 US federal holidays: New Year, MLK Day, Presidents Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas. When a holiday lands on a weekend it follows the standard observance rule — Saturday is observed on Friday, Sunday on Monday.
    </p>
    <p>
      <strong>It does not know about non-US public holidays or regional shutdowns.</strong> If your deadline runs through Chinese New Year, Eid, or a company-wide closure, subtract those manually. The page says this out loud because most "business days until" searches come from cross-border teams, freight scheduling, and US tax deadlines.
    </p>

    <h2 className="text-lg font-bold text-gray-800">Three ways manual counting goes wrong</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>February 29.</strong> Leap years have 29 days in February, not 28. Estimating "30 days a month" drifts by several days over a year.</li>
      <li><strong>Back-to-back 31-day months.</strong> July and August both have 31 days — the most commonly miscounted stretch on a paper calendar.</li>
      <li><strong>Daylight saving time.</strong> An hour-precision countdown loses an hour in spring and gains one in autumn. Day counts are unaffected; hour totals are not.</li>
    </ul>

    <h2 className="text-lg font-bold text-gray-800">What people use it for</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Weddings, exams, launches, visa interviews</li>
      <li>Sobriety, smoking, and habit streaks — set the start date in the past</li>
      <li>Baby milestones such as day 100 or day 1000</li>
      <li>Contract expiry, warranty end, subscription renewal</li>
      <li>Delivery scheduling — subtract business days to find the latest start date</li>
    </ul>
    <p>
      Counting down to Lunar New Year or Mid-Autumn Festival? Get the Gregorian date from the <a href="/lunar-calendar" className="text-orange-500 hover:underline">lunar calendar converter</a> first. Working out what a sale actually costs? Use the <a href="/discount-calculator" className="text-orange-500 hover:underline">discount calculator</a>. Planning sleep around a flight? The <a href="/sleep-calculator" className="text-orange-500 hover:underline">sleep calculator</a> handles jet lag. For a day-by-day wedding plan see the <a href="/blog/countdown-wedding-planner" className="text-orange-500 hover:underline">wedding countdown checklist</a>, and for delivery scheduling see <a href="/blog/countdown-project-management" className="text-orange-500 hover:underline">countdown planning for projects</a>.
    </p>
  </div>
)

export default async function CountdownPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)
  const initial = {
    to: one(sp.to),
    from: one(sp.from),
    t: one(sp.t),
    name: one(sp.name),
    bd: one(sp.bd),
    mode: one(sp.mode),
  }
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: lang === 'zh' ? '在线倒计时器 — 实时跳秒' : 'Countdown Timer - Live Days Hours Minutes',
    alternateName: lang === 'zh' ? '倒计时器' : 'Countdown Calculator',
    url: `https://getpracticaltools.com${lang === 'zh' ? '/zh/countdown' : '/countdown'}`,
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
      'Business-day mode (excludes weekends and 11 US federal holidays)',
      'Days between two dates, inclusive and exclusive',
      'Weeks, months and total hours breakdown',
      'Shareable link with the event name and settings',
      'Birthday / anniversary / deadline tracker',
      'Leap year safe',
      'Free, no signup, no ads',
      'Bilingual English / Chinese',
    ],
    dateModified: '2026-10-22',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/countdown' : '/zh/countdown'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '倒计时计算器：距任意日期还有几天' : 'Countdown Calculator: Days Until Any Date'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <Countdown lang={lang} initial={initial} />
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
          <div className="mt-8">
            {lang === 'zh' ? deepDiveZh : deepDiveEn}
          </div>
        </main>
      </div>
    </>
  )
}
