import type { Metadata } from 'next'
import UnitConverter from '../../unit-converter/converter-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '单位换算器 - 长度/重量/温度即时互转',
    description: '免费在线单位换算器:长度、重量、温度等 30+ 单位即时互转,无需注册,无广告。',
    openGraph: {
      title: '单位换算器 - 实用计算器',
      description: '免费在线单位换算器:长度/重量/温度即时互转',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/unit-converter',
      languages: {
        'zh-CN': '/zh/unit-converter',
        'en-US': '/unit-converter',
        'x-default': '/unit-converter',
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
      name: '支持哪些单位?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '长度(米、厘米、公里、英里、英寸、英尺);重量(千克、克、磅、盎司、吨);温度(摄氏度、华氏度、开尔文);面积(平方米、英亩、公顷);体积(升、加仑、毫升)。共 30+ 单位跨 5 大类。',
      },
    },
    {
      '@type': 'Question',
      name: '温度转换跟其他单位不一样吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。长度/重量/面积/体积都是线性换算(乘以系数),但温度涉及偏移。公式:C = (F - 32) × 5/9, F = C × 9/5 + 32, K = C + 273.15。',
      },
    },
    {
      '@type': 'Question',
      name: '转换结果准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '准确。本工具使用国际标准单位定义(SI 国际单位制、imperial 英制)。所有换算系数都按 NIST 公布的值。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么不用计算器 App?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '手机自带计算器只能算数值,不能识别单位。本工具专门为单位换算优化,比换算表格便宜,比翻字典快。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>长度、重量、温度、面积、体积一键换算，支持公制和英制互转。出国旅行、做饭烘焙、看国外房源都能用。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持类别</h3>
    <ul className="space-y-1 text-sm">
      <li>📏 长度 — 米/厘米/英尺/英寸</li>
      <li>⚖️ 重量 — 千克/磅/盎司</li>
      <li>🌡️ 温度 — °C/°F/K</li>
      <li>📐 面积 — m²/英亩/公顷</li>
      <li>🧪 体积 — 升/加仑/毫升</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有数据在浏览器本地处理，不上传服务器。</p>
  </div>
)

export default async function UnitConverterPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const lang = 'zh'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '单位换算器 — 30+ 单位即时互转',
    alternateName: '单位换算',
    url: 'https://tools-site-production.up.railway.app/zh/unit-converter',
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'UnitConverter',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '在线单位换算器:长度、重量、温度、面积、体积等 30+ 单位即时互转。免费、无需注册。',
    featureList: [
      'Length: m, cm, ft, in, yd, mile',
      'Weight: kg, lb, oz, g',
      'Temperature: °C, °F, K',
      'Area: m², ft², acre',
      'Volume: L, gal, cup, fl oz',
      'No signup, all in browser',
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
            <a href="/unit-converter" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">单位换算器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <UnitConverter lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">更多工具</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">⚖️ BMI 计算器</a></li>
                  <li><a href="/zh/countdown" className="text-orange-500 hover:underline">📅 倒计时</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">🏷️ 折扣计算器</a></li>
                  <li><a href="/zh/lunar-calendar" className="text-orange-500 hover:underline">📆 农历转换</a></li>
                  <li><a href="/zh/sleep-calculator" className="text-orange-500 hover:underline">😴 睡眠计算器</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
