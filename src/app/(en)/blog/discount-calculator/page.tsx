import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How to use discount calculator?", "acceptedAnswer": {"@type": "Answer", "text": "Enter original price and discount percentage."}}, {"@type": "Question", "name": "20% off vs 8折?", "acceptedAnswer": {"@type": "Answer", "text": "Same thing: original price × 0.8."}}, {"@type": "Question", "name": "Stacked discounts?", "acceptedAnswer": {"@type": "Answer", "text": "Apply first, then second to the new price."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Discount Calculator Guide",
  "description": "Learn how to use a discount calculator to find sale prices, savings, and multi-step discounts. Includes formulas and real examples.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-08-22",
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
    "@id": "https://getpracticaltools.com/blog/discount-calculator"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Discount Calculator Guide',
    description: 'Learn how to use a discount calculator to find sale prices, savings, and multi-step discounts. Includes formulas and real examples.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/discount-calculator',
      languages: { 'en-US': '/blog/discount-calculator', 'x-default': '/blog/discount-calculator' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/discount-calculator' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
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

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How do I use a discount calculator?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Enter original price and discount percentage to see the sale price and savings.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Is 20% off the same as 8折?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Yes. 20% off = original price × 0.8.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How do stacked discounts work?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Apply the first discount, then apply the second to the new price.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/discount-calculator" className="text-orange-700 font-medium hover:underline">
            → Try the Discount Calculator Now
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
        {'How to Use a Discount Calculator'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-08-22
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
