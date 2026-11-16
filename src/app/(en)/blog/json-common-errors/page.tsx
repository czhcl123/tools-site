import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why does my JSON say unexpected token?", "acceptedAnswer": {"@type": "Answer", "text": "Usually a trailing comma, a single quote, or an unquoted key right before that position. The error line and column point at the first invalid character."}}, {"@type": "Question", "name": "Does JSON allow comments?", "acceptedAnswer": {"@type": "Answer", "text": "No. Standard JSON (RFC 8259) has no comment syntax. Use JSONC or strip comments before parsing."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Common JSON Errors: Find and Fix Them Fast",
  "description": "Trailing commas, single quotes, mismatched brackets — the seven most common JSON errors with examples, and how a formatter pinpoints each one.",
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
    "@id": "https://getpracticaltools.com/blog/json-common-errors"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Common JSON Errors: Find and Fix Them Fast',
    description: 'Trailing commas, single quotes, mismatched brackets — the seven most common JSON errors with examples, and how a formatter pinpoints each one.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/json-common-errors',
      languages: { 'en-US': '/blog/json-common-errors', 'x-default': '/blog/json-common-errors' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/json-common-errors' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why JSON Error Messages Are So Unhelpful</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON's grammar is brutally strict: keys need double quotes, comments don't exist, and no trailing comma after the last item. The parser stops at the first offending character — but the line and column it reports usually point at the symptom, not the cause. The real problem typically sits on the line before.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Seven Most Common Errors</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Trailing comma</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{
  "name": "widget",
  "price": 9.9,   ← this comma breaks the parser
}`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Single quotes instead of double</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ 'name': 'widget' }   ← JSON only accepts double quotes`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Unquoted keys</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ name: "widget" }   ← must be "name"`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Comments</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The JSON standard (RFC 8259) allows no comments at all — both // and /* */ are syntax errors. Copy-pasting from a JavaScript object literal is how most people trip on this.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Mismatched brackets</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ "items": [1, 2, 3 }   ← missing the closing ]`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6. Illegal numbers</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Leading zeros (012), hex (0x1F), NaN, and Infinity are all invalid. JSON numbers are plain decimal, optionally signed and fractional. Nothing else.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">7. Multiple root values</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          One JSON document holds exactly one root value. Two objects side by side — {`{"a":1} {"b":2}`} — are an error; wrap them in an array or a single object.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Let a Formatter Locate It: 10× Faster Than Reading Errors</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Paste the whole document into a JSON formatter and the parser flags the exact line and column. A successful format also re-indents everything, so structural problems — wrong nesting, duplicate keys — jump out visually. Build the habit: <strong>when an API response fails, format it before debugging it</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Prevention Beats Repair</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Install a JSON validation extension in your editor — VS Code flags errors with red squiggles in real time</li>
          <li>Generate JSON from JavaScript with JSON.stringify() instead of hand-writing it</li>
          <li>Run every API JSON response through a formatter before it reaches business code</li>
          <li>For config files, consider JSON5 or YAML — both support comments and cut down on hand-edited JSON</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How is JSON different from a JavaScript object?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">JSON is its own data format — a subset of JS object syntax: keys require double quotes, there are no comments, variables, or functions. Valid JS literals aren't always valid JSON.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Can YAML replace JSON?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">For config files, yes — comments and readability win. For API payloads, JSON remains the mainstream choice with the broadest parser support. See our JSON vs XML vs YAML comparison.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-700 font-medium hover:underline">
            → Paste it in — the exact error line gets flagged
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
        {'Common JSON Errors: Find and Fix Them Fast'}
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
