'use client'

import { Suspense, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import RelatedTools from '@/components/RelatedTools'

// Chinese version of the sleep calculator UI - uses same i18n strings as en but renders directly in zh mode
import { t } from '../../sleep-calculator/sleep-calculator-i18n'
import type { Lang } from '../../sleep-calculator/sleep-calculator-i18n'

const FALL_ASLEEP_MIN = 15
const CYCLE_MIN = 90

function formatTime(hours: number, minutes: number) {
  const h = ((hours % 24) + 24) % 24
  const m = ((minutes % 60) + 60) % 60
  const period = h < 12 ? '上午' : '下午'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${period} ${h12}:${String(m).padStart(2, '0')}`
}

function ZhSleepCalculatorContent({ seoBody }: { seoBody?: React.ReactNode }) {
  const lang: Lang = 'zh' // Force zh on this route
  const nextLang: Lang = 'en'

  const defaultDate = (() => {
    const d = new Date()
    d.setDate(d.getDate() + 30)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })()

  const [targetDate, setTargetDate] = useState(defaultDate)
  const [targetTime, setTargetTime] = useState('07:00')

  const u = (key: string) => t[lang][key as keyof typeof t.zh] as string

  const [hStr, mStr] = targetTime.split(':')
  const inputHours = parseInt(hStr, 10) || 0
  const inputMinutes = parseInt(mStr, 10) || 0

  const results = useMemo(() => {
    const out: Array<{ cycles: number; total: string; label: string }> = []
    const cycleOptions = [6, 5, 4]
    for (const c of cycleOptions) {
      const min = c * CYCLE_MIN + FALL_ASLEEP_MIN
      let resultHours: number, resultMinutes: number
      let label: string
      // zh route uses bedtime mode (input is wake time, output is bedtime)
      resultHours = inputHours - Math.floor(min / 60)
      resultMinutes = inputMinutes - (min % 60)
      if (resultMinutes < 0) {
        resultMinutes += 60
        resultHours -= 1
      }
      label = u('goToBed')
      const hrs = Math.floor(min / 60)
      const mns = min % 60
      const total = mns === 0 ? `${hrs} ${u('hours')}` : `${hrs} ${u('hours')} ${mns} ${u('minutes')}`
      out.push({
        cycles: c,
        total,
        label: `${label} ${formatTime(resultHours, resultMinutes)}`,
      })
    }
    return out
  }, [inputHours, inputMinutes, lang])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/zh" className="text-xl font-bold text-orange-500">
            {u('siteTitle')}
          </Link>
          <Link
            href={`/sleep-calculator`}
            className="text-sm px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50"
          >
            EN
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {seoBody && <div className="mb-6">{seoBody}</div>}

        <h1 className="text-2xl font-bold text-gray-800 mb-2">{u('title')}</h1>
        <p className="text-gray-500 text-sm mb-1">{u('description')}</p>
        <p className="text-orange-600 text-xs font-medium mb-6">{u('subtitle')}</p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">{u('labelTime')}</label>
            <input
              type="time"
              value={targetTime}
              onChange={(e) => setTargetTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none"
            />
          </div>
          <p className="text-xs text-gray-400">{u('cycleNote')}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            {u('bedtimeResults')}
          </h2>
          {results.map((r) => (
            <div
              key={r.cycles}
              className={`bg-white rounded-xl p-5 shadow-sm border-2 ${
                r.cycles === 5 ? 'border-orange-400 ring-2 ring-orange-100' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {r.cycles} 周期 ({r.total})
                </span>
                {r.cycles === 5 && (
                  <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">★</span>
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

export default function ZhSleepCalculatorClient({ seoBody }: { seoBody?: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ZhSleepCalculatorContent seoBody={seoBody} />
    </Suspense>
  )
}