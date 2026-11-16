import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How early to plan wedding?", "acceptedAnswer": {"@type": "Answer", "text": "6–12 months minimum. Popular venues need 12+."}}, {"@type": "Question", "name": "Countdown on wedding day?", "acceptedAnswer": {"@type": "Answer", "text": "Set timers for each segment: makeup, ceremony, photos, reception."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Wedding Countdown: Plan Your Big Day",
  "description": "Use countdown timers to manage every milestone of wedding planning, from venue booking to the big day timeline.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-09-10",
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
    "@id": "https://getpracticaltools.com/blog/countdown-wedding-planner"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Wedding Countdown: Plan Your Big Day',
    description: 'Use countdown timers to manage every milestone of wedding planning, from venue booking to the big day timeline.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/countdown-wedding-planner',
      languages: { 'en-US': '/blog/countdown-wedding-planner', 'x-default': '/blog/countdown-wedding-planner' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/countdown-wedding-planner' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Weddings Need a Countdown</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wedding planning involves dozens of tasks and multiple vendors over 6–18 months. A countdown timer visualizes every deadline, ensuring nothing falls through the cracks. Set your wedding date as the target and work backward to assign deadlines for each milestone.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">12-Month Countdown: Key Milestones</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">12–9 Months Before</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Set your budget and guest count, book the venue (popular venues need 12+ months), choose your wedding date, and start dress shopping. Use countdown timers to set deadlines for each task.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6–3 Months Before</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Book photographer and videographer, select bridesmaids and groomsmen, buy wedding rings, plan the honeymoon, and do dress fittings. This phase is intense — countdowns help prioritize.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1 Month Before</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Confirm all vendors, final dress fitting, create seating chart, buy wedding supplies (invitations, favors), and arrange day-of transportation.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Wedding Day Timeline</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Countdown timers work on the day too: hair and makeup (3 hours), first look (30 min), ceremony (30 min), photos (1 hour), reception (3 hours). A minute-by-minute timeline ensures every transition is smooth.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Create multiple timers</strong> — one master countdown plus sub-countdowns for each vendor deadline</li>
          <li><strong>Set reminders</strong> — alert 1 week and 3 days before key dates</li>
          <li><strong>Share with your partner</strong> — sync progress to avoid duplicate work</li>
          <li><strong>Build in buffers</strong> — finish each task 1–2 days early for unexpected delays</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How early should I start wedding planning?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">At least 6–12 months. Popular venues need 12+ months advance booking.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to use countdown on the wedding day?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Set timers for each segment: makeup (3h), ceremony (30min), photos (1h), reception (3h).</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-700 font-medium hover:underline">
            → Start Your Wedding Countdown
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
        {'Wedding Countdown: Planning Your Perfect Day'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-09-10
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
