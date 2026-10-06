import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'QR 码尺寸与容错：保证扫码成功'
      : 'QR Code Size and Error Correction: Scans That Work',
    description: lang === 'zh'
      ? 'QR 码多大才能扫出来？印刷最小尺寸、容错等级 L/M/Q/H 怎么选、贴在曲面和户外的实用技巧。'
      : 'How big a QR code must be, which error correction level to pick, and practical tips for curved surfaces, print, and outdoor use.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/qr-code-size-error-correction',
      languages: { 'en-US': '/blog/qr-code-size-error-correction', 'x-default': '/blog/qr-code-size-error-correction' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/qr-code-size-error-correction' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the minimum QR code size for print?", "acceptedAnswer": {"@type": "Answer", "text": "Aim for at least 2 cm (0.8 in) square for close-range scanning, and 5 cm or more for distances beyond an arm's length. Rule of thumb: 1 mm per module."}}, {"@type": "Question", "name": "What error correction level should I use?", "acceptedAnswer": {"@type": "Answer", "text": "Level M is the default balance — it recovers about 15% damage and keeps codes compact. Use H (30% recovery) when you add a logo or print on curved surfaces."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">扫不出来的码，多半是尺寸和对比度问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR 码的识别原理是摄像头解析黑白模块的网格。模块太小、颜色太浅、反光太强，摄像头就抓不到清晰的边界。大多数「扫不出来」的情况不是码坏了，而是尺寸不够或者对比度不足。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">尺寸怎么定：一个模块 1 毫米</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          实用规则：<strong>每个模块（小方块）至少 1 毫米</strong>。一个 25×25 模块的 QR 码，最小 25 毫米见方。按扫描距离估算：贴在桌面上的菜单，2–3 厘米够用；立牌、海报要 5 厘米以上；户外大屏广告按观看距离放大，每增加 1 米距离，码的边长至少加 1 厘米。
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📱 <strong>近距离</strong>（手持，10–20cm）：最小 2×2 厘米</p>
          <p>📋 <strong>桌面/名片</strong>（30–50cm）：3–4 厘米</p>
          <p>🖼️ <strong>海报/立牌</strong>（1 米以上）：5 厘米起步</p>
          <p>📺 <strong>户外/大屏</strong>：按距离每米加 1 厘米边长</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">容错等级 L/M/Q/H 怎么选</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR 码自带纠错能力：即使部分区域污损、折叠甚至被 logo 盖住，仍能还原数据。四个等级对应不同的容损比例：
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🟢 <strong>L</strong>：容损 7%，码最小，适合干净的数字屏幕</p>
          <p>🟡 <strong>M</strong>：容损 15%，<strong>默认推荐</strong>，尺寸和可靠性的平衡点</p>
          <p>🟠 <strong>Q</strong>：容损 25%，印刷品、可能被轻度磨损的场景</p>
          <p>🔴 <strong>H</strong>：容损 30%，中间放 logo、曲面贴附、户外环境</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          注意：容错等级越高，同样的数据码的模块越多、整体尺寸越大。数据本身很长（比如一整篇文章的链接）时，别一上来就用 H，先缩短链接。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">印刷和材质的四个坑</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>对比度</strong>：深色码 + 浅色底，黑白最佳；避免红底黑字（手机摄像头对红色不敏感）</li>
          <li><strong>留白</strong>：码四周留至少 4 个模块宽度的空白区（静区），不然定位图案识别失败</li>
          <li><strong>反光材质</strong>：覆膜、金属、塑料表面会反光，选哑光处理，或把码放在不直对光源的位置</li>
          <li><strong>曲面</strong>：贴在杯子、瓶身上，模块会被弧度压缩。用 H 级容错 + 尽量贴在弧度最缓的一面</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">生成前的最后检查</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          生成后别急着投放：先用两台不同的手机（iPhone + Android）在实际使用距离扫一遍，一台过不了就换材质或加大尺寸。批量印刷前先打样，这是最便宜的保险。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">名片上的 QR 码最小多大？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">2×2 厘米是手持扫描的下限，3×3 厘米更稳妥。名片面积有限时，优先保证对比度和留白。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">中间能放 logo 吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">可以，但必须用 H 级容错，且 logo 不要超过码面积的 20%。生成时预留 logo 位置，别后期硬叠。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → 生成 QR 码前先设置好尺寸和容错
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Most Failed Scans Are Size and Contrast Problems</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A phone camera reads a QR code by resolving a grid of dark and light modules. When modules are too small, the colors too faint, or the surface too reflective, the camera can't find clean edges. Most codes that "won't scan" are perfectly valid — just too small or too low-contrast.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Sizing: One Millimeter per Module</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The working rule: <strong>each module (little square) needs at least 1 mm</strong>. A 25×25-module code then measures 25 mm across. For distance, scale up: a table menu needs 2–3 cm, standing signs and posters 5 cm or more, and outdoor boards roughly 1 cm of extra edge length per meter of viewing distance.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📱 <strong>Handheld</strong> (10–20 cm): 2×2 cm minimum</p>
          <p>📋 <strong>Tabletop / business card</strong> (30–50 cm): 3–4 cm</p>
          <p>🖼️ <strong>Poster / sign</strong> (1 m+): 5 cm and up</p>
          <p>📺 <strong>Outdoor / large screen</strong>: add ~1 cm of edge length per meter of distance</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Choosing an Error Correction Level</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR codes rebuild damaged data automatically — part of the pattern can be smudged, folded, or covered by a logo and still scan. The four levels trade size for resilience:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🟢 <strong>L</strong>: recovers 7%, smallest code, clean digital screens</p>
          <p>🟡 <strong>M</strong>: recovers 15%, <strong>the default recommendation</strong> — best balance of size and reliability</p>
          <p>🟠 <strong>Q</strong>: recovers 25%, print that might scuff or fold</p>
          <p>🔴 <strong>H</strong>: recovers 30%, logos in the center, curved surfaces, outdoor conditions</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Higher levels mean more modules and a bigger code for the same data. If the payload is long — say a full article URL — shorten the link before jumping to H.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Printing and Material Traps</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Contrast</strong>: dark code on a light background; black on white is safest — avoid black on red, phone cameras handle red poorly</li>
          <li><strong>Quiet zone</strong>: keep at least four modules of blank margin around the code or the finder patterns won't lock</li>
          <li><strong>Glare</strong>: laminate, metal, and glossy plastic reflect light — pick matte finishes and angle codes away from direct light</li>
          <li><strong>Curves</strong>: on cups and bottles the grid distorts — use level H and place the code on the flattest side of the curve</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Pre-Print Check</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before anything goes live, scan the code with two different phones — an iPhone and an Android — at the real usage distance. If either fails, change the material or increase the size. For bulk print runs, order a proof first; it's the cheapest insurance you'll ever buy.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Smallest QR code for a business card?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">2×2 cm is the handheld floor; 3×3 cm is safer. When card space is tight, protect contrast and the quiet zone first.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Can I put a logo in the center?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes, with level H error correction and a logo covering no more than about 20% of the code area. Build the logo into the generation step rather than pasting it on afterward.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → Set size and error correction before you generate
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'QR 码尺寸与容错：保证扫码成功' : 'QR Code Size and Error Correction: Scans That Work'}
      </h1>
      {content[lang]}
    </div>
  )
}
