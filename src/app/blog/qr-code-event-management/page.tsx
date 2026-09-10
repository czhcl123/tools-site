import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'QR 码活动管理完全指南：如何用 QR 码实现活动注册、无接触签到、名牌打印和出勤追踪，提升活动管理效率和参与者体验。' : 'en'
  return {
    title: lang === 'zh'
      ? 'QR 码活动管理：签到与注册'
      : 'QR Codes for Events: Registration and Check-in',
    description: lang === 'zh'
      ? '如何用 QR 码实现活动注册、无接触签到和出勤追踪。'
      : 'How to use QR codes for event registration, contactless check-in, name badge printing, and attendance tracking.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/qr-code-event-management',
      languages: { 'en-US': '/blog/qr-code-event-management', 'x-default': '/blog/qr-code-event-management' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/qr-code-event-management' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">QR 码如何改变活动管理?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          传统的签到方式——纸质名单、手动勾选——既慢又容易出错。QR 码让参与者扫码即签到，速度快 5 倍以上，数据自动记录，还能实时统计到场人数。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">活动注册流程</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          注册页面生成唯一 QR 码发送给参与者。参与者保存到手机或打印出来。到场时出示 QR 码，工作人员用手机扫码确认身份。整个过程 10 秒内完成。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">无接触签到系统</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          后疫情时代，无接触签到成为标配。参与者无需递交手机或触碰设备，只需将 QR 码对准摄像头。这种方式既卫生又高效，特别适合大型会议和展览。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">名牌和胸卡集成</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          在打印名牌时嵌入个人 QR 码。扫描名牌即可获取参与者信息、公司、职位。 Networking 活动中，扫一扫名片上的 QR 码就能交换联系方式，比手动输入快得多。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">出勤追踪与活动后跟进</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>实时统计</strong>：签到数据实时更新，随时掌握到场率</li>
          <li><strong>分时段追踪</strong>：每个 session 的参与情况一目了然</li>
          <li><strong>活动后跟进</strong>：根据签到数据发送个性化感谢邮件</li>
          <li><strong>数据分析</strong>：哪些环节最受欢迎？哪个时段到场率最高？</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">如何用 QR 码签到?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">为每人生成唯一 QR 码，到场扫码确认身份。速度快、数据自动记录。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">需要什么设备?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">手机或平板即可，参与者只需保存或打印 QR 码。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → 为你的活动生成 QR 码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How QR Codes Transform Event Management</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Traditional check-in — paper lists, manual checkmarks — is slow and error-prone. QR codes let attendees check in by scanning, 5x faster, with automatic data recording and real-time attendance tracking.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Event Registration Flow</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The registration page generates a unique QR code sent to each attendee. They save it to their phone or print it. At the venue, they show the QR code and staff scan it to confirm identity. The entire process takes under 10 seconds.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contactless Check-in Systems</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Post-pandemic, contactless check-in is standard. Attendees don't need to hand over phones or touch devices — just hold the QR code up to the camera. It's hygienic and efficient, perfect for large conferences and exhibitions.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Name Badge Integration</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Embed personal QR codes in printed name badges. Scanning a badge reveals the attendee's info, company, and role. At networking events, scanning the QR on someone's badge exchanges contact info instantly — much faster than manual entry.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Attendance Tracking & Post-Event Follow-up</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Real-time stats</strong> — check-in data updates live so you always know attendance</li>
          <li><strong>Session tracking</strong> — see participation at each session at a glance</li>
          <li><strong>Post-event follow-up</strong> — send personalized thank-you emails based on check-in data</li>
          <li><strong>Data analytics</strong> — which sessions were most popular? Which time slot had peak attendance?</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How to use QR codes for check-in?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Generate a unique QR per attendee. Scan on arrival for instant recording.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What equipment is needed?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Just a phone or tablet. Attendees save or print their QR code.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/qr-code-generator" className="text-orange-600 font-medium hover:underline">
            → Generate QR Codes for Your Event
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? 'QR 码活动管理：签到与注册' : 'QR Codes for Events: Registration and Check-in'}
      </h1>
      {content[lang]}
    </div>
  )
}
