import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "BMI vs body fat accuracy?", "acceptedAnswer": {"@type": "Answer", "text": "Body fat more accurate but harder to measure. Use both."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "BMI vs Body Fat — Which Matters?",
  "description": "The difference between BMI and body fat percentage, their pros and cons, and how to use both for accurate health assessment.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-08-23",
  "dateModified": "2026-10-21",
  "author": {
    "@type": "Organization",
    "name": "Practical Tools",
    "url": "https://getpracticaltools.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Practical Tools",
    "logo": {
      "@type": "ImageObject",
      "url": "https://getpracticaltools.com/favicon.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getpracticaltools.com/blog/bmi-calculator-vs-body-fat"
  },
  "inLanguage": "en"
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'BMI vs 体脂率：哪个更重要？'
      : 'BMI vs Body Fat — Which Matters?',
    description: lang === 'zh'
      ? 'BMI和体脂率的区别,各自的优缺点,以及如何结合使用判断健康状况。'
      : 'The difference between BMI and body fat percentage, their pros and cons, and how to use both for accurate health assessment.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/bmi-calculator-vs-body-fat',
      languages: { 'en-US': '/blog/bmi-calculator-vs-body-fat', 'x-default': '/blog/bmi-calculator-vs-body-fat' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/bmi-calculator-vs-body-fat' },
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

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 和体脂率的区别是什么？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一句话：<strong>BMI 是「按身高体重估算」的筛查指标，体脂率是「直接测脂肪占比」的身体成分指标。</strong>BMI 并不测量脂肪，它只是用身高和体重的比例做统计推断；体脂率才真正回答「我身上有多少脂肪」。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-semibold text-gray-800">对比项</th>
                <th className="py-2 pr-3 font-semibold text-gray-800">BMI</th>
                <th className="py-2 font-semibold text-gray-800">体脂率</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">衡量什么</td><td className="py-2 pr-3">体重与身高的比例</td><td className="py-2">脂肪占体重的百分比</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">怎么算</td><td className="py-2 pr-3">体重(kg) ÷ 身高(m)²</td><td className="py-2">体脂秤、皮褶钳、DEXA 扫描</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">成本</td><td className="py-2 pr-3">0 元，10 秒出结果</td><td className="py-2">从免费估算到几百元扫描</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">误差来源</td><td className="py-2 pr-3">肌肉量、骨架大小、水肿</td><td className="py-2">设备精度、测量时的水分状态</td></tr>
              <tr><td className="py-2 pr-3">适合谁</td><td className="py-2 pr-3">普通人群快速筛查</td><td className="py-2">健身、减脂、增肌人群</td></tr>
            </tbody>
          </table>
        </div>

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

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">BMI 和体脂率哪个更准确?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">体脂率更准确但测量复杂，BMI 是便捷筛查工具，两者结合最佳。</dd>
        </div>
      </dl>

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

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is the Difference Between BMI and Body Fat Percentage?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Short answer: <strong>BMI is a screening number estimated from height and weight; body fat percentage is a body-composition measure taken directly.</strong> BMI never measures fat — it infers risk from a ratio. Body fat percentage answers the actual question: how much of me is fat?
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-semibold text-gray-800">Aspect</th>
                <th className="py-2 pr-3 font-semibold text-gray-800">BMI</th>
                <th className="py-2 font-semibold text-gray-800">Body fat %</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">What it measures</td><td className="py-2 pr-3">Weight relative to height</td><td className="py-2">Fat as a share of body weight</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">How it is obtained</td><td className="py-2 pr-3">Weight (kg) ÷ height (m)²</td><td className="py-2">Smart scale, calipers, DEXA scan</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Cost</td><td className="py-2 pr-3">Free, 10 seconds</td><td className="py-2">Free estimate to a few hundred dollars</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Main error source</td><td className="py-2 pr-3">Muscle mass, frame size, water retention</td><td className="py-2">Device accuracy, hydration at measurement</td></tr>
              <tr><td className="py-2 pr-3">Best for</td><td className="py-2 pr-3">Population-level screening</td><td className="py-2">Training, cutting, bulking</td></tr>
            </tbody>
          </table>
        </div>

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

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Which is more accurate, BMI or body fat?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Body fat is more accurate but harder to measure. BMI is a convenient screener; use both.</dd>
        </div>
      </dl>

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'BMI vs 体脂率：哪个更重要？' : 'BMI vs Body Fat: Which Matters More?'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {lang === 'zh' ? '实用计算器' : 'Practical Tools'}
        {' · '}
        {lang === 'zh' ? '发布于' : 'Published'} 2026-08-23
        {' · '}
        {lang === 'zh' ? '更新于' : 'Updated'} 2026-10-21
      </p>
      {content[lang]}
    </div>
  )
}
