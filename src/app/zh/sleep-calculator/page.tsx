import type { Metadata } from 'next'
import SleepCalculatorClient from '../../sleep-calculator/sleep-calculator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '睡眠计算器 - 90 分钟周期反推最佳入睡/起床时间',
    description: '免费在线睡眠计算器:输入起床时间反推最佳入睡时间(90 分钟周期),或输入入睡时间反推最佳起床时间。支持深度睡眠/REM 周期说明,无需注册。',
    openGraph: {
      title: '睡眠计算器 - 实用计算器',
      description: '90 分钟睡眠周期反推最佳入睡时间。',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/sleep-calculator',
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
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>基于 90 分钟睡眠周期，输入你几点睡觉或几点起床，算出最佳入睡/起床时间，让你醒来时不犯困。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">计算原理</h3>
    <p className="bg-gray-50 rounded-lg px-4 py-3 font-mono text-sm">90分钟 × 周期数 + 15分钟入睡 = 最佳时间</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">推荐周期</h3>
    <ul className="space-y-1 text-sm">
      <li>😴 6 个周期 = 9 小时（最充分）</li>
      <li>💤 5 个周期 = 7.5 小时（推荐）</li>
      <li>⏰ 4 个周期 = 6 小时（最低）</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有计算在浏览器本地完成，数据不上传。</p>
  </div>
)

export default async function SleepCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'en' ? 'en' : 'zh'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '睡眠计算器 - 90 分钟周期反推',
    alternateName: '睡眠周期计算器',
    url: 'https://tools-site-production.up.railway.app/zh/sleep-calculator',
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'SleepCalculator',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '基于 90 分钟睡眠周期反推最佳入睡时间(输入起床时间)或最佳起床时间(输入入睡时间)。支持 4-6 个完整周期选择。',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/sleep-calculator?lang=en" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">睡眠计算器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <SleepCalculatorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/zh/countdown" className="text-orange-500 hover:underline">{lang === 'zh' ? '📅 倒计时' : '📅 Countdown'}</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/zh/lunar-calendar" className="text-orange-500 hover:underline">{lang === 'zh' ? '📆 农历转换' : '📆 Lunar Calendar'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
