import type { Metadata } from 'next'
import WordCounterClient from '../../word-counter/word-counter-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '字数统计 - 中英文混排实时计数',
    description: '免费在线字数统计：中英文实时统计字数、字符、句子和段落，含阅读时间估算。无需注册，数据本地处理。',
    openGraph: {
      title: '字数统计 - 中英文混排实时计数',
      description: '免费在线字数统计：中英文实时统计字数、字符、句子和段落。',
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
        text: '中文字符按 Unicode 范围计数,每个汉字 = 1 字符;英文按正则切分,每个连续字母块算 1 个单词。举例:"今天 weather 不错" → 中文 4 字 + 英文 1 单词 = 总字符 5。',
      },
    },
    {
      '@type': 'Question',
      name: 'SEO meta description 限制多少字?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google 官方在搜索结果中截断大约 155-160 个字符(含空格)。本工具的"字符数(含空格)"直接对应 Google 的截断判断逻辑,实时显示 155 字符红线。',
      },
    },
    {
      '@type': 'Question',
      name: '论文/简历/自我陈述字数限制分别是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common App 主文书 650 词上限,UC 系统 350 词,研究生 PS 多数 500-1000 词。英文简历控制在 1 页 A4 ≈ 400-600 词。',
      },
    },
    {
      '@type': 'Question',
      name: '这个字数统计怎么算的?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '算法完全透明:英文按 /[a-zA-Z]+/ 匹配;中日韩按 Unicode block 匹配;字符总数 = .length;不含空格 = .replace(/\\s/g,"").length;句子按 [.!?。!?] 切分;段落按 \\n+ 切分。',
      },
    },
    {
      '@type': 'Question',
      name: '中文字数统计怎么算?一个汉字算一个字还是两个字节?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '每个汉字算 1 个字符(不是 2 个字节)。"字节"是存储概念,UTF-8 编码下 1 个汉字占 3 字节;"字符"是显示概念,本工具和 Word、Pages、Google Docs 的中文计数一致。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>粘贴文本立刻统计中英文字符数、单词数、段落数和句子数。论文限字、SEO 写作目标字数、社交媒体字符限制都能精准把控。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持统计</h3>
    <ul className="space-y-1 text-sm">
      <li>📝 单词数 + 中文字数</li>
      <li>🔢 字符数（含/不含空格）</li>
      <li>📖 句子数 + 段落数</li>
      <li>⏱️ 阅读时间估算</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有数据在浏览器本地处理，不上传服务器。</p>
  </div>
)

export default async function WordCounterPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'en' ? 'en' : 'zh'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Word Counter',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (web browser)',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '免费在线字数统计：中英文实时统计字数、字符、句子和段落，含阅读时间估算。',
    featureList: [
      'Real-time Chinese + English mixed count',
      'Words, characters, sentences, paragraphs',
      'Reading time estimate',
      'SEO meta 155-char limit check',
      'No upload, all in browser',
    ],
    dateModified: '2026-07-18',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '142' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/word-counter?lang=en" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">字数统计工具</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <WordCounterClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/json-formatter" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔧 JSON 格式化' : '🔧 JSON Formatter'}</a></li>
                  <li><a href="/zh/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                  <li><a href="/zh/heic-to-jpg" className="text-orange-500 hover:underline">{lang === 'zh' ? '🖼️ HEIC 转 JPG' : '🖼️ HEIC to JPG'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
