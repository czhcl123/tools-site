import type { Metadata } from 'next'
import DiscountCalculatorClient from '../../discount-calculator/discount-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '在线折扣计算器_打折省钱金额计算_实用计算器',
    description: '输入商品原价和折扣力度（1-99折），快速计算折后价和节省金额。支持微信、电商平台各种折扣场景，免费使用。',
    openGraph: {
      title: '在线折扣计算器_打折省钱金额计算_实用计算器',
      description: '输入商品原价和折扣力度（1-99折），快速计算折后价和节省金额。',
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/discount-calculator',
      languages: {
        'zh-CN': '/zh/discount-calculator',
        'en-US': '/discount-calculator',
        'x-default': '/discount-calculator',
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
      name: '折扣计算器是怎么算折后价的？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '核心公式只有一条：折后价 = 原价 × (折扣 ÷ 10)。在中国大陆的"打几折"语境里,8 折 = 80% = 折后价 × 0.8。例如原价 599 元的羽绒服打 7.5 折,折后就是 599 × 0.75 = 449.25 元,立省 149.75 元。本计算器输入 1-99 之间的任意数字(包括 7.5 这种小数折),立即给出折后价和节省金额。',
      },
    },
    {
      '@type': 'Question',
      name: '满 300 减 50 这种"满减"怎么叠加计算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '满减 ≠ 折扣,这是新手最常踩的坑。判断方法:先算"折后价",再判断是否触发满减门槛。例如商品原价 480 元,店铺打 8 折 = 384 元,如果此时平台有"满 300 减 50"券,则最终价 = 384 - 50 = 334 元;如果没满 300 减 50,就是 384 元。本计算器先算折扣,你可以手动套满减。',
      },
    },
    {
      '@type': 'Question',
      name: '双 11 / 618 跨店满减怎么算最划算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '跨店满减的关键是"凑单"而非"折扣大小"。以淘宝 2024 双 11 "满 300 减 50"为例,实际折扣率 = 50/300 ≈ 83 折。如果你只买一件 280 元的商品,折扣再多也没用(没满 300);但凑到 320 元,立刻立省 50 元,相当于在商品原价基础上额外打 83 折。',
      },
    },
    {
      '@type': 'Question',
      name: '海外网站看到 30% off 是什么意思?和中国"几折"怎么换算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '海外电商的 "30% off" = 减 30% = 中国语境里"打 7 折"。换算公式:海外折扣对应的中国折扣 = 10 - (海外折扣百分比 ÷ 10)。例如美国官网标 "40% off",就是 10 - 4 = 6 折。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么我算出来的价格和商家页面不一样?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三种最常见原因:① 商家用"原价"标的是虚高原价;② 折扣只针对"会员价"或"新人价";③ 用了店铺券 + 平台券 + 跨店满减等多重叠加。本计算器只算最基础的"原价 × 折扣率"。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>输入原价和折扣百分比，秒算折后价和省了多少钱。支持连续折扣（先打折再减固定金额）和反算原价，网购比价、促销计算必备。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">核心公式</h3>
    <p className="bg-gray-50 rounded-lg px-4 py-3 font-mono text-sm">折后价 = 原价 × (折扣 ÷ 10)</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">常见折扣对照</h3>
    <ul className="space-y-1 text-sm">
      <li>🏷️ 8 折 = 原价 × 0.8</li>
      <li>🏷️ 7.5 折 = 原价 × 0.75</li>
      <li>🏷️ 5 折 = 原价 × 0.5（半价）</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有计算在浏览器本地完成，数据不上传。</p>
  </div>
)

export default async function DiscountCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const lang = 'zh'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/discount-calculator" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">折扣计算器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <DiscountCalculatorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">更多工具</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">⚖️ BMI 计算器</a></li>
                  <li><a href="/zh/countdown" className="text-orange-500 hover:underline">📅 倒计时</a></li>
                  <li><a href="/zh/json-formatter" className="text-orange-500 hover:underline">🔧 JSON 格式化</a></li>
                  <li><a href="/zh/qr-code-generator" className="text-orange-500 hover:underline">📱 QR 码生成</a></li>
                  <li><a href="/zh/heic-to-jpg" className="text-orange-500 hover:underline">🖼️ HEIC 转 JPG</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
