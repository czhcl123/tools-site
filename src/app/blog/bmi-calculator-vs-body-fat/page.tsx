import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'BMI vs 体脂率：哪个更重要？'
      : 'BMI vs Body Fat: Which Matters More for Health?',
    description: lang === 'zh'
      ? 'BMI和体脂率的区别,各自的优缺点,以及如何结合使用判断健康状况。'
      : 'The difference between BMI and body fat percentage, their pros and cons, and how to use both for accurate health assessment.',
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/blog/bmi-calculator-vs-body-fat' : '/blog/bmi-calculator-vs-body-fat'}`,
      languages: { 'zh-CN': '/zh/blog/bmi-calculator-vs-body-fat', 'en-US': '/blog/bmi-calculator-vs-body-fat', 'x-default': '/blog/bmi-calculator-vs-body-fat' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 和体脂率的区别</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI（身体质量指数）只考虑体重和身高,而<strong>体脂率</strong>直接测量脂肪占体重的百分比。一个身高175cm、体重80kg的男性,BMI=26.1(偏胖),但如果他经常健身,体脂率可能只有15%(健康范围)。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">各自的优缺点</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>BMI优点</strong>：简单易算、免费、适合大规模筛查</li>
          <li><strong>BMI缺点</strong>：无法区分肌肉和脂肪、对运动员不准确</li>
          <li><strong>体脂率优点</strong>：更准确反映身体成分、适合健身人群</li>
          <li><strong>体脂率缺点</strong>：测量方法复杂、需要专业设备</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">健康体脂率参考范围</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          男性：10-20%为健康范围,女性：18-28%为健康范围。运动员可以更低,但过低也会影响健康。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何结合使用?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          建议先用BMI快速筛查,如果BMI在正常范围但你担心身体成分,再用体脂率测量。两者结合能给出更全面的健康画像。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → 免费计算你的 BMI
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI vs Body Fat: Key Differences</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI (Body Mass Index) only considers weight and height, while <strong>body fat percentage</strong> directly measures the proportion of fat in your body. A 175cm, 80kg male has a BMI of 26.1 (overweight), but if he's muscular, his body fat might be only 15% (healthy range).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Pros and Cons</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>BMI Pros</strong>: simple, free, good for population screening</li>
          <li><strong>BMI Cons</strong>: can't distinguish muscle from fat, inaccurate for athletes</li>
          <li><strong>Body Fat Pros</strong>: more accurate body composition, ideal for fitness enthusiasts</li>
          <li><strong>Body Fat Cons</strong>: complex measurement, requires specialized equipment</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Healthy Body Fat Ranges</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Men: 10-20% is healthy; Women: 18-28% is healthy. Athletes can be lower, but too low also affects health.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use Both Together?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use BMI for quick screening first. If BMI is normal but you're concerned about body composition, measure body fat percentage. Together, they provide a more complete health picture.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → Calculate Your BMI for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'BMI vs 体脂率：哪个更重要？' : 'BMI vs Body Fat: Which Matters More?'}
      </h1>
      {content[lang]}
    </div>
  )
}
