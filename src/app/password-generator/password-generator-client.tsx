'use client'

import { Suspense, useState, useCallback } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'

const t = {
  zh: {
    title: '密码生成器',
    subtitle: '生成安全随机密码，可自定义长度和字符类型',
    length: '密码长度',
    uppercase: '大写字母 (A-Z)',
    lowercase: '小写字母 (a-z)',
    numbers: '数字 (0-9)',
    symbols: '特殊符号 (!@#$...)',
    generate: '生成密码',
    copy: '复制',
    copied: '已复制!',
    passwordLength: '密码长度',
    strength: '密码强度',
    weak: '弱',
    fair: '一般',
    strong: '强',
    veryStrong: '非常强',
    tips: '安全提示',
    tip1: '密码长度至少 12 位',
    tip2: '混合使用大小写、数字和符号',
    tip3: '不要使用个人信息作为密码',
    tip4: '每个账户使用不同的密码',
    generated: '生成的密码',
    noPassword: '点击"生成密码"按钮开始',
  },
  en: {
    title: 'Password Generator',
    subtitle: 'Generate secure random passwords with customizable length and character types',
    length: 'Password Length',
    uppercase: 'Uppercase (A-Z)',
    lowercase: 'Lowercase (a-z)',
    numbers: 'Numbers (0-9)',
    symbols: 'Symbols (!@#$...)',
    generate: 'Generate Password',
    copy: 'Copy',
    copied: 'Copied!',
    passwordLength: 'Password Length',
    strength: 'Password Strength',
    weak: 'Weak',
    fair: 'Fair',
    strong: 'Strong',
    veryStrong: 'Very Strong',
    tips: 'Security Tips',
    tip1: 'Use at least 12 characters',
    tip2: 'Mix uppercase, lowercase, numbers, and symbols',
    tip3: 'Don\'t use personal information',
    tip4: 'Use a different password for each account',
    generated: 'Generated Password',
    noPassword: 'Click "Generate Password" to start',
  },
}

function getStrength(password: string): { level: number; label: string; color: string } {
  let score = 0
  if (password.length >= 12) score++
  if (password.length >= 16) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++

  if (score <= 2) return { level: 1, label: 'weak', color: 'bg-red-500' }
  if (score <= 3) return { level: 2, label: 'fair', color: 'bg-orange-500' }
  if (score <= 4) return { level: 3, label: 'strong', color: 'bg-green-500' }
  return { level: 4, label: 'veryStrong', color: 'bg-emerald-600' }
}

function PasswordGeneratorContent({ initialLang }: { initialLang?: 'zh' | 'en' }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const isZh = initialLang === 'zh' || pathname?.startsWith('/zh') || searchParams.get('lang') === 'zh'
  const lang = (isZh ? 'zh' : 'en') as 'zh' | 'en'
  const u = (key: string) => t[lang][key as keyof typeof t.zh]

  const [length, setLength] = useState(16)
  const [useUpper, setUseUpper] = useState(true)
  const [useLower, setUseLower] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const generate = useCallback(() => {
    let chars = ''
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (useNumbers) chars += '0123456789'
    if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz'

    const arr = new Uint32Array(length)
    crypto.getRandomValues(arr)
    const result = Array.from(arr, (v) => chars[v % chars.length]).join('')
    setPassword(result)
    setCopied(false)
  }, [length, useUpper, useLower, useNumbers, useSymbols])

  const copyToClipboard = async () => {
    if (!password) return
    await navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const strength = password ? getStrength(password) : null

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-800 mb-1">{u('title')}</h2>
      <p className="text-sm text-gray-500 mb-6">{u('subtitle')}</p>

      {/* Password Display */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-lg break-all min-h-[60px] flex items-center">
        {password ? (
          <span className="text-gray-800">{password}</span>
        ) : (
          <span className="text-gray-400 text-sm">{u('noPassword')}</span>
        )}
      </div>

      {/* Strength Bar */}
      {strength && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">{u('strength')}</span>
            <span className={`text-xs font-medium ${strength.level <= 1 ? 'text-red-500' : strength.level <= 2 ? 'text-orange-500' : strength.level <= 3 ? 'text-green-500' : 'text-emerald-600'}`}>
              {u(strength.label)}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full ${strength.color} rounded-full transition-all`} style={{ width: `${(strength.level / 4) * 100}%` }} />
          </div>
        </div>
      )}

      {/* Length Slider */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm font-medium text-gray-600">{u('length')}</label>
          <span className="text-sm font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded">{length}</span>
        </div>
        <input
          type="range" min={6} max={64} value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>6</span><span>64</span>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {[
          { key: 'uppercase', checked: useUpper, set: setUseUpper },
          { key: 'lowercase', checked: useLower, set: setUseLower },
          { key: 'numbers', checked: useNumbers, set: setUseNumbers },
          { key: 'symbols', checked: useSymbols, set: setUseSymbols },
        ].map(({ key, checked, set }) => (
          <label key={key} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" checked={checked} onChange={(e) => set(e.target.checked)}
              className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-400" />
            {u(key)}
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button onClick={generate}
          className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
          {u('generate')}
        </button>
        {password && (
          <button onClick={copyToClipboard}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {copied ? u('copied') : u('copy')}
          </button>
        )}
      </div>

      {/* Security Tips */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-800 mb-2">🔒 {u('tips')}</h3>
        <ul className="space-y-1">
          {['tip1', 'tip2', 'tip3', 'tip4'].map((key) => (
            <li key={key} className="text-xs text-blue-700">• {u(key)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function PasswordGenerator({ lang }: { lang?: 'zh' | 'en' }) {
  return (
    <Suspense fallback={<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">Loading...</div>}>
      <PasswordGeneratorContent initialLang={lang} />
    </Suspense>
  )
}
