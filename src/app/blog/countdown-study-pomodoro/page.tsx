import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '学习倒计时：番茄工作法与备考计时'
      : 'Study Countdown Timers: Pomodoro and Exam Prep',
    description: lang === 'zh'
      ? '为什么倒计时能让学习更专注？番茄工作法 25/5 怎么用，考试时如何分配时间，长时间复习怎么安排休息。'
      : 'Why countdown timers sharpen study focus, how to run the Pomodoro technique, and how to pace yourself on exam day.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/countdown-study-pomodoro',
      languages: { 'en-US': '/blog/countdown-study-pomodoro', 'x-default': '/blog/countdown-study-pomodoro' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/countdown-study-pomodoro' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long should a study session be?", "acceptedAnswer": {"@type": "Answer", "text": "Most students focus well for 25–50 minutes. Pair a 25 or 50-minute countdown with a 5–10 minute break."}}, {"@type": "Question", "name": "Does a countdown timer help concentration?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A visible deadline creates mild pressure that crowds out distraction, and it gives your brain a fixed finish line to work toward."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么倒计时能让学习更专注</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          帕金森定律说：工作会自动膨胀，直到占满你给它的时间。给一张卷子一整天，效率低的人能磨一整天；给 40 分钟，多数人会逼自己在时限内完成。倒计时把「学多久」变成「在 X 分钟内学完」，任务有了明确的终点，拖延就没空间了。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">番茄工作法：最简单的入门结构</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          25 分钟专注 + 5 分钟休息 = 一个番茄钟。每完成 4 个番茄钟，休息 15–30 分钟。这个节奏适合大多数人，原因有三个：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>25 分钟短到不会心理抗拒，长到能进入状态</li>
          <li>休息是强制的，防止连续学习 3 小时后效率归零</li>
          <li>番茄钟数量让进步可见——「今天完成了 8 个」比「学了一天」具体得多</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          觉得 25 分钟太短的，改成 50 分钟专注 + 10 分钟休息（一个「大番茄」）。关键不是数字本身，而是<strong>专注期和休息期必须分开</strong>。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">考试日的时间分配</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          考试是最需要倒计时的场景。拿到卷子先花 2 分钟通览，把总分和总时长换算成「每分多少秒」，再按分值分配每道题的时间。留 10% 的时间检查——100 分钟的考试留 10 分钟。倒计时器放在视线余光能看到的地方，不用频繁低头看表。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">长时间复习的休息安排</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📚 <strong>单日复习</strong>：3–4 个番茄钟后休 20 分钟，离开书桌活动身体</p>
          <p>📝 <strong>刷题阶段</strong>：50 分钟做题 + 10 分钟对答案整理错题</p>
          <p>📖 <strong>背诵内容</strong>：25 分钟一轮，穿插回忆测试比反复读有效</p>
          <p>🌙 <strong>考前一周</strong>：模拟考试用真实时长的倒计时，训练节奏感</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">学习时手机倒计时总忍不住看怎么办？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">把手机放到够不着的地方，只留声音提示。或者用实体计时器，没有消息通知的干扰。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">状态好的时候要打断吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">番茄钟的原则是到点就停。中途打断心流确实可惜，但规律的休息能保证后面几个小时的效率——权衡下来通常值得。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → 设一个学习倒计时，现在开始第一个番茄钟
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Countdown Timers Sharpen Study Focus</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Parkinson's Law: work expands to fill the time available. Give yourself a full day for one exam paper and you'll drift through it. Give yourself 40 minutes and most people finish. A countdown turns "study for a while" into "finish this in X minutes" — the task gains a finish line, and procrastination loses its hiding spot.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Pomodoro Technique: The Simplest Structure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          25 minutes of focus plus a 5-minute break equals one Pomodoro. After four Pomodoros, take a longer 15–30 minute break. The rhythm works for most people for three reasons:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>25 minutes is short enough to start without resistance, long enough to get into flow</li>
          <li>Breaks are mandatory, which prevents the three-hour grind that destroys evening efficiency</li>
          <li>Pomodoro counts make progress visible — "8 done today" beats "studied all day"</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If 25 minutes feels too short, switch to 50 minutes of focus with a 10-minute break. The exact number matters less than one rule: <strong>focus time and break time must stay separate</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Pacing Yourself on Exam Day</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Exams are where countdown timers earn their keep. Spend the first two minutes scanning the paper, convert total marks into seconds per mark, then allocate time per question by its weight. Reserve 10% for review — ten minutes on a 100-minute exam. Keep the timer in your peripheral vision so you're not checking your watch every few minutes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Break Structure for Long Study Days</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📚 <strong>Daily review</strong>: after 3–4 Pomodoros, take 20 minutes away from the desk</p>
          <p>📝 <strong>Practice problems</strong>: 50 minutes solving, 10 minutes checking and logging mistakes</p>
          <p>📖 <strong>Memorization</strong>: 25-minute rounds with recall testing beats re-reading</p>
          <p>🌙 <strong>Final week</strong>: run full-length mock exams against a real countdown to train pacing</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">I keep checking my phone timer. What now?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Put the phone out of arm's reach with the alarm sound on, or use a physical timer with zero notifications.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Should I stop a Pomodoro when I'm in the zone?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">The rule says stop when the timer ends. Breaking flow is painful, but regular breaks protect the next two hours of focus — usually worth it.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → Set a study countdown and start your first Pomodoro now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '学习倒计时：番茄工作法与备考计时' : 'Study Countdown Timers: Pomodoro and Exam Prep'}
      </h1>
      {content[lang]}
    </div>
  )
}
