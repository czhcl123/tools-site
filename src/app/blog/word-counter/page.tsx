import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '字数统计工具指南 — 精确统计中英文字符数'
      : 'Word Counter Guide — Count Words, Characters, and More',
    description: lang === 'zh'
      ? '字数统计工具使用教程:统计中英文字符数、单词数、段落数,适用于论文、文案、SEO 写作。'
      : 'How to use a word counter to count Chinese characters, English words, paragraphs, and more. Essential for essays, copywriting, and SEO.',
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/blog/word-counter' : '/blog/word-counter'}`,
      languages: { 'zh-CN': '/zh/blog/word-counter', 'en-US': '/blog/word-counter', 'x-default': '/blog/word-counter' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么需要字数统计?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          论文有字数限制、SEO 文章有目标字数、社交媒体有字符上限、翻译按字数计费。精确的字数统计帮你把控内容长度,避免超标或不够。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">中英文统计的区别</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          英文按单词数(word count),中文按字符数(character count)。一个中文字符 = 一个"字",而英文"hello"是一个单词 5 个字符。大多数论文/平台的"字数"指:中文算字符,英文算单词。本工具自动识别中英文并分别统计。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">统计指标解读</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">字符数(含空格/不含空格)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "不含空格字符数"是大多数平台用的标准。"含空格字符数"包含空格和标点。Twitter/微博限制的是含空格字符。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">单词数</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          英文按空格分词。SEO 文章通常目标 1500–2500 词。Google 偏好深度内容,但不是越长越好——关键是信息密度。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">段落数和句子数</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          段落数反映文章结构,句子数反映可读性。短句多 = 可读性高。学术写作通常每段 100–200 词。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见场景字数参考</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <p>Tweet: ≤280 字符</p>
          <p>微博: ≤2000 字符</p>
          <p>SEO 文章: 1500–2500 词</p>
          <p>本科论文: 8000–15000 字</p>
          <p>硕士论文: 30000–50000 字</p>
          <p>产品描述: 150–300 词</p>
        </div>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → 立即使用字数统计工具
          </Link>
        </div>
      </>
    ),
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

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → Try the Word Counter Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '字数统计工具指南' : 'Word Counter Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
