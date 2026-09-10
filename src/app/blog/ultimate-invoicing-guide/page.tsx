import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '终极发票指南：从零开始学会专业开票，涵盖发票要素、付款条款、税务处理、催款策略，以及自由职业者和小企业的完整开票工作流。' : 'en'
  return {
    title: lang === 'zh'
      ? '终极发票指南：从零到专业开票'
      : 'The Ultimate Invoicing Guide',
    description: lang === 'zh'
      ? '从零开始学会专业开票:发票要素、付款条款、税务处理、催款策略,自由职业者和小企业的完整指南。'
      : 'Complete invoicing guide: invoice essentials, payment terms, tax handling, collection strategies, and full workflows for freelancers and small businesses.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/ultimate-invoicing-guide',
      languages: { 'en-US': '/blog/ultimate-invoicing-guide', 'x-default': '/blog/ultimate-invoicing-guide' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/ultimate-invoicing-guide' },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What must an invoice include?', acceptedAnswer: { '@type': 'Answer', text: 'Invoice number, date, buyer/seller details, itemized services/products, quantities, unit prices, total amount, payment terms, and payment method.' } },
          { '@type': 'Question', name: 'What is the difference between an invoice and a receipt?', acceptedAnswer: { '@type': 'Answer', text: 'An invoice is a payment request sent before payment. A receipt confirms payment was received. Issue the invoice first, then the receipt upon payment.' } },
          { '@type': 'Question', name: 'How do freelancers handle taxes on invoices?', acceptedAnswer: { '@type': 'Answer', text: 'Track all income from invoices, deduct business expenses, and set aside 25-30% of gross income for estimated tax payments. Consult a tax professional for your specific situation.' } },
        ],
      }),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          无论你是自由职业者、小企业主还是刚起步的创业者，发票都是你商业运营中最重要的文件之一。它不仅是收款工具，更是你的专业形象、财务记录和法律凭证。本指南将从零开始，带你掌握专业开票的每一个环节。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">一、发票的核心要素</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一份合规的发票必须包含以下信息：
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>发票编号</strong> — 唯一标识符，便于追踪和对账（如 INV-2026-001）</li>
          <li><strong>开票日期</strong> — 发出发票的日期，决定付款截止日的起点</li>
          <li><strong>买卖双方信息</strong> — 公司名称、地址、联系方式、税号（如适用）</li>
          <li><strong>商品/服务明细</strong> — 每项服务的描述、数量、单价</li>
          <li><strong>总金额</strong> — 小计、税费（如适用）、总计</li>
          <li><strong>付款条款</strong> — 付款期限、折扣条件、逾期罚金</li>
          <li><strong>付款方式</strong> — 银行转账、PayPal、支付宝等具体信息</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">二、付款条款详解</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          付款条款直接影响你的现金流。以下是常见条款及其适用场景：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Due on Receipt</strong> — 收到即付。适合小额交易或不信任的新客户</li>
          <li><strong>Net 15</strong> — 15 天内付清。适合中等金额、需要快速回款的项目</li>
          <li><strong>Net 30</strong> — 30 天内付清。行业标准，大多数 B2B 交易使用</li>
          <li><strong>Net 60</strong> — 60 天内付清。大企业或政府项目常见</li>
          <li><strong>2/10 Net 30</strong> — 10 天内付款享 2% 折扣，否则 30 天全额付清</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>建议</strong>：新客户用 Net 15，长期客户可用 Net 30。大额项目分阶段开票（预付 30% + 中期 40% + 完成 30%）。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三、发票 vs 收据 vs 报价单</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          三个文件在商业流程中的位置不同：
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>报价单（Quote/Estimate）</strong> — 项目开始前，告知客户预估费用</li>
          <li><strong>发票（Invoice）</strong> — 服务交付后，请求客户付款</li>
          <li><strong>收据（Receipt）</strong> — 收到款项后，确认交易完成</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">四、自由职业者的税务处理</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自由职业者需要自己处理税务。每开发票时：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>记录每笔发票收入到记账系统</li>
          <li>保留所有业务相关支出的收据（设备、软件、交通等可抵扣）</li>
          <li>每季度预缴 estimated tax（建议预留收入的 25–30%）</li>
          <li>年底汇总所有发票，准备 Schedule C（美国）或 equivalent</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">五、催款策略</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          逾期催款的黄金节奏：
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>逾期 1 天</strong> — 友好提醒邮件，附发票副本："Hi, just checking if you received the invoice?"</li>
          <li><strong>逾期 7 天</strong> — 电话跟进，确认对方是否收到并询问付款进度</li>
          <li><strong>逾期 14 天</strong> — 正式催款函，提及付款条款和逾期罚金</li>
          <li><strong>逾期 30 天</strong> — 暂停服务或发送律师函的警告</li>
          <li><strong>逾期 60 天</strong> — 考虑通过法律途径或催收公司追讨</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">六、最佳实践清单</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>✅ 服务完成后 24 小时内发出发票</li>
          <li>✅ 每张发票有唯一编号，按顺序递增</li>
          <li>✅ 付款条款清晰可见，放在发票底部</li>
          <li>✅ 保留所有发票副本至少 7 年</li>
          <li>✅ 使用发票生成器确保格式专业一致</li>
          <li>✅ 定期对账，确保所有应收款项已记录</li>
          <li>✅ 对大额项目要求预付款</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → 用免费发票生成器创建你的第一张专业发票
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're a freelancer, small business owner, or startup founder, invoicing is one of the most critical parts of your operations. It's not just a payment request — it's your professional image, financial record, and legal proof. This guide covers everything from basics to advanced strategies.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 1: Invoice Essentials</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A compliant invoice must include:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Invoice number</strong> — unique identifier for tracking (e.g., INV-2026-001)</li>
          <li><strong>Issue date</strong> — when the invoice was sent, determines payment deadlines</li>
          <li><strong>Buyer/seller details</strong> — names, addresses, contact info, tax IDs</li>
          <li><strong>Itemized services</strong> — description, quantity, unit price for each item</li>
          <li><strong>Totals</strong> — subtotal, applicable taxes, grand total</li>
          <li><strong>Payment terms</strong> — due date, discount conditions, late fees</li>
          <li><strong>Payment method</strong> — bank transfer, PayPal, Stripe, etc.</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 2: Payment Terms Explained</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Payment terms directly affect your cash flow:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Due on Receipt</strong> — pay immediately. Good for small jobs or new clients</li>
          <li><strong>Net 15</strong> — due in 15 days. For medium amounts needing quick turnaround</li>
          <li><strong>Net 30</strong> — due in 30 days. Industry standard for most B2B transactions</li>
          <li><strong>Net 60</strong> — due in 60 days. Common with enterprises and government projects</li>
          <li><strong>2/10 Net 30</strong> — 2% discount if paid within 10 days; otherwise full in 30</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Pro tip:</strong> Start new clients at Net 15. Extend to Net 30 once trust is established. For large projects, use milestone billing (30% upfront, 40% mid-project, 30% on completion).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 3: Invoice vs Receipt vs Estimate</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These three documents serve different purposes in the business cycle:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Estimate/Quote</strong> — before work begins, showing estimated costs</li>
          <li><strong>Invoice</strong> — after delivery, requesting payment</li>
          <li><strong>Receipt</strong> — after payment, confirming the transaction</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 4: Freelancer Tax Handling</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancers must manage their own taxes:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Log every invoice income in your accounting system</li>
          <li>Keep receipts for deductible business expenses (equipment, software, travel)</li>
          <li>Pay estimated taxes quarterly (set aside 25–30% of gross income)</li>
          <li>Year-end: compile all invoices for Schedule C (US) or equivalent</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 5: Collection Strategies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The golden rhythm for chasing late payments:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Day 1 overdue</strong> — friendly reminder email with invoice attached</li>
          <li><strong>Day 7</strong> — phone call to confirm receipt and ask about payment status</li>
          <li><strong>Day 14</strong> — formal collection letter mentioning terms and late fees</li>
          <li><strong>Day 30</strong> — warning about service suspension or legal action</li>
          <li><strong>Day 60</strong> — consider collections agency or legal proceedings</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part 6: Best Practices Checklist</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>✅ Send invoice within 24 hours of service completion</li>
          <li>✅ Use sequential, unique invoice numbers</li>
          <li>✅ Payment terms clearly visible at the bottom</li>
          <li>✅ Keep copies of all invoices for at least 7 years</li>
          <li>✅ Use an invoice generator for consistent, professional formatting</li>
          <li>✅ Reconcile regularly to ensure all receivables are tracked</li>
          <li>✅ Require upfront payment for large projects</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → Create Your First Professional Invoice Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '终极发票指南：从零到专业开票' : 'The Ultimate Invoicing Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
