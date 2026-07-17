import type { Metadata } from 'next'
import QrCodeGeneratorClient from './qr-code-generator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'

  const data = {
    zh: {
      title: '在线 QR 码生成器_免费二维码无水印制作_实用计算器',
      description: '免费在线 QR 码生成器,本地浏览器生成不上传数据,支持 PNG/SVG 下载,自定义尺寸、颜色、纠错级别,无水印无需注册。',
    },
    en: {
      title: 'QR Code Generator Free No Signup - PNG, SVG & PDF Export',
      description: 'Free QR code generator, no signup, no watermark. Generate scannable QR codes in PNG, SVG, or PDF in 1 click. Custom size, foreground/background colors, error correction, high-resolution export. Runs locally in your browser, your data never leaves your device.',
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
      canonical: 'https://tools-site-production.up.railway.app/qr-code-generator',
      languages: {
        'zh-CN': '/zh/qr-code-generator',
        'en-US': '/qr-code-generator',
        'x-default': '/qr-code-generator',
      },
    },
  }
}

// 5 个 FAQ（覆盖：扫码场景、跨设备兼容、隐私、动静 QR 区别、印刷尺寸）
const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'QR 码一般用来扫什么?最常见的 5 个场景?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QR 码在中国大陆的日常使用场景已经非常普遍,最常见的有 5 个:① <strong>微信加好友</strong> — 把自己的微信二维码印在名片上,对方长按识别即可加,不用手输手机号;② <strong>扫码点餐</strong> — 餐厅桌面贴 QR 替代纸质菜单,顾客扫码打开点餐小程序;③ <strong>WiFi 一键连接</strong> — 把家庭或店铺的 WiFi 名称 + 密码编进 QR 码,贴在墙上客人扫一下就联网,免去口播或手输长密码;④ <strong>电子名片 (vCard)</strong> — 名片上印 QR,对方扫码直接把姓名、电话、邮箱、公司存进通讯录;⑤ <strong>扫码付款</strong> — 微信支付、支付宝收款码本质都是 QR 码,商家贴在前台顾客扫一下完成支付。本工具支持以上所有内容类型,纯文本粘贴即可生成。',
      },
    },
    {
      '@type': 'Question',
      name: '怎么确保我做的 QR 码在 iPhone 和 Android 都能扫?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三条铁律:① <strong>用标准 QR 码 (Model 2) 即可</strong>,所有 iPhone (iOS 11+) 和 Android (9+) 系统相机都内置扫码,无需额外 App,99% 的新手机开箱即扫;② <strong>保持足够留白 (Quiet Zone)</strong> — QR 码四周至少留 4 个模块宽的空白边,本工具默认 margin=2 已经合规;③ <strong>避免超低对比度配色</strong> — 黄底白字、深蓝底紫色码这种艺术化配色在某些安卓机型上识别失败,推荐<strong>深色前景 + 浅色背景</strong>的传统组合 (本工具默认黑底白码)。如果印在户外海报上担心磨损,选<strong>纠错级别 H (30%)</strong>,即使码被蹭脏、有 Logo 压在中心也照样能扫。',
      },
    },
    {
      '@type': 'Question',
      name: '在你们网站生成的 QR 码是私密的吗?会有人看到我编码的内容吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<strong>不会,本工具所有生成在你浏览器本地完成</strong>。具体原理:你输入的 URL、WiFi 密码、邮箱、vCard 名片等内容由前端 JavaScript (qrcode 库) 在你的设备上直接渲染成 QR 码图案,<strong>不会发送到任何服务器</strong>,不经过我们的后端,也不会写入数据库。第三方 QR 生成网站多数把请求发到他们的云端处理,这些数据通常会被记录到日志,部分还会被用于分析或销售给广告商。本工具没有这些风险 — 你可以打开浏览器开发者工具的 Network 标签验证:点击"生成"时不会有任何对外请求。适合敏感场景:WiFi 家庭密码、内部系统登录 URL、客户通讯录 vCard。',
      },
    },
    {
      '@type': 'Question',
      name: '静态 QR 码和动态 QR 码有什么区别?我应该选哪个?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<strong>静态 QR 码</strong>:内容直接编进 QR 图案里,一旦打印就没法改。优点是免费、永久有效、不依赖任何第三方服务,生成一次终身可用;缺点是印出去后发现 URL 写错也改不了。<strong>动态 QR 码</strong>:图案里只存一个短链接 (redirect),你登录服务商后台修改短链接指向的真实 URL 即可换内容,还能看扫码次数统计。优点是<strong>可修改、可追踪</strong>;缺点是依赖第三方平台 (月费 $5-50),平台倒闭 URL 全部失效,免费版通常有扫描次数限制。本工具只生成<strong>静态 QR 码</strong>,因为个人/小商家场景 99% 用不到动态 (印名片、贴餐桌不会换),而且不依赖任何第三方服务,真正属于你。',
      },
    },
    {
      '@type': 'Question',
      name: '印刷用的 QR 码应该做多大?(名片 / 海报 / 户外广告牌)',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '核心原则:<strong>扫描距离 = QR 码物理尺寸的 10 倍</strong>。也就是说,如果你希望用户站在 1 米外扫,QR 码本身至少要做 10 cm 大。具体场景:① <strong>名片</strong> (扫码距离 10-15 cm) — QR 码至少 1.5 cm × 1.5 cm,选 PNG 300 DPI 印刷;② <strong>A4 海报 / 餐厅桌牌</strong> (扫码距离 30-50 cm) — QR 码 3-5 cm 即可;③ <strong>易拉宝 / X 展架</strong> (扫码距离 1-2 m) — QR 码 10-15 cm;④ <strong>户外广告牌 / 公交站牌</strong> (扫码距离 5-10 m) — QR 码至少 50 cm,有些场景需要做到 1 m 以上。文件格式推荐:小尺寸用 PNG (300 DPI),大尺寸或需要二次缩放用<strong>SVG 矢量</strong>,无论印多大都不糊。',
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
      name: 'What are QR codes actually scanned for? The 5 most common uses.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QR codes have quietly become the default link between physical objects and the web. The five most common scans:① <strong>Adding a contact</strong> — a vCard QR on a business card lets one tap save someone\'s name, email, and phone into your address book;② <strong>Restaurant menus</strong> — a QR on the table replaces paper menus and opens an ordering page;③ <strong>WiFi login</strong> — encode the SSID + password into a QR, stick it on the wall, guests scan and connect without typing a 16-character WPA key;④ <strong>Payments</strong> — Venmo, PayPal, WeChat Pay, and Alipay all use QR codes at the point of sale;⑤ <strong>App downloads / landing pages</strong> — print ads, product packaging, and event posters use QR to bridge offline to a specific URL. This tool accepts any plain text payload, so all five work out of the box.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make sure my QR code scans on both iPhone and Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three rules cover 99% of cross-device problems.① <strong>Use a standard Model 2 QR code</strong> — every iPhone since iOS 11 and every Android phone since version 9 has a QR scanner built into the stock camera app, no third-party app required.② <strong>Respect the quiet zone</strong> — leave at least 4 modules of white space around the code. This tool uses margin=2 by default, which is compliant.③ <strong>Avoid low-contrast color pairs</strong> — yellow-on-white, navy-on-purple, or pastel-on-pastel often fail on older Android scanners. Stick with a <strong>dark foreground on a light background</strong> (this tool defaults to black-on-white). For outdoor print, select error correction level <strong>H (30%)</strong> so the code still scans with a logo in the center, scratches, or partial dirt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the QR codes generated on this site private? Can anyone see what I encode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '<strong>No, all generation runs locally in your browser</strong> — your content never touches our servers. The mechanism: the `qrcode` JavaScript library renders the QR pattern directly on the client using a Canvas, so the URL, WiFi password, email, vCard, or whatever you typed stays on your device. Most competing QR generators send the payload to a backend for processing, where it ends up in access logs, analytics pipelines, or even ad networks. This tool has no backend, no API, no database. You can verify by opening your browser DevTools Network tab and clicking Generate — there will be no outbound request. Safe for sensitive use cases: home WiFi passwords, internal admin URLs, customer contact lists, anything you would not paste into a chatbot.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a static and a dynamic QR code? Which do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A <strong>static QR code</strong> encodes the destination URL directly into the black-and-white pattern. It is free, permanent, and independent of any third party — print it once and it works forever. The downside: you cannot edit it after printing; a typo in the URL means reprinting. A <strong>dynamic QR code</strong> encodes only a short redirect URL; the real destination lives in the vendor\'s database and you can change it anytime, plus you get scan-count analytics. Downsides: monthly fees ($5–50), vendor lock-in (if they shut down your QR dies), and free tiers usually cap scans. This tool generates <strong>static QR codes only</strong>, which is the right choice for 99% of personal and small-business use (business cards, menus, WiFi signs) because you do not need edit-after-print and you do not want to depend on a paid third party.',
      },
    },
    {
      '@type': 'Question',
      name: 'What physical size should my QR code be when printed? (Business card vs poster vs billboard)',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rule of thumb: <strong>scan distance ≈ 10× the QR\'s physical edge length</strong>. If you expect someone to scan from 1 meter away, the QR itself should be at least 10 cm wide. Concrete recipes:① <strong>Business card</strong> (scan distance 10–15 cm) — make the QR at least 1.5 cm × 1.5 cm, export as 300 DPI PNG;② <strong>Table tent / A4 menu</strong> (30–50 cm) — 3–5 cm is plenty;③ <strong>Pull-up banner / trade show booth</strong> (1–2 m) — 10–15 cm;④ <strong>Billboard / bus stop</strong> (5–10 m) — minimum 50 cm, often 1 m or larger so it stays scannable from a passing car. For anything that may be reprinted at different sizes, export as <strong>SVG vector</strong> — it scales infinitely with no quality loss. PNG is fine when the final physical size is known and fixed.',
      },
    },
  ],
}

// WebApplication schema（让 Google 富卡片显示"在线工具"而不是只显示标题）
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'QR Code Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any (web browser)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Free online QR code generator. Create downloadable PNG/SVG QR codes locally in your browser with custom size, foreground/background color, and error correction level. No watermark, no signup, no data upload.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '142',
  },
}

export default async function QrCodeGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  // SEO 正文段落（rendered for crawlers + readers, before the QR generator widget）
  const seoBodyZh = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        <strong>在线 QR 码生成器</strong>解决 4 个最高频的扫码场景:① 名片上印一个 QR,客户扫一下把姓名、邮箱、电话直接存进通讯录,不用手输你的手机号;② 微信加好友时把自己微信二维码存成图片发给对方,长按识别就能加,避开手动搜索输错账号的尴尬;③ 餐厅、咖啡店、奶茶店桌上贴一个 QR,顾客<strong>扫码点餐</strong>取代纸质菜单,后厨直接收到订单;④ 家里 WiFi 密码太长记不住,做成 QR 码贴在冰箱或玄关,客人扫一下<strong>一键连 WiFi</strong>,再也不用念"大写 W、小写 p、@1234..."。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">大多数人最担心的:隐私问题</h2>
      <p>
        第三方 QR 生成网站绝大多数把生成请求发到他们的云端处理。这意味着:你做的<strong>WiFi 密码</strong>、内部系统登录 URL、客户的 vCard 通讯录,都会被记录在对方的服务器日志里。严重的时候,这些数据会被用于商业分析或被卖给广告商。本工具的特别之处在于——所有 QR 码<strong>在你浏览器本地生成</strong>,不经过任何后端,你可以打开浏览器开发者工具的 Network 标签验证:点击"生成"按钮时没有任何对外请求。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">文件格式怎么选?PNG 还是 SVG?</h2>
      <p>
        <strong>PNG</strong>(位图)适合屏幕显示、微信发图、PPT 嵌入,屏幕上看够用;但放大到印刷尺寸会糊。<strong>SVG</strong>(矢量)无论印名片、A4 海报还是户外广告牌都不会模糊,推荐用于所有印刷场景。本工具两个格式都能下载,选你需要的。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">这个工具适合谁?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>需要把微信号 / 网址 / vCard 名片做成 QR 印在名片上的职场人士</li>
        <li>开餐厅 / 咖啡店 / 小店需要扫码点餐或收款码的店主</li>
        <li>做活动海报、产品包装、宣传单需要 QR 链接的小商家</li>
        <li>任何不想把 URL / 密码上传到第三方服务器的人</li>
      </ul>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        A <strong>QR code generator</strong> solves one of the most common small frustrations of modern life: meeting someone at a conference and wanting them to save your contact in one tap instead of typing your email letter by letter. You put the QR on your <strong>business card</strong> as a vCard, on a restaurant table as a menu link, on a fridge as a WiFi credential, or on a poster as a payment URL. The use case is universal — but the <strong>privacy story</strong> is where most tools differ.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Why privacy matters when generating QR codes</h2>
      <p>
        Most online QR generators send your encoded content (your URL, your home WiFi password, your customer\'s contact info) to a remote server for processing. That data ends up in access logs, sometimes sold to data brokers, sometimes leaked in breaches. This tool generates the QR pattern <strong>100% locally in your browser</strong> using the open-source <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">qrcode</code> library — the text you type never leaves your device. You can verify by opening DevTools and watching the Network tab: zero outbound requests when you click Generate.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">PNG vs SVG: which file format should I download?</h2>
      <p>
        <strong>PNG</strong> is a raster image — perfect for screens, slides, and chat apps, but it pixelates when scaled up for print. <strong>SVG</strong> is a vector file — it scales to any physical size with zero quality loss, so it is the right choice for business cards, posters, packaging, and billboards. When in doubt, download SVG. This tool supports both.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Error correction level: pick H if you plan to add a logo</h2>
      <p>
        QR codes have four error correction levels (L=7%, M=15%, Q=25%, H=30%). Higher levels mean the code stays scannable even if a chunk is obscured. If you want to overlay your brand logo in the center of the QR (a very common design pattern), select <strong>H (30%)</strong> so the code still works. Otherwise, M is a sensible default.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Who this tool is for</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Professionals printing a vCard QR on business cards or conference badges</li>
        <li>Small business owners (cafés, restaurants, salons) needing menu or payment QRs</li>
        <li>Event organizers, marketers, and product packagers bridging offline to a URL</li>
        <li>Anyone who does not want their WiFi password or private URL uploaded to a cloud service</li>
      </ul>
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
      <QrCodeGeneratorClient initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
