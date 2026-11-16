import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "BMI formula?", "acceptedAnswer": {"@type": "Answer", "text": "BMI = weight (kg) ÷ height (m)²."}}, {"@type": "Question", "name": "Healthy BMI range?", "acceptedAnswer": {"@type": "Answer", "text": "WHO: 18.5–24.9. Asian: 18.5–23.9."}}, {"@type": "Question", "name": "BMI limitations?", "acceptedAnswer": {"@type": "Answer", "text": "Cannot distinguish muscle from fat."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "BMI Calculator Guide",
  "description": "BMI formula, WHO Asian thresholds, gender differences, and how to use an online BMI calculator to check if your weight is healthy.",
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
    "@id": "https://getpracticaltools.com/blog/bmi-calculator"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'BMI Calculator Guide',
    description: 'BMI formula, WHO Asian thresholds, gender differences, and how to use an online BMI calculator to check if your weight is healthy.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/bmi-calculator',
      languages: { 'en-US': '/blog/bmi-calculator', 'x-default': '/blog/bmi-calculator' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/bmi-calculator' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is BMI?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI (Body Mass Index) is the most widely used screening tool for weight status. The formula: <strong>BMI = weight (kg) ÷ height (m)²</strong>. For example, 65 kg ÷ (1.70 m)² = 22.5.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Are Healthy BMI Ranges?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WHO global standard: 18.5–24.9 normal, 25–29.9 overweight, ≥30 obese. <strong>Asian thresholds are stricter</strong>: 18.5–23.9 normal, 24–27.9 overweight, ≥28 obese — because Asian populations face higher diabetes and hypertension risk at the same BMI level.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Do Men and Women Have Different BMI Standards?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The thresholds are the same, but interpretation differs. Women naturally carry 5–10% more body fat than men at the same BMI, so health risk is slightly lower. In fitness/aesthetic contexts, "ideal BMI" expectations also differ by gender.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Limitations of BMI</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BMI is a screening tool, not a diagnosis. It cannot distinguish muscle from fat (a bodybuilder at BMI 28 may be perfectly healthy), does not reflect visceral fat distribution, and children, pregnant women, and elderly need adjusted standards. Combine with waist circumference, body fat percentage, and blood work for a complete picture.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use a BMI Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter your height in cm and weight in kg, click calculate. The result shows your BMI number, category (underweight/normal/overweight/obese), and a color-coded indicator. Our tool supports both WHO and Asian thresholds, plus imperial units (feet/inches, pounds).
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What is the BMI formula?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">BMI = weight (kg) ÷ height (m)².</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What is a healthy BMI range?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">WHO: 18.5–24.9 normal. Asian threshold: 18.5–23.9.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What are BMI limitations?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Cannot distinguish muscle from fat or reflect visceral fat.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/bmi-calculator" className="text-orange-700 font-medium hover:underline">
            → Try the BMI Calculator Now
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
        {'BMI Calculator Guide — How to Calculate Body Mass Index'}
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
