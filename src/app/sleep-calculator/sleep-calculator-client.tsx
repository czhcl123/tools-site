'use client'

import { Suspense, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from '../../components/Footer'
import RelatedTools from '../../components/RelatedTools'
import { t } from './sleep-calculator-i18n'
import type { Lang } from './sleep-calculator-i18n'

type AgeGroup = 'adult' | 'teen' | 'child' | 'youngChild'

const FALL_ASLEEP_MIN = 15
const CYCLE_MIN = 90

function formatTime(hours: number, minutes: number, lang: Lang) {
  const h = ((hours % 24) + 24) % 24
  const m = ((minutes % 60) + 60) % 60
  if (lang === 'zh') {
    const period = h < 12 ? '上午' : '下午'
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
    return `${period} ${h12}:${String(m).padStart(2, '0')}`
  }
  const period = h < 12 ? 'AM' : 'PM'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${String(m).padStart(2, '0')} ${period}`
}

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function SleepCalculatorContent({ initialLang, seoBody }: { initialLang?: Lang; seoBody?: React.ReactNode }) {
  const pathname = usePathname()
  const isZhPath = pathname?.startsWith('/zh') || false
  const lang: Lang = initialLang ?? (isZhPath ? 'zh' : (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en'))
  const nextLang: Lang = lang === 'zh' ? 'en' : 'zh'

  const [mode, setMode] = useState<'bedtime' | 'wake'>('bedtime')
  // Default: 7:00 AM wake
  const [time, setTime] = useState('07:00')
  const [cycles, setCycles] = useState(6)
  const [age, setAge] = useState<AgeGroup>('adult')

  const u = (key: string) => t[lang][key as keyof typeof t.zh] as string

  // Parse HH:MM
  const [hStr, mStr] = time.split(':')
  const inputHours = parseInt(hStr, 10) || 0
  const inputMinutes = parseInt(mStr, 10) || 0

  // 90-minute cycle math
  const totalMin = cycles * CYCLE_MIN + FALL_ASLEEP_MIN

  const results = useMemo(() => {
    const out: Array<{ cycles: number; total: string; label: string }> = []
    // For both modes, offer 6/5/4 cycle options
    const cycleOptions = [6, 5, 4]
    for (const c of cycleOptions) {
      const min = c * CYCLE_MIN + FALL_ASLEEP_MIN
      let resultHours: number, resultMinutes: number
      let label: string
      if (mode === 'bedtime') {
        // Subtract from wake time
        resultHours = inputHours - Math.floor(min / 60)
        resultMinutes = inputMinutes - (min % 60)
        if (resultMinutes < 0) {
          resultMinutes += 60
          resultHours -= 1
        }
        label = u('goToBed')
      } else {
        // Add to bedtime
        resultHours = inputHours + Math.floor(min / 60)
        resultMinutes = inputMinutes + (min % 60)
        if (resultMinutes >= 60) {
          resultMinutes -= 60
          resultHours += 1
        }
        label = u('wakeUp')
      }
      const hrs = Math.floor(min / 60)
      const mns = min % 60
      const total = mns === 0 ? `${hrs} ${u('hours')}` : `${hrs} ${u('hours')} ${mns} ${u('minutes')}`
      out.push({
        cycles: c,
        total,
        label: `${label} ${formatTime(resultHours, resultMinutes, lang)}`,
      })
    }
    return out
  }, [mode, inputHours, inputMinutes, lang, u])

  // Age-based recommendation
  const recommendedCycles = (() => {
    switch (age) {
      case 'adult': return 5
      case 'teen': return 5
      case 'child': return 6
      case 'youngChild': return 7
    }
  })()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-orange-500">
            {u('siteTitle')}
          </Link>
          <Link
            href={pathname.startsWith('/zh') ? pathname.replace('/zh', '') || '/' : `/zh${pathname}`}
            className="text-sm px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-gray-500 text-sm mb-1">{u('description')}</p>
        <p className="text-orange-600 text-xs font-medium mb-6">{u('subtitle')}</p>

        {/* Mode toggle */}
        <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100 mb-4 flex gap-2">
          <button
            onClick={() => setMode('bedtime')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'bedtime' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
          >
            {u('modeBedtime')}
          </button>
          <button
            onClick={() => setMode('wake')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'wake' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
          >
            {u('modeWake')}
          </button>
        </div>

        {/* Inputs */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">{u('labelTime')}</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">{u('ageLabel')}</label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value as AgeGroup)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none"
            >
              <option value="adult">{u('ageAdult')}</option>
              <option value="teen">{u('ageTeen')}</option>
              <option value="child">{u('ageChild')}</option>
              <option value="youngChild">{u('ageYoungChild')}</option>
            </select>
          </div>

          <p className="text-xs text-gray-400">{u('cycleNote')}</p>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            {mode === 'bedtime' ? u('bedtimeResults') : u('wakeResults')}
          </h2>
          {results.map((r, idx) => (
            <div
              key={r.cycles}
              className={`bg-white rounded-xl p-5 shadow-sm border-2 transition-all ${
                r.cycles === recommendedCycles
                  ? 'border-orange-400 ring-2 ring-orange-100'
                  : 'border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {r.cycles} {u('hours') === 'hours' ? 'cycles' : '周期'} ({r.total})
                </span>
                {r.cycles === recommendedCycles && (
                  <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                    ★
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-orange-600">{r.label}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">{u('sleepQuality')}</p>

        <RelatedTools
          lang={lang}
          paths={['/countdown', '/bmi-calculator', '/discount-calculator', '/lunar-calendar']}
        />
      </main>

      <Footer lang={lang} />
    </div>
  )
}

export default function SleepCalculator({ initialLang, seoBody }: { initialLang?: Lang; seoBody?: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <SleepCalculatorContent initialLang={initialLang} seoBody={seoBody} />
    </Suspense>
  )
}