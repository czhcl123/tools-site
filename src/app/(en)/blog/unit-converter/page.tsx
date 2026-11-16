import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Supported units?", "acceptedAnswer": {"@type": "Answer", "text": "Length, weight, temperature, volume, area, data."}}, {"@type": "Question", "name": "Cups to ml?", "acceptedAnswer": {"@type": "Answer", "text": "1 cup = 240 ml. 1 tbsp = 15 ml."}}, {"@type": "Question", "name": "Fahrenheit to Celsius?", "acceptedAnswer": {"@type": "Answer", "text": "°C = (°F - 32) × 5/9."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Unit Converter Guide",
  "description": "How to convert units: length, weight, temperature, area, volume. Metric-imperial conversion tables and formulas included.",
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
    "@id": "https://getpracticaltools.com/blog/unit-converter"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Unit Converter Guide',
    description: 'How to convert units: length, weight, temperature, area, volume. Metric-imperial conversion tables and formulas included.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/unit-converter',
      languages: { 'en-US': '/blog/unit-converter', 'x-default': '/blog/unit-converter' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/unit-converter' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need Unit Conversion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A recipe calls for "2 cups of flour"? A weather app shows "72°F" and you can't tell if it's hot or cold? A product weighs "1.5 lb" and you have no idea how heavy that is? Unit conversion comes up constantly in daily life, travel, cooking, and study.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Five Most Common Conversions</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Length</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 inch = 2.54 cm | 1 foot = 30.48 cm | 1 mile = 1.609 km | 1 meter = 3.281 feet. Just remember: 1 inch ≈ 2.5 cm.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Weight</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 pound = 453.6 g | 1 ounce = 28.35 g | 1 kg = 2.205 lb. Remember: 1 lb ≈ 0.45 kg.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Temperature</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          °C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32. Quick references: 0°C = 32°F (freezing), 37°C = 98.6°F (body temp), 100°C = 212°F (boiling).
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Area</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 sq meter = 10.764 sq feet | 1 acre = 4,047 sq meters | 1 sq mile = 2.59 sq km. Useful when browsing international real estate listings.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Volume / Capacity</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          1 US gallon = 3.785 liters | 1 UK gallon = 4.546 liters | 1 cup = 236.6 ml | 1 fl oz = 29.57 ml. Essential for cooking with international recipes.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What units does it support?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Length, weight, temperature, volume, area, data storage, and more.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How many ml in a cup?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">1 cup = 240 ml. 1 tbsp = 15 ml. 1 tsp = 5 ml.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Fahrenheit to Celsius?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">°C = (°F - 32) × 5/9. Common: 350°F = 175°C, 400°F = 200°C.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-700 font-medium hover:underline">
            → Try the Unit Converter Now
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
        {'Unit Converter Guide'}
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
