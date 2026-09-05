import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? '购物省钱技巧：如何用折扣计算器' : 'Shopping Savings Tips: How to Use a Discount Calculator',
    description: lang === 'zh' ? '教你用折扣计算器比较优惠、计算真实折扣、避免购物陷阱。' : 'Learn to compare deals, calculate real discounts, and avoid shopping traps with a discount calculator.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/discount-shopping-tips',
      languages: { 'en-US': '/blog/discount-shopping-tips', 'x-default': '/blog/discount-shopping-tips' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/discount-shopping-tips' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">商家常用的折扣陷阱</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          商家常使用"原价虚高再打折"的策略。一件标价500元、打5折的商品,实际可能只值250元。<strong>折扣计算器帮你算出真实折扣率</strong>,避免被虚假优惠欺骗。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何比较不同优惠?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同一件商品,A店打8折,B店满300减80。哪个更便宜?用折扣计算器:如果商品原价500元,A店=400元,B店=420元。A店更划算。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">双11/618省钱攻略</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>提前加购物车</strong> — 记录原价,活动时对比真实折扣</li>
          <li><strong>使用折扣计算器</strong> — 输入原价和折扣,快速比较</li>
          <li><strong>关注满减门槛</strong> — 凑单到门槛可能比直接打折更划算</li>
          <li><strong>比价工具</strong> — 用历史价格查询确认是否真的便宜</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见折扣换算</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          8折=原价×0.8,75折=原价×0.75,6折=原价×0.6。用计算器快速换算,不用心算。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → 立即使用折扣计算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Discount Traps by Merchants</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Merchants often use "inflate original price then discount" strategies. A product marked ¥500 at 50% off might only be worth ¥250. <strong>A discount calculator reveals the real discount rate</strong>, protecting you from false deals.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Compare Different Offers?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same product, Store A offers 20% off, Store B offers ¥80 off on ¥300+. Which is cheaper? With original price ¥500: Store A=¥400, Store B=¥420. Store A wins.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Double 11/618 Shopping Strategies</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Add to cart early</strong> — record original prices, compare during sales</li>
          <li><strong>Use discount calculator</strong> — input original price and discount, compare quickly</li>
          <li><strong>Watch minimum spend thresholds</strong> — bundling might beat direct discounts</li>
          <li><strong>Price history tools</strong> — verify if it's really cheaper</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Discount Conversions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          20% off = ×0.8, 25% off = ×0.75, 40% off = ×0.6. Use the calculator for quick conversions without mental math.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → Try the Discount Calculator Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '购物省钱技巧' : 'Shopping Savings Tips'}
      </h1>
      {content[lang]}
    </div>
  )
}
