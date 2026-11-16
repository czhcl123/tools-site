import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Moon phases and plants?", "acceptedAnswer": {"@type": "Answer", "text": "Traditionally: new moon for roots, full moon for leaves."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Lunar Gardening Guide",
  "description": "Lunar gardening: how moon phases affect planting, waxing vs waning moon activities, scientific evidence, and practical tips.",
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
    "@id": "https://getpracticaltools.com/blog/lunar-gardening"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Lunar Gardening Guide',
    description: 'Lunar gardening: how moon phases affect planting, waxing vs waning moon activities, scientific evidence, and practical tips.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/lunar-gardening',
      languages: { 'en-US': '/blog/lunar-gardening', 'x-default': '/blog/lunar-gardening' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/lunar-gardening' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is Lunar Gardening?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lunar gardening is a traditional practice of scheduling planting activities based on moon phases. For thousands of years, farmers used the moon's waxing and waning to decide when to sow, prune, and harvest. The core idea: the moon's gravity influences Earth's water, affecting plant growth.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Moon Phases and Activities</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🌙 <strong>New Moon → First Quarter (Waxing)</strong>: Plant leafy greens (lettuce, spinach, cabbage). Increasing gravity pulls water up, promoting leaf growth.</p>
          <p>🌓 <strong>First Quarter → Full Moon</strong>: Plant fruiting crops (tomatoes, peppers, cucumbers). Water continues rising; fruit development peaks.</p>
          <p>🌕 <strong>Full Moon → Last Quarter (Waning)</strong>: Harvest, prune, weed. Water recedes; plant activity slows.</p>
          <p>🌘 <strong>Last Quarter → New Moon</strong>: Turn soil, add compost, rest. Land recovery period.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Scientific Evidence</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Science is <strong>divided</strong> on lunar gardening. Some studies found weak correlations between moon phases and seed germination rates, but most rigorous controlled experiments show no significant difference.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Supporters argue the moon's gravity affects tides and possibly soil moisture. But whether this is enough to change plant growth remains unproven.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Use as reference, not rule</strong>: Don't miss a planting window because the "moon phase is wrong"</li>
          <li><strong>Nail the basics first</strong>: Soil, water, and sunlight matter 100x more than moon phase</li>
          <li><strong>Keep records</strong>: Track your planting results monthly; see if patterns emerge</li>
          <li><strong>Use a lunar calendar</strong>: Quick moon phase lookup without consulting almanacs</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Does lunar gardening really work?</strong><br />
          A: No conclusive scientific evidence. But as thousands of years of tradition, it won't hurt your plants. If you enjoy the practice, go for it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What are the best planting days each month?</strong><br />
          A: Varies by region and crop. Generally, 2-3 days around new moon and full moon are peak activity periods.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-700 font-medium hover:underline">
            → Check the lunar calendar and moon phases
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
        {'Lunar Gardening Guide: Plant by the Moon'}
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
