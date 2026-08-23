import type { Metadata } from 'next'
import HeicToJpgClient from '../../heic-to-jpg/heic-to-jpg-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: 'HEIC 转 JPG - iPhone 照片批量转换',
    description: '免费在线 HEIC 转 JPG 工具:批量转换 iPhone 照片,30 秒处理 100 张。无需上传,本地处理保护隐私。',
    openGraph: {
      title: 'HEIC 转 JPG - iPhone 照片批量转换',
      description: '免费在线 HEIC 转 JPG 工具:批量转换 iPhone 照片,30 秒处理 100 张。',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/heic-to-jpg',
      languages: {
        'zh-CN': '/zh/heic-to-jpg',
        'en-US': '/heic-to-jpg',
        'x-default': '/heic-to-jpg',
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
      name: '什么是 HEIC 格式?为什么 iPhone 默认用它?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEIC(High Efficiency Image Container)是苹果从 iOS 11(2017 年)开始采用的默认照片格式,基于 HEIF(高效图像格式)编码。同样的画面质量下,HEIC 文件体积大约只有 JPG 的 50%,一张 iPhone 拍的 12MB 照片转成 HEIC 大概只剩 5-6MB。代价是兼容性:HEIC 不是一个公开标准,主要在 Apple 生态里跑得顺。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么在 Windows / Android / 上传到某些网站时 HEIC 打不开?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三个层面的原因:1 系统层面,Windows 10/11 早期版本默认不支持 HEIC;2 软件层面,老版本 Photoshop、Lightroom、部分网盘客户端都不认 HEIC;3 网站层面,小红书、微博、淘宝商品图、抖音上传等后端通常只接受 JPG/PNG。',
      },
    },
    {
      '@type': 'Question',
      name: '转换后的 JPG 会有损画质吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG 本身是有损格式,但人眼几乎看不出差别。本工具默认用 92% 质量转码,这对屏幕查看、社交分享、电商主图来说足够。如果你要印刷、做海报,建议保留原 HEIC 文件。',
      },
    },
    {
      '@type': 'Question',
      name: '这个工具会上传我的照片到云端吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会。转换全程在浏览器本地完成:使用 WebAssembly 库把 HEIC 解码、再编码成 JPG,所有像素计算都在你的设备上跑,你的照片从来没有离开过浏览器。',
      },
    },
    {
      '@type': 'Question',
      name: '批量转换怎么操作?一次能转多少张?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '操作:1 点页面上的拖拽区,或者直接把一整个文件夹拖进去;2 顶部下拉选择 JPG 质量(100/92/85/75);3 点"转换"按钮,所有 HEIC 会按顺序转成 JPG,每张可单独下载;4 超过 1 张时会出现"下载全部(ZIP)"按钮。实测一次批量 200 张以内流畅。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>苹果手机拍的照片默认是 HEIC 格式，很多网站和软件打不开。本工具在浏览器里把 HEIC 转成通用的 JPG，可选质量，无需上传到服务器。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持功能</h3>
    <ul className="space-y-1 text-sm">
      <li>🖼️ 批量转换（拖拽文件夹）</li>
      <li>⚡ 30 秒处理 100 张</li>
      <li>🔒 本地处理，不上传</li>
      <li>📦 ZIP 一键打包下载</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有计算在浏览器本地完成，数据不上传。</p>
  </div>
)

export default async function HeicToJpgPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/heic-to-jpg" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">HEIC 转 JPG</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <HeicToJpgClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/json-formatter" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔧 JSON 格式化' : '🔧 JSON Formatter'}</a></li>
                  <li><a href="/zh/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                  <li><a href="/zh/invoice-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📄 发票生成器' : '📄 Invoice Generator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
