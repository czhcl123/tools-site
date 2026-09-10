import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '智能定价策略：小型企业如何用折扣计算器优化促销活动、批量定价、竞争对手价格匹配和利润率保护，提升销售额同时守住利润。' : 'en'
  return {
    title: lang === 'zh'
      ? '智能定价：用折扣计算器优化商业策略'
      : 'Smart Pricing: Using Discount Calculators for Business',
    description: lang === 'zh'
      ? '小型企业如何用折扣计算器优化促销、批量定价和利润率保护。'
      : 'How small businesses use discount calculators for seasonal sales, bulk pricing, competitor price matching, and profit margin protection.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/discount-business-pricing',
      languages: { 'en-US': '/blog/discount-business-pricing', 'x-default': '/blog/discount-business-pricing' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/discount-business-pricing' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么小企业需要折扣计算器?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          手动计算折扣容易出错，尤其是多层折扣叠加时。一个 500 元的商品打 8 折再减 50 元，实际折扣率是多少？折扣计算器几秒钟给出精确答案，帮你避免定价失误导致的利润损失。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">季节性促销定价</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          双十一、黑五、店庆——每次促销都要快速计算折扣价。用折扣计算器输入原价和折扣百分比，立刻得到售价。同时对比不同折扣力度对利润的影响：打 7 折卖出 100 件 vs 打 8 折卖出 80 件，哪个更赚？
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">批量定价策略</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          "买 3 件 85 折，买 5 件 75 折"——这种阶梯定价需要精确计算每个层级的折扣率和利润率。折扣计算器帮你验证：75 折是否还在成本线以上？批量折扣是否真的能提升总销售额？
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">竞争对手价格匹配</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          竞品降价了，你要不要跟？用折扣计算器快速算出：降到同等价格需要几折？利润还剩多少？如果低于成本线，是否可以用赠品或增值服务代替直接降价？
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">保护利润率</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          折扣计算器的隐藏功能：输入目标利润率和成本价，反推出最高可承受折扣。例如成本 60 元、目标利润率 30%，最高售价 = 60 ÷ (1 - 0.3) = 85.7 元。任何低于此价格的折扣都会侵蚀利润。
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">如何用折扣器定价?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">输入成本价和目标利润率，反推最高可承受折扣。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">批量折扣怎么不亏?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">用计算器验证每个层级的利润率，确保最低折扣仍在成本线以上。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → 用折扣计算器优化你的定价
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Small Businesses Need a Discount Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Manual discount calculations are error-prone, especially with stacked discounts. A $500 item at 20% off minus $50 — what's the real discount rate? A discount calculator gives you the exact answer in seconds, preventing pricing mistakes that eat into profits.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Seasonal Sale Pricing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Black Friday, holiday sales, store anniversaries — every promotion requires quick discount math. Enter the original price and discount percentage to instantly get the sale price. Compare different discount levels: 30% off selling 100 units vs 20% off selling 80 units — which is more profitable?
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Bulk Pricing Strategies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Buy 3 at 15% off, buy 5 at 25% off" — tiered pricing requires precise calculations at each level. Use the discount calculator to verify: is 25% off still above your cost floor? Will the bulk discount actually increase total revenue?
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Competitor Price Matching</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A competitor dropped their price. Should you follow? Use the calculator to quickly determine: what discount do you need to match? How much margin remains? If it falls below cost, consider gifts or value-added services instead of direct price cuts.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Protecting Your Profit Margin</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The calculator's hidden power: enter your target profit margin and cost price to reverse-engineer the maximum discount you can afford. Cost $60, target margin 30% — max price = $60 ÷ (1 - 0.3) = $85.70. Any discount below this erodes profit.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How to use it for pricing?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Enter cost and target margin to reverse-engineer the maximum discount.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to set bulk discounts without losing money?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Verify each tier's margin with the calculator.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → Optimize Your Pricing with the Discount Calculator
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '智能定价：用折扣计算器优化商业策略' : 'Smart Pricing: Using Discount Calculators for Business'}
      </h1>
      {content[lang]}
    </div>
  )
}
