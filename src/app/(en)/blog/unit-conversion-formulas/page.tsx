import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do you convert inches to centimeters?", "acceptedAnswer": {"@type": "Answer", "text": "Multiply inches by 2.54. One inch equals exactly 2.54 centimeters, so 10 inches is 25.4 cm."}}, {"@type": "Question", "name": "Why is temperature conversion different?", "acceptedAnswer": {"@type": "Answer", "text": "Temperature scales have different zero points, so you need an offset as well as a multiplier: °C = (°F − 32) × 5/9."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Unit Conversion Formulas: Length & Weight",
  "description": "Every unit conversion formula you use — inches to cm, pounds to kg, gallons to liters, Fahrenheit to Celsius — plus memory tricks and common mistakes.",
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
    "@id": "https://getpracticaltools.com/blog/unit-conversion-formulas"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Unit Conversion Formulas: Length & Weight',
    description: 'Every unit conversion formula you use — inches to cm, pounds to kg, gallons to liters, Fahrenheit to Celsius — plus memory tricks and common mistakes.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/unit-conversion-formulas',
      languages: { 'en-US': '/blog/unit-conversion-formulas', 'x-default': '/blog/unit-conversion-formulas' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/unit-conversion-formulas' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Logic: Multiply by a Ratio</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Almost every unit conversion does one thing: <strong>multiply by the fixed ratio between two units</strong>. One inch is 2.54 centimeters, so inches to centimeters means multiplying by 2.54; going the other way divides. Direction matters more than the numbers — big unit to small unit means multiply, small unit to big unit means divide.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Length Formulas</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📏 <strong>Inches to cm</strong>: inches × 2.54</p>
          <p>📏 <strong>cm to inches</strong>: cm ÷ 2.54</p>
          <p>📏 <strong>Miles to km</strong>: miles × 1.609</p>
          <p>📏 <strong>Km to miles</strong>: km ÷ 1.609</p>
          <p>📏 <strong>Feet to meters</strong>: feet × 0.3048</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Anchors worth remembering: an inch is about two-and-a-half thumbs wide, a mile is roughly 1.6 km — a marathon is 42.2 km or 26.2 miles.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Weight Formulas</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>⚖️ <strong>Pounds to kg</strong>: pounds × 0.4536</p>
          <p>⚖️ <strong>Kg to pounds</strong>: kg ÷ 0.4536 (or × 2.205)</p>
          <p>⚖️ <strong>Ounces to grams</strong>: ounces × 28.35</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Quick mental shortcut: subtract 10% of the pounds, then halve it. That's close to kilograms — 150 lb becomes 135 ÷ 2 ≈ 68 kg against the exact 68.04. Accurate enough for groceries, gym plates, and parcels.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Volume Formulas</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🥛 <strong>Gallons (US) to liters</strong>: gallons × 3.785</p>
          <p>🥛 <strong>Pints to milliliters</strong>: pints × 473</p>
          <p>🥛 <strong>Cups to milliliters</strong>: cups × 236.6</p>
          <p>🥛 <strong>Tablespoons to milliliters</strong>: tablespoons × 14.8</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the set you'll use for Western recipes. Watch out: gallons come in US and imperial versions — an imperial gallon is about 4.546 liters, roughly 20% larger. Check which system the recipe assumes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Temperature: The One That Needs Offset</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Temperature scales start at different zero points, so a multiplier alone won't do — you need an offset too:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🌡️ <strong>Fahrenheit to Celsius</strong>: (°F − 32) × 5/9</p>
          <p>🌡️ <strong>Celsius to Fahrenheit</strong>: °C × 9/5 + 32</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Two anchors cover most situations: 0°C = 32°F and 100°C = 212°F. See 85°F in a forecast? (85 − 32) × 5/9 ≈ 29.4°C — hot day.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Classic Conversion Mistakes</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Reversed direction</strong>: kg to lb means multiplying by 2.205, not dividing — the answer is off by a factor of nearly five</li>
          <li><strong>Wrong magnitude</strong>: millimeters and meters differ by 1,000; one misplaced decimal ruins an engineering drawing</li>
          <li><strong>Mixed systems</strong>: recipe cups and car gallons belong to different measurement worlds — identify the system before converting</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How many centimeters in an inch?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Exactly 2.54 cm — it's an international definition, not an approximation.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Quick way to convert Celsius to Fahrenheit?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Rough version: Celsius × 2 + 30. So 25°C × 2 + 30 = 80°F against the exact 77°F — close enough for daily use.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-700 font-medium hover:underline">
            → Skip the formulas with the Unit Converter
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
        {'Unit Conversion Formulas: Length, Weight, Volume'}
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
