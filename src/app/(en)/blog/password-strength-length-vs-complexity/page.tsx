import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What makes a password strong?", "acceptedAnswer": {"@type": "Answer", "text": "Length first, randomness second. A 16-character random password resists brute force orders of magnitude better than an 8-character password with symbols. Uniqueness across sites matters as much as strength itself."}}, {"@type": "Question", "name": "Are passphrases better than passwords?", "acceptedAnswer": {"@type": "Answer", "text": "For human-memorized credentials, yes. A four-word passphrase like correct-harbor-violet-92 has high entropy, resists dictionary attacks, and is far easier to remember than 16 characters of gibberish."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Password Strength: Length vs Complexity",
  "description": "What actually makes a password strong — length beats special characters, and passphrases beat gibberish. With brute-force time comparisons.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-10-06",
  "dateModified": "2026-10-21",
  "author": {
    "@type": "Organization",
    "name": "Practical Tools",
    "url": "https://getpracticaltools.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Practical Tools",
    "logo": {
      "@type": "ImageObject",
      "url": "https://getpracticaltools.com/favicon.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getpracticaltools.com/blog/password-strength-length-vs-complexity"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Password Strength: Length vs Complexity',
    description: 'What actually makes a password strong — length beats special characters, and passphrases beat gibberish. With brute-force time comparisons.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/password-strength-length-vs-complexity',
      languages: { 'en-US': '/blog/password-strength-length-vs-complexity', 'x-default': '/blog/password-strength-length-vs-complexity' },
    },
    openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/password-strength-length-vs-complexity' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
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
          <Link href="/password-generator" className="text-orange-700 font-medium hover:underline">
            → Generate a 16-character password or a passphrase
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {'Password Strength: Length vs Complexity, What Wins'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-10-06
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
