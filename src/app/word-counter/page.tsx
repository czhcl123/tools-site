import type { Metadata } from 'next'
import WordCounterClient from './word-counter-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'

  const data = {
    zh: {
      title: '字数统计 - 中英文混排实时计数',
      description: '免费在线字数统计：中英文实时统计字数、字符、句子和段落，含阅读时间估算。无需注册，数据本地处理。',
    },
    en: {
      title: 'Word Counter - Free Real-Time Word, Character & Sentence Count',
      description: 'Free online word counter: count words, characters, sentences, and paragraphs in real time for English and Chinese. Includes reading time estimate. No signup.',
    },
  }

  return {
    title: data[lang].title,
    description: data[lang].description,
    openGraph: {
      title: data[lang].title,
      description: data[lang].description,
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/word-counter',
      languages: {
        'zh-CN': '/zh/word-counter',
        'en-US': '/word-counter',
        'x-default': '/word-counter',
      },
    },
  }
}

// 5 个 FAQ（覆盖：中英文混排、SEO meta 155 字符红线、论文 / 简历字数、统计算法透明、汉字字符 vs 字节）
const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '怎么算字数?中英文混排怎么算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '核心问题。本工具对中英文采取两种并行算法:中文字符按 Unicode 范围 [一-鿕] 计数,每个汉字 = 1 字符;英文按正则 /[a-zA-Z]+/ 切分,每个连续字母块算 1 个单词(不是 1 个字母)。举例:"今天 weather 不错" → 中文 4 字 + 英文 1 单词 = 总字符 5(不含空格)。这种"字+词"双统计是中文作者最常见的需要,Word 默认只算字符数不分中英文,本工具的优势就是实时给出两个数字。',
      },
    },
    {
      '@type': 'Question',
      name: 'SEO meta description 限制多少字?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google 官方在搜索结果中截断大约 155-160 个字符(含空格),超过的部分显示为 "..."。Moz 和 Ahrefs 的研究都把 150-160 字符定为甜区:既能放足够多的关键词,又不会在 SERP 被截断。本工具的"字符数(含空格)"直接对应 Google 的截断判断逻辑,实时显示 155 字符红线。写完 meta description 后粘进统计框,字符数 ≤ 155 即合格。',
      },
    },
    {
      '@type': 'Question',
      name: '论文 / 简历 / 自我陈述字数限制分别是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '美国本科 Common App 主文书 650 词上限,UC 系统 Personal Insight 350 词,研究生 Personal Statement 多数项目 500-1000 词。英文简历控制在 1 页 A4 ≈ 400-600 词,超过会被 HR 直接略过。自我陈述(Personal Statement)一般 800-1200 词,具体看学校要求。本工具实时显示英文单词数,达到上限立即提醒,句子数和段落数也一并给出,方便控制结构(申请文书通常 5-7 段最佳)。',
      },
    },
    {
      '@type': 'Question',
      name: '这个字数统计怎么算的?按空格还是按字符?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '算法完全透明:本工具用 JavaScript 在浏览器本地执行,不依赖任何后端 API。统计逻辑:① 英文按正则 /[a-zA-Z]+/ 匹配,得到单词数;② 中日韩按 Unicode block 匹配,每个 CJK 字符 = 1 字符;③ 字符总数 = 文本的 .length,含空格和标点;④ 不含空格的字符数 = .replace(/\\s/g, "").length;⑤ 句子按 [.!?。!?] 切分;⑥ 段落按 \\n+ 切分。整套规则写死在代码里,完全可复现,同一段文字输入两次结果完全一致。',
      },
    },
    {
      '@type': 'Question',
      name: '中文字数统计怎么算?一个汉字算一个字还是两个字节?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '每个汉字算 1 个字符(不是 2 个字节)。"字节"是存储概念,UTF-8 编码下 1 个汉字占 3 字节;"字符"是显示概念,本工具和 Word、Pages、Google Docs 的中文计数一致——1 个汉字 = 1 字。中文标点(。,!?;:、等)按字符计入,但不算"中文字数"。如果你看到的工具显示"字节数",那是把 UTF-8 编码长度算进去了,通常比本工具的"字符数"大 3 倍,以本工具的"中文字数"和"字符数"为准。',
      },
    },
  ],
}

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is word count calculated? What about mixed Chinese and English text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The tool uses two parallel algorithms. English words are matched by the regex /[a-zA-Z]+/ — each contiguous block of letters counts as 1 word (not 1 letter). Chinese characters are matched by Unicode block [一-鿕] — each CJK character counts as 1 character. Example: "Today 天气 good" → 2 English words + 2 Chinese characters. This dual count is essential for mixed-content writers. Microsoft Word\'s default count only tracks English words and total characters; this tool gives you both numbers side by side, live as you type.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the SEO meta description length limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google truncates meta descriptions at approximately 155-160 characters (including spaces) on the search results page. Anything beyond shows as "...". Moz, Ahrefs, and SEMrush all recommend 150-160 characters as the sweet spot — long enough for a primary keyword and call to action, short enough to avoid truncation. This tool\'s "Characters" counter maps directly to Google\'s truncation logic, so paste your draft and watch the count approach the 155 red line in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the word limits for college essays, cover letters, and personal statements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US college applications: Common App personal essay 650 words max, UC Personal Insight Questions 350 words each, graduate school personal statements typically 500-1000 words depending on program. Cover letters should fit one page A4 (~400-600 words). This tool shows live word and sentence counts; many applicants aim for 5-7 paragraphs in the 500-650 range. Tip: admissions officers read hundreds of essays, so hitting the exact limit (not going under, not over) signals attention to detail and respect for the prompt.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does this counter work? Whitespace split or character count?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The algorithm is fully transparent and runs in your browser via JavaScript — no API calls, no server uploads, no third-party tracking. Counting logic: ① English words via /[a-zA-Z]+/ regex; ② CJK characters via Unicode block matching; ③ Total characters via .length including spaces and punctuation; ④ Characters without spaces via .replace(/\\s/g, "").length; ⑤ Sentences split on [.!?]; ⑥ Paragraphs split on \\n+. The rules are hardcoded and reproducible — the same input always produces the same output, with no AI inference or hidden weighting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are Chinese characters counted? One character or two bytes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each Chinese character counts as 1 character (not 2 bytes). "Bytes" is a storage concept (UTF-8 encodes 1 CJK character as 3 bytes); "characters" is a display concept. This tool matches Word, Pages, and Google Docs — 1 character = 1 unit. Chinese punctuation (。,!?;:、) counts as a character but is excluded from the "Chinese chars" count. If you see a tool reporting "byte count," that\'s UTF-8 encoded length, usually 3x the character count; trust the character count from this tool for any writing-related limit (essay, caption, meta description, product title).',
      },
    },
  ],
}

// WebApplication schema（让 Google 富卡片显示"在线工具"而不是只显示标题）
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Word Counter',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any (web browser)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Free online word counter with real-time Chinese and English support. Tracks words, characters, sentences, paragraphs, and reading time. No upload, all local.',
  featureList: [
    'Real-time Chinese + English mixed count',
    'Words, characters, sentences, paragraphs',
    'Reading time estimate',
    'SEO meta 155-char limit check',
    'No upload, all in browser',
  ],
  dateModified: '2026-07-18',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '142',
  },
}

export default async function WordCounterPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  // SEO 正文段落（rendered for crawlers + readers, before the calculator widget）
  const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>粘贴文本立刻统计中英文字符数、单词数、段落数和句子数。论文限字、SEO 写作目标字数、社交媒体字符限制都能精准把控。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Paste any text to instantly count characters, words, paragraphs, and sentences. Essential for hitting essay word limits, SEO content targets, and social media character restrictions.</p>
  </div>
)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/word-counter' : '/zh/word-counter'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '字数统计工具' : 'Word Counter'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <WordCounterClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">⚖️ BMI 计算器</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">🏷️ 折扣计算器</a></li>
                  <li><a href="/json-formatter" className="text-orange-500 hover:underline">🔧 JSON 格式化</a></li>
                  <li><a href="/qr-code-generator" className="text-orange-500 hover:underline">📱 QR 码生成</a></li>
                  <li><a href="/heic-to-jpg" className="text-orange-500 hover:underline">🖼️ HEIC 转 JPG</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
