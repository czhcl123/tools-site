import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'QR 码生成器使用指南 — 如何生成二维码'
      : 'QR Code Generator Guide',
    description: lang === 'zh'
      ? '教你用 QR 码生成器创建二维码,支持网址、文本、WiFi、联系方式,含使用技巧和场景。'
      : 'Learn how to generate QR codes for URLs, text, WiFi, and contacts. Includes tips, best practices, and real-world use cases.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/qr-code-generator',
      languages: { 'en-US': '/blog/qr-code-generator', 'x-default': '/blog/qr-code-generator' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/qr-code-generator' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是 QR 码?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR 码（Quick Response Code）是一种二维条码,1994 年由日本电装公司发明。手机摄像头扫描后可快速获取信息。现在广泛用于支付、名片、WiFi 分享、产品追溯等场景。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">四种常见用途</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 网址二维码</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          把网址转成 QR 码,印在名片、传单、海报上。别人扫一扫就能打开你的网站,不用手动输入 URL。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. WiFi 二维码</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          把 WiFi 名称和密码生成 QR 码,贴在墙上。客人扫一扫就连上 WiFi,不用念密码。格式:WIFI:T:WPA;S:网络名;P:密码;;
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 纯文本二维码</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          任何文字信息都可以转成 QR 码。优惠码、邀请码、产品说明——扫一扫直接显示文本。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. 联系方式二维码</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          把姓名、电话、邮箱编码成 QR 码,对方扫描后直接存入通讯录。适合展会、社交活动。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR 码使用技巧</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>尺寸</strong>:最小 2cm × 2cm,扫描距离越远越大。<strong>对比度</strong>:深色码+浅色背景,避免花哨背景。<strong>纠错</strong>:QR 码有 4 级容错(L/M/Q/H),最高可损毁 30% 仍可识别。<strong>格式</strong>:PNG 适合打印,SVG 适合缩放。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → 立即生成 QR 码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is a QR Code?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A QR code (Quick Response Code) is a 2D barcode invented by Denso Wave in 1994. Your phone camera scans it to instantly access information. Today it's used everywhere: mobile payments, business cards, WiFi sharing, product tracking, and more.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Common Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. URL QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Convert a URL to a QR code, print it on business cards, flyers, or posters. People scan and open your website instantly — no typing required.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. WiFi QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Encode your WiFi name and password into a QR code, stick it on the wall. Guests scan and connect — no need to spell out the password. Format: WIFI:T:WPA;S:NetworkName;P:Password;;
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Plain Text QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Any text — promo codes, serial numbers, product descriptions — can be turned into a QR code. Scan to reveal the text instantly.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Contact QR Codes</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Encode name, phone, email into a QR code. Scanning saves the contact directly to the phone's address book. Perfect for trade shows and networking events.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR Code Best Practices</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Size</strong>: minimum 2cm × 2cm; larger for longer scan distances. <strong>Contrast</strong>: dark code on light background, avoid busy patterns. <strong>Error correction</strong>: QR codes have 4 levels (L/M/Q/H); Level H still works even if 30% is damaged. <strong>Format</strong>: PNG for printing, SVG for scaling.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → Generate a QR Code Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'QR 码生成器使用指南' : 'QR Code Generator Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
