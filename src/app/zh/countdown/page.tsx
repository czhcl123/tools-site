import type { Metadata } from 'next'
import Countdown from '../../countdown/countdown-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: '日期计算器', en: 'Countdown Calculator - Days Until or Since Any Date' }
  const descriptions = {
    zh: '计算任意日期距离今天还有多少天，或已过去多少天。支持倒计时和日期差计算。',
    en: 'Free online countdown calculator. Find how many days until or since any date. Perfect for event planning, anniversaries, and deadlines.',
  }
  const ogTitles = { zh: '日期计算器 - 实用计算器', en: 'Countdown Calculator - Practical Tools' }
  const ogDescs = {
    zh: '计算任意日期距离今天还有多少天，或已过去多少天。支持倒计时和日期差计算。',
    en: 'Free online countdown calculator. Find how many days until or since any date. Perfect for event planning, anniversaries, and deadlines.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/countdown',
      languages: {
        'zh-CN': '/zh/countdown',
        'en-US': '/countdown',
        'x-default': '/countdown',
      },
    },
  }
}

const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '怎么计算"距今天有多少天"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '选择未来某天作为目标日期,点击"计算",会显示"距离目标还有 X 天"。例如今天是 2026-07-14,目标是 2026-10-01,显示距离还有 79 天。本工具按自然日计算(不是工作日),凌晨 0 点跨天自动 +1。',
      },
    },
    {
      '@type': 'Question',
      name: '可以算过去的日期吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。选过去某天,会显示"已过去 X 天"。比如要算宝宝出生 100 天,选出生日期 + 今天,显示"已过去 N 天"——常用于纪念日追踪(月度 / 100 天 / 365 天 / 1000 天)。',
      },
    },
    {
      '@type': 'Question',
      name: '闰年 / 大小月怎么处理?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '本工具底层用 JavaScript Date 对象,严格按照公历处理。2 月 29 日闰年才会出现;4 月只有 30 天;其他月份也按公历规则。计算结果不会出现"1 个月 = 30 天"这种粗略估算,而是按每日 24 小时精确差。',
      },
    },
    {
      '@type': 'Question',
      name: '工作日怎么算?(排除周末)',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '本工具不算工作日,只算自然日(包含周末和法定节假日)。如果需要工作日计算,搭配 Excel NETWORKDAYS 函数或公司项目管理工具。本工具适合:高考倒计时、婚礼倒计时、孕周计算、周年纪念日——这些都按自然日。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      <strong>日期计算器</strong>三个数字就解决"距目标还有多少天"或"距某事件已过去多少天"。本工具按自然日精确计算,自动处理闰年 / 大小月,无需手算。所有计算在你浏览器本地完成,适合婚假规划、孕周计算、纪念日追踪、考前倒计时等。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">最常用的日期计算场景</h2>
    <p><strong>1. 高考 / 中考倒计时</strong>。距离高考 200 天 / 100 天 / 30 天节点,本工具一键显示。家长群每周自动播报孩子备考天数,适合做心理建设。</p>
    <p><strong>2. 周年纪念日</strong>。宝宝出生 100 天、结婚 1000 天、戒烟 365 天——这类里程碑(100 / 200 / 365 / 1000 天)用本工具查过往日期非常方便,比翻日历快。</p>
    <p><strong>3. 项目 deadline</strong>。"距离上线还有 21 天","距离 PR 截止还有 14 天"。跨时区团队(亚洲 / 欧洲)用截止日期 + 本工具,比 Excel 公式更直观。</p>
    <p><strong>4. 旅游 / 假期</strong>。"还有 X 天就放假"或"还有 X 天生日",节假日开始 / 结束倒计时,直接看结果。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">跟日历 App 区别在哪?</h2>
    <p>系统日历 App 需要手动建提醒事件,操作 3 步以上;本工具输入日期 + 1 次点击即可。适合:临时算"还有 X 天退休"、"宝宝出生 200 天"。长期重复事件用日历 App 更合适。本工具页面无 cookie、无登录、无追踪,适合简单查询场景。</p>
  </div>
)


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '如何计算两个日期之间的天数?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '选择起始日期和结束日期，点击计算后会显示两者之间的天数差、周数、小时数。',
      },
    },
    {
      '@type': 'Question',
      name: '可以计算过去的日期吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。输入任一过去的日期，会显示距今已经过去多少天。',
      },
    },
    {
      '@type': 'Question',
      name: '能处理闰年吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '能。我们会根据公历计算，包括闰年、乔丐年。',
      },
    }
  ],
}

export default async function CountdownPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <Countdown initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
