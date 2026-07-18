'use client'

import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import Footer from '../../components/Footer'
import RelatedTools from '../../components/RelatedTools'

const t = {
  zh: {
    siteTitle: '实用计算器',
    title: '倒计时器 — 计算距任意日期还有多久',
    description: '在线倒计时器:实时显示距任意日期的天数、小时、分钟、秒数。或计算距今已过去几天。',
    targetDate: '目标日期',
    modeDays: '天',
    modeLive: '实时倒计时',
    start: '开始',
    stop: '停止',
    reset: '重置',
    today: '今天',
    daysLeft: '距离目标还有',
    daysPassed: '已过去',
    days: '天',
    hours: '小时',
    minutes: '分钟',
    seconds: '秒',
    targetPassed: '目标已过',
    targetFuture: '目标未到',
    moreCalc: '更多计算器',
    home: '← 返回首页',
  },
  en: {
    siteTitle: 'Practical Tools',
    title: 'Countdown Timer - Days Until Any Date',
    description: 'Live countdown timer showing days, hours, minutes, and seconds until any date or event. Free, no signup.',
    targetDate: 'Target Date',
    modeDays: 'Days',
    modeLive: 'Live Timer',
    start: 'Start',
    stop: 'Stop',
    reset: 'Reset',
    today: 'Today',
    daysLeft: 'Days until',
    daysPassed: 'Days since',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    targetPassed: 'Target passed',
    targetFuture: 'Target upcoming',
    moreCalc: 'More Calculators',
    home: '← Back to Home',
  },
}

function formatDate(date: Date, lang: 'zh' | 'en') {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  if (lang === 'zh') return `${y}年${m}月${d}日`
  return `${y}-${m}-${d}`
}

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, '0')
}

// Returns signed diff in ms (positive = future, negative = past)
function getMsDiff(target: Date, now: Date) {
  return target.getTime() - now.getTime()
}

function CountdownContent({ initialLang, seoBody }: { initialLang?: 'zh' | 'en'; seoBody?: React.ReactNode }) {
  const searchParams = useSearchParams()
  const lang = (searchParams.get('lang') === 'zh' ? 'zh' : 'en') as 'zh' | 'en'
  const pathname = usePathname()
  const nextLang: 'zh' | 'en' = lang === 'zh' ? 'en' : 'zh'

  // Default: 30 days from now
  const defaultDate = (() => {
    const d = new Date()
    d.setDate(d.getDate() + 30)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })()

  const [targetDate, setTargetDate] = useState(defaultDate)
  const [targetTime, setTargetTime] = useState('12:00') // noon default
  const [mode, setMode] = useState<'days' | 'live'>('live') // default = live to match GKP
  const [isRunning, setIsRunning] = useState(false)
  const [now, setNow] = useState<number | null>(null) // ms timestamp

  // Live tick — updates every 1s when running
  useEffect(() => {
    if (!isRunning || mode !== 'live') return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [isRunning, mode])

  // Auto-start on mount for live mode (better UX, matches search intent)
  useEffect(() => {
    if (mode === 'live' && now === null) {
      setNow(Date.now())
      setIsRunning(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const u = (key: string) => t[lang][key as keyof typeof t.zh] as string

  const target = (() => {
    if (!targetDate) return null
    // Combine date + time in user's local timezone
    return new Date(`${targetDate}T${targetTime || '12:00'}:00`)
  })()
  const todayStr = (() => {
    const d = new Date()
    return formatDate(d, lang)
  })()

  // Days calculation (no live timer)
  const daysResult = (() => {
    if (mode !== 'days' || !target) return null
    const t0 = new Date(target.getTime())
    t0.setHours(0, 0, 0, 0)
    const t1 = new Date()
    t1.setHours(0, 0, 0, 0)
    const diff = t0.getTime() - t1.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return { days: Math.abs(days), future: days >= 0 }
  })()

  // Live calculation (hh:mm:ss)
  const liveResult = (() => {
    if (mode !== 'live' || !target || now === null) return null
    const msDiff = getMsDiff(target, new Date(now))
    const absMs = Math.abs(msDiff)
    const totalSec = Math.floor(absMs / 1000)
    const days = Math.floor(totalSec / 86400)
    const hours = Math.floor((totalSec % 86400) / 3600)
    const minutes = Math.floor((totalSec % 3600) / 60)
    const seconds = totalSec % 60
    return { days, hours, minutes, seconds, future: msDiff >= 0 }
  })()

  const calc = () => {
    setIsRunning(true)
    setNow(Date.now())
  }

  const stop = () => setIsRunning(false)

  const reset = () => {
    setIsRunning(false)
    setNow(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/?lang=${lang}`} className="text-xl font-bold text-orange-500">
            {u('siteTitle')}
          </Link>
          <Link
            href={`${pathname}?lang=${nextLang}`}
            className="text-sm px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {seoBody && <div className="mb-6">{seoBody}</div>}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{u('title')}</h1>
        <p className="text-gray-500 text-sm mb-6">{u('description')}</p>

        {/* Mode toggle */}
        <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100 mb-4 flex gap-2">
          <button
            onClick={() => { setMode('live'); calc() }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'live' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
          >
            {u('modeLive')}
          </button>
          <button
            onClick={() => { setMode('days'); reset() }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'days' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
          >
            {u('modeDays')}
          </button>
        </div>

        {/* Date + time picker */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">{u('targetDate')}</label>
            <div className="flex gap-2">
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
              />
              {mode === 'live' && (
                <input
                  type="time"
                  value={targetTime}
                  onChange={(e) => setTargetTime(e.target.value)}
                  className="w-32 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
                />
              )}
            </div>
          </div>
          {mode === 'live' ? (
            <div className="flex gap-2">
              <button
                onClick={isRunning ? stop : calc}
                className={`flex-1 ${isRunning ? 'bg-gray-400 hover:bg-gray-500' : 'bg-orange-500 hover:bg-orange-600'} text-white font-semibold py-3 rounded-lg transition-colors`}
              >
                {isRunning ? u('stop') : u('start')}
              </button>
              <button
                onClick={reset}
                className="px-6 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50"
              >
                {u('reset')}
              </button>
            </div>
          ) : (
            <button
              onClick={calc}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {u('start')}
            </button>
          )}
        </div>

        {/* Result panel */}
        {mode === 'days' && daysResult && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
            <div className="text-sm text-gray-500 mb-1">{u('today')}: {todayStr}</div>
            <div className="text-sm text-gray-500 mb-1">{u('targetDate')}: {targetDate}</div>
            <div className="text-7xl font-bold text-orange-500 my-4">{daysResult.days}</div>
            <div className="text-lg font-semibold text-gray-600">
              {daysResult.future ? u('daysLeft') : u('daysPassed')} {u('days')}
            </div>
          </div>
        )}

        {mode === 'live' && liveResult && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
            <div className="text-sm text-gray-500 mb-1">
              {u('today')} {todayStr} · {u('targetDate')} {targetDate} {targetTime}
            </div>
            <div className={`text-2xl font-medium my-3 ${liveResult.future ? 'text-orange-500' : 'text-red-500'}`}>
              {liveResult.future ? u('targetFuture') : u('targetPassed')}
            </div>
            <div className="grid grid-cols-4 gap-3 my-5">
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{liveResult.days}</div>
                <div className="text-xs text-gray-500 mt-1">{u('days')}</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{pad(liveResult.hours)}</div>
                <div className="text-xs text-gray-500 mt-1">{u('hours')}</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{pad(liveResult.minutes)}</div>
                <div className="text-xs text-gray-500 mt-1">{u('minutes')}</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{pad(liveResult.seconds)}</div>
                <div className="text-xs text-gray-500 mt-1">{u('seconds')}</div>
              </div>
            </div>
            {isRunning && <div className="text-xs text-green-600">● live</div>}
          </div>
        )}

        <RelatedTools
          lang={lang}
          paths={['/lunar-calendar', '/discount-calculator', '/bmi-calculator', '/unit-converter']}
        />

        <div className="flex gap-3 flex-wrap">
          <Link
            href={`/bmi-calculator?lang=${lang}`}
            className="text-sm px-4 py-2 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200"
          >
            BMI计算器
          </Link>
          <Link
            href={`/discount-calculator?lang=${lang}`}
            className="text-sm px-4 py-2 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200"
          >
            折扣计算器
          </Link>
          <Link
            href={`/?lang=${lang}`}
            className="text-sm px-4 py-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200"
          >
            {u('moreCalc')}
          </Link>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

export default function Countdown({ initialLang, seoBody }: { initialLang?: 'zh' | 'en'; seoBody?: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <CountdownContent initialLang={initialLang} seoBody={seoBody} />
    </Suspense>
  )
}
