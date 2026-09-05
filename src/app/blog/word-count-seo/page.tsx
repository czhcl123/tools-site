import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '字数与 SEO 的关系完全解读：多少字的文章排名最好？深度内容和短内容各有什么 SEO 优势？如何根据关键词竞争度决定文章长度？' : 'en'
  return {
    title: lang === 'zh'
      ? '字数与 SEO：你的内容应该写多长？'
      : 'Word Count and SEO',
    description: lang === 'zh'
      ? '不同内容类型的理想字数：博客、产品页、元描述。Google 对内容长度的看法，质量 vs 数量。'
      : 'Ideal word counts by content type: blog posts, product pages, meta descriptions. Google\'s stance on content length, quality vs quantity.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/word-count-seo',
      languages: { 'en-US': '/blog/word-count-seo', 'x-default': '/blog/word-count-seo' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/word-count-seo' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">字数对 SEO 重要吗？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google 多次表示：<strong>字数本身不是排名因素</strong>。但研究一致发现，排名靠前的页面往往内容更长、更全面。原因是长内容更可能覆盖用户的所有问题，从而获得更好的用户信号（停留时间、低跳出率）。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">不同内容类型的理想字数</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📝 <strong>博客文章</strong>：1,500-2,500 字（信息型查询）</p>
          <p>🛒 <strong>产品页</strong>：300-800 字（描述+规格+FAQ）</p>
          <p>📋 <strong>元描述</strong>：150-160 字符（不是字！）</p>
          <p>📰 <strong>新闻稿</strong>：400-700 字</p>
          <p>📚 <strong>深度指南</strong>：3,000-5,000+ 字</p>
          <p>📱 <strong>社交媒体</strong>：Twitter 280字符 | LinkedIn 1,300字符</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Google 怎么看内容长度？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google 的 John Mueller 说过："页面的字数不是排名信号。"但 Google 的质量评估指南（Search Quality Evaluator Guidelines）强调<strong>E-E-A-T</strong>（经验、专业性、权威性、可信度），而这些往往需要足够的篇幅来展现。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          简单说：Google 不奖励长内容，但<strong>全面、深入的内容</strong>自然会更长。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">质量 vs 数量</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>不要注水</strong>：为了凑字数写废话，用户会直接离开</li>
          <li><strong>回答用户问题</strong>：搜索"如何煮鸡蛋"不需要写5000字</li>
          <li><strong>用小标题组织</strong>：方便用户扫读，也利于 SEO</li>
          <li><strong>加入数据和案例</strong>：有依据的内容比空洞的长文更有价值</li>
          <li><strong>定期更新</strong>：一篇维护良好的旧文章胜过10篇新水文</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何用字数工具优化内容</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          写完文章后，用字数工具检查：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>总字数</strong>：是否达到该类型内容的建议范围</li>
          <li><strong>段落长度</strong>：每段不超过3-4行，手机阅读体验更好</li>
          <li><strong>标题密度</strong>：每300-500字一个 h2/h3</li>
          <li><strong>关键词密度</strong>：核心词出现2-3次，自然融入</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 文章越长排名越好吗？</strong><br />
          A: 不一定。1000字的精准回答可能比5000字的水文排名更高。关键是内容质量和相关性。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 元描述应该多长？</strong><br />
          A: 150-160字符。超过这个长度，Google 会截断显示。包括核心关键词和行动号召。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → 用字数计算器优化你的内容
          </Link>
        </div>
      </>
    ),
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
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → Optimize your content with the Word Counter
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '字数与 SEO：你的内容应该写多长？' : 'Word Count and SEO: How Long Should Your Content Be?'}
      </h1>
      {content[lang]}
    </div>
  )
}
