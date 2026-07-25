'use client'

import { Suspense, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import Footer from '../../components/Footer'
import RelatedTools from '../../components/RelatedTools'

const t = {
  zh: {
    siteTitle: '实用计算器',
    title: '睡眠计算器 — 90 分钟睡眠周期',
    description: '输入起床时间反推最佳入睡时间,或输入入睡时间反推最佳起床时间。',
    subtitle: '高考、跨时区出差、倒班、婴儿作息 — 500K+ 人月用',
    modeBedtime: '我要 X 点起',
    modeWake: '我 X 点睡',
    labelTime: '时间',
    labelCycles: '周期数',
    cyclesHint: '成人推荐 5-6 个周期',
    sleepNow: '我现在就睡',
    bedtimeResults: '最佳入睡时间',
    wakeResults: '最佳起床时间',
    cycles6: '6 周期 (9 小时)',
    cycles5: '5 周期 (7.5 小时)',
    cycles4: '4 周期 (6 小时)',
    hours: '小时',
    minutes: '分钟',
    cycleNote: '每个周期约 90 分钟,加 15 分钟入睡缓冲',
    goToBed: '该睡了',
    wakeUp: '该起',
    sleepQuality: '推荐 5-6 个周期获得最佳睡眠质量',
    moreCalc: '更多计算器',
    home: '← 返回首页',
    ageLabel: '年龄',
    ageAdult: '成人 (7-9h)',
    ageTeen: '青少年 (8-10h)',
    ageChild: '儿童 (9-11h)',
    ageYoungChild: '学龄前 (10-13h)',
  },
  en: {
    siteTitle: 'Practical Tools',
    title: 'Sleep Calculator - 90-Minute Sleep Cycle',
    description: 'Enter your wake time to find the best bedtime, or enter your bedtime to find the best wake times.',
    subtitle: 'Exams, jet lag, shift work, baby schedules — 500K+ monthly users',
    modeBedtime: 'I need to wake up at',
    modeWake: "I'm going to bed at",
    labelTime: 'Time',
    labelCycles: 'Cycles',
    cyclesHint: 'Adults: 5-6 cycles',
    sleepNow: 'Sleep now',
    bedtimeResults: 'Best Bedtime',
    wakeResults: 'Best Wake Times',
    cycles6: '6 cycles (9 hours)',
    cycles5: '5 cycles (7.5 hours)',
    cycles4: '4 cycles (6 hours)',
    hours: 'hours',
    minutes: 'minutes',
    cycleNote: 'Each cycle is ~90 minutes, plus 15 minutes to fall asleep',
    goToBed: 'Go to bed at',
    wakeUp: 'Wake up at',
    sleepQuality: '5-6 cycles recommended for best sleep quality',
    moreCalc: 'More Calculators',
    home: '← Back to Home',
    ageLabel: 'Age',
    ageAdult: 'Adult (7-9h)',
    ageTeen: 'Teen (8-10h)',
    ageChild: 'School-age (9-11h)',
    ageYoungChild: 'Preschool (10-13h)',
  },
}

type Lang = 'zh' | 'en'
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
  const searchParams = useSearchParams()
  const lang = (searchParams.get('lang') === 'zh' ? 'zh' : 'en') as Lang
  const pathname = usePathname()
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