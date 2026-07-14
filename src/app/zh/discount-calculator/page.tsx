import type { Metadata } from 'next'
import DiscountCalculatorClient from '../../discount-calculator/discount-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const data = {
    zh: {
      title: '在线折扣计算器_打折省钱金额计算_实用计算器',
      description: '输入商品原价和折扣力度（1-99折），快速计算折后价和节省金额。支持微信、电商平台各种折扣场景，免费使用。',
    },
    en: {
      title: 'Online Discount Calculator_Save Money on Sales_ Practical Tools',
      description: 'Calculate the final price and savings instantly. Enter original price and discount rate (1-99). Free, no download needed.',
    },
  }

  return {
    title: data.zh.title,
    description: data.zh.description,
    openGraph: {
      title: data.zh.title,
      description: data.zh.description,
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


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '折扣计算器是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '折扣计算器是一款在线工具，可以根据商品原价和折扣力度，自动计算出折后价格和节省的金额，帮助您快速判断是否值得购买。',
      },
    },
    {
      '@type': 'Question',
      name: '如何计算折后价？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '折后价 = 原价 × (1 - 折扣 ÷ 100)。例如原价100元打8折，折后价为 100 × 0.8 = 80元，节省20元。',
      },
    },
    {
      '@type': 'Question',
      name: '支持哪些折扣形式？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '支持1折到99折各种折扣场景，包括满减优惠叠加、限时折扣计算等。输入1-99的数字即可计算。',
      },
    },
  ],
}

export default async function DiscountCalculatorPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DiscountCalculatorClient initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
