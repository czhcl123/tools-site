import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '网络安全入门指南：从密码安全、双因素认证到钓鱼邮件防范，教你保护在线账户安全的基本技能，附带常见安全风险和应对方法清单。' : 'en'
  return {
    title: lang === 'zh' ? '网络安全入门：如何保护你的在线账户' : 'Cybersecurity 101 Guide',
    description: lang === 'zh' ? '密码安全、双因素认证、钓鱼防范,以及如何用密码生成器创建强密码。' : 'Password security, two-factor authentication, phishing prevention, and creating strong passwords.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/password-cybersecurity-guide',
      languages: { 'en-US': '/blog/password-cybersecurity-guide', 'x-default': '/blog/password-cybersecurity-guide' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/password-cybersecurity-guide' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">最常见的安全威胁</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2024年最常见的网络攻击:<strong>钓鱼邮件(36%)、弱密码(24%)、恶意软件(19%)</strong>。了解这些威胁是保护自己的第一步。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">密码安全基础</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>长度优先</strong> — 12位以上,越长越安全</li>
          <li><strong>混合字符</strong> — 大小写+数字+符号</li>
          <li><strong>唯一性</strong> — 每个账户用不同密码</li>
          <li><strong>密码管理器</strong> — 用1Password/Bitwarden管理</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">双因素认证(2FA)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2FA在密码之外增加第二层保护。即使密码泄露,黑客没有你的手机也无法登录。建议所有重要账户(邮箱、银行、社交)都开启2FA。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何识别钓鱼?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>检查发件人邮箱是否 official</li>
          <li>悬停查看链接实际地址</li>
          <li>警惕"紧急"、"账户异常"等催促语言</li>
          <li>不在可疑页面输入密码</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">安全检查清单</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          定期检查:①更换弱密码 ②开启2FA ③检查账户泄露Have I Been Pwned ④更新软件 ⑤备份重要数据。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → 生成安全密码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Most Common Security Threats</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Top cyber attacks in 2024: <strong>phishing (36%), weak passwords (24%), malware (19%)</strong>. Understanding these threats is the first step to protection.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Password Security Basics</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Length first</strong> — 12+ characters, longer is safer</li>
          <li><strong>Mix characters</strong> — uppercase + lowercase + numbers + symbols</li>
          <li><strong>Uniqueness</strong> — different password for each account</li>
          <li><strong>Password manager</strong> — use 1Password/Bitwarden</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Two-Factor Authentication (2FA)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2FA adds a second layer beyond passwords. Even if your password leaks, hackers can't login without your phone. Enable 2FA for all important accounts (email, banking, social).
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Spot Phishing?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li>Check if sender email is official</li>
          <li>Hover to see actual link destination</li>
          <li>Watch for urgency language ("urgent", "account compromised")</li>
          <li>Never enter passwords on suspicious pages</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Security Checklist</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regular checks: ①Replace weak passwords ②Enable 2FA ③Check Have I Been Pwned ④Update software ⑤Backup important data.
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → Generate Secure Passwords
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '网络安全入门' : 'Cybersecurity 101'}
      </h1>
      {content[lang]}
    </div>
  )
}
