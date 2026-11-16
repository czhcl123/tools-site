import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "HEIC vs JPEG vs PNG?", "acceptedAnswer": {"@type": "Answer", "text": "HEIC for storage, JPEG for sharing, PNG for design."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "HEIC vs JPEG vs PNG Compared",
  "description": "Detailed comparison of HEIC, JPEG, and PNG: file size, quality, use cases, and social media platform format requirements.",
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
    "@id": "https://getpracticaltools.com/blog/heic-vs-jpeg-png"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'HEIC vs JPEG vs PNG Compared',
    description: 'Detailed comparison of HEIC, JPEG, and PNG: file size, quality, use cases, and social media platform format requirements.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/heic-vs-jpeg-png',
      languages: { 'en-US': '/blog/heic-vs-jpeg-png', 'x-default': '/blog/heic-vs-jpeg-png' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/heic-vs-jpeg-png' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Formats at a Glance</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📸 <strong>HEIC</strong>: Apple's default format. High compression — files are half the size of JPEG at the same quality. Limited compatibility.</p>
          <p>🖼️ <strong>JPEG</strong>: The most universal format. Supported by virtually every device and platform. Great for photos, not for transparency.</p>
          <p>🎨 <strong>PNG</strong>: Supports transparency and lossless compression. Larger files — ideal for logos, icons, screenshots, not bulk photos.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">File Size Comparison</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same photo (4000×3000 pixels):
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>HEIC: ~1.5 MB</p>
          <p>JPEG (high quality): ~3 MB</p>
          <p>PNG: ~8-12 MB</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC preserves quality at half the file size of JPEG. That's why Apple chose it — to save storage.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When to Use Each</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📱 <strong>Use HEIC</strong>: iPhone photos, saving storage, sharing only within Apple ecosystem</p>
          <p>🌐 <strong>Use JPEG</strong>: Website uploads, email, cross-platform sharing, social media posts</p>
          <p>🎨 <strong>Use PNG</strong>: Transparency needed, screenshots, logos/icons, text-heavy images</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Social Media Format Requirements</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>Instagram: JPEG or PNG, max 30MB</p>
          <p>Facebook: JPEG, PNG, GIF, max 10MB</p>
          <p>Twitter/X: JPEG, PNG, GIF, max 5MB</p>
          <p>WeChat Moments: JPEG, PNG, auto-compressed</p>
          <p>Xiaohongshu: JPEG, PNG, 3:4 ratio recommended</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Note</strong>: Most social platforms don't support HEIC. Convert to JPEG before uploading.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Convert HEIC</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>iPhone</strong>: Settings → Camera → Formats → Most Compatible (auto-saves as JPEG)</li>
          <li><strong>Mac</strong>: Right-click → Export → Choose JPEG format</li>
          <li><strong>Online tools</strong>: Use a free HEIC to JPG converter</li>
          <li><strong>Windows</strong>: Install HEIF extension to view and convert directly</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Will HEIC replace JPEG?</strong><br />
          A: Not anytime soon. JPEG's compatibility is too strong. Websites, email, and social platforms all favor JPEG.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Does converting HEIC to JPEG lose quality?</strong><br />
          A: Slightly, since JPEG uses lossy compression. But high-quality conversions (90%+) are virtually indistinguishable.
        </p>

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
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {'HEIC vs JPEG vs PNG: Which Image Format Should You Use?'}
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
