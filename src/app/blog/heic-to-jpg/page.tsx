import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'HEIC 转 JPG 完全指南 — 苹果照片格式转换'
      : 'HEIC to JPG Converter Guide — Convert Apple Photos',
    description: lang === 'zh'
      ? 'HEIC 转 JPG 完整教程:什么是 HEIC 格式、为什么需要转换、在线免费转换方法和注意事项。'
      : 'What is HEIC? Why convert HEIC to JPG? Free online conversion method, quality settings, and everything you need to know.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/heic-to-jpg',
      languages: { 'en-US': '/blog/heic-to-jpg', 'x-default': '/blog/heic-to-jpg' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是 HEIC 格式?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC（High Efficiency Image Container）是苹果从 iOS 11 / macOS High Sierra 开始使用的照片格式。它基于 HEIF 标准,用 HEVC (H.265) 编码。优势:同画质下文件比 JPG 小 50%,支持透明度和连拍。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么需要转成 JPG?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>兼容性</strong>:很多网站、社交平台、打印店不支持 HEIC。<strong>Windows</strong>:默认无法打开 HEIC(需装插件)。<strong>分享</strong>:发给用 Android 的朋友,对方可能看不了。<strong>编辑</strong>:部分修图软件不支持 HEIC 直接编辑。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">在线转换方法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          无需安装软件。打开在线转换工具,上传 HEIC 文件,选择输出质量,点击转换,下载 JPG。整个过程在浏览器本地完成,照片不会上传到服务器。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">转换质量设置</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <p><strong>高质量(90%+)</strong>:几乎无损,适合打印和存档。文件稍大。</p>
          <p><strong>中等质量(70-85%)</strong>:日常分享最佳平衡点。肉眼几乎看不出区别。</p>
          <p><strong>低质量(50-65%)</strong>:文件最小,适合网页和社交发布。放大看会有压缩痕迹。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">HEIC vs JPG vs PNG</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>HEIC</strong>:体积最小,画质最好,但兼容性差(苹果生态)。<strong>JPG</strong>:万能格式,兼容所有平台,有损压缩。<strong>PNG</strong>:无损压缩,支持透明,但文件大。日常用 JPG,需要透明背景用 PNG,苹果设备内部用 HEIC。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → 立即转换 HEIC 为 JPG
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is the HEIC Format?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC (High Efficiency Image Container) is the photo format Apple uses since iOS 11 / macOS High Sierra. Based on HEIF, encoded with HEVC (H.265). Benefits: same quality at 50% smaller file size than JPG, supports transparency and burst shots.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Convert to JPG?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Compatibility</strong>: many websites, social platforms, and print shops don't support HEIC. <strong>Windows</strong>: can't open HEIC by default (needs a plugin). <strong>Sharing</strong>: Android users may not be able to view HEIC files. <strong>Editing</strong>: some photo editors don't support HEIC directly.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Convert Online</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          No software needed. Open an online converter, upload your HEIC file, choose output quality, click convert, download JPG. The entire process happens locally in your browser — your photos are never uploaded to a server.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Conversion Quality Settings</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <p><strong>High quality (90%+)</strong>: nearly lossless, best for printing and archiving. Slightly larger files.</p>
          <p><strong>Medium quality (70-85%)</strong>: best balance for everyday sharing. Nearly indistinguishable to the naked eye.</p>
          <p><strong>Low quality (50-65%)</strong>: smallest files, good for web and social media posting. Compression artifacts visible when zoomed.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">HEIC vs JPG vs PNG</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>HEIC</strong>: smallest files, best quality, but limited compatibility (Apple ecosystem). <strong>JPG</strong>: universal format, works everywhere, lossy compression. <strong>PNG</strong>: lossless, supports transparency, but larger files. Use JPG for daily use, PNG when you need transparency, HEIC within Apple devices.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → Convert HEIC to JPG Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'HEIC 转 JPG 完全指南' : 'HEIC to JPG Converter Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
