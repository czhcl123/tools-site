import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Chinese New Year traditions?", "acceptedAnswer": {"@type": "Answer", "text": "Spring couplets, firecrackers, reunion dinner, red envelopes."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Chinese Lunar Calendar Traditions",
  "description": "Lunar calendar principles, leap month rules, traditional festival dates, and how to use a lunar converter.",
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
    "@id": "https://getpracticaltools.com/blog/lunar-calendar-traditions"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Chinese Lunar Calendar Traditions',
    description: 'Lunar calendar principles, leap month rules, traditional festival dates, and how to use a lunar converter.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/lunar-calendar-traditions',
      languages: { 'en-US': '/blog/lunar-calendar-traditions', 'x-default': '/blog/lunar-calendar-traditions' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/lunar-calendar-traditions' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What is the Lunar Calendar?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Chinese Lunar Calendar is a traditional lunisolar calendar. <strong>Months follow lunar phases</strong> (synodic month ~29.5 days), with leap months added to synchronize with the solar year.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Leap Month Rules</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The calendar uses a "19-year, 7-leap" rule: 7 leap months are inserted over 19 years to keep the average year length close to the solar year.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Major Traditional Festivals</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Spring Festival</strong> — Lunar New Year (Jan/Feb)</li>
          <li><strong>Lantern Festival</strong> — 15th of first lunar month</li>
          <li><strong>Qingming</strong> — April 4-6 (solar)</li>
          <li><strong>Dragon Boat Festival</strong> — 5th of 5th month (June)</li>
          <li><strong>Mid-Autumn Festival</strong> — 15th of 8th month (Sep/Oct)</li>
          <li><strong>Double Ninth Festival</strong> — 9th of 9th month (Oct)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Heavenly Stems and Earthly Branches</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The calendar uses a 60-year cycle combining Heavenly Stems and Earthly Branches. 2024 is the Year of the Dragon, 2025 is the Year of the Snake.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What are Chinese New Year traditions?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Spring couplets, firecrackers, reunion dinner, red envelopes, and dragon dances.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-700 font-medium hover:underline">
            → Look Up Any Date's Lunar Equivalent
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
        {'Lunar Calendar and Traditions'}
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
