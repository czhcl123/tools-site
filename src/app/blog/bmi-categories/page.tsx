import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'BMI 分类完整解读：从偏瘦到肥胖的 5 个等级划分标准，WHO 全球标准和亚洲标准的具体数值对比，儿童/孕妇/老人等特殊人群的 BMI 评判差异。' : 'en'
  return {
    title: lang === 'zh'
      ? 'BMI 分类解读：你的数字到底意味着什么'
      : 'BMI Categories Explained',
    description: lang === 'zh'
      ? 'BMI 分类标准详解：偏瘦、正常、超重、肥胖的界限在哪里？了解 BMI 的局限性和更准确的身体评估方法。'
      : 'BMI categories explained: underweight, normal, overweight, obese ranges. Learn BMI limitations and more accurate body assessment methods.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/bmi-categories',
      languages: { 'en-US': '/blog/bmi-categories', 'x-default': '/blog/bmi-categories' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/bmi-categories' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 是什么？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI（Body Mass Index，身体质量指数）是用体重（公斤）除以身高（米）的平方得出的数字。它是国际上最常用的人体胖瘦评估指标，由比利时数学家凯特勒在19世纪提出。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 分类标准</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          世界卫生组织（WHO）的标准：
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔵 <strong>偏瘦</strong>：BMI &lt; 18.5</p>
          <p>🟢 <strong>正常</strong>：BMI 18.5 – 24.9</p>
          <p>🟡 <strong>超重</strong>：BMI 25 – 29.9</p>
          <p>🔴 <strong>肥胖</strong>：BMI ≥ 30</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>亚洲/中国标准</strong>略有不同：超重从24开始，肥胖从28开始。这是因为亚洲人群在较低BMI时就更容易出现代谢问题。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 的局限性</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI 不能区分肌肉和脂肪。一个肌肉量大的运动员BMI可能超标，但身体非常健康。相反，一个BMI正常的人可能内脏脂肪过多（"瘦胖子"）。
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>运动员</strong>：肌肉密度高，BMI 偏高但健康</li>
          <li><strong>老年人</strong>：肌肉流失，BMI 正常但体脂率可能过高</li>
          <li><strong>孕妇</strong>：BMI 不适用</li>
          <li><strong>儿童</strong>：需要年龄和性别特定的百分位数图表</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">更准确的评估方法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          结合以下指标一起看，比单看 BMI 更有意义：
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📏 <strong>腰围</strong>：男性 ≥ 90cm、女性 ≥ 85cm 为腹型肥胖</p>
          <p>📐 <strong>腰臀比</strong>：男性 &gt; 0.9、女性 &gt; 0.85 为风险</p>
          <p>📊 <strong>体脂率</strong>：男性 15-20%、女性 20-25% 为健康范围</p>
          <p>🩸 <strong>代谢指标</strong>：血糖、血脂、血压才是最终判断标准</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: BMI 正常就一定健康吗？</strong><br />
          A: 不一定。BMI 正常但腰围超标、体脂率高的人，患心血管疾病的风险仍然较高。建议结合腰围和体脂率一起评估。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: BMI 多少算理想？</strong><br />
          A: 一般认为 BMI 在 20-25 之间最健康，死亡率最低。但个体差异很大，不必追求某个精确数字。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → 计算你的 BMI
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is BMI?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI (Body Mass Index) is calculated by dividing weight (kg) by height (m) squared. It's the most widely used indicator of body fatness, developed by Belgian mathematician Adolphe Quetelet in the 19th century.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI Categories</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WHO classification:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔵 <strong>Underweight</strong>: BMI &lt; 18.5</p>
          <p>🟢 <strong>Normal</strong>: BMI 18.5 – 24.9</p>
          <p>🟡 <strong>Overweight</strong>: BMI 25 – 29.9</p>
          <p>🔴 <strong>Obese</strong>: BMI ≥ 30</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Asian/Chinese standards</strong> differ slightly: overweight starts at 24, obesity at 28. Asian populations face metabolic risks at lower BMIs.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI Limitations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI can't distinguish muscle from fat. A muscular athlete may have an overweight BMI but be perfectly healthy. Conversely, a normal-BMI person may carry excess visceral fat ("skinny fat").
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Athletes</strong>: High muscle density inflates BMI</li>
          <li><strong>Elderly</strong>: Muscle loss can mask high body fat</li>
          <li><strong>Pregnant women</strong>: BMI is not applicable</li>
          <li><strong>Children</strong>: Require age/sex-specific percentile charts</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Better Assessment Methods</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Combine these metrics for a fuller picture:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📏 <strong>Waist circumference</strong>: ≥ 90cm (men) / ≥ 85cm (women) indicates abdominal obesity</p>
          <p>📐 <strong>Waist-to-hip ratio</strong>: &gt; 0.9 (men) / &gt; 0.85 (women) is risky</p>
          <p>📊 <strong>Body fat percentage</strong>: 15-20% (men) / 20-25% (women) is healthy</p>
          <p>🩸 <strong>Metabolic markers</strong>: Blood sugar, lipids, and blood pressure are the ultimate health indicators</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Is normal BMI always healthy?</strong><br />
          A: Not necessarily. A normal-BMI person with a large waist or high body fat still faces elevated cardiovascular risk. Combine BMI with waist circumference and body fat measurements.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What BMI is ideal?</strong><br />
          A: A BMI of 20-25 is associated with the lowest mortality risk. But individual variation is significant — don't obsess over a specific number.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → Calculate Your BMI
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'BMI 分类解读：你的数字到底意味着什么' : 'BMI Categories Explained: What Your Number Really Means'}
      </h1>
      {content[lang]}
    </div>
  )
}
