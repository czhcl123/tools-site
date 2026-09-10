import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'BMI 与健身：如何根据 BMI 制定科学减重计划，计算理想体重范围，结合运动方案追踪进度，了解 BMI 在健身中的实际意义和局限性。' : 'en'
  return {
    title: lang === 'zh'
      ? 'BMI 与健身：如何制定减重计划'
      : 'BMI and Fitness: Creating a Weight Loss Plan',
    description: lang === 'zh'
      ? '根据 BMI 制定科学减重计划,计算理想体重范围,结合运动方案追踪进度。'
      : 'Learn how to use BMI to create a science-based weight loss plan, calculate your ideal weight range, and track fitness progress beyond the scale.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/bmi-fitness-planning',
      languages: { 'en-US': '/blog/bmi-fitness-planning', 'x-default': '/blog/bmi-fitness-planning' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/bmi-fitness-planning' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 在健身中的作用</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI（身体质量指数）虽然是简单的身高体重比，但它是制定减重计划的良好起点。通过 BMI 计算器，你可以快速了解自己当前处于哪个体重区间——偏瘦、正常、超重还是肥胖，从而设定合理的减重目标。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何计算你的理想体重范围</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          用 BMI 计算器反推：将目标 BMI 值（如 22）乘以身高（米）的平方，就能得到理想体重。例如身高 1.75m 的人，理想体重 = 22 × 1.75² = 67.4 kg。亚洲人建议目标 BMI 在 18.5–23.9 之间。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 与运动计划结合</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          根据 BMI 制定运动策略：BMI 25–30（超重）适合低冲击有氧运动如快走、游泳；BMI 30+（肥胖）建议从水中运动或骑车开始，减少关节负担。BMI 正常但体脂偏高的人应侧重力量训练增加肌肉量。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">追踪进度：超越 BMI 数字</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI 无法区分肌肉和脂肪。减重过程中，力量训练可能让体重不变但 BMI 下降（因为体脂减少、肌肉增加）。建议同时记录腰围、体脂率和体能变化（如跑步距离、力量重量），用多维度数据评估进展。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见误区</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>只看 BMI 忽略体脂</strong>：健美运动员 BMI 可能 27 但非常健康</li>
          <li><strong>追求过低 BMI</strong>：BMI 低于 18.5 可能导致营养不良和免疫力下降</li>
          <li><strong>速度过快</strong>：每周减 0.5–1 kg 是安全范围，过快易反弹</li>
          <li><strong>不调整饮食</strong>：运动消耗的热量常被高估，饮食控制才是减重关键</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">BMI 如何帮助减重?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">通过 BMI 了解当前区间，设定目标 BMI，反推理想体重。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">BMI 正常但体脂高怎么办?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">侧重力量训练增加肌肉量，而非单纯减重。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → 先用 BMI 计算器了解你的起点
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Where BMI Fits in Fitness</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI (Body Mass Index) is a simple height-to-weight ratio, but it's a solid starting point for any weight loss plan. Use a BMI calculator to quickly identify which category you fall into — underweight, normal, overweight, or obese — and set realistic goals.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Calculating Your Ideal Weight Range</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reverse-engineer your BMI: multiply your target BMI (e.g., 22) by your height in meters squared. For someone 1.75m tall, ideal weight = 22 × 1.75² = 67.4 kg. For Asian populations, a target BMI of 18.5–23.9 is recommended.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Matching Exercise to Your BMI</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tailor your workouts: BMI 25–30 (overweight) benefits from low-impact cardio like brisk walking or swimming. BMI 30+ (obese) should start with water-based exercises or cycling to reduce joint stress. If your BMI is normal but body fat is high, focus on strength training to build muscle.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Tracking Progress Beyond the Number</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI cannot distinguish muscle from fat. During a fitness program, weight may stay the same while BMI drops because you're replacing fat with muscle. Track waist circumference, body fat percentage, and performance metrics (running distance, lifting weight) for a complete picture.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Mistakes</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>BMI-only focus</strong> — a bodybuilder at BMI 27 may be perfectly healthy</li>
          <li><strong>Targeting too low</strong> — BMI below 18.5 risks malnutrition and weakened immunity</li>
          <li><strong>Losing too fast</strong> — 0.5–1 kg per week is safe; faster loss often rebounds</li>
          <li><strong>Ignoring diet</strong> — exercise calorie burn is often overestimated; diet control is key</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How does BMI help weight loss?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Check your range, set target BMI, calculate ideal weight.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Normal BMI but high body fat?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Focus on strength training to build muscle.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → Start with the BMI Calculator
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'BMI 与健身：如何制定减重计划' : 'BMI and Fitness: Creating a Weight Loss Plan'}
      </h1>
      {content[lang]}
    </div>
  )
}
