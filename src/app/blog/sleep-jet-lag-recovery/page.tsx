import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '时差调整完全指南：旅行者如何用睡眠计算器对抗时差反应，包括飞行前调整、飞机上睡眠技巧和到达后的恢复策略。' : 'en'
  return {
    title: lang === 'zh'
      ? '时差调整：旅行者睡眠计算器'
      : 'Beat Jet Lag: Sleep Calculator for Travelers',
    description: lang === 'zh'
      ? '旅行者如何用睡眠计算器对抗时差反应,飞行前调整和到达后恢复策略。'
      : 'How travelers use sleep calculators to beat jet lag, with pre-flight adjustment and post-arrival recovery strategies.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/sleep-jet-lag-recovery',
      languages: { 'en-US': '/blog/sleep-jet-lag-recovery', 'x-default': '/blog/sleep-jet-lag-recovery' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/sleep-jet-lag-recovery' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Jet lag recovery time?", "acceptedAnswer": {"@type": "Answer", "text": "About 1 day per time zone crossed."}}, {"@type": "Question", "name": "Pre-flight adjustment?", "acceptedAnswer": {"@type": "Answer", "text": "Shift sleep 1–2 hours 2–3 days before."}}, {"@type": "Question", "name": "Post-arrival tips?", "acceptedAnswer": {"@type": "Answer", "text": "Sunlight by day, no blue light at night, local time."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">时差反应如何影响睡眠?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          跨越 3 个以上时区时，身体的昼夜节律（生物钟）与目的地时间不同步。症状包括失眠、白天嗜睡、注意力下降和消化不良。每跨越 1 个时区，身体大约需要 1 天来适应。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">飞行前的睡眠调整</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          出发前 2–3 天开始逐步调整作息：<strong>往东飞</strong>：每天提前 1 小时睡觉和起床。<strong>往西飞</strong>：每天推迟 1 小时。用睡眠计算器规划每天的入睡和起床时间，让身体提前适应目的地时区。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">飞机上的睡眠策略</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          根据目的地时间决定在飞机上是睡还是醒。如果到达时是晚上，飞机上尽量睡觉；如果到达时是白天，保持清醒。用睡眠计算器计算飞行途中需要的睡眠周期数（每个 90 分钟）。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">到达后的恢复</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          到达后立刻按目的地时间生活。<strong>关键</strong>：白天多晒太阳（光线是最强的生物钟调节器），晚上避免蓝光。用睡眠计算器设定新的入睡时间，确保在正确的睡眠周期结束点醒来。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实用技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>短时差（1–3 小时）</strong>：通常 1–2 天自然恢复，不需要特殊调整</li>
          <li><strong>中等时差（4–6 小时）</strong>：飞行前 2 天开始调整，到达后 3–4 天恢复</li>
          <li><strong>大时差（7+ 小时）</strong>：飞行前 3 天调整，考虑使用褪黑素辅助</li>
          <li><strong>避免午睡超过 20 分钟</strong>：过长午睡会干扰夜间睡眠</li>
          <li><strong>多喝水</strong>：脱水加重时差症状</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">时差多久恢复?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">每跨 1 个时区约 1 天。跨 5 个时区约 5 天。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">飞行前怎么调整?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">往东飞提前 1–2h 睡觉，往西飞推迟。出发前 2–3 天开始。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">到达后怎么适应?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">白天多晒太阳，晚上避免蓝光，按当地时间作息。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → 用睡眠计算器规划你的旅行睡眠
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Jet Lag Affects Sleep</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When crossing 3+ time zones, your circadian rhythm (body clock) falls out of sync with local time. Symptoms include insomnia, daytime drowsiness, poor concentration, and digestive issues. It takes roughly 1 day per time zone crossed to fully adjust.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Pre-Flight Sleep Adjustment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start adjusting 2–3 days before departure: <strong>flying east</strong> — shift bedtime and wake time 1 hour earlier each day. <strong>Flying west</strong> — shift 1 hour later. Use a sleep calculator to plan each day's sleep schedule so your body adapts ahead of time.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">In-Flight Sleep Strategy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Decide whether to sleep or stay awake on the plane based on your arrival time. If you arrive at night, sleep on the plane. If arriving during the day, stay awake. Use the sleep calculator to figure out how many 90-minute cycles to aim for during the flight.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Post-Arrival Recovery</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Immediately live on local time after arrival. <strong>Key tip</strong>: get lots of sunlight during the day (light is the strongest circadian regulator) and avoid blue light at night. Use the sleep calculator to set your new bedtime and wake up at the right point in your sleep cycle.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Short jet lag (1–3 hours)</strong> — usually resolves in 1–2 days naturally</li>
          <li><strong>Medium jet lag (4–6 hours)</strong> — adjust 2 days before, recover in 3–4 days</li>
          <li><strong>Large jet lag (7+ hours)</strong> — adjust 3 days before, consider melatonin</li>
          <li><strong>Limit naps to 20 minutes</strong> — longer naps disrupt nighttime sleep</li>
          <li><strong>Stay hydrated</strong> — dehydration worsens jet lag symptoms</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">How long does jet lag take to recover?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">About 1 day per time zone. 5 zones ≈ 5 days.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to adjust before flying?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Shift sleep 1–2 hours earlier (east) or later (west) 2–3 days before.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How to adapt after arrival?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Sunlight during day, avoid blue light at night, live on local time.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → Plan Your Travel Sleep with the Calculator
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '时差调整：旅行者睡眠计算器' : 'Beat Jet Lag: Sleep Calculator for Travelers'}
      </h1>
      {content[lang]}
    </div>
  )
}
