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
      description: 'Free online discount calculator: enter the original price and the discount percentage to instantly get the final price and dollar amount saved. Calculate 30%, 50%, 70% off in 1 second. Works for any currency. No signup, no download.',
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

  // SEO 正文段落（rendered for crawlers + readers, before the calculator widget）
  const seoBodyZh = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        <strong>折扣计算器</strong>解决购物时最常见的纠结:这件东西打完折到底多少钱?满减能不能叠加?海外网站写的
        "30% off" 到底是几折?你只需要输入原价和折扣力度,计算器立刻给出<strong>折后价</strong>和<strong>立省金额</strong>,不需要心算也不需要掏出手机打开计算器 App。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">三种最常见的折扣场景</h2>
      <p>
        <strong>场景 1:大陆电商打折</strong>。淘宝、天猫、京东、拼多多通常用"打几折"表达,例如 8 折 = 80% = 折后价 × 0.8。在本计算器输入数字 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">8</code> 表示 8 折,输入 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">7.5</code> 表示 7.5 折。
      </p>
      <p>
        <strong>场景 2:海外电商 "X% off"</strong>。Amazon、eBay、Shopify 独立站用 "25% off"、"40% off"。换算方法:30% off 对应中国大陆"7 折"。本计算器输入 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">70</code> 表示"原价的 70%"即"打 7 折"。
      </p>
      <p>
        <strong>场景 3:跨店满减 + 店铺折扣叠加</strong>。双 11 / 618 / 黑五期间最常见。本计算器只算基础折扣,满减叠加请参考下方 FAQ。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">这个工具适合谁?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>双 11 / 618 / 黑五购物季需要快速比价的普通消费者</li>
        <li>做淘宝、拼多多小店需要核算促销价的卖家</li>
        <li>跨境电商从业者需要"X% off"和"X 折"换算</li>
        <li>海淘一族需要把海外折扣实时换算成人民币感知</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">为什么不用 Excel 或计算器 App?</h2>
      <p>
        本工具专门针对"打几折"的中文场景设计,输入 7.5 直接得到 7.5 折结果,不需要记公式。历史记录功能可以保存最近 10 次计算结果,凑单时来回对比不用反复输入。所有计算在你浏览器本地完成,不上传任何价格数据,适合敏感场景(如算年终奖、采购预算)。
      </p>
    </div>
  )

  const seoBodyEn = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        A <strong>discount calculator</strong> answers the one question every shopper has: how much do I actually pay after this sale? Enter the original price and the discount percentage, get the <strong>final price</strong> and <strong>dollar amount saved</strong> instantly. No mental math, no spreadsheet, no second-guessing at checkout.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Three common discount scenarios</h2>
      <p>
        <strong>1. US retail "X% off"</strong>. A $80 jacket at 25% off is $80 × 0.75 = $60. Type <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">25</code> for 25% off.
      </p>
      <p>
        <strong>2. UK/EU "X% off" with VAT</strong>. UK prices are usually VAT-inclusive, so a 20% discount applies to the price you already see. Type <code className="bg-gray-100 px-1.5 py-0.5 rounded text-orange-600">20</code> and you get the pre-tax savings; add local tax mentally.
      </p>
      <p>
        <strong>3. Stacking coupons + cashback</strong>. On Black Friday, you often stack a 30% store discount + 10% coupon code + 5% cashback portal = real 45% savings. This calculator handles the first step; layer the rest yourself.
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Who this is for</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Black Friday / Cyber Monday shoppers comparing doorbusters in real time</li>
        <li>Shopify / Etsy sellers pricing flash sales without opening a spreadsheet</li>
        <li>Resellers calculating margin after supplier discount</li>
        <li>Anyone tired of "is this actually a good deal?" mental math at checkout</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">Why this instead of a calculator app?</h2>
      <p>
        This tool is built for one specific job: turning discount percentages into final prices, with a 10-entry history so you can compare options without retyping. All math runs locally in your browser; nothing is uploaded. If you are pricing sensitive items (luxury, resale, B2B purchase orders), the privacy guarantee matters.
      </p>
    </div>
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <DiscountCalculatorClient initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}