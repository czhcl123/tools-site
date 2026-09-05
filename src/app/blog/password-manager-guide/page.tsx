import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? '密码管理器完全指南：对比主流密码管理器的功能和安全性，教你如何安全地存储和管理所有账户密码，以及从记忆密码到密码管理器的迁移步骤。' : 'en'
  return {
    title: lang === 'zh'
      ? '密码管理器指南：保护你的所有密码'
      : 'Password Manager Guide',
    description: lang === 'zh'
      ? '为什么需要密码管理器，它们如何工作，选择要点，主密码技巧，以及生成密码 vs 记忆密码。'
      : 'Why you need a password manager, how they work, key features, master password tips, and generated vs remembered passwords.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/password-manager-guide',
      languages: { 'en-US': '/blog/password-manager-guide', 'x-default': '/blog/password-manager-guide' },
    },
      openGraph: { url: 'https://tools-site-production.up.railway.app/blog/password-manager-guide' },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">为什么你需要密码管理器？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          平均每人有80-100个在线账号。如果每个都用同一个密码，一个泄露全部完蛋。如果每个都用不同密码，你根本记不住。密码管理器就是解决方案：<strong>你只需要记住一个主密码，其他的交给它</strong>。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">密码管理器如何工作？</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔐 <strong>加密存储</strong>：所有密码用 AES-256 加密，只有你能用主密码解密</p>
          <p>🔄 <strong>自动填充</strong>：访问网站时自动填入密码，不用手动输入</p>
          <p>🎲 <strong>密码生成</strong>：为每个网站生成随机强密码</p>
          <p>☁️ <strong>云端同步</strong>：手机、电脑、平板都能访问</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">选择要点</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>零知识架构</strong>：服务商也无法看到你的密码</li>
          <li><strong>跨平台支持</strong>：iOS、Android、Windows、Mac、浏览器插件</li>
          <li><strong>双因素认证</strong>：主密码之外再加一层保护</li>
          <li><strong>紧急访问</strong>：可以设置信任的人在紧急情况下访问</li>
          <li><strong>价格</strong>：免费版够用吗？还是需要付费版？</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">主密码怎么设？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          主密码是你所有密码的"钥匙"。它必须<strong>强且你能记住</strong>。最佳实践：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>用密码短语</strong>：4-6个随机单词组合，如"correct-horse-battery-staple"</li>
          <li><strong>至少16个字符</strong>：越长越安全</li>
          <li><strong>不要复用</strong>：主密码不能用于任何其他网站</li>
          <li><strong>写下来存安全的地方</strong>：纸质备份放在保险箱，比忘记密码好</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">生成密码 vs 记忆密码</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🎲 <strong>生成的密码</strong>：如 "x7$Kp!2mNq@9wL" — 最安全，但必须存在密码管理器里</p>
          <p>🧠 <strong>记忆的密码</strong>：如 "correct horse battery staple" — 安全且能记住，但只适合主密码</p>
          <p>❌ <strong>重复使用的密码</strong>：如 "password123" — 最危险，绝对不要</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 寈码管理器安全吗？如果服务商被黑了怎么办？</strong><br />
          A: 零知识架构意味着即使服务器被黑，黑客拿到的也只是加密数据，没有你的主密码就无法解密。比用同一个密码安全100倍。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: 免费的够用吗？</strong><br />
          A: Bitwarden（免费开源）对大多数个人用户已经足够。1Password 和 LastPass 的付费版提供更多功能（家庭共享、暗网监控等）。
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → 生成强密码
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Why Do You Need a Password Manager?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The average person has 80-100 online accounts. If you use the same password everywhere, one breach exposes everything. If you use different passwords, you can't remember them all. A password manager solves this: <strong>you only need to remember one master password</strong>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How Password Managers Work</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔐 <strong>Encrypted storage</strong>: All passwords encrypted with AES-256; only your master password can decrypt</p>
          <p>🔄 <strong>Auto-fill</strong>: Automatically fills passwords when you visit a site</p>
          <p>🎲 <strong>Password generation</strong>: Creates random strong passwords for each site</p>
          <p>☁️ <strong>Cloud sync</strong>: Accessible on phone, computer, tablet</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">What to Look For</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Zero-knowledge architecture</strong>: The provider can't see your passwords</li>
          <li><strong>Cross-platform support</strong>: iOS, Android, Windows, Mac, browser extensions</li>
          <li><strong>Two-factor authentication</strong>: Extra layer beyond the master password</li>
          <li><strong>Emergency access</strong>: Trusted person can access in emergencies</li>
          <li><strong>Price</strong>: Is the free tier enough, or do you need premium?</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Setting a Master Password</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your master password is the "key" to all your passwords. It must be <strong>strong yet memorable</strong>. Best practices:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Use a passphrase</strong>: 4-6 random words, like "correct-horse-battery-staple"</li>
          <li><strong>At least 16 characters</strong>: Longer = more secure</li>
          <li><strong>Never reuse</strong>: Your master password must not be used anywhere else</li>
          <li><strong>Write it down</strong>: Paper backup in a safe is better than forgetting it</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Generated vs Memorized Passwords</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🎲 <strong>Generated</strong>: Like "x7$Kp!2mNq@9wL" — most secure, but must be stored in the manager</p>
          <p>🧠 <strong>Memorized</strong>: Like "correct horse battery staple" — secure and memorable, but only for master password</p>
          <p>❌ <strong>Reused</strong>: Like "password123" — most dangerous, never do this</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Are password managers safe? What if the provider gets hacked?</strong><br />
          A: Zero-knowledge means even if servers are breached, hackers only get encrypted data. Without your master password, it's useless. 100x safer than password reuse.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Q: Are free ones enough?</strong><br />
          A: Bitwarden (free, open-source) is sufficient for most individuals. 1Password and LastPass premium offer extras (family sharing, dark web monitoring, etc.).
        </p>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → Generate a Strong Password
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '密码管理器指南：保护你的所有密码' : 'Password Manager Guide: Keep All Your Passwords Safe'}
      </h1>
      {content[lang]}
    </div>
  )
}
