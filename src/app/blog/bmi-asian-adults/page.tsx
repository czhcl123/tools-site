import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '亚洲人 BMI 标准：为什么切点更低'
      : 'BMI for Asian Adults: Why the Cutoffs Are Lower',
    description: lang === 'zh'
      ? '亚洲人群在更低的 BMI 就出现代谢风险。看懂亚太区调整后的 BMI 分类，了解腰围和体脂为什么同样重要。'
      : 'Asian adults face higher metabolic risk at lower BMI values. See the adjusted Asia-Pacific cutoffs and why waist circumference matters just as much.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/bmi-asian-adults',
      languages: { 'en-US': '/blog/bmi-asian-adults', 'x-default': '/blog/bmi-asian-adults' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/bmi-asian-adults' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is BMI 24 overweight for Asians?", "acceptedAnswer": {"@type": "Answer", "text": "Under WHO Asia-Pacific criteria, BMI 23–24.9 is already classed as overweight for Asian adults."}}, {"@type": "Question", "name": "Why do Asians have lower BMI cutoffs?", "acceptedAnswer": {"@type": "Answer", "text": "At the same BMI, Asian populations tend to carry more visceral fat and face higher risks of diabetes and heart disease, so health bodies use lower thresholds."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">标准 BMI 是按谁定的？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          我们熟悉的「18.5–24 正常、24 以上超重」这套标准，主要基于欧美人群数据。但研究发现，同样的 BMI 数值，亚洲人的体脂率往往更高、内脏脂肪更多，患 2 型糖尿病和心血管疾病的风险也更早出现。所以世界卫生组织给了亚太地区一套更低的切点。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">亚太区 BMI 分类（亚洲成人）</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🟢 <strong>低于 18.5</strong>：体重过轻</p>
          <p>🟡 <strong>18.5 – 22.9</strong>：正常范围</p>
          <p>🟠 <strong>23.0 – 24.9</strong>：超重（危险）</p>
          <p>🔴 <strong>25.0 及以上</strong>：肥胖</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          对比全球标准，亚洲人的「超重」线从 25 提前到了 23，「肥胖」线从 30 提前到了 25。换句话说，一个 BMI 24 的亚洲人，在国际标准里算正常，在亚太标准里已经进入需要干预的区间。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 之外还要看什么</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>腰围</strong>：男性 ≥ 90cm、女性 ≥ 85cm（中国标准）提示腹型肥胖，比 BMI 更能预测代谢风险</li>
          <li><strong>体脂率</strong>：男性 &gt; 25%、女性 &gt; 30% 算偏高，健身人群 BMI 正常但体脂超标很常见</li>
          <li><strong>腰臀比</strong>：简单好测，和内脏脂肪相关性强</li>
          <li><strong>代谢指标</strong>：血糖、血脂、血压正常，比体重数字本身更有说服力</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI 正常也要注意的两件事</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          第一，<strong>正常偏高不等于安全</strong>。BMI 23 出头的亚洲人，如果长期久坐、爱吃精制碳水，代谢风险照样存在。第二，<strong>肌肉量大的人会被高估</strong>。健身人群的 BMI 往往虚高，这时候体脂率和腰围比 BMI 更有参考价值。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">亚洲人 BMI 24 算胖吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">按亚太标准，23 以上就进入超重区间。BMI 24 建议结合腰围和体脂一起评估。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">用 BMI 计算器要选亚洲标准吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">看你的目标。想和国际数据对比用全球标准；想评估亚洲人的健康风险，亚太标准更贴切。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → 计算你的 BMI，对照两套标准
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Who Was the Standard BMI Built For?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The familiar scale — 18.5 to 24 normal, above that overweight — comes mostly from European and North American data. Research shows that at the same BMI, Asian populations tend to carry more body fat, more visceral fat around the organs, and face higher risks of type 2 diabetes and heart disease at lower numbers. That's why the WHO publishes a separate set of cutoffs for Asia-Pacific.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Asia-Pacific BMI Categories (Adults)</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🟢 <strong>Under 18.5</strong>: underweight</p>
          <p>🟡 <strong>18.5 – 22.9</strong>: healthy range</p>
          <p>🟠 <strong>23.0 – 24.9</strong>: overweight (at risk)</p>
          <p>🔴 <strong>25.0 and above</strong>: obese</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compare that with the global scale: the overweight line drops from 25 to 23, and obesity from 30 to 25. A person with a BMI of 24 reads as "normal" internationally but sits in the intervention zone under the Asia-Pacific criteria.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What to Check Beyond BMI</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Waist circumference</strong>: at or above 90 cm for men, 85 cm for women (Chinese criteria) signals abdominal obesity and predicts metabolic risk better than BMI alone</li>
          <li><strong>Body fat percentage</strong>: above 25% for men, 30% for women is considered high; fit people often have a normal BMI with elevated body fat</li>
          <li><strong>Waist-to-hip ratio</strong>: easy to measure and strongly tied to visceral fat</li>
          <li><strong>Metabolic markers</strong>: healthy blood sugar, lipids, and blood pressure say more than the scale</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Two Cautions Even with a "Normal" BMI</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          First, <strong>normal-but-high isn't risk-free</strong>. An Asian adult at BMI 23 with a sedentary desk job and a refined-carb-heavy diet still carries metabolic risk. Second, <strong>muscle inflates BMI</strong>. Strength athletes routinely read as overweight on paper; for them, body fat and waist size tell the truer story.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Is a BMI of 24 overweight for Asian people?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Under Asia-Pacific criteria, overweight starts at 23. At 24, look at waist circumference and body fat alongside the number.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Should I use the Asian BMI scale?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Depends on your goal. Use the global scale to compare with international data; use the Asia-Pacific scale to judge health risk for Asian bodies.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-600 font-medium hover:underline">
            → Calculate your BMI against both scales
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '亚洲人 BMI 标准：为什么切点更低' : 'BMI for Asian Adults: Why the Cutoffs Are Lower'}
      </h1>
      {content[lang]}
    </div>
  )
}
