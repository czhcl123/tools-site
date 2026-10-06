import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '阅读速度对照：读 1000 字要多久'
      : 'Reading Speed: How Long to Read 1,000 Words',
    description: lang === 'zh'
      ? '普通人阅读速度是多少？博客、论文、邮件各需要多长时间读完，怎么用字数换算阅读时间。'
      : 'Average reading speeds for adults, how long blog posts and papers take to read, and how to convert word counts into reading time.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/reading-time-1000-words',
      languages: { 'en-US': '/blog/reading-time-1000-words', 'x-default': '/blog/reading-time-1000-words' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/reading-time-1000-words' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the average reading speed?", "acceptedAnswer": {"@type": "Answer", "text": "Most adults read English prose at 200–250 words per minute. That puts 1,000 words at roughly 4–5 minutes."}}, {"@type": "Question", "name": "How long does it take to read a 1,500-word article?", "acceptedAnswer": {"@type": "Answer", "text": "About 6–8 minutes at normal speed. Skimming for key points cuts that to 2–3 minutes."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">普通人的阅读速度是多少</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          成年人默读英文散文的速度一般在 <strong>200–250 词/分钟</strong>。受过训练的读者能到 300–400，快速浏览（skimming）可以到 600+，但信息留存率会掉。中文阅读速度通常按字数算，一般 <strong>300–500 字/分钟</strong>，和英文词数换算比例接近 1:1.5（一个英文词约等于 1.5 个汉字的信息量）。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">不同内容要读多久</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>✉️ <strong>工作邮件</strong>（200 词）：约 1 分钟</p>
          <p>📝 <strong>博客文章</strong>（1,500 词）：6–8 分钟</p>
          <p>📄 <strong>行业报告章节</strong>（5,000 词）：20–25 分钟</p>
          <p>📚 <strong>小说章节</strong>（8,000 词）：30–40 分钟（叙事文本读起来更快）</p>
          <p>🎓 <strong>学术论文</strong>（8,000 词）：40–60 分钟（需要停下来思考）</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          规律很清楚：文本越「硬」，实际速度越低。小说比论文快一倍很正常，因为叙事的上下文连贯，大脑处理起来省力。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么网站都标「阅读时间 5 分钟」</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          内容创作者用「阅读时间」帮读者做预判——值不值得点进去，取决于读者有没有这 5 分钟。计算方法很简单：总字数 ÷ 230（词/分钟），向上取整。写博客时用字数工具统计全文，套这个公式就是准确的阅读时长。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">怎么提高有效阅读速度</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>先看结构</strong>：花 30 秒扫标题和小标题，知道文章讲什么再细读，理解速度能快 30%</li>
          <li><strong>指读引导</strong>：用手指或光标跟随视线，减少回跳（回跳是慢读的最大元凶）</li>
          <li><strong>分场景变速</strong>：新闻扫读、合同精读、小说享受——用同一速度读所有东西是低效的</li>
          <li><strong>减少默读依赖</strong>：逐字念出来的「内心独白」会把速度锁在说话速度（约 150 词/分钟），有意识地跳过发音环节</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">1000 字的中文文章要读几分钟？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">按 400 字/分钟的平均速度约 2.5 分钟。内容较硬（技术、法律）会到 4–5 分钟。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">阅读速度能练吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">能。坚持指读法和结构化阅读 2–4 周，速度通常提升 20–50%，且理解率不降。速读App的效果因人而异，关键还是练习量。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → 先用字数统计工具测出文章长度，再换算阅读时间
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What's a Normal Reading Speed?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most adults read English prose at <strong>200–250 words per minute</strong>. Trained readers hit 300–400, and skimming can push past 600 — at the cost of retention. Chinese reading speed is usually counted in characters: roughly <strong>300–500 characters per minute</strong>, which lines up with English once you account for one English word carrying about 1.5 Chinese characters of information.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Long Different Texts Take</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>✉️ <strong>Work email</strong> (200 words): about 1 minute</p>
          <p>📝 <strong>Blog post</strong> (1,500 words): 6–8 minutes</p>
          <p>📄 <strong>Industry report chapter</strong> (5,000 words): 20–25 minutes</p>
          <p>📚 <strong>Fiction chapter</strong> (8,000 words): 30–40 minutes — narrative reads faster</p>
          <p>🎓 <strong>Academic paper</strong> (8,000 words): 40–60 minutes — with thinking pauses</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The pattern is consistent: denser text means slower real-world speed. A novel running twice as fast as a paper is normal — connected narrative costs the brain less per sentence.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Sites Show "5-Minute Read"</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Creators publish reading time so readers can decide whether they have the minutes to spare. The calculation is plain: total words ÷ 230 words per minute, rounded up. Measure your draft with a word counter, apply the formula, and you have an honest estimate.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Read Faster Without Losing the Point</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Preview the structure</strong>: thirty seconds on headings before the deep read improves comprehension speed by around 30%</li>
          <li><strong>Follow with a pointer</strong>: finger or cursor tracking cuts regressions — re-reading lines is the biggest speed killer</li>
          <li><strong>Match speed to material</strong>: scan news, closely read contracts, enjoy novels; one speed for everything is inefficient</li>
          <li><strong>Quiet the subvocalization</strong>: silently sounding out every word locks you near speaking pace (~150 wpm); consciously skip the pronunciation step</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How long to read a 1,000-word Chinese article?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">About 2.5 minutes at 400 characters per minute. Technical or legal content can stretch that to 4–5 minutes.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Can reading speed be trained?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes. Two to four weeks of pointer tracking and structural reading typically lifts speed 20–50% with comprehension intact. Speed-reading apps vary — practice volume is what counts.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/word-counter" className="text-orange-600 font-medium hover:underline">
            → Measure your article length first, then convert to reading time
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '阅读速度对照：读 1000 字要多久' : 'Reading Speed: How Long to Read 1,000 Words?'}
      </h1>
      {content[lang]}
    </div>
  )
}
