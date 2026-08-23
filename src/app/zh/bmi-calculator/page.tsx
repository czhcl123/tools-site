import type { Metadata } from 'next'
import BmiCalculator from '../../bmi-calculator/bmi-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: 'BMI 计算器 - 免费在线体重指数计算',
    en: 'BMI Calculator - Free Online Body Mass Index Calculator',
  }
  const descriptions = {
    zh: '免费在线 BMI 计算器:输入身高体重即出体重指数,支持亚洲人阈值,男女分类判断,无需注册。',
    en: 'Free BMI calculator: enter height and weight to get your body mass index instantly. Asian/WHO thresholds, metric and imperial units, no signup.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/bmi-calculator',
      languages: {
        'zh-CN': '/zh/bmi-calculator',
        'en-US': '/bmi-calculator',
        'x-default': '/bmi-calculator',
      },
    },
  }
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>
      BMI（身体质量指数）是国际通用的体重评估标准。本计算器支持<strong>亚洲/WHO 双标准</strong>，输入身高体重即出结果。
    </p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">计算公式</h3>
    <p className="bg-gray-50 rounded-lg px-4 py-3 font-mono text-sm">BMI = 体重(kg) ÷ 身高(m)²</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">亚洲人标准</h3>
    <ul className="space-y-1 text-sm">
      <li>🟢 正常：18.5 – 23.9</li>
      <li>🟡 偏胖：24.0 – 27.9</li>
      <li>🔴 肥胖：≥ 28.0</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">数据仅供参考，不能替代医学诊断。</p>
  </div>
)

const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'BMI 是什么?怎么算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI(Body Mass Index,身体质量指数)是国际上常用的衡量人体胖瘦程度的标准,计算公式:BMI = 体重(kg) ÷ 身高(m)²。例如 60 kg / (1.65m)² = 22.04,属于正常范围。本计算器输入身高 cm + 体重 kg,自动换算给出结果。',
      },
    },
    {
      '@type': 'Question',
      name: '亚洲人 BMI 标准和中国大陆标准分别是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '中国大陆 / WHO 亚洲标准:18.5 - 23.9 正常,24.0 - 27.9 偏胖,≥ 28 肥胖,低于 18.5 偏瘦。西方 WHO 标准:18.5 - 24.9 正常,25 - 29.9 超重,≥ 30 肥胖。同样的 BMI,亚洲人患高血压 / 糖尿病风险比白人高,这就是为什么本计算器使用亚洲阈值。',
      },
    },
    {
      '@type': 'Question',
      name: '男女 BMI 标准是否应该不同?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。WHO 在 2024 报告中指出女性体脂率天然比男性高 5-10%,相同 BMI 值的女性健康风险比男性低一些。但 BMI 标准本身不分性别 — 健康阈值是统一的。差别在于解读:女性 BMI 22 和男性 BMI 22,在健身 / 美学语境里评判标准不同。本计算器男女阈值共享,但状态色块按性别不同(女性 < 19 偏瘦界限略低)。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI 能完全反映健康状况吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI 是入门参考指标,但有局限:不区分肌肉和脂肪(健美运动员 BMI 28 仍健康),不反映内脏脂肪分布,儿童 / 孕妇 / 老人不能用成人 BMI。完整健康评估应结合腰围、体脂率、血糖、血脂、家族病史等。本工具适合日常粗筛,不替代体检。',
      },
    },
    {
      '@type': 'Question',
      name: '支持英制单位(英尺、磅)吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。输入英尺英寸 + 磅(例如 5\'7" + 145 lb),本计算器内部换算成 cm + kg 再算 BMI,结果一致。如果你输的是英寸数(比如只 67),也可以输入 67 英寸 = 170 cm 系统会自动判断。',
      },
    },
  ],
}

export default async function BmiCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'BMI 计算器',
    url: 'https://tools-site-production.up.railway.app/zh/bmi-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '免费在线 BMI 计算器:输入身高体重即出体重指数,支持亚洲人阈值,男女分类判断,无需注册。',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">
              🧮 实用计算器
            </a>
            <a
              href="/bmi-calculator"
              className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50"
            >
              EN
            </a>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">BMI 计算器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 左侧：SEO 说明 */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>

            {/* 中间：计算器 */}
            <section className="lg:col-span-6">
              <BmiCalculator lang={lang} />
            </section>

            {/* 右侧：相关工具 */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/countdown" className="text-orange-500 hover:underline">📅 日期倒计时</a></li>
                  <li><a href="/zh/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/zh/heic-to-jpg" className="text-orange-500 hover:underline">{lang === 'zh' ? '🖼️ HEIC 转 JPG' : '🖼️ HEIC to JPG'}</a></li>
                  <li><a href="/zh/json-formatter" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔧 JSON 格式化' : '🔧 JSON Formatter'}</a></li>
                  <li><a href="/zh/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
