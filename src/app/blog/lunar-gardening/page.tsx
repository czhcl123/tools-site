import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '月相园艺指南：根据月亮周期安排播种、移栽和收获时间，了解月相 gardening 的科学原理和实践方法，让你的花园和菜园产量更高。' : 'en'
  return {
    title: lang === 'zh'
      ? ' lunar 园艺指南：按月亮种植'
      : 'Lunar Gardening Guide',
    description: lang === 'zh'
      ? ' lunar 园艺法：月相与种植的关系，上弦月和下弦月的活动建议，以及科学证据。'
      : 'Lunar gardening: how moon phases affect planting, waxing vs waning moon activities, scientific evidence, and practical tips.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/lunar-gardening',
      languages: { 'en-US': '/blog/lunar-gardening', 'x-default': '/blog/lunar-gardening' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/lunar-gardening' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是 Lunar 园艺？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lunar 园艺（月相园艺）是一种根据月相周期安排种植活动的传统方法。几千年来，农民根据月亮的盈亏来决定播种、修剪和收获的时间。核心理念是：月亮的引力影响地球的水分，从而影响植物生长。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">月相与种植活动</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🌙 <strong>新月 → 上弦月（盈月期）</strong>：适合播种叶菜类（生菜、菠菜、白菜）。月亮引力增强，水分向上流动，促进叶片生长。</p>
          <p>🌓 <strong>上弦月 → 满月</strong>：适合播种果实类（番茄、辣椒、黄瓜）。水分继续上升，果实发育旺盛。</p>
          <p>🌕 <strong>满月 → 下弦月（亏月期）</strong>：适合收获、修剪、除草。水分回流，植物活动减缓。</p>
          <p>🌘 <strong>下弦月 → 新月</strong>：适合翻土、施堆肥、休息。土地恢复期。</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">科学证据</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          科学界对 lunar 园艺的看法<strong>存在争议</strong>。一些研究发现月相与种子发芽率有微弱关联，但多数严格的对照实验没有发现显著差异。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          支持者的解释：月亮引力确实影响潮汐，也可能影响土壤中的水分。但这种影响是否足以改变植物生长，尚无定论。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实用建议</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>作为参考而非规则</strong>：不要因为"月相不对"而错过种植窗口</li>
          <li><strong>先保证基础</strong>：土壤、水分、阳光比月相重要100倍</li>
          <li><strong>记录观察</strong>：自己记录每月种植结果，看看是否有规律</li>
          <li><strong>用农历工具</strong>：使用农历日历快速查看月相，不用查万年历</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Lunar 园艺真的有效吗？</strong><br />
          A: 没有确凿科学证据。但作为几千年的传统智慧，它至少不会伤害你的植物。如果你喜欢这种方式，完全可以参考。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 每个月最佳种植日是哪天？</strong><br />
          A: 因地区和作物而异。一般来说，新月和满月前后2-3天是活动高峰期。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → 查看农历和月相
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Is Lunar Gardening?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lunar gardening is a traditional practice of scheduling planting activities based on moon phases. For thousands of years, farmers used the moon's waxing and waning to decide when to sow, prune, and harvest. The core idea: the moon's gravity influences Earth's water, affecting plant growth.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Moon Phases and Activities</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🌙 <strong>New Moon → First Quarter (Waxing)</strong>: Plant leafy greens (lettuce, spinach, cabbage). Increasing gravity pulls water up, promoting leaf growth.</p>
          <p>🌓 <strong>First Quarter → Full Moon</strong>: Plant fruiting crops (tomatoes, peppers, cucumbers). Water continues rising; fruit development peaks.</p>
          <p>🌕 <strong>Full Moon → Last Quarter (Waning)</strong>: Harvest, prune, weed. Water recedes; plant activity slows.</p>
          <p>🌘 <strong>Last Quarter → New Moon</strong>: Turn soil, add compost, rest. Land recovery period.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Scientific Evidence</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Science is <strong>divided</strong> on lunar gardening. Some studies found weak correlations between moon phases and seed germination rates, but most rigorous controlled experiments show no significant difference.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Supporters argue the moon's gravity affects tides and possibly soil moisture. But whether this is enough to change plant growth remains unproven.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Use as reference, not rule</strong>: Don't miss a planting window because the "moon phase is wrong"</li>
          <li><strong>Nail the basics first</strong>: Soil, water, and sunlight matter 100x more than moon phase</li>
          <li><strong>Keep records</strong>: Track your planting results monthly; see if patterns emerge</li>
          <li><strong>Use a lunar calendar</strong>: Quick moon phase lookup without consulting almanacs</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Does lunar gardening really work?</strong><br />
          A: No conclusive scientific evidence. But as thousands of years of tradition, it won't hurt your plants. If you enjoy the practice, go for it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What are the best planting days each month?</strong><br />
          A: Varies by region and crop. Generally, 2-3 days around new moon and full moon are peak activity periods.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → Check the lunar calendar and moon phases
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? ' Lunar 园艺指南：按月亮种植' : 'Lunar Gardening Guide: Plant by the Moon'}
      </h1>
      {content[lang]}
    </div>
  )
}
