import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '密码生成器使用指南 — 如何创建安全强密码'
      : 'Password Generator Guide',
    description: lang === 'zh'
      ? '教你用密码生成器创建安全强密码,了解密码强度、长度和字符组合的最佳实践,保护你的在线账户安全。'
      : 'Learn how to create strong passwords with a password generator. Best practices for password length, character mixing, and security tips to protect your online accounts.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/password-generator',
      languages: { 'en-US': '/blog/password-generator', 'x-default': '/blog/password-generator' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/password-generator' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么需要强密码?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          2024年,全球数据泄露事件超过数千起,其中<strong>80%以上与弱密码或密码重复使用有关</strong>。一个简单的"123456"或"password"可能在几秒内被破解,而一个16位的混合密码需要数百年。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">什么是安全密码?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          安全密码应满足以下条件:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>长度至少12位</strong> — 8位密码几秒就能暴力破解,12位需要几百年</li>
          <li><strong>混合字符类型</strong> — 大写字母、小写字母、数字和特殊符号</li>
          <li><strong>避免个人信息</strong> — 不要用生日、姓名、电话号码</li>
          <li><strong>避免常见模式</strong> — 不要用"123456"、"qwerty"、"password"</li>
          <li><strong>每个账户不同</strong> — 一个网站泄露不会影响其他账户</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">密码强度如何计算?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          密码强度通常基于以下几个因素评估:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>长度</strong> — 越长越好,每增加一位,破解难度呈指数增长</li>
          <li><strong>字符多样性</strong> — 混合使用大小写、数字和符号</li>
          <li><strong>随机性</strong> — 避免字典单词和常见模式</li>
          <li><strong>不可预测性</strong> — 不包含个人信息或可猜测的内容</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">如何使用密码生成器?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          密码生成器可以一键创建安全的随机密码。以下是使用步骤:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>选择密码长度</strong> — 建议16位以上</li>
          <li><strong>选择字符类型</strong> — 勾选大小写字母、数字和符号</li>
          <li><strong>点击生成</strong> — 系统会创建一个安全的随机密码</li>
          <li><strong>复制密码</strong> — 一键复制到剪贴板</li>
          <li><strong>保存密码</strong> — 使用密码管理器保存</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">密码管理最佳实践</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          除了使用强密码,还应该:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>使用密码管理器</strong> — 如1Password、Bitwarden、LastPass</li>
          <li><strong>启用双因素认证</strong> — 为重要账户添加额外保护层</li>
          <li><strong>定期更换密码</strong> — 尤其是重要账户,建议每3-6个月更换</li>
          <li><strong>检查泄露</strong> — 使用Have I Been Pwned等工具检查密码是否泄露</li>
          <li><strong>警惕钓鱼</strong> — 不要在可疑网站输入密码</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见密码破解方式</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          了解黑客如何破解密码,有助于创建更安全的密码:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>暴力破解</strong> — 尝试所有可能的组合,长度越长越难破解</li>
          <li><strong>字典攻击</strong> — 使用常见密码列表,避免使用字典单词</li>
          <li><strong>社会工程</strong> — 利用个人信息猜测,避免使用生日、姓名</li>
          <li><strong>凭证填充</strong> — 使用泄露的密码尝试其他网站,每个账户用不同密码</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → 立即使用密码生成器创建安全密码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need Strong Passwords?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In 2024, there were thousands of data breaches globally, with <strong>over 80% involving weak passwords or password reuse</strong>. A simple "123456" or "password" can be cracked in seconds, while a 16-character mixed password would take centuries.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What Makes a Password Secure?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A secure password should meet these criteria:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>At least 12 characters long</strong> — 8-character passwords can be brute-forced in seconds; 12 characters take centuries</li>
          <li><strong>Mixed character types</strong> — uppercase, lowercase, numbers, and symbols</li>
          <li><strong>No personal information</strong> — avoid birthdays, names, phone numbers</li>
          <li><strong>No common patterns</strong> — avoid "123456", "qwerty", "password"</li>
          <li><strong>Unique for each account</strong> — one breach won't compromise all your accounts</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Is Password Strength Calculated?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Password strength is typically evaluated based on:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Length</strong> — longer is better; each additional character exponentially increases cracking difficulty</li>
          <li><strong>Character diversity</strong> — mixing uppercase, lowercase, numbers, and symbols</li>
          <li><strong>Randomness</strong> — avoiding dictionary words and common patterns</li>
          <li><strong>Unpredictability</strong> — no personal information or guessable content</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How to Use a Password Generator?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A password generator creates secure random passwords with one click. Here's how:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Choose password length</strong> — 16 characters or more recommended</li>
          <li><strong>Select character types</strong> — check uppercase, lowercase, numbers, and symbols</li>
          <li><strong>Click Generate</strong> — the system creates a secure random password</li>
          <li><strong>Copy the password</strong> — one-click copy to clipboard</li>
          <li><strong>Save the password</strong> — use a password manager to store it</li>
        </ol>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Password Management Best Practices</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond using strong passwords, you should also:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Use a password manager</strong> — like 1Password, Bitwarden, or LastPass</li>
          <li><strong>Enable two-factor authentication</strong> — add an extra layer of protection for important accounts</li>
          <li><strong>Change passwords regularly</strong> — especially for critical accounts, every 3-6 months</li>
          <li><strong>Check for breaches</strong> — use tools like Have I Been Pwned to check if your passwords have been leaked</li>
          <li><strong>Beware of phishing</strong> — never enter passwords on suspicious websites</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Common Password Cracking Methods</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Understanding how hackers crack passwords helps you create more secure ones:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Brute force</strong> — tries all possible combinations; longer passwords are harder to crack</li>
          <li><strong>Dictionary attack</strong> — uses lists of common passwords; avoid dictionary words</li>
          <li><strong>Social engineering</strong> — uses personal information to guess; avoid birthdays and names</li>
          <li><strong>Credential stuffing</strong> — uses leaked passwords on other sites; use unique passwords for each account</li>
        </ul>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → Try the Password Generator Now
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '密码生成器使用指南' : 'Password Generator Guide'}
      </h1>
      {content[lang]}
    </div>
  )
}
