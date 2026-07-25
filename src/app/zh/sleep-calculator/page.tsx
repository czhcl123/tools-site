import type { Metadata } from 'next'
import SleepCalculatorZhClient from './sleep-calculator-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  // For zh route, lang is implicit 'zh'
  const titles = {
    zh: '睡眠计算器 - 500K 月搜主词 | 90 分钟周期反推入睡/起床时间',
    en: 'Sleep Calculator & Estimator - 90-Minute Cycle, Bedtime / Wake Time (500K/mo)',
  }
  const descriptions = {
    zh: '免费在线睡眠计算器与睡眠周期计算器:输入起床时间反推最佳入睡时间(90 分钟周期),或输入入睡时间反推最佳起床时间。覆盖 500K+ 月搜主词,cpc $32。支持深度睡眠 / REM 周期说明。无需注册,所有计算在浏览器本地完成。',
    en: 'Free online sleep calculator & sleep estimator (500,000 monthly searches, cpc \$32) — also a sleep cycle calculator and sleep pattern calculator. Enter your wake-up time to get the best bedtime, or enter when you fall asleep to find the optimal wake time, based on the 90-minute sleep cycle including light sleep, deep sleep, and REM. No signup, browser-only, 100% private.',
  }

  return {
    title: titles.zh,
    description: descriptions.zh,
    openGraph: {
      title: titles.zh,
      description: descriptions.zh,
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/sleep-calculator',
      languages: {
        'en-US': '/sleep-calculator',
        'zh-CN': '/zh/sleep-calculator',
        'x-default': '/sleep-calculator',
      },
    },
  }
}

export default async function SleepCalculatorZhPage() {
  return <SleepCalculatorZhClient />
}