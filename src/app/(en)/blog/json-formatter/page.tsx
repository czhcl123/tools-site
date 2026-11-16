import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is JSON?", "acceptedAnswer": {"@type": "Answer", "text": "Lightweight data format used in APIs."}}, {"@type": "Question", "name": "Formatted vs minified?", "acceptedAnswer": {"@type": "Answer", "text": "Formatted for readability; minified for size."}}, {"@type": "Question", "name": "Format failure meaning?", "acceptedAnswer": {"@type": "Answer", "text": "Syntax error in the JSON."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "JSON Formatter Guide",
  "description": "How to use a JSON formatter to beautify, minify, and validate JSON data. Includes common error fixes and developer tips.",
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
    "@id": "https://getpracticaltools.com/blog/json-formatter"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'JSON Formatter Guide',
    description: 'How to use a JSON formatter to beautify, minify, and validate JSON data. Includes common error fixes and developer tips.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/json-formatter',
      languages: { 'en-US': '/blog/json-formatter', 'x-default': '/blog/json-formatter' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/json-formatter' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write. APIs, config files, and frontend-backend communication all use JSON. Format: key-value pairs separated by colons, objects in {}, arrays in [].
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Format JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          API responses are usually minified (one long line), making them hard to read. Formatting adds indentation and line breaks so the structure is instantly clear. Essential for debugging APIs, reviewing data, and writing documentation.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Common Operations</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Pretty Print (Beautify)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Turns minified JSON into an indented, readable format. For example, expanding {`{"name":"John","age":30}`} into multiple lines with proper alignment. The most commonly used operation.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Minify</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The reverse — strip all whitespace and line breaks, compressing JSON into a single line. Used in production to reduce payload size and improve load times.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Validate</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Checks JSON syntax for errors. Common mistakes: trailing commas, missing quotes, unmatched brackets. The formatter highlights the error location so you can fix it quickly.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common JSON Errors</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>❌ Trailing comma: {`{"a": 1, "b": 2,}`} ← no comma after last item</p>
          <p>❌ Unquoted keys: {`{name: "John"}`} ← keys must use double quotes</p>
          <p>❌ Single quotes: {`{"name": 'John'}`} ← must use double quotes</p>
          <p>❌ Comments: JSON does not support comments (// or /* */)</p>
        </div>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What is JSON?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">JavaScript Object Notation, a lightweight data format widely used in APIs.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Formatted vs minified?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Formatted adds indentation for readability; minified removes whitespace.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What does a formatting failure mean?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">The JSON has syntax errors: missing commas, mismatched quotes, etc.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-700 font-medium hover:underline">
            → Try the JSON Formatter Now
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
        {'JSON Formatter Guide'}
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
