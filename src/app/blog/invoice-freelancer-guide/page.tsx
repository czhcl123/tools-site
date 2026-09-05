import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh' ? '自由职业者开票指南：如何创建专业发票' : 'Freelancer Invoicing Guide: How to Create Professional Invoices',
    description: lang === 'zh' ? '自由职业者发票模板、必填字段、税务要点,以及如何用发票生成器快速创建。' : 'Freelancer invoice templates, required fields, tax considerations, and how to quickly create invoices.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/invoice-freelancer-guide',
      languages: { 'en-US': '/blog/invoice-freelancer-guide', 'x-default': '/blog/invoice-freelancer-guide' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/invoice-freelancer-guide' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么自由职业者需要专业发票?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          专业发票不仅是收款凭证,更是<strong>建立信任和专业形象</strong>的关键。规范的发票能加快付款速度,减少纠纷,也有助于税务申报。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">发票必填字段</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>发票编号</strong> — 唯一标识,便于追踪</li>
          <li><strong>日期</strong> — 开票日期和付款截止日期</li>
          <li><strong>双方信息</strong> — 你的信息和客户信息</li>
          <li><strong>服务描述</strong> — 具体工作内容和数量</li>
          <li><strong>金额</strong> — 单价、小计、税额、总计</li>
          <li><strong>付款方式</strong> — 银行转账、PayPal等</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见错误</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          缺少发票编号、没有付款截止日期、描述模糊、金额计算错误——这些都会导致付款延迟或纠纷。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何提高收款效率?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>在发票中明确付款条款(如Net 30)</li>
          <li>提供多种付款方式</li>
          <li>设置自动付款提醒</li>
          <li>对逾期付款收取滞纳金</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → 免费创建专业发票
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Freelancers Need Professional Invoices?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Professional invoices are not just payment receipts — they're key to <strong>building trust and credibility</strong>. Proper invoices speed up payments, reduce disputes, and help with tax filing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Required Invoice Fields</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Invoice number</strong> — unique identifier for tracking</li>
          <li><strong>Dates</strong> — issue date and payment due date</li>
          <li><strong>Party information</strong> — your details and client details</li>
          <li><strong>Service description</strong> — specific work and quantities</li>
          <li><strong>Amounts</strong> — unit price, subtotal, tax, total</li>
          <li><strong>Payment method</strong> — bank transfer, PayPal, etc.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Mistakes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Missing invoice numbers, no payment due date, vague descriptions, calculation errors — all cause payment delays or disputes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Improve Payment Collection?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Clear payment terms (e.g., Net 30)</li>
          <li>Multiple payment options</li>
          <li>Automatic payment reminders</li>
          <li>Late fees for overdue payments</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → Create Professional Invoices for Free
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '自由职业者开票指南' : 'Freelancer Invoicing Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
