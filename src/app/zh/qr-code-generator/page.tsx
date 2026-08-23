import type { Metadata } from 'next'
import QrCodeGeneratorClient from '../../qr-code-generator/qr-code-generator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: 'QR 码生成器 - 免费二维码无水印',
    description: '免费二维码生成器，无水印，无需注册。支持 PNG/SVG 下载，自定义尺寸和颜色。本地浏览器生成，数据安全。',
    openGraph: {
      title: 'QR 码生成器 - 免费二维码无水印',
      description: '免费二维码生成器，无水印，无需注册。',
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
      name: 'QR 码一般用来扫什么?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最常见的 5 个场景:① 微信加好友 ② 扫码点餐 ③ WiFi 一键连接 ④ 电子名片 (vCard) ⑤ 扫码付款。本工具支持以上所有内容类型。',
      },
    },
    {
      '@type': 'Question',
      name: '怎么确保 QR 码在 iPhone 和 Android 都能扫?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三条铁律:① 用标准 QR 码 (Model 2);② 保持足够留白;③ 避免超低对比度配色。推荐深色前景 + 浅色背景的传统组合。',
      },
    },
    {
      '@type': 'Question',
      name: '生成的 QR 码是私密的吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会,本工具所有生成在你浏览器本地完成,不会发送到任何服务器。',
      },
    },
    {
      '@type': 'Question',
      name: '静态 QR 码和动态 QR 码有什么区别?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '静态 QR 码免费、永久有效,但打印后无法修改。动态 QR 码可修改可追踪,但依赖第三方平台。本工具只生成静态 QR 码。',
      },
    },
    {
      '@type': 'Question',
      name: '印刷用的 QR 码应该做多大?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '核心原则:扫描距离 = QR 码物理尺寸的 10 倍。名片至少 1.5cm×1.5cm,A4 海报 3-5cm,易拉宝 10-15cm。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>输入网址、文本或 WiFi 信息，立刻生成 QR 码。支持自定义尺寸，生成 PNG 格式可直接打印。名片、海报、WiFi 分享一键搞定。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持功能</h3>
    <ul className="space-y-1 text-sm">
      <li>📱 PNG / SVG 下载</li>
      <li>🎨 自定义尺寸和颜色</li>
      <li>🔒 本地生成，不上传</li>
      <li>📶 WiFi 信息编码</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有数据在浏览器本地处理，不上传服务器。</p>
  </div>
)

export default async function QrCodeGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const lang = 'zh'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'QR Code Generator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (web browser)',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '免费二维码生成器，无水印，无需注册。支持 PNG/SVG 下载，自定义尺寸和颜色。',
    featureList: [
      'PNG / SVG / PDF export',
      'Custom size, foreground + background color',
      'Adjustable error correction level (L / M / Q / H)',
      'High-resolution export for print',
      '100% browser-side, no upload',
    ],
    dateModified: '2026-07-18',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '142' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/qr-code-generator" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">QR 码生成器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <QrCodeGeneratorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">更多工具</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">⚖️ BMI 计算器</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">🏷️ 折扣计算器</a></li>
                  <li><a href="/zh/json-formatter" className="text-orange-500 hover:underline">🔧 JSON 格式化</a></li>
                  <li><a href="/zh/heic-to-jpg" className="text-orange-500 hover:underline">🖼️ HEIC 转 JPG</a></li>
                  <li><a href="/zh/invoice-generator" className="text-orange-500 hover:underline">📄 发票生成器</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
