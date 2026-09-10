import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '睡眠科学完全指南：深入理解 90 分钟睡眠周期、深度睡眠与 REM 的区别、如何计算最佳睡眠时间、午睡科学、时差调整，以及改善睡眠质量的 15 个实用技巧。' : 'en'
  return {
    title: lang === 'zh'
      ? '睡眠科学完全指南：优化你的每一觉'
      : 'The Complete Sleep Science Guide',
    description: lang === 'zh'
      ? '睡眠科学完全指南:90分钟周期、深度睡眠vs REM、最佳入睡时间计算、午睡科学、时差调整和15个改善睡眠的实用技巧。'
      : 'Complete sleep science guide: 90-minute cycles, deep vs REM sleep, optimal bedtime calculation, napping science, jet lag recovery, and 15 practical tips.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/ultimate-sleep-guide',
      languages: { 'en-US': '/blog/ultimate-sleep-guide', 'x-default': '/blog/ultimate-sleep-guide' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/ultimate-sleep-guide' },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How long is a sleep cycle?', acceptedAnswer: { '@type': 'Answer', text: 'A complete sleep cycle is approximately 90 minutes, consisting of light sleep, deep sleep, and REM (Rapid Eye Movement) stages.' } },
          { '@type': 'Question', name: 'How many hours of sleep do adults need?', acceptedAnswer: { '@type': 'Answer', text: 'Most adults need 7-9 hours, which equals about 5-6 complete sleep cycles. However, individual needs vary.' } },
          { '@type': 'Question', name: 'What is the best time to go to sleep?', acceptedAnswer: { '@type': 'Answer', text: 'Use the formula: Bedtime = Wake time - (90 minutes × number of cycles). For a 7 AM wake-up with 6 cycles, sleep at 10 PM.' } },
          { '@type': 'Question', name: 'How do you recover from jet lag?', acceptedAnswer: { '@type': 'Answer', text: 'Adjust sleep 1-2 hours per day before traveling, get sunlight on arrival, avoid blue light at night, and live on local time immediately.' } },
        ],
      }),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          睡眠不是浪费时间——它是身体和大脑最重要的修复过程。你每晚的睡眠质量直接影响第二天的专注力、情绪、免疫力和长期健康。本指南将用科学数据和实用方法，帮你真正理解并优化你的睡眠。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">一、90 分钟睡眠周期</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          人的睡眠由多个<strong>90 分钟的周期</strong>组成。每个周期包含三个阶段：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>浅睡期（N1-N2）</strong> — 占 50%，身体放松，心率减慢</li>
          <li><strong>深度睡眠（N3）</strong> — 占 25%，身体修复、免疫增强、生长激素分泌</li>
          <li><strong>REM 睡眠</strong> — 占 25%，大脑活跃，记忆巩固，情绪调节</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>关键</strong>：在周期结束时醒来最清醒，在周期中间被打断则昏昏沉沉。这就是为什么"睡 6 个完整周期"比"睡够 8 小时"更重要。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">二、计算最佳睡眠时间</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          核心公式：<strong>入睡时间 = 起床时间 - (90分钟 × 周期数)</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>7 点起床，睡 6 个周期 → <strong>晚上 10:00 入睡</strong>（9 小时）</li>
          <li>7 点起床，睡 5 个周期 → <strong>晚上 11:30 入睡</strong>（7.5 小时）</li>
          <li>6 点起床，睡 5 个周期 → <strong>晚上 10:30 入睡</strong>（7.5 小时）</li>
          <li>8 点起床，睡 4 个周期 → <strong>凌晨 2:00 入睡</strong>（6 小时，不推荐长期）</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三、深度睡眠 vs REM 睡眠</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          两者缺一不可，但功能完全不同：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>深度睡眠</strong> — 身体层面。修复肌肉、增强免疫、分泌生长激素。前半夜更多</li>
          <li><strong>REM 睡眠</strong> — 大脑层面。巩固记忆、处理情绪、激发创造力。后半夜更多</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          这就是为什么<strong>熬夜会牺牲深度睡眠</strong>（前半夜），而<strong>早起会牺牲 REM</strong>（后半夜）。两者都不健康。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">四、午睡的科学</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          午睡不是懒惰，是高效的精力恢复手段：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>10–20 分钟</strong> — 最佳时长。快速恢复精力，不进入深度睡眠</li>
          <li><strong>30 分钟</strong> — 边界。超过容易进入深度睡眠，醒来后反而更困（睡眠惯性）</li>
          <li><strong>90 分钟</strong> — 完整一个周期。适合严重缺觉时的补偿性午睡</li>
          <li><strong>最佳时间</strong> — 下午 1:00–3:00，人体自然倦怠期</li>
          <li><strong>不要晚于 3:00 PM</strong> — 会影响夜间入睡</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">五、时差调整策略</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          跨越 3 个以上时区时，身体的昼夜节律与目的地不同步。每跨越 1 个时区约需 1 天适应。
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>飞行前 2–3 天</strong> — 往东飞：每天提前 1 小时睡觉。往西飞：推迟 1 小时</li>
          <li><strong>飞机上</strong> — 根据目的地时间决定睡还是醒</li>
          <li><strong>到达后</strong> — 白天多晒太阳（最强生物钟调节器），晚上避免蓝光</li>
          <li><strong>避免</strong> — 午睡超过 20 分钟、咖啡因、酒精</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">六、15 个改善睡眠的实用技巧</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>每天同一时间睡觉和起床，<strong>包括周末</strong></li>
          <li>睡前 1 小时远离手机和电脑屏幕（蓝光抑制褪黑素）</li>
          <li>保持卧室<strong>凉爽</strong>（18–22°C）、黑暗、安静</li>
          <li>下午 2 点后避免咖啡和茶（咖啡因半衰期 5–6 小时）</li>
          <li>睡前 2 小时避免剧烈运动（但白天运动有助于睡眠）</li>
          <li>晚餐不要吃太饱，避免辛辣和高脂食物</li>
          <li>建立睡前仪式：冥想、深呼吸、轻度拉伸、阅读纸质书</li>
          <li>床只用于睡觉和亲密活动——不要在床上工作或刷手机</li>
          <li>如果 20 分钟内睡不着，起来做点轻松的事，有困意再回床</li>
          <li>周末不要睡懒觉超过 1 小时——会打乱生物钟</li>
          <li>白天接受充足的自然光照射</li>
          <li>限制酒精——虽然助眠但会降低睡眠质量</li>
          <li>考虑白噪音或耳塞屏蔽环境噪音</li>
          <li>每周运动 150 分钟以上（有氧+力量）</li>
          <li>如有持续睡眠问题，咨询医生或睡眠专家</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">七、常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 每个人都需要 8 小时睡眠吗?</strong><br />
          A: 不一定。睡眠需求因人而异，大多数成年人需要 7–9 小时。关键是找到适合自己的周期数（4–6 个周期）。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 睡眠质量比时长更重要吗?</strong><br />
          A: 是的。在正确的周期结束点醒来，比在周期中间被打断即使睡够 8 小时感觉更清醒。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 失眠怎么办?</strong><br />
          A: 如果持续超过 2 周的睡眠困难，建议咨询医生。短期失眠可通过调整作息和环境改善。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → 用睡眠计算器找到你的最佳入睡时间
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sleep isn't wasted time — it's the most critical repair process for your body and brain. Your nightly sleep quality directly impacts next-day focus, mood, immunity, and long-term health. This guide uses science and practical methods to help you truly understand and optimize your sleep.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 1: The 90-Minute Sleep Cycle</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Human sleep consists of repeating <strong>90-minute cycles</strong>, each with three stages:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Light sleep (N1-N2)</strong> — 50% of cycle, body relaxes, heart rate slows</li>
          <li><strong>Deep sleep (N3)</strong> — 25%, body repair, immune boost, growth hormone release</li>
          <li><strong>REM sleep</strong> — 25%, brain active, memory consolidation, emotional processing</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Key insight</strong>: Waking at a cycle's end feels refreshed; waking mid-cycle feels groggy. That's why "6 complete cycles" matters more than "8 hours."
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 2: Calculating Optimal Bedtime</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Formula: <strong>Bedtime = Wake time - (90 min × number of cycles)</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Wake at 7 AM, 6 cycles → <strong>sleep at 10:00 PM</strong> (9 hours)</li>
          <li>Wake at 7 AM, 5 cycles → <strong>sleep at 11:30 PM</strong> (7.5 hours)</li>
          <li>Wake at 6 AM, 5 cycles → <strong>sleep at 10:30 PM</strong> (7.5 hours)</li>
          <li>Wake at 8 AM, 4 cycles → <strong>sleep at 2:00 AM</strong> (6 hours, not sustainable)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 3: Deep Sleep vs REM</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both are essential but serve different purposes:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Deep sleep</strong> — physical: muscle repair, immune boost, growth hormone. More in early night</li>
          <li><strong>REM sleep</strong> — mental: memory consolidation, emotional processing, creativity. More in late night</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Staying up late sacrifices deep sleep (early night). Waking too early sacrifices REM (late night). Neither is healthy.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 4: The Science of Napping</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>10–20 minutes</strong> — ideal. Quick energy restore without deep sleep</li>
          <li><strong>30 minutes</strong> — borderline. Often causes sleep inertia (grogginess)</li>
          <li><strong>90 minutes</strong> — full cycle. Good for severe sleep debt recovery</li>
          <li><strong>Best time</strong> — 1:00–3:00 PM, during the natural energy dip</li>
          <li><strong>Never after 3 PM</strong> — disrupts nighttime sleep</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 5: Jet Lag Recovery</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>2–3 days before</strong> — shift sleep 1 hour earlier (east) or later (west)</li>
          <li><strong>On the plane</strong> — sleep or stay awake based on destination time</li>
          <li><strong>After arrival</strong> — maximum sunlight by day, avoid blue light at night</li>
          <li><strong>Avoid</strong> — naps over 20 minutes, caffeine, alcohol</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 6: 15 Practical Sleep Tips</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Same bedtime and wake time every day, <strong>including weekends</strong></li>
          <li>Avoid screens 1 hour before bed (blue light suppresses melatonin)</li>
          <li>Keep bedroom <strong>cool</strong> (18–22°C), dark, and quiet</li>
          <li>No coffee or tea after 2 PM (caffeine half-life: 5–6 hours)</li>
          <li>Avoid intense exercise within 2 hours of bedtime</li>
          <li>Don't eat heavy meals late; avoid spicy and fatty foods</li>
          <li>Build a bedtime ritual: meditation, deep breathing, stretching, reading</li>
          <li>Bed is for sleep and intimacy only — no working or scrolling</li>
          <li>If not asleep in 20 minutes, get up and do something relaxing</li>
          <li>Don't sleep in more than 1 hour on weekends — disrupts your clock</li>
          <li>Get plenty of natural light during the day</li>
          <li>Limit alcohol — it aids falling asleep but reduces sleep quality</li>
          <li>Consider white noise or earplugs for noise</li>
          <li>Exercise 150+ minutes per week (cardio + strength)</li>
          <li>See a doctor if sleep problems persist beyond 2 weeks</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Does everyone need 8 hours?</strong><br />
          A: Not necessarily. Most adults need 7–9 hours. The key is finding your ideal cycle count (4–6).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Is quality more important than quantity?</strong><br />
          A: Yes. Waking at the end of a cycle feels better than 8 hours interrupted mid-cycle.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What about insomnia?</strong><br />
          A: If difficulty persists beyond 2 weeks, consult a doctor. Short-term insomnia often resolves with routine and environment adjustments.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → Calculate Your Optimal Sleep Time
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '睡眠科学完全指南：优化你的每一觉' : 'The Complete Sleep Science Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
