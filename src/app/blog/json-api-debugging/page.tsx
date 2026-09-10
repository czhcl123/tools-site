import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '用 JSON 格式化工具调试 API 完全指南：如何快速定位 JSON API 常见错误，利用格式化工具识别问题，处理压缩和格式化 JSON，验证数据结构，提升开发效率。' : 'en'
  return {
    title: lang === 'zh'
      ? '用 JSON 格式化工具调试 API'
      : 'Debug APIs with JSON Formatter',
    description: lang === 'zh'
      ? '如何用 JSON 格式化工具快速定位 API 错误,提升开发调试效率。'
      : 'How to use a JSON formatter to quickly spot API errors, validate structure, and speed up development debugging.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/json-api-debugging',
      languages: { 'en-US': '/blog/json-api-debugging', 'x-default': '/blog/json-api-debugging' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/json-api-debugging' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why is API JSON hard to read?", "acceptedAnswer": {"@type": "Answer", "text": "APIs return minified JSON. Use a formatter."}}, {"@type": "Question", "name": "What issues can it spot?", "acceptedAnswer": {"@type": "Answer", "text": "Syntax errors, type mismatches, deep nesting."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么 API 调试需要 JSON 格式化?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          API 返回的 JSON 通常是压缩格式（minified），所有数据挤在一行里，根本看不出结构。格式化工具把压缩的 JSON 展开为带缩进的可读格式，让你一眼看出嵌套层级、键值对和数据类型。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见 JSON API 错误</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 语法错误</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          缺少逗号、多余逗号、引号不匹配——这些是最常见的 JSON 解析错误。格式化工具会在出错位置高亮提示，比在代码里逐行查找快 10 倍。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 类型不匹配</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          API 文档说返回数字，实际返回了字符串 "123"。格式化后一目了然：数字没有引号，字符串有引号。这类隐性错误不格式化根本发现不了。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 嵌套过深</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          响应数据嵌套了 5、6 层，不展开根本看不到底层字段。格式化后的树状结构让你快速定位深层数据。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">调试工作流</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          复制 API 响应 → 粘贴到 JSON 格式化工具 → 检查格式是否正确 → 展开查看数据结构 → 对比 API 文档验证字段。这个流程在 Postman、浏览器 DevTools 和命令行 curl 中都适用。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实用技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>压缩 ↔ 格式化切换</strong>：调试用格式化，提交/存储用压缩</li>
          <li><strong>验证 JSON 合法性</strong>：格式化失败 = JSON 有问题</li>
          <li><strong>检查编码问题</strong>：中文乱码可能是 UTF-8 BOM 或编码不一致</li>
          <li><strong>大型响应处理</strong>：截取关键部分格式化，避免浏览器卡顿</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">为什么 API 返回的 JSON 难读?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">API 返回压缩格式，数据挤在一行，用格式化工具展开即可。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">能发现哪些问题?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">语法错误、类型不匹配、嵌套过深、编码问题。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → 用 JSON 格式化工具调试你的 API
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why API Debugging Needs JSON Formatting</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          API responses are usually minified — all data crammed into one line, impossible to read. A formatter expands the JSON into indented, readable structure so you can instantly see nesting levels, key-value pairs, and data types.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common JSON API Errors</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Syntax Errors</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Missing commas, trailing commas, mismatched quotes — the most common JSON parsing errors. A formatter highlights the exact error location, 10x faster than scanning code line by line.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Type Mismatches</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The API docs say it returns a number, but you get the string "123". After formatting, it's obvious: numbers have no quotes, strings do. These subtle bugs are invisible without formatting.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Deep Nesting</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          When responses are nested 5–6 levels deep, you can't see the bottom fields without expanding. Formatted tree structure lets you navigate deep data quickly.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Debugging Workflow</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Copy API response → paste into JSON formatter → check if valid → expand to inspect structure → compare against API docs. This works in Postman, browser DevTools, and command-line curl alike.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Minify ↔ Pretty-print toggle</strong> — format for debugging, minify for storage</li>
          <li><strong>Validate first</strong> — if formatting fails, the JSON has errors</li>
          <li><strong>Check encoding</strong> — garbled characters usually mean UTF-8 BOM or encoding mismatch</li>
          <li><strong>Large responses</strong> — extract and format only the relevant section to avoid browser lag</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Why is API JSON hard to read?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">APIs return minified JSON on one line. Use a formatter to expand it.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What issues can it spot?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Syntax errors, type mismatches, deep nesting, and encoding problems.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → Debug Your API with JSON Formatter
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '用 JSON 格式化工具调试 API' : 'Debug APIs with JSON Formatter'}
      </h1>
      {content[lang]}
    </div>
  )
}
