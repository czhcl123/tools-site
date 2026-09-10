import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'JSON 完全指南：从入门到精通，涵盖 JSON 语法、数据类型、嵌套结构、验证、格式化、与 API 集成，以及常见错误排查，适合开发者和数据分析师。' : 'en'
  return {
    title: lang === 'zh'
      ? 'JSON 完全指南：从入门到精通'
      : 'The Complete JSON Guide',
    description: lang === 'zh'
      ? 'JSON 完全指南:语法、数据类型、嵌套结构、验证、格式化、API 集成和常见错误排查。'
      : 'Complete JSON guide: syntax, data types, nesting, validation, formatting, API integration, and troubleshooting common errors.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/ultimate-json-guide',
      languages: { 'en-US': '/blog/ultimate-json-guide', 'x-default': '/blog/ultimate-json-guide' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/ultimate-json-guide' },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is JSON used for?', acceptedAnswer: { '@type': 'Answer', text: 'JSON is used for data exchange between servers and browsers, API responses, configuration files, and storing structured data.' } },
          { '@type': 'Question', name: 'What are the rules of JSON syntax?', acceptedAnswer: { '@type': 'Answer', text: 'JSON requires double quotes for keys and strings, uses {} for objects and [] for arrays, separates key-value pairs with colons, and items with commas. No trailing commas allowed.' } },
          { '@type': 'Question', name: 'How do I validate JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Use a JSON formatter/validator tool. Paste your JSON and it will highlight syntax errors like missing commas, unmatched quotes, or trailing commas.' } },
        ],
      }),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          JSON（JavaScript Object Notation）是当今互联网上最流行的数据格式。从 API 响应到配置文件，从数据库存储到前端渲染，JSON 无处不在。本指南将带你从零开始，全面掌握 JSON 的方方面面。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">一、JSON 是什么?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON 是一种轻量级的文本数据交换格式。它基于 JavaScript 语法的一个子集，但与编程语言无关——任何语言都能解析和生成 JSON。它的核心优势是：<strong>人类可读、机器易解析、体积小</strong>。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          对比其他格式：XML 冗长且需要标签闭合，YAML 可读但解析复杂，CSV 只适合扁平数据。JSON 在可读性和效率之间取得了最佳平衡。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">二、基础语法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON 只有两种结构：<strong>对象</strong>和<strong>数组</strong>。
        </p>
        <div className="bg-gray-50 rounded-xl p-4 mb-4 font-mono text-sm">
          <p className="text-gray-800">{'// 对象（Object）— 键值对'}</p>
          <p className="text-gray-800">{'{"name": "Alice", "age": 30}'}</p>
          <p className="text-gray-800 mt-2">{'// 数组（Array）— 有序列表'}</p>
          <p className="text-gray-800">{'[1, 2, 3, "hello", true]'}</p>
          <p className="text-gray-800 mt-2">{'// 嵌套结构'}</p>
          <p className="text-gray-800">{'{"users": [{"name": "Alice"}, {"name": "Bob"}]}'}</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">语法规则</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>键（key）必须用<strong>双引号</strong>包裹</li>
          <li>字符串值必须用<strong>双引号</strong>包裹</li>
          <li>数字、布尔值（true/false）和 null 不需要引号</li>
          <li>键值对之间用<strong>逗号</strong>分隔</li>
          <li><strong>不允许</strong>末尾逗号（trailing comma）</li>
          <li>不支持注释（JSON 标准中没有注释语法）</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三、数据类型</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON 支持 6 种数据类型：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>string</strong> — 字符串：'hello'、"北京"</li>
          <li><strong>number</strong> — 数字：42、3.14、-10（不区分整数和浮点数）</li>
          <li><strong>boolean</strong> — 布尔值：true、false</li>
          <li><strong>null</strong> — 空值：null</li>
          <li><strong>object</strong> — 对象：{'{}'} 包裹的键值对集合</li>
          <li><strong>array</strong> — 数组：{'[]'} 包裹的有序值列表</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">四、嵌套与复杂结构</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON 的真正威力在于嵌套。一个用户对象可以包含地址数组，地址数组中的每个对象又可以包含坐标对象：
        </p>
        <div className="bg-gray-50 rounded-xl p-4 mb-4 font-mono text-sm">
          <p className="text-gray-800">{'{'}</p>
          <p className="text-gray-800">{'  "user": {'}</p>
          <p className="text-gray-800">{'    "name": "Alice",'}</p>
          <p className="text-gray-800">{'    "addresses": ['}</p>
          <p className="text-gray-800">{'      {"type": "home", "city": "Beijing"},'}</p>
          <p className="text-gray-800">{'      {"type": "work", "city": "Shanghai"}'}</p>
          <p className="text-gray-800">{'    ]'}</p>
          <p className="text-gray-800">{'  }'}</p>
          <p className="text-gray-800">{'}'}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">五、JSON 在 API 中的使用</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          几乎所有现代 API 都使用 JSON 作为数据格式。一个典型的 API 响应长这样：
        </p>
        <div className="bg-gray-50 rounded-xl p-4 mb-4 font-mono text-sm">
          <p className="text-gray-800">{'{'}</p>
          <p className="text-gray-800">{'  "status": "success",'}</p>
          <p className="text-gray-800">{'  "data": {'}</p>
          <p className="text-gray-800">{'    "id": 123,'}</p>
          <p className="text-gray-800">{'    "name": "Product",'}</p>
          <p className="text-gray-800">{'    "price": 29.99'}</p>
          <p className="text-gray-800">{'  },'}</p>
          <p className="text-gray-800">{'  "meta": {"page": 1, "total": 100}'}</p>
          <p className="text-gray-800">{'}'}</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">六、常见错误与排查</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>末尾逗号</strong> — 最常见的错误。{'"a": 1, "b": 2,'} 最后的逗号非法</li>
          <li><strong>单引号</strong> — JSON 要求双引号。{'{"name": "Alice"}'} 才正确</li>
          <li><strong>缺少逗号</strong> — 键值对之间必须有逗号分隔</li>
          <li><strong>注释</strong> — JSON 不支持 // 或 /* */ 注释</li>
          <li><strong>键未加引号</strong> — {'{name: "Alice"}'} 是非法的，必须 {'{"name": "Alice"}'}</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>排查技巧</strong>：把 JSON 粘贴到格式化工具中，错误位置会立即高亮显示。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">七、JSON vs XML vs YAML</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>JSON</strong> — 最轻量，API 首选，无注释支持</li>
          <li><strong>XML</strong> — 支持属性和命名空间，企业级系统常用，有 Schema 验证</li>
          <li><strong>YAML</strong> — 最人类可读，适合配置文件，但解析容易出错</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → 用 JSON 格式化工具验证和美化你的 JSON
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          JSON (JavaScript Object Notation) is the most popular data format on the internet today. From API responses to configuration files, from database storage to frontend rendering — JSON is everywhere. This guide takes you from zero to mastery.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 1: What Is JSON?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON is a lightweight text data interchange format. Based on a subset of JavaScript syntax but language-independent — any language can parse and generate JSON. Its core advantages: <strong>human-readable, machine-parseable, compact</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 2: Basic Syntax</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON has only two structures: <strong>objects</strong> and <strong>arrays</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Keys must be wrapped in <strong>double quotes</strong></li>
          <li>String values must use <strong>double quotes</strong></li>
          <li>Numbers, booleans (true/false), and null don't need quotes</li>
          <li>Items separated by <strong>commas</strong></li>
          <li><strong>No trailing commas</strong> allowed</li>
          <li>No comments supported in the JSON standard</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 3: Data Types</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>string</strong> — "hello", "北京"</li>
          <li><strong>number</strong> — 42, 3.14, -10 (no distinction between int and float)</li>
          <li><strong>boolean</strong> — true, false</li>
          <li><strong>null</strong> — null</li>
          <li><strong>object</strong> — {'{}'}  key-value pairs</li>
          <li><strong>array</strong> — {'[]'} ordered list of values</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 4: Nesting & Complex Structures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON's real power is nesting. A user object can contain an array of addresses, each address being its own object with coordinates — the possibilities are limitless.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 5: JSON in APIs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Almost all modern APIs use JSON. A typical response includes status, data payload, and metadata — all in a single, parseable structure.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 6: Common Errors</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Trailing commas</strong> — the most common error. Trailing commas before closing braces or brackets are illegal</li>
          <li><strong>Single quotes</strong> — JSON requires double quotes for keys and strings</li>
          <li><strong>Missing commas</strong> — items must be separated by commas</li>
          <li><strong>Comments</strong> — JSON does not support line or block comments</li>
          <li><strong>Unquoted keys</strong> — {'{name: "Alice"}'} is illegal; must be {'{"name": "Alice"}'}</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 7: JSON vs XML vs YAML</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>JSON</strong> — lightest, API default, no comments</li>
          <li><strong>XML</strong> — supports attributes and namespaces, enterprise systems, has Schema validation</li>
          <li><strong>YAML</strong> — most human-readable, great for config files, but parsing can be tricky</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → Format and Validate Your JSON Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'JSON 完全指南：从入门到精通' : 'The Complete JSON Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
