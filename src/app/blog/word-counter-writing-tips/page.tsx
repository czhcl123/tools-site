import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? '写作技巧：如何用字数统计提高写作效率' : 'Writing Tips for Word Count',
    description: lang === 'zh' ? '字数统计工具的使用技巧、不同场景的字数要求,以及如何规划写作目标。' : 'Word counter tool tips, word count requirements for different scenarios, and how to plan writing goals.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/word-counter-writing-tips',
      languages: { 'en-US': '/blog/word-counter-writing-tips', 'x-default': '/blog/word-counter-writing-tips' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/word-counter-writing-tips' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么要关注字数?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不同平台和场景有严格的字数要求。<strong>超过限制会被截断,低于限制显得内容不足</strong>。字数统计工具帮你精确控制。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见场景字数要求</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>SEO文章</strong> — 1000-2000字(搜索引擎偏好长内容)</li>
          <li><strong>社交媒体</strong> — Twitter 280字符,微博140字</li>
          <li><strong>学术论文</strong> — 按学校要求(通常3000-10000字)</li>
          <li><strong>简历</strong> — 1页A4约400-600词</li>
          <li><strong>产品描述</strong> — 150-300字(电商)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">中英文统计差异</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          中文按字符数统计(每个汉字=1字符),英文按单词统计(空格分隔)。混排时需要分别统计。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">写作效率技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>设定每日字数目标(如500字)</li>
          <li>先写后改,不要边写边数</li>
          <li>用字数统计检查段落比例</li>
          <li>阅读时间=字数÷200(分钟)</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → 免费统计你的字数
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Word Count Matters?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Different platforms and scenarios have strict word count requirements. <strong>Exceeding limits gets truncated; falling short seems insufficient</strong>. Word counters help you control precisely.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Word Count Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>SEO articles</strong> — 1000-2000 words (search engines prefer long content)</li>
          <li><strong>Social media</strong> — Twitter 280 chars, LinkedIn 3000 chars</li>
          <li><strong>Academic papers</strong> — per school requirements (3000-10000 words)</li>
          <li><strong>Resume</strong> — 1 page A4 ≈ 400-600 words</li>
          <li><strong>Product descriptions</strong> — 150-300 words (e-commerce)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Chinese vs English Counting</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chinese counts by characters (each character = 1); English counts by words (space-separated). Mixed content needs separate counting.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Writing Efficiency Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Set daily word goals (e.g., 500 words)</li>
          <li>Write first, edit later — don't count while writing</li>
          <li>Use word count to check paragraph balance</li>
          <li>Reading time = word count ÷ 200 (minutes)</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → Count Your Words for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '写作字数统计技巧' : 'Writing Word Count Tips'}
      </h1>
      {content[lang]}
    </div>
  )
}
