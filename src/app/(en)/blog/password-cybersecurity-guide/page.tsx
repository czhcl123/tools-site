import type { Metadata } from 'next'
import Link from 'next/link'

const faqLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Common attacks?", "acceptedAnswer": {"@type": "Answer", "text": "Credential stuffing and phishing. Strong passwords + 2FA."}}, {"@type": "Question", "name": "Password leaked?", "acceptedAnswer": {"@type": "Answer", "text": "Change immediately, check other sites, monitor activity."}}]}


const articleLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Cybersecurity 101 Guide",
  "description": "Password security, two-factor authentication, phishing prevention, and creating strong passwords.",
  "image": [
    "https://getpracticaltools.com/og-image.png"
  ],
  "datePublished": "2026-08-23",
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
    "@id": "https://getpracticaltools.com/blog/password-cybersecurity-guide"
  },
  "inLanguage": "en"
}

export async function generateMetadata(): Promise<Metadata> {
  
  const lang = 'en'
  return {
    title: 'Cybersecurity 101 Guide',
    description: 'Password security, two-factor authentication, phishing prevention, and creating strong passwords.',
    alternates: {
      canonical: 'https://getpracticaltools.com/blog/password-cybersecurity-guide',
      languages: { 'en-US': '/blog/password-cybersecurity-guide', 'x-default': '/blog/password-cybersecurity-guide' },
    },
      openGraph: { images: [{ url: 'https://getpracticaltools.com/og-image.png', type: 'image/png', width: 1200, height: 630, alt: 'Practical Tools - 12 free online calculators and utilities' }], url: 'https://getpracticaltools.com/blog/password-cybersecurity-guide' },
  }
}

export default async function BlogPost() {
  
  const lang = 'en'

  const content = {
    
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

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-semibold text-gray-800">Most common attacks?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Credential stuffing and phishing. Unique strong passwords + 2FA are the best defense.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-800">Password leaked?</dt>
          <dd className="text-gray-700 leading-relaxed ml-4">Change immediately, check other sites, monitor for suspicious activity.</dd>
        </div>
      </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/password-generator" className="text-orange-700 font-medium hover:underline">
            → Generate Secure Passwords
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
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        {'Cybersecurity 101'}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {'Practical Tools'}
        {' · '}
        {'Published'} 2026-08-23
        {' · '}
        {'Updated'} 2026-10-21
      </p>
      {content.en}
    </div>
  )
}
