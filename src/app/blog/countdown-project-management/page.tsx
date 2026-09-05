import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '项目管理：用倒计时提高工作效率'
      : 'Project Management: Using Countdown Timers to Boost Productivity',
    description: lang === 'zh'
      ? '如何用倒计时工具管理项目截止日期、提高团队效率、避免拖延症。'
      : 'How to use countdown timers for project deadline management, team efficiency, and overcoming procrastination.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/countdown-project-management',
      languages: { 'en-US': '/blog/countdown-project-management', 'x-default': '/blog/countdown-project-management' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/countdown-project-management' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么倒计时能提高效率?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          心理学研究表明,<strong>可视化的时间压力</strong>能显著提高专注力。当你看到"距离截止日期还有15天",大脑会自动进入"紧迫模式",减少拖延行为。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种项目管理场景</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 个人项目</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          自由职业者、学生、创作者:设置每个里程碑的截止日期,用倒计时可视化进度。例如"距离论文提交还有30天"比"下个月交论文"更有驱动力。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 团队协作</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          在看板工具(如Trello、Notion)中添加倒计时,让每个成员清楚知道任务的紧迫程度。Sprint规划时用倒计时明确冲刺周期。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 营销活动</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          限时优惠、产品发布、活动倒计时——在网站上显示倒计时能创造紧迫感,提高转化率。研究表明,带倒计时的落地页转化率提升20-30%。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实用技巧</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>把大项目拆分成小任务,每个任务设置独立倒计时</li>
          <li>在倒计时到期前设置提醒(7天、3天、1天)</li>
          <li>用"已过去天数"追踪项目进展(例如"项目已进行45天")</li>
          <li>在团队共享文档中显示关键截止日期的倒计时</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → 立即使用倒计时计算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Countdown Timers Boost Productivity?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Psychology research shows that <strong>visual time pressure</strong> significantly improves focus. When you see "15 days until deadline," your brain automatically enters "urgency mode," reducing procrastination.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Project Management Scenarios</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Personal Projects</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancers, students, creators: set deadlines for each milestone and use countdowns to visualize progress. "30 days until thesis submission" is more motivating than "due next month."
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Team Collaboration</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Add countdowns to Kanban tools (Trello, Notion) so every member knows task urgency. Use countdowns in Sprint planning to define sprint cycles clearly.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Marketing Campaigns</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Limited-time offers, product launches, event countdowns — displaying countdowns on websites creates urgency and increases conversion rates by 20-30%.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Tips</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Break large projects into smaller tasks with individual countdowns</li>
          <li>Set reminders before countdowns expire (7 days, 3 days, 1 day)</li>
          <li>Track progress with "days elapsed" counters</li>
          <li>Display key deadline countdowns in team shared documents</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → Try the Countdown Calculator Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '项目管理：用倒计时提高效率' : 'Project Management: Using Countdown Timers'}
      </h1>
      {content[lang]}
    </div>
  )
}
