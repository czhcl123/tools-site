import type { Metadata } from 'next'
import SleepCalculatorZhClient from './sleep-calculator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '睡眠计算器 - 500K 月搜主词 | 90 分钟周期反推入睡/起床时间',
    description: '免费在线睡眠计算器与睡眠周期计算器:输入起床时间反推最佳入睡时间(90 分钟周期),或输入入睡时间反推最佳起床时间。覆盖 500K+ 月搜主词,cpc $32。支持深度睡眠 / REM 周期说明。无需注册,所有计算在浏览器本地完成。',
    openGraph: {
      title: '睡眠计算器 - 500K 月搜主词 | 90 分钟周期反推入睡/起床时间',
      description: '免费在线睡眠计算器与睡眠周期计算器:输入起床时间反推最佳入睡时间(90 分钟周期),或输入入睡时间反推最佳起床时间。覆盖 500K+ 月搜主词,cpc $32。支持深度睡眠 / REM 周期说明。无需注册,所有计算在浏览器本地完成。',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/sleep-calculator',
      languages: {
        'en-US': '/sleep-calculator',
        'zh-CN': '/zh/sleep-calculator',
        'x-default': '/sleep-calculator',
      },
    },
  }
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      <strong>睡眠计算器</strong>基于 90 分钟一个完整睡眠周期的科学原理(浅睡 → 深睡 → REM),帮你找到最佳的入睡时间或起床时间。本工具按自然日计算,无需注册,所有计算在你浏览器本地完成。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">最常用的睡眠计算场景</h2>
    <p><strong>1. 早起备考 / 上学</strong>。高考、考研、雅思托福口语考试需要 7 点起,本工具反推最佳入睡时间(21:45)。长期熬夜早起会累积睡眠债,影响记忆力。</p>
    <p><strong>2. 倒班 / 夜班</strong>。护士、保安、程序员等夜班人群,本工具帮你算"白天几点起最科学",配合 90 分钟周期减少醒后疲劳感。</p>
    <p><strong>3. 跨时区出差</strong>。从美国飞回北京,本工具反推"北京时间 X 点该睡",避免 jet lag 拖 7 天。</p>
    <p><strong>4. 婴儿 / 儿童作息</strong>。小孩需要 10-13 小时睡眠,本工具按年龄段反推最佳入睡时间,父母不再半夜纠结。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">睡眠周期是什么?</h2>
    <p>90 分钟 = 1 个完整周期:N1(浅睡 5%)→ N2(中度睡眠 45%)→ N3(深睡 25%)→ REM(快速眼动 25%)。每晚 4-6 个周期。起床时间最好在 REM 末期或浅睡阶段(感觉自然清醒,没有困意),不在深睡中被闹钟叫醒。</p>
    <p>本工具页面无 cookie、无登录、无追踪,适合临时查询"今晚几点该睡"。</p>
  </div>
)

export default async function SleepCalculatorZhPage() {
  return <SleepCalculatorZhClient seoBody={seoBodyZh} />
}