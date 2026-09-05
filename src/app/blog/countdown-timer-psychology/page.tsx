import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '倒计时如何影响我们的心理和行为？从稀缺效应到紧迫感驱动，解析倒计时背后的心理学原理，以及商家如何利用倒计时促销影响消费者决策。' : 'en'
  return {
    title: lang === 'zh'
      ? '倒计时心理学：为什么倒计时器如此有效'
      : 'Psychology of Countdown Timers',
    description: lang === 'zh'
      ? '倒计时器如何利用紧迫感和稀缺性提升转化率？了解倒计时心理学原理和实际应用场景。'
      : 'How countdown timers use urgency and scarcity to boost conversions? Learn the psychology behind countdown timers and practical use cases.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/countdown-timer-psychology',
      languages: { 'en-US': '/blog/countdown-timer-psychology', 'x-default': '/blog/countdown-timer-psychology' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/countdown-timer-psychology' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">倒计时器为什么有效？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          倒计时器利用了人类两个核心心理：<strong>紧迫感</strong>（时间在流逝）和<strong>稀缺性</strong>（机会有限）。当人们看到时间在倒数，大脑的杏仁核会触发"战斗或逃跑"反应，促使你立即行动而非拖延。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三大心理学原理</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>⏰ <strong>紧迫感（Urgency）</strong>：时间在减少 → "现在不行动就来不及了"</p>
          <p>📉 <strong>稀缺性（Scarcity）</strong>：名额/库存有限 → "错过就没有了"</p>
          <p>🧠 <strong>损失厌恶（Loss Aversion）</strong>：人对失去的痛苦是对获得快乐的2倍 → 害怕错过比期待收获更有驱动力</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实际应用场景</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">电商促销</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "限时折扣还剩2小时" — 这是最经典的用法。研究显示，带有倒计时器的促销页面转化率比没有的高出20-30%。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">活动报名</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "早鸟价还剩3天" — 让犹豫的人尽快做决定，减少"以后再说"的拖延。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">产品发布</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          倒计时到发布日，积累期待感。Apple 发布会前的倒计时页面就是经典案例。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">个人目标</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          倒计时到考试、婚礼、旅行日期，可视化时间流逝，帮助规划和准备。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何正确使用倒计时器</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>真实截止时间</strong> — 假倒计时会损害信任，永远不要造假</li>
          <li><strong>突出剩余时间</strong> — 用天+小时+分钟，不要只显示天数</li>
          <li><strong>配合行动按钮</strong> — "立即购买"或"马上报名"，让下一步清晰</li>
          <li><strong>移动端适配</strong> — 手机用户占多数，确保小屏幕也能看清</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 倒计时器会让人反感吗？</strong><br />
          A: 造假的会。如果截止时间是假的（"还剩2小时"但永远不会结束），用户会失去信任。真实的倒计时只会增加紧迫感。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 倒计时结束后怎么办？</strong><br />
          A: 提前准备"已结束"页面或自动跳转，避免用户看到过期信息。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → 创建你的倒计时
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do Countdown Timers Work?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Countdown timers tap into two core human instincts: <strong>urgency</strong> (time is running out) and <strong>scarcity</strong> (limited opportunity). When people see time ticking down, the amygdala triggers a "fight or flight" response, pushing immediate action over procrastination.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Psychological Principles</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>⏰ <strong>Urgency</strong>: Time is decreasing → "Act now or miss out"</p>
          <p>📉 <strong>Scarcity</strong>: Limited slots/inventory → "Gone when it's gone"</p>
          <p>🧠 <strong>Loss Aversion</strong>: The pain of losing is 2x the pleasure of gaining → Fear of missing out drives more than anticipation of gain</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Use Cases</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">E-commerce Sales</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Sale ends in 2 hours" — the classic use case. Studies show pages with countdown timers convert 20-30% higher than those without.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Event Registration</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Early bird pricing ends in 3 days" — pushes indecisive people to commit, reducing "I'll do it later" procrastination.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Product Launches</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Countdown to launch day builds anticipation. Apple's pre-event countdown page is a textbook example.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Personal Goals</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Countdown to exams, weddings, or trips — visualizing time passing helps with planning and preparation.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use Countdown Timers Right</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Real deadlines</strong> — Fake timers destroy trust. Never lie about deadlines</li>
          <li><strong>Show remaining time</strong> — Days + hours + minutes, not just days</li>
          <li><strong>Pair with a CTA</strong> — "Buy Now" or "Register" — make the next step clear</li>
          <li><strong>Mobile-friendly</strong> — Most users are on phones; ensure readability on small screens</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Do countdown timers annoy people?</strong><br />
          A: Fake ones do. If the deadline isn't real ("2 hours left" but never ends), users lose trust. Genuine urgency is effective.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What happens when the countdown ends?</strong><br />
          A: Prepare an "expired" page or auto-redirect. Don't let users see outdated information.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → Create Your Countdown
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '倒计时心理学：为什么倒计时器如此有效' : 'The Psychology of Countdown Timers: Why They Work'}
      </h1>
      {content[lang]}
    </div>
  )
}
