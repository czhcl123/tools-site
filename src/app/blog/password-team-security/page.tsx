import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '团队密码安全最佳实践指南：为什么团队需要强密码策略，如何为不同角色创建密码，密码共享的风险和替代方案，以及使用密码生成器保护团队账户。' : 'en'
  return {
    title: lang === 'zh'
      ? '团队密码安全：最佳实践指南'
      : 'Team Password Security: Best Practices',
    description: lang === 'zh'
      ? '团队如何建立强密码策略,保护共享账户安全,使用密码生成器的最佳实践。'
      : 'How teams can build strong password policies, protect shared accounts, and use password generators for security.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/password-team-security',
      languages: { 'en-US': '/blog/password-team-security', 'x-default': '/blog/password-team-security' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/password-team-security' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Biggest team risk?", "acceptedAnswer": {"@type": "Answer", "text": "Password sharing and weak passwords. Use a team manager."}}, {"@type": "Question", "name": "Team password management?", "acceptedAnswer": {"@type": "Answer", "text": "Manager with individual accounts, 60–90 day rotation, 2FA."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么团队更需要强密码?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          个人密码泄露影响一个人；团队密码泄露影响整个公司。一个弱密码可能导致客户数据泄露、财务损失和品牌声誉损害。团队环境中的密码管理比个人复杂得多，需要系统化的策略。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">建立团队密码策略</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. 最低标准</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          所有团队账户密码至少 12 位，包含大小写字母、数字和特殊符号。使用密码生成器创建随机密码，不要用 "公司名+年份" 这类可猜测的模式。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. 角色分级</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          不同角色使用不同密码。管理员密码最强（16+位），普通用户次之（12+位），临时账户用完即废。离职员工的密码立即更换。
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. 定期轮换</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          高权限账户每 60–90 天更换密码，普通账户每年更换。密码生成器可以快速创建新的强密码，减少轮换阻力。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">密码共享的风险</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          通过微信/邮件发密码 = 明文传输，任何人都能看到。共享密码无法追溯谁做了什么。员工离职后仍持有密码 = 安全漏洞。用密码管理器的共享功能代替直接发送密码。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">实用建议</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>一人一密码</strong>：即使共享账户，每人也用独立凭据登录</li>
          <li><strong>双因素认证</strong>：所有关键账户开启 2FA，密码不是唯一防线</li>
          <li><strong>泄露监控</strong>：定期检查 Have I Been Pwned，看团队邮箱是否被泄露</li>
          <li><strong>安全培训</strong>：每季度做一次钓鱼邮件识别培训</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">团队最大风险是什么?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">密码共享和弱密码。聊天发密码=明文传输，离职未改密码=安全漏洞。</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">团队如何管理密码?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">密码管理器团队版，一人一账号，60–90天轮换，开启2FA。</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → 用密码生成器为团队创建强密码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Teams Need Strong Passwords More</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A personal password breach affects one person; a team breach affects the whole company. One weak password can lead to customer data leaks, financial loss, and brand damage. Team password management is far more complex than individual — it requires a systematic approach.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Building a Team Password Policy</h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Minimum Standards</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          All team account passwords should be at least 12 characters with uppercase, lowercase, numbers, and symbols. Use a password generator to create random passwords — never "companyname+year" patterns.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Role-Based Levels</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Different roles need different password strength. Admin passwords: 16+ characters. Regular users: 12+. Temporary accounts: use and discard. Immediately change passwords when employees leave.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Regular Rotation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          High-privilege accounts: rotate every 60–90 days. Regular accounts: annually. A password generator makes creating new strong passwords quick, reducing resistance to rotation.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Risks of Password Sharing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sending passwords via chat/email = plaintext transmission anyone can see. Shared passwords can't track who did what. Departed employees still holding passwords = security hole. Use a password manager's sharing feature instead of sending passwords directly.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Practical Recommendations</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>One person, one password</strong> — even for shared accounts, use individual credentials</li>
          <li><strong>Two-factor authentication</strong> — enable 2FA on all critical accounts; password alone isn't enough</li>
          <li><strong>Breach monitoring</strong> — regularly check Have I Been Pwned for team email exposure</li>
          <li><strong>Security training</strong> — quarterly phishing email recognition workshops</li>
        </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Biggest team security risk?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Password sharing and weak passwords. Chat = plaintext. Departed employees with access = security hole.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">How should teams manage passwords?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Team password manager, one account per person, rotate every 60–90 days, enable 2FA.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → Generate Strong Passwords for Your Team
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '团队密码安全：最佳实践指南' : 'Team Password Security: Best Practices'}
      </h1>
      {content[lang]}
    </div>
  )
}
