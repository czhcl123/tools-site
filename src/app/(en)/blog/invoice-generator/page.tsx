import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Invoice essentials?", "acceptedAnswer": {"@type": "Answer", "text": "Number, date, parties, items, quantities, prices, terms."}}, {"@type": "Question", "name": "Freelancers need invoices?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Formal payment request and tax record."}}, {"@type": "Question", "name": "Invoice vs receipt?", "acceptedAnswer": {"@type": "Answer", "text": "Invoice requests payment; receipt confirms it."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Invoice Generator Guide",
  "description": "How to use a free invoice generator: fill in client details, line items, tax rates, and export professional PDF invoices for freelancers.",
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
    "@id": "https://getpracticaltools.com/blog/invoice-generator"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Invoice Generator Guide',
    description: 'How to use a free invoice generator: fill in client details, line items, tax rates, and export professional PDF invoices for freelancers.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/invoice-generator',
      languages: { 'en-US': '/blog/invoice-generator', 'x-default': '/blog/invoice-generator' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/invoice-generator' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Use an Invoice Generator?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancers, small business owners, and e-commerce sellers regularly need to send invoices to clients. Professional invoices build trust and help you track income and receivables. An online generator is 10x faster than Word or Excel templates.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Must an Invoice Include?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A compliant invoice requires:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>✅ Invoice number (unique identifier for reconciliation)</p>
          <p>✅ Issue date and due date</p>
          <p>✅ Your company/personal info (name, address, contact)</p>
          <p>✅ Client info (name, address)</p>
          <p>✅ Line items (description, quantity, unit price, subtotal)</p>
          <p>✅ Tax rate and tax amount (if applicable)</p>
          <p>✅ Total amount and payment method</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Step-by-Step Instructions</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Fill in Basic Info</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter your company name and address, client name and address, invoice number and date. Use a format like "Invoice #001" and increment sequentially.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Add Line Items</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          One row per service/product: description, quantity, unit price. The tool auto-calculates subtotals. Add multiple lines; supports different currencies.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Set Tax Rate</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If tax applies, enter the percentage (e.g., 6% VAT). The tool calculates tax amount and grand total automatically. Leave blank for tax-exempt invoices.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Export as PDF</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Review your info, then click generate PDF. Download and send to your client. PDF is the international standard for invoices — professional and tamper-proof.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Invoice vs. Receipt vs. Quote</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Invoice</strong>: issued after service completion, requesting payment. <strong>Receipt</strong>: issued after payment received, proving payment. <strong>Quote/Estimate</strong>: price estimate given before starting work. They serve different purposes — don't mix them up.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What should an invoice include?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Invoice number, date, buyer/seller info, items, quantities, prices, total, payment terms.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Do freelancers need to invoice?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Yes. Invoices are formal payment requests and tax records.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Invoice vs receipt?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">An invoice requests payment; a receipt confirms payment was received.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-700 font-medium hover:underline">
            → Create an Invoice Now
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
        {'Invoice Generator Guide'}
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
