import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '农历与商业节日营销规划指南：如何利用农历节日安排促销活动，春节、中秋节、端午节的营销时间线，以及跨文化营销中的农历敏感性。' : 'en'
  return {
    title: lang === 'zh'
      ? '农历与商业：节日营销规划指南'
      : 'Lunar Calendar for Business: Planning Around Holidays',
    description: lang === 'zh'
      ? '如何利用农历节日安排促销活动,春节中秋端午营销时间线,跨文化营销注意事项。'
      : 'How to plan marketing campaigns around lunar holidays like Chinese New Year, Mid-Autumn Festival, and Dragon Boat Festival.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/lunar-calendar-business',
      languages: { 'en-US': '/blog/lunar-calendar-business', 'x-default': '/blog/lunar-calendar-business' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/lunar-calendar-business' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么商家需要关注农历?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          全球超过 15 亿人按照农历庆祝节日。春节、中秋节、端午节等不仅是文化盛事，更是巨大的商业机会。提前了解农历日期，才能在对的时间推出对的营销活动。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三大农历节日营销时间线</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">春节（农历正月初一）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          最重要的农历节日。营销准备：节前 2–3 个月启动预热，节前 1 个月上线促销，除夕至初七为核心销售期。红色主题、红包、礼盒是必备元素。年货、礼品、食品类目销量翻倍。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">中秋节（农历八月十五）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          团圆主题，月饼是核心品类。节前 1 个月是销售高峰，礼品、茶叶、家居用品也有显著增长。营销关键词：团圆、感恩、家庭。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">端午节（农历五月初五）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          节前 2–3 周开始推广。粽子、龙舟、健康相关产品是热门品类。端午也适合推出夏季促销，衔接 618 购物节。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">农历日期每年不同</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          农历节日对应的公历日期每年变化（春节在 1 月下旬到 2 月中旬之间浮动）。使用农历转换工具提前确认日期，避免错过营销窗口。建议在年初就锁定全年农历节日日期。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">跨文化营销注意事项</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>尊重传统</strong>：了解节日含义，避免商业化过度引起反感</li>
          <li><strong>视觉元素</strong>：红色=喜庆，白色=丧事，避免颜色禁忌</li>
          <li><strong>送礼文化</strong>：数字 4 不吉利（谐音"死"），8 是幸运数字</li>
          <li><strong>本地化</strong>：不同地区庆祝方式不同，南方和北方习俗有差异</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">商家为什么关注农历?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">全球 15 亿人庆祝农历节日，春节中秋是巨大商业机会。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">春节营销提前多久?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">节前 2–3 个月启动预热，1 个月上线促销。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → 用农历转换工具规划你的营销日历
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Businesses Need the Lunar Calendar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Over 1.5 billion people celebrate holidays based on the lunar calendar. Chinese New Year, Mid-Autumn Festival, and Dragon Boat Festival are not just cultural events — they're massive commercial opportunities. Knowing lunar dates in advance lets you launch campaigns at the right time.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Marketing Timelines for Three Key Holidays</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Chinese New Year (1st day of lunar month 1)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most important lunar holiday. Start warming up 2–3 months early, launch promotions 1 month before, and run peak sales from New Year's Eve through day 7. Red themes, red envelopes, and gift boxes are essential. Sales in gifts, food, and electronics double.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Mid-Autumn Festival (15th day of lunar month 8)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A reunion-themed holiday where mooncakes are the core product. Sales peak 1 month before. Gifts, tea, and home goods also see significant growth. Marketing keywords: reunion, gratitude, family.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Dragon Boat Festival (5th day of lunar month 5)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Promotions start 2–3 weeks before. Zongzi (rice dumplings), dragon boats, and health-related products are popular. The festival also pairs well with summer sales and the 618 shopping event.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Lunar Dates Change Every Year</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lunar holidays fall on different Gregorian dates each year (Chinese New Year floats between late January and mid-February). Use a lunar calendar converter to confirm dates early and avoid missing marketing windows. Lock in all lunar holiday dates at the start of the year.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Cross-Cultural Marketing Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Respect traditions</strong> — understand the meaning; over-commercializing can backfire</li>
          <li><strong>Color matters</strong> — red = celebration, white = mourning; avoid color taboos</li>
          <li><strong>Number symbolism</strong> — 4 is unlucky (sounds like "death"), 8 is lucky</li>
          <li><strong>Regional differences</strong> — customs vary between northern and southern China</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Why should businesses care about the lunar calendar?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">1.5 billion people celebrate lunar festivals. They're huge commercial opportunities.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How early to plan Chinese New Year marketing?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Start 2–3 months before; launch promotions 1 month out.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/lunar-calendar" className="text-orange-600 font-medium hover:underline">
            → Plan Your Marketing Calendar with the Lunar Converter
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '农历与商业：节日营销规划指南' : 'Lunar Calendar for Business: Planning Around Holidays'}
      </h1>
      {content[lang]}
    </div>
  )
}
