import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'HEIC 隐私与安全：转换时会泄露什么'
      : 'HEIC Privacy: What Your Photos Reveal When Converted',
    description: lang === 'zh'
      ? 'HEIC 照片里藏着哪些位置和设备信息？转换成 JPG 时元数据会被抹掉吗？分享照片前的隐私检查清单。'
      : 'What location and device data hides inside HEIC files, whether conversion strips it, and a pre-share privacy checklist for your photos.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/heic-privacy-metadata',
      languages: { 'en-US': '/blog/heic-privacy-metadata', 'x-default': '/blog/heic-privacy-metadata' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/heic-privacy-metadata' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do HEIC photos contain location data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if Location Services is enabled for the camera. HEIC files embed EXIF metadata including GPS coordinates, capture time, and device model."}}, {"@type": "Question", "name": "Does converting HEIC to JPG remove metadata?", "acceptedAnswer": {"@type": "Answer", "text": "Basic converters usually strip EXIF in the process, but not always by design — some preserve it. For privacy-sensitive shares, strip metadata explicitly or disable location access for the camera."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">一张照片能暴露多少信息</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          HEIC 和 JPG 一样，文件里都嵌着 EXIF 元数据：拍摄时间、GPS 坐标、设备型号、镜头参数、甚至音量和海拔。iPhone 默认开启相机定位服务，意味着你在家门口拍的自拍，发出去时可能带着精确到几米的住址坐标。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见的敏感元数据</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📍 <strong>GPS 经纬度</strong>：精确坐标，能定位到具体建筑物</p>
          <p>🗓️ <strong>拍摄时间戳</strong>：精确到秒，能推断你的作息规律</p>
          <p>📱 <strong>设备型号</strong>：iPhone 17 Pro 之类的型号暴露你的消费水平</p>
          <p>🖼️ <strong>原图分辨率</strong>：间接暴露是否专业设备拍摄</p>
          <p>🔋 <strong>序列号等</strong>：极少数情况下可关联到具体设备</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          个人信息安全的常见事故：晒工牌照片带公司 GPS、晒娃的校服照带拍摄时间（推断上下学时段）、二手交易平台的照片带家庭坐标。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">转成 JPG 会抹掉这些信息吗</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不一定。很多转换工具为了保留「拍摄信息」的完整性，会连 EXIF 一起带过去——JPG 的 EXIF 支持比 HEIC 还成熟。把「转换」当成「脱敏」是最常见的误区。正确的做法是把两步分开：<strong>转换格式是为了兼容，去除元数据是为了隐私</strong>，需要后者时明确选择「移除位置信息」或用专门的脱敏工具。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">分享前的隐私检查清单</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>iOS：照片 → 打开单张 →「调整」→ 可单独关闭位置信息</li>
          <li>iOS：设置 → 隐私 → 定位服务 → 相机 → 改为「永不」（代价是照片永久没有位置）</li>
          <li>发社交平台前用预览功能确认：微博、小红书等平台会自动读取并显示位置标签</li>
          <li>重要文件外发前，用元数据查看器检查一遍——Windows 和 macOS 都能直接看属性</li>
          <li>批量处理时，转换工具勾选「移除 EXIF」选项</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">关掉定位后拍的照片还有元数据吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">有，但没有 GPS 字段。拍摄时间、设备型号这些仍然存在，只是坐标没了。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">网传的「照片定位泄露住址」是真的吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">是真的。带 GPS 的照片发到任何平台，只要平台没有主动剥离元数据，懂技术的人都能读出来。这不是理论风险。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → 转换前检查选项，兼容和隐私一次搞定
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Much Can One Photo Expose?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Like JPG, HEIC files embed EXIF metadata: capture time, GPS coordinates, device model, lens settings, even altitude. With Location Services enabled for the camera — the iPhone default — a selfie at your front door can ship with coordinates accurate to a few meters of your address.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Metadata That Actually Hurts</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📍 <strong>GPS coordinates</strong>: precise enough to identify a specific building</p>
          <p>🗓️ <strong>Timestamps</strong>: down to the second — enough to infer daily routines</p>
          <p>📱 <strong>Device model</strong>: an "iPhone 17 Pro" tag says something about spending habits</p>
          <p>🖼️ <strong>Original resolution</strong>: hints at whether a pro camera was used</p>
          <p>🔋 <strong>Serial details</strong>: in rare cases traceable to a specific device</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Real-world incidents follow a pattern: work badges photographed with office GPS, school-uniform photos of kids with timestamps that reveal pickup routines, secondhand-listing photos carrying home coordinates.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Does Converting to JPG Strip All That?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not necessarily. Many converters carry EXIF across deliberately — JPG's metadata support is even more mature than HEIC's. Treating "convert" as "sanitize" is the classic mistake. Keep the two jobs separate: <strong>conversion solves compatibility, metadata removal solves privacy</strong>. When you need the second, choose an explicit "remove location" option or use a dedicated scrubbing tool.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Pre-Share Privacy Checklist</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>iOS: Photos → open an image → "Adjust" lets you disable location per photo</li>
          <li>iOS: Settings → Privacy → Location Services → Camera → set to "Never" (the trade-off: photos permanently lose location)</li>
          <li>Check the preview before posting — platforms like Weibo and Xiaohongshu read and display location tags automatically</li>
          <li>Inspect metadata before sending important files externally; both Windows and macOS show it in file properties</li>
          <li>For batch jobs, tick the "remove EXIF" option in your converter</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Do photos taken with location off still have metadata?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes, minus the GPS field. Capture time and device model remain — only the coordinates disappear.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Is the "photos reveal your home" warning real?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes. Post a GPS-tagged photo anywhere that doesn't actively strip metadata, and anyone technical can read it back. It is not a theoretical risk.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/heic-to-jpg" className="text-orange-600 font-medium hover:underline">
            → Check the options before converting — compatibility and privacy in one pass
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'HEIC 隐私与安全：转换时会泄露什么' : 'HEIC Privacy: What Your Photos Reveal When Converted'}
      </h1>
      {content[lang]}
    </div>
  )
}
