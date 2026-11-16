import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Invoice format requirements?", "acceptedAnswer": {"@type": "Answer", "text": "No standard, but include number, date, client, items, amount, payment method."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Freelancer Invoicing Guide",
  "description": "Freelancer invoice templates, required fields, tax considerations, and how to quickly create invoices.",
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
    "@id": "https://getpracticaltools.com/blog/invoice-freelancer-guide"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Freelancer Invoicing Guide',
    description: 'Freelancer invoice templates, required fields, tax considerations, and how to quickly create invoices.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/invoice-freelancer-guide',
      languages: { 'en-US': '/blog/invoice-freelancer-guide', 'x-default': '/blog/invoice-freelancer-guide' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/invoice-freelancer-guide' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Freelancers Need Professional Invoices?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Professional invoices are not just payment receipts — they're key to <strong>building trust and credibility</strong>. Proper invoices speed up payments, reduce disputes, and help with tax filing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Required Invoice Fields</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Invoice number</strong> — unique identifier for tracking</li>
          <li><strong>Dates</strong> — issue date and payment due date</li>
          <li><strong>Party information</strong> — your details and client details</li>
          <li><strong>Service description</strong> — specific work and quantities</li>
          <li><strong>Amounts</strong> — unit price, subtotal, tax, total</li>
          <li><strong>Payment method</strong> — bank transfer, PayPal, etc.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Mistakes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Missing invoice numbers, no payment due date, vague descriptions, calculation errors — all cause payment delays or disputes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Improve Payment Collection?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Clear payment terms (e.g., Net 30)</li>
          <li>Multiple payment options</li>
          <li>Automatic payment reminders</li>
          <li>Late fees for overdue payments</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Invoice format requirements?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">No standard format, but must include: invoice number, date, client info, service description, amount, and payment method.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-700 font-medium hover:underline">
            → Create Professional Invoices for Free
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
        {'Freelancer Invoicing Guide'}
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
