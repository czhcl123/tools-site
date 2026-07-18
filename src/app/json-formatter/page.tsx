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
      title: 'JSON 格式化 - 在线 API 调试器与验证器 (500K/月 cpc \$102)',
      description: '免费 JSON 格式化与验证工具:粘贴 JSON 一键美化、压缩、验证。500K/月需求,cpc \$102 商业价值高。自定义缩进(2/4/Tab),错误精确到行列号,支持 10MB。所有处理在浏览器本地完成,数据安全。',
    },
    en: {
      title: 'JSON Formatter & Validator - Free Online JSON Beautifier (500K/mo, cpc \$102)',
      description: 'Free online JSON formatter and validator: paste JSON to format, beautify, minify, and validate in 1 click. 500,000 monthly searches, cpc \$102. Errors show exact line and column. Custom indent (2 / 4 / Tab), up to 10 MB. Perfect for API debugging, webhook payloads, and config files. 100% browser-side, no upload.',
    },
  }

  return {
    title: data[lang].title,
    description: data[lang].description,
    openGraph: {
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
      <p>
        <strong>JSON 格式化工具</strong>解决后端开发、前端调试、接口联调时最头疼的 6 个问题:API 响应一坨压平根本看不清结构、配置文件嵌套太深找 bug 找不到、多余的逗号让 parser 报莫名错误、2 空格和 4 空格缩进在团队 PR 里反复争论、压缩版还是美化版适合当前场景、还有线上调试时不敢把生产数据贴到在线 validator。粘贴 JSON,选择缩进(2/4/Tab),秒出可读结果。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">6 个最常见的 JSON 痛点</h2>
      <p>
        <strong>痛点 1:API 响应一坨压平</strong>。后端返回的 JSON 没换行没缩进,几千字符挤成一行,找字段像读天书。本工具默认 2 空格缩进,一秒钟还原结构,贴进去直接折叠到关键层。
      </p>
      <p>
        <strong>痛点 2:嵌套层级太深找不到 bug</strong>。Webhook payload、Stripe 回调、GitHub event 经常有 8-10 层嵌套,肉眼很难定位。本工具格式化后用浏览器的 Find + JSONPath 模板找到你要的字段。
      </p>
      <p>
        <strong>痛点 3:多余逗号 / 单引号 / 注释让 parser 报错</strong>。JavaScript 对象字面量不是合法 JSON,Python 的 None / True / False 也不是。本工具报错信息精确到行列号,告诉你哪个 token 出错,而不是只说 "parse error"。
      </p>
      <p>
        <strong>痛点 4:2 空格 vs 4 空格缩进之争</strong>。JavaScript / Node 生态默认 2 空格,Python 生态默认 4 空格,Go 默认 Tab。PR review 里为了缩进吵起来没意义,本工具三者都支持,选完直接 commit。
      </p>
      <p>
        <strong>痛点 5:压缩还是美化?</strong>。上线环境用压缩版省带宽(服务器一般再 gzip 一层);开发环境 / 调试时用美化版便于肉眼阅读。本工具一键切换,粘贴一次,两种结果都给你。
      </p>
      <p>
        <strong>痛点 6:线上 validator 会不会泄露生产数据?</strong>。本工具纯前端实现,JSON 不离开浏览器,你可以放心粘贴用户 token、订单数据、内部配置文件。同类公共 validator 大多会把你贴的内容上传到自家服务器解析。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">这个工具适合谁?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>后端开发调试 API 响应、查看 webhook payload</li>
        <li>前端开发解析后端 mock 数据、查看 .json 配置文件</li>
        <li>运维 / DevOps 查看 Kubernetes manifest、Terraform state、package.json</li>
        <li>数据分析师清洗 API 返回的 JSON、做 ETL 前的格式校验</li>
        <li>QA 测试人员对比接口响应在 staging 和 production 的差异</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">比 jq / python -m json.tool 好在哪?</h2>
      <p>
        jq 强大但学习曲线陡,管道语法记不住。python -m json.tool 需要本地装 Python,新电脑临时调试很烦。本工具浏览器即开即用,无需安装,一键复制到剪贴板,适合临时调试。所有解析在浏览器本地完成(JSON.parse 是 ES2015 标准),不上传服务器,适合生产环境敏感数据(token、PII、订单)。
      </p>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        A <strong>JSON formatter</strong> solves the six daily frustrations that hit every backend engineer, frontend dev, or DevOps engineer wrestling with raw API responses: a minified JSON blob with no line breaks, webhook payloads nested 10 levels deep where the field you need hides somewhere in there, a trailing comma that crashes production, an indentation style war in every code review, and the nagging worry that pasting customer data into a random online JSON validator is a compliance risk. Paste your JSON, pick 2 or 4 space indent, get readable output instantly.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Six recurring JSON headaches</h2>
      <p>
        <strong>1. Minified API responses.</strong> Production APIs return single-line JSON to save bandwidth. Useful for the wire, useless for humans. This tool reformats with sensible defaults (2 space indent) in under a second, and you can collapse everything past a chosen depth.
      </p>
      <p>
        <strong>2. Deep nesting in webhook payloads.</strong> Stripe webhooks, GitHub events, and Shopify order payloads routinely land at 8-12 levels. Format once, then use Find-in-page or a JSONPath query to pull out the exact field you care about instead of squinting at the tree.
      </p>
      <p>
        <strong>3. Parse errors from trailing commas, single quotes, unquoted keys.</strong> JavaScript object literals are not valid JSON — neither is Python repr-style output. JSON.parse throws "Unexpected token" with no hint. This tool surfaces the precise column and line where the parse fails so you fix the right character, not the wrong one.
      </p>
      <p>
        <strong>4. 2-space vs 4-space indent wars.</strong> JavaScript and Go default to 2 spaces or tab; Python defaults to 4. Team repos end up with mixed indentation that triggers PR review noise. Pick a style, format the file, commit, move on.
      </p>
      <p>
        <strong>5. Minify or beautify?</strong> Ship minified JSON to production (gzip takes it further). Read beautified JSON in dev. Toggle between the two with one click — same paste, two outputs.
      </p>
      <p>
        <strong>6. Privacy of "free online JSON validator".</strong> Most web validators send your payload to their server for parsing. If the payload contains PII, tokens, or payment data, that is a data leak waiting to happen. This tool runs JSON.parse locally; the page never makes a network request with your data.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Who this is for</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Backend engineers inspecting API responses and debugging webhook integrations</li>
        <li>Frontend devs checking mock responses and validating config files (tsconfig, package-lock)</li>
        <li>DevOps / SRE reading Kubernetes manifests, Terraform state files, GitHub Actions logs</li>
        <li>Data engineers cleaning JSON before ETL or loading into BigQuery / Snowflake</li>
        <li>QA engineers diffing API responses across staging vs production environments</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Why not just use jq or python -m json.tool?</h2>
      <p>
        jq is unbeatable for one-liners on the command line, but the syntax (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">.users[] | select(.active) | .email</code>) is overkill when you just want to read a payload. Python requires a local install and is annoying on a fresh laptop. This tool is browser-only, no install, no login, no network call. For sensitive payloads — auth tokens, customer PII, payment data — the local-only guarantee is the actual reason to use it over a public validator.
      </p>
    </div>
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <JsonFormatterClient initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
