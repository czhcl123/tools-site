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
  const ogTitles = { zh: 'BMI 计算器 - 实用计算器', en: 'BMI Calculator - Practical Tools' }
  const ogDescs = {
    zh: '免费在线 BMI 计算器,男女不同标准,亚州人阈值。',
    en: 'Calculate BMI from height and weight. Free online tool.'
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/bmi-calculator' : '/bmi-calculator'}`,
      languages: {
        'zh-CN': '/zh/bmi-calculator',
        'en-US': '/bmi-calculator',
        'x-default': '/bmi-calculator',
      },
    },
  }
}

const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'BMI 是什么?怎么算?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI(Body Mass Index,身体质量指数)是国际上常用的衡量人体胖瘦程度的标准,计算公式:BMI = 体重(kg) ÷ 身高(m)²。例如 60 kg / (1.65m)² = 22.04,属于正常范围。本计算器输入身高 cm + 体重 kg,自动换算给出结果。',
      },
    },
    {
      '@type': 'Question',
      name: '亚洲人 BMI 标准和中国大陆标准分别是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '中国大陆 / WHO 亚洲标准:18.5 - 23.9 正常,24.0 - 27.9 偏胖,≥ 28 肥胖,低于 18.5 偏瘦。西方 WHO 标准:18.5 - 24.9 正常,25 - 29.9 超重,≥ 30 肥胖。同样的 BMI,亚洲人患高血压 / 糖尿病风险比白人高,这就是为什么本计算器使用亚洲阈值。',
      },
    },
    {
      '@type': 'Question',
      name: '男女 BMI 标准是否应该不同?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。WHO 在 2024 报告中指出女性体脂率天然比男性高 5-10%,相同 BMI 值的女性健康风险比男性低一些。但 BMI 标准本身不分性别 — 健康阈值是统一的。差别在于解读:女性 BMI 22 和男性 BMI 22,在健身 / 美学语境里评判标准不同。本计算器男女阈值共享,但状态色块按性别不同(女性 < 19 偏瘦界限略低)。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI 能完全反映健康状况吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI 是入门参考指标,但有局限:不区分肌肉和脂肪(健美运动员 BMI 28 仍健康),不反映内脏脂肪分布,儿童 / 孕妇 / 老人不能用成人 BMI。完整健康评估应结合腰围、体脂率、血糖、血脂、家族病史等。本工具适合日常粗筛,不替代体检。',
      },
    },
    {
      '@type': 'Question',
      name: '支持英制单位(英尺、磅)吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。输入英尺英寸 + 磅(例如 5\'7" + 145 lb),本计算器内部换算成 cm + kg 再算 BMI,结果一致。如果你输的是英寸数(比如只 67),也可以输入 67 英寸 = 170 cm 系统会自动判断。',
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
        text: 'BMI (Body Mass Index) is the international standard for weight classification. Formula: BMI = weight (kg) ÷ height (m)². Example: 60 kg ÷ (1.65 m)² = 22.04, in the normal range. This calculator accepts height in cm and weight in kg (also feet/inches and pounds) and gives an instant result with the matching weight category.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the WHO and Asian BMI thresholds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WHO global standard: 18.5 - 24.9 normal, 25.0 - 29.9 overweight, ≥ 30 obese. WHO Asian / mainland China standard: 18.5 - 23.9 normal, 24.0 - 27.9 overweight, ≥ 28 obese. At the same BMI, Asian populations face higher diabetes / hypertension risk, which is why this calculator defaults to Asian thresholds and shows both scales.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should men and women use different BMI standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WHO thresholds do not differ by gender, but interpretation does. Women naturally carry 5-10% more body fat than men at the same BMI. WHO stated in 2024 that the same BMI value reflects different health risk profiles for men vs women. This calculator uses a shared threshold table with a gender-tagged note so you interpret the number in context.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is BMI a complete measure of health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. BMI is a population-level screening tool with known limitations: it cannot tell muscle from fat (a bodybuilder with BMI 28 may be in excellent health), does not reflect visceral fat location, and does not apply to children, pregnant women, or the elderly without adjustment. Use it as a first-pass check, alongside waist circumference, body fat percentage, blood work, and family history.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use imperial units (feet, inches, pounds)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The calculator converts internally. Type your height as feet and inches (5 ft 7 in), and weight in pounds (e.g. 145 lb). The BMI value is identical to what you would get by converting to cm + kg first.',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>本工具一键计算 BMI（身体质量指数），支持亚洲/WHO 双标准，男女差异解读，输入身高体重即出结果。含英制单位支持，所有计算在浏览器本地完成。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>Calculate your Body Mass Index instantly with Asian and WHO thresholds. Enter height and weight in metric or imperial units — results show your BMI category with gender-aware interpretation. All processing stays in your browser.</p>
  </div>
)

export default async function BmiCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  const faqSchema = lang === 'zh' ? faqSchemaZh : faqSchemaEn

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: lang === 'zh' ? 'BMI 计算器 — 体重指数在线计算' : 'BMI Calculator - Body Mass Index Calculator',
    alternateName: lang === 'zh' ? 'BMI 计算' : 'Body Mass Index Calculator',
    url: `https://tools-site-production.up.railway.app${lang === 'zh' ? '/zh/bmi-calculator' : '/bmi-calculator'}`,
    applicationCategory: 'HealthApplication',
    applicationSubCategory: 'BMICalculator',
    operatingSystem: 'Any (web browser with JavaScript)',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    inLanguage: ['en-US', 'zh-CN'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      lang === 'zh'
        ? '在线 BMI 计算器:输入身高(cm/ft/in)+ 体重(kg/lb)立即得 BMI 值。男女不同标准,亚州人阈值。无需注册,数据本地处理。'
        : 'Online BMI calculator: enter height (cm or ft/in) and weight (kg or lb) to get your body mass index instantly. Healthy range chart for women, men, adults. Metric + imperial units. No signup, 100% browser-side processing.',
    featureList: [
      'Metric (cm/kg) + imperial (ft/in, lb) units',
      'Asian-specific BMI thresholds',
      'Gender + age range reference',
      'Healthy BMI range chart',
      'No signup, 100% browser-side',
    ],
    dateModified: '2026-07-18',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, webAppSchema]) }} />
      <h1 className="text-2xl font-bold text-gray-800 mb-1">BMI Calculator</h1>
      <div className="mb-6">{seoBodyEn}</div>
      <BmiCalculator initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
