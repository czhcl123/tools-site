import type { Metadata } from 'next'
import InvoiceGeneratorClient from '@/app/(en)/invoice-generator/invoice-generator-client'

export async function generateMetadata() {
  
  const lang = 'en'

  const data = {
    zh: {
      title: 'Invoice Generator — Free PDF Maker',
      description: '免费发票生成器:输入商家、客户和商品信息,一键生成专业 PDF 发票。支持多币种、自定义税率,无需注册。',
    },
    en: {
      title: 'Free Invoice Generator - PDF Invoice Maker for Freelancers',
      description: 'Free invoice generator: enter business, client, and item details, instantly download a professional PDF invoice. Multi-currency, custom tax, no signup.',
    },
  }

  return {
    title: data[lang].title,
    description: data[lang].description,
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }],
        url: `${'https://getpracticaltools.com/invoice-generator'}`,
      title: data[lang].title,
      description: data[lang].description,
    },
    alternates: {
    canonical: 'https://getpracticaltools.com/invoice-generator',
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
        name: '发票生成器免费吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '完全免费,无水印,无次数限制。所有数据本地处理,保护您的客户信息。',
        },
      },
      {
        '@type': 'Question',
        name: '生成的发票可以商用吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。生成的PDF是您的文档,可直接发给客户用于付款。',
        },
      },
      {
        '@type': 'Question',
        name: '支持哪些币种?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持美元、欧元、人民币、英镑、日元等任意币种,您可以自定义币种符号。',
        },
      },
      {
        '@type': 'Question',
        name: '能添加公司Logo吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。上传PNG/JPG Logo,自动嵌入PDF顶部。',
        },
      },
      {
        '@type': 'Question',
        name: '数据安全吗?',
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
          text: 'Yes - no signup, no fees, no watermarks, and no download limits. All calculations happen in your browser, so your client information stays private.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the generated invoices commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The PDF is your document - send it directly to clients for payment, print it, or archive it. No attribution required.',
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
    <p>填写客户信息、项目明细和税率,一键生成专业 PDF 发票。支持自定义货币、税前/税后金额,自由职业者和小企业收款必备工具。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Fill in client details, line items, and tax rate to generate a professional PDF invoice in seconds. Supports custom currencies, pre/post-tax amounts — ideal for freelancers and small businesses.</p>
  </div>
)

export default async function InvoiceGeneratorPage() {
  
  const lang = 'en'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Invoice Generator - PDF Invoice Maker',
    alternateName: 'Invoice Generator',
    url: `https://getpracticaltools.com${'/invoice-generator'}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'InvoiceGenerator',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Online PDF invoice generator for freelancers and small businesses. Multi-currency, automatic tax calculation, logo upload, unlimited line items. Free, no signup, no watermark, data processed locally.',
    featureList: [
      'Multi-currency (USD, EUR, CNY, GBP, JPY, custom)',
      'Automatic tax calculation (0-25% rate)',
      'Logo upload (PNG/JPG)',
      'Unlimited line items',
      'PDF download (print-ready)',
      'No signup, no watermark, no telemetry',
      'Bilingual English / Chinese',
    ],
    dateModified: '2026-07-18',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemas[lang], webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {'Practical Tools'}</a>
            <a href={'/zh/invoice-generator'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {'中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{'Invoice Generator'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <InvoiceGeneratorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{'🏷️ Discount Calculator'}</a></li>
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{'⚖️ BMI Calculator'}</a></li>
                  <li><a href="/json-formatter" className="text-orange-500 hover:underline">{'🔧 JSON Formatter'}</a></li>
                  <li><a href="/qr-code-generator" className="text-orange-500 hover:underline">{'📱 QR Code Generator'}</a></li>
                  <li><a href="/word-counter" className="text-orange-500 hover:underline">{'📝 Word Counter'}</a></li>
                  <li><a href="/password-generator" className="text-orange-500 hover:underline">{'🔐 Password Generator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
