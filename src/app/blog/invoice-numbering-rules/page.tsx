import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '发票编号规则：不再重复和跳号'
      : 'Invoice Numbering Rules: Never Duplicate or Skip',
    description: lang === 'zh'
      ? '发票编号怎么编才合规又清晰？年份前缀、顺序号、客户代码的组合规则，跳号、重号的处理方法。'
      : 'How to structure invoice numbers with year prefixes and sequence rules, and what to do when a number is duplicated or skipped.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/invoice-numbering-rules',
      languages: { 'en-US': '/blog/invoice-numbering-rules', 'x-default': '/blog/invoice-numbering-rules' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/invoice-numbering-rules' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a good invoice number format?", "acceptedAnswer": {"@type": "Answer", "text": "A readable, chronological format like INV-2026-0042 or 2026-0042 works well: year first, then a zero-padded sequential number. Avoid characters that are hard to read over the phone (O vs 0)."}}, {"@type": "Question", "name": "What if I issue an invoice with the wrong number?", "acceptedAnswer": {"@type": "Answer", "text": "Void or cancel it with a clear note, issue the corrected invoice with the next sequential number, and keep the voided document in your records. Never reuse the number."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么发票编号值得认真对待</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          发票编号是账目的索引键。编号重复，对账时分不清哪张是哪张；编号乱跳，审计时会被质疑记录完整性；编号含糊（客户名+日期），第二年回看完全无法排序。一套清晰的编号规则成本极低，出错时的补救成本极高。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三种经过验证的编号格式</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔢 <strong>年份+序号</strong>：INV-2026-0001（最常用，排序天然按时间）</p>
          <p>🔢 <strong>纯序号</strong>：000123（全年连续，跨年从头开始加年份前缀）</p>
          <p>🔢 <strong>客户代码+序号</strong>：ACME-2026-014（客户多时方便按客户筛选）</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          推荐第一种：年份前缀让文件按字母序就是时间序，补零（0001 而不是 1）保证排序正确。「INV-」前缀可选，如果你的系统里还有贷记单（credit note），用不同前缀（CN-）区分。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">编号规则的四个要点</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>连续不跳号</strong>：作废的发票保留编号并标注 VOID，不删号不重用——审计眼里，跳号和隐瞒是同一回事</li>
          <li><strong>避免易混字符</strong>：编号里去掉 O、I、l，电话里口头确认编号时不会和 0、1 混淆</li>
          <li><strong>提前预留容量</strong>：一年开 300 张就用 4 位补零，别用 3 位导致 999 之后被迫改格式</li>
          <li><strong>系统自动生成</strong>：手工编号迟早出错。发票生成器按顺序自动编号，杜绝重号</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">出错了怎么补救</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          发现重号：先确认哪张实际发给了客户，另一张作废处理，新发票用下一个序号。发现跳号：在作废记录里注明原因（印错、客户取消），文件链就完整了。已经发给客户的错误发票：开一张贷记单冲销原发票，再开正确的新发票——不要直接改旧发票重发，两边账目对不上。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">发票编号有法律强制格式吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">多数国家和地区对自由职业者/小企业的自制发票没有强制编号格式，但要求记录完整、可追溯。税务局稽查时，连续编号是证明收入完整的最直接证据。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">每年要从 1 重新开始吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">推荐每年重置并加年份前缀。跨年连续编号也可以，但文件按名称排序时会混在一起，检索不方便。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → 用发票生成器自动编号，永不重号
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Invoice Numbers Deserve Real Attention</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          An invoice number is the index key of your books. Duplicate numbers make reconciliation guesswork. Gaps invite audit questions about missing records. Vague schemes — client name plus date — become unsortable within a year. A clean numbering rule costs nothing to set up and a great deal to repair after the fact.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Battle-Tested Formats</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔢 <strong>Year + sequence</strong>: INV-2026-0001 — the most common; sorts chronologically by default</p>
          <p>🔢 <strong>Pure sequence</strong>: 000123 — continuous through the year, add a year prefix at rollover</p>
          <p>🔢 <strong>Client code + sequence</strong>: ACME-2026-014 — handy for filtering by client at scale</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The year-first format is the recommendation: files sort by time as soon as they're alphabetized, and zero-padding (0001, not 1) keeps the order intact. The "INV-" prefix is optional — if you also issue credit notes, give those a distinct prefix (CN-) so the two never blur.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Four Rules That Keep Numbering Clean</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Never skip</strong>: voided invoices keep their number, marked VOID — to an auditor, a gap and a cover-up look identical</li>
          <li><strong>Avoid look-alike characters</strong>: drop O, I, and l from numbers so they can't be confused with 0 and 1 over a phone call</li>
          <li><strong>Pad for the year's volume</strong>: expect 300 invoices? Use four digits — don't hit 999 and be forced to change format mid-year</li>
          <li><strong>Let software assign numbers</strong>: manual numbering fails eventually; a generator issuing numbers sequentially makes duplicates structurally impossible</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">When Something Goes Wrong</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          On a duplicate: confirm which invoice actually reached the client, void the other, and issue the next one with the next number. On a gap: note the reason in your void log — misprint, client cancellation — and the chain stays complete. On an error already sent to a client: issue a credit note against the original, then a corrected invoice. Editing and resending the old one leaves both sides of the ledger disagreeing.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">Is invoice numbering legally mandated?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Most jurisdictions don't prescribe a format for freelancers and small businesses, but they do require complete, traceable records. Sequential numbering is the simplest proof of unbroken revenue records during a tax review.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Should numbering restart every year?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Restarting with a year prefix is the cleaner path. Continuous cross-year numbering works too, but files interleave when sorted by name and become harder to retrieve.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/invoice-generator" className="text-orange-600 font-medium hover:underline">
            → Auto-numbered invoices that never duplicate
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '发票编号规则：不再重复和跳号' : 'Invoice Numbering Rules: Never Duplicate or Skip'}
      </h1>
      {content[lang]}
    </div>
  )
}
