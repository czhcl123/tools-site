import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "JSON or XML?", "acceptedAnswer": {"@type": "Answer", "text": "JSON lighter for APIs; XML for complex enterprise structures."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "JSON vs XML vs YAML",
  "description": "JSON vs XML vs YAML comparison: readability, file size, use cases, and code examples for each format.",
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
    "@id": "https://getpracticaltools.com/blog/json-vs-xml-yaml"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'JSON vs XML vs YAML',
    description: 'JSON vs XML vs YAML comparison: readability, file size, use cases, and code examples for each format.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/json-vs-xml-yaml',
      languages: { 'en-US': '/blog/json-vs-xml-yaml', 'x-default': '/blog/json-vs-xml-yaml' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/json-vs-xml-yaml' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Formats at a Glance</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📋 <strong>JSON</strong>: JavaScript Object Notation. Lightweight, readable, widely used for APIs. Uses {} and [].</p>
          <p>📄 <strong>XML</strong>: Extensible Markup Language. Powerful but verbose. Uses &lt;&gt; tags. Good for complex documents.</p>
          <p>📝 <strong>YAML</strong>: YAML Ain't Markup Language. Indentation-based, most human-readable. Common for config files.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Comparison</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📊 <strong>Readability</strong>: YAML {'>'} JSON {'>'} XML</p>
          <p>📦 <strong>File size</strong>: JSON {'<'} YAML {'<'} XML (XML is largest)</p>
          <p>🔧 <strong>Parsing</strong>: JSON easiest, YAML needs indentation care, XML most complex</p>
          <p>🌐 <strong>Browser support</strong>: JSON native, XML good, YAML needs a library</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When to Use Each</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Choose JSON</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          API data exchange (REST, GraphQL), frontend data, mobile data transfer. Nearly all modern APIs use JSON.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Choose XML</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          SOAP APIs, RSS/Atom feeds, SVG images, HTML's predecessor, complex documents needing namespaces and attributes.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Choose YAML</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Config files (Docker Compose, GitHub Actions, Kubernetes), CI/CD pipelines, files humans edit manually.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Code Examples</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same data, three representations:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p><strong>JSON</strong>: {`{"name": "Alice", "age": 30, "skills": ["JS", "Python"]}`}</p>
          <p><strong>XML</strong>: {`<person><name>Alice</name><age>30</age></person>`}</p>
          <p><strong>YAML</strong>: name: Alice<br/>age: 30<br/>skills: [JS, Python]</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Will JSON replace XML?</strong><br />
          A: It already has for APIs. But for document markup (SVG, XHTML) and enterprise systems, XML remains essential.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Is YAML better than JSON?</strong><br />
          A: More readable, but more error-prone (indentation issues). Config files → YAML, data exchange → JSON is current best practice.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-700 font-medium hover:underline">
            → Format and validate your JSON
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
        {'JSON vs XML vs YAML: When to Use Each Format'}
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
