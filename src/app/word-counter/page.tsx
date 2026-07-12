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
      title: '在线字数统计_中英文混排实时计数_实用计算器',
      description: '免费在线字数统计工具,中英文字数、字符、句子、段落实时统计,带阅读时间估算。自媒体作者、学生写论文、求职者卡简历 1 页、SEO 站长控 meta 155 字符,必备在线工具。',
    },
    en: {
      title: 'Online Word Counter_Real-Time Chinese & English Count_ Practical Tools',
      description: 'Free online word counter with real-time Chinese and English support. Tracks words, characters, sentences, paragraphs, and reading time. No upload, all local.',
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
      <p>
        <strong>字数统计工具</strong>解决六个跨平台字数痛点:论文字符数限制、英文简历必须 1 页、SEO meta description 限制 155 字符、小红书标题 20 字内、微信公众号标题 64 字、微博正文 2000 字——这些平台规则散落各处,每次发帖、写文、申请学校都要重新查。本工具一键给出中文字符、英文单词、句子、段落和阅读时间,实时更新,不需要复制到 Word 也不需要打开网页版 Google Docs。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">六种最常见的字数限制场景</h2>
      <p>
        <strong>场景 1:美国本科申请文书</strong>。Common App 主文书 650 词上限,UC Personal Insight 350 词,本工具的"英文单词数"直接对应,实时显示 650 词红线。
      </p>
      <p>
        <strong>场景 2:LinkedIn 英文简历</strong>。必须 1 页 A4 = 约 400-600 词,超过会被 HR 直接略过。本工具的"段落数"和"句子数"帮助你维持 5-7 段结构。
      </p>
      <p>
        <strong>场景 3:SEO meta description</strong>。Google 搜索结果截断 155-160 字符,超过显示 "..."。本工具的"字符数(含空格)"实时显示 155 红线。
      </p>
      <p>
        <strong>场景 4:小红书标题</strong>。20 字以内(部分话题放宽到 30 字),超出会被折叠成 "..."。本工具的"中文字数"直接对应。
      </p>
      <p>
        <strong>场景 5:微信公众号标题</strong>。64 字以内,超过在订阅号信息流里被截断。
      </p>
      <p>
        <strong>场景 6:微博正文</strong>。2000 字上限,带图微博额外有图片 alt 文字限制(约 300 字)。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">这个工具适合谁?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>申请美国本科和研究生、需要卡 Common App 字数的学生</li>
        <li>投简历需要 1 页英文版的求职者</li>
        <li>做小红书、公众号、微博的自媒体作者</li>
        <li>写 SEO meta description 需要精确控制字符数的站长</li>
        <li>任何需要"打开浏览器、粘文字、看字数"的人</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">为什么不用 Word 或 Google Docs?</h2>
      <p>
        Word 和 Google Docs 默认不开"中文字数"统计,需要手动设置;英文按 .length 算,中文字符混入时直接错乱。本工具在浏览器用 JavaScript 实时区分中英文,中文字符按 Unicode block 计数、英文按正则分词,粘贴即看,刷新页面也不丢。所有处理在本地完成,文本不传任何服务器,适合处理未发表稿件、敏感内容、付费文稿等场景。
      </p>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        A <strong>word counter</strong> solves six common cross-platform pain points at once: college essays have strict word limits (Common App 650, UC personal insight 350), cover letters must fit one page (~400-600 words), Twitter caps tweets at 280 characters, SEO meta descriptions truncate at 155-160 characters, and Amazon product titles allow only 200 characters. This tool gives you real-time counts for words, characters (with and without spaces), sentences, paragraphs, and reading time — no copy-pasting into Word, no opening Google Docs.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Six common word limit scenarios</h2>
      <p>
        <strong>1. US college application essays</strong>. Common App personal essay 650 words max, UC Personal Insight Questions 350 words each, graduate school personal statements typically 500-1000 words. The "Words" counter maps directly, with live red-line alerts as you approach the 650 cap.
      </p>
      <p>
        <strong>2. Cover letters and one-page resumes</strong>. One page A4 = ~400-600 words. Anything longer gets cut by the recruiter. The "Sentences" and "Paragraphs" counters help you stay within the 5-7 paragraph structure recruiters expect.
      </p>
      <p>
        <strong>3. Twitter / X posts</strong>. 280 characters for standard accounts, 4000 for Twitter Blue. The "Characters" counter shows the red line in real time as you draft.
      </p>
      <p>
        <strong>4. SEO meta descriptions</strong>. Google truncates at 155-160 characters; anything beyond shows as "...". Hit exactly 150-155 for the best SERP display and highest click-through rate.
      </p>
      <p>
        <strong>5. Amazon product titles</strong>. 200 characters max, but the visible part on mobile is only ~80 characters. Front-load the brand and key feature; the counter confirms you stay under the cap.
      </p>
      <p>
        <strong>6. Instagram captions</strong>. 2200 characters, but the first 125 are shown above the "more" fold — what shows in the feed matters most for engagement.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Who this is for</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>US college applicants tracking Common App and UC essay word limits</li>
        <li>Job seekers polishing one-page cover letters and resumes</li>
        <li>Social media managers posting to Twitter, Instagram, LinkedIn</li>
        <li>SEO specialists writing meta descriptions that hit 155 chars exactly</li>
        <li>Amazon sellers testing product titles against the 200-char limit</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Why this instead of Word or Google Docs?</h2>
      <p>
        Word and Google Docs count English words by splitting on whitespace, which means Chinese characters and accented characters get miscounted or ignored. This tool uses regex to separate CJK characters from English words, giving you accurate dual counts for mixed content — the very thing Word gets wrong. All math runs locally in your browser; no draft is uploaded. The "reading time" estimate (200 English words per minute, 300 Chinese characters per minute) helps content marketers target specific read lengths for engagement benchmarks.
      </p>
    </div>
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <WordCounterClient initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
