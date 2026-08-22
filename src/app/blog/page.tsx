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
]

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Blog</h1>
      <p className="text-gray-500 text-sm mb-8">Step-by-step guides for every free tool on this site.</p>
      <div className="grid gap-4">
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
