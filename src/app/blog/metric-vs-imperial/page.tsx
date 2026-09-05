import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '公制 vs 英制：完整对比指南'
      : 'Metric vs Imperial: A Complete Comparison',
    description: lang === 'zh'
      ? '公制和英制单位的完整对比：历史、使用国家、换算表（长度、重量、温度），为什么公制更简单。'
      : 'Complete metric vs imperial comparison: history, countries, conversion tables (length, weight, temperature), and why metric is easier.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/metric-vs-imperial',
      languages: { 'en-US': '/blog/metric-vs-imperial', 'x-default': '/blog/metric-vs-imperial' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/metric-vs-imperial' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">两大单位系统</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📐 <strong>公制（Metric）</strong>：基于10的幂次，全球195个国家中约170个使用。单位：米、公斤、升。</p>
          <p>📏 <strong>英制（Imperial）</strong>：基于历史习惯，主要在美国使用。单位：英尺、磅、加仑。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">使用国家</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>公制</strong>：几乎所有国家（中国、日本、德国、法国、巴西等）。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>英制</strong>：仅美国、利比里亚、缅甸。但美国也部分使用公制（科学、医疗、军方）。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>英国/加拿大</strong>：官方用公制，但日常生活中两者混用（人说"英里"，买牛奶说"升"）。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见换算表</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p><strong>长度</strong>：1 英寸 = 2.54 cm | 1 英尺 = 30.48 cm | 1 英里 = 1.609 km</p>
          <p><strong>重量</strong>：1 磅 = 0.454 kg | 1 盎司 = 28.35 g</p>
          <p><strong>温度</strong>：°C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32</p>
          <p><strong>容量</strong>：1 加仑(美) = 3.785 L | 1 加仑(英) = 4.546 L</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么公制更简单？</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>10的倍数</strong>：1 km = 1000 m = 100,000 cm，移小数点就行</li>
          <li><strong>统一前缀</strong>：kilo-(千)、centi-(百)、milli-(毫) 通用</li>
          <li><strong>科学标准</strong>：全球科研、医疗、工程都用公制</li>
          <li><strong>温度直觉</strong>：0°C = 水结冰，100°C = 水沸腾，简单好记</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          英制的问题：1 英尺 = 12 英寸，1 英里 = 5280 英尺，1 加仑 = 4 夸脱 = 8 品脱……每个换算都不一样。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 美国会转用公制吗？</strong><br />
          A: 1975年美国通过了公制转换法案，但没有强制执行。短期内不太可能完全转换，因为成本太高。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 温度用 °F 还是 °C？</strong><br />
          A: 全球95%的人用 °C。美国用 °F。°F 对人体温度更精细（0-100°F 大约覆盖室外温度范围），°C 对科学计算更方便。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → 快速转换公制和英制单位
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Two Unit Systems</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📐 <strong>Metric</strong>: Base-10 system used by ~170 of 195 countries. Units: meter, kilogram, liter.</p>
          <p>📏 <strong>Imperial</strong>: History-based system, primarily used in the US. Units: foot, pound, gallon.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Which Countries Use Which?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Metric</strong>: Nearly every country (China, Japan, Germany, France, Brazil, etc.)
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Imperial</strong>: Only the US, Liberia, and Myanmar. But the US also uses metric in science, medicine, and military.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>UK/Canada</strong>: Officially metric, but both systems coexist in daily life (people say "miles" but buy milk in "liters").
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Conversions</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p><strong>Length</strong>: 1 inch = 2.54 cm | 1 foot = 30.48 cm | 1 mile = 1.609 km</p>
          <p><strong>Weight</strong>: 1 pound = 0.454 kg | 1 ounce = 28.35 g</p>
          <p><strong>Temperature</strong>: °C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32</p>
          <p><strong>Volume</strong>: 1 US gallon = 3.785 L | 1 UK gallon = 4.546 L</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Metric Is Easier</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Powers of 10</strong>: 1 km = 1000 m = 100,000 cm — just move the decimal</li>
          <li><strong>Unified prefixes</strong>: kilo- (thousand), centi- (hundredth), milli- (thousandth) work everywhere</li>
          <li><strong>Scientific standard</strong>: Global research, medicine, and engineering all use metric</li>
          <li><strong>Intuitive temperature</strong>: 0°C = water freezes, 100°C = water boils — simple to remember</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Imperial's problem: 1 foot = 12 inches, 1 mile = 5,280 feet, 1 gallon = 4 quarts = 8 pints... every conversion is different.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Will the US ever switch to metric?</strong><br />
          A: The US passed a Metric Conversion Act in 1975 but never mandated it. A full switch is unlikely soon — the cost would be enormous.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Should I use °F or °C?</strong><br />
          A: 95% of the world uses °C. The US uses °F. °F is more granular for human comfort (0-100°F roughly covers outdoor temps); °C is more convenient for science.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → Convert between metric and imperial units
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '公制 vs 英制：完整对比指南' : 'Metric vs Imperial: A Complete Comparison'}
      </h1>
      {content[lang]}
    </div>
  )
}
