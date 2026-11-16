import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Discounts vs coupons?", "acceptedAnswer": {"@type": "Answer", "text": "Discounts reduce directly; coupons are conditional. They can stack."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Discount vs Coupon: What's the Difference?",
  "description": "Discount vs coupon vs promo code: definitions, differences, how to stack them, and common calculation mistakes.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-09-04",
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
    "@id": "https://getpracticaltools.com/blog/discount-vs-coupon"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Discount vs Coupon: What\'s the Difference?',
    description: 'Discount vs coupon vs promo code: definitions, differences, how to stack them, and common calculation mistakes.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/discount-vs-coupon',
      languages: { 'en-US': '/blog/discount-vs-coupon', 'x-default': '/blog/discount-vs-coupon' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/discount-vs-coupon' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Definitions</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>💰 <strong>Discount</strong>: A direct price reduction, like "20% off" or "$20 off." No code needed — applies automatically.</p>
          <p>🎫 <strong>Coupon</strong>: A voucher (paper or digital) you present to receive a discount. Traditionally physical, now mostly digital.</p>
          <p>🔤 <strong>Promo Code</strong>: An alphanumeric code entered at checkout, like "SAVE20." Exclusive to online shopping.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Do Coupon Tools Show the Final Price After the Code Applies?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Mostly no.</strong> Coupon aggregators solve "where is the code," not "what will I actually pay." They cannot see your cart, your shipping address, or your membership tier, so all they can quote is a headline discount rate.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">When the number at checkout differs from the advertised rate, it is almost always one of these five:</p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Minimum spend</strong>: "$30 off $200" does nothing on a $150 cart — the price snaps back to full</li>
          <li><strong>Category exclusions</strong>: the code applies to full-price items, and your cart happens to be on sale</li>
          <li><strong>Stacking rules</strong>: some stores allow "discounted item + code," some do not — the rule lives on the checkout page, not the homepage</li>
          <li><strong>Tax and shipping</strong>: the discount applies to the item subtotal; tax and shipping are recalculated on the discounted amount, or not changed at all</li>
          <li><strong>One-time or new-customer limits</strong>: the code is validated at the last step, so every earlier number was theoretical</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>The only accurate price is the checkout screen</strong> — specifically, after you enter the code and press apply. Before ordering, note two numbers: the <strong>subtotal before the code</strong> and the <strong>total due after it</strong>. The gap is the real discount. Back-calculate the rate from that, not from the banner.
        </p>

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
          <Link href="/discount-calculator" className="text-orange-700 font-medium hover:underline">
            → Compare deals with the Discount Calculator
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
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {'Discount vs Coupon vs Promo Code: What\'s the Difference?'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-09-04
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
