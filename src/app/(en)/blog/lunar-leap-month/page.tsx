import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How often does a leap month occur?", "acceptedAnswer": {"@type": "Answer", "text": "Roughly seven times every 19 years. A leap month appears about every two to three years on average."}}, {"@type": "Question", "name": "Which year is the next leap month?", "acceptedAnswer": {"@type": "Answer", "text": "Use a lunar calendar converter to check any year — it shows the leap month (闰月) directly for the Chinese calendar in use."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Lunar Leap Month: Why a Year Has 13 Months",
  "description": "Why the Chinese lunar calendar inserts leap months, how they are decided, how often they occur, and what they mean for festivals and birthdays.",
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
    "@id": "https://getpracticaltools.com/blog/lunar-leap-month"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Lunar Leap Month: Why a Year Has 13 Months',
    description: 'Why the Chinese lunar calendar inserts leap months, how they are decided, how often they occur, and what they mean for festivals and birthdays.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/lunar-leap-month',
      languages: { 'en-US': '/blog/lunar-leap-month', 'x-default': '/blog/lunar-leap-month' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/lunar-leap-month' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Moon and the Sun Don't Line Up</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Chinese lunisolar calendar tracks two things at once: months follow the moon, years follow the sun. A synodic month runs about 29.53 days, so 12 lunar months total roughly 354 days — while the solar year is about 365.24 days. The gap is around 11 days a year. Left alone, the lunar new year would drift into summer within three decades, and festivals would detach from the seasons entirely. The leap month exists to close that gap.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How a Leap Month Is Decided</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The rule compresses into one line: <strong>seven leap months every 19 years, assigned where no major solar term falls</strong>. The calendar splits its 24 solar terms into two alternating groups, and every lunar month is supposed to contain one "major term" (中气). When a year carries 13 months and one of them contains no major term at all, that month becomes the leap month — named after the month it follows, as "leap second month," "leap sixth month," and so on.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Why 19 years? Because 19 solar years and 235 lunations differ by only about two hours, so inserting seven leap months in that span realigns lunar dates with the seasons. Astronomers call it the Metonic cycle; Chinese calendar scholars derived the same structure independently as the "chapter" system (章法).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Leap Months Mean for Daily Life</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Festivals</strong>: traditional holidays are usually skipped in leap months. Folk customs advise against weddings or birthdays in a leap month — traditions vary by region, but checking the calendar before booking anything big is practical</li>
          <li><strong>Chinese zodiac year</strong>: zodiac signs follow the lunar year, so a baby born in a leap month takes the sign of the preceding month; two folk counting methods exist and neither is official</li>
          <li><strong>Solar terms</strong>: terms belong to the solar half of the calendar and are untouched by leap months — farming schedules proceed as normal</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Check Any Year for a Leap Month</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          No need to memorize rules. Enter a Gregorian year into a lunar calendar converter and the result labels the leap month directly — 2023 had a leap second month, 2025 a leap sixth month, 2028 a leap fifth month. Converting dates both ways and looking up the lunar date for any day live in the same tool.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How often do leap months come around?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">On average every two to three years, seven times per 19-year cycle. Recent examples: leap fourth month 2020, leap second month 2023, leap sixth month 2025.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Do festivals in a leap month count?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Customs differ by region. Most areas skip traditional holidays during a leap month; others celebrate on the normal date. Confirming with a converter is the safe move.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-700 font-medium hover:underline">
            → Look up the leap month for any year with the Lunar Calendar Converter
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
        {'Leap Months in the Lunar Calendar: Why Some Years Have 13 Months'}
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
