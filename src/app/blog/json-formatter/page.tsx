import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'JSON 格式化工具指南 — 在线美化和验证 JSON'
      : 'JSON Formatter Guide — Format, Validate & Beautify JSON',
    description: lang === 'zh'
      ? 'JSON 格式化工具使用教程:美化、压缩、验证 JSON 数据,含常见错误修复和开发者技巧。'
      : 'How to use a JSON formatter to beautify, minify, and validate JSON data. Includes common error fixes and developer tips.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/json-formatter',
      languages: { 'en-US': '/blog/json-formatter', 'x-default': '/blog/json-formatter' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是 JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON（JavaScript Object Notation）是一种轻量级的数据交换格式,人类易读也易写。API 返回的数据、配置文件、前端/后端通信,几乎都用 JSON。格式:键值对用冒号分隔,对象用 {} 包裹,数组用 [] 包裹。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么要格式化 JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          API 返回的 JSON 通常是压缩的(一行),不方便阅读。格式化后加上缩进和换行,层次结构一目了然。调试 API、审查数据、写文档时必不可少。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种常用操作</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 美化(Pretty Print)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          把压缩的 JSON 变成带缩进的可读格式。例如把 {`{"name":"John","age":30}`} 展开成多行,每个属性对齐。这是最常用的功能。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 压缩(Minify)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          反过来——去掉所有空格和换行,把 JSON 压缩成一行。用于生产环境减少传输体积,优化加载速度。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 验证(Validate)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          检查 JSON 语法是否正确。常见错误:多余的逗号、缺少引号、括号不匹配。格式化工具会高亮报错位置,帮你快速修复。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">JSON 常见错误</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>❌ 多余逗号: {`{"a": 1, "b": 2,}`} ← 最后不能有逗号</p>
          <p>❌ 键没引号: {`{name: "John"}`} ← 键必须用双引号</p>
          <p>❌ 单引号: {`{"name": 'John'}`} ← 必须双引号</p>
          <p>❌ 注释: JSON 不支持注释(// 或 /* */)</p>
        </div>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → 立即使用 JSON 格式化工具
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write. APIs, config files, and frontend-backend communication all use JSON. Format: key-value pairs separated by colons, objects in {}, arrays in [].
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Format JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          API responses are usually minified (one long line), making them hard to read. Formatting adds indentation and line breaks so the structure is instantly clear. Essential for debugging APIs, reviewing data, and writing documentation.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Common Operations</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Pretty Print (Beautify)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Turns minified JSON into an indented, readable format. For example, expanding {`{"name":"John","age":30}`} into multiple lines with proper alignment. The most commonly used operation.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Minify</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The reverse — strip all whitespace and line breaks, compressing JSON into a single line. Used in production to reduce payload size and improve load times.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Validate</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Checks JSON syntax for errors. Common mistakes: trailing commas, missing quotes, unmatched brackets. The formatter highlights the error location so you can fix it quickly.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common JSON Errors</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>❌ Trailing comma: {`{"a": 1, "b": 2,}`} ← no comma after last item</p>
          <p>❌ Unquoted keys: {`{name: "John"}`} ← keys must use double quotes</p>
          <p>❌ Single quotes: {`{"name": 'John'}`} ← must use double quotes</p>
          <p>❌ Comments: JSON does not support comments (// or /* */)</p>
        </div>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → Try the JSON Formatter Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'JSON 格式化工具指南' : 'JSON Formatter Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
