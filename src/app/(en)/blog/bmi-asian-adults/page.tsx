import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is BMI 24 overweight for Asians?", "acceptedAnswer": {"@type": "Answer", "text": "Under WHO Asia-Pacific criteria, BMI 23–24.9 is already classed as overweight for Asian adults."}}, {"@type": "Question", "name": "Why do Asians have lower BMI cutoffs?", "acceptedAnswer": {"@type": "Answer", "text": "At the same BMI, Asian populations tend to carry more visceral fat and face higher risks of diabetes and heart disease, so health bodies use lower thresholds."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "BMI for Asian Adults: Why Cutoffs Differ",
  "description": "Asian adults face higher metabolic risk at lower BMI values. See the adjusted Asia-Pacific cutoffs and why waist circumference matters just as much.",
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
    "@id": "https://getpracticaltools.com/blog/bmi-asian-adults"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'BMI for Asian Adults: Why Cutoffs Differ',
    description: 'Asian adults face higher metabolic risk at lower BMI values. See the adjusted Asia-Pacific cutoffs and why waist circumference matters just as much.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/bmi-asian-adults',
      languages: { 'en-US': '/blog/bmi-asian-adults', 'x-default': '/blog/bmi-asian-adults' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/bmi-asian-adults' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Who Was the Standard BMI Built For?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The familiar scale — 18.5 to 24 normal, above that overweight — comes mostly from European and North American data. Research shows that at the same BMI, Asian populations tend to carry more body fat, more visceral fat around the organs, and face higher risks of type 2 diabetes and heart disease at lower numbers. That's why the WHO publishes a separate set of cutoffs for Asia-Pacific.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Asia-Pacific BMI Categories (Adults)</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🟢 <strong>Under 18.5</strong>: underweight</p>
          <p>🟡 <strong>18.5 – 22.9</strong>: healthy range</p>
          <p>🟠 <strong>23.0 – 24.9</strong>: overweight (at risk)</p>
          <p>🔴 <strong>25.0 and above</strong>: obese</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compare that with the global scale: the overweight line drops from 25 to 23, and obesity from 30 to 25. A person with a BMI of 24 reads as "normal" internationally but sits in the intervention zone under the Asia-Pacific criteria.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What to Check Beyond BMI</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Waist circumference</strong>: at or above 90 cm for men, 85 cm for women (Chinese criteria) signals abdominal obesity and predicts metabolic risk better than BMI alone</li>
          <li><strong>Body fat percentage</strong>: above 25% for men, 30% for women is considered high; fit people often have a normal BMI with elevated body fat</li>
          <li><strong>Waist-to-hip ratio</strong>: easy to measure and strongly tied to visceral fat</li>
          <li><strong>Metabolic markers</strong>: healthy blood sugar, lipids, and blood pressure say more than the scale</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Two Cautions Even with a "Normal" BMI</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          First, <strong>normal-but-high isn't risk-free</strong>. An Asian adult at BMI 23 with a sedentary desk job and a refined-carb-heavy diet still carries metabolic risk. Second, <strong>muscle inflates BMI</strong>. Strength athletes routinely read as overweight on paper; for them, body fat and waist size tell the truer story.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Is a BMI of 24 overweight for Asian people?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Under Asia-Pacific criteria, overweight starts at 23. At 24, look at waist circumference and body fat alongside the number.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Should I use the Asian BMI scale?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Depends on your goal. Use the global scale to compare with international data; use the Asia-Pacific scale to judge health risk for Asian bodies.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-700 font-medium hover:underline">
            → Calculate your BMI against both scales
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
        {'BMI for Asian Adults: Why the Cutoffs Are Lower'}
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
