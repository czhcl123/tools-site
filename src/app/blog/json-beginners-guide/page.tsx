import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? 'JSON入门：数据格式详解与格式化技巧' : 'JSON for Beginners: Data Format Guide and Formatting Tips',
    description: lang === 'zh' ? '什么是JSON、语法规则、常见错误,以及如何用JSON格式化工具快速美化代码。' : 'What is JSON, syntax rules, common errors, and how to format code with JSON formatter tools.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/json-beginners-guide',
      languages: { 'en-US': '/blog/json-beginners-guide', 'x-default': '/blog/json-beginners-guide' },
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
          JSON (JavaScript Object Notation) 是一种轻量级的<strong>数据交换格式</strong>。它易于人阅读和编写,也易于机器解析和生成。几乎所有编程语言都支持JSON。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">JSON 基本语法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON使用键值对存储数据,用花括号{}表示对象,用方括号[]表示数组。例如:
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm mb-4">{'{"name": "张三", "age": 25, "skills": ["JavaScript", "Python"]}'}</pre>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见错误</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>缺少引号</strong> — 键必须用双引号包裹</li>
          <li><strong>尾随逗号</strong> — 最后一个元素后不能有逗号</li>
          <li><strong>注释</strong> — JSON不支持注释</li>
          <li><strong>单引号</strong> — 必须使用双引号</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么要格式化?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          压缩的JSON难以阅读。格式化后添加缩进和换行,让数据结构一目了然。调试API时,格式化能快速定位问题。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → 免费格式化你的 JSON
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What is JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON (JavaScript Object Notation) is a lightweight <strong>data interchange format</strong>. It's easy for humans to read/write and machines to parse/generate. Almost all programming languages support JSON.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">JSON Basic Syntax</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON stores data in key-value pairs, using curly braces {} for objects and square brackets [] for arrays. Example:
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm mb-4">{'{"name": "John", "age": 25, "skills": ["JavaScript", "Python"]}'}</pre>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Errors</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Missing quotes</strong> — keys must be double-quoted</li>
          <li><strong>Trailing commas</strong> — no comma after last element</li>
          <li><strong>Comments</strong> — JSON doesn't support comments</li>
          <li><strong>Single quotes</strong> — must use double quotes</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Format JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compressed JSON is hard to read. Formatting adds indentation and line breaks, making data structure clear at a glance. Essential for API debugging.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → Format Your JSON for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'JSON入门指南' : 'JSON for Beginners'}
      </h1>
      {content[lang]}
    </div>
  )
}
