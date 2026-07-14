import type { Metadata } from 'next'
import BmiCalculator from '../../bmi-calculator/bmi-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: 'BMI计算器', en: 'BMI Calculator - Free Online Body Mass Index Tool' }
  const descriptions = {
    zh: '快速计算身体质量指数（BMI），判断体重是否健康，支持中英文，免费使用。',
    en: "Free online BMI calculator. Compute your Body Mass Index instantly and see if you're in the healthy weight range. Supports metric and imperial units. No signup.",
  }
  const ogTitles = { zh: 'BMI计算器 - 实用计算器', en: 'BMI Calculator - Practical Tools' }
  const ogDescs = {
    zh: '快速计算身体质量指数（BMI），判断体重是否健康，支持中英文，免费使用。',
    en: "Free online BMI calculator. Compute your Body Mass Index instantly and see if you're in the healthy weight range. Supports metric and imperial units. No signup.",
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/bmi-calculator',
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


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'BMI是什么?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI(Body Mass Index,身体质量指数)是国际上常用的衡量人体胖瘦程度的标准,计算公式为:体重(kg) ÷ 身高(m)的平方。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI正常范围是多少?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '对于亚洲成年人,BMI 18.5-23.9 为正常范围,低于18.5为偏瘦,24.0-27.9为偏胖,28.0及以上为肥胖。不同人种标准略有差异。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI能完全反映健康状况吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMI只是一个参考指标,不能完全反映健康状况。它没有考虑肌肉量、骨密度、年龄、性别等因素。建议结合腰围、体脂率等其他指标综合判断。',
      },
    },
    {
      '@type': 'Question',
      name: 'BMI计算器支持词与千克吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '支持。可输入身高(cm)、体重(kg)。也可以切换到英制单位(英寸、磅)。',
      },
    }
  ],
}

export default async function BmiCalculatorPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <BmiCalculator initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
