import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Practical Tool Guides & Tips',
  description: 'Step-by-step guides for free online calculators: discount, BMI, countdown, QR code, JSON, HEIC, word counter, and more.',
  alternates: {
    canonical: 'https://tools-site-production.up.railway.app/blog',
    languages: {
      'en-US': '/blog',
      'zh-CN': '/zh/blog',
      'x-default': '/blog',
    },
  },
}

const posts = [
  // Original guides
  { slug: 'discount-calculator', icon: '🏷️', title: 'How to Use a Discount Calculator', zhTitle: '折扣计算器使用指南' },
  { slug: 'bmi-calculator', icon: '⚖️', title: 'BMI Calculator Guide', zhTitle: 'BMI 计算器完全指南' },
  { slug: 'countdown', icon: '📅', title: 'Date Countdown Calculator Guide', zhTitle: '日期倒计时计算指南' },
  { slug: 'lunar-calendar', icon: '📆', title: 'Chinese Lunar Calendar Converter Guide', zhTitle: '农历转换完全指南' },
  { slug: 'unit-converter', icon: '📐', title: 'Unit Converter Guide', zhTitle: '单位换算完全指南' },
  { slug: 'qr-code-generator', icon: '📱', title: 'QR Code Generator Guide', zhTitle: 'QR 码生成器使用指南' },
  { slug: 'word-counter', icon: '📝', title: 'Word Counter Guide', zhTitle: '字数统计工具指南' },
  { slug: 'json-formatter', icon: '🔧', title: 'JSON Formatter Guide', zhTitle: 'JSON 格式化工具指南' },
  { slug: 'heic-to-jpg', icon: '🖼️', title: 'HEIC to JPG Converter Guide', zhTitle: 'HEIC 转 JPG 完全指南' },
  { slug: 'invoice-generator', icon: '📄', title: 'Invoice Generator Guide', zhTitle: '发票生成器使用指南' },
  { slug: 'sleep-calculator', icon: '😴', title: 'Sleep Calculator Guide', zhTitle: '睡眠计算器使用指南' },
  { slug: 'password-generator', icon: '🔐', title: 'Password Generator Guide', zhTitle: '密码生成器使用指南' },
  // Deep dive articles
  { slug: 'bmi-calculator-vs-body-fat', icon: '💪', title: 'BMI vs Body Fat: Which Matters More?', zhTitle: 'BMI vs 体脂率：哪个更重要？' },
  { slug: 'countdown-project-management', icon: '🎯', title: 'Project Management with Countdown Timers', zhTitle: '项目管理：用倒计时提高效率' },
  { slug: 'discount-shopping-tips', icon: '🛒', title: 'Shopping Savings Tips', zhTitle: '购物省钱技巧' },
  { slug: 'heic-iphone-photo-guide', icon: '📸', title: 'iPhone Photo Format Guide: HEIC vs JPG vs PNG', zhTitle: 'iPhone照片格式指南' },
  { slug: 'invoice-freelancer-guide', icon: '💼', title: 'Freelancer Invoicing Guide', zhTitle: '自由职业者开票指南' },
  { slug: 'json-beginners-guide', icon: '📖', title: 'JSON for Beginners', zhTitle: 'JSON入门指南' },
  { slug: 'lunar-calendar-traditions', icon: '🏮', title: 'Lunar Calendar and Traditions', zhTitle: '农历与传统节日' },
  { slug: 'qr-code-marketing', icon: '📣', title: 'QR Code Marketing Guide', zhTitle: 'QR码营销指南' },
  { slug: 'sleep-science-guide', icon: '🧠', title: 'Sleep Science Guide', zhTitle: '睡眠科学指南' },
  { slug: 'unit-converter-travel', icon: '✈️', title: 'Travel Unit Conversion Guide', zhTitle: '旅行单位换算指南' },
  { slug: 'word-counter-writing-tips', icon: '✍️', title: 'Writing Word Count Tips', zhTitle: '写作字数统计技巧' },
  { slug: 'password-cybersecurity-guide', icon: '🛡️', title: 'Cybersecurity 101', zhTitle: '网络安全入门' },
]

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/" className="text-orange-500 text-sm hover:underline">← Back to Home</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Blog</h1>
      <p className="text-gray-500 text-sm mb-8">Step-by-step guides for every free tool on this site.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-5 hover:border-orange-200 hover:shadow-sm transition-all"
          >
            <span className="text-2xl">{p.icon}</span>
            <div>
              <div className="font-medium text-gray-800">{p.title}</div>
              <div className="text-xs text-gray-400 mt-0.5">{p.zhTitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
