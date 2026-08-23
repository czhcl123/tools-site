import type { Metadata } from 'next'
import JsonFormatterClient from '../../json-formatter/json-formatter-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: 'JSON 格式化 - 在线 API 调试器与验证器',
    description: '免费 JSON 格式化与验证工具：粘贴 JSON 一键美化、压缩、验证。自定义缩进，错误精确到行列号。本地处理，数据安全。',
    openGraph: {
      title: 'JSON 格式化 - 在线 API 调试器与验证器',
      description: '免费 JSON 格式化与验证工具：粘贴 JSON 一键美化、压缩、验证。',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/json-formatter',
      languages: {
        'zh-CN': '/zh/json-formatter',
        'en-US': '/json-formatter',
        'x-default': '/json-formatter',
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
      name: 'JSON 格式化和 JSON 校验是一回事吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不是。格式化是把单行压缩的 JSON 加上缩进和换行,让它变成人能读懂的多行文本。校验是检查 JSON 是否符合规范——键必须双引号、不允许尾逗号、不允许注释。校验失败的 JSON 不能格式化,格式化成功的 JSON 一定校验通过。',
      },
    },
    {
      '@type': 'Question',
      name: '这个工具会上传我的 JSON 数据吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会,全部处理在浏览器本地完成。调用浏览器内置的 JSON.parse() 和 JSON.stringify() API,整个过程没有任何网络请求。可以放心粘贴包含敏感信息的 JSON。',
      },
    },
    {
      '@type': 'Question',
      name: 'JSON 解析错误怎么排查?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '四种最高频的报错:① Unexpected token — 单引号或未加引号的 key;② Unexpected end — 末尾多了一个逗号;③ Expected double-quoted — 对象 key 没加引号;④ Trailing comma — 数组最后一项后面多了逗号。本工具报错时会同时给出原始英文信息和中文翻译。',
      },
    },
    {
      '@type': 'Question',
      name: 'JSON 和 YAML / TOML / CSV 怎么转换?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JSON ↔ YAML 用 PyYAML;JSON ↔ TOML 用 Python 的 tomllib;JSON → CSV 用 pandas。本工具只处理 JSON,格式互转建议用专门的 converter。',
      },
    },
    {
      '@type': 'Question',
      name: '嵌套层级太深怎么办?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '浏览器没有硬编码的最大层级限制。实际约束是可读性:Stripe webhook 8-10 层、Shopify 6-8 层,格式化后肉眼很难定位字段。建议用编辑器的折叠功能或 JSONPath 查询。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>把混乱的 JSON 数据一键美化成可读格式，也能压缩成一行。自动检测语法错误（多余逗号、缺少引号），开发者调试 API 的必备工具。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持功能</h3>
    <ul className="space-y-1 text-sm">
      <li>🔧 一键美化 / 压缩</li>
      <li>✅ 语法校验 + 错误定位</li>
      <li>📐 自定义缩进（2/4/Tab）</li>
      <li>📋 一键复制</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有数据在浏览器本地处理，不上传服务器。</p>
  </div>
)

export default async function JsonFormatterPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const lang = 'zh'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/json-formatter" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">JSON 格式化工具</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <JsonFormatterClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">更多工具</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">⚖️ BMI 计算器</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">🏷️ 折扣计算器</a></li>
                  <li><a href="/zh/qr-code-generator" className="text-orange-500 hover:underline">📱 QR 码生成</a></li>
                  <li><a href="/zh/heic-to-jpg" className="text-orange-500 hover:underline">🖼️ HEIC 转 JPG</a></li>
                  <li><a href="/zh/word-counter" className="text-orange-500 hover:underline">📝 字数统计</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
