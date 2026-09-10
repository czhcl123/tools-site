import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Practical Tool Guides & Tips',
  description: 'Step-by-step guides for free online calculators: discount, BMI, countdown, QR code, JSON, HEIC, word counter, and more.',
  alternates: {
    canonical: 'https://tools-site-production.up.railway.app/blog',
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog' },
    languages: {
      'en-US': '/blog',
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
  { slug: 'nap-calculator', icon: '💤', title: 'Nap Calculator: How Long Should You Nap?', zhTitle: '午睡计算器：你应该午睡多久？' },
  { slug: 'bmi-categories', icon: '📊', title: 'BMI Categories Explained', zhTitle: 'BMI 分类解读' },
  { slug: 'countdown-timer-psychology', icon: '⏱️', title: 'Psychology of Countdown Timers', zhTitle: '倒计时心理学' },
  { slug: 'discount-vs-coupon', icon: '💰', title: 'Discount vs Coupon vs Promo Code', zhTitle: '折扣 vs 优惠券 vs 促销码' },
  { slug: 'heic-vs-jpeg-png', icon: '🖼️', title: 'HEIC vs JPEG vs PNG', zhTitle: 'HEIC vs JPEG vs PNG 格式对比' },
  { slug: 'freelancer-tax-deductions', icon: '🧾', title: 'Freelancer Tax Deductions', zhTitle: '自由职业者税务减免' },
  { slug: 'json-vs-xml-yaml', icon: '📋', title: 'JSON vs XML vs YAML', zhTitle: 'JSON vs XML vs YAML 对比' },
  { slug: 'lunar-gardening', icon: '🌱', title: 'Lunar Gardening Guide', zhTitle: '月相园艺指南' },
  { slug: 'qr-code-creative-uses', icon: '📱', title: '20 Creative QR Code Uses', zhTitle: 'QR 码20种创意用法' },
  { slug: 'metric-vs-imperial', icon: '📐', title: 'Metric vs Imperial', zhTitle: '公制 vs 英制对比' },
  { slug: 'word-count-seo', icon: '📝', title: 'Word Count and SEO', zhTitle: '字数与 SEO' },
  { slug: 'password-manager-guide', icon: '🔑', title: 'Password Manager Guide', zhTitle: '密码管理器指南' },
  // New tool-specific articles (4th post per tool)
  { slug: 'bmi-fitness-planning', icon: '💪', title: 'BMI and Fitness: Creating a Weight Loss Plan', zhTitle: 'BMI 与健身：如何制定减重计划' },
  { slug: 'countdown-wedding-planner', icon: '💒', title: 'Wedding Countdown: Planning Your Perfect Day', zhTitle: '婚礼倒计时：完美婚礼规划指南' },
  { slug: 'discount-business-pricing', icon: '💰', title: 'Smart Pricing: Using Discount Calculators for Business', zhTitle: '智能定价：用折扣计算器优化商业策略' },
  { slug: 'heic-batch-conversion', icon: '📸', title: 'Batch Convert HEIC: Workflow for Photographers', zhTitle: '批量转换 HEIC：摄影师工作流指南' },
  { slug: 'invoice-payment-terms', icon: '📋', title: 'Invoice Payment Terms: Getting Paid Faster', zhTitle: '发票付款条款：如何更快收到款项' },
  { slug: 'json-api-debugging', icon: '🔧', title: 'Debug APIs with JSON Formatter', zhTitle: '用 JSON 格式化工具调试 API' },
  { slug: 'lunar-calendar-business', icon: '🏮', title: 'Lunar Calendar for Business: Planning Around Holidays', zhTitle: '农历与商业：节日营销规划指南' },
  { slug: 'password-team-security', icon: '🛡️', title: 'Team Password Security: Best Practices', zhTitle: '团队密码安全：最佳实践指南' },
  { slug: 'qr-code-event-management', icon: '🎫', title: 'QR Codes for Events: Registration and Check-in', zhTitle: 'QR 码活动管理：签到与注册' },
  { slug: 'sleep-jet-lag-recovery', icon: '✈️', title: 'Beat Jet Lag: Sleep Calculator for Travelers', zhTitle: '时差调整：旅行者睡眠计算器' },
  { slug: 'unit-converter-cooking', icon: '🍳', title: 'Kitchen Unit Converter: Cooking Measurements Guide', zhTitle: '厨房单位换算：烹饪测量完全指南' },
  { slug: 'word-counter-academic', icon: '📝', title: 'Academic Writing: Meeting Word Count Requirements', zhTitle: '学术写作：满足字数要求' },
  // Ultimate guides (deep-dive long-form)
  { slug: 'ultimate-invoicing-guide', icon: '📘', title: 'The Ultimate Invoicing Guide', zhTitle: '终极发票指南：从零到专业开票' },
  { slug: 'ultimate-json-guide', icon: '📘', title: 'The Complete JSON Guide', zhTitle: 'JSON 完全指南：从入门到精通' },
  { slug: 'ultimate-sleep-guide', icon: '📘', title: 'The Complete Sleep Science Guide', zhTitle: '睡眠科学完全指南：优化你的每一觉' },
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
