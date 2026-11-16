import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Travel conversions?", "acceptedAnswer": {"@type": "Answer", "text": "Temperature, distance, weight, liquids, currency."}}, {"@type": "Question", "name": "US vs UK gallons?", "acceptedAnswer": {"@type": "Answer", "text": "US ≈ 3.785L; UK ≈ 4.546L."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Travel Unit Conversion Guide",
  "description": "Essential unit conversions for international travel: length, temperature, weight, speed, with quick reference tables.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-08-23",
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
    "@id": "https://getpracticaltools.com/blog/unit-converter-travel"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Travel Unit Conversion Guide',
    description: 'Essential unit conversions for international travel: length, temperature, weight, speed, with quick reference tables.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/unit-converter-travel',
      languages: { 'en-US': '/blog/unit-converter-travel', 'x-default': '/blog/unit-converter-travel' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/unit-converter-travel' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Learn Unit Conversion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When traveling abroad, you'll encounter miles, Fahrenheit, pounds. Not knowing conversions can lead to <strong>buying wrong amounts, setting wrong temperatures, misunderstanding speed limits</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Length Conversion Quick Reference</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>1 inch = 2.54 cm</li>
          <li>1 foot = 30.48 cm</li>
          <li>1 mile = 1.609 km</li>
          <li>1 meter = 3.281 feet</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Temperature Conversion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          F to C: °C = (°F - 32) × 5/9. Quick estimate: subtract 30, divide by 2. E.g., 86°F ≈ (86-30)/2 = 28°C.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Weight and Volume</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>1 pound = 0.454 kg</li>
          <li>1 ounce = 28.35 g</li>
          <li>1 gallon (US) = 3.785 L</li>
          <li>1 gallon (UK) = 4.546 L</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Speed Units by Country</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most countries use km/h; the US uses mph. Speed limit 100km/h ≈ 62mph. Always check your rental car's speedometer unit.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What conversions do travelers need?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Temperature, distance, weight, liquids, and currency.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">US vs UK gallons?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">US gallon ≈ 3.785L; UK gallon ≈ 4.546L — a 20% difference.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-700 font-medium hover:underline">
            → Try the Online Unit Converter
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
        {'Travel Unit Conversion Guide'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-08-23
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
