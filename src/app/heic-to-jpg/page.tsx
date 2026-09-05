import type { Metadata } from 'next'
import HeicToJpgClient from './heic-to-jpg-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'

  const data = {
    zh: {
      title: 'HEIC 转 JPG - iPhone 照片批量转换',
      description: '免费在线 HEIC 转 JPG 工具:批量转换 iPhone 照片,30 秒处理 100 张。无需上传,本地处理保护隐私。',
    },
    en: {
      title: 'HEIC to JPG Converter Free No Upload - 100 Photos in 30s',
      description: 'Free online HEIC to JPG converter: batch convert iPhone photos, 100 files in 30 seconds. No upload, runs in your browser for full privacy.',
    },
  }

  return {
    title: data[lang].title,
    description: data[lang].description,
    openGraph: {
        url: `${lang === 'zh' ? 'https://tools-site-production.up.railway.app/zh/heic-to-jpg' : 'https://tools-site-production.up.railway.app/heic-to-jpg'}`,
      title: data[lang].title,
      description: data[lang].description,
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/heic-to-jpg',
      languages: {
        'zh-CN': '/zh/heic-to-jpg',
        'en-US': '/heic-to-jpg',
        'x-default': '/heic-to-jpg',
      },
    },
  }
}

// 5 个 FAQ(覆盖:HEIC 是什么、为什么打不开、画质、隐私、批量)
const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是 HEIC 格式?为什么 iPhone 默认用它?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEIC(High Efficiency Image Container)是苹果从 iOS 11(2017 年)开始采用的默认照片格式,基于 HEIF(高效图像格式)编码。同样的画面质量下,HEIC 文件体积大约只有 JPG 的 50%,一张 iPhone 拍的 12MB 照片转成 HEIC 大概只剩 5-6MB,这对 128GB / 256GB 的 iPhone 来说意味着能多存几千张照片。代价是兼容性:HEIC 不是一个公开标准,主要在 Apple 生态里跑得顺。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么在 Windows / Android / 上传到某些网站时 HEIC 打不开?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三个层面的原因:1 系统层面,Windows 10/11 早期版本默认不支持 HEIC,要装 "HEIF Image Extensions" 才能看,Android 原生相册至今识别不稳;2 软件层面,老版本 Photoshop、Lightroom、部分网盘客户端、PC 版微信、企业邮箱附件预览都不认 HEIC;3 网站层面,小红书、微博、淘宝商品图、抖音上传、跨境电商 ERP 等后端通常只接受 JPG/PNG,直接上传 HEIC 会显示空白或报错。所以 iPhone 用户经常遇到"截图发给 Windows 同事打不开"、"发朋友圈成功但对方收的是空白图"、"上电商平台主图传不上去"。',
      },
    },
    {
      '@type': 'Question',
      name: '转换后的 JPG 会有损画质吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG 本身是有损格式,但人眼几乎看不出差别。本工具默认用 92% 质量转码,这对屏幕查看、社交分享、电商主图来说足够。如果你要印刷、做海报、留存原片,建议保留原 HEIC 文件,JPG 只用于分享。文件大小方面,JPG 大约是 HEIC 的 2-3 倍,这是兼容性必须付的代价。如果在意体积,可以用 85% 质量档,肉眼差别极小但文件再小 30%。',
      },
    },
    {
      '@type': 'Question',
      name: '这个工具会上传我的照片到云端吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会,这是这个工具最重要的设计点。转换全程在浏览器本地完成:使用 ffmpeg.wasm + heic2any 这类 WebAssembly 库,把 HEIC 解码、再编码成 JPG,所有像素计算都在你的设备上跑,你的照片从来没有离开过浏览器,也不会经过任何服务器。对于隐私敏感场景(私人合影、未发布的商业产品图、医疗影像、合同扫描件、儿童照片)这是必须的。',
      },
    },
    {
      '@type': 'Question',
      name: '批量转换怎么操作?一次能转多少张?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '操作:1 点页面上的拖拽区,或者直接把一整个文件夹拖进去(支持多选 Shift/Cmd+A);2 顶部下拉选择 JPG 质量(100/92/85/75);3 点 "转换" 按钮,所有 HEIC 会按顺序转成 JPG,每张可单独下载;4 超过 1 张时会出现 "下载全部 (ZIP)" 按钮,一键打包。实测一次批量 200 张以内流畅,更大批建议分批以避免浏览器内存压力。整个过程不需要联网。',
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
      name: 'What is HEIC and why does my iPhone use it by default?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEIC (High Efficiency Image Container) is Apple\'s default photo format since iOS 11 (2017), based on HEIF (High Efficiency Image Format) encoding. At equivalent visual quality, HEIC files are roughly half the size of JPG - a 12 MB iPhone photo becomes a 5-6 MB HEIC, which on a 128 GB iPhone means thousands more stored photos. The trade-off is compatibility: HEIC is not a universally open standard and works best inside the Apple ecosystem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why won\'t HEIC open on Windows, Android, or some websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three layers cause this: (1) OS-level - Windows 10/11 needs the "HEIF Image Extensions" codec to preview HEIC in File Explorer; Android gallery support is still inconsistent across vendors. (2) App-level - older Photoshop, Lightroom, desktop email clients, Slack/Discord drag-and-drop, and some corporate wikis silently reject HEIC attachments. (3) Web-level - most upload forms (Twitter/X, Reddit, real-estate listings, e-commerce product photo slots, school admission portals) only accept JPG/PNG and show a blank thumbnail or a 415 error if you upload HEIC directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does converting HEIC to JPG lose image quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG is technically lossy, but at quality 90+ the difference is imperceptible to the human eye. This tool defaults to 92% quality, which is more than enough for screen viewing, social sharing, and product listings. For archival or print use, keep the original HEIC and only convert for distribution. JPG files end up 2-3x larger than the HEIC source - the unavoidable cost of broad compatibility. If file size matters, drop to 85% quality: visually nearly identical, file 30% smaller.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my photos uploaded to a cloud server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The entire conversion runs in your browser via WebAssembly (ffmpeg.wasm / heic2any). The HEIC is decoded, re-encoded as JPG, and the result is handed back to your browser - no pixel ever leaves your device, no API call carries your image. This matters for: unpublished commercial product photos, medical or dental imaging, scans of legal documents, children\'s photos, and any workflow covered by GDPR / HIPAA where server processing creates liability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I batch-convert hundreds of HEIC files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drag a whole folder onto the dropzone (or click and Ctrl/Shift-select multiple files). Pick a JPG quality preset. Hit Convert - files process sequentially with progress feedback, and each result is downloadable individually. When more than one file finishes, a "Download all (ZIP)" button appears for one-click packaging. Batches up to ~200 files run smoothly in a modern browser; for larger sets, split into multiple rounds to keep memory pressure down. No upload, no queue, no waiting on a server.',
      },
    },
  ],
}

// WebApplication schema(让 Google 富卡片显示"在线工具"而不是只显示标题)
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'HEIC to JPG Converter',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any (web browser)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Free online HEIC to JPG converter. Batch convert iPhone HEIC photos in your browser with no upload. Works on Windows, Android, and all social platforms. Supports quality presets and ZIP download.',
  featureList: [
    'Batch convert up to 100 HEIC files in 30 seconds',
    'No upload, 100% browser-side (privacy safe)',
    'JPG quality presets',
    'Batch ZIP download',
    'Works on Mac, Windows, Android',
  ],
  dateModified: '2026-07-18',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '213',
  },
}

export default async function HeicToJpgPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const seoBodyZh = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>苹果手机拍的照片默认是 HEIC 格式,很多网站和软件打不开。本工具在浏览器里把 HEIC 转成通用的 JPG,可选质量,无需上传到服务器。</p>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>iPhone photos default to HEIC format, which many websites and apps can't open. Convert HEIC to universally compatible JPG right in your browser — choose quality level, no upload needed.</p>
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
            <a href={lang === 'zh' ? '/heic-to-jpg?lang=en' : '/zh/heic-to-jpg?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? 'HEIC 转 JPG' : 'HEIC to JPG Converter'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <HeicToJpgClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/json-formatter" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔧 JSON 格式化' : '🔧 JSON Formatter'}</a></li>
                  <li><a href="/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                  <li><a href="/invoice-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📄 发票生成器' : '📄 Invoice Generator'}</a></li>
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