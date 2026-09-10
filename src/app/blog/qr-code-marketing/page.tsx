import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'QR 码营销完全指南：如何用二维码提升门店流量、产品追踪和客户互动，附带各行业成功案例和最佳实践，帮你制定有效的 QR 码营销策略。' : 'en'
  return {
    title: lang === 'zh' ? 'QR码营销：商业应用完全指南' : 'QR Code Marketing Guide',
    description: lang === 'zh' ? '如何用QR码提升营销效果、门店引流、产品追溯,以及QR码最佳实践。' : 'How to use QR codes for marketing, store traffic, product tracking, and QR code best practices.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/qr-code-marketing',
      languages: { 'en-US': '/blog/qr-code-marketing', 'x-default': '/blog/qr-code-marketing' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/qr-code-marketing' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "QR in marketing?", "acceptedAnswer": {"@type": "Answer", "text": "On cards, flyers, posters. Scan to visit, claim offers."}}, {"@type": "Question", "name": "Track scan data?", "acceptedAnswer": {"@type": "Answer", "text": "UTM parameters + Google Analytics."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR码在营销中的作用</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR码是连接线下和线上的桥梁。顾客扫码即可访问网站、领取优惠券、关注公众号。<strong>使用率逐年增长</strong>,2024年全球QR码扫描量超过100亿次。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">五大商业应用场景</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 产品包装</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          在产品包装上印QR码,顾客扫码查看产品详情、使用说明、防伪验证。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 门店引流</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          在海报、展架、收银台放置QR码,引导顾客关注公众号、加入会员、领取优惠。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 名片</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          在实体名片上印QR码,扫码即可保存联系方式、访问LinkedIn、查看作品集。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. WiFi分享</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          在餐厅、咖啡厅放置WiFi QR码,顾客扫码自动连接,无需手动输入密码。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. 活动签到</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          用QR码替代传统签到,提高效率,减少排队。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">最佳实践</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>确保QR码足够大(至少2cm×2cm)</li>
          <li>周围留有空白区域(quiet zone)</li>
          <li>测试在不同光线下的可读性</li>
          <li>添加CTA(如"扫码领取优惠")</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">QR 码在营销中怎么用?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">印在名片、传单、海报上。扫码跳转网站、领优惠、关注社媒。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">如何追踪扫描数据?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">用带UTM参数的 QR 码，结合 Analytics 追踪来源和转化。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → 免费生成你的营销QR码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR Codes in Marketing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR codes bridge offline and online worlds. Customers scan to visit websites, claim coupons, follow accounts. <strong>Usage grows yearly</strong> — over 10 billion QR scans globally in 2024.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Five Business Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Product Packaging</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Print QR codes on packaging for product details, instructions, and authenticity verification.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Store Traffic</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Place QR codes on posters and counters to drive followers, memberships, and coupon claims.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Business Cards</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Add QR codes to physical cards — scan to save contacts, visit LinkedIn, view portfolios.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. WiFi Sharing</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          In restaurants and cafes, WiFi QR codes let customers connect without typing passwords.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Event Check-in</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Replace traditional check-in with QR codes for faster, queue-free entry.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Ensure QR code is large enough (at least 2cm×2cm)</li>
          <li>Maintain white space around the code (quiet zone)</li>
          <li>Test readability in different lighting</li>
          <li>Add a CTA (e.g., "Scan for discount")</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How are QR codes used in marketing?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Print on cards, flyers, posters. Scan to visit sites, claim offers, follow social media.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to track scan data?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Use QR codes with UTM parameters and track with Google Analytics.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → Generate Your Marketing QR Code for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'QR码营销指南' : 'QR Code Marketing Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
