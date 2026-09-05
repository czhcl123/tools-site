import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? '旅行指南：国际单位换算完全手册' : 'Travel Unit Conversion Guide',
    description: lang === 'zh' ? '出国旅行必备单位换算：长度、温度、重量、速度,以及常用换算速查表。' : 'Essential unit conversions for international travel: length, temperature, weight, speed, with quick reference tables.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/unit-converter-travel',
      languages: { 'en-US': '/blog/unit-converter-travel', 'x-default': '/blog/unit-converter-travel' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/unit-converter-travel' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么要学单位换算?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          出国旅行时,你会遇到英里、华氏度、磅等不熟悉的单位。不会换算可能<strong>买错东西、定错温度、误解速度限制</strong>。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">长度换算速查</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>1英寸 = 2.54厘米</li>
          <li>1英尺 = 30.48厘米</li>
          <li>1英里 = 1.609公里</li>
          <li>1米 = 3.281英尺</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">温度换算</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          华氏转摄氏:°C = (°F - 32) × 5/9。快速估算:°F减30再除以2。例如86°F ≈ (86-30)/2 = 28°C。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">重量和体积</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>1磅 = 0.454公斤</li>
          <li>1盎司 = 28.35克</li>
          <li>1加仑(美) = 3.785升</li>
          <li>1加仑(英) = 4.546升</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">各国速度单位</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大多数国家用公里/小时(km/h),美国用英里/小时(mph)。限速100km/h ≈ 62mph。租车时务必注意仪表盘单位。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → 在线单位换算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Learn Unit Conversion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When traveling abroad, you'll encounter miles, Fahrenheit, pounds. Not knowing conversions can lead to <strong>buying wrong amounts, setting wrong temperatures, misunderstanding speed limits</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Length Conversion Quick Reference</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>1 inch = 2.54 cm</li>
          <li>1 foot = 30.48 cm</li>
          <li>1 mile = 1.609 km</li>
          <li>1 meter = 3.281 feet</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Temperature Conversion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          F to C: °C = (°F - 32) × 5/9. Quick estimate: subtract 30, divide by 2. E.g., 86°F ≈ (86-30)/2 = 28°C.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Weight and Volume</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>1 pound = 0.454 kg</li>
          <li>1 ounce = 28.35 g</li>
          <li>1 gallon (US) = 3.785 L</li>
          <li>1 gallon (UK) = 4.546 L</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Speed Units by Country</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most countries use km/h; the US uses mph. Speed limit 100km/h ≈ 62mph. Always check your rental car's speedometer unit.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → Try the Online Unit Converter
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '旅行单位换算指南' : 'Travel Unit Conversion Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
