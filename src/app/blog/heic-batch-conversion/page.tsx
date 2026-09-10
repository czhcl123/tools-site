import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '批量转换 HEIC 格式完全指南：摄影师和内容创作者如何高效处理 HEIC 文件，保留 EXIF 元数据，选择合适的质量设置，建立标准化的文件管理流程。' : 'en'
  return {
    title: lang === 'zh'
      ? '批量转换 HEIC：摄影师工作流指南'
      : 'Batch Convert HEIC: Workflow for Photographers',
    description: lang === 'zh'
      ? '摄影师如何高效批量转换 HEIC 文件,保留 EXIF 数据,选择合适的质量设置。'
      : 'How photographers and content creators efficiently batch convert HEIC files while preserving EXIF data and choosing optimal quality settings.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/heic-batch-conversion',
      languages: { 'en-US': '/blog/heic-batch-conversion', 'x-default': '/blog/heic-batch-conversion' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/heic-batch-conversion' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How to batch convert?", "acceptedAnswer": {"@type": "Answer", "text": "Use online tool, organize by project folders."}}, {"@type": "Question", "name": "EXIF preserved?", "acceptedAnswer": {"@type": "Answer", "text": "Depends on tool. Check before committing."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么摄影师会遇到 HEIC 文件?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          iPhone 从 iOS 11 开始默认使用 HEIC 格式拍照，文件体积只有 JPEG 的一半但画质相当。但客户、网站和很多软件仍不支持 HEIC，所以摄影师需要批量转换为 JPEG 或 PNG 才能交付和发布。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">批量转换工作流</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          标准流程：导入照片 → 筛选 → 批量转换 → 后期处理 → 交付。在转换阶段，使用在线 HEIC 转 JPG 工具可以一次性处理多张照片。建议按项目或日期创建子文件夹，转换后保持相同的文件夹结构。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">保留 EXIF 元数据</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          EXIF 数据包含拍摄参数（光圈、快门、ISO）、GPS 位置和时间戳。转换时确认工具保留这些信息——对作品集归档、版权证明和后期修图都很重要。有些在线工具会剥离 EXIF，选择时注意检查。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">质量设置：打印 vs 网页</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>打印用途</strong>：选择最高质量（95–100%），文件大但细节完整。<strong>网页发布</strong>：80–85% 质量即可，文件体积大幅缩小但肉眼几乎无差别。<strong>社交媒体</strong>：70–80% 足够，平台会再次压缩。根据用途选择合适质量。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">文件管理最佳实践</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>命名规范</strong>：日期_项目名_序号（如 20260910_wedding_001.jpg）</li>
          <li><strong>备份原则</strong>：转换前保留原始 HEIC 文件，至少保存 3 个月</li>
          <li><strong>文件夹结构</strong>：按年/月/项目分层，方便日后查找</li>
          <li><strong>批量重命名</strong>：转换后统一重命名，保持一致性</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">如何批量转换?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">使用在线工具一次选择多张照片，按项目创建文件夹保持组织。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">EXIF 数据保留吗?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">取决于工具，选择时检查是否保留拍摄参数和 GPS。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → 批量转换 HEIC 照片
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Photographers Encounter HEIC Files</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          iPhones have defaulted to HEIC since iOS 11 — files are half the size of JPEG with comparable quality. But clients, websites, and many software tools still don't support HEIC, so photographers need to batch convert to JPEG or PNG for delivery and publishing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Batch Conversion Workflow</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Standard workflow: import → select → batch convert → post-process → deliver. During conversion, use an online HEIC to JPG tool to process multiple photos at once. Create subfolders by project or date, and maintain the same folder structure after conversion.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Preserving EXIF Metadata</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          EXIF data contains shooting parameters (aperture, shutter speed, ISO), GPS location, and timestamps. Confirm your conversion tool preserves this information — it's important for portfolio archiving, copyright proof, and post-processing. Some online tools strip EXIF, so check before committing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Quality Settings: Print vs Web</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Print</strong>: Use maximum quality (95–100%) — larger files but complete detail. <strong>Web publishing</strong>: 80–85% quality is fine — dramatically smaller files with barely visible differences. <strong>Social media</strong>: 70–80% is enough — platforms compress further anyway.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">File Management Best Practices</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Naming convention</strong> — date_project_sequence (e.g., 20260910_wedding_001.jpg)</li>
          <li><strong>Backup rule</strong> — keep original HEIC files for at least 3 months after conversion</li>
          <li><strong>Folder structure</strong> — organize by year/month/project for easy retrieval</li>
          <li><strong>Batch rename</strong> — standardize filenames after conversion for consistency</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How to batch convert HEIC?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Use an online tool to upload multiple photos. Organize by project folders.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Is EXIF data preserved?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Depends on the tool. Check if shooting parameters and GPS are retained.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → Batch Convert HEIC Photos Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '批量转换 HEIC：摄影师工作流指南' : 'Batch Convert HEIC: Workflow for Photographers'}
      </h1>
      {content[lang]}
    </div>
  )
}
