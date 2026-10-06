import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '打几折还是立减？哪种优惠更划算'
      : 'Percent Off vs Amount Off: Which Deal Is Better?',
    description: lang === 'zh'
      ? '百分比折扣和固定金额立减哪个更划算？一个简单公式快速判断，避开叠加优惠的算钱误区。'
      : 'Percent off vs fixed amount off — learn the one formula that tells you which deal saves more, and how stacking discounts really works.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/percent-off-vs-amount-off',
      languages: { 'en-US': '/blog/percent-off-vs-amount-off', 'x-default': '/blog/percent-off-vs-amount-off' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/percent-off-vs-amount-off' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which is better: 20% off or $10 off?", "acceptedAnswer": {"@type": "Answer", "text": "Compare $10 to 20% of the price. Below $50, $10 off saves more. Above $50, 20% off saves more."}}, {"@type": "Question", "name": "Do 50% off and 30% off add up to 80% off?", "acceptedAnswer": {"@type": "Answer", "text": "No. They multiply: you pay 50% then 70% of that, so you pay 35% of the original price — 65% off total."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">两种优惠，两种算法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          商家给优惠基本就两种方式：<strong>打个折</strong>（八折、75 折）或者<strong>直接减钱</strong>（满 300 减 50）。看起来都是省钱，但哪个更划算，完全取决于你买的东西多少钱。算错了，你以为捡了便宜，其实多付了。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">一个公式判断哪个更划算</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          拿「满 300 减 50」对比「八折」举例。八折省的钱 = 价格 × 20%。所以分界点是：50 ÷ 20% = 250 元。
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🛒 商品 <strong>低于 250 元</strong> → 立减 50 更划算</p>
          <p>🛒 商品 <strong>高于 250 元</strong> → 八折更划算</p>
          <p>🛒 正好 250 元 → 一样</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          通用公式：<strong>分界价 = 立减金额 ÷ 折扣百分比</strong>。商品价格高于分界价，选折扣；低于分界价，选立减。用折扣计算器把两个方案都算一遍，10 秒出答案。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">叠加优惠是乘法，不是加法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大促最常见的坑：「先打五折，再享额外 7 折」。很多人以为是 5 + 7 = 12 折（等于白送），实际是乘法：0.5 × 0.7 = 0.35。你付原价的 35%，相当于总共打了 6.5 折——优惠力度比看起来小得多。
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>两件 8 折 → 实际 0.8 × 0.8 = 0.64，是 6.4 折</li>
          <li>满 200 减 30 后再打 9 折 → 先算折后价，再乘 0.9</li>
          <li>红包、积分抵扣通常在最后一步按比例扣，不是直接减总价</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三招避免被优惠绕晕</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>先算实付价</strong>：别看折扣力度，直接算两个方案你掏多少钱</li>
          <li><strong>警惕凑单</strong>：为了满减多买 100 元的东西，等于没省钱</li>
          <li><strong>用工具复核</strong>：心算容易错，折扣计算器输入原价和两个优惠就能对比</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">30 块钱的东西，减 10 元和 8 折哪个好？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">8 折省 6 元，立减省 10 元。选立减，多省 4 块。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">先打折再满减，和先满减再打折一样吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">大多数平台按自己设定的顺序算，结果可能不同。看规则里的计算顺序，或者直接用计算器算实付价。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → 用折扣计算器对比两种优惠
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Two Deals, Two Calculations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stores discount things in two ways: <strong>a percentage off</strong> (20% off) or <strong>a fixed amount off</strong> ($50 off over $300). Both look like savings, but which one is actually better depends entirely on the price. Get the math wrong and you'll think you scored a deal while paying more than you needed to.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">One Formula Tells You Which Deal Wins</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Take "$50 off orders over $300" versus "20% off." The percentage deal saves you price × 20%. So the crossover point is: 50 ÷ 20% = $250.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🛒 Item <strong>under $250</strong> → the $50 discount wins</p>
          <p>🛒 Item <strong>over $250</strong> → the 20% off wins</p>
          <p>🛒 Exactly $250 → it's a tie</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The general rule: <strong>crossover price = fixed discount ÷ percentage</strong>. Above the crossover, pick the percentage; below it, pick the fixed amount. Punch both options into a discount calculator and you'll have the answer in seconds.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Stacked Discounts Multiply, They Don't Add</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The classic sale trap: "50% off, then an extra 30% off." Plenty of shoppers add those to 80% off. They don't work that way. It's multiplication: 0.5 × 0.7 = 0.35. You pay 35% of the original price — a total of 65% off, not 80%. The deal is real, but smaller than it looks.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Two items at 20% off each → 0.8 × 0.8 = 0.64, that's 36% off total</li>
          <li>$30 off over $200, then another 10% off → apply the reduction first, then multiply by 0.9</li>
          <li>Coupons and points usually come off proportionally at the last step, not straight off the subtotal</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Ways to Stay Out of the Math Trap</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Compare final prices</strong>: Ignore the advertised percentage and compute what you actually pay under each option</li>
          <li><strong>Watch the minimum spend</strong>: Buying an extra $100 just to hit a threshold isn't saving — it's spending</li>
          <li><strong>Verify with a calculator</strong>: Mental math fails on stacked deals; a discount calculator settles it instantly</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">On a $30 item, is $10 off or 20% off better?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">20% off saves $6; $10 off saves $10. Take the $10 discount.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Does the order of discounts change the total?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Often yes — platforms apply their own sequence. Check the terms, or just compute the final price both ways.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → Compare both deals with the Discount Calculator
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '打几折还是立减？哪种优惠更划算' : 'Percent Off vs Amount Off: Which Deal Is Better?'}
      </h1>
      {content[lang]}
    </div>
  )
}
