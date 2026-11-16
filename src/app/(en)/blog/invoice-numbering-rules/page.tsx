import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a good invoice number format?", "acceptedAnswer": {"@type": "Answer", "text": "A readable, chronological format like INV-2026-0042 or 2026-0042 works well: year first, then a zero-padded sequential number. Avoid characters that are hard to read over the phone (O vs 0)."}}, {"@type": "Question", "name": "What if I issue an invoice with the wrong number?", "acceptedAnswer": {"@type": "Answer", "text": "Void or cancel it with a clear note, issue the corrected invoice with the next sequential number, and keep the voided document in your records. Never reuse the number."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Invoice Numbering Rules: Never Duplicate",
  "description": "How to structure invoice numbers with year prefixes and sequence rules, and what to do when a number is duplicated or skipped.",
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
    "@id": "https://getpracticaltools.com/blog/invoice-numbering-rules"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Invoice Numbering Rules: Never Duplicate',
    description: 'How to structure invoice numbers with year prefixes and sequence rules, and what to do when a number is duplicated or skipped.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/invoice-numbering-rules',
      languages: { 'en-US': '/blog/invoice-numbering-rules', 'x-default': '/blog/invoice-numbering-rules' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/invoice-numbering-rules' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Invoice Numbers Deserve Real Attention</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          An invoice number is the index key of your books. Duplicate numbers make reconciliation guesswork. Gaps invite audit questions about missing records. Vague schemes — client name plus date — become unsortable within a year. A clean numbering rule costs nothing to set up and a great deal to repair after the fact.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Battle-Tested Formats</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔢 <strong>Year + sequence</strong>: INV-2026-0001 — the most common; sorts chronologically by default</p>
          <p>🔢 <strong>Pure sequence</strong>: 000123 — continuous through the year, add a year prefix at rollover</p>
          <p>🔢 <strong>Client code + sequence</strong>: ACME-2026-014 — handy for filtering by client at scale</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The year-first format is the recommendation: files sort by time as soon as they're alphabetized, and zero-padding (0001, not 1) keeps the order intact. The "INV-" prefix is optional — if you also issue credit notes, give those a distinct prefix (CN-) so the two never blur.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Rules That Keep Numbering Clean</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Never skip</strong>: voided invoices keep their number, marked VOID — to an auditor, a gap and a cover-up look identical</li>
          <li><strong>Avoid look-alike characters</strong>: drop O, I, and l from numbers so they can't be confused with 0 and 1 over a phone call</li>
          <li><strong>Pad for the year's volume</strong>: expect 300 invoices? Use four digits — don't hit 999 and be forced to change format mid-year</li>
          <li><strong>Let software assign numbers</strong>: manual numbering fails eventually; a generator issuing numbers sequentially makes duplicates structurally impossible</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When Something Goes Wrong</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          On a duplicate: confirm which invoice actually reached the client, void the other, and issue the next one with the next number. On a gap: note the reason in your void log — misprint, client cancellation — and the chain stays complete. On an error already sent to a client: issue a credit note against the original, then a corrected invoice. Editing and resending the old one leaves both sides of the ledger disagreeing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Is invoice numbering legally mandated?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Most jurisdictions don't prescribe a format for freelancers and small businesses, but they do require complete, traceable records. Sequential numbering is the simplest proof of unbroken revenue records during a tax review.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Should numbering restart every year?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Restarting with a year prefix is the cleaner path. Continuous cross-year numbering works too, but files interleave when sorted by name and become harder to retrieve.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-700 font-medium hover:underline">
            → Auto-numbered invoices that never duplicate
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
        {'Invoice Numbering Rules: Never Duplicate or Skip'}
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
