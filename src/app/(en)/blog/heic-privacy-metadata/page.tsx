import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do HEIC photos contain location data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if Location Services is enabled for the camera. HEIC files embed EXIF metadata including GPS coordinates, capture time, and device model."}}, {"@type": "Question", "name": "Does converting HEIC to JPG remove metadata?", "acceptedAnswer": {"@type": "Answer", "text": "Basic converters usually strip EXIF in the process, but not always by design — some preserve it. For privacy-sensitive shares, strip metadata explicitly or disable location access for the camera."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "HEIC Privacy: What Your Photos Reveal",
  "description": "What location and device data hides inside HEIC files, whether conversion strips it, and a pre-share privacy checklist for your photos.",
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
    "@id": "https://getpracticaltools.com/blog/heic-privacy-metadata"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'HEIC Privacy: What Your Photos Reveal',
    description: 'What location and device data hides inside HEIC files, whether conversion strips it, and a pre-share privacy checklist for your photos.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/heic-privacy-metadata',
      languages: { 'en-US': '/blog/heic-privacy-metadata', 'x-default': '/blog/heic-privacy-metadata' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/heic-privacy-metadata' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Much Can One Photo Expose?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Like JPG, HEIC files embed EXIF metadata: capture time, GPS coordinates, device model, lens settings, even altitude. With Location Services enabled for the camera — the iPhone default — a selfie at your front door can ship with coordinates accurate to a few meters of your address.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Metadata That Actually Hurts</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📍 <strong>GPS coordinates</strong>: precise enough to identify a specific building</p>
          <p>🗓️ <strong>Timestamps</strong>: down to the second — enough to infer daily routines</p>
          <p>📱 <strong>Device model</strong>: an "iPhone 17 Pro" tag says something about spending habits</p>
          <p>🖼️ <strong>Original resolution</strong>: hints at whether a pro camera was used</p>
          <p>🔋 <strong>Serial details</strong>: in rare cases traceable to a specific device</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Real-world incidents follow a pattern: work badges photographed with office GPS, school-uniform photos of kids with timestamps that reveal pickup routines, secondhand-listing photos carrying home coordinates.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Does Converting to JPG Strip All That?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not necessarily. Many converters carry EXIF across deliberately — JPG's metadata support is even more mature than HEIC's. Treating "convert" as "sanitize" is the classic mistake. Keep the two jobs separate: <strong>conversion solves compatibility, metadata removal solves privacy</strong>. When you need the second, choose an explicit "remove location" option or use a dedicated scrubbing tool.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Pre-Share Privacy Checklist</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>iOS: Photos → open an image → "Adjust" lets you disable location per photo</li>
          <li>iOS: Settings → Privacy → Location Services → Camera → set to "Never" (the trade-off: photos permanently lose location)</li>
          <li>Check the preview before posting — platforms like Weibo and Xiaohongshu read and display location tags automatically</li>
          <li>Inspect metadata before sending important files externally; both Windows and macOS show it in file properties</li>
          <li>For batch jobs, tick the "remove EXIF" option in your converter</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Do photos taken with location off still have metadata?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes, minus the GPS field. Capture time and device model remain — only the coordinates disappear.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Is the "photos reveal your home" warning real?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes. Post a GPS-tagged photo anywhere that doesn't actively strip metadata, and anyone technical can read it back. It is not a theoretical risk.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-700 font-medium hover:underline">
            → Check the options before converting — compatibility and privacy in one pass
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
        {'HEIC Privacy: What Your Photos Reveal When Converted'}
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
