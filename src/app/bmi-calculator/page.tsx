import type { Metadata } from 'next'
import BmiCalculator from './bmi-client'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const titles = {
    zh: 'BMI 计算器 - 免费在线体重指数计算',
    en: 'BMI Calculator - Free Online Body Mass Index Calculator',
  }
  const descriptions = {
    zh: '免费在线 BMI 计算器:输入身高体重即出体重指数,支持亚洲人阈值,男女分类判断,无需注册。',
    en: 'Free BMI calculator: enter height and weight to get your body mass index instantly. Asian/WHO thresholds, metric and imperial units, no signup.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/bmi-calculator' : '/bmi-calculator'}`,
      languages: {
        'zh-CN': '/zh/bmi-calculator',
        'en-US': '/bmi-calculator',
        'x-default': '/bmi-calculator',
      },
    },
      openGraph: { url: `${lang === 'zh' ? 'https://tools-site-production.up.railway.app/zh/bmi-calculator' : 'https://tools-site-production.up.railway.app/bmi-calculator'}` },
  }
}

const seoBodyZh = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>
      BMI（身体质量指数）是国际通用的体重评估标准。本计算器支持<strong>亚洲/WHO 双标准</strong>，输入身高体重即出结果。
    </p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">计算公式</h3>
    <p className="bg-gray-50 rounded-lg px-4 py-3 font-mono text-sm">BMI = 体重(kg) ÷ 身高(m)²</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">亚洲人标准</h3>
    <ul className="space-y-1 text-sm">
      <li>🟢 正常：18.5 – 23.9</li>
      <li>🟡 偏胖：24.0 – 27.9</li>
      <li>🔴 肥胖：≥ 28.0</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">数据仅供参考，不能替代医学诊断。</p>
  </div>
)

const seoBodyEn = (
  <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
    <p>
      BMI (Body Mass Index) is the international standard for weight classification. This calculator supports <strong>Asian and WHO thresholds</strong> with instant results.
    </p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">Formula</h3>
    <p className="bg-gray-50 rounded-lg px-4 py-3 font-mono text-sm">BMI = weight(kg) ÷ height(m)²</p>
    <h3 className="font-semibold text-gray-700 text-base mt-4">Asian Thresholds</h3>
    <ul className="space-y-1 text-sm">
      <li>🟢 Normal: 18.5 – 23.9</li>
      <li>🟡 Overweight: 24.0 – 27.9</li>
      <li>🔴 Obese: ≥ 28.0</li>
    </ul>
    <p className="text-xs text-gray-400 mt-4">For reference only. Not a substitute for medical advice.</p>
  </div>
)

const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'BMI 是什么?怎么算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI(Body Mass Index,身体质量指数)是国际上常用的衡量人体胖瘦程度的标准,计算公式:BMI = 体重(kg) ÷ 身高(m)²。',
      },
    },
    {
      '@type': 'Question',
      name: '亚洲人 BMI 标准是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '中国大陆/WHO 亚洲标准:18.5-23.9 正常,24.0-27.9 偏胖,≥28 肥胖,低于 18.5 偏瘦。',
      },
    },
  ],
}

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is BMI and how is it calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI (Body Mass Index) is the international standard for weight classification. Formula: BMI = weight (kg) ÷ height (m)².',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Asian BMI thresholds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WHO Asian standard: 18.5-23.9 normal, 24.0-27.9 overweight, ≥28 obese.',
      },
    },
  ],
}

export default async function BmiCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const descriptions = {
    zh: '免费在线 BMI 计算器:输入身高体重即出体重指数,支持亚洲人阈值,男女分类判断,无需注册。',
    en: 'Free BMI calculator: enter height and weight to get your body mass index instantly. Asian/WHO thresholds, metric and imperial units, no signup.',
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: lang === 'zh' ? 'BMI 计算器' : 'BMI Calculator',
    url: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/bmi-calculator' : '/bmi-calculator'}`,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: descriptions[lang],
  }

  const seoBody = lang === 'zh' ? seoBodyZh : seoBodyEn

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-orange-500">
              🧮 {lang === 'zh' ? '实用计算器' : 'Practical Tools'}
            </a>
            <a
              href={lang === 'zh' ? '/bmi-calculator?lang=en' : '/zh/bmi-calculator?lang=zh'}
              className="text-xs px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-50"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </a>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-800 mb-4">{lang === 'zh' ? 'BMI 计算器' : 'BMI Calculator'}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 左侧：SEO 说明 */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                {seoBody}
              </div>
            </aside>

            {/* 中间：计算器 */}
            <section className="lg:col-span-6">
              <BmiCalculator lang={lang} />
            </section>

            {/* 右侧：相关工具 */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-20">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">
                  {lang === 'zh' ? '更多工具' : 'More Tools'}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/discount-calculator" className="text-orange-500 hover:underline">🏷️ {lang === 'zh' ? '折扣计算器' : 'Discount Calculator'}</a></li>
                  <li><a href="/countdown" className="text-orange-500 hover:underline">📅 {lang === 'zh' ? '日期倒计时' : 'Date Countdown'}</a></li>
                  <li><a href="/unit-converter" className="text-orange-500 hover:underline">📐 {lang === 'zh' ? '单位换算' : 'Unit Converter'}</a></li>
                  <li><a href="/password-generator" className="text-orange-500 hover:underline">{lang === 'zh' ? '🔐 密码生成器' : '🔐 Password Generator'}</a></li>
                  <li><a href="/heic-to-jpg" className="text-orange-500 hover:underline">🖼️ {lang === 'zh' ? 'HEIC 转 JPG' : 'HEIC to JPG'}</a></li>
                  <li><a href="/json-formatter" className="text-orange-500 hover:underline">🔧 {lang === 'zh' ? 'JSON 格式化' : 'JSON Formatter'}</a></li>
                  <li><a href="/qr-code-generator" className="text-orange-500 hover:underline">📱 {lang === 'zh' ? 'QR 码生成' : 'QR Code Generator'}</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  )
}
