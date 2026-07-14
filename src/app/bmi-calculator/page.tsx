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
    zh: 'BMI 计算器 - 男女亚州人阈值,免费体重指数计算',
    en: 'BMI Calculator - Women, Men & Asian Ranges, Free',
  }
  const descriptions = {
    zh: '免费在线 BMI 计算器,男女不同标准,支持亚州人阈值(cm/kg)。含 BMI 范围表、男/女/老年独立判断,中英文双版,无需注册。',
    en: "Free BMI calculator for women, men, and Asian thresholds. Metric (cm/kg) and imperial (ft/lb) units. Healthy BMI range table, age adjustment, instant result. No signup.",
  }
  const ogTitles = { zh: 'BMI 计算器 - 实用计算器', en: 'BMI Calculator - Practical Tools' }
  const ogDescs = {
    zh: '免费在线 BMI 计算器,男女不同标准,亚州人阈值。',
    en: "Free online BMI calculator with women / men / Asian thresholds. Instant result.",
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
    <p>
      <strong>BMI 计算器</strong>一秒钟给出你的身体质量指数,并判断属于"偏瘦 / 正常 / 偏胖 / 肥胖"哪个区间。本工具采用<strong>亚洲人群阈值</strong>(WHO 推荐,中国大陆国家标准)而非欧美标准,因为同 BMI 下亚州人心血管疾病风险更高。本工具默认支持男女差异解读,所有计算在你的浏览器本地完成。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">怎么用本 BMI 计算器</h2>
    <p>输入身高(厘米)和体重(千克),点击<strong>计算 BMI</strong>。结果会显示数字 + 区间分类 + 颜色提示(蓝 / 绿 / 橙 / 红)。身高范围支持 100-250 cm,体重 20-200 kg,小数都接受。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">三种常见应用场景</h2>
    <p><strong>1. 健身效果对比</strong>。一个月减肥 5 斤,BMI 数字从 24.2 降到 22.5,直观看到从"偏胖"进入"正常"区间。本工具帮你跨月份对比。</p>
    <p><strong>2. 老人 / 儿童 BMI</strong>。18 岁以下用 BMI-for-age 百分位(本工具不覆盖),65 岁以上 BMI 阈值建议略高(22-27),因为略重对老人骨骼好。这两种人群建议咨询医生,不要单纯看 BMI。</p>
    <p><strong>3. 备孕 / 孕期</strong>。备孕最佳 BMI 区间是 18.5-23.9(亚洲)。孕期体重增长参考 WHO 标准,不建议只看 BMI 数字。本工具适合备孕期 BMI 基线测算。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">为什么不用医院的 BMI 秤?</h2>
    <p>本工具快速无门槛,适合日常跟踪。医院秤通常带体脂率 / 内脏脂肪 / 基础代谢,但需要专门去一次。日常自查用本工具 + 早起体重秤,3 个月一次医院体检,数据组合比单点更准。</p>
  </div>
)

const seoBodyEn = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      A <strong>BMI calculator</strong> tells you in 1 second where you sit on the Body Mass Index scale and labels your result as <strong>underweight, normal, overweight, or obese</strong>. This tool uses the Asian / mainland China thresholds (WHO recommended for Asian populations) rather than the Western standard, because the same BMI value carries a higher diabetes and hypertension risk in Asian bodies. The same number, however, is reported for everyone: this calculator is gender-aware in its interpretation note but uses one threshold table.
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">How to use this BMI calculator</h2>
    <p>Type your height in centimeters and your weight in kilograms, then click <strong>Calculate BMI</strong>. The result shows the BMI number plus a color-coded category: blue for underweight, green for normal, orange for overweight, red for obese. Supported range: 100-250 cm height, 20-200 kg weight, decimals allowed.</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">Three common scenarios</h2>
    <p><strong>1. Tracking fitness progress.</strong> Drop 5 lb over a month and watch your BMI move from 24.2 to 22.5, crossing the threshold from "overweight" to "normal". This tool is built for cross-month comparison, so re-run with the same inputs to see the trend.</p>
    <p><strong>2. Children and elderly BMI.</strong> For under-18s use BMI-for-age percentiles (not covered here). For over-65s the healthy range widens to 22-27 since a slightly higher BMI protects bone density. These two groups should not interpret adult BMI thresholds literally.</p>
    <p><strong>3. Pre-pregnancy planning.</strong> The optimal BMI for conception is 18.5-23.9 (Asian scale). This tool is useful for establishing a baseline before pregnancy; do not use it to track gestational weight gain, which follows different WHO curves.</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">Why not just use the BMI scale at the doctor's office?</h2>
    <p>Hospital-grade scales measure body fat percentage, visceral fat, and basal metabolic rate, which BMI misses. But you have to visit in person. For daily tracking, pair this calculator with a bathroom scale: 3 months of data beats one clinical snapshot. Combine both for the most accurate picture.</p>
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BmiCalculator initialLang={lang} seoBody={lang === 'zh' ? seoBodyZh : seoBodyEn} />
    </>
  )
}
