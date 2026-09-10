import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '婚礼倒计时规划指南：用倒计时工具管理婚礼准备的每个关键节点，从场地预订到婚纱选购，从宾客名单到婚礼当天时间线，确保一切有条不紊。' : 'en'
  return {
    title: lang === 'zh'
      ? '婚礼倒计时：完美婚礼规划指南'
      : 'Wedding Countdown: Planning Your Perfect Day',
    description: lang === 'zh'
      ? '用倒计时工具管理婚礼准备的每个关键节点,确保一切有条不紊。'
      : 'Use countdown timers to manage every milestone of wedding planning, from venue booking to the big day timeline.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/countdown-wedding-planner',
      languages: { 'en-US': '/blog/countdown-wedding-planner', 'x-default': '/blog/countdown-wedding-planner' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/countdown-wedding-planner' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么婚礼需要倒计时?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          婚礼筹备涉及数十个任务和多个供应商，时间线长达 6–18 个月。倒计时工具能帮你可视化每个阶段的截止日期，避免遗漏关键节点。把"婚礼日"设为目标，反推每个任务的完成期限。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">12 个月倒计时：关键里程碑</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">12–9 个月前</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          确定预算和 guest list 大小、预订婚礼场地（热门场地需提前 12 个月）、选择婚礼日期、开始寻找婚纱。用倒计时设置每个任务的截止日。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6–3 个月前</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          预订摄影师和摄像师、选择伴郎伴娘、购买婚戒、安排蜜月旅行、试穿婚纱并修改。这个阶段任务密集，倒计时能帮你分清优先级。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1 个月前</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          确认所有供应商、最终试穿婚纱、准备 seating chart、购买婚礼用品（请柬、回礼等）、安排婚礼当天交通。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">婚礼当天时间线</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          婚礼当天也用得上倒计时：化妆准备（3 小时）、First Look（30 分钟）、仪式（30 分钟）、拍照（1 小时）、宴会（3 小时）。精确到分钟的时间线确保每个环节无缝衔接。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实用技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>创建多个倒计时</strong>：主倒计时（婚礼日）+ 子倒计时（各供应商截止日）</li>
          <li><strong>设置提醒</strong>：在关键日期前 1 周和 3 天各提醒一次</li>
          <li><strong>分享给伴侣</strong>：两人同步进度，避免重复工作</li>
          <li><strong>留缓冲时间</strong>：每个任务提前 1–2 天完成，应对突发情况</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → 开始你的婚礼倒计时
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Weddings Need a Countdown</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wedding planning involves dozens of tasks and multiple vendors over 6–18 months. A countdown timer visualizes every deadline, ensuring nothing falls through the cracks. Set your wedding date as the target and work backward to assign deadlines for each milestone.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">12-Month Countdown: Key Milestones</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">12–9 Months Before</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Set your budget and guest count, book the venue (popular venues need 12+ months), choose your wedding date, and start dress shopping. Use countdown timers to set deadlines for each task.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">6–3 Months Before</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Book photographer and videographer, select bridesmaids and groomsmen, buy wedding rings, plan the honeymoon, and do dress fittings. This phase is intense — countdowns help prioritize.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1 Month Before</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Confirm all vendors, final dress fitting, create seating chart, buy wedding supplies (invitations, favors), and arrange day-of transportation.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Wedding Day Timeline</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Countdown timers work on the day too: hair and makeup (3 hours), first look (30 min), ceremony (30 min), photos (1 hour), reception (3 hours). A minute-by-minute timeline ensures every transition is smooth.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Create multiple timers</strong> — one master countdown plus sub-countdowns for each vendor deadline</li>
          <li><strong>Set reminders</strong> — alert 1 week and 3 days before key dates</li>
          <li><strong>Share with your partner</strong> — sync progress to avoid duplicate work</li>
          <li><strong>Build in buffers</strong> — finish each task 1–2 days early for unexpected delays</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → Start Your Wedding Countdown
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '婚礼倒计时：完美婚礼规划指南' : 'Wedding Countdown: Planning Your Perfect Day'}
      </h1>
      {content[lang]}
    </div>
  )
}
