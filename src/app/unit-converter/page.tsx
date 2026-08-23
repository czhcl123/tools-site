import type { Metadata } from 'next'
import UnitConverter from './converter-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '单位换算器 - 长度/重量/温度即时互转',
    en: 'Unit Converter - cm to inches, kg to lb, °C to °F',
  }
  const descriptions = {
    zh: '免费在线单位换算器:长度、重量、温度等 30+ 单位即时互转,无需注册,无广告。',
    en: 'Free online unit converter: cm to inches, kg to lb, °C to °F and 30+ more units. No signup, no ads, all in browser.',
  }
  const ogTitles = { zh: '单位换算器 - 实用计算器', en: 'Unit Converter - Practical Tools' }
  const ogDescs = {
    zh: '免费在线单位换算器:长度/重量/温度即时互转',
    en: 'Convert cm to inches, kg to lb, Celsius to Fahrenheit. 30+ units free online.'
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/unit-converter' : '/unit-converter'}`,
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
        text: '长度(米 m、厘米 cm、公里 km、英里 mi、英寸 in、英尺 ft、码 yd、海里 nmi);重量(千克 kg、克 g、磅 lb、盎司 oz、吨 t);温度(摄氏度 °C、华氏度 °F、开尔文 K);面积(平方米 m²、英亩 acre、公顷 ha);体积(升 L、加仑 gal、毫升 ml、立方米 m³)。共 30+ 单位跨 5 大类。',
      },
    },
    {
      '@type': 'Question',
      name: '温度转换跟其他单位不一样吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。长度 / 重量 / 面积 / 体积都是线性换算(乘以系数),但温度涉及偏移。公式:C = (F - 32) × 5/9,F = C × 9/5 + 32,K = C + 273.15。常见错误:1 °C 等于 33.8 °F 不是 1.8 °F。本工具按公式精确计算,小数位保留 4 位。',
      },
    },
    {
      '@type': 'Question',
      name: '转换结果准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '准确。本工具使用国际标准单位定义(SI 国际单位制、imperial 英制、美制)。所有换算系数都按 NIST 美国国家标准与技术研究院公布的值。例如 1 英寸 = 0.0254 米(精确),1 磅 = 0.45359237 千克(精确)。小数精度 4-6 位,适合工程 / 烹饪 / 日常。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么不用计算器 App?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '手机自带计算器只能算数值,不能识别单位。本工具专门为单位换算优化:输入"1 pound"自动理解是 0.4536 kg,不用你先想公式。比换算表格便宜,比翻字典快。',
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
      name: 'Which units are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Length (meter, centimeter, kilometer, mile, inch, foot, yard, nautical mile); Weight (kilogram, gram, pound, ounce, metric ton, US ton); Temperature (Celsius, Fahrenheit, Kelvin); Area (square meter, square foot, acre, hectare); Volume (liter, gallon US, gallon UK, milliliter, cubic meter). 30+ units across 5 categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does temperature work differently from other units?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Length / weight / area / volume are all linear: convert by multiplying a factor. Temperature adds an offset, so the formulas are: F = C × 9/5 + 32, C = (F - 32) × 5/9, K = C + 273.15. Common mistake: 1 °C is not 1.8 °F, it is 33.8 °F (because of the +32 offset). This calculator uses the correct formula with 4 decimal precision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate are the conversions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use the international standard definitions (SI base units, plus the imperial and US customary definitions published by NIST). 1 inch = 0.0254 m exactly, 1 pound = 0.45359237 kg exactly. Precision is 4-6 decimal places — enough for engineering, cooking, and most professional use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why not just use a calculator app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Phone calculators only handle numbers, not units. Type 1 into a calculator and you have to remember that 1 pound is 0.4536 kg, then multiply manually. This tool understands units natively: type 1 pound, get kg (or feet, fahrenheit, etc.) instantly. Faster than lookup tables, less error-prone than mental math.',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>长度、重量、温度、面积、体积一键换算,支持公制和英制互转。出国旅行、做饭烘焙、看国外房源都能用。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Convert length, weight, temperature, area, and volume between metric and imperial units instantly. Useful for travel, cooking with international recipes, and browsing foreign real estate listings.</p>
  </div>
)

export default async function UnitConverterPage({
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
    name: lang === 'zh' ? '单位换算器 — 30+ 单位即时互转' : 'Unit Converter - 30+ Units cm to inches, kg to lb',
    alternateName: lang === 'zh' ? '单位换算' : 'Measurement Converter',
    url: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/unit-converter' : '/unit-converter'}`,
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'UnitConverter',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      lang === 'zh'
        ? '在线单位换算器:长度、重量、温度、面积、体积等 30+ 单位即时互转。免费、无需注册。'
        : 'Online unit converter: 30+ units across length, weight, temperature, area, volume. cm to inches, kg to lb, °C to °F, liters to gallons. Free, no signup, browser-side.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/unit-converter?lang=en' : '/zh/unit-converter?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '单位换算器' : 'Unit Converter'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <UnitConverter lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/countdown" className="text-orange-500 hover:underline">📅 倒计时</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/lunar-calendar" className="text-orange-500 hover:underline">{lang === 'zh' ? '📆 农历转换' : '📆 Lunar Calendar'}</a></li>
                  <li><a href="/sleep-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '😴 睡眠计算器' : '😴 Sleep Calculator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
