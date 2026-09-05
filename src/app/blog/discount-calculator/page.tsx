import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '折扣计算器使用指南 — 如何快速计算折扣价格'
      : 'How to Use a Discount Calculator — Quick Guide',
    description: lang === 'zh'
      ? '教你用折扣计算器快速算出打折后的价格和省钱金额,含公式、实例和常见场景。'
      : 'Learn how to use a discount calculator to find sale prices, savings, and multi-step discounts. Includes formulas and real examples.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/discount-calculator',
      languages: { 'en-US': '/blog/discount-calculator', 'x-default': '/blog/discount-calculator' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/discount-calculator' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">折扣计算公式</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          折扣计算的核心公式很简单:<strong>折后价 = 原价 × (1 - 折扣率)</strong>。例如一件商品原价 ¥200,打 8 折(20% off),折后价就是 200 × 0.8 = ¥160。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          如果你只知道折后价和折扣率,想算原价,反过来算就行:<strong>原价 = 折后价 ÷ (1 - 折扣率)</strong>。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种常见使用场景</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 单次折扣</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          最常见的场景。超市标签写着"7 折",你就知道要付原价的 70%。输入原价和折扣百分比,计算器直接给你折后价和省了多少钱。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 连续折扣</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "先打 8 折再减 ¥50"——这种不能简单叠加。正确算法:先算折后价(原价 × 0.8),再减 50。很多电商平台用这个套路,用计算器可以快速验证是不是真的便宜了。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 反算原价</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          朋友说"我花 ¥120 买了件衣服,打了 6 折",你想知道原价多少?用反算功能:120 ÷ 0.6 = ¥200。适用于二手交易、比价等场景。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">折扣率对照速查</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <p>打 9 折 = 10% off → 付 90%</p>
          <p>打 8 折 = 20% off → 付 80%</p>
          <p>打 7 折 = 30% off → 付 70%</p>
          <p>打 5 折 = 50% off → 付 50%（半价）</p>
        </div>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → 立即使用折扣计算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Discount Formula</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The core formula is straightforward: <strong>Sale Price = Original Price × (1 - Discount Rate)</strong>. For example, an item priced at $100 with 25% off costs $100 × 0.75 = $75.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you know the sale price and discount rate, you can reverse-calculate the original price: <strong>Original Price = Sale Price ÷ (1 - Discount Rate)</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Common Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Single Discount</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most common scenario. A store sign says "25% off" — you pay 75% of the original price. Enter the original price and discount percentage, and the calculator gives you the sale price and savings instantly.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Stacked Discounts</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Take 20% off, then an extra $10" — you can't just add percentages. The correct way: apply the percentage first, then subtract the fixed amount. Many e-commerce platforms use this trick; the calculator helps you verify the real savings.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Reverse Calculation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A friend says "I got this for $60, it was 40% off" — what was the original price? Use reverse mode: $60 ÷ 0.60 = $100. Handy for secondhand shopping and price comparisons.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Quick Discount Reference</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <p>10% off → pay 90%</p>
          <p>20% off → pay 80%</p>
          <p>25% off → pay 75%</p>
          <p>50% off → pay 50% (half price)</p>
          <p>75% off → pay 25% (quarter price)</p>
        </div>

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
        {lang === 'zh' ? '折扣计算器使用指南' : 'How to Use a Discount Calculator'}
      </h1>
      {content[lang]}
    </div>
  )
}
