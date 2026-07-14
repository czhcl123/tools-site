import type { Metadata } from 'next'
import JsonFormatterClient from '../../json-formatter/json-formatter-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const data = {
    zh: {
      title: 'JSON格式化工具 - 在线JSON验证、美化与压缩',
      description: '免费在线JSON格式化、美化、压缩、验证工具。支持自定义缩进、错误提示、语法高亮。开发者、API调试必备。',
    },
    en: {
      title: 'JSON Formatter - Online JSON Beautifier & Validator',
      description: 'Free online JSON formatter, beautifier, minifier, and validator. Custom indent, error messages, syntax highlighting. Essential for developers.',
    },
  }

  return {
    title: data.zh.title,
    description: data.zh.description,
    openGraph: {
      title: data.zh.title,
      description: data.zh.description,
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


const faqSchemas = {
  zh: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'JSON格式化是什么？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '把压缩的单行JSON转成带缩进的多行格式,便于阅读和编辑。',
        },
      },
      {
        '@type': 'Question',
        name: '支持大文件吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持10MB以内的JSON。更大文件建议使用专业工具如jq。',
        },
      },
      {
        '@type': 'Question',
        name: '数据安全吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '所有处理在浏览器本地完成,数据不上传任何服务器。',
        },
      },
      {
        '@type': 'Question',
        name: 'JSON和JSON5区别？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JSON5是JSON的超集,支持注释、尾逗号、单引号等。本工具使用标准JSON规范。',
        },
      },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is JSON formatting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Converting minified single-line JSON into a human-readable, indented multi-line format that is easier to read and edit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this tool support large files?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, files up to 10MB are supported. For larger files, we recommend a desktop tool like jq or a streaming JSON parser.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All processing happens locally in your browser. Your JSON is never uploaded to any server, and nothing is logged or stored.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between JSON and JSON5?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JSON5 is a superset of JSON that supports comments, trailing commas, single quotes, and other relaxed syntax. This tool uses the standard JSON specification.',
        },
      },
    ],
  },
}

export default async function JsonFormatterPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemas[lang]) }}
      />
      <JsonFormatterClient initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
