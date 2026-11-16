import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "QR code data limit?", "acceptedAnswer": {"@type": "Answer", "text": "Up to 4,296 digits. Less data = faster scanning."}}, {"@type": "Question", "name": "Error correction levels?", "acceptedAnswer": {"@type": "Answer", "text": "L(7%), M(15%), Q(25%), H(30%)."}}, {"@type": "Question", "name": "Improve scan success?", "acceptedAnswer": {"@type": "Answer", "text": "Min 2cm×2cm, high contrast, no blur."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "QR Code Generator Guide",
  "description": "Learn how to generate QR codes for URLs, text, WiFi, and contacts. Includes tips, best practices, and real-world use cases.",
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
    "@id": "https://getpracticaltools.com/blog/qr-code-generator"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'QR Code Generator Guide',
    description: 'Learn how to generate QR codes for URLs, text, WiFi, and contacts. Includes tips, best practices, and real-world use cases.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/qr-code-generator',
      languages: { 'en-US': '/blog/qr-code-generator', 'x-default': '/blog/qr-code-generator' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/qr-code-generator' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is a QR Code?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A QR code (Quick Response Code) is a 2D barcode invented by Denso Wave in 1994. Your phone camera scans it to instantly access information. Today it's used everywhere: mobile payments, business cards, WiFi sharing, product tracking, and more.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Common Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. URL QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Convert a URL to a QR code, print it on business cards, flyers, or posters. People scan and open your website instantly — no typing required.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. WiFi QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Encode your WiFi name and password into a QR code, stick it on the wall. Guests scan and connect — no need to spell out the password. Format: WIFI:T:WPA;S:NetworkName;P:Password;;
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Plain Text QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Any text — promo codes, serial numbers, product descriptions — can be turned into a QR code. Scan to reveal the text instantly.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Contact QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Encode name, phone, email into a QR code. Scanning saves the contact directly to the phone's address book. Perfect for trade shows and networking events.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR Code Best Practices</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Size</strong>: minimum 2cm × 2cm; larger for longer scan distances. <strong>Contrast</strong>: dark code on light background, avoid busy patterns. <strong>Error correction</strong>: QR codes have 4 levels (L/M/Q/H); Level H still works even if 30% is damaged. <strong>Format</strong>: PNG for printing, SVG for scaling.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How much data can a QR code hold?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Up to 4,296 digits. Less data = smaller code = faster scanning.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Error correction levels?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">L(7%), M(15%), Q(25%), H(30%). Level H works even if 30% damaged.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to improve scan success?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Minimum 2cm×2cm, high contrast, avoid blur and glare.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-700 font-medium hover:underline">
            → Generate a QR Code Now
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
        {'QR Code Generator Guide'}
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
