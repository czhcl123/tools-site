import type { Metadata } from 'next'
import Link from 'next/link'
import WordCounterWidget from '@/components/WordCounterWidget'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How to use?", "acceptedAnswer": {"@type": "Answer", "text": "Paste text, see word/character/paragraph/sentence count."}}, {"@type": "Question", "name": "Chinese counting?", "acceptedAnswer": {"@type": "Answer", "text": "Characters for Chinese, words for English. Auto-detected."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Word Count Chinese — Free Online Counter",
  "description": "Free word count Chinese tool: count Chinese characters and English words, plus paragraphs, sentences and reading time. Instant, accurate, no signup.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-08-22",
  "dateModified": "2026-11-10",
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
    "@id": "https://getpracticaltools.com/blog/word-counter"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Word Count Chinese — Free Online Counter',
    description: 'Free word count Chinese tool: count Chinese characters and English words, plus paragraphs, sentences and reading time. Instant, accurate, no signup.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/word-counter',
      languages: { 'en-US': '/blog/word-counter', 'x-default': '/blog/word-counter' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/word-counter' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need a Word Counter?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Essays have word limits, SEO articles have target word counts, social media has character limits, and translators charge by word count. Precise word counting helps you hit your content length targets without going over or falling short.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Chinese vs. English Counting</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          English counts words (space-separated). Chinese counts characters (each character = one "word"). Most platforms and academic institutions count: Chinese characters + English words separately. Our tool auto-detects and counts both accurately.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Understanding the Metrics</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Characters (with/without spaces)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Characters without spaces" is the standard used by most platforms. "Characters with spaces" includes spaces and punctuation — this is what Twitter and Weibo limit by.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Word Count</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          English words are split by spaces. SEO articles typically target 1,500–2,500 words. Google favors in-depth content, but longer isn't always better — information density matters more.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Paragraphs and Sentences</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Paragraph count reflects structure; sentence count reflects readability. Shorter sentences = higher readability. Academic writing typically targets 100–200 words per paragraph.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Word Count Targets</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <p>Tweet: ≤280 characters</p>
          <p>Blog post: 1,000–2,500 words</p>
          <p>SEO article: 1,500–2,500 words</p>
          <p>Product description: 150–300 words</p>
          <p>College essay: 2,000–5,000 words</p>
          <p>Master's thesis: 15,000–25,000 words</p>
        </div>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How do I use it?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Paste text and see word count, character count, paragraphs, and sentences.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Chinese: characters or words?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Chinese counts characters; English counts words. Auto-detected.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-700 font-medium hover:underline">
            → Try the Word Counter Now
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
        {'Word Count Chinese: Word Counter Guide'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-08-22
        {' · '}
        {'Updated'} 2026-11-10
      </p>

      {/* 首屏内嵌计数器：搜「word count chinese」的人是来找工具的，落地页必须当场能用 */}
      <div className="mb-8">
        <WordCounterWidget lang={lang} />
      </div>

      {/* 首屏工具入口：完整版工具页（含 FAQ / schema / 更多入口）的跳转位 */}
      <div className="mb-8 p-4 bg-orange-50 border border-orange-100 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-gray-700">
          {'Need more? The full tool adds the 155-character meta limit check and essay word-count targets.'}
        </p>
        <Link
          href="/word-counter"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 whitespace-nowrap"
        >
          {'Open full word counter →'}
        </Link>
      </div>

      <p className="mb-6 text-sm text-gray-500">
        {(
          <>
            Teacher or blogger?{' '}
            <Link href="/embed" className="text-orange-500 hover:underline">
              Embed this counter on your page →
            </Link>
          </>
        )}
      </p>

      {content.en}

      {/* 相关阅读：博客互链 + 工具回链 */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          {'Related reading'}
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/blog/word-counter-academic" className="text-orange-500 hover:underline">
              {'Academic word limits: APA, MLA and application requirements'}
            </Link>
          </li>
          <li>
            <Link href="/blog/word-counter-writing-tips" className="text-orange-500 hover:underline">
              {'Writing word count tips: target counts for every platform'}
            </Link>
          </li>
          <li>
            <Link href="/blog/word-count-seo" className="text-orange-500 hover:underline">
              {'SEO word count: how to pick target length'}
            </Link>
          </li>
          <li>
            <Link href="/blog/reading-time-1000-words" className="text-orange-500 hover:underline">
              {'How long to read 1000 words'}
            </Link>
          </li>
        </ul>

        <h2 className="text-lg font-bold text-gray-800 mt-8 mb-4">
          {'Related tools'}
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/word-counter" className="text-orange-500 hover:underline">
              {'Word counter tool (with 155-char meta limit check)'}
            </Link>
          </li>
          <li>
            <Link href="/zh/word-counter" className="text-orange-500 hover:underline">
              {'Word counter (Chinese version)'}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
