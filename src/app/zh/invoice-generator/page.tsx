import type { Metadata } from 'next'
import InvoiceGeneratorClient from '../../invoice-generator/invoice-generator-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const data = {
    zh: {
      title: '免费发票生成器 - 在线PDF发票制作工具',
      description: '免费在线发票生成器,输入商家、客户、商品信息,一键生成可下载的PDF发票。支持多币种、自定义税率、添加Logo。',
    },
    en: {
      title: 'Free Invoice Generator - Online PDF Invoice Maker',
      description: 'Free online invoice generator. Enter business, client, and item details, instantly download a professional PDF invoice. Multi-currency, custom tax, logo support.',
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
    canonical: 'https://tools-site-production.up.railway.app/zh/invoice-generator',
      languages: {
        'zh-CN': '/zh/invoice-generator',
        'en-US': '/invoice-generator',
        'x-default': '/invoice-generator',
      },
    },
  }
}

const faqSchemas = {
  zh: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '发票生成器免费吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '完全免费,无水印,无次数限制。所有数据本地处理,保护您的客户信息。',
        },
      },
      {
        '@type': 'Question',
        name: '生成的发票可以商用吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。生成的PDF是您的文档,可直接发给客户用于付款。',
        },
      },
      {
        '@type': 'Question',
        name: '支持哪些币种？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持美元、欧元、人民币、英镑、日元等任意币种,您可以自定义币种符号。',
        },
      },
      {
        '@type': 'Question',
        name: '能添加公司Logo吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。上传PNG/JPG Logo,自动嵌入PDF顶部。',
        },
      },
      {
        '@type': 'Question',
        name: '数据安全吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '所有数据仅在浏览器本地处理,客户信息不会上传到任何服务器。',
        },
      },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this invoice generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — no signup, no fees, no watermarks, and no download limits. All calculations happen in your browser, so your client information stays private.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the generated invoices commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The PDF is your document — send it directly to clients for payment, print it, or archive it. No attribution required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What currencies are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any currency. Built-in presets for USD, EUR, CNY, GBP, JPY, and more, plus the option to set a custom currency symbol for less common currencies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I add my company logo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Upload a PNG or JPG logo and it will appear at the top of the generated PDF invoice automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does it calculate tax?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Set a tax rate (percentage), and the tool calculates tax per line item and the grand total in real time as you edit.',
        },
      },
    ],
  },
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      <strong>发票生成器</strong>5 分钟输出专业 PDF 发票,支持多币种、自动税额、Logo 上传、商品多行。所有数据本地处理(不上传服务器)、无水印、可商用,适合自由职业者、跨境电商、独立设计师。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">主要功能</h2>
    <p><strong>1. 多币种支持</strong>。USD / EUR / CNY / GBP / JPY 等 7 种货币预设,以及自定义币种符号。跨境电商客户用本币显示,无需手算汇率。</p>
    <p><strong>2. 自动税额</strong>。输入税率(0-25%),工具实时计算每行商品的税额和总计。中国大陆增值税 13%、美国销售税 8-10%、欧盟 VAT 20% 都能覆盖。</p>
    <p><strong>3. Logo 上传</strong>。PNG / JPG 拖拽上传,自动嵌入 PDF 顶部左侧,保留您的品牌身份。</p>
    <p><strong>4. 商品多行</strong>。支持任意行数,每行独立"描述 / 数量 / 单价"3 字段,工具实时累加小计 / 税额 / 总计。</p>
    <p><strong>5. PDF 下载</strong>。一键下载生成的 PDF 发票,可直接邮件发送给客户或打印归档。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">适合谁用</h2>
    <ul className="list-disc pl-5 space-y-1">
      <li>自由职业者(程序员 / 设计师 / 作家)给客户开发票</li>
      <li>跨境电商小卖家(Shopify / Etsy / 速卖通)</li>
      <li>独立开发者、咨询顾问、培训师</li>
      <li>租房 / 服务提供方需要向"个人"客户提供发票</li>
    </ul>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">为什么不用收费工具?</h2>
    <p>本工具免费,适合月均开 1-30 张发票的中小型业务。月开 100+ 张需要自动化(Zapier + Stripe Invoice API 更合适)。本工具特点:无品牌(下载发票上不强制显示"by Practical Tools")、可商用、无追踪,数据完全本地处理。</p>
  </div>
)

export default async function InvoiceGeneratorPage({
  searchParams,
}: {

}) {
  const lang = 'zh'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemas[lang]) }}
      />
      <InvoiceGeneratorClient initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
