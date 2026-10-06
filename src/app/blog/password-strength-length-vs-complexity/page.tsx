import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '密码强度解析：长度和复杂度哪个更重要'
      : 'Password Strength: Length vs Complexity, What Wins',
    description: lang === 'zh'
      ? '密码强度由什么决定？为什么 12 位以上比加符号更重要，口令短语比随机密码更实用，附暴力破解时间对照。'
      : 'What actually makes a password strong — length beats special characters, and passphrases beat gibberish. With brute-force time comparisons.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/password-strength-length-vs-complexity',
      languages: { 'en-US': '/blog/password-strength-length-vs-complexity', 'x-default': '/blog/password-strength-length-vs-complexity' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/password-strength-length-vs-complexity' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What makes a password strong?", "acceptedAnswer": {"@type": "Answer", "text": "Length first, randomness second. A 16-character random password resists brute force orders of magnitude better than an 8-character password with symbols. Uniqueness across sites matters as much as strength itself."}}, {"@type": "Question", "name": "Are passphrases better than passwords?", "acceptedAnswer": {"@type": "Answer", "text": "For human-memorized credentials, yes. A four-word passphrase like correct-harbor-violet-92 has high entropy, resists dictionary attacks, and is far easier to remember than 16 characters of gibberish."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">强度的本质：攻击者要猜多少次</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          密码强度只有一个客观定义：<strong>攻击者穷举所有组合需要多少次尝试</strong>。这个数字由两个变量决定——长度和可用字符集。每增加 1 位，组合空间就乘以字符集大小。8 位小写密码约 2000 亿种组合，8 位全字符密码约 7000 万亿种——看起来很大，但在现代 GPU 集群面前，前者几小时就能跑完。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">暴力破解时间对照表</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔓 <strong>8 位数字</strong>：不到 1 秒</p>
          <p>🔓 <strong>8 位小写字母</strong>：约几小时（高性能集群）</p>
          <p>🔓 <strong>8 位大小写+数字+符号</strong>：数年</p>
          <p>🔓 <strong>12 位混合字符</strong>：超过宇宙年龄</p>
          <p>🔓 <strong>16 位混合字符</strong>：数学上不可破解</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          结论很清楚：<strong>8 位加符号不如 12 位纯字母</strong>。长度的收益是指数级的，复杂度只是线性的。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">比暴力破解更现实的威胁</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          但真实攻击者很少纯暴力破解——密码喷洒（password spraying）和撞库（credential stuffing）效率更高：拿一个泄露库里的密码去试所有平台。这意味着两个比长度更重要的事实：
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>唯一性 &gt; 强度</strong>：一个 20 位但全平台复用的密码，泄露一次就全军覆没</li>
          <li><strong>避开常见词</strong>：「Password1!」满足所有复杂度规则，但排在字典攻击第一名。规则化的密码（词+数字+感叹号）在攻击者眼里是可预测的模板</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">口令短语：好记且真的强</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          最实用的方案是 4 个随机词组成的口令短语（passphrase）：「correct-harbor-violet-92」。四个不相关词的组合熵值远超 8 位混合密码，而且人脑记一句话比记一串符号容易一个数量级。生成时用密码生成器选随机词，别用歌词、名言——那些早就在字典库里了。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">密码多久换一次？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">NIST 现行建议：没有泄露迹象就不要定期换。强制 90 天更换只会逼人写「Password1 → Password2」。泄露发生时立刻换，加上开启两步验证。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">两步验证还有必要吗？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">密码再强也可能被钓鱼或撞库。两步验证是最后一道防线，重要账户（邮箱、银行）必须开，优先用验证器 App 而不是短信。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → 生成 16 位随机密码或口令短语
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Strength Is One Number: Guesses Required</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Password strength has exactly one objective definition: <strong>how many attempts an attacker must make to exhaust every combination</strong>. Two variables drive it — length and character set. Every extra character multiplies the search space by the set size. An 8-character lowercase password has roughly 200 billion combinations; an 8-character password using the full character set has about 7,000 trillion. Sounds safe — until you learn a modern GPU cluster can grind through the first in hours.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Brute-Force Time at a Glance</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🔓 <strong>8 digits</strong>: under a second</p>
          <p>🔓 <strong>8 lowercase letters</strong>: a few hours on a serious cluster</p>
          <p>🔓 <strong>8 mixed-case + digits + symbols</strong>: several years</p>
          <p>🔓 <strong>12 mixed characters</strong>: longer than the age of the universe</p>
          <p>🔓 <strong>16 mixed characters</strong>: mathematically out of reach</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The takeaway is blunt: <strong>12 plain letters beats 8 characters with symbols</strong>. Length pays exponentially; complexity only linearly.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Threats That Are More Real Than Brute Force</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most attackers skip brute force entirely — password spraying and credential stuffing are cheaper: take one leaked password and try it everywhere. Two facts matter more than length because of this:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Uniqueness beats strength</strong>: one 20-character password reused across sites falls everywhere the moment any single account leaks</li>
          <li><strong>Avoid common patterns</strong>: "Password1!" satisfies every complexity rule and still ranks near the top of dictionary lists. The word-plus-digit-plus-bang template is itself predictable</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Passphrases: Memorable and Genuinely Strong</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most practical answer is a passphrase of four random words: "correct-harbor-violet-92." Four unrelated words carry far more entropy than an 8-character mixed password, and human memory handles a sentence an order of magnitude better than a symbol string. Generate words with a password generator rather than pulling from lyrics or quotes — attackers already own those dictionaries.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How often should passwords be changed?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Current NIST guidance: not on a timer. Forced 90-day rotation just produces Password1 → Password2. Rotate when there's evidence of a breach, and enable two-factor authentication.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Is two-factor authentication still necessary?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Yes — no password survives phishing and credential stuffing forever. Two-factor is the last line of defense. Use it on email and banking at minimum, with an authenticator app over SMS.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-600 font-medium hover:underline">
            → Generate a 16-character password or a passphrase
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '密码强度解析：长度和复杂度哪个更重要' : 'Password Strength: Length vs Complexity, What Wins'}
      </h1>
      {content[lang]}
    </div>
  )
}
