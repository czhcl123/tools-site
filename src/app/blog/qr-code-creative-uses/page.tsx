import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? 'QR 码的20种创意用法'
      : '20 Creative Ways to Use QR Codes',
    description: lang === 'zh'
      ? 'QR 码创意应用大全：餐厅菜单、名片、活动门票、Wi-Fi 分享、产品包装、社交媒体、教育场景。'
      : 'Creative QR code uses: restaurant menus, business cards, event tickets, Wi-Fi sharing, product packaging, social media, education.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/qr-code-creative-uses',
      languages: { 'en-US': '/blog/qr-code-creative-uses', 'x-default': '/blog/qr-code-creative-uses' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR 码为什么这么流行？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR 码（Quick Response Code）是连接线下和线上的桥梁。疫情期间，QR 码从"可选"变成了"必需"。现在，几乎所有智能手机都能直接扫描 QR 码，无需安装额外应用。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">20种创意用法</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">餐饮</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>1. 📋 <strong>无接触菜单</strong>：扫码点餐，无需纸质菜单</p>
          <p>2. ⭐ <strong>评价引导</strong>：扫码直接跳转到 Google/大众点评评价页</p>
          <p>3. 🎁 <strong>会员积分</strong>：扫码自动积分</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">商业</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>4. 💼 <strong>电子名片</strong>：扫码添加联系方式到手机通讯录</p>
          <p>5. 🏷️ <strong>产品包装</strong>：扫码查看使用说明、真伪验证</p>
          <p>6. 📦 <strong>物流追踪</strong>：扫码查看包裹状态</p>
          <p>7. 💳 <strong>支付</strong>：微信/支付宝扫码付款</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">活动</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>8. 🎫 <strong>电子门票</strong>：扫码入场，防伪又方便</p>
          <p>9. 📊 <strong>签到</strong>：扫码快速签到，代替纸质名单</p>
          <p>10. 🗳️ <strong>投票</strong>：扫码参与现场投票</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">生活</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>11. 📶 <strong>Wi-Fi 分享</strong>：扫码自动连接 Wi-Fi，不用输密码</p>
          <p>12. 📍 <strong>位置分享</strong>：扫码直接打开地图导航</p>
          <p>13. 📱 <strong>社交媒体</strong>：扫码关注账号</p>
          <p>14. 🎵 <strong>音乐分享</strong>：扫码听歌</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">教育</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>15. 📚 <strong>课件链接</strong>：扫码查看课件或参考材料</p>
          <p>16. 🎓 <strong>证书验证</strong>：扫码验证学历/证书真伪</p>
          <p>17. 📖 <strong>图书馆</strong>：扫码借书/续借</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">创意</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>18. 🎨 <strong>艺术展览</strong>：扫码看作品背后的故事</p>
          <p>19. 🏠 <strong>房产展示</strong>：扫码查看房屋详情和虚拟看房</p>
          <p>20. 💝 <strong>礼物卡</strong>：扫码领取优惠或礼品</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">设计 QR 码的技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>保持高对比度</strong>：深色码 + 浅色背景，确保可扫描</li>
          <li><strong>留白边</strong>：周围至少留4格空白</li>
          <li><strong>添加 Logo</strong>：在中间加品牌 Logo，增加辨识度</li>
          <li><strong>测试扫描</strong>：打印前在多种设备上测试</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: QR 码会过期吗？</strong><br />
          A: 静态 QR 码永不过期。动态 QR 码取决于服务商的账户有效期。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: QR 码最多能存多少数据？</strong><br />
          A: 最大约 4296 个字符（数字）或 2953 字节（二进制）。但内容越多，码越复杂，扫描越慢。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → 免费生成你的 QR 码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Are QR Codes So Popular?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          QR codes (Quick Response Codes) bridge the offline and online worlds. During the pandemic, QR codes went from "optional" to "essential." Now, virtually every smartphone can scan QR codes natively — no extra app needed.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">20 Creative Uses</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Restaurants</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>1. 📋 <strong>Contactless menus</strong>: Scan to order, no paper needed</p>
          <p>2. ⭐ <strong>Review prompts</strong>: Scan to leave a Google/Yelp review</p>
          <p>3. 🎁 <strong>Loyalty programs</strong>: Scan to earn points automatically</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Business</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>4. 💼 <strong>Business cards</strong>: Scan to save contact info</p>
          <p>5. 🏷️ <strong>Product packaging</strong>: Scan for instructions or authenticity</p>
          <p>6. 📦 <strong>Shipping tracking</strong>: Scan to check package status</p>
          <p>7. 💳 <strong>Payments</strong>: Scan to pay via WeChat/Alipay</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Events</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>8. 🎫 <strong>E-tickets</strong>: Scan for entry — secure and convenient</p>
          <p>9. 📊 <strong>Check-in</strong>: Scan for fast check-in, replacing paper lists</p>
          <p>10. 🗳️ <strong>Voting</strong>: Scan to participate in live polls</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Daily Life</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>11. 📶 <strong>Wi-Fi sharing</strong>: Scan to connect — no password typing</p>
          <p>12. 📍 <strong>Location sharing</strong>: Scan to open map navigation</p>
          <p>13. 📱 <strong>Social media</strong>: Scan to follow an account</p>
          <p>14. 🎵 <strong>Music sharing</strong>: Scan to listen to a song</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Education</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>15. 📚 <strong>Course materials</strong>: Scan for slides or reference materials</p>
          <p>16. 🎓 <strong>Certificate verification</strong>: Scan to verify degree authenticity</p>
          <p>17. 📖 <strong>Libraries</strong>: Scan to borrow or renew books</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Creative</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>18. 🎨 <strong>Art exhibitions</strong>: Scan for the story behind the artwork</p>
          <p>19. 🏠 <strong>Real estate</strong>: Scan for property details and virtual tours</p>
          <p>20. 💝 <strong>Gift cards</strong>: Scan to claim rewards or gifts</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR Code Design Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>High contrast</strong>: Dark code on light background for reliable scanning</li>
          <li><strong>Quiet zone</strong>: Leave at least 4 modules of whitespace around the code</li>
          <li><strong>Add a logo</strong>: Place your brand logo in the center for recognition</li>
          <li><strong>Test scan</strong>: Test on multiple devices before printing</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Do QR codes expire?</strong><br />
          A: Static QR codes never expire. Dynamic QR codes depend on the service provider's account validity.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: How much data can a QR code hold?</strong><br />
          A: Max ~4,296 characters (numeric) or 2,953 bytes (binary). More content = more complex code = slower scanning.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → Generate Your QR Code for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'QR 码的20种创意用法' : '20 Creative Ways to Use QR Codes'}
      </h1>
      {content[lang]}
    </div>
  )
}
