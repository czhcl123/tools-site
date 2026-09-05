import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '发票生成器使用完全教程：输入商家和客户信息、添加商品明细、设置税率，一键生成专业 PDF 发票。支持多币种、自定义模板和批量生成，适合各类自由职业者。' : 'en'
  return {
    title: lang === 'zh'
      ? '发票生成器使用指南 — 免费创建专业发票'
      : 'Invoice Generator Guide',
    description: lang === 'zh'
      ? '发票生成器使用教程:填写客户信息、项目明细、税率,导出 PDF 发票,适用于自由职业和小企业。'
      : 'How to use a free invoice generator: fill in client details, line items, tax rates, and export professional PDF invoices for freelancers.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/invoice-generator',
      languages: { 'en-US': '/blog/invoice-generator', 'x-default': '/blog/invoice-generator' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/invoice-generator' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么需要发票生成器?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自由职业者、小企业主、电商卖家经常需要给客户开发票。专业的发票看起来更可信,也能帮你追踪收入和应收账款。用在线生成器比 Word/Excel 模板快 10 倍。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">发票必须包含什么?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一张合规发票需要以下信息:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>✅ 发票编号(唯一标识,方便对账)</p>
          <p>✅ 开票日期和到期日</p>
          <p>✅ 你的公司/个人信息(名称、地址、联系方式)</p>
          <p>✅ 客户信息(名称、地址)</p>
          <p>✅ 项目明细(描述、数量、单价、小计)</p>
          <p>✅ 税率和税额(如有)</p>
          <p>✅ 总金额和付款方式</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">使用步骤</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 填写基本信息</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          输入你的公司名称和地址、客户名称和地址、发票编号和日期。发票编号建议用"Invoice #001"格式,按顺序递增。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 添加项目明细</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          每个服务/商品一行:描述、数量、单价。工具自动计算小计。可以添加多行,支持不同货币。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 设置税率</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          如果需要收税,输入税率百分比(如 6% 增值税)。工具自动算出税额和总计。免税的话留空即可。
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. 导出 PDF</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          确认信息无误后,点击生成 PDF。下载后直接发给客户。PDF 格式专业、防篡改,是国际通用的发票格式。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">发票 vs 收据 vs 报价单</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>发票(Invoice)</strong>:服务完成后开具,要求客户付款。<strong>收据(Receipt)</strong>:收到付款后开具,证明已付款。<strong>报价单(Quote/Estimate)</strong>:服务开始前给客户的预估价格。三者用途不同,不要混淆。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → 立即生成发票
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Use an Invoice Generator?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancers, small business owners, and e-commerce sellers regularly need to send invoices to clients. Professional invoices build trust and help you track income and receivables. An online generator is 10x faster than Word or Excel templates.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Must an Invoice Include?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A compliant invoice requires:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>✅ Invoice number (unique identifier for reconciliation)</p>
          <p>✅ Issue date and due date</p>
          <p>✅ Your company/personal info (name, address, contact)</p>
          <p>✅ Client info (name, address)</p>
          <p>✅ Line items (description, quantity, unit price, subtotal)</p>
          <p>✅ Tax rate and tax amount (if applicable)</p>
          <p>✅ Total amount and payment method</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Step-by-Step Instructions</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Fill in Basic Info</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Enter your company name and address, client name and address, invoice number and date. Use a format like "Invoice #001" and increment sequentially.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Add Line Items</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          One row per service/product: description, quantity, unit price. The tool auto-calculates subtotals. Add multiple lines; supports different currencies.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Set Tax Rate</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If tax applies, enter the percentage (e.g., 6% VAT). The tool calculates tax amount and grand total automatically. Leave blank for tax-exempt invoices.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Export as PDF</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Review your info, then click generate PDF. Download and send to your client. PDF is the international standard for invoices — professional and tamper-proof.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Invoice vs. Receipt vs. Quote</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Invoice</strong>: issued after service completion, requesting payment. <strong>Receipt</strong>: issued after payment received, proving payment. <strong>Quote/Estimate</strong>: price estimate given before starting work. They serve different purposes — don't mix them up.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → Create an Invoice Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '发票生成器使用指南' : 'Invoice Generator Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
