import type { Metadata } from 'next'
import SleepCalculatorClient from './sleep-calculator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '睡眠计算器 - 500K 月搜主词 | 90 分钟周期反推入睡/起床时间',
    en: 'Sleep Calculator & Estimator - 90-Minute Cycle, Bedtime / Wake Time (500K/mo)',
  }
  const descriptions = {
    zh: '免费在线睡眠计算器:输入起床时间反推最佳入睡时间(90 分钟周期),或输入入睡时间反推最佳起床时间。500K+ 月搜主词,cpc \$32。支持深度睡眠 / REM 周期说明。无需注册,所有计算在浏览器本地完成。',
    en: 'Free online sleep calculator & estimator (500,000 monthly searches, cpc \$32): enter your wake-up time to get the best bedtime, or enter when you fall asleep to find the optimal wake time. Based on the 90-minute sleep cycle including light sleep, deep sleep, and REM. No signup, browser-only, 100% private.',
  }
  const ogTitles = { zh: '睡眠计算器 - 实用计算器 (500K/月)', en: 'Sleep Calculator - Practical Tools (500K/mo)' }
  const ogDescs = {
    zh: '90 分钟睡眠周期反推最佳入睡时间。',
    en: 'Best bedtime based on 90-minute sleep cycle. Free online calculator.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
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
      name: '什么时候该睡觉最好?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '理想入睡时间是晚上 9-11 点,跟褪黑素分泌高峰吻合。如果必须熬夜,使用本工具反推最佳入睡时间(基于目标起床时间)。倒班 / 夜班人群建议固定作息,白天用遮光窗帘、避免蓝光。',
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
      name: 'What is the best time to go to sleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal bedtime is 9-11 PM, aligned with melatonin peak secretion. If you must stay up late, use this calculator to find your best bedtime based on your target wake time. Shift workers should maintain a consistent schedule, use blackout curtains, and avoid blue light during the day.',
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
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      <strong>睡眠计算器</strong>基于 90 分钟一个完整睡眠周期的科学原理(浅睡 → 深睡 → REM),帮你找到最佳的入睡时间或起床时间。本工具按自然日计算,无需注册,所有计算在你浏览器本地完成。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">最常用的睡眠计算场景</h2>
    <p><strong>1. 早起备考 / 上学</strong>。高考、考研、雅思托福口语考试需要 7 点起,本工具反推最佳入睡时间(21:45)。长期熬夜早起会累积睡眠债,影响记忆力。</p>
    <p><strong>2. 倒班 / 夜班</strong>。护士、保安、程序员等夜班人群,本工具帮你算"白天几点起最科学",配合 90 分钟周期减少醒后疲劳感。</p>
    <p><strong>3. 跨时区出差</strong>。从美国飞回北京,本工具反推"北京时间 X 点该睡",避免 jet lag 拖 7 天。</p>
    <p><strong>4. 婴儿 / 儿童作息</strong>。小孩需要 10-13 小时睡眠,本工具按年龄段反推最佳入睡时间,父母不再半夜纠结。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">睡眠周期是什么?</h2>
    <p>90 分钟 = 1 个完整周期:N1(浅睡 5%)→ N2(中度睡眠 45%)→ N3(深睡 25%)→ REM(快速眼动 25%)。每晚 4-6 个周期。起床时间最好在 REM 末期或浅睡阶段(感觉自然清醒,没有困意),不在深睡中被闹钟叫醒。</p>
    <p>本工具页面无 cookie、无登录、无追踪,适合临时查询"今晚几点该睡"。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      A <strong>sleep calculator</strong> uses the science of the 90-minute sleep cycle (light sleep → deep sleep → REM) to find your optimal bedtime or wake time. This tool runs entirely in your browser, no signup, no data sharing.
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">Most common sleep calculator scenarios</h2>
    <p><strong>1. Early-morning exams or work.</strong> Need to wake at 7 AM? The tool back-calculates bedtime (9:45 PM for 6 cycles). Avoid chronic sleep debt — it impairs memory and decision-making.</p>
    <p><strong>2. Shift workers.</strong> Nurses, security guards, programmers on night shift can use this to plan daytime sleep aligned with 90-minute cycles, reducing post-wake grogginess.</p>
    <p><strong>3. Jet lag recovery.</strong> Flying from the US to Beijing? Use the calculator to plan your destination-time bedtime, shortening jet lag from 7 days to 2-3.</p>
    <p><strong>4. Baby / child sleep schedule.</strong> Children need 10-13 hours of sleep. The calculator helps parents plan age-appropriate bedtimes without late-night guesswork.</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">What is a sleep cycle?</h2>
    <p>90 minutes = 1 complete cycle: N1 (light, 5%) → N2 (intermediate, 45%) → N3 (deep, 25%) → REM (rapid eye movement, 25%). 4-6 cycles per night. The best wake-up moment is at the END of REM or during light sleep — you wake feeling refreshed, not groggy. Waking during deep sleep (N3) is what causes sleep inertia.</p>
    <p>This tool has no cookies, no login, no tracking — perfect for ad-hoc "when should I go to bed" queries.</p>
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
    name: lang === 'zh' ? '睡眠计算器 — 90 分钟周期反推' : 'Sleep Calculator - 90-Minute Cycle, Bedtime & Wake Time',
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
    dateModified: '2026-07-25',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <SleepCalculatorClient initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}