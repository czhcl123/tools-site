import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'HEIC vs JPEG vs PNG：应该用哪种图片格式？'
      : 'HEIC vs JPEG vs PNG Compared',
    description: lang === 'zh'
      ? 'HEIC、JPEG、PNG 三种图片格式的详细对比：文件大小、画质、适用场景，以及社交媒体平台的格式要求。'
      : 'Detailed comparison of HEIC, JPEG, and PNG: file size, quality, use cases, and social media platform format requirements.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/heic-vs-jpeg-png',
      languages: { 'en-US': '/blog/heic-vs-jpeg-png', 'x-default': '/blog/heic-vs-jpeg-png' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/heic-vs-jpeg-png' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种格式一览</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📸 <strong>HEIC</strong>：苹果设备默认格式。压缩率高，同等画质文件只有 JPEG 的一半大小。但兼容性较差。</p>
          <p>🖼️ <strong>JPEG</strong>：最通用的格式。几乎所有设备和平台都支持。适合照片，不适合需要透明背景的图片。</p>
          <p>🎨 <strong>PNG</strong>：支持透明背景和无损压缩。文件较大，适合 logo、图标、截图，不适合大量照片。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">文件大小对比</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          同一张照片（4000×3000像素）：
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>HEIC：约 1.5 MB</p>
          <p>JPEG（高质量）：约 3 MB</p>
          <p>PNG：约 8-12 MB</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC 在保持画质的同时，文件大小只有 JPEG 的一半。这就是苹果选择它的原因——节省存储空间。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么时候用哪个？</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📱 <strong>用 HEIC</strong>：iPhone 拍照、需要节省存储空间、只在苹果设备间分享</p>
          <p>🌐 <strong>用 JPEG</strong>：上传网站、发邮件、跨平台分享、社交媒体发布</p>
          <p>🎨 <strong>用 PNG</strong>：需要透明背景、截图、logo/图标、文字较多的图片</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">社交媒体格式要求</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>Instagram：JPEG 或 PNG，最大 30MB</p>
          <p>Facebook：JPEG、PNG、GIF，最大 10MB</p>
          <p>Twitter/X：JPEG、PNG、GIF，最大 5MB</p>
          <p>微信朋友圈：JPEG、PNG，自动压缩</p>
          <p>小红书：JPEG、PNG，建议 3:4 比例</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>注意</strong>：大多数社交平台不支持 HEIC，上传前需要转换为 JPEG。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">HEIC 转换方法</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>iPhone</strong>：设置 → 相机 → 格式 → 最兼容（自动存为 JPEG）</li>
          <li><strong>Mac</strong>：右键 → 导出 → 选择 JPEG 格式</li>
          <li><strong>在线工具</strong>：使用免费的 HEIC 转 JPG 转换器</li>
          <li><strong>Windows</strong>：安装 HEIF 扩展后可直接查看和转换</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: HEIC 会取代 JPEG 吗？</strong><br />
          A: 短期内不会。虽然 HEIC 更高效，但 JPEG 的兼容性太强了。网页、邮件、社交平台都以 JPEG 为主。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 转换 HEIC 到 JPEG 会损失画质吗？</strong><br />
          A: 会有轻微损失，因为 JPEG 是有损压缩。但高质量转换（90%+）肉眼几乎看不出区别。
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
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Formats at a Glance</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📸 <strong>HEIC</strong>: Apple's default format. High compression — files are half the size of JPEG at the same quality. Limited compatibility.</p>
          <p>🖼️ <strong>JPEG</strong>: The most universal format. Supported by virtually every device and platform. Great for photos, not for transparency.</p>
          <p>🎨 <strong>PNG</strong>: Supports transparency and lossless compression. Larger files — ideal for logos, icons, screenshots, not bulk photos.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">File Size Comparison</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same photo (4000×3000 pixels):
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>HEIC: ~1.5 MB</p>
          <p>JPEG (high quality): ~3 MB</p>
          <p>PNG: ~8-12 MB</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC preserves quality at half the file size of JPEG. That's why Apple chose it — to save storage.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When to Use Each</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📱 <strong>Use HEIC</strong>: iPhone photos, saving storage, sharing only within Apple ecosystem</p>
          <p>🌐 <strong>Use JPEG</strong>: Website uploads, email, cross-platform sharing, social media posts</p>
          <p>🎨 <strong>Use PNG</strong>: Transparency needed, screenshots, logos/icons, text-heavy images</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Social Media Format Requirements</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>Instagram: JPEG or PNG, max 30MB</p>
          <p>Facebook: JPEG, PNG, GIF, max 10MB</p>
          <p>Twitter/X: JPEG, PNG, GIF, max 5MB</p>
          <p>WeChat Moments: JPEG, PNG, auto-compressed</p>
          <p>Xiaohongshu: JPEG, PNG, 3:4 ratio recommended</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Note</strong>: Most social platforms don't support HEIC. Convert to JPEG before uploading.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Convert HEIC</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>iPhone</strong>: Settings → Camera → Formats → Most Compatible (auto-saves as JPEG)</li>
          <li><strong>Mac</strong>: Right-click → Export → Choose JPEG format</li>
          <li><strong>Online tools</strong>: Use a free HEIC to JPG converter</li>
          <li><strong>Windows</strong>: Install HEIF extension to view and convert directly</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Will HEIC replace JPEG?</strong><br />
          A: Not anytime soon. JPEG's compatibility is too strong. Websites, email, and social platforms all favor JPEG.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Does converting HEIC to JPEG lose quality?</strong><br />
          A: Slightly, since JPEG uses lossy compression. But high-quality conversions (90%+) are virtually indistinguishable.
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
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'HEIC vs JPEG vs PNG：应该用哪种图片格式？' : 'HEIC vs JPEG vs PNG: Which Image Format Should You Use?'}
      </h1>
      {content[lang]}
    </div>
  )
}
