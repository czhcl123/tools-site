import Link from 'next/link'

type Lang = 'zh' | 'en'

type ToolMeta = {
  icon: string
  zh: string
  en: string
}

// All tool metadata in one place - keeps names consistent across the site
export const TOOLS_META: Record<string, ToolMeta> = {
  '/discount-calculator': { icon: '🏷️', zh: '折扣计算器', en: 'Discount Calculator' },
  '/bmi-calculator': { icon: '⚖️', zh: 'BMI计算器', en: 'BMI Calculator' },
  '/countdown': { icon: '📅', zh: '日期计算器', en: 'Date Calculator' },
  '/lunar-calendar': { icon: '📆', zh: '农历转换', en: 'Lunar Calendar' },
  '/unit-converter': { icon: '📐', zh: '单位换算', en: 'Unit Converter' },
  '/qr-code-generator': { icon: '📱', zh: 'QR码生成器', en: 'QR Code Generator' },
  '/word-counter': { icon: '📝', zh: '字数统计', en: 'Word Counter' },
  '/json-formatter': { icon: '🔧', zh: 'JSON格式化', en: 'JSON Formatter' },
  '/heic-to-jpg': { icon: '🖼️', zh: 'HEIC转JPG', en: 'HEIC to JPG' },
  '/invoice-generator': { icon: '📄', zh: '发票生成器', en: 'Invoice Generator' },
}

export default function RelatedTools({ lang, paths }: { lang: Lang; paths: string[] }) {
  const label = lang === 'zh' ? '相关工具' : 'Related Tools'
  return (
    <div className="mt-6 pt-6 border-t border-gray-100">
      <h3 className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">{label}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {paths.map((p) => {
          const meta = TOOLS_META[p]
          if (!meta) return null
          return (
            <Link
              key={p}
              href={`${p}?lang=${lang}`}
              className="block bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-lg p-3 text-center text-xs text-gray-600 hover:text-orange-600 transition-all active:scale-[0.98]"
            >
              <div className="text-lg mb-0.5">{meta.icon}</div>
              <div className="font-medium">{lang === 'zh' ? meta.zh : meta.en}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}