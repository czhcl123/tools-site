import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is Net 30?", "acceptedAnswer": {"@type": "Answer", "text": "Full payment due within 30 days."}}, {"@type": "Question", "name": "2/10 Net 30?", "acceptedAnswer": {"@type": "Answer", "text": "2% discount if paid in 10 days, otherwise 30 days."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Invoice Payment Terms: Getting Paid Faster",
  "description": "How to set clear payment terms on invoices, including Net 15/30/60, early payment discounts, and follow-up strategies to get paid faster.",
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
    "@id": "https://getpracticaltools.com/blog/invoice-payment-terms"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Invoice Payment Terms: Getting Paid Faster',
    description: 'How to set clear payment terms on invoices, including Net 15/30/60, early payment discounts, and follow-up strategies to get paid faster.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/invoice-payment-terms',
      languages: { 'en-US': '/blog/invoice-payment-terms', 'x-default': '/blog/invoice-payment-terms' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/invoice-payment-terms' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Are Payment Terms?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Payment terms are the conditions on your invoice that specify when payment is due, whether discounts apply, and what happens if the client pays late. Clear terms dramatically reduce collection time and protect your cash flow.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Payment Terms</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Net 15 / Net 30 / Net 60</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Net 30" means full payment due within 30 days of the invoice date. Net 15 works for small transactions, Net 30 is the industry standard, and Net 60 is common with large enterprises or long-term contracts. Shorter terms = faster cash.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2/10 Net 30 (Early Payment Discount)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pay within 10 days and get a 2% discount; otherwise, full amount due in 30 days. Win-win: the client saves money, you get cash early. The annualized return is about 36% — a powerful incentive.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Late Fees</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Including late fees on your invoice (e.g., 1.5% per month) effectively encourages on-time payment. Make sure late fee terms are agreed upon in the contract beforehand to avoid legal disputes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Writing Clear Terms on Invoices</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Create a dedicated payment terms section at the bottom of your invoice: due date, discount conditions, late fee policy, and payment methods (bank transfer/PayPal/stripe). When using an invoice generator, these fields should be clearly visible.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Following Up on Unpaid Invoices</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Day 1 past due</strong> — friendly reminder email with invoice copy attached</li>
          <li><strong>Day 7</strong> — phone call to confirm they received the invoice</li>
          <li><strong>Day 30</strong> — formal collection letter mentioning late fees</li>
          <li><strong>Day 60</strong> — consider suspending services or sending a legal notice</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What does Net 30 mean?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Full payment due within 30 days of the invoice date.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What is 2/10 Net 30?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Pay within 10 days for 2% off; otherwise full amount due in 30 days.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-700 font-medium hover:underline">
            → Create a Professional Invoice Now
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
        {'Invoice Payment Terms: Getting Paid Faster'}
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
