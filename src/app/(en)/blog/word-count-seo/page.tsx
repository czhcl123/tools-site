import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Ideal SEO word count?", "acceptedAnswer": {"@type": "Answer", "text": "1,500–2,500 words for in-depth articles."}}, {"@type": "Question", "name": "Word count and AI search?", "acceptedAnswer": {"@type": "Answer", "text": "AI cites 1,500+ word authoritative content."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Word Count and SEO",
  "description": "Ideal word counts by content type: blog posts, product pages, meta descriptions. Google's stance on content length, quality vs quantity.",
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
    "@id": "https://getpracticaltools.com/blog/word-count-seo"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Word Count and SEO',
    description: 'Ideal word counts by content type: blog posts, product pages, meta descriptions. Google\'s stance on content length, quality vs quantity.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/word-count-seo',
      languages: { 'en-US': '/blog/word-count-seo', 'x-default': '/blog/word-count-seo' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/word-count-seo' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Does Word Count Matter for SEO?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google has stated multiple times: <strong>word count is not a ranking factor</strong>. However, studies consistently show that top-ranking pages tend to be longer and more comprehensive. Longer content is more likely to answer all user questions, leading to better user signals (dwell time, low bounce rate).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Ideal Word Counts by Content Type</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📝 <strong>Blog posts</strong>: 1,500-2,500 words (informational queries)</p>
          <p>🛒 <strong>Product pages</strong>: 300-800 words (description + specs + FAQ)</p>
          <p>📋 <strong>Meta descriptions</strong>: 150-160 characters (not words!)</p>
          <p>📰 <strong>Press releases</strong>: 400-700 words</p>
          <p>📚 <strong>Deep guides</strong>: 3,000-5,000+ words</p>
          <p>📱 <strong>Social media</strong>: Twitter 280 chars | LinkedIn 1,300 chars</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Does Google Say?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google's John Mueller has said: "The word count of a page is not a ranking signal." But Google's quality evaluation guidelines emphasize <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness), which often requires sufficient length to demonstrate.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Simply: Google doesn't reward length, but <strong>comprehensive, in-depth content</strong> naturally tends to be longer.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Quality vs Quantity</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Don't pad</strong>: Filler to hit a word count makes users leave</li>
          <li><strong>Answer the question</strong>: "How to boil an egg" doesn't need 5,000 words</li>
          <li><strong>Use subheadings</strong>: Easier to scan, better for SEO</li>
          <li><strong>Add data and examples</strong>: Evidence-based content beats empty long text</li>
          <li><strong>Update regularly</strong>: One well-maintained old article beats 10 new thin ones</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Optimize with Word Count Tools</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          After writing, check with a word counter:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Total words</strong>: Does it reach the recommended range for the content type?</li>
          <li><strong>Paragraph length</strong>: Keep under 3-4 lines for mobile readability</li>
          <li><strong>Heading density</strong>: One h2/h3 every 300-500 words</li>
          <li><strong>Keyword density</strong>: Core term appears 2-3 times, naturally integrated</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Do longer articles rank better?</strong><br />
          A: Not necessarily. A 1,000-word precise answer can outrank a 5,000-word fluff piece. Content quality and relevance matter most.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: How long should a meta description be?</strong><br />
          A: 150-160 characters. Google truncates beyond that. Include core keywords and a call to action.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-700 font-medium hover:underline">
            → Optimize your content with the Word Counter
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
        {'Word Count and SEO: How Long Should Your Content Be?'}
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
