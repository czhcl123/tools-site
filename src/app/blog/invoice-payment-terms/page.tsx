import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '发票付款条款完全指南：如何在发票中设置清晰的付款条件，包括 Net 15/30/60、早付折扣、逾期罚金，以及跟进未付款发票的实用策略，加速回款。' : 'en'
  return {
    title: lang === 'zh'
      ? '发票付款条款：如何更快收到款项'
      : 'Invoice Payment Terms: Getting Paid Faster',
    description: lang === 'zh'
      ? '如何在发票中设置清晰的付款条件,加速回款,减少逾期付款。'
      : 'How to set clear payment terms on invoices, including Net 15/30/60, early payment discounts, and follow-up strategies to get paid faster.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/invoice-payment-terms',
      languages: { 'en-US': '/blog/invoice-payment-terms', 'x-default': '/blog/invoice-payment-terms' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/invoice-payment-terms' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is Net 30?", "acceptedAnswer": {"@type": "Answer", "text": "Full payment due within 30 days."}}, {"@type": "Question", "name": "2/10 Net 30?", "acceptedAnswer": {"@type": "Answer", "text": "2% discount if paid in 10 days, otherwise 30 days."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是付款条款?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          付款条款是发票上约定的付款期限和条件。它告诉客户什么时候付钱、有没有折扣、逾期会怎样。清晰的付款条款能大幅减少催款时间，保护你的现金流。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见付款条款</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Net 15 / Net 30 / Net 60</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Net 30"表示发票日期后 30 天内付清。Net 15 适合小额交易，Net 30 是行业标准，Net 60 常用于大企业或长期合作。越短的付款期 = 越快回款。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2/10 Net 30（早付折扣）</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          10 天内付款享 2% 折扣，否则 30 天内全额付清。这对双方都有利：客户省钱，你提前拿到现金。年化收益率约 36%，是非常有效的激励手段。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">逾期罚金</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          在发票上注明逾期罚金（如每月 1.5%）能有效督促客户按时付款。确保罚金条款在合同中提前约定，避免法律纠纷。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何在发票中写清楚</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          在发票底部单独列出付款条款区域，包含：付款期限、折扣条件、罚金条款、付款方式（银行转账/PayPal/支付宝）。用生成器创建发票时，这些字段应该清晰可见。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">跟进未付款发票</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>逾期 1 天</strong>：友好提醒邮件，附上发票副本</li>
          <li><strong>逾期 7 天</strong>：电话跟进，确认是否收到发票</li>
          <li><strong>逾期 30 天</strong>：正式催款函，注明逾期罚金</li>
          <li><strong>逾期 60 天</strong>：考虑暂停服务或发送律师函</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Net 30 是什么?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">发票日期后 30 天内付清全款。最常见的商业付款条款。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">2/10 Net 30 呢?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">10 天内付款享 2% 折扣，否则 30 天内全额付清。年化收益约 36%。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → 用发票生成器创建专业发票
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Are Payment Terms?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Payment terms are the conditions on your invoice that specify when payment is due, whether discounts apply, and what happens if the client pays late. Clear terms dramatically reduce collection time and protect your cash flow.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Payment Terms</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Net 15 / Net 30 / Net 60</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Net 30" means full payment due within 30 days of the invoice date. Net 15 works for small transactions, Net 30 is the industry standard, and Net 60 is common with large enterprises or long-term contracts. Shorter terms = faster cash.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2/10 Net 30 (Early Payment Discount)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pay within 10 days and get a 2% discount; otherwise, full amount due in 30 days. Win-win: the client saves money, you get cash early. The annualized return is about 36% — a powerful incentive.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Late Fees</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Including late fees on your invoice (e.g., 1.5% per month) effectively encourages on-time payment. Make sure late fee terms are agreed upon in the contract beforehand to avoid legal disputes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Writing Clear Terms on Invoices</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Create a dedicated payment terms section at the bottom of your invoice: due date, discount conditions, late fee policy, and payment methods (bank transfer/PayPal/stripe). When using an invoice generator, these fields should be clearly visible.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Following Up on Unpaid Invoices</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Day 1 past due</strong> — friendly reminder email with invoice copy attached</li>
          <li><strong>Day 7</strong> — phone call to confirm they received the invoice</li>
          <li><strong>Day 30</strong> — formal collection letter mentioning late fees</li>
          <li><strong>Day 60</strong> — consider suspending services or sending a legal notice</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">What does Net 30 mean?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Full payment due within 30 days of the invoice date.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">What is 2/10 Net 30?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Pay within 10 days for 2% off; otherwise full amount due in 30 days.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → Create a Professional Invoice Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '发票付款条款：如何更快收到款项' : 'Invoice Payment Terms: Getting Paid Faster'}
      </h1>
      {content[lang]}
    </div>
  )
}
