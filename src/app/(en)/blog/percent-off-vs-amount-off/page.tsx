import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which is better: 20% off or $10 off?", "acceptedAnswer": {"@type": "Answer", "text": "Compare $10 to 20% of the price. Below $50, $10 off saves more. Above $50, 20% off saves more."}}, {"@type": "Question", "name": "Do 50% off and 30% off add up to 80% off?", "acceptedAnswer": {"@type": "Answer", "text": "No. They multiply: you pay 50% then 70% of that, so you pay 35% of the original price — 65% off total."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Percent Off vs Amount Off: Which Is Best?",
  "description": "Percent off vs fixed amount off — learn the one formula that tells you which deal saves more, and how stacking discounts really works.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-10-06",
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
    "@id": "https://getpracticaltools.com/blog/percent-off-vs-amount-off"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Percent Off vs Amount Off: Which Is Best?',
    description: 'Percent off vs fixed amount off — learn the one formula that tells you which deal saves more, and how stacking discounts really works.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/percent-off-vs-amount-off',
      languages: { 'en-US': '/blog/percent-off-vs-amount-off', 'x-default': '/blog/percent-off-vs-amount-off' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/percent-off-vs-amount-off' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
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
          <Link href="/discount-calculator" className="text-orange-700 font-medium hover:underline">
            → Compare both deals with the Discount Calculator
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
        {'Percent Off vs Amount Off: Which Deal Is Better?'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-10-06
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
