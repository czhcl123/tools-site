import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'JSON 常见错误：一行定位，快速修复'
      : 'Common JSON Errors: Find and Fix Them Fast',
    description: lang === 'zh'
      ? 'JSON 报错看不懂？逗号、引号、括号、注释——最常见的 7 类错误逐个示例，教你用格式化工具精确定位。'
      : 'Trailing commas, single quotes, mismatched brackets — the seven most common JSON errors with examples, and how a formatter pinpoints each one.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/json-common-errors',
      languages: { 'en-US': '/blog/json-common-errors', 'x-default': '/blog/json-common-errors' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/json-common-errors' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why does my JSON say unexpected token?", "acceptedAnswer": {"@type": "Answer", "text": "Usually a trailing comma, a single quote, or an unquoted key right before that position. The error line and column point at the first invalid character."}}, {"@type": "Question", "name": "Does JSON allow comments?", "acceptedAnswer": {"@type": "Answer", "text": "No. Standard JSON (RFC 8259) has no comment syntax. Use JSONC or strip comments before parsing."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么 JSON 报错信息这么难懂</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON 的语法极度严格：键必须用双引号、不能有注释、逗号不能出现在最后一个元素后面。解析器发现第一个违规字符就报错，但报错位置（行号和列号）往往指向「症状」而不是「病因」——真正的问题在报错位置的前一行。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">7 类高频错误</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 末尾多余逗号（trailing comma）</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{
  "name": "widget",
  "price": 9.9,   ← 这个逗号让解析器崩溃
}`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 单引号当双引号用</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ 'name': 'widget' }   ← JSON 只认双引号`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 键没加引号</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ name: "widget" }   ← 键必须是 "name"`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. 注释</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON 标准（RFC 8259）不允许任何注释。// 和 /* */ 都是语法错误。从 JS 对象字面量复制代码时最容易带上注释。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. 括号不配对</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ "items": [1, 2, 3 }   ← 缺右括号 ]`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6. 数字格式非法</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          前导零（012）、十六进制（0x1F）、NaN、Infinity 都不合法。JSON 数字就是十进制，可带负号和小数点，没了。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">7. 多个根对象</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          一个 JSON 文档只能有一个根值。两段 {`{"a":1} {"b":2}`} 平级放在文件里会直接报错，必须包一层 {`{"data": [...]}`} 或 {`{"a":1,"b":2}`}。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">用格式化工具定位：比读报错快 10 倍</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          把整段 JSON 粘进格式化工具，解析器会直接标出出错的行和列。格式化成功的文档同时会被缩进重排，结构一目了然——嵌套层级错了、键重复了，肉眼就能看出来。养成习惯：<strong>接口调不通先格式化，再看报错</strong>。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">预防比修复省时间</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>编辑器装 JSON 校验插件（VS Code 自带，红波浪线实时提示）</li>
          <li>从 JS 对象生成 JSON 用 JSON.stringify()，不要手写</li>
          <li>接口返回的 JSON 先过一遍格式化校验，再进业务代码</li>
          <li>配置文件用 JSON5 或 YAML——这两种格式支持注释，减少手改 JSON 的场景</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">JSON 和 JavaScript 对象有什么区别？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">JSON 是独立的数据格式，语法是 JS 对象的子集：键必须双引号、没有注释、没有变量和函数。JS 里合法的对象字面量，JSON 里未必合法。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">YAML 能替代 JSON 吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">配置文件场景可以（支持注释、更易读）；API 传输场景 JSON 仍是主流，解析器支持最广。详见 JSON vs XML vs YAML 对比文章。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → 粘进去，出错行号直接标出来
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why JSON Error Messages Are So Unhelpful</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          JSON's grammar is brutally strict: keys need double quotes, comments don't exist, and no trailing comma after the last item. The parser stops at the first offending character — but the line and column it reports usually point at the symptom, not the cause. The real problem typically sits on the line before.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Seven Most Common Errors</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Trailing comma</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{
  "name": "widget",
  "price": 9.9,   ← this comma breaks the parser
}`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Single quotes instead of double</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ 'name': 'widget' }   ← JSON only accepts double quotes`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Unquoted keys</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ name: "widget" }   ← must be "name"`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Comments</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The JSON standard (RFC 8259) allows no comments at all — both // and /* */ are syntax errors. Copy-pasting from a JavaScript object literal is how most people trip on this.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Mismatched brackets</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 font-mono">
{`{ "items": [1, 2, 3 }   ← missing the closing ]`}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6. Illegal numbers</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Leading zeros (012), hex (0x1F), NaN, and Infinity are all invalid. JSON numbers are plain decimal, optionally signed and fractional. Nothing else.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">7. Multiple root values</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          One JSON document holds exactly one root value. Two objects side by side — {`{"a":1} {"b":2}`} — are an error; wrap them in an array or a single object.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Let a Formatter Locate It: 10× Faster Than Reading Errors</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Paste the whole document into a JSON formatter and the parser flags the exact line and column. A successful format also re-indents everything, so structural problems — wrong nesting, duplicate keys — jump out visually. Build the habit: <strong>when an API response fails, format it before debugging it</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Prevention Beats Repair</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Install a JSON validation extension in your editor — VS Code flags errors with red squiggles in real time</li>
          <li>Generate JSON from JavaScript with JSON.stringify() instead of hand-writing it</li>
          <li>Run every API JSON response through a formatter before it reaches business code</li>
          <li>For config files, consider JSON5 or YAML — both support comments and cut down on hand-edited JSON</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How is JSON different from a JavaScript object?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">JSON is its own data format — a subset of JS object syntax: keys require double quotes, there are no comments, variables, or functions. Valid JS literals aren't always valid JSON.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Can YAML replace JSON?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">For config files, yes — comments and readability win. For API payloads, JSON remains the mainstream choice with the broadest parser support. See our JSON vs XML vs YAML comparison.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/json-formatter" className="text-orange-600 font-medium hover:underline">
            → Paste it in — the exact error line gets flagged
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'JSON 常见错误：一行定位，快速修复' : 'Common JSON Errors: Find and Fix Them Fast'}
      </h1>
      {content[lang]}
    </div>
  )
}
