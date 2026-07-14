import type { Metadata } from 'next'
import QrCodeGeneratorClient from '../../qr-code-generator/qr-code-generator-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const data = {
    zh: {
      title: '免费QR码生成器 - 在线二维码制作工具',
      description: '免费在线QR码生成器,输入文本或网址快速生成可下载的PNG/SVG二维码。支持自定义尺寸、颜色、纠错级别,无水印无需注册。',
    },
    en: {
      title: 'Free QR Code Generator - Online QR Code Maker',
      description: 'Free online QR code generator. Create downloadable PNG/SVG QR codes from any text or URL. Custom size, color, error correction. No watermark, no signup.',
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
    canonical: 'https://tools-site-production.up.railway.app/zh/qr-code-generator',
      languages: {
        'zh-CN': '/zh/qr-code-generator',
        'en-US': '/qr-code-generator',
        'x-default': '/qr-code-generator',
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


const faqSchemas = {
  zh: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'QR码生成器免费吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '完全免费,无需注册。所有生成在浏览器本地完成,无水印,无次数限制。',
        },
      },
      {
        '@type': 'Question',
        name: '生成的二维码可以商用吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。二维码本身没有版权,生成的图像归您所有,可用于商业用途（产品包装、广告、名片等）。',
        },
      },
      {
        '@type': 'Question',
        name: '支持哪些内容类型？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持任意文本：网址URL、纯文本、邮箱、Wi-Fi名片、vCard联系人、地理位置坐标等。',
        },
      },
      {
        '@type': 'Question',
        name: '纠错级别是什么意思？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '纠错级别越高,二维码部分被遮挡（30%）仍可扫描。L=7%, M=15%, Q=25%, H=30%。推荐H（可放Logo）。',
        },
      },
      {
        '@type': 'Question',
        name: '可以下载什么格式？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持PNG（位图,适合大部分场景）和SVG（矢量,适合印刷和任意缩放）。',
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
        name: 'Is this QR code generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, completely free with no signup required. All generation happens in your browser, with no watermarks, no scan limits, and no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the generated QR codes commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. QR codes themselves have no copyright, and the generated images belong entirely to you. Use them freely for product packaging, advertising, business cards, or any other commercial purpose.',
        },
      },
      {
        '@type': 'Question',
        name: 'What content types are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any text content: URLs, plain text, email addresses, Wi-Fi credentials, vCard contact info, geographic coordinates, phone numbers, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does error correction level mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Higher error correction means the QR code remains scannable even if partially obscured. Levels: L=7%, M=15%, Q=25%, H=30%. We recommend H if you plan to add a logo in the center.',
        },
      },
      {
        '@type': 'Question',
        name: 'What file formats can I download?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PNG (raster, best for sharing on screen and most use cases) and SVG (vector, best for printing at any size without quality loss).',
        },
      },
    ],
  },
}

export default async function QrCodeGeneratorPage({
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
      <QrCodeGeneratorClient initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
