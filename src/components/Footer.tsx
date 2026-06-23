'use client'

interface FooterProps {
  lang?: 'zh' | 'en'
}

const footerText = {
  zh: {
    copyright: '© 实用计算器 · 免费在线工具',
  },
  en: {
    copyright: '© Tools · Free Online Calculators',
  },
}

export default function Footer({ lang = 'zh' }: FooterProps) {
  const t = footerText[lang]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-400 text-center">
          {`${currentYear} ${t.copyright}`}
        </p>
      </div>
    </footer>
  )
}
