import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "QR in marketing?", "acceptedAnswer": {"@type": "Answer", "text": "On cards, flyers, posters. Scan to visit, claim offers."}}, {"@type": "Question", "name": "Track scan data?", "acceptedAnswer": {"@type": "Answer", "text": "UTM parameters + Google Analytics."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "QR Code Marketing Guide",
  "description": "How to use QR codes for marketing, store traffic, product tracking, and QR code best practices.",
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
    "@id": "https://getpracticaltools.com/blog/qr-code-marketing"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'QR Code Marketing Guide',
    description: 'How to use QR codes for marketing, store traffic, product tracking, and QR code best practices.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/qr-code-marketing',
      languages: { 'en-US': '/blog/qr-code-marketing', 'x-default': '/blog/qr-code-marketing' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/qr-code-marketing' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR Codes in Marketing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR codes bridge offline and online worlds. Customers scan to visit websites, claim coupons, follow accounts. <strong>Usage grows yearly</strong> — over 10 billion QR scans globally in 2024.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Five Business Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Product Packaging</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Print QR codes on packaging for product details, instructions, and authenticity verification.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Store Traffic</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Place QR codes on posters and counters to drive followers, memberships, and coupon claims.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Business Cards</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Add QR codes to physical cards — scan to save contacts, visit LinkedIn, view portfolios.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. WiFi Sharing</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          In restaurants and cafes, WiFi QR codes let customers connect without typing passwords.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Event Check-in</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Replace traditional check-in with QR codes for faster, queue-free entry.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Ensure QR code is large enough (at least 2cm×2cm)</li>
          <li>Maintain white space around the code (quiet zone)</li>
          <li>Test readability in different lighting</li>
          <li>Add a CTA (e.g., "Scan for discount")</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How are QR codes used in marketing?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Print on cards, flyers, posters. Scan to visit sites, claim offers, follow social media.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to track scan data?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Use QR codes with UTM parameters and track with Google Analytics.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-700 font-medium hover:underline">
            → Generate Your Marketing QR Code for Free
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
        {'QR Code Marketing Guide'}
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
