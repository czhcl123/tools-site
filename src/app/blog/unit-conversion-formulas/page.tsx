import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'
  return {
    title: lang === 'zh'
      ? '单位换算公式：长度、重量、体积一文通'
      : 'Unit Conversion Formulas: Length, Weight, Volume',
    description: lang === 'zh'
      ? '最常用的单位换算公式速查：英寸厘米、磅公斤、加仑升、华氏摄氏，附换算系数记忆法和常见错误。'
      : 'Every unit conversion formula you actually use — inches to cm, pounds to kg, gallons to liters, Fahrenheit to Celsius — plus memory tricks and common mistakes.',
    alternates: {
      canonical: 'https://tools-site-production.up.railway.app/blog/unit-conversion-formulas',
      languages: { 'en-US': '/blog/unit-conversion-formulas', 'x-default': '/blog/unit-conversion-formulas' },
    },
    openGraph: { url: 'https://tools-site-production.up.railway.app/blog/unit-conversion-formulas' },
    other: {
      'application/ld+json': JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do you convert inches to centimeters?", "acceptedAnswer": {"@type": "Answer", "text": "Multiply inches by 2.54. One inch equals exactly 2.54 centimeters, so 10 inches is 25.4 cm."}}, {"@type": "Question", "name": "Why is temperature conversion different?", "acceptedAnswer": {"@type": "Answer", "text": "Temperature scales have different zero points, so you need an offset as well as a multiplier: °C = (°F − 32) × 5/9."}}]}),
    },
  }
}

export default async function BlogPost({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams
  const lang = sp.lang === 'zh' ? 'zh' : 'en'

  const content = {
    zh: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">换算的底层逻辑：乘一个系数</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          绝大多数单位换算只做一件事：<strong>乘以两个单位之间的固定比率</strong>。比如 1 英寸 = 2.54 厘米，要把英寸换厘米就乘 2.54；反过来除以 2.54。记住方向比记住数字更重要——大单位换小单位用乘法，小单位换大单位用除法。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">长度换算公式</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📏 <strong>英寸 → 厘米</strong>：英寸 × 2.54</p>
          <p>📏 <strong>厘米 → 英寸</strong>：厘米 ÷ 2.54</p>
          <p>📏 <strong>英里 → 公里</strong>：英里 × 1.609</p>
          <p>📏 <strong>公里 → 英里</strong>：公里 ÷ 1.609</p>
          <p>📏 <strong>英尺 → 米</strong>：英尺 × 0.3048</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          记忆锚点：1 英寸约两节半拇指，1 英里约 1.6 公里（马拉松 42.2 公里 ≈ 26.2 英里）。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">重量换算公式</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>⚖️ <strong>磅 → 公斤</strong>：磅 × 0.4536</p>
          <p>⚖️ <strong>公斤 → 磅</strong>：公斤 ÷ 0.4536（或 × 2.205）</p>
          <p>⚖️ <strong>盎司 → 克</strong>：盎司 × 28.35</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          快速心算版：磅减去它的 10%，再除以 2，近似公斤数。150 磅 → 135 ÷ 2 ≈ 68 公斤（精确值 68.04）。买菜、健身、寄快递都够用。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">体积换算公式</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🥛 <strong>加仑（美）→ 升</strong>：加仑 × 3.785</p>
          <p>🥛 <strong>品脱 → 毫升</strong>：品脱 × 473</p>
          <p>🥛 <strong>杯 → 毫升</strong>：杯 × 236.6</p>
          <p>🥛 <strong>汤匙 → 毫升</strong>：汤匙 × 14.8</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          做西式烘焙时这套最常用。注意「加仑」有美英之分：英制加仑约 4.546 升，比美制大 20%，看食谱先确认用的是哪套。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">温度：唯一需要特殊公式的</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          温度刻度的零点不同，所以不能只乘系数，还要加减偏移：
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🌡️ <strong>华氏 → 摄氏</strong>：(°F − 32) × 5/9</p>
          <p>🌡️ <strong>摄氏 → 华氏</strong>：°C × 9/5 + 32</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          记住两个锚点就行：0°C = 32°F，100°C = 212°F。天气预报看到 85°F，(85−32)×5/9 ≈ 29.4°C，就知道是热天。
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">三个最常见的换算错误</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>方向搞反</strong>：公斤换磅应该乘 2.205 而不是除，结果差 4.8 倍</li>
          <li><strong>量级错误</strong>：毫米和米差 1000 倍，工程图纸上错一个小数点就是事故</li>
          <li><strong>美制英制混用</strong>：食谱里的 cup、油箱的 gallon，先确认体系再算</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">常见问题</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">1 英寸等于多少厘米？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">精确值 2.54 厘米，这是国际定义值，不是近似。</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">摄氏和华氏怎么快速换算？</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">粗略版：摄氏 × 2 + 30 ≈ 华氏。25°C × 2 + 30 = 80°F（精确值 77°F），日常够用。</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → 用单位换算器免公式直接换算
          </Link>
        </div>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">The Logic: Multiply by a Ratio</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Almost every unit conversion does one thing: <strong>multiply by the fixed ratio between two units</strong>. One inch is 2.54 centimeters, so inches to centimeters means multiplying by 2.54; going the other way divides. Direction matters more than the numbers — big unit to small unit means multiply, small unit to big unit means divide.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Length Formulas</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>📏 <strong>Inches to cm</strong>: inches × 2.54</p>
          <p>📏 <strong>cm to inches</strong>: cm ÷ 2.54</p>
          <p>📏 <strong>Miles to km</strong>: miles × 1.609</p>
          <p>📏 <strong>Km to miles</strong>: km ÷ 1.609</p>
          <p>📏 <strong>Feet to meters</strong>: feet × 0.3048</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Anchors worth remembering: an inch is about two-and-a-half thumbs wide, a mile is roughly 1.6 km — a marathon is 42.2 km or 26.2 miles.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Weight Formulas</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>⚖️ <strong>Pounds to kg</strong>: pounds × 0.4536</p>
          <p>⚖️ <strong>Kg to pounds</strong>: kg ÷ 0.4536 (or × 2.205)</p>
          <p>⚖️ <strong>Ounces to grams</strong>: ounces × 28.35</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Quick mental shortcut: subtract 10% of the pounds, then halve it. That's close to kilograms — 150 lb becomes 135 ÷ 2 ≈ 68 kg against the exact 68.04. Accurate enough for groceries, gym plates, and parcels.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Volume Formulas</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🥛 <strong>Gallons (US) to liters</strong>: gallons × 3.785</p>
          <p>🥛 <strong>Pints to milliliters</strong>: pints × 473</p>
          <p>🥛 <strong>Cups to milliliters</strong>: cups × 236.6</p>
          <p>🥛 <strong>Tablespoons to milliliters</strong>: tablespoons × 14.8</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the set you'll use for Western recipes. Watch out: gallons come in US and imperial versions — an imperial gallon is about 4.546 liters, roughly 20% larger. Check which system the recipe assumes.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Temperature: The One That Needs Offset</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Temperature scales start at different zero points, so a multiplier alone won't do — you need an offset too:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
          <p>🌡️ <strong>Fahrenheit to Celsius</strong>: (°F − 32) × 5/9</p>
          <p>🌡️ <strong>Celsius to Fahrenheit</strong>: °C × 9/5 + 32</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Two anchors cover most situations: 0°C = 32°F and 100°C = 212°F. See 85°F in a forecast? (85 − 32) × 5/9 ≈ 29.4°C — hot day.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Three Classic Conversion Mistakes</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Reversed direction</strong>: kg to lb means multiplying by 2.205, not dividing — the answer is off by a factor of nearly five</li>
          <li><strong>Wrong magnitude</strong>: millimeters and meters differ by 1,000; one misplaced decimal ruins an engineering drawing</li>
          <li><strong>Mixed systems</strong>: recipe cups and car gallons belong to different measurement worlds — identify the system before converting</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">FAQ</h2>
        <dl className="space-y-4 mb-6">
          <div>
            <dt className="font-semibold text-gray-800">How many centimeters in an inch?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Exactly 2.54 cm — it's an international definition, not an approximation.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-800">Quick way to convert Celsius to Fahrenheit?</dt>
            <dd className="text-gray-700 leading-relaxed ml-4">Rough version: Celsius × 2 + 30. So 25°C × 2 + 30 = 80°F against the exact 77°F — close enough for daily use.</dd>
          </div>
        </dl>

        <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center">
          <Link href="/unit-converter" className="text-orange-600 font-medium hover:underline">
            → Skip the formulas with the Unit Converter
          </Link>
        </div>
      </>
    ),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-orange-500 text-sm hover:underline">← Blog</Link>
      <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
        {lang === 'zh' ? '单位换算公式：长度、重量、体积一文通' : 'Unit Conversion Formulas: Length, Weight, Volume'}
      </h1>
      {content[lang]}
    </div>
  )
}
