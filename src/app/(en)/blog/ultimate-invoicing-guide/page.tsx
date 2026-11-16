import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What must an invoice include?', acceptedAnswer: { '@type': 'Answer', text: 'Invoice number, date, buyer/seller details, itemized services/products, quantities, unit prices, total amount, payment terms, and payment method.' } },
          { '@type': 'Question', name: 'What is the difference between an invoice and a receipt?', acceptedAnswer: { '@type': 'Answer', text: 'An invoice is a payment request sent before payment. A receipt confirms payment was received. Issue the invoice first, then the receipt upon payment.' } },
          { '@type': 'Question', name: 'How do freelancers handle taxes on invoices?', acceptedAnswer: { '@type': 'Answer', text: 'Track all income from invoices, deduct business expenses, and set aside 25-30% of gross income for estimated tax payments. Consult a tax professional for your specific situation.' } },
        ],
      }


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "The Ultimate Invoicing Guide",
  "description": "Complete invoicing guide: invoice essentials, payment terms, tax handling, collection strategies, and full workflows for freelancers and small businesses.",
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
    "@id": "https://getpracticaltools.com/blog/ultimate-invoicing-guide"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'The Ultimate Invoicing Guide',
    description: 'Complete invoicing guide: invoice essentials, payment terms, tax handling, collection strategies, and full workflows for freelancers and small businesses.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/ultimate-invoicing-guide',
      languages: { 'en-US': '/blog/ultimate-invoicing-guide', 'x-default': '/blog/ultimate-invoicing-guide' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/ultimate-invoicing-guide' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're a freelancer, small business owner, or startup founder, invoicing is one of the most critical parts of your operations. It's not just a payment request — it's your professional image, financial record, and legal proof. This guide covers everything from basics to advanced strategies.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 1: Invoice Essentials</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A compliant invoice must include:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Invoice number</strong> — unique identifier for tracking (e.g., INV-2026-001)</li>
          <li><strong>Issue date</strong> — when the invoice was sent, determines payment deadlines</li>
          <li><strong>Buyer/seller details</strong> — names, addresses, contact info, tax IDs</li>
          <li><strong>Itemized services</strong> — description, quantity, unit price for each item</li>
          <li><strong>Totals</strong> — subtotal, applicable taxes, grand total</li>
          <li><strong>Payment terms</strong> — due date, discount conditions, late fees</li>
          <li><strong>Payment method</strong> — bank transfer, PayPal, Stripe, etc.</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 2: Payment Terms Explained</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Payment terms directly affect your cash flow:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Due on Receipt</strong> — pay immediately. Good for small jobs or new clients</li>
          <li><strong>Net 15</strong> — due in 15 days. For medium amounts needing quick turnaround</li>
          <li><strong>Net 30</strong> — due in 30 days. Industry standard for most B2B transactions</li>
          <li><strong>Net 60</strong> — due in 60 days. Common with enterprises and government projects</li>
          <li><strong>2/10 Net 30</strong> — 2% discount if paid within 10 days; otherwise full in 30</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Pro tip:</strong> Start new clients at Net 15. Extend to Net 30 once trust is established. For large projects, use milestone billing (30% upfront, 40% mid-project, 30% on completion).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 3: Invoice vs Receipt vs Estimate</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These three documents serve different purposes in the business cycle:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Estimate/Quote</strong> — before work begins, showing estimated costs</li>
          <li><strong>Invoice</strong> — after delivery, requesting payment</li>
          <li><strong>Receipt</strong> — after payment, confirming the transaction</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 4: Freelancer Tax Handling</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancers must manage their own taxes:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Log every invoice income in your accounting system</li>
          <li>Keep receipts for deductible business expenses (equipment, software, travel)</li>
          <li>Pay estimated taxes quarterly (set aside 25–30% of gross income)</li>
          <li>Year-end: compile all invoices for Schedule C (US) or equivalent</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 5: Collection Strategies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The golden rhythm for chasing late payments:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Day 1 overdue</strong> — friendly reminder email with invoice attached</li>
          <li><strong>Day 7</strong> — phone call to confirm receipt and ask about payment status</li>
          <li><strong>Day 14</strong> — formal collection letter mentioning terms and late fees</li>
          <li><strong>Day 30</strong> — warning about service suspension or legal action</li>
          <li><strong>Day 60</strong> — consider collections agency or legal proceedings</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 6: Best Practices Checklist</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>✅ Send invoice within 24 hours of service completion</li>
          <li>✅ Use sequential, unique invoice numbers</li>
          <li>✅ Payment terms clearly visible at the bottom</li>
          <li>✅ Keep copies of all invoices for at least 7 years</li>
          <li>✅ Use an invoice generator for consistent, professional formatting</li>
          <li>✅ Reconcile regularly to ensure all receivables are tracked</li>
          <li>✅ Require upfront payment for large projects</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-700 font-medium hover:underline">
            → Create Your First Professional Invoice Free
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
        {'The Ultimate Invoicing Guide'}
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
