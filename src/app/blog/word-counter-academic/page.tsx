import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '学术写作字数要求完全指南：为什么字数在学术写作中很重要，如何策略性地扩展或精简论文，不同格式的字数统计方法，以及引用和参考文献的计数技巧。' : 'en'
  return {
    title: lang === 'zh'
      ? '学术写作：满足字数要求'
      : 'Academic Writing: Meeting Word Count Requirements',
    description: lang === 'zh'
      ? '学术写作如何满足字数要求,扩展和精简论文的策略,引用和参考文献计数技巧。'
      : 'How to meet word count requirements in academic writing, strategies to expand or condense essays, and citation counting tips.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/word-counter-academic',
      languages: { 'en-US': '/blog/word-counter-academic', 'x-default': '/blog/word-counter-academic' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/word-counter-academic' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么字数很重要?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          学术论文、毕业设计、课程作业都有严格字数要求。字数不足 = 论证不充分，超字数 = 格式不合规。导师和评审首先检查的就是字数，它是学术规范的基本门槛。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">字数不足怎么办?</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">扩展论证</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          每个论点增加一个具体例子或数据支持。"数据显示 X 增长了 20%"→"根据 2025 年 XX 报告，X 在过去 5 年增长了 20%，其中 Y 占增长的 60%"。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">增加文献综述</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          引用更多相关研究，对比不同学者的观点。"学者 A 认为…而学者 B 则提出…"不仅增加字数，还提升学术深度。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">添加案例分析</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          用实际案例支撑理论。案例分析既增加字数又增强说服力，是学术写作的双赢策略。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">字数超标怎么办?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          删除冗余表述（"在这个问题上"→直接说问题），合并重复论点，精简引用（只保留最相关的），把次要内容移到附录。用字数统计工具精确监控每个章节的字数。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">不同格式的字数统计</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Word/Pages</strong>：自带字数统计，但可能包含标题和页眉</li>
          <li><strong>在线工具</strong>：更精确，可排除特定部分</li>
          <li><strong>LaTeX</strong>：用 texcount 命令统计</li>
          <li><strong>中文特殊性</strong>：中文按"字"计数，英文按"词"计数，两者不能混用</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">引用和参考文献计数</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大多数格式要求正文字数不含参考文献列表。用字数统计工具时，注意区分"正文"和"全文"。APA 格式中，标题页和参考文献不计入正文字数。
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">字数不够怎么办?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">扩展论证(加例子数据)、增加文献综述、添加案例分析。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">参考文献算字数吗?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">大多数格式不包含参考文献。注意区分「正文」和「全文」。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → 用字数统计工具精确监控你的论文
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Word Count Matters</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Academic papers, theses, and assignments have strict word count requirements. Too few words = insufficient argumentation. Too many = non-compliance. Word count is the first thing advisors and reviewers check — it's the basic threshold of academic standards.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What If You're Under the Limit?</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Expand Your Arguments</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Add a specific example or data point to each claim. "X grew 20%" → "According to the 2025 XX Report, X grew 20% over the past 5 years, with Y accounting for 60% of that growth."
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Add Literature Review</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cite more relevant studies, compare different scholars' perspectives. "Scholar A argues… while Scholar B proposes…" not only adds words but also deepens academic rigor.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Include Case Studies</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Support theory with real-world cases. Case analysis adds both word count and persuasiveness — a win-win in academic writing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What If You're Over the Limit?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Delete redundant phrases ("in regard to this issue" → just state the issue), merge duplicate arguments, trim citations to the most relevant ones, and move minor content to appendices. Use a word counter to monitor each section precisely.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Word Count Across Formats</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Word/Pages</strong> — built-in counter, but may include headings and headers</li>
          <li><strong>Online tools</strong> — more precise, can exclude specific sections</li>
          <li><strong>LaTeX</strong> — use the texcount command</li>
          <li><strong>Chinese specifics</strong> — Chinese counts characters, English counts words; don't mix them</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Citations and References</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most formats exclude the reference list from body word count. When using a word counter, distinguish between "body" and "total." In APA format, the title page and references don't count toward body word count.
        </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How to meet word count?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Expand arguments with examples, add literature review, include case studies.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Do references count?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Most formats exclude references. Distinguish body count from total.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → Track Your Paper's Word Count Precisely
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '学术写作：满足字数要求' : 'Academic Writing: Meeting Word Count Requirements'}
      </h1>
      {content[lang]}
    </div>
  )
}
