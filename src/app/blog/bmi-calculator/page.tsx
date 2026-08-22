import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'BMI 计算器完全指南 — 体重指数怎么算'
      : 'BMI Calculator Guide — How to Calculate Body Mass Index',
    description: lang === 'zh'
      ? 'BMI 计算公式、亚洲人标准、男女差异,以及如何用 BMI 计算器判断体重是否健康。'
      : 'BMI formula, WHO Asian thresholds, gender differences, and how to use an online BMI calculator to check if your weight is healthy.',
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/blog/bmi-calculator' : '/blog/bmi-calculator'}`,
      languages: { 'zh-CN': '/zh/blog/bmi-calculator', 'en-US': '/blog/bmi-calculator', 'x-default': '/blog/bmi-calculator' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是 BMI?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI（Body Mass Index，身体质量指数）是国际上最常用的衡量人体胖瘦程度的指标。计算公式为:<strong>BMI = 体重(kg) ÷ 身高(m)²</strong>。例如你体重 65 kg，身高 1.70 m，BMI = 65 ÷ 1.70² = 22.5。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 正常值是多少?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不同人群标准不同。WHO 全球标准:18.5–24.9 正常，25–29.9 超重，≥30 肥胖。<strong>亚洲人标准更严格</strong>:18.5–23.9 正常，24–27.9 偏胖，≥28 肥胖。原因是同 BMI 下亚洲人心血管疾病风险更高。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">男女 BMI 有区别吗?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          阈值相同，但解读不同。女性天然体脂率比男性高 5–10%，所以相同 BMI 值的女性健康风险略低。健身/美学语境下，男女对"理想 BMI"的期望也不同。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 的局限性</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI 是筛查工具，不是诊断。它不区分肌肉和脂肪（健美运动员 BMI 可能 28 但仍健康），不反映内脏脂肪分布，儿童/孕妇/老人需要专用标准。建议结合腰围、体脂率、血糖血脂等综合评估。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何使用 BMI 计算器</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          输入身高（厘米）和体重（千克），点击计算。结果会显示 BMI 数字、所属区间和颜色提示。支持亚洲/WHO 双标准对比，也支持英制单位（英尺/磅）。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → 立即使用 BMI 计算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is BMI?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI (Body Mass Index) is the most widely used screening tool for weight status. The formula: <strong>BMI = weight (kg) ÷ height (m)²</strong>. For example, 65 kg ÷ (1.70 m)² = 22.5.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Are Healthy BMI Ranges?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WHO global standard: 18.5–24.9 normal, 25–29.9 overweight, ≥30 obese. <strong>Asian thresholds are stricter</strong>: 18.5–23.9 normal, 24–27.9 overweight, ≥28 obese — because Asian populations face higher diabetes and hypertension risk at the same BMI level.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Do Men and Women Have Different BMI Standards?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The thresholds are the same, but interpretation differs. Women naturally carry 5–10% more body fat than men at the same BMI, so health risk is slightly lower. In fitness/aesthetic contexts, "ideal BMI" expectations also differ by gender.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Limitations of BMI</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI is a screening tool, not a diagnosis. It cannot distinguish muscle from fat (a bodybuilder at BMI 28 may be perfectly healthy), does not reflect visceral fat distribution, and children, pregnant women, and elderly need adjusted standards. Combine with waist circumference, body fat percentage, and blood work for a complete picture.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use a BMI Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter your height in cm and weight in kg, click calculate. The result shows your BMI number, category (underweight/normal/overweight/obese), and a color-coded indicator. Our tool supports both WHO and Asian thresholds, plus imperial units (feet/inches, pounds).
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → Try the BMI Calculator Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'BMI 计算器完全指南' : 'BMI Calculator Guide — How to Calculate Body Mass Index'}
      </h1>
      {content[lang]}
    </div>
  )
}
