'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const MESSAGE_TYPE = 'practical-tools-word-counter'

export default function EmbedWordCounter() {
  const [text, setText] = useState('')
  const boxRef = useRef<HTMLDivElement>(null)

  // Tell the hosting page how tall we are so the iframe can resize itself.
  const reportHeight = useCallback(() => {
    if (typeof window === 'undefined' || window.parent === window) return
    const height = Math.ceil(document.documentElement.getBoundingClientRect().height)
    window.parent.postMessage({ type: MESSAGE_TYPE, height }, '*')
  }, [])

  useEffect(() => {
    reportHeight()
    if (!boxRef.current || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(reportHeight)
    ro.observe(boxRef.current)
    return () => ro.disconnect()
  }, [reportHeight])

  // Same counting rules as /word-counter so the embed and the full tool never disagree.
  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? (trimmed.match(/[a-zA-Z]+/g) || []).length : 0
    const chinese = (text.match(/[\u4e00-\u9fa5]/g) || []).length
    const characters = text.length
    const readingMinutes = Math.max(words / 200, chinese / 300)
    const readingTime = readingMinutes < 1 ? 0 : Math.ceil(readingMinutes)
    return { words, chinese, characters, readingTime }
  }, [text])

  return (
    <div ref={boxRef} className="w-full bg-white p-3 text-gray-800">
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <h1 className="text-sm font-semibold text-gray-800">Word counter</h1>
        <span className="text-[11px] text-gray-400">free · no signup</span>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Paste or type your text…"
        aria-label="Text to count"
        className="w-full resize-y rounded-lg border border-gray-300 bg-white p-2 text-xs leading-relaxed text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
      />

      <div className="mt-1 flex items-center justify-between gap-2 text-[11px] text-gray-400">
        <span>{text.length.toLocaleString()} characters</span>
        <button
          type="button"
          onClick={() => setText('')}
          disabled={!text}
          className="rounded-md px-2 py-0.5 text-[11px] font-medium text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-40"
        >
          Clear
        </button>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-1 rounded-lg bg-gray-50 p-2 text-center">
        <Cell label="Words" value={stats.words} />
        <Cell label="中文" value={stats.chinese} />
        <Cell label="Chars" value={stats.characters} />
        <Cell label="Read (min)" value={stats.readingTime} />
      </div>

      <p className="mt-2 text-[10px] text-gray-400">
        <a
          href="https://getpracticaltools.com/word-counter?utm_source=embed&utm_medium=widget"
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2 hover:text-orange-500"
        >
          Powered by Practical Tools
        </a>{' '}
        — free online word counter.
      </p>
    </div>
  )
}

function Cell({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-sm font-semibold text-orange-500">{value.toLocaleString()}</span>
      <span className="text-[10px] leading-tight text-gray-500">{label}</span>
    </div>
  )
}
