'use client'

import Link from 'next/link'

interface FooterProps {
  lang?: 'zh' | 'en'
}

const footerText = {
  zh: {
    copyright: '© 实用计算器 · 免费在线工具',
    about: '关于我们',
    privacy: '隐私',
    home: '首页',
  },
  en: {
    copyright: '© Tools · Free Online Calculators',
    about: 'About',
    privacy: 'Privacy',
    home: 'Home',
  },
}

export default function Footer({ lang = 'zh' }: FooterProps) {
  const t = footerText[lang]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mb-3 text-xs">
          <Link href={`/?lang=${lang}`} className="text-gray-400 hover:text-orange-500 transition-colors">
            {t.home}
          </Link>
          <span className="text-gray-200">·</span>
          <Link href={`/about?lang=${lang}`} className="text-gray-400 hover:text-orange-500 transition-colors">
            {t.about}
          </Link>
          <span className="text-gray-200">·</span>
          <a href={`/llms.txt`} className="text-gray-400 hover:text-orange-500 transition-colors">
            llms.txt
          </a>
          <span className="text-gray-200">·</span>
          <a href={`/rss.xml`} className="text-gray-400 hover:text-orange-500 transition-colors">
            RSS
          </a>
        </nav>
        <p className="text-xs text-gray-400 text-center">
          {`${currentYear} ${t.copyright}`}
        </p>
      </div>
    </footer>
  )
}