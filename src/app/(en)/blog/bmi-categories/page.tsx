import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "BMI categories?", "acceptedAnswer": {"@type": "Answer", "text": "Underweight, normal, overweight, obese."}}, {"@type": "Question", "name": "Why stricter Asian thresholds?", "acceptedAnswer": {"@type": "Answer", "text": "Higher diabetes risk at same BMI."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "BMI Categories Explained",
  "description": "BMI categories explained: underweight, normal, overweight, obese ranges. Learn BMI limitations and more accurate body assessment methods.",
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
    "@id": "https://getpracticaltools.com/blog/bmi-categories"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'BMI Categories Explained',
    description: 'BMI categories explained: underweight, normal, overweight, obese ranges. Learn BMI limitations and more accurate body assessment methods.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/bmi-categories',
      languages: { 'en-US': '/blog/bmi-categories', 'x-default': '/blog/bmi-categories' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/bmi-categories' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is BMI?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI (Body Mass Index) is calculated by dividing weight (kg) by height (m) squared. It's the most widely used indicator of body fatness, developed by Belgian mathematician Adolphe Quetelet in the 19th century.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI Categories</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WHO classification:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔵 <strong>Underweight</strong>: BMI &lt; 18.5</p>
          <p>🟢 <strong>Normal</strong>: BMI 18.5 – 24.9</p>
          <p>🟡 <strong>Overweight</strong>: BMI 25 – 29.9</p>
          <p>🔴 <strong>Obese</strong>: BMI ≥ 30</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Asian/Chinese standards</strong> differ slightly: overweight starts at 24, obesity at 28. Asian populations face metabolic risks at lower BMIs.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">BMI Limitations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI can't distinguish muscle from fat. A muscular athlete may have an overweight BMI but be perfectly healthy. Conversely, a normal-BMI person may carry excess visceral fat ("skinny fat").
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Athletes</strong>: High muscle density inflates BMI</li>
          <li><strong>Elderly</strong>: Muscle loss can mask high body fat</li>
          <li><strong>Pregnant women</strong>: BMI is not applicable</li>
          <li><strong>Children</strong>: Require age/sex-specific percentile charts</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Better Assessment Methods</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Combine these metrics for a fuller picture:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📏 <strong>Waist circumference</strong>: ≥ 90cm (men) / ≥ 85cm (women) indicates abdominal obesity</p>
          <p>📐 <strong>Waist-to-hip ratio</strong>: &gt; 0.9 (men) / &gt; 0.85 (women) is risky</p>
          <p>📊 <strong>Body fat percentage</strong>: 15-20% (men) / 20-25% (women) is healthy</p>
          <p>🩸 <strong>Metabolic markers</strong>: Blood sugar, lipids, and blood pressure are the ultimate health indicators</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Is normal BMI always healthy?</strong><br />
          A: Not necessarily. A normal-BMI person with a large waist or high body fat still faces elevated cardiovascular risk. Combine BMI with waist circumference and body fat measurements.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What BMI is ideal?</strong><br />
          A: A BMI of 20-25 is associated with the lowest mortality risk. But individual variation is significant — don't obsess over a specific number.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-700 font-medium hover:underline">
            → Calculate Your BMI
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
        {'BMI Categories Explained: What Your Number Really Means'}
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
