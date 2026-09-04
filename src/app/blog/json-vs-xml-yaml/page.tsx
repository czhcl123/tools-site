import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'JSON vs XML vs YAML：什么时候用哪种格式？'
      : 'JSON vs XML vs YAML: When to Use Each Format',
    description: lang === 'zh'
      ? 'JSON、XML、YAML 三种数据格式的对比：可读性、文件大小、使用场景和代码示例。'
      : 'JSON vs XML vs YAML comparison: readability, file size, use cases, and code examples for each format.',
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/blog/json-vs-xml-yaml' : '/blog/json-vs-xml-yaml'}`,
      languages: { 'zh-CN': '/zh/blog/json-vs-xml-yaml', 'en-US': '/blog/json-vs-xml-yaml', 'x-default': '/blog/json-vs-xml-yaml' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种格式一览</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📋 <strong>JSON</strong>：JavaScript 对象表示法。轻量、易读、广泛用于 API。用花括号 {} 和方括号 []。</p>
          <p>📄 <strong>XML</strong>：可扩展标记语言。功能强大但冗长。用尖括号 &lt;&gt; 标签。适合复杂文档结构。</p>
          <p>📝 <strong>YAML</strong>：YAML 不是标记语言。用缩进表示层级，人类最易读。常用于配置文件。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">对比</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📊 <strong>可读性</strong>：YAML > JSON > XML</p>
          <p>📦 <strong>文件大小</strong>：JSON < YAML < XML（XML 最大）</p>
          <p>🔧 <strong>解析难度</strong>：JSON 最简单，YAML 需注意缩进，XML 最复杂</p>
          <p>🌐 <strong>浏览器支持</strong>：JSON 原生支持，XML 支持好，YAML 需要库</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么时候用哪个？</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">选 JSON</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          API 数据交换（REST、GraphQL）、前端数据、移动端数据传输。几乎所有现代 API 都用 JSON。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">选 XML</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          SOAP API、RSS/Atom 订阅、SVG 图像、HTML 的前身、需要命名空间和属性的复杂文档。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">选 YAML</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          配置文件（Docker Compose、GitHub Actions、Kubernetes）、CI/CD 管道、需要人类手动编辑的文件。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">代码示例</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同一个数据，三种表示：
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p><strong>JSON</strong>：{`{"name": "Alice", "age": 30, "skills": ["JS", "Python"]}`}</p>
          <p><strong>XML</strong>：{`<person><name>Alice</name><age>30</age></person>`}</p>
          <p><strong>YAML</strong>：name: Alice<br/>age: 30<br/>skills: [JS, Python]</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: JSON 会取代 XML 吗？</strong><br />
          A: 在 API 领域已经基本取代了。但在文档标记（如 SVG、XHTML）和企业级系统中，XML 仍然不可替代。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: YAML 比 JSON 好吗？</strong><br />
          A: 更易读，但更容易出错（缩进问题）。配置文件用 YAML，数据交换用 JSON，是目前的最佳实践。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → 格式化和验证你的 JSON
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Formats at a Glance</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📋 <strong>JSON</strong>: JavaScript Object Notation. Lightweight, readable, widely used for APIs. Uses {} and [].</p>
          <p>📄 <strong>XML</strong>: Extensible Markup Language. Powerful but verbose. Uses &lt;&gt; tags. Good for complex documents.</p>
          <p>📝 <strong>YAML</strong>: YAML Ain't Markup Language. Indentation-based, most human-readable. Common for config files.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Comparison</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📊 <strong>Readability</strong>: YAML > JSON > XML</p>
          <p>📦 <strong>File size</strong>: JSON < YAML < XML (XML is largest)</p>
          <p>🔧 <strong>Parsing</strong>: JSON easiest, YAML needs indentation care, XML most complex</p>
          <p>🌐 <strong>Browser support</strong>: JSON native, XML good, YAML needs a library</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When to Use Each</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Choose JSON</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          API data exchange (REST, GraphQL), frontend data, mobile data transfer. Nearly all modern APIs use JSON.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Choose XML</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          SOAP APIs, RSS/Atom feeds, SVG images, HTML's predecessor, complex documents needing namespaces and attributes.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Choose YAML</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Config files (Docker Compose, GitHub Actions, Kubernetes), CI/CD pipelines, files humans edit manually.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Code Examples</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same data, three representations:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p><strong>JSON</strong>: {`{"name": "Alice", "age": 30, "skills": ["JS", "Python"]}`}</p>
          <p><strong>XML</strong>: {`<person><name>Alice</name><age>30</age></person>`}</p>
          <p><strong>YAML</strong>: name: Alice<br/>age: 30<br/>skills: [JS, Python]</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Will JSON replace XML?</strong><br />
          A: It already has for APIs. But for document markup (SVG, XHTML) and enterprise systems, XML remains essential.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Is YAML better than JSON?</strong><br />
          A: More readable, but more error-prone (indentation issues). Config files → YAML, data exchange → JSON is current best practice.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → Format and validate your JSON
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'JSON vs XML vs YAML：什么时候用哪种格式？' : 'JSON vs XML vs YAML: When to Use Each Format'}
      </h1>
      {content[lang]}
    </div>
  )
}
