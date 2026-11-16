import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Deductible expenses?", "acceptedAnswer": {"@type": "Answer", "text": "Office equipment, software, home office, travel, training."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Freelancer Tax Deductions Guide",
  "description": "Common freelancer tax deductions: home office, equipment, software, travel expenses, and how to properly track invoices.",
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
    "@id": "https://getpracticaltools.com/blog/freelancer-tax-deductions"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Freelancer Tax Deductions Guide',
    description: 'Common freelancer tax deductions: home office, equipment, software, travel expenses, and how to properly track invoices.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/freelancer-tax-deductions',
      languages: { 'en-US': '/blog/freelancer-tax-deductions', 'x-default': '/blog/freelancer-tax-deductions' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/freelancer-tax-deductions' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Freelancers Need to Know Tax Deductions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancer income is post-tax — you pay your own taxes. The good news: most work-related expenses are deductible. Not knowing your deductions = overpaying.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Deductions</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🏠 <strong>Home office</strong>: Percentage of room used for work × rent/mortgage interest/utilities</p>
          <p>💻 <strong>Equipment</strong>: Computer, monitor, keyboard, mouse, printer (one-time deduction or depreciation)</p>
          <p>📱 <strong>Communication</strong>: Phone bill, internet (proportional to work use)</p>
          <p>🛠️ <strong>Software</strong>: Design tools, dev tools, office software subscriptions</p>
          <p>✈️ <strong>Travel</strong>: Transportation, accommodation, meals for business trips</p>
          <p>📚 <strong>Education</strong>: Courses, books, conference fees (related to current business)</p>
          <p>💼 <strong>Insurance</strong>: Professional liability, health insurance (deductible in some regions)</p>
          <p>🏦 <strong>Bank fees</strong>: Business account fees, PayPal/Stripe processing fees</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Track Expenses</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Keep all receipts</strong>: Every expense needs a receipt or invoice</li>
          <li><strong>Category and file</strong>: Organize by type (equipment/software/travel)</li>
          <li><strong>Use accounting tools</strong>: Excel, Wave (free), QuickBooks, etc.</li>
          <li><strong>Reconcile monthly</strong>: Don't wait until year-end to organize</li>
          <li><strong>Separate bank account</strong>: Open a business account for easy reconciliation</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When to Hire an Accountant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When income exceeds a threshold (varies by country) or tax situations are complex (multi-country income, partnerships), hire a professional. Tax savings usually far exceed accountant fees.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What qualifies for home office deduction?</strong><br />
          A: A dedicated, fixed workspace used for work. A dining table doesn't count, but a专用 desk in a corner does.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Can I deduct my computer in full?</strong><br />
          A: Depends on the amount and local tax law. Small amounts may be fully deductible; larger ones typically require 3-5 year depreciation.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-700 font-medium hover:underline">
            → Generate professional invoices to track your income
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
        {'Freelancer Tax Deductions: What You Can Write Off'}
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
