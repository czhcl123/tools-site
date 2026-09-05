import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '自由职业者税务减免：哪些费用可以抵扣？'
      : 'Freelancer Tax Deductions Guide',
    description: lang === 'zh'
      ? '自由职业者常见税务减免项目：家庭办公室、设备、软件、差旅费，以及如何正确记录发票和开支。'
      : 'Common freelancer tax deductions: home office, equipment, software, travel expenses, and how to properly track invoices.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/freelancer-tax-deductions',
      languages: { 'en-US': '/blog/freelancer-tax-deductions', 'x-default': '/blog/freelancer-tax-deductions' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/freelancer-tax-deductions' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么自由职业者需要了解税务减免？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自由职业者的收入是税后收入——你需要自己缴税。但好消息是，大部分工作相关开支都可以抵税。不了解减免项目 = 多缴冤枉钱。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见减免项目</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🏠 <strong>家庭办公室</strong>：专门用于工作的房间面积比例 × 房租/房贷利息/水电费</p>
          <p>💻 <strong>设备</strong>：电脑、显示器、键盘、鼠标、打印机（可一次性抵扣或按年折旧）</p>
          <p>📱 <strong>通讯</strong>：手机话费、网络费（按工作使用比例）</p>
          <p>🛠️ <strong>软件</strong>：设计工具、开发工具、办公软件订阅费</p>
          <p>✈️ <strong>差旅</strong>：出差的交通、住宿、餐饮（需与工作相关）</p>
          <p>📚 <strong>学习</strong>：课程、书籍、会议费用（与当前业务相关）</p>
          <p>💼 <strong>保险</strong>：职业责任险、健康保险（部分地区可抵扣）</p>
          <p>🏦 <strong>银行费用</strong>：业务账户的手续费、PayPal/Stripe 手续费</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何记录开支</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>保留所有发票</strong>：每笔支出都要有发票或收据</li>
          <li><strong>分类存储</strong>：按类别（设备/软件/差旅）整理</li>
          <li><strong>使用记账工具</strong>：Excel、Wave（免费）、QuickBooks 等</li>
          <li><strong>每月核对</strong>：不要等到年底才整理</li>
          <li><strong>银行流水</strong>：业务账户单独开，方便核对</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么时候请会计师？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          年收入超过一定门槛（各国不同），或税务情况复杂（多国收入、合伙经营）时，建议请专业会计师。省下的税款通常远超会计费。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 家庭办公室减免需要什么条件？</strong><br />
          A: 需要一个专门用于工作的固定空间。餐厅桌子不行，但一个角落的专用书桌可以。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 电脑可以全额抵扣吗？</strong><br />
          A: 取决于金额和当地税法。小额可一次性抵扣，大额通常需要按3-5年折旧。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → 生成专业发票，记录你的收入
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Freelancers Need to Know Tax Deductions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Freelancer income is post-tax — you pay your own taxes. The good news: most work-related expenses are deductible. Not knowing your deductions = overpaying.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Deductions</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🏠 <strong>Home office</strong>: Percentage of room used for work × rent/mortgage interest/utilities</p>
          <p>💻 <strong>Equipment</strong>: Computer, monitor, keyboard, mouse, printer (one-time deduction or depreciation)</p>
          <p>📱 <strong>Communication</strong>: Phone bill, internet (proportional to work use)</p>
          <p>🛠️ <strong>Software</strong>: Design tools, dev tools, office software subscriptions</p>
          <p>✈️ <strong>Travel</strong>: Transportation, accommodation, meals for business trips</p>
          <p>📚 <strong>Education</strong>: Courses, books, conference fees (related to current business)</p>
          <p>💼 <strong>Insurance</strong>: Professional liability, health insurance (deductible in some regions)</p>
          <p>🏦 <strong>Bank fees</strong>: Business account fees, PayPal/Stripe processing fees</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Track Expenses</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Keep all receipts</strong>: Every expense needs a receipt or invoice</li>
          <li><strong>Category and file</strong>: Organize by type (equipment/software/travel)</li>
          <li><strong>Use accounting tools</strong>: Excel, Wave (free), QuickBooks, etc.</li>
          <li><strong>Reconcile monthly</strong>: Don't wait until year-end to organize</li>
          <li><strong>Separate bank account</strong>: Open a business account for easy reconciliation</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When to Hire an Accountant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When income exceeds a threshold (varies by country) or tax situations are complex (multi-country income, partnerships), hire a professional. Tax savings usually far exceed accountant fees.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: What qualifies for home office deduction?</strong><br />
          A: A dedicated, fixed workspace used for work. A dining table doesn't count, but a专用 desk in a corner does.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Can I deduct my computer in full?</strong><br />
          A: Depends on the amount and local tax law. Small amounts may be fully deductible; larger ones typically require 3-5 year depreciation.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → Generate professional invoices to track your income
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '自由职业者税务减免：哪些费用可以抵扣？' : 'Freelancer Tax Deductions: What You Can Write Off'}
      </h1>
      {content[lang]}
    </div>
  )
}
