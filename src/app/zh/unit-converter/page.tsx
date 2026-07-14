import type { Metadata } from 'next'
import UnitConverter from '../../unit-converter/converter-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const titles = { zh: '单位换算器', en: 'Unit Converter - Length, Weight, Temperature' }
  const descriptions = {
    zh: '长度、重量、温度单位快速互转。支持米、厘米、公斤、磅、摄氏度、华氏度等单位之间的换算。',
    en: 'Free online unit converter. Instantly convert length (m, cm, in, ft), weight (kg, lb, oz), temperature (C, F, K), and more. No signup.',
  }
  const ogTitles = { zh: '单位换算器 - 实用计算器', en: 'Unit Converter - Practical Tools' }
  const ogDescs = {
    zh: '长度、重量、温度单位快速互转。支持米、厘米、公斤、磅、摄氏度、华氏度等单位之间的换算。',
    en: 'Free online unit converter. Instantly convert length (m, cm, in, ft), weight (kg, lb, oz), temperature (C, F, K), and more. No signup.',
  }

  return {
    title: titles[lang],
    description: descriptions[lang],
    openGraph: {
      title: ogTitles[lang],
      description: ogDescs[lang],
    },
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/zh/unit-converter',
      languages: {
        'zh-CN': '/zh/unit-converter',
        'en-US': '/unit-converter',
        'x-default': '/unit-converter',
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
      name: '支持哪些单位?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '长度(米 m、厘米 cm、公里 km、英里 mi、英寸 in、英尺 ft、码 yd、海里 nmi);重量(千克 kg、克 g、磅 lb、盎司 oz、吨 t);温度(摄氏度 °C、华氏度 °F、开尔文 K);面积(平方米 m²、英亩 acre、公顷 ha);体积(升 L、加仑 gal、毫升 ml、立方米 m³)。共 30+ 单位跨 5 大类。',
      },
    },
    {
      '@type': 'Question',
      name: '温度转换跟其他单位不一样吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。长度 / 重量 / 面积 / 体积都是线性换算(乘以系数),但温度涉及偏移。公式:C = (F - 32) × 5/9,F = C × 9/5 + 32,K = C + 273.15。常见错误:1 °C 等于 33.8 °F 不是 1.8 °F。本工具按公式精确计算,小数位保留 4 位。',
      },
    },
    {
      '@type': 'Question',
      name: '转换结果准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '准确。本工具使用国际标准单位定义(SI 国际单位制、imperial 英制、美制)。所有换算系数都按 NIST 美国国家标准与技术研究院公布的值。例如 1 英寸 = 0.0254 米(精确),1 磅 = 0.45359237 千克(精确)。小数精度 4-6 位,适合工程 / 烹饪 / 日常。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么不用计算器 App?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '手机自带计算器只能算数值,不能识别单位。本工具专门为单位换算优化:输入"1 pound"自动理解是 0.4536 kg,不用你先想公式。比换算表格便宜,比翻字典快。',
      },
    },
  ],
}

const seoBodyZh = (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
    <p>
      <strong>单位换算器</strong>覆盖长度 / 重量 / 温度 / 面积 / 体积 5 大类 30+ 单位即时互转。从厘米到英寸、从摄氏度到华氏度、从磅到千克,一键完成。所有换算按 NIST 国际标准系数,精确小数点 4-6 位,适合日常、烹饪、工程、跨境贸易。
    </p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">最常用的换算场景</h2>
    <p><strong>1. 跨境网购</strong>。"这件衣服是美码 M,相当于中国什么尺码?"——本工具把英寸转厘米、磅转千克,1 秒给答案,比把尺子放屏幕比划更准。</p>
    <p><strong>2. 烹饪 / 烘焙</strong>。海外食谱 350°F = 176°C,1 cup = 240ml,1 oz = 28g。本工具让"美式食谱"直接照做。</p>
    <p><strong>3. 留学 / 移民</strong>。美国身高体重(英尺/磅)、汽车里程(英里/加仑)、天气预报(华氏度)转成大陆习惯(米/千克、公里/升、摄氏度)。</p>
    <p><strong>4. 工程 / 学术</strong>。物理 / 化学 / 建筑作业需要 SI 单位 ↔ imperial 单位精确换算,本工具精度满足工程需求。</p>
    <h2 className="text-lg font-semibold text-gray-800 pt-2">5 类单位涵盖范围</h2>
    <p>长度:米 / 厘米 / 公里 / 英里 / 英寸 / 英尺 / 码 / 海里。重量:千克 / 克 / 磅 / 盎司 / 公吨。温度:°C / °F / K(带偏移公式)。面积:m² / 英亩 / 公顷。体积:升 / 加仑 / 毫升 / 立方米。后续可能加:速度(mph / km/h / m/s)、数据量(B / KB / MB / GB / TB)。</p>
  </div>
)


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '支持哪些单位?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '长度：米、厘米、公里、英里、英寸、英尺。重量：公斤、千克、磅、直衡直帆。温度：摄氏度、华氏度、开尔文。',
      },
    },
    {
      '@type': 'Question',
      name: '转换结果准确吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '准确。我们使用国际标准的单位换算公式。',
      },
    }
  ],
}

export default async function UnitConverterPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaZh) }} />
      <UnitConverter initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}