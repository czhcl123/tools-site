import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '折扣 vs 优惠券 vs 促销码：有什么区别？'
      : 'Discount vs Coupon vs Promo Code: What\'s the Difference?',
    description: lang === 'zh'
      ? '折扣、优惠券、促销码三者的定义和区别，如何叠加使用，以及计算折扣时的常见错误。'
      : 'Discount vs coupon vs promo code: definitions, differences, how to stack them, and common calculation mistakes.',
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/blog/discount-vs-coupon' : '/blog/discount-vs-coupon'}`,
      languages: { 'zh-CN': '/zh/blog/discount-vs-coupon', 'en-US': '/blog/discount-vs-coupon', 'x-default': '/blog/discount-vs-coupon' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三者的定义</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>💰 <strong>折扣（Discount）</strong>：直接降低商品价格，如"全场8折"、"减$20"。不需要码，自动生效。</p>
          <p>🎫 <strong>优惠券（Coupon）</strong>：纸质或电子凭证，出示后享受优惠。传统形式，现在多为电子版。</p>
          <p>🔤 <strong>促销码（Promo Code）</strong>：结账时输入的字母数字组合，如"SAVE20"。线上购物专属。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">关键区别</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>使用方式不同</strong>：折扣自动生效，优惠券需要出示，促销码需要手动输入。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>适用场景不同</strong>：折扣适合全店活动，优惠券适合定向发放，促销码适合线上追踪效果。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>可叠加性</strong>：折扣通常不叠加；优惠券和促销码有时可以叠加使用，取决于商家规则。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何计算折扣</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>百分比折扣</strong>：原价 × (1 - 折扣率)。例如 $100 打8折 = $100 × 0.8 = $80。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>满减</strong>：满 $100 减 $20 = 实付 $80。但如果只买了 $110 的东西，实际折扣率只有18.2%，不是20%。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>叠加折扣</strong>：先打折再减码，还是先减码再打折？顺序不同结果不同。通常先用百分比折扣，再用固定金额促销码对消费者更有利。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见错误</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>混淆"打几折"和"减几折"</strong>：打8折=减20%，不是减8%</li>
          <li><strong>忽略使用门槛</strong>：满$200才能用的码，买了$150就浪费了</li>
          <li><strong>不比较最终价格</strong>：A店打9折 vs B店满$100减$15，哪个更便宜？用计算器算一下</li>
          <li><strong>忘记时间限制</strong>：促销码过期就失效，别拖到最后一天</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 折扣和优惠券能叠加吗？</strong><br />
          A: 取决于商家。一般来说，一个订单只能用一种主要折扣方式。但有些商家允许"折扣商品+促销码"叠加。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 促销码在哪里找？</strong><br />
          A: 商家官网、邮件订阅、社交媒体、优惠码聚合网站。订阅品牌邮件通常是获取独家促销码的最佳方式。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → 用折扣计算器比较哪个更划算
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Definitions</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>💰 <strong>Discount</strong>: A direct price reduction, like "20% off" or "$20 off." No code needed — applies automatically.</p>
          <p>🎫 <strong>Coupon</strong>: A voucher (paper or digital) you present to receive a discount. Traditionally physical, now mostly digital.</p>
          <p>🔤 <strong>Promo Code</strong>: An alphanumeric code entered at checkout, like "SAVE20." Exclusive to online shopping.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Key Differences</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>How you use them</strong>: Discounts apply automatically, coupons require presentation, promo codes require manual entry.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>When to use each</strong>: Discounts suit store-wide sales, coupons suit targeted distribution, promo codes suit online tracking.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Stacking</strong>: Discounts typically don't stack. Coupons and promo codes sometimes can, depending on store policy.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Calculate Discounts</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Percentage discount</strong>: Original price × (1 - discount rate). E.g., $100 at 20% off = $100 × 0.8 = $80.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Threshold discount</strong>: "Spend $100, save $20" = pay $80. But if you spend $110, the actual discount is only 18.2%, not 20%.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Stacked discounts</strong>: Percentage off first, then fixed-amount promo? Or the reverse? Order matters. Generally, percentage first then fixed-amount is better for consumers.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Mistakes</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Confusing "20% off" with "80% off"</strong>: 20% off means you pay 80%, not 20%</li>
          <li><strong>Ignoring minimum spend</strong>: A code requiring $200 minimum is useless if you only spend $150</li>
          <li><strong>Not comparing final prices</strong>: Store A at 10% off vs Store B with $15 off $100 — use a calculator to compare</li>
          <li><strong>Forgetting expiry dates</strong>: Promo codes expire; don't wait until the last day</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Can discounts and coupons stack?</strong><br />
          A: It depends on the store. Generally, only one main discount type per order. Some stores allow "discounted items + promo code" stacking.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Where do I find promo codes?</strong><br />
          A: Brand websites, email subscriptions, social media, coupon aggregator sites. Subscribing to brand emails is usually the best way to get exclusive codes.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-600 font-medium hover:underline">
            → Compare deals with the Discount Calculator
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '折扣 vs 优惠券 vs 促销码：有什么区别？' : 'Discount vs Coupon vs Promo Code: What\'s the Difference?'}
      </h1>
      {content[lang]}
    </div>
  )
}
