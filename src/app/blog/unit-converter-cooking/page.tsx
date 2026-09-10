import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '厨房单位换算完全指南：烹饪和烘焙中常用的体积、重量和温度换算，为什么精确测量很重要，如何转换国际食谱，以及海拔对烹饪的影响。' : 'en'
  return {
    title: lang === 'zh'
      ? '厨房单位换算：烹饪测量完全指南'
      : 'Kitchen Unit Converter: Cooking Measurements Guide',
    description: lang === 'zh'
      ? '烹饪烘焙常用单位换算,cup 到 ml、温度换算、国际食谱转换和海拔调整指南。'
      : 'Common cooking unit conversions: cups to ml, temperature conversions, international recipe adaptation, and altitude adjustments.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/unit-converter-cooking',
      languages: { 'en-US': '/blog/unit-converter-cooking', 'x-default': '/blog/unit-converter-cooking' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/unit-converter-cooking' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么烹饪需要精确换算?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中餐可以"适量"，但烘焙是化学实验。酵母多 1 克面团发过头，糖少 5 克饼干不脆，烤箱温度差 10°C 蛋糕塌陷。精确的单位换算是成功烘焙的基础。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常用体积换算</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>1 cup（杯）</strong>= 240 ml = 16 tbsp（汤匙）</li>
          <li><strong>1 tbsp（汤匙）</strong>= 15 ml = 3 tsp（茶匙）</li>
          <li><strong>1 tsp（茶匙）</strong>= 5 ml</li>
          <li><strong>1 oz（盎司）</strong>= 30 ml</li>
          <li><strong>1 pint（品脱）</strong>= 480 ml = 2 cups</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">温度换算</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          美式食谱用华氏度（°F），中式和欧式用摄氏度（°C）。快速换算：<strong>°C = (°F - 32) × 5/9</strong>。常用烘焙温度对照：350°F = 175°C，375°F = 190°C，400°F = 200°C，425°F = 220°C。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">重量 vs 体积</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 cup 面粉 ≠ 1 cup 糖 ≠ 1 cup 黄油——不同食材密度不同，体积相同重量差异大。面粉 1 cup ≈ 120g，白糖 1 cup ≈ 200g，黄油 1 cup ≈ 227g。专业烘焙建议用电子秤按克称量。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">转换国际食谱</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          看到美国 YouTube 博主的食谱写 "2 cups flour"？用单位换算工具快速转换为克。日本食谱用 "g" 但份量偏小（1 人份），需要按比例放大。欧洲食谱常用 "dl"（分升），1 dl = 100 ml。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">海拔对烹饪的影响</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>海拔 1500m 以上</strong>：水的沸点降低，煮东西时间更长</li>
          <li><strong>烘焙调整</strong>：温度提高 15–25°C，液体增加 1–2 tbsp</li>
          <li><strong>酵母发酵</strong>：高海拔发酵更快，减少酵母用量 25%</li>
          <li><strong>糖和泡打粉</strong>：高海拔适当减少糖量，增加泡打粉</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → 用单位换算工具搞定所有烹饪测量
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Precise Conversion Matters in Cooking</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chinese cooking allows "a pinch of this," but baking is chemistry. One extra gram of yeast overproofs dough, 5g less sugar makes cookies limp, 10°F oven difference collapses a cake. Accurate unit conversion is the foundation of successful baking.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Volume Conversions</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>1 cup</strong> = 240 ml = 16 tbsp</li>
          <li><strong>1 tbsp</strong> = 15 ml = 3 tsp</li>
          <li><strong>1 tsp</strong> = 5 ml</li>
          <li><strong>1 oz</strong> = 30 ml</li>
          <li><strong>1 pint</strong> = 480 ml = 2 cups</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Temperature Conversions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          American recipes use Fahrenheit (°F); Chinese and European use Celsius (°C). Quick formula: <strong>°C = (°F - 32) × 5/9</strong>. Common baking temps: 350°F = 175°C, 375°F = 190°C, 400°F = 200°C, 425°F = 220°C.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Weight vs Volume</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 cup flour ≠ 1 cup sugar ≠ 1 cup butter — different densities mean the same volume has very different weights. Flour: 1 cup ≈ 120g. Sugar: 1 cup ≈ 200g. Butter: 1 cup ≈ 227g. Professional bakers weigh in grams with a kitchen scale.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Adapting International Recipes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          An American YouTube recipe says "2 cups flour"? Convert to grams with a unit converter. Japanese recipes use "g" but portions are small (1 serving) — scale up proportionally. European recipes often use "dl" (deciliter), where 1 dl = 100 ml.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Altitude Effects on Cooking</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Above 1500m</strong> — water boils at lower temperatures, cooking takes longer</li>
          <li><strong>Baking adjustments</strong> — increase temp by 15–25°C, add 1–2 tbsp liquid</li>
          <li><strong>Yeast fermentation</strong> — faster at altitude, reduce yeast by 25%</li>
          <li><strong>Sugar and baking powder</strong> — reduce sugar, increase baking powder at high altitude</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → Convert Any Cooking Measurement
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '厨房单位换算：烹饪测量完全指南' : 'Kitchen Unit Converter: Cooking Measurements Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
