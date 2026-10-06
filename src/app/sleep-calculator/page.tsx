import type { Metadata } from 'next'
import SleepCalculatorClient from './sleep-calculator-client'

// 2026-07-25 force redeploy zh-fix

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '免费在线睡眠计算器：基于 90 分钟睡眠周期科学原理，输入起床时间自动反推最佳入睡时间，或输入计划入睡时间计算最佳起床时刻。支持深度睡眠和REM周期说明，帮你告别闹钟起床。',
    en: 'Sleep Calculator — Bedtime & Wake Up',
  }
  const descriptions = {
    zh: '免费在线睡眠计算器:输入起床时间反推最佳入睡时间(90 分钟周期),或输入入睡时间反推最佳起床时间。支持深度睡眠/REM 周期说明,无需注册。',
    en: 'Free sleep calculator: enter wake time to find optimal bedtime, or enter bedtime to find best wake time, based on 90-minute sleep cycles. Browser-only.',
  }
  const ogTitles = { zh: '睡眠计算器 - 实用计算器', en: 'Sleep Calculator - Practical Tools' }
  const ogDescs = {
    zh: '90 分钟睡眠周期反推最佳入睡时间。',
    en: 'Best bedtime based on 90-minute sleep cycle. Free online calculator.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
        url: `${lang === 'zh' ? 'https://tools-site-production.up.railway.app/zh/sleep-calculator' : 'https://tools-site-production.up.railway.app/sleep-calculator'}`,
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/sleep-calculator' : '/sleep-calculator'}`,
      languages: {
        'zh-CN': '/zh/sleep-calculator',
        'en-US': '/sleep-calculator',
        'x-default': '/sleep-calculator',
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
      name: '睡眠计算器是怎么算的?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '基于 90 分钟为一个完整睡眠周期(浅睡 + 深睡 + REM)。成年人的完整睡眠需要 5-6 个周期(即 7.5-9 小时)。输入起床时间,工具向前反推 N 个 90 分钟周期,加上 15 分钟入睡时间,得出最佳入睡时间。例如 7:00 起床,往前推 6 个周期 + 15 分钟入睡 = 21:45 入睡最佳。',
      },
    },
    {
      '@type': 'Question',
      name: '小孩需要多少睡眠?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不同年龄段推荐睡眠时长不同:新生儿 14-17 小时、幼儿(1-2 岁)11-14 小时、学龄前(3-5 岁)10-13 小时、学龄(6-13 岁)9-11 小时、青少年(14-17 岁)8-10 小时、成年人 7-9 小时。本工具按成人 90 分钟周期计算,儿童建议咨询儿科医生。',
      },
    },
    {
      '@type': 'Question',
      name: 'REM 睡眠是什么?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'REM (Rapid Eye Movement) 是睡眠的第 4 阶段,大脑活跃、眼球快速运动、最容易做梦。一个 90 分钟周期包括 4 个阶段:N1(浅睡)、N2(中度睡眠)、N3(深度睡眠)、REM。每晚 4-6 个周期中,REM 占比 20-25%,对记忆巩固、情绪调节很重要。',
      },
    },
    {
      '@type': 'Question',
      name: '怎么计算 90 分钟睡眠周期?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '使用本睡眠周期计算器:输入入睡或起床时间,工具基于 4-6 个完整 90 分钟周期 + 15 分钟入睡时间,反推或正推最佳时间。7:00 起床,推荐 21:45(6 周期)、23:15(5 周期)或 00:45(4 周期)入睡。每人周期长度在 70-110 分钟浮动,90 分钟是平均值。',
      },
    },
    {
      '@type': 'Question',
      name: '90 分钟睡眠周期准吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 分钟是平均周期长度,实际有 70-110 分钟浮动。本工具按标准 90 分钟计算,适合常规作息;若睡眠质量差(如失眠),应以入睡后实际睡眠时长计算,而不只是 90 分钟倍数。',
      },
    },
    {
      '@type': 'Question',
      name: '睡眠模式计算器是什么?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '睡眠模式计算器(sleep pattern calculator)是根据你最近的作息记录(入睡时间、起床时间、睡眠质量)反推你的睡眠周期分布。它能告诉你自己是"早起型"还是"夜猫型",适合调整作息。本工具主要推荐 4-6 个完整 90 分钟周期方案,帮助用户找到最规律的睡眠节奏。',
      },
    },
    {
      '@type': 'Question',
      name: '8小时睡眠有几个周期?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '8 小时 = 480 分钟。480 ÷ 90 ≈ 5.3,所以 8 小时包含约 5 个完整睡眠周期(7.5 小时)加 30 分钟零头。这 30 分钟要么是入睡缓冲,要么会落在半个周期里被闹钟打断——这就是"睡满 8 小时还是困"的常见原因。想在周期边界醒来,实际睡眠目标设 7.5 小时(5 周期)或 9 小时(6 周期)。',
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
      name: 'How does the sleep calculator work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on the 90-minute sleep cycle (light sleep + deep sleep + REM). Adults need 5-6 complete cycles (7.5-9 hours). Enter your target wake time, and the tool works backwards N cycles of 90 minutes each, plus 15 minutes to fall asleep, to find the best bedtime. Example: wake at 7:00 AM = 6 cycles back + 15 min = go to bed at 9:45 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much sleep do children need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recommended sleep varies by age: newborns 14-17 hours, toddlers (1-2 yrs) 11-14 hours, preschoolers (3-5 yrs) 10-13 hours, school-age (6-13 yrs) 9-11 hours, teens (14-17 yrs) 8-10 hours, adults 7-9 hours. This tool uses the adult 90-minute cycle; consult a pediatrician for children.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is REM sleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'REM (Rapid Eye Movement) is the 4th stage of sleep where the brain is active, eyes move rapidly under the lids, and most dreaming occurs. A 90-minute cycle includes 4 stages: N1 (light), N2 (intermediate), N3 (deep), and REM. REM accounts for 20-25% of total sleep and is critical for memory consolidation and emotional regulation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the 90-minute sleep cycle calculator work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use this calculator sleep tool: enter any bedtime or wake time and the app cycles backwards (or forwards) through 4-6 complete 90-minute sleep cycles plus 15 minutes to fall asleep. Adults do best with 5-6 cycles (~7.5-9 hours total) for full deep sleep and REM. Cycles vary slightly per person (70-110 minutes), so treat 90 minutes as a planning average, not a strict rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the 90-minute sleep cycle accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 minutes is the average cycle length, but actual cycles range from 70-110 minutes. This tool uses the standard 90 minutes and works well for regular schedules. If you have poor sleep quality (insomnia), calculate based on actual sleep duration rather than 90-minute multiples.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a sleep pattern calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sleep pattern calculator analyzes your recent sleep logs (bedtime, wake time, quality) to determine your sleep cycle distribution. It can tell you whether you\'re a "morning lark" or "night owl" and help you optimize your schedule. This tool focuses on the simpler question: given a wake-up or bedtime, what are the best 4-6 complete 90-minute cycles to aim for?',
      },
    },
    {
      '@type': 'Question',
      name: 'How many sleep cycles in 8 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eight hours is 480 minutes. 480 ÷ 90 ≈ 5.3, so an 8-hour window contains about 5 complete sleep cycles (7.5 hours) plus a 30-minute remainder. That remainder is either fall-asleep buffer or half a cycle cut off by your alarm — which is why people wake from 8 hours feeling groggy. To wake at a cycle boundary, target 7.5 hours (5 cycles) or 9 hours (6 cycles) of actual sleep.',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>基于 90 分钟睡眠周期,输入你几点睡觉或几点起床,算出最佳入睡/起床时间,让你醒来时不犯困。</p>
    <h3 className="font-semibold text-gray-700">90 分钟睡眠周期怎么算</h3>
    <p>一个完整睡眠周期约 <strong>90 分钟</strong>:浅睡(N1/N2)→ 深睡(N3)→ REM。成年人每晚需要 4-6 个完整周期——所以反推很简单:7:00 起床 → 21:45 入睡(6 周期 + 15 分钟入睡时间)或 23:15(5 周期)。本页所有推荐时间都是 90 分钟的倍数。</p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>90 分钟一个周期</strong> — 浅睡 → 深睡 → REM,四阶段循环</li>
      <li><strong>+15 分钟入睡时间</strong> — 平均入睡耗时,已加进每个推荐 bedtime</li>
      <li><strong>个体差异 70-110 分钟</strong> — 90 分钟是规划用的平均值</li>
    </ul>
    <p>传统说法认为农历初一和十五的月相会影响睡眠质量,可以用<a href="/lunar-calendar" className="text-orange-500 hover:underline">农历转换器</a>查看月相日期。</p>
    <h3 className="font-semibold text-gray-700">8 小时睡眠有几个周期?</h3>
    <p>8 小时 = 480 分钟,480 ÷ 90 ≈ 5.3——所以 8 小时里有约 <strong>5 个完整周期(7.5 小时)</strong>加 30 分钟零头。这 30 分钟要么是入睡缓冲,要么落在半个周期里被闹钟打断,这就是「睡满 8 小时还是困」的常见原因。想在周期边界醒来:实际睡眠目标设 <strong>7.5 小时(5 周期)</strong>或 9 小时(6 周期)。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Based on 90-minute sleep cycles, enter your bedtime or wake-up time to find the optimal schedule. Wake up feeling refreshed instead of groggy — no more alarm clock fatigue.</p>
    <h3 className="font-semibold text-gray-700">How the 90-minute sleep cycle works</h3>
    <p>A full sleep cycle runs about <strong>90 minutes</strong>: light sleep (N1/N2), deep sleep (N3), then REM. Adults need 4-6 complete cycles per night — so the 90-minute sleep cycle calculator works backwards from your alarm: 7:00 AM wake-up means bedtime around 9:45 PM (6 cycles + 15 min to fall asleep) or 11:15 PM (5 cycles).</p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>90-minute intervals</strong> — every option on this page is a multiple of 90 minutes</li>
      <li><strong>+15 minutes</strong> — average time to fall asleep, added to every bedtime</li>
      <li><strong>70-110 min variance</strong> — real cycles vary; 90 minutes is the planning average</li>
    </ul>
    <p>Some believe moon phases affect sleep quality. Check full moon dates with our <a href="/lunar-calendar" className="text-orange-500 hover:underline">lunar calendar converter</a>.</p>
    <h3 className="font-semibold text-gray-700">How many sleep cycles in 8 hours?</h3>
    <p>Eight hours is 480 minutes; 480 ÷ 90 ≈ 5.3 — so 8 hours holds about <strong>5 complete cycles (7.5 hours)</strong> plus a 30-minute remainder. That remainder is either fall-asleep buffer or half a cycle cut off by your alarm, which is why "8 full hours" can still feel groggy. To wake at a cycle boundary, target <strong>7.5 hours (5 cycles)</strong> or 9 hours (6 cycles) of actual sleep.</p>
  </div>
)

export default async function SleepCalculatorPage({
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
    name: lang === 'zh' ? '睡眠计算器 - 90 分钟周期反推' : 'Sleep Calculator - 90-Minute Cycle, Bedtime & Wake Time',
    alternateName: lang === 'zh' ? '睡眠周期计算器' : 'Sleep Cycle Calculator',
    url: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/sleep-calculator' : '/sleep-calculator'}`,
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'SleepCalculator',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      lang === 'zh'
        ? '基于 90 分钟睡眠周期反推最佳入睡时间(输入起床时间)或最佳起床时间(输入入睡时间)。支持 4-6 个完整周期选择。'
        : 'Back-calculate optimal bedtime from wake time, or optimal wake time from bedtime, based on 90-minute sleep cycles. Choose 4-6 complete cycles.',
    featureList: [
      'Bedtime calculator (enter wake time → get bedtime)',
      'Wake time calculator (enter bedtime → get wake times)',
      '90-minute sleep cycle basis (light → deep → REM)',
      '4-6 cycle options (6h / 7.5h / 9h)',
      'Adult + child age recommendations',
      'Free, no signup, browser-only',
      'Bilingual English / Chinese',
    ],
    dateModified: '2026-10-06',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/sleep-calculator' : '/zh/sleep-calculator'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '睡眠计算器' : 'Sleep Calculator'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <SleepCalculatorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/countdown" className="text-orange-500 hover:underline">📅 {lang === 'zh' ? '日期倒计时' : 'Date Countdown'}</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/password-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔐 密码生成器' : '🔐 Password Generator'}</a></li>
                  <li><a href="/lunar-calendar" className="text-orange-500 hover:underline">{lang === 'zh' ? '📆 农历转换' : '📆 Lunar Calendar'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}