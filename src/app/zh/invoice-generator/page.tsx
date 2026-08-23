import type { Metadata } from 'next'
import InvoiceGeneratorClient from '../../invoice-generator/invoice-generator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return {
    title: '免费发票生成器 - 一键生成PDF发票',
    description: '免费发票生成器:输入商家、客户和商品信息,一键生成专业 PDF 发票。支持多币种、自定义税率,无需注册。',
    openGraph: {
      title: '免费发票生成器 - 一键生成PDF发票',
      description: '免费发票生成器:输入商家、客户和商品信息,一键生成专业 PDF 发票。',
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

const faqSchemaZh = {
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
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>填写客户信息、项目明细和税率，一键生成专业 PDF 发票。支持自定义货币、税前/税后金额，自由职业者和小企业收款必备工具。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">支持功能</h3>
    <ul className="space-y-1 text-sm">
      <li>📄 专业 PDF 发票下载</li>
      <li>💰 多币种支持（美元/欧元/人民币...）</li>
      <li>🧾 自动税率计算</li>
      <li>🖼️ 公司 Logo 上传</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">所有数据在浏览器本地处理，不上传服务器。</p>
  </div>
)

export default async function InvoiceGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '免费发票生成器 - PDF 发票工具',
    alternateName: '发票生成器',
    url: 'https://tools-site-production.up.railway.app/zh/invoice-generator',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'InvoiceGenerator',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: '在线 PDF 发票生成器:输入商家、客户、商品行,一键下载专业发票。支持多币种、税额计算、Logo 上传。所有数据本地处理,无水印,无追踪。',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchemaZh, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/zh" className="text-lg font-bold text-orange-500">🧮 实用计算器</a>
            <a href="/invoice-generator" className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">EN</a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">发票生成器</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBodyZh}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <InvoiceGeneratorClient lang={lang} />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/zh/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/zh/json-formatter" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔧 JSON 格式化' : '🔧 JSON Formatter'}</a></li>
                  <li><a href="/zh/qr-code-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '📱 QR 码生成' : '📱 QR Code Generator'}</a></li>
                  <li><a href="/zh/word-counter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📝 字数统计' : '📝 Word Counter'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
