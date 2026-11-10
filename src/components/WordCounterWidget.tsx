'use client'

import { useState, useMemo } from 'react'

type Lang = 'zh' | 'en'

const t = {
  zh: {
    label: '字数统计',
    placeholder: '在此粘贴或输入文本...',
    clear: '清空',
    copy: '复制',
    copied: '已复制',
    words: '单词数',
    chinese: '中文字数',
    chars: '字符数（含空格）',
    charsNoSpace: '字符数（不含空格）',
    sentences: '句子数',
    paragraphs: '段落数',
    readingTime: '阅读时间（分钟）',
  },
  en: {
    label: 'Word Counter',
    placeholder: 'Paste or type text here...',
    clear: 'Clear',
    copy: 'Copy',
    copied: 'Copied!',
    words: 'Words',
    chinese: 'Chinese chars',
    chars: 'Characters',
    charsNoSpace: 'Characters (no spaces)',
    sentences: 'Sentences',
    paragraphs: 'Paragraphs',
    readingTime: 'Reading time (min)',
  },
}

export default function WordCounterWidget({ lang = 'en' }: { lang?: Lang }) {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? (trimmed.match(/[a-zA-Z]+/g) || []).length : 0
    const chinese = (text.match(/[\u4e00-\u9fa5]/g) || []).length
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const sentences = trimmed ? trimmed.split(/[.!?。!?]+/).filter((s) => s.trim()).length : 0
    const paragraphs = trimmed ? trimmed.split(/\n+/).filter((p) => p.trim()).length : 0
    const readingMinutes = Math.max(words / 200, chinese / 300)
    const readingTime = readingMinutes < 1 ? 0 : Math.ceil(readingMinutes)
    return { words, chinese, characters, charactersNoSpaces, sentences, paragraphs, readingTime }
  }, [text])

  const copyText = async () => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-800 mb-3">{t[lang].label}</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t[lang].placeholder}
        rows={8}
        aria-label={t[lang].label}
        className="w-full px-4 py-3 text-base border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-y font-mono text-sm"
      />
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => setText('')}
          className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md"
        >
          {t[lang].clear}
        </button>
        <button
          onClick={copyText}
          disabled={!text}
          className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-600 rounded-md"
        >
          {copied ? t[lang].copied : t[lang].copy}
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
        <Stat label={t[lang].words} value={stats.words} highlight />
        <Stat label={t[lang].chinese} value={stats.chinese} highlight />
        <Stat label={t[lang].chars} value={stats.characters} />
        <Stat label={t[lang].charsNoSpace} value={stats.charactersNoSpaces} />
        <Stat label={t[lang].sentences} value={stats.sentences} />
        <Stat label={t[lang].paragraphs} value={stats.paragraphs} />
        <div className="pt-2 border-t border-gray-100">
          <Stat label={t[lang].readingTime} value={stats.readingTime} highlight />
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`font-mono font-semibold ${highlight ? 'text-xl text-orange-500' : 'text-lg text-gray-700'}`}>
        {value}
      </span>
    </div>
  )
}
