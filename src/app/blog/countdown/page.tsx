import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '倒计时计算器使用完全指南：手把手教你设置生日倒计时、考试倒计时、项目截止日倒计时，实时跳秒显示剩余天数小时分钟秒数，还支持正计时模式记录已过去的时间。' : 'en'
  return {
    title: lang === 'zh'
      ? '日期倒计时计算指南 — 距离某天还有多少天'
      : 'Countdown Calculator Guide',
    description: lang === 'zh'
      ? '教你用日期倒计时计算器算出距离生日、节假日、考试还有多少天,含跨年计算和工作日统计。'
      : 'Learn how to count days until a date — birthdays, holidays, exams. Includes cross-year calculations and working-day counting.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/countdown',
      languages: { 'en-US': '/blog/countdown', 'x-default': '/blog/countdown' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/countdown' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">倒计时怎么算?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          核心公式:<strong>天数 = 目标日期 - 今天日期</strong>。听起来简单,但手动算跨月、跨年容易出错(尤其是闰年 2 月有 29 天)。日期计算器自动处理这些细节。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">四种常见使用场景</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 生日倒计时</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "距离我生日还有多少天?"——输入你的生日日期,计算器立刻告诉你。适合提前准备派对、礼物。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 节假日倒计时</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          春节、国庆、圣诞节、新年——输入日期就知道还有几天。适合规划假期旅行、买机票。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 考试/截止日期</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          高考、托福、项目 deadline——倒计时帮你掌握时间节奏。输入考试日期,看看还剩多少天复习。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. 工作日统计</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          不只是算天数,还能排除周末和法定假日,告诉你实际有多少个工作日。适合项目排期、请假规划。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → 立即使用日期倒计时计算器
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Does a Date Countdown Work?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The core math: <strong>Days Remaining = Target Date - Today</strong>. Simple in theory, but manual calculation across months and years is error-prone (leap years add an extra day in February). A countdown calculator handles these details automatically.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Common Use Cases</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Birthday Countdown</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "How many days until my birthday?" — enter your birth date and get the answer instantly. Great for planning parties or ordering gifts in advance.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Holiday Countdown</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Christmas, New Year, Thanksgiving, summer vacation — enter the date and know exactly how many days are left. Perfect for planning trips and booking flights.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Exam / Deadline Countdown</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          SAT, GRE, project deadline — a countdown helps you pace your preparation. Enter the exam date and see how many study days you have left.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Working Days Calculator</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond simple day counting, some calculators exclude weekends and public holidays to show actual working days. Useful for project planning, leave requests, and sprint scheduling.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/countdown" className="text-orange-600 font-medium hover:underline">
            → Try the Date Countdown Calculator Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '日期倒计时计算指南' : 'Date Countdown Calculator Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
