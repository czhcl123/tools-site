import type { Metadata } from 'next'
import PasswordGenerator from './password-generator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: '密码生成器 - 在线生成安全随机密码',
    en: 'Password Generator — Strong & Random',
  }
  const descriptions = {
    zh: '免费在线密码生成器:自定义长度、大小写、数字和符号,一键生成高强度随机密码。支持密码强度检测和一键复制,无需注册。',
    en: 'Free online password generator: customize length, uppercase, lowercase, numbers, and symbols. One-click strong random password with strength meter. No signup.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/password-generator' : '/password-generator'}`,
      languages: {
        'zh-CN': '/zh/password-generator',
        'en-US': '/password-generator',
        'x-default': '/password-generator',
      },
    },
      openGraph: { url: `${lang === 'zh' ? 'https://tools-site-production.up.railway.app/zh/password-generator' : 'https://tools-site-production.up.railway.app/password-generator'}` },
  }
}

const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么样的密码才算安全?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '安全密码至少 12 位,混合大小写字母、数字和特殊符号。不要用生日、姓名、连续数字(123456)或常见单词。推荐用密码管理器生成并保存密码。',
      },
    },
    {
      '@type': 'Question',
      name: '密码长度多少最合适?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '密码越长越安全。8 位密码几秒就能暴力破解,12 位需要几百年,16 位以上基本无法破解。建议日常使用 16 位,重要账户使用 20 位以上。',
      },
    },
    {
      '@type': 'Question',
      name: '这个密码生成器安全吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '安全。密码完全在浏览器本地生成,使用加密安全的随机数生成器(crypto.getRandomValues),不上传到任何服务器。关闭页面后密码即消失。',
      },
    },
    {
      '@type': 'Question',
      name: '每个网站都用同一个密码可以吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '绝对不行。一个网站泄露,所有账户都会被攻破。建议为每个重要账户使用不同密码,用密码管理器(如 1Password、Bitwarden)统一管理。',
      },
    },
  ],
}

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a password secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A secure password is at least 12 characters long and mixes uppercase, lowercase, numbers, and symbols. Avoid birthdays, names, sequential numbers (123456), or common words. Use a password manager to generate and store passwords.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ideal password length?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Longer is better. An 8-character password can be brute-forced in seconds, 12 characters takes centuries, and 16+ is practically uncrackable. Use 16 characters for daily use and 20+ for critical accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this password generator safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Passwords are generated entirely in your browser using the cryptographically secure crypto.getRandomValues() API. Nothing is uploaded to any server. The password disappears when you close the page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the same password for every site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. If one site is breached, all your accounts are compromised. Use a unique password for each important account and manage them with a password manager like 1Password or Bitwarden.',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed">
    <p>自定义密码长度、字符类型，一键生成安全随机密码。支持密码强度实时检测和一键复制，保护你的每个账户。</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">功能特点</h3>
    <ul className="space-y-1 text-sm">
      <li>🔐 长度 6-64 位可调</li>
      <li>🔠 大小写/数字/符号可选</li>
      <li>📊 密码强度实时检测</li>
      <li>📋 一键复制到剪贴板</li>
    </ul>
    <p className="text-xs text-gray-400 mt-3">所有密码在浏览器本地生成，不上传服务器。</p>
  </div>
)

const seoBodyEn = (
  <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed">
    <p>Customize password length and character types, then generate a secure random password with one click. Includes real-time strength detection and one-click copy.</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">Features</h3>
    <ul className="space-y-1 text-sm">
      <li>🔐 Length 6-64 characters</li>
      <li>🔠 Uppercase/lowercase/numbers/symbols</li>
      <li>📊 Real-time strength meter</li>
      <li>📋 One-click clipboard copy</li>
    </ul>
    <p className="text-xs text-gray-400 mt-3">All passwords generated locally in your browser. Nothing uploaded.</p>
  </div>
)

export default async function PasswordGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: lang === 'zh' ? '密码生成器' : 'Password Generator',
    alternateName: lang === 'zh' ? '随机密码生成' : 'Random Password Generator',
    url: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/password-generator' : '/password-generator'}`,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      lang === 'zh'
        ? '免费在线密码生成器:自定义长度、大小写、数字和符号,一键生成高强度随机密码。'
        : 'Free online password generator: customize length, character types, generate strong random passwords with one click.',
    featureList: [
      'Cryptographically secure (crypto.getRandomValues)',
      'Customizable length (6-64 characters)',
      'Uppercase, lowercase, numbers, symbols toggle',
      'Real-time password strength meter',
      'One-click copy to clipboard',
      '100% browser-side, no upload',
      'Bilingual English / Chinese',
    ],
    dateModified: '2026-08-23',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}</a>
            <a href={lang === 'zh' ? '/password-generator?lang=en' : '/zh/password-generator?lang=zh'} className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50">
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? '密码生成器' : 'Password Generator'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {lang === 'zh' ? seoBodyZh : seoBodyEn}
              </div>
            </aside>
            <section className="lg:col-span-6">
              <PasswordGenerator />
            </section>
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{lang === 'zh' ? '更多工具' : 'More Tools'}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/bmi-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '⚖️ BMI 计算器' : '⚖️ BMI Calculator'}</a></li>
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🏷️ 折扣计算器' : '🏷️ Discount Calculator'}</a></li>
                  <li><a href="/countdown" className="text-orange-500 hover:underline">{lang === 'zh' ? '📅 日期计算器' : '📅 Date Calculator'}</a></li>
                  <li><a href="/unit-converter" className="text-orange-500 hover:underline">{lang === 'zh' ? '📐 单位换算' : '📐 Unit Converter'}</a></li>
                  <li><a href="/sleep-calculator" className="text-orange-500 hover:underline">{lang === 'zh' ? '😴 睡眠计算器' : '😴 Sleep Calculator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
