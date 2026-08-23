import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? 'iPhone照片格式指南：HEIC vs JPG vs PNG' : 'iPhone Photo Format Guide: HEIC vs JPG vs PNG',
    description: lang === 'zh' ? '详解iPhone照片格式区别,如何选择最佳格式,以及如何转换HEIC到JPG。' : 'Detailed comparison of iPhone photo formats, how to choose the best format, and converting HEIC to JPG.',
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/blog/heic-iphone-photo-guide' : '/blog/heic-iphone-photo-guide'}`,
      languages: { 'zh-CN': '/zh/blog/heic-iphone-photo-guide', 'en-US': '/blog/heic-iphone-photo-guide', 'x-default': '/blog/heic-iphone-photo-guide' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">HEIC 是什么?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC (High Efficiency Image Container) 是苹果从iOS 11开始使用的照片格式。它使用HEIF编码,<strong>文件大小比JPG小50%</strong>,但画质相同。缺点是兼容性差,很多设备和网站不支持。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种格式对比</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>HEIC</strong>：体积小、画质高,但兼容性差</li>
          <li><strong>JPG</strong>：兼容性最好,文件较大,适合分享</li>
          <li><strong>PNG</strong>：无损压缩,文件最大,适合设计素材</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">何时需要转换?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          上传到社交媒体、发送给Android用户、在Windows上编辑、打印照片——这些场景都需要JPG格式。用HEIC转JPG工具可以批量转换。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何在iPhone上设置?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          设置→相机→格式→选择"最兼容"(JPG)或"高效"(HEIC)。如果你经常需要分享照片,建议选择JPG。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → 免费转换 HEIC 到 JPG
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What is HEIC?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC (High Efficiency Image Container) is the photo format Apple uses since iOS 11. It uses HEIF encoding, <strong>50% smaller than JPG</strong> with the same quality. The downside is poor compatibility.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Format Comparison</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>HEIC</strong>: small size, high quality, poor compatibility</li>
          <li><strong>JPG</strong>: best compatibility, larger files, ideal for sharing</li>
          <li><strong>PNG</strong>: lossless compression, largest files, ideal for design</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When Do You Need to Convert?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Uploading to social media, sending to Android users, editing on Windows, printing — all need JPG format. Use a HEIC to JPG converter for batch processing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">iPhone Settings</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Settings → Camera → Formats → Choose "Most Compatible" (JPG) or "High Efficiency" (HEIC). Choose JPG if you share photos frequently.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → Convert HEIC to JPG for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'iPhone照片格式指南' : 'iPhone Photo Format Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
