import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the minimum QR code size for print?", "acceptedAnswer": {"@type": "Answer", "text": "Aim for at least 2 cm (0.8 in) square for close-range scanning, and 5 cm or more for distances beyond an arm's length. Rule of thumb: 1 mm per module."}}, {"@type": "Question", "name": "What error correction level should I use?", "acceptedAnswer": {"@type": "Answer", "text": "Level M is the default balance — it recovers about 15% damage and keeps codes compact. Use H (30% recovery) when you add a logo or print on curved surfaces."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "QR Code Size and Error Correction",
  "description": "How big a QR code must be, which error correction level to pick, and practical tips for curved surfaces, print, and outdoor use.",
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
    "@id": "https://getpracticaltools.com/blog/qr-code-size-error-correction"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'QR Code Size and Error Correction',
    description: 'How big a QR code must be, which error correction level to pick, and practical tips for curved surfaces, print, and outdoor use.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/qr-code-size-error-correction',
      languages: { 'en-US': '/blog/qr-code-size-error-correction', 'x-default': '/blog/qr-code-size-error-correction' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/qr-code-size-error-correction' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Most Failed Scans Are Size and Contrast Problems</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A phone camera reads a QR code by resolving a grid of dark and light modules. When modules are too small, the colors too faint, or the surface too reflective, the camera can't find clean edges. Most codes that "won't scan" are perfectly valid — just too small or too low-contrast.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Sizing: One Millimeter per Module</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The working rule: <strong>each module (little square) needs at least 1 mm</strong>. A 25×25-module code then measures 25 mm across. For distance, scale up: a table menu needs 2–3 cm, standing signs and posters 5 cm or more, and outdoor boards roughly 1 cm of extra edge length per meter of viewing distance.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📱 <strong>Handheld</strong> (10–20 cm): 2×2 cm minimum</p>
          <p>📋 <strong>Tabletop / business card</strong> (30–50 cm): 3–4 cm</p>
          <p>🖼️ <strong>Poster / sign</strong> (1 m+): 5 cm and up</p>
          <p>📺 <strong>Outdoor / large screen</strong>: add ~1 cm of edge length per meter of distance</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Choosing an Error Correction Level</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR codes rebuild damaged data automatically — part of the pattern can be smudged, folded, or covered by a logo and still scan. The four levels trade size for resilience:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🟢 <strong>L</strong>: recovers 7%, smallest code, clean digital screens</p>
          <p>🟡 <strong>M</strong>: recovers 15%, <strong>the default recommendation</strong> — best balance of size and reliability</p>
          <p>🟠 <strong>Q</strong>: recovers 25%, print that might scuff or fold</p>
          <p>🔴 <strong>H</strong>: recovers 30%, logos in the center, curved surfaces, outdoor conditions</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Higher levels mean more modules and a bigger code for the same data. If the payload is long — say a full article URL — shorten the link before jumping to H.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Printing and Material Traps</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Contrast</strong>: dark code on a light background; black on white is safest — avoid black on red, phone cameras handle red poorly</li>
          <li><strong>Quiet zone</strong>: keep at least four modules of blank margin around the code or the finder patterns won't lock</li>
          <li><strong>Glare</strong>: laminate, metal, and glossy plastic reflect light — pick matte finishes and angle codes away from direct light</li>
          <li><strong>Curves</strong>: on cups and bottles the grid distorts — use level H and place the code on the flattest side of the curve</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Pre-Print Check</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before anything goes live, scan the code with two different phones — an iPhone and an Android — at the real usage distance. If either fails, change the material or increase the size. For bulk print runs, order a proof first; it's the cheapest insurance you'll ever buy.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Smallest QR code for a business card?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">2×2 cm is the handheld floor; 3×3 cm is safer. When card space is tight, protect contrast and the quiet zone first.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Can I put a logo in the center?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes, with level H error correction and a logo covering no more than about 20% of the code area. Build the logo into the generation step rather than pasting it on afterward.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-700 font-medium hover:underline">
            → Set size and error correction before you generate
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
        {'QR Code Size and Error Correction: Scans That Work'}
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
