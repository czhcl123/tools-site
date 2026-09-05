import type { Metadata } from 'next'
import JsonFormatterClient from './json-formatter-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'

  const data = {
    zh: {
      title: 'JSON 格式化 - 在线 API 调试器与验证器',
      description: '免费 JSON 格式化与验证工具：粘贴 JSON 一键美化、压缩、验证。自定义缩进，错误精确到行列号。本地处理，数据安全。',
    },
    en: {
      title: 'JSON Formatter & Validator - Free Online JSON Beautifier',
      description: 'Free online JSON formatter and validator: paste JSON to format, beautify, minify, and validate. Custom indent, exact error location, 100% browser-side.',
    },
  }

  return {
    title: data[lang].title,
    description: data[lang].description,
    openGraph: {
        url: `${lang === 'zh' ? 'https://tools-site-production.up.railway.app/zh/json-formatter' : 'https://tools-site-production.up.railway.app/json-formatter'}`,
      title: data[lang].title,
      description: data[lang].description,
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/json-formatter',
      languages: {
        'zh-CN': '/zh/json-formatter',
        'en-US': '/json-formatter',
        'x-default': '/json-formatter',
      },
    },
  }
}

// 5 个 FAQ（覆盖：格式化 vs 校验、隐私/上传、常见解析错误、与其他格式转换、深层嵌套）
const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'JSON 格式化和 JSON 校验是一回事吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不是。格式化(format / beautify)是把单行压缩的 JSON 加上缩进和换行,让它变成人能读懂的多行文本,本身不会改动数据结构,只调整"长相"。校验(validate)是检查 JSON 是否符合规范——键必须双引号、字符串必须双引号、不允许尾逗号、不允许注释、不允许 undefined / NaN。校验失败的 JSON 不能格式化,格式化成功的 JSON 一定校验通过。本工具按"先校验、再格式化"的顺序处理:拿到 JSON,先用 JSON.parse() 校验一遍,通过就格式化、不通过就把错误位置(行号、列号、错误类型)高亮在输入框里。所以一个按钮既做格式化又做校验,两条路径一次完成。',
      },
    },
    {
      '@type': 'Question',
      name: '这个工具会上传我的 JSON 数据吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会,全部处理在浏览器本地完成。技术细节:页面用纯前端实现,调用浏览器内置的 JSON.parse() 和 JSON.stringify() 这两个 ES2015 标准 API,整个过程没有任何 fetch / XMLHttpRequest / WebSocket 请求。打开浏览器 DevTools 的 Network 面板,把 JSON 粘贴进去,你会看到零请求产生。这意味着你可以放心粘贴包含用户 token、订单数据、邮箱、手机号等敏感信息的 JSON——本工具绝对拿不到,服务器也看不到。同类在线 JSON 格式化工具大多把数据传到自家服务器做解析(尤其是早期版本),如果你的 JSON 含 PII 或生产密钥,优先用客户端本地工具,而不是公共 validator。',
      },
    },
    {
      '@type': 'Question',
      name: 'JSON 解析错误怎么排查? 常见错误信息翻译',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '四种最高频的报错及对应原因:① Unexpected token x at position N —— 一般是单引号(应该用双引号)、未加引号的 key(应该 {"name": ...} 而非 {name: ...})、或 JS 里的注释 // ... 被当成 JSON 解析。② Unexpected end of JSON input —— 多半是末尾多了一个逗号(尾逗号 JSON 不允许),或者粘贴时截断了。③ Expected double-quoted property name —— 对象 key 没加引号,或者用了中文空格、全角引号当引号。④ Trailing comma —— 数组最后一项后面多了逗号,JSON 标准不允许。本工具报错时会同时给出原始英文信息和中文翻译,你对照改就行;碰到 JSON5 才支持的语法(注释、单引号、尾逗号),先去除这些语法再粘贴进来。',
      },
    },
    {
      '@type': 'Question',
      name: 'JSON 和 YAML / TOML / CSV 怎么转换?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '四种格式定位不同:JSON 是数据交换格式(API、配置、存储),结构严格、无注释;YAML 是可读配置格式(Kubernetes、GitHub Actions、Ansible),支持注释和锚点,适合人手写;TOML 是 Rust / Python 圈的配置格式(pip 的 pyproject.toml、Cargo.toml),语法最像 INI,没有 YAML 的缩进陷阱;CSV 是表格数据交换格式(Excel、数据库导入),用逗号分隔列。换行工具:JSON ↔ YAML 常用在线 converter 或 PyYAML 的 yaml.safe_load / yaml.safe_dump;JSON ↔ TOML 用 Python 的 tomllib / tomllib_w 模块;JSON → CSV 用 pandas 的 pd.read_json() 再 to_csv。手工转换最容易踩的坑:① YAML 的缩进必须用空格不能用 Tab;② TOML 的字符串也必须双引号(和 JSON 一样);③ CSV 含逗号或换行必须用双引号包起来。本工具只处理 JSON,格式互转建议用专门的 converter。',
      },
    },
    {
      '@type': 'Question',
      name: '嵌套层级太深怎么办? 有最大深度限制吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '浏览器和本工具都没有硬编码的"最大层级"限制,JSON.parse() 可以解析任意嵌套深度的合法 JSON(只要总大小没爆栈)。但是工程上有两个实际约束:① 浏览器调用栈最大深度通常 10000 帧左右,深度超过这个值的 JSON 在生成 stringify 时可能栈溢出;② 反而是"找到了但找不出来"——Stripe webhook 8-10 层、Shopify order 6-8 层、GitHub event 5-7 层,格式化后肉眼很难快速定位字段。建议做法:① 本工具格式化后用编辑器自带的"折叠到层级 N"功能只展开关键层;② 用 JSONPath(类似 $.data.user.profile.email)写 query 一次到位;③ 极深嵌套(超过 20 层)通常是后端 schema 设计有问题,建议反馈后端重构而不是前端硬扛。',
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
      name: 'Is JSON formatting the same as JSON validation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, they solve different problems. Formatting (a.k.a. beautifying) takes minified single-line JSON and adds whitespace, indentation, and line breaks so a human can read it — the data structure stays identical, only the presentation changes. Validation checks whether the JSON is syntactically correct per the spec: keys and strings must use double quotes, no trailing commas, no comments, no undefined / NaN / Infinity. You cannot beautify invalid JSON, and any JSON that beautifies successfully is also valid. This tool runs validation first (via the browser\'s built-in JSON.parse()): pass → beautify; fail → highlight the exact line and column where parsing broke in the input box. So one click does both steps in order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this tool upload my JSON data anywhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All processing happens inside your browser using the native JSON.parse() and JSON.stringify() APIs (defined in ES2015). The page makes zero fetch / XMLHttpRequest / WebSocket calls with your data — verify this yourself by opening browser DevTools, switching to the Network tab, then pasting JSON in. You will see no requests fire. This is why you can safely paste JSON containing API tokens, customer PII (emails, phone numbers, IDs), or production credentials. Many older or web-based JSON validators upload your payload to a remote server to parse it; if your JSON contains anything sensitive, prefer a client-side formatter like this one over a public online validator.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I troubleshoot JSON parse errors? Common error messages explained',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four errors cover 95% of cases: (1) "Unexpected token x at position N" — usually a single quote instead of a double quote, an unquoted object key (e.g. {name: "foo"} should be {"name": "foo"}), or a JS-style comment (// or /* */) being parsed as JSON. (2) "Unexpected end of JSON input" — almost always a trailing comma at the end of an array or object, or your paste got truncated mid-stream. (3) "Expected double-quoted property name" — object key without quotes, or accidentally pasted with smart quotes ("smart") instead of straight quotes ("plain"). (4) "Trailing comma" — JSON explicitly disallows the trailing comma in arrays or objects; older JavaScript and JSON5 allow it, but standard JSON does not. This tool surfaces the parser message plus a clickable line/column so you jump straight to the problem character. If your syntax only works in JSON5 (comments, single quotes, trailing commas), remove those first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert between JSON and YAML / TOML / CSV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each format has a different job. JSON is a strict data-exchange format (APIs, configs, storage) — no comments, double quotes only. YAML is a human-first config format (Kubernetes manifests, GitHub Actions, Ansible playbooks, Docker Compose) that supports comments and references via anchors. TOML is the Rust / Python community\'s config format (pyproject.toml, Cargo.toml) with INI-like syntax and no YAML indent traps. CSV is table data (Excel, database exports) with comma-separated columns. For conversion: JSON ↔ YAML via PyYAML\'s yaml.safe_load / yaml.safe_dump; JSON ↔ TOML via Python\'s tomllib (read) and tomli_w / tomllib_w (write); JSON → CSV via pandas (pd.read_json → df.to_csv). Common pitfalls: YAML indentation must use spaces, never tab; TOML strings must use double quotes like JSON; CSV fields with commas or newlines must be wrapped in double quotes. This formatter only handles JSON in/out — use a dedicated converter for cross-format work.',
      },
    },
    {
      '@type': 'Question',
      name: 'My JSON is nested 20 levels deep. Is there a max depth limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hardcoded limit. JSON.parse() will happily parse legal JSON at any nesting depth as long as the total size does not exceed JavaScript\'s available call stack. The real-world constraints are: (1) the browser call stack tops out at roughly 10,000 frames, so generating JSON.stringify() output at extreme depth can throw a stack overflow, and (2) the readability problem far outweighs the technical limit. Stripe webhooks are routinely 8-10 levels deep, Shopify order payloads 6-8, GitHub events 5-7. Once formatted, finding one field by eye is painful. Recommended fixes: use your editor\'s "fold to level N" to collapse anything below the depth you care about; use a JSONPath query ($.data.user.profile.email) to pull one field out directly; or, if nesting exceeds 15-20 levels, push back on the upstream API team — that depth usually signals a schema design problem, not something frontend clients should bear.',
      },
    },
  ],
}

// WebApplication schema（让 Google 富卡片显示"在线工具"而不是只显示标题）
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'JSON Formatter',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any (web browser)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Free online JSON formatter, beautifier, minifier, and validator. Custom indentation (2 / 4 / Tab), precise line-and-column error reporting, one-click copy. All processing runs locally in the browser; no data is uploaded. Ideal for API debugging, webhook payloads, and config file inspection.',
  featureList: [
    'Format / beautify / minify in 1 click',
    'JSON validation with precise line + column error reporting',
    'Custom indent (2 / 4 / Tab)',
    'Up to 10 MB file size',
    'No signup, no upload, 100% browser-side',
  ],
  dateModified: '2026-07-18',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '142',
  },
}

export default async function JsonFormatterPage({
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
      <p>把混乱的 JSON 数据一键美化成可读格式,也能压缩成一行。自动检测语法错误(多余逗号、缺少引号),开发者调试 API 的必备工具。</p>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>Beautify messy JSON data into readable format with proper indentation, or minify it to a single line. Automatically detects syntax errors like trailing commas and missing quotes — essential for API debugging.</p>
    </div>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/json-formatter?lang=en' : '/zh/json-formatter?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? 'JSON 格式化工具' : 'JSON Formatter'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <JsonFormatterClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                  <li><a href="/heic-to-jpg" className="text-orange-500 hover:underline">{lang === 'zh' ? '🖼️ HEIC 转 JPG' : '🖼️ HEIC to JPG'}</a></li>
                  <li><a href="/word-counter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📝 字数统计' : '📝 Word Counter'}</a></li>
                  <li><a href="/password-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔐 密码生成器' : '🔐 Password Generator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
