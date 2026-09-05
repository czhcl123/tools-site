import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? '睡眠科学：为什么8小时睡眠不一定够' : 'Sleep Science: Why 8 Hours May Not Be Enough',
    description: lang === 'zh' ? '睡眠科学原理、个体差异、睡眠质量评估,以及如何优化你的睡眠。' : 'Sleep science principles, individual differences, sleep quality assessment, and how to optimize your sleep.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/sleep-science-guide',
      languages: { 'en-US': '/blog/sleep-science-guide', 'x-default': '/blog/sleep-science-guide' },
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">睡眠的四个阶段</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一个完整的睡眠周期约90分钟,包括:<strong>N1(浅睡)→N2(中睡)→N3(深睡)→REM(快速眼动)</strong>。深睡修复身体,REM巩固记忆。每晚需要4-6个完整周期。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么8小时不一定够?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          睡眠需求因人而异。有些人天生是"短睡者"(6小时足够),有些人需要9小时。<strong>关键不是时长,而是质量</strong>——你是否在周期结束时自然醒来?
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何评估睡眠质量?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>入睡速度</strong> — 30分钟内入睡为正常</li>
          <li><strong>夜间醒来</strong> — 每晚不超过1次</li>
          <li><strong>早晨感受</strong> — 自然醒来不依赖闹钟</li>
          <li><strong>日间精力</strong> — 白天不犯困</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">改善睡眠的科学方法</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          保持规律作息、控制光照(白天多晒太阳,晚上避蓝光)、优化卧室环境(18-22°C)、避免睡前剧烈运动和大量进食。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → 计算你的最佳睡眠时间
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Four Stages of Sleep</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A complete sleep cycle is about 90 minutes: <strong>N1 (light) → N2 (medium) → N3 (deep) → REM (rapid eye movement)</strong>. Deep sleep repairs the body; REM consolidates memory. You need 4-6 complete cycles per night.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why 8 Hours May Not Be Enough?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sleep needs vary. Some are "short sleepers" (6 hours is enough), others need 9 hours. <strong>Quality matters more than quantity</strong> — do you wake naturally at the end of a cycle?
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Assess Sleep Quality?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Fall asleep speed</strong> — within 30 minutes is normal</li>
          <li><strong>Night awakenings</strong> — no more than once per night</li>
          <li><strong>Morning feeling</strong> — wake naturally without alarm</li>
          <li><strong>Daytime energy</strong> — no drowsiness during the day</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Science-Based Sleep Tips</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Maintain regular sleep schedule, control light exposure (sunlight during day, avoid blue light at night), optimize bedroom environment (18-22°C), avoid intense exercise and heavy meals before bed.
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
        {lang === 'zh' ? '睡眠科学指南' : 'Sleep Science Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
