import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '睡眠负债：欠的觉真的能补回来吗'
      : 'Sleep Debt: Can You Actually Catch Up on Lost Sleep?',
    description: lang === 'zh'
      ? '睡眠负债是什么？周末补觉有用吗？慢性缺觉对注意力、代谢和情绪的真实影响，以及科学还款方法。'
      : 'What sleep debt does to your body, why weekend lie-ins only partially work, and how to repay lost sleep without wrecking your schedule.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/sleep-debt-recovery',
      languages: { 'en-US': '/blog/sleep-debt-recovery', 'x-default': '/blog/sleep-debt-recovery' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/sleep-debt-recovery' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can you pay off sleep debt by sleeping more on weekends?", "acceptedAnswer": {"@type": "Answer", "text": "Partially. Extra weekend sleep restores some alertness and reduces immediate deficits, but studies show metabolic and cognitive effects from chronic restriction persist even after recovery sleep."}}, {"@type": "Question", "name": "How do you calculate sleep debt?", "acceptedAnswer": {"@type": "Answer", "text": "Subtract hours slept from hours needed over the past 7–14 days. Sleeping 6 hours a night for five days against an 8-hour need leaves roughly 10 hours of debt."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">睡眠负债是什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          每个人需要的睡眠量不同（成人普遍 7–9 小时）。实际睡的比需要的少，差额就累积成「睡眠负债」。它不是比喻——斯坦福大学的睡眠剥夺实验显示，连续 14 天只睡 6 小时，认知表现会降到连续 48 小时不睡的水平，而受试者自己通常「感觉还好」。这就是负债的危险之处：<strong>主观感觉和实际能力会脱钩</strong>。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">身体在欠账时发生什么</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🧠 <strong>前 24 小时</strong>：注意力涣散，反应变慢，情绪调节能力下降</p>
          <p>⚡ <strong>连续 3 晚 6 小时</strong>：血糖调节开始异常，等同糖尿病前期水平</p>
          <p>📉 <strong>一周以上</strong>：记忆巩固受损，学习效率显著降低</p>
          <p>❤️ <strong>长期</strong>：心血管风险上升，免疫力下降，体重增加（饥饿素升高、瘦素降低）</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">周末补觉有用吗：部分有用</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          研究结论比较一致：周末多睡 1–2 小时能恢复一部分警觉性和情绪，但<strong>代谢层面的损伤不会完全逆转</strong>。加州大学的研究发现，长期每晚睡 6 小时的人即使周末睡 10 小时，胰岛素敏感性仍低于对照组。而且周末猛睡会推迟生物钟，导致周日晚上失眠、周一更痛苦——「社交时差」。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">科学还债的三个方法</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>提前入睡，而不是延后起床</strong>：把上床时间提前 30–60 分钟，比周末睡到中午对生物钟友好得多</li>
          <li><strong>20 分钟午睡补急账</strong>：短午睡恢复警觉性最有效；超过 90 分钟进入深睡期，醒来会昏沉</li>
          <li><strong>按睡眠周期凑整</strong>：一个周期 90 分钟，从预计起床时间倒推入睡点，保证完整的 4–6 个周期</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">每天睡 6 小时算欠觉吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">对绝大多数成人来说是。7 小时是多数研究采用的下限，6 小时连续一周就会出现可测量的认知下降。少数人携带 DEC2 基因变异，确实只需 6 小时——但概率不到 1%。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">补觉一次要还多久？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">研究显示严重限制后的完全恢复需要多天——不是「一晚睡够就清零」。用 90 分钟周期倒推，连续几晚比一晚猛睡更有效。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → 用睡眠计算器倒推入睡时间，按周期还债
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Sleep Debt Actually Is</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Everyone needs a different amount of sleep — most adults land between 7 and 9 hours. Sleep less than you need and the shortfall accumulates as debt. It's not a metaphor: Stanford's sleep restriction experiments showed that after 14 nights at 6 hours, cognitive performance drops to the level of someone awake for 48 straight hours — while the subjects themselves report feeling "pretty much fine." That's the danger: <strong>perceived alertness and actual ability drift apart</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Happens While You're in the Red</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🧠 <strong>First 24 hours</strong>: attention fragments, reaction times slow, emotional regulation slips</p>
          <p>⚡ <strong>Three nights at 6 hours</strong>: blood sugar control starts drifting toward pre-diabetic ranges</p>
          <p>📉 <strong>A week or more</strong>: memory consolidation suffers, learning efficiency drops measurably</p>
          <p>❤️ <strong>Chronic</strong>: elevated cardiovascular risk, weaker immunity, weight gain — hunger hormones up, satiety hormones down</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Do Weekend Lie-Ins Help? Partially.</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The research agrees on one thing: an extra hour or two on weekends restores some alertness and mood. What it doesn't restore is metabolic health. UC Berkeley's studies found people habitually sleeping 6 hours a night still showed impaired insulin sensitivity after sleeping 10 hours on weekends. Oversleeping also shifts your body clock later, making Sunday night insomnia and Monday misery a weekly ritual — "social jet lag."
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Ways to Repay Debt Scientifically</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Go to bed earlier, don't wake up later</strong>: moving bedtime up 30–60 minutes treats your circadian clock far better than a weekend lie-in</li>
          <li><strong>Nap 20 minutes for the urgent balance</strong>: short naps restore alertness best; past 90 minutes you drop into deep sleep and wake up groggy</li>
          <li><strong>Work in 90-minute cycles</strong>: count back from your wake time to find a bedtime that delivers complete 4–6 cycles</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Is 6 hours a night a problem?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">For almost all adults, yes. Seven hours is the floor most studies use, and a week at 6 produces measurable cognitive decline. A small minority carry the DEC2 gene variant and genuinely need only 6 — under 1% of people.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">How long to recover from sleep debt?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Full recovery from significant restriction takes multiple nights, not one long lie-in. Working backward in 90-minute cycles across several nights beats a single weekend marathon.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/sleep-calculator" className="text-orange-600 font-medium hover:underline">
            → Work backward with the Sleep Calculator and repay in cycles
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '睡眠负债：欠的觉真的能补回来吗' : 'Sleep Debt: Can You Actually Catch Up on Lost Sleep?'}
      </h1>
      {content[lang]}
    </div>
  )
}
