import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "JSON basics?", "acceptedAnswer": {"@type": "Answer", "text": "Braces for objects, brackets for arrays, colons separate keys from values."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "JSON for Beginners Guide",
  "description": "What is JSON, syntax rules, common errors, and how to format code with JSON formatter tools.",
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
    "@id": "https://getpracticaltools.com/blog/json-beginners-guide"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'JSON for Beginners Guide',
    description: 'What is JSON, syntax rules, common errors, and how to format code with JSON formatter tools.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/json-beginners-guide',
      languages: { 'en-US': '/blog/json-beginners-guide', 'x-default': '/blog/json-beginners-guide' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/json-beginners-guide' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What is JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON (JavaScript Object Notation) is a lightweight <strong>data interchange format</strong>. It's easy for humans to read/write and machines to parse/generate. Almost all programming languages support JSON.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">JSON Basic Syntax</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON stores data in key-value pairs, using curly braces {} for objects and square brackets [] for arrays. Example:
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm mb-4">{'{"name": "John", "age": 25, "skills": ["JavaScript", "Python"]}'}</pre>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Errors</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Missing quotes</strong> — keys must be double-quoted</li>
          <li><strong>Trailing commas</strong> — no comma after last element</li>
          <li><strong>Comments</strong> — JSON doesn't support comments</li>
          <li><strong>Single quotes</strong> — must use double quotes</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Format JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compressed JSON is hard to read. Formatting adds indentation and line breaks, making data structure clear at a glance. Essential for API debugging.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What are JSON basics?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Curly braces {} for objects, square brackets [] for arrays, colons separate keys from values.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-700 font-medium hover:underline">
            → Format Your JSON for Free
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
        {'JSON for Beginners'}
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
