import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is JSON used for?', acceptedAnswer: { '@type': 'Answer', text: 'JSON is used for data exchange between servers and browsers, API responses, configuration files, and storing structured data.' } },
          { '@type': 'Question', name: 'What are the rules of JSON syntax?', acceptedAnswer: { '@type': 'Answer', text: 'JSON requires double quotes for keys and strings, uses {} for objects and [] for arrays, separates key-value pairs with colons, and items with commas. No trailing commas allowed.' } },
          { '@type': 'Question', name: 'How do I validate JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Use a JSON formatter/validator tool. Paste your JSON and it will highlight syntax errors like missing commas, unmatched quotes, or trailing commas.' } },
        ],
      }


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "The Complete JSON Guide",
  "description": "Complete JSON guide: syntax, data types, nesting, validation, formatting, API integration, and troubleshooting common errors.",
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
    "@id": "https://getpracticaltools.com/blog/ultimate-json-guide"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'The Complete JSON Guide',
    description: 'Complete JSON guide: syntax, data types, nesting, validation, formatting, API integration, and troubleshooting common errors.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/ultimate-json-guide',
      languages: { 'en-US': '/blog/ultimate-json-guide', 'x-default': '/blog/ultimate-json-guide' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/ultimate-json-guide' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          JSON (JavaScript Object Notation) is the most popular data format on the internet today. From API responses to configuration files, from database storage to frontend rendering — JSON is everywhere. This guide takes you from zero to mastery.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 1: What Is JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON is a lightweight text data interchange format. Based on a subset of JavaScript syntax but language-independent — any language can parse and generate JSON. Its core advantages: <strong>human-readable, machine-parseable, compact</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 2: Basic Syntax</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON has only two structures: <strong>objects</strong> and <strong>arrays</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Keys must be wrapped in <strong>double quotes</strong></li>
          <li>String values must use <strong>double quotes</strong></li>
          <li>Numbers, booleans (true/false), and null don't need quotes</li>
          <li>Items separated by <strong>commas</strong></li>
          <li><strong>No trailing commas</strong> allowed</li>
          <li>No comments supported in the JSON standard</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 3: Data Types</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>string</strong> — "hello", "北京"</li>
          <li><strong>number</strong> — 42, 3.14, -10 (no distinction between int and float)</li>
          <li><strong>boolean</strong> — true, false</li>
          <li><strong>null</strong> — null</li>
          <li><strong>object</strong> — {'{}'}  key-value pairs</li>
          <li><strong>array</strong> — {'[]'} ordered list of values</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 4: Nesting & Complex Structures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON's real power is nesting. A user object can contain an array of addresses, each address being its own object with coordinates — the possibilities are limitless.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 5: JSON in APIs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Almost all modern APIs use JSON. A typical response includes status, data payload, and metadata — all in a single, parseable structure.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 6: Common Errors</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Trailing commas</strong> — the most common error. Trailing commas before closing braces or brackets are illegal</li>
          <li><strong>Single quotes</strong> — JSON requires double quotes for keys and strings</li>
          <li><strong>Missing commas</strong> — items must be separated by commas</li>
          <li><strong>Comments</strong> — JSON does not support line or block comments</li>
          <li><strong>Unquoted keys</strong> — {'{name: "Alice"}'} is illegal; must be {'{"name": "Alice"}'}</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 7: JSON vs XML vs YAML</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>JSON</strong> — lightest, API default, no comments</li>
          <li><strong>XML</strong> — supports attributes and namespaces, enterprise systems, has Schema validation</li>
          <li><strong>YAML</strong> — most human-readable, great for config files, but parsing can be tricky</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-700 font-medium hover:underline">
            → Format and Validate Your JSON Now
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
        {'The Complete JSON Guide'}
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
