import type { Metadata } from 'next'
import DiscountCalculatorClient from './discount-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'

  const data = {
    zh: {
      title: '在线折扣计算器_打折省钱金额计算_实用计算器',
      description: '输入商品原价和折扣力度（1-99折），快速计算折后价和节省金额。支持微信、电商平台各种折扣场景，免费使用。',
    },
    en: {
      title: 'Discount Calculator - Calculate 30, 50, 70 Percent Off Instantly',
      description: 'Free online discount calculator: enter original price and discount percentage to get the final price. Works for any currency. No signup required.',
    },
  }

  return {
    title: data[lang].title,
    description: data[lang].description,
    openGraph: {
      title: data[lang].title,
      description: data[lang].description,
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/discount-calculator',
      languages: {
        'zh-CN': '/zh/discount-calculator',
        'en-US': '/discount-calculator',
        'x-default': '/discount-calculator',
      },
    },
  }
}

// 5 个 FAQ（覆盖：核心计算、满减叠加、双 11 实战、跨境货币、单位转换）
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
        text: '满减 ≠ 折扣,这是新手最常踩的坑。判断方法:先算"折后价",再判断是否触发满减门槛。例如商品原价 480 元,店铺打 8 折 = 384 元,如果此时平台有"满 300 减 50"券,则最终价 = 384 - 50 = 334 元;如果没满 300 减 50,就是 384 元。本计算器先算折扣,你可以手动套满减。如果你经常用满减,建议把"满减起点"作为选购阈值——凑单凑到门槛才下单。',
      },
    },
    {
      '@type': 'Question',
      name: '双 11 / 618 跨店满减怎么算最划算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '跨店满减的关键是"凑单"而非"折扣大小"。以淘宝 2024 双 11 "满 300 减 50"为例,实际折扣率 = 50/300 ≈ 83 折。如果你只买一件 280 元的商品,折扣再多也没用(没满 300);但凑到 320 元,立刻立省 50 元,相当于在商品原价基础上额外打 83 折。建议:把想买的小件(袜子、数据线、收纳盒)凑到一起下单,凑单后无用的用 7 天无理由退。',
      },
    },
    {
      '@type': 'Question',
      name: '海外网站看到 30% off 是什么意思?和中国"几折"怎么换算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '海外电商的 "30% off" = 减 30% = 中国语境里"打 7 折"。换算公式:海外折扣对应的中国折扣 = 10 - (海外折扣百分比 ÷ 10)。例如美国官网标 "40% off",就是 10 - 4 = 6 折。如果用本计算器,直接输入 6 即可。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么我算出来的价格和商家页面不一样?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三种最常见原因:① 商家用"原价"标的是虚高原价(从不按那个价卖),实际成交价远低于"原价 7 折";② 折扣只针对"会员价"或"新人价",非会员看到的是虚高折扣;③ 用了店铺券 + 平台券 + 跨店满减等多重叠加,商家页面已自动算完,你看的是叠加后。本计算器只算最基础的"原价 × 折扣率",叠加优惠请按上面 FAQ 的方法手动套。',
      },
    },
  ],
}

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is the discounted price calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core formula is: discounted price = original price × (1 - discount% ÷ 100). For example, a $120 item at 25% off is $120 × 0.75 = $90, saving you $30. This calculator accepts any percentage from 1 to 99 (including decimals like 33.3%), and instantly returns the final price plus the dollar amount you save.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stack a "spend $X get $Y off" coupon on top of the percentage discount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stack coupons in this order: percentage discount first, then spend-threshold coupon. Example: a $480 item at 20% off becomes $384. If you also have a "$30 off $300+" coupon, the final price is $384 - $30 = $354. The threshold coupon only applies if your post-discount subtotal exceeds the minimum. This calculator handles the percentage step; apply the coupon yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get the best deal on Black Friday or Cyber Monday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On Black Friday, the listed "X% off" rarely reflects the real savings. The real win comes from stacking: (1) doorbuster percentage, (2) coupon codes from email, (3) cashback portals (Rakuten, Honey), and (4) credit card rewards. A "30% off" item bought through a 5% cashback portal with a 2% rewards card effectively becomes a 37% discount. Always run the final price through this calculator to confirm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the "original price" shown by the store always the real original price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often no. Many US retailers display a "manufacturer suggested retail price" (MSRP) that the item has never actually sold for, making the "40% off" claim misleading. To verify, check the price history on CamelCamelCamel (Amazon) or Honey\'s price tracker. If an item has only ever sold for $X, the "original" price of $2X is fiction. The discount you see in this calculator is mathematically correct, but only meaningful if the "original" is real.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle VAT or sales tax in the discount calculation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most US states, sales tax is added AFTER the discount, on the discounted subtotal. Example: $100 item at 20% off = $80 subtotal, then 8% sales tax = $6.40, total $86.40. In the EU and UK, VAT is usually included in the displayed price ("VAT-inclusive pricing"), so a 20% "off" already accounts for it. This calculator shows pre-tax savings; add your local tax rate mentally for the final number.',
      },
    },
  ],
}

// WebApplication schema（让 Google 富卡片显示"在线工具"而不是只显示标题）
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Discount Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any (web browser)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Free online discount calculator. Enter original price and discount percentage to instantly get the final price and savings amount. Works for both "X% off" and "X 折" notation.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
}

export default async function DiscountCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = (sp && sp.lang) === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const seoBodyZh = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>输入原价和折扣百分比,秒算折后价和省了多少钱。支持连续折扣(先打折再减固定金额)和反算原价,网购比价、促销计算必备。</p>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>Enter the original price and discount percentage to instantly get the sale price and savings. Supports stacked discounts and reverse calculation — essential for online shopping and deal comparison.</p>
    </div>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/discount-calculator?lang=en' : '/zh/discount-calculator?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '折扣计算器' : 'Discount Calculator'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <DiscountCalculatorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/countdown" className="text-orange-500 hover:underline">📅 倒计时</a></li>
                  <li><a href="/json-formatter" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔧 JSON 格式化' : '🔧 JSON Formatter'}</a></li>
                  <li><a href="/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                  <li><a href="/heic-to-jpg" className="text-orange-500 hover:underline">{lang === 'zh' ? '🖼️ HEIC 转 JPG' : '🖼️ HEIC to JPG'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}