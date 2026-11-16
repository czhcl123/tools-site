import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Grams in a cup of flour?", "acceptedAnswer": {"@type": "Answer", "text": "About 120g. Sugar ~200g. Butter ~227g."}}, {"@type": "Question", "name": "Altitude effects?", "acceptedAnswer": {"@type": "Answer", "text": "Above 1500m: raise temp, add liquid, reduce yeast."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Kitchen Unit Converter: Cooking Measures",
  "description": "Common cooking unit conversions: cups to ml, temperature conversions, international recipe adaptation, and altitude adjustments.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-09-10",
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
    "@id": "https://getpracticaltools.com/blog/unit-converter-cooking"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Kitchen Unit Converter: Cooking Measures',
    description: 'Common cooking unit conversions: cups to ml, temperature conversions, international recipe adaptation, and altitude adjustments.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/unit-converter-cooking',
      languages: { 'en-US': '/blog/unit-converter-cooking', 'x-default': '/blog/unit-converter-cooking' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/unit-converter-cooking' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Precise Conversion Matters in Cooking</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chinese cooking allows "a pinch of this," but baking is chemistry. One extra gram of yeast overproofs dough, 5g less sugar makes cookies limp, 10°F oven difference collapses a cake. Accurate unit conversion is the foundation of successful baking.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Volume Conversions</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>1 cup</strong> = 240 ml = 16 tbsp</li>
          <li><strong>1 tbsp</strong> = 15 ml = 3 tsp</li>
          <li><strong>1 tsp</strong> = 5 ml</li>
          <li><strong>1 oz</strong> = 30 ml</li>
          <li><strong>1 pint</strong> = 480 ml = 2 cups</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Temperature Conversions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          American recipes use Fahrenheit (°F); Chinese and European use Celsius (°C). Quick formula: <strong>°C = (°F - 32) × 5/9</strong>. Common baking temps: 350°F = 175°C, 375°F = 190°C, 400°F = 200°C, 425°F = 220°C.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Weight vs Volume</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 cup flour ≠ 1 cup sugar ≠ 1 cup butter — different densities mean the same volume has very different weights. Flour: 1 cup ≈ 120g. Sugar: 1 cup ≈ 200g. Butter: 1 cup ≈ 227g. Professional bakers weigh in grams with a kitchen scale.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Adapting International Recipes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          An American YouTube recipe says "2 cups flour"? Convert to grams with a unit converter. Japanese recipes use "g" but portions are small (1 serving) — scale up proportionally. European recipes often use "dl" (deciliter), where 1 dl = 100 ml.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Altitude Effects on Cooking</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Above 1500m</strong> — water boils at lower temperatures, cooking takes longer</li>
          <li><strong>Baking adjustments</strong> — increase temp by 15–25°C, add 1–2 tbsp liquid</li>
          <li><strong>Yeast fermentation</strong> — faster at altitude, reduce yeast by 25%</li>
          <li><strong>Sugar and baking powder</strong> — reduce sugar, increase baking powder at high altitude</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Grams in a cup of flour?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">About 120g. Sugar: ~200g/cup. Butter: ~227g/cup. Use a scale.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Does altitude affect baking?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Above 1500m: raise temp 15–25°C, add liquid, reduce yeast 25%.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-700 font-medium hover:underline">
            → Convert Any Cooking Measurement
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
        {'Kitchen Unit Converter: Cooking Measurements Guide'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-09-10
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
