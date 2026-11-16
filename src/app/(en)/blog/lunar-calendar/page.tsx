import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is lunar calendar?", "acceptedAnswer": {"@type": "Answer", "text": "Chinese calendar combining sun and moon cycles."}}, {"@type": "Question", "name": "Same dates every year?", "acceptedAnswer": {"@type": "Answer", "text": "No. Chinese New Year floats between late Jan and mid-Feb."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Lunar Calendar Converter Guide",
  "description": "How to convert solar dates to Chinese lunar dates and back. Includes Heavenly Stems, Chinese zodiac, solar terms, and real use cases.",
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
    "@id": "https://getpracticaltools.com/blog/lunar-calendar"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Lunar Calendar Converter Guide',
    description: 'How to convert solar dates to Chinese lunar dates and back. Includes Heavenly Stems, Chinese zodiac, solar terms, and real use cases.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/lunar-calendar',
      languages: { 'en-US': '/blog/lunar-calendar', 'x-default': '/blog/lunar-calendar' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/lunar-calendar' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Lunar vs. Solar Calendar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The solar (Gregorian) calendar is the international standard: 365/366 days per year. The Chinese lunar calendar is actually a lunisolar calendar — months follow the moon cycle (29.5 days), while the year is aligned to the solar year through leap months. That's why lunar dates shift every year relative to the solar calendar.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Lunar vs Gregorian Calendar: Side by Side</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-semibold text-gray-800">Aspect</th>
                <th className="py-2 pr-3 font-semibold text-gray-800">Gregorian (solar)</th>
                <th className="py-2 font-semibold text-gray-800">Chinese lunar (lunisolar)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Based on</td><td className="py-2 pr-3">Earth orbiting the sun</td><td className="py-2">Moon phases, anchored to the solar year</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Year length</td><td className="py-2 pr-3">365 or 366 days</td><td className="py-2">354 or 384 days (with leap month)</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Months</td><td className="py-2 pr-3">Always 12, 28–31 days each</td><td className="py-2">12 or 13, 29–30 days each</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">Correction</td><td className="py-2 pr-3">Leap day every 4 years</td><td className="py-2">Leap month every 2–3 years</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-3">New year</td><td className="py-2 pr-3">Fixed: January 1</td><td className="py-2">Floats between late January and mid-February</td></tr>
              <tr><td className="py-2 pr-3">Used for</td><td className="py-2 pr-3">Business, government, everything global</td><td className="py-2">Festivals, zodiac, auspicious dates, Bazi</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Converting Gregorian to Lunar in Three Steps</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Locate the lunar year that contains your date — it starts on that year's Chinese New Year and ends the day before the next one</li>
          <li>Check whether that lunar year has a leap month: a 13-month year shifts every later date by roughly a month</li>
          <li>Place the month by new moon, then count days forward from the first day of that month</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">
          That is exactly why nobody does it in their head. Questions like "what date was the Mid-Autumn Festival in 1990" are converter problems, not mental-math problems.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need Lunar Date Conversion?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Traditional festivals</strong>: Chinese New Year, Lantern Festival, Dragon Boat Festival, Mid-Autumn, and Double Ninth are all on lunar dates. <strong>Birthdays</strong>: many older Chinese people only remember their lunar birthday. <strong>Auspicious dates</strong>: moving, weddings, and business openings traditionally follow the lunar calendar. <strong>Chinese astrology (Bazi)</strong>: requires the lunar birth date.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Heavenly Stems and Chinese Zodiac</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each lunar year has a Heavenly Stem + Earthly Branch combination (e.g., "Jia Chen" for 2024) paired with a zodiac animal (Dragon). The 10 stems and 12 branches cycle every 60 years (the Sexagenary cycle). Your birth year determines one of the four pillars in Bazi astrology.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Are Solar Terms (Jieqi)?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Solar terms are 24 points along the sun's ecliptic path, marking seasonal changes. Start of Spring (Lichun, Feb 3-5) is the astronomical marker for the new year. Solar terms are crucial in the lunar calendar for agriculture and Traditional Chinese Medicine.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use the Lunar Calendar Converter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter a solar date (e.g., 2026-01-29), and the converter returns the corresponding lunar date (e.g., first day of the first lunar month, Year of the Snake). It also works in reverse: enter a lunar date to get the solar equivalent. Instant, no need to flip through a perpetual calendar.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What is the lunar calendar?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">A traditional Chinese calendar combining sun and moon cycles.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Are lunar dates the same every year?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">No. Chinese New Year floats between late January and mid-February.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-700 font-medium hover:underline">
            → Try the Lunar Calendar Converter Now
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
        {'Chinese Lunar Calendar Converter Guide'}
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
