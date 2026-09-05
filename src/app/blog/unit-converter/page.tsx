import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '单位换算完全指南：教你快速进行长度、重量、温度等常用单位的精确换算，附带实用换算表和出国旅行、学术研究等场景的换算技巧。' : 'en'
  return {
    title: lang === 'zh'
      ? '单位换算完全指南 — 长度重量温度一键转换'
      : 'Unit Converter Guide',
    description: lang === 'zh'
      ? '长度、重量、温度、面积、体积单位换算教程,含公制英制对照和常见换算公式。'
      : 'How to convert units: length, weight, temperature, area, volume. Metric-imperial conversion tables and formulas included.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/unit-converter',
      languages: { 'en-US': '/blog/unit-converter', 'x-default': '/blog/unit-converter' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/unit-converter' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么要会单位换算?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          看国外食谱写着"2 cups flour"?出国旅游看到"72°F"不知冷热?海淘商品标"1.5 lb"不知道多重?单位换算是日常生活、旅行、学习中经常遇到的问题。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">五种最常用换算</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 长度</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 英寸 = 2.54 厘米 | 1 英尺 = 30.48 厘米 | 1 英里 = 1.609 公里 | 1 米 = 3.281 英尺。记住"1 英寸约 2.5 厘米"就够了。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 重量</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 磅 = 453.6 克 | 1 盎司 = 28.35 克 | 1 千克 = 2.205 磅。海淘食品常用盎司,衣服用磅。记住"1 磅约 0.45 千克"。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 温度</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          °C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32 | 0°C = 32°F | 100°C = 212°F | 37°C = 98.6°F(体温)。速记:20°C ≈ 68°F(室温),30°C ≈ 86°F(夏天)。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. 面积</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 平方米 = 10.764 平方英尺 | 1 英亩 = 4047 平方米 | 1 平方英里 = 2.59 平方公里。买房/租房看国外房源时常用。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. 体积/容量</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 加仑(美) = 3.785 升 | 1 加仑(英) = 4.546 升 | 1 杯 = 236.6 毫升 | 1 液盎司 = 29.57 毫升。做饭/烘焙必会。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → 立即使用单位换算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need Unit Conversion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A recipe calls for "2 cups of flour"? A weather app shows "72°F" and you can't tell if it's hot or cold? A product weighs "1.5 lb" and you have no idea how heavy that is? Unit conversion comes up constantly in daily life, travel, cooking, and study.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Five Most Common Conversions</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Length</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 inch = 2.54 cm | 1 foot = 30.48 cm | 1 mile = 1.609 km | 1 meter = 3.281 feet. Just remember: 1 inch ≈ 2.5 cm.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Weight</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 pound = 453.6 g | 1 ounce = 28.35 g | 1 kg = 2.205 lb. Remember: 1 lb ≈ 0.45 kg.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Temperature</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          °C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32. Quick references: 0°C = 32°F (freezing), 37°C = 98.6°F (body temp), 100°C = 212°F (boiling).
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Area</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 sq meter = 10.764 sq feet | 1 acre = 4,047 sq meters | 1 sq mile = 2.59 sq km. Useful when browsing international real estate listings.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Volume / Capacity</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 US gallon = 3.785 liters | 1 UK gallon = 4.546 liters | 1 cup = 236.6 ml | 1 fl oz = 29.57 ml. Essential for cooking with international recipes.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → Try the Unit Converter Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '单位换算完全指南' : 'Unit Converter Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
