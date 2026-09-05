import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '睡眠计算器使用指南 — 90分钟睡眠周期计算'
      : 'Sleep Calculator Guide — 90-Minute Sleep Cycle Calculation',
    description: lang === 'zh'
      ? '教你用睡眠计算器根据90分钟睡眠周期计算最佳入睡和起床时间,提升睡眠质量。'
      : 'Learn how to use a sleep calculator based on 90-minute sleep cycles to find the best bedtime and wake time for better sleep quality.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/sleep-calculator',
      languages: { 'en-US': '/blog/sleep-calculator', 'x-default': '/blog/sleep-calculator' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/sleep-calculator' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是90分钟睡眠周期?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          人的睡眠由多个<strong>90分钟的周期</strong>组成,每个周期包括浅睡、深睡和快速眼动(REM)阶段。在周期结束时醒来,你会感觉神清气爽;在周期中间被打断,则会感到昏昏沉沉。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何计算最佳睡眠时间?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          核心公式:<strong>入睡时间 = 起床时间 - (90分钟 × 周期数)</strong>。例如,如果你需要在早上7点起床,想睡6个周期(9小时),那么你应该在晚上10点入睡。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          反过来,如果你在晚上11点入睡,想睡5个周期(7.5小时),那么最佳起床时间是早上6:30。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见使用场景</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 确定入睡时间</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          输入你必须起床的时间(比如上班时间),计算器会告诉你应该几点入睡,确保你在闹钟响起时正好处于周期结束点。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 确定起床时间</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          如果你已经躺下或知道自己几点能入睡,计算器可以告诉你几个周期后应该几点起床,让你在最佳时机醒来。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 午睡规划</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          午睡20-30分钟(一个周期的1/3)可以快速恢复精力,而不会进入深度睡眠导致醒来后更加疲惫。计算器可以帮你规划完美的午睡时长。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">睡眠质量提升技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>保持规律</strong> — 每天同一时间睡觉和起床,包括周末</li>
          <li><strong>避免蓝光</strong> — 睡前1小时远离手机和电脑屏幕</li>
          <li><strong>优化环境</strong> — 保持卧室凉爽、黑暗、安静</li>
          <li><strong>限制咖啡因</strong> — 下午2点后避免咖啡和茶</li>
          <li><strong>放松身心</strong> — 睡前进行冥想或深呼吸练习</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 每个人都需要8小时睡眠吗?</strong><br />
          A: 不一定。睡眠需求因人而异,大多数成年人需要7-9小时。关键是找到适合自己的周期数(4-6个周期)。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 如果我失眠怎么办?</strong><br />
          A: 睡眠计算器适合健康人群。如果你有持续的睡眠问题,建议咨询医生或睡眠专家。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → 立即使用睡眠计算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is a 90-Minute Sleep Cycle?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Human sleep consists of multiple <strong>90-minute cycles</strong>, each including light sleep, deep sleep, and REM (Rapid Eye Movement) stages. Waking up at the end of a cycle leaves you feeling refreshed; being interrupted mid-cycle makes you groggy.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Calculate Optimal Sleep Time?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The core formula: <strong>Bedtime = Wake time - (90 minutes × number of cycles)</strong>. For example, if you need to wake at 7 AM and want 6 cycles (9 hours), you should fall asleep at 10 PM.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Conversely, if you fall asleep at 11 PM and want 5 cycles (7.5 hours), the optimal wake time is 6:30 AM.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Determine Bedtime</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter the time you must wake up (e.g., work time), and the calculator tells you when to go to bed to ensure you wake up at the end of a sleep cycle.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Determine Wake Time</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you're already in bed or know when you'll fall asleep, the calculator can tell you what time to set your alarm for optimal waking.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Nap Planning</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A 20-30 minute nap (1/3 of a cycle) can quickly restore energy without entering deep sleep, which causes grogginess upon waking.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Sleep Quality Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Stay consistent</strong> — go to bed and wake up at the same time every day, including weekends</li>
          <li><strong>Avoid blue light</strong> — stay away from screens for 1 hour before bed</li>
          <li><strong>Optimize environment</strong> — keep your bedroom cool, dark, and quiet</li>
          <li><strong>Limit caffeine</strong> — avoid coffee and tea after 2 PM</li>
          <li><strong>Relax</strong> — practice meditation or deep breathing before bed</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Does everyone need 8 hours of sleep?</strong><br />
          A: Not necessarily. Sleep needs vary; most adults need 7-9 hours. The key is finding your ideal number of cycles (4-6).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What if I have insomnia?</strong><br />
          A: This calculator is for healthy sleepers. If you have persistent sleep issues, consult a doctor or sleep specialist.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → Try the Sleep Calculator Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '睡眠计算器使用指南' : 'Sleep Calculator Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
