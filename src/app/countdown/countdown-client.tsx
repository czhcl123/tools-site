'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const t = {
  zh: {
    description: '在线倒计时计算器：距任意日期还有多少天，支持实时跳秒、工作日计算、两个日期之间的间隔。',
    modeUntil: '倒计时到某天',
    modeBetween: '两个日期之间',
    fromDate: '起始日期',
    toDate: '目标日期',
    timeLabel: '时间',
    eventName: '事件名称（可选）',
    eventPlaceholder: '圣诞节 / 婚礼 / 项目上线',
    businessMode: '只算工作日（排除周末与美国联邦假日）',
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
    weeks: '周',
    months: '个月',
    businessDays: '工作日',
    totalHours: '合计小时',
    totalMinutes: '合计分钟',
    totalSeconds: '合计秒',
    span: '间隔',
    targetPassed: '目标已过',
    targetFuture: '目标未到',
    copyLink: '复制分享链接',
    copied: '已复制',
    onlyWorkdays: '仅工作日',
    noteExclusive: '不含起始日、含目标日',
    inclusive: '含首尾两天',
    calendarDays: '日历天数(不含起始日)',
  },
  en: {
    description: 'Days until any date, with a live second-by-second countdown, business-day mode, and the gap between two dates.',
    modeUntil: 'Countdown to a date',
    modeBetween: 'Between two dates',
    fromDate: 'From date',
    toDate: 'To date',
    timeLabel: 'Time',
    eventName: 'Event name (optional)',
    eventPlaceholder: 'Christmas / Wedding / Launch',
    businessMode: 'Business days only (exclude weekends & US federal holidays)',
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
    weeks: 'weeks',
    months: 'months',
    businessDays: 'business days',
    totalHours: 'total hours',
    totalMinutes: 'total minutes',
    totalSeconds: 'total seconds',
    span: 'span',
    targetPassed: 'Target passed',
    targetFuture: 'Target upcoming',
    copyLink: 'Copy share link',
    copied: 'Copied',
    onlyWorkdays: 'Weekdays only',
    noteExclusive: 'Start date excluded, end date included',
    inclusive: 'Including both start and end days',
    calendarDays: 'Calendar days (start day excluded)',
  },
}

const MS_DAY = 86400000

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function toISODate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function parseISODate(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '')
  if (!m) return null
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  return Number.isNaN(d.getTime()) ? null : d
}

function startOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function diffDays(a: Date, b: Date) {
  return Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / MS_DAY)
}

function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number) {
  // n = 1..5 ; weekday 0=Sun..6=Sat
  const first = new Date(year, month, 1)
  const shift = (weekday - first.getDay() + 7) % 7
  const day = 1 + shift + (n - 1) * 7
  return new Date(year, month, day)
}

function lastWeekdayOfMonth(year: number, month: number, weekday: number) {
  const last = new Date(year, month + 1, 0)
  const shift = (last.getDay() - weekday + 7) % 7
  return new Date(year, month, last.getDate() - shift)
}

// US federal holidays, with the standard weekend-observance shift.
function observedHoliday(d: Date) {
  const day = d.getDay()
  if (day === 6) return new Date(d.getTime() - MS_DAY)
  if (day === 0) return new Date(d.getTime() + MS_DAY)
  return d
}

const holidayCache = new Map<number, Set<string>>()
function usFederalHolidays(year: number): Set<string> {
  if (holidayCache.has(year)) return holidayCache.get(year)!
  const list = [
    observedHoliday(new Date(year, 0, 1)),
    nthWeekdayOfMonth(year, 0, 1, 3),   // MLK
    nthWeekdayOfMonth(year, 1, 1, 3),   // Presidents
    lastWeekdayOfMonth(year, 4, 1),     // Memorial
    observedHoliday(new Date(year, 5, 19)), // Juneteenth
    observedHoliday(new Date(year, 6, 4)),  // Independence
    nthWeekdayOfMonth(year, 8, 1, 1),   // Labor
    nthWeekdayOfMonth(year, 9, 1, 2),   // Columbus
    observedHoliday(new Date(year, 10, 11)), // Veterans
    nthWeekdayOfMonth(year, 10, 4, 4),  // Thanksgiving
    observedHoliday(new Date(year, 11, 25)), // Christmas
  ]
  const set = new Set(list.map(toISODate))
  holidayCache.set(year, set)
  return set
}

function isBusinessDay(d: Date) {
  const wd = d.getDay()
  if (wd === 0 || wd === 6) return false
  return !usFederalHolidays(d.getFullYear()).has(toISODate(d))
}

// Start date excluded, end date included.
function businessDaysBetween(a: Date, b: Date) {
  const sign = b >= a ? 1 : -1
  const from = sign > 0 ? startOfDay(a) : startOfDay(b)
  const to = sign > 0 ? startOfDay(b) : startOfDay(a)
  const total = Math.round((to.getTime() - from.getTime()) / MS_DAY)
  if (total > 4000) return 0
  let count = 0
  for (let i = 1; i <= total; i++) {
    if (isBusinessDay(new Date(from.getTime() + i * MS_DAY))) count++
  }
  return count * sign
}

function monthsAndDays(a: Date, b: Date) {
  const from = startOfDay(a)
  const to = startOfDay(b)
  const sign = to >= from ? 1 : -1
  const start = sign > 0 ? from : to
  const end = sign > 0 ? to : from
  const anchorFor = (m: number) => new Date(start.getFullYear(), start.getMonth() + m, start.getDate())
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  let anchor = anchorFor(months)
  if (anchor > end) {
    months--
    anchor = anchorFor(months)
  }
  if (anchor > end) {
    // Day-of-month overflow (e.g. Jan 31 + 1 month lands in March) — step back once more.
    months--
    anchor = anchorFor(months)
  }
  const days = Math.round((end.getTime() - anchor.getTime()) / MS_DAY)
  return { months: months * sign, days: days * sign }
}

type InitialState = { to?: string; from?: string; t?: string; name?: string; bd?: string; mode?: string }

function CountdownContent({ lang: initialLang, initial }: { lang?: 'zh' | 'en'; initial?: InitialState }) {
  const pathname = usePathname()
  const isZhPath = pathname?.startsWith('/zh')
  const lang = (initialLang ?? (isZhPath ? 'zh' : 'en')) as 'zh' | 'en'
  const u = useCallback((key: keyof typeof t.zh) => t[lang][key], [lang])

  const todayISO = toISODate(new Date())
  const defaultTarget = toISODate(new Date(Date.now() + 30 * MS_DAY))
  const seedDate = (v: string | undefined, fallback: string) => (v && parseISODate(v) ? v : fallback)

  const [mode, setMode] = useState<'until' | 'between'>(initial?.mode === 'between' ? 'between' : 'until')
  const [fromDate, setFromDate] = useState(() => seedDate(initial?.from, ''))
  const [toDate, setToDate] = useState(() => seedDate(initial?.to, ''))
  const [targetTime, setTargetTime] = useState(() =>
    initial?.t && /^\d{2}:\d{2}$/.test(initial.t) ? initial.t : '12:00'
  )
  const [eventName, setEventName] = useState(() => (initial?.name || '').slice(0, 48))
  const [businessOnly, setBusinessOnly] = useState(initial?.bd === '1')
  const [isRunning, setIsRunning] = useState(true)
  const [now, setNow] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  // Defaults depend on the visitor's own clock, so they are filled in after mount.
  // Rendering them on the server would produce a hydration mismatch for anyone
  // whose local date differs from the server's UTC date.
  useEffect(() => {
    if (!toDate) setToDate(defaultTarget)
    if (!fromDate) setFromDate(todayISO)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mode !== 'until' || !isRunning) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [mode, isRunning])

  useEffect(() => {
    if (mode === 'until' && now === null) setNow(Date.now())
  }, [mode, now])

  const target = useMemo(() => {
    const d = parseISODate(toDate)
    if (!d) return null
    const [h, m] = (targetTime || '12:00').split(':').map(Number)
    d.setHours(h || 0, m || 0, 0, 0)
    return d
  }, [toDate, targetTime])

  const from = useMemo(() => parseISODate(fromDate), [fromDate])

  const result = useMemo(() => {
    if (mode === 'between') {
      if (!from || !target) return null
      const days = diffDays(from, parseISODate(toDate) || target)
      return {
        days,
        business: businessOnly ? businessDaysBetween(from, parseISODate(toDate) || target) : null,
        months: monthsAndDays(from, parseISODate(toDate) || target),
        past: days < 0,
      }
    }
    if (!target) return null
    if (now === null) return null
    const base = new Date(now)
    const msLeft = target.getTime() - base.getTime()
    const abs = Math.abs(msLeft)
    const totalSec = Math.floor(abs / 1000)
    const days = Math.floor(totalSec / 86400)
    return {
      days,
      hours: Math.floor((totalSec % 86400) / 3600),
      minutes: Math.floor((totalSec % 3600) / 60),
      seconds: totalSec % 60,
      business: businessOnly ? businessDaysBetween(startOfDay(base), startOfDay(target)) : null,
      months: monthsAndDays(startOfDay(base), startOfDay(target)),
      future: msLeft >= 0,
      exactDays: diffDays(startOfDay(base), startOfDay(target)),
    }
  }, [mode, from, target, toDate, now, businessOnly])

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    const p = new URLSearchParams()
    p.set('to', toDate)
    if (mode === 'between') {
      p.set('mode', 'between')
      p.set('from', fromDate)
    } else if (targetTime) {
      p.set('t', targetTime)
    }
    if (eventName.trim()) p.set('name', eventName.trim())
    if (businessOnly) p.set('bd', '1')
    return `${window.location.origin}${pathname}?${p.toString()}`
  }, [toDate, fromDate, targetTime, eventName, businessOnly, mode, pathname])

  const copyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const label = eventName.trim()

  return (
    <>
      <p className="text-gray-500 text-sm mb-6">{u('description')}</p>

      {/* Mode toggle */}
      <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100 mb-4 flex gap-2">
        <button
          onClick={() => setMode('until')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'until' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
        >
          {u('modeUntil')}
        </button>
        <button
          onClick={() => setMode('between')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'between' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
        >
          {u('modeBetween')}
        </button>
      </div>

      {/* Inputs */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 space-y-4">
        {mode === 'between' && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">{u('fromDate')}</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">{u('toDate')}</label>
          <div className="flex gap-2">
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
            />
            {mode === 'until' && (
              <input
                type="time"
                value={targetTime}
                onChange={(e) => setTargetTime(e.target.value)}
                aria-label={u('timeLabel')}
                className="w-32 px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
              />
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">{u('eventName')}</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder={u('eventPlaceholder')}
            maxLength={48}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={businessOnly}
            onChange={(e) => setBusinessOnly(e.target.checked)}
            className="mt-1 h-4 w-4 accent-orange-500"
          />
          <span>
            {u('businessMode')}
            <span className="block text-xs text-gray-400">{u('noteExclusive')}</span>
          </span>
        </label>

        {mode === 'until' && (
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => {
                setIsRunning(!isRunning)
                setNow(Date.now())
              }}
              className={`flex-1 ${isRunning ? 'bg-gray-400 hover:bg-gray-500' : 'bg-orange-500 hover:bg-orange-600'} text-white font-semibold py-3 rounded-lg transition-colors`}
            >
              {isRunning ? u('stop') : u('start')}
            </button>
            <button
              onClick={() => {
                setNow(Date.now())
                setIsRunning(true)
              }}
              className="px-6 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50"
            >
              {u('reset')}
            </button>
          </div>
        )}
      </div>

      {/* Result */}
      {result && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4 text-center">
          {mode === 'until' ? (
            <>
              <div className="text-sm text-gray-500 mb-1">
                {u('today')} {todayISO} ·{' '}
                {label ? `${label} · ` : ''}
                {toDate} {targetTime}
              </div>
              <div className={`text-2xl font-medium my-3 ${result.future ? 'text-orange-500' : 'text-red-500'}`}>
                {result.future ? u('targetFuture') : u('targetPassed')}
              </div>
              {businessOnly ? (
                <>
                  <div className="text-6xl md:text-7xl font-bold text-orange-500 my-3 tabular-nums">{Math.abs(result.business ?? 0)}</div>
                  <div className="text-lg font-semibold text-gray-600">{u('businessDays')}</div>
                  <div className="text-sm text-gray-400 mt-2">
                    {u('calendarDays')}: {Math.abs(result.exactDays)}
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-4 gap-3 my-5">
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{result.days}</div>
                      <div className="text-xs text-gray-500 mt-1">{u('days')}</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{pad(result.hours ?? 0)}</div>
                      <div className="text-xs text-gray-500 mt-1">{u('hours')}</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{pad(result.minutes ?? 0)}</div>
                      <div className="text-xs text-gray-500 mt-1">{u('minutes')}</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 tabular-nums">{pad(result.seconds ?? 0)}</div>
                      <div className="text-xs text-gray-500 mt-1">{u('seconds')}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {u('months')}: {Math.abs(result.months.months)} · {u('weeks')}: {Math.floor(Math.abs(result.days) / 7)} · {u('days')}: {Math.abs(result.days) % 7}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {u('calendarDays')}: {Math.abs(result.exactDays)}
                  </div>
                </>
              )}
              {isRunning && mode === 'until' && <div className="text-xs text-green-600 mt-3">● live</div>}
            </>
          ) : (
            <>
              <div className="text-sm text-gray-500 mb-1">
                {fromDate} → {toDate}{label ? ` · ${label}` : ''}
              </div>
              <div className="text-6xl md:text-7xl font-bold text-orange-500 my-3 tabular-nums">{Math.abs(result.days)}</div>
              <div className="text-lg font-semibold text-gray-600">{u('days')}</div>
              <div className="text-xs text-gray-400 mt-1">{u('inclusive')}: {Math.abs(result.days) + 1}</div>
              <div className="grid grid-cols-3 gap-3 mt-5 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-700 tabular-nums">{Math.abs(result.months.months)}m {Math.abs(result.months.days)}d</div>
                  <div className="text-xs text-gray-500 mt-1">{u('months')}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-700 tabular-nums">{Math.floor(Math.abs(result.days) / 7)}w {Math.abs(result.days) % 7}d</div>
                  <div className="text-xs text-gray-500 mt-1">{u('weeks')}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-700 tabular-nums">{result.business === null ? '—' : Math.abs(result.business)}</div>
                  <div className="text-xs text-gray-500 mt-1">{u('businessDays')}</div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex items-center justify-between gap-3 mb-6 text-xs">
        <button onClick={copyShare} className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
          {copied ? `✓ ${u('copied')}` : `🔗 ${u('copyLink')}`}
        </button>
        {businessOnly && <span className="text-gray-400">{u('onlyWorkdays')}</span>}
      </div>
    </>
  )
}

export type { InitialState }

export default function Countdown(props: { lang?: 'zh' | 'en'; initial?: InitialState }) {
  return <CountdownContent {...props} />
}
