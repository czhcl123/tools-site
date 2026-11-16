import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why iPhone defaults to HEIC?", "acceptedAnswer": {"@type": "Answer", "text": "Half the size of JPEG, comparable quality."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "iPhone HEIC Photo Format Guide",
  "description": "Detailed comparison of iPhone photo formats, how to choose the best format, and converting HEIC to JPG.",
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
    "@id": "https://getpracticaltools.com/blog/heic-iphone-photo-guide"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'iPhone HEIC Photo Format Guide',
    description: 'Detailed comparison of iPhone photo formats, how to choose the best format, and converting HEIC to JPG.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/heic-iphone-photo-guide',
      languages: { 'en-US': '/blog/heic-iphone-photo-guide', 'x-default': '/blog/heic-iphone-photo-guide' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/heic-iphone-photo-guide' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What is HEIC?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC (High Efficiency Image Container) is the photo format Apple uses since iOS 11. It uses HEIF encoding, <strong>50% smaller than JPG</strong> with the same quality. The downside is poor compatibility.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Format Comparison</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>HEIC</strong>: small size, high quality, poor compatibility</li>
          <li><strong>JPG</strong>: best compatibility, larger files, ideal for sharing</li>
          <li><strong>PNG</strong>: lossless compression, largest files, ideal for design</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When Do You Need to Convert?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Uploading to social media, sending to Android users, editing on Windows, printing — all need JPG format. Use a HEIC to JPG converter for batch processing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">iPhone Settings</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Settings → Camera → Formats → Choose "Most Compatible" (JPG) or "High Efficiency" (HEIC). Choose JPG if you share photos frequently.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Why does iPhone default to HEIC?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Files are half the size of JPEG with comparable quality, saving storage.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-700 font-medium hover:underline">
            → Convert HEIC to JPG for Free
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
        {'iPhone Photo Format Guide'}
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
