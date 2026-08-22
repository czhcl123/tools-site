'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function BmiCalculatorContent({ lang: initialLang }: { lang?: 'zh' | 'en' }) {
  const searchParams = useSearchParams()
  const lang = (searchParams.get('lang') === 'zh' ? 'zh' : 'en') as 'zh' | 'en'
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)

  const u = (key: string) => {
    const map: Record<string, string> = {
      height: lang === 'zh' ? '身高 (cm)' : 'Height (cm)',
      weight: lang === 'zh' ? '体重 (kg)' : 'Weight (kg)',
      calc: lang === 'zh' ? '计算 BMI' : 'Calculate BMI',
      result: lang === 'zh' ? '您的 BMI' : 'Your BMI',
      category: lang === 'zh' ? '体重状态' : 'Weight Status',
      range: lang === 'zh' ? 'BMI 范围参考' : 'BMI Reference',
      underweightRange: lang === 'zh' ? '偏瘦：< 18.5' : 'Underweight: < 18.5',
      normalRange: lang === 'zh' ? '正常：18.5 - 23.9' : 'Normal: 18.5 - 23.9',
      overweightRange: lang === 'zh' ? '偏胖：24.0 - 27.9' : 'Overweight: 24.0 - 27.9',
      obeseRange: lang === 'zh' ? '肥胖：≥ 28.0' : 'Obese: ≥ 28.0',
    }
    return map[key] || key
  }

  function getCategory(bmi: number, lang: string): string {
    if (bmi < 18.5) return lang === 'zh' ? '偏瘦' : 'Underweight'
    if (bmi < 24) return lang === 'zh' ? '正常' : 'Normal'
    if (bmi < 28) return lang === 'zh' ? '偏胖' : 'Overweight'
    return lang === 'zh' ? '肥胖' : 'Obese'
  }

  function getCategoryColor(category: string, lang: string): string {
    if (category === (lang === 'zh' ? '偏瘦' : 'Underweight')) return 'text-blue-500'
    if (category === (lang === 'zh' ? '正常' : 'Normal')) return 'text-green-500'
    if (category === (lang === 'zh' ? '偏胖' : 'Overweight')) return 'text-orange-500'
    return 'text-red-500'
  }

  function calc() {
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return
    const bmiVal = w / Math.pow(h / 100, 2)
    setBmi(Math.round(bmiVal * 10) / 10)
  }

  const category = bmi !== null ? getCategory(bmi, lang) : ''

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">{u('height')}</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="170"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">{u('weight')}</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="65"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
        />
      </div>
      <button
        onClick={calc}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {u('calc')}
      </button>

      {bmi !== null && (
        <div className="mt-6 text-center">
          <div className="text-sm text-gray-500 mb-1">{u('result')}</div>
          <div className="text-5xl font-bold text-orange-500 mb-2">{bmi}</div>
          <div className={`text-lg font-semibold ${getCategoryColor(category, lang)}`}>
            {category}
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-600 mb-2">{u('range')}</h3>
        <div className="space-y-1 text-sm">
          <div className="text-blue-500">{u('underweightRange')}</div>
          <div className="text-green-500">{u('normalRange')}</div>
          <div className="text-orange-500">{u('overweightRange')}</div>
          <div className="text-red-500">{u('obeseRange')}</div>
        </div>
      </div>
    </div>
  )
}

export default function BmiCalculator({ lang }: { lang?: 'zh' | 'en' }) {
  return (
    <Suspense fallback={<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">Loading...</div>}>
      <BmiCalculatorContent lang={lang} />
    </Suspense>
  )
}
