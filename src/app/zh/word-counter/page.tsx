import type { Metadata } from 'next'
import WordCounterClient from '../../word-counter/word-counter-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const data = {
    zh: {
      title: '字数统计工具 - 在线中英文字数计算器',
      description: '免费在线字数统计工具,实时统计中英文字数、字符、句子、段落,提供阅读时间估算。作家、学生、自媒体必备。',
    },
    en: {
      title: 'Word Counter - Online Character & Word Count Tool',
      description: 'Free online word counter. Instantly count words, characters, sentences, paragraphs, and reading time. Supports mixed Chinese/English text.',
    },
  }

  return {
    title: data.zh.title,
    description: data.zh.description,
    openGraph: {
      title: data.zh.title,
      description: data.zh.description,
    },
    alternates: {
    canonical: 'https://tools-site-production.up.railway.app/zh/word-counter',
      languages: {
        'zh-CN': '/zh/word-counter',
        'en-US': '/word-counter',
        'x-default': '/word-counter',
      },
    },
  }
}

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


const faqSchemas = {
  zh: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '中英文混合文本如何统计字数？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '本工具同时统计英文单词数和中文字符数（汉字每个算1字）。一个汉字=1字符,一个英文单词=1单词,均计入"总字符数"。',
        },
      },
      {
        '@type': 'Question',
        name: '阅读时间怎么算？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '按中文300字/分钟、英文200词/分钟的阅读速度估算,取较大值。',
        },
      },
      {
        '@type': 'Question',
        name: '支持哪些文件类型？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '目前支持直接粘贴纯文本。如需统计Word/PDF文件,建议先复制内容到剪贴板再粘贴。',
        },
      },
      {
        '@type': 'Question',
        name: '数据安全吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '所有统计在浏览器本地完成,文本不上传任何服务器,完全私密。',
        },
      },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the word counter work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It splits your text by whitespace and punctuation boundaries, then counts the resulting tokens. Numbers, hyphens, and contractions follow standard word-counting conventions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are Chinese characters counted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each Chinese character counts as one character. For mixed text, both English words and Chinese characters contribute to the total character count.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is it compared to Microsoft Word?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Within 1-2% of Word for plain English text. Word, Google Docs, and online counters often disagree by 1-3% on the same input — for client work with strict word limits, we recommend verifying in two different tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my text uploaded to a server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All counting happens locally in your browser. Your text is never transmitted, logged, or stored anywhere.',
        },
      },
    ],
  },
}

export default async function WordCounterPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemas[lang]) }}
      />
      <WordCounterClient initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
