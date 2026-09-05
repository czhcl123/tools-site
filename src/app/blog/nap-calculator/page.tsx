import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '午睡计算器使用指南：根据睡眠科学计算最佳午睡时长，避免睡眠惯性导致的昏沉感，教你利用 20 分钟 power nap 和 90 分钟完整周期提升下午精力。' : 'en'
  return {
    title: lang === 'zh'
      ? '午睡计算器：你应该午睡多久？科学午睡指南'
      : 'Nap Calculator Guide',
    description: lang === 'zh'
      ? '用午睡计算器找到最佳午睡时长。20分钟小睡 vs 90分钟全周期,哪种适合你？科学午睡提升精力。'
      : 'Use a nap calculator to find your ideal nap length. 20-minute power nap vs 90-minute full cycle — which is right for you? Boost energy with napping.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/nap-calculator',
      languages: { 'en-US': '/blog/nap-calculator', 'x-default': '/blog/nap-calculator' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/nap-calculator' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么午睡很重要?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          午睡不是偷懒,而是<strong>科学认可的恢复策略</strong>。NASA研究发现,26分钟的午睡能让飞行员的反应速度提升34%,警觉性提高54%。无论是上班族、学生还是自由职业者,合理午睡都能显著提升下午的工作效率。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">午睡时长对照表</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不同午睡时长有不同的效果,关键在于<strong>不要在深度睡眠中被闹钟叫醒</strong>。
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>☕ <strong>10-20 分钟（能量小睡）</strong>— 最佳选择！快速恢复精力,不进入深度睡眠,醒来后清醒无负担</p>
          <p>🧠 <strong>20-30 分钟（学习小睡）</strong>— 提升记忆力和创造力,适合学生和脑力工作者</p>
          <p>⚠️ <strong>30-60 分钟（危险区）</strong>— 进入深度睡眠,被叫醒后会昏昏沉沉（睡眠惯性）,尽量避免</p>
          <p>💤 <strong>90 分钟（完整周期）</strong>— 完成一个睡眠周期,适合严重缺觉的人,醒来后精力充沛</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">最佳午睡时间窗口</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          人体有一个自然的<strong>午后低谷期（post-lunch dip）</strong>,通常在下午1-3点之间。这是午睡的黄金时段。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>下午3点后尽量不要午睡</strong> — 会影响晚上的入睡时间,打乱夜间睡眠周期。如果你下午3点后才感到困倦,说明夜间睡眠质量可能需要改善。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">午睡前的准备</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>喝一杯咖啡再睡</strong> — 咖啡因需要20分钟起效,醒来时正好提神（咖啡因午睡法）</li>
          <li><strong>设定闹钟</strong> — 一定要设闹钟！避免睡过头进入深度睡眠</li>
          <li><strong>找暗处</strong> — 光线会抑制褪黑素分泌,暗处更容易入睡</li>
          <li><strong>不必追求睡着</strong> — 闭眼休息也有恢复效果,别给自己压力</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">谁不适合午睡?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          以下人群午睡需谨慎:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>失眠患者</strong> — 午睡会减少夜间睡眠压力,加重失眠</li>
          <li><strong>夜间睡眠质量差的人</strong> — 先解决夜间问题,再考虑午睡</li>
          <li><strong>傍晚容易犯困的人</strong> — 午睡后犯困说明时长不对</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 午睡越长越好吗？</strong><br />
          A: 不是。超过30分钟会进入深度睡眠,醒来后反而更累。最佳午睡时长是20分钟左右。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 午睡会影响晚上睡觉吗？</strong><br />
          A: 20分钟以内不会。超过30分钟或下午3点后的午睡可能会影响夜间入睡。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 每天都需要午睡吗？</strong><br />
          A: 不需要。午睡是补充手段,不是必需品。如果你夜间睡眠充足(7-9小时),白天精力充沛,就不需要午睡。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → 用睡眠计算器规划你的午睡和夜间睡眠
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Napping Matters</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Napping isn't laziness — it's a <strong>science-backed recovery strategy</strong>. NASA research found that a 26-minute nap improved pilots' reaction speed by 34% and alertness by 54%. Whether you're an office worker, student, or freelancer, a well-timed nap can significantly boost your afternoon productivity.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Nap Duration Guide</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Different nap lengths produce different effects. The key is <strong>not waking up during deep sleep</strong>.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>☕ <strong>10-20 Minutes (Power Nap)</strong> — Best choice! Quick energy boost without entering deep sleep. Wake up clear-headed.</p>
          <p>🧠 <strong>20-30 Minutes (Learning Nap)</strong> — Boosts memory and creativity. Great for students and knowledge workers.</p>
          <p>⚠️ <strong>30-60 Minutes (Danger Zone)</strong> — You enter deep sleep; waking up causes sleep inertia (grogginess). Avoid this range.</p>
          <p>💤 <strong>90 Minutes (Full Cycle)</strong> — Complete one sleep cycle. Best for severely sleep-deprived people. Wake up refreshed.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Best Nap Time Window</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your body has a natural <strong>post-lunch dip</strong>, usually between 1-3 PM. This is the golden window for napping.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Avoid napping after 3 PM</strong> — it can interfere with your nighttime sleep onset and disrupt your sleep cycles. If you feel drowsy only after 3 PM, your nighttime sleep quality may need attention.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Nap Preparation Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Drink coffee before napping</strong> — Caffeine takes 20 minutes to kick in, so it'll alert you right when you wake up (coffee nap technique)</li>
          <li><strong>Set an alarm</strong> — Always! Avoid oversleeping into deep sleep</li>
          <li><strong>Find a dark spot</strong> — Light suppresses melatonin; darkness helps you fall asleep faster</li>
          <li><strong>Don't stress about falling asleep</strong> — Simply closing your eyes and resting has restorative benefits</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Who Should Avoid Napping?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Be cautious with napping if you:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Have insomnia</strong> — Napping reduces sleep pressure and worsens insomnia</li>
          <li><strong>Have poor nighttime sleep quality</strong> — Fix nighttime issues first</li>
          <li><strong>Feel sleepy in the evening</strong> — Post-nap grogginess means your nap was too long</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Is longer napping better?</strong><br />
          A: No. Napping over 30 minutes enters deep sleep, making you groggier. The sweet spot is around 20 minutes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Will napping affect nighttime sleep?</strong><br />
          A: Not if kept under 20 minutes. Naps over 30 minutes or after 3 PM may interfere with falling asleep at night.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Should I nap every day?</strong><br />
          A: Not necessarily. Napping is a supplement, not a requirement. If you sleep enough at night (7-9 hours) and feel energetic during the day, you don't need to nap.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → Plan your nap and nighttime sleep with the Sleep Calculator
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '午睡计算器：你应该午睡多久？' : 'Nap Calculator: How Long Should You Nap?'}
      </h1>
      {content[lang]}
    </div>
  )
}
