import type { Metadata } from 'next'
import HeicToJpgClient from '../../heic-to-jpg/heic-to-jpg-client'

export async function generateMetadata({
  searchParams,
}: {
  
}) {
  const lang = 'zh'

  const data = {
    zh: {
      title: 'HEIC转JPG - 在线iPhone照片转换工具',
      description: '免费在线HEIC转JPG工具,支持批量转换iPhone HEIC照片为JPG格式。100%浏览器本地处理,照片不上传,保护隐私。',
    },
    en: {
      title: 'HEIC to JPG Converter - Free Online HEIC to JPG',
      description: 'Free online HEIC to JPG converter. Batch convert iPhone HEIC photos to JPG. 100% browser-side processing, no upload, full privacy.',
    },
  }

  return {
    title: data.zh.title,
    description: data.zh.description,
    openGraph: {
      title: data.zh.title,
      description: data.zh.description,
    },
    alternates: {
    canonical: 'https://tools-site-production.up.railway.app/zh/heic-to-jpg',
      languages: {
        'zh-CN': '/zh/heic-to-jpg',
        'en-US': '/heic-to-jpg',
        'x-default': '/heic-to-jpg',
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
      name: '什么是 HEIC 格式?为什么 iPhone 默认用它?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEIC（High Efficiency Image Container）是苹果从 iOS 11（2017 年）开始采用的默认照片格式,基于 HEIF（高效图像格式）编码。同样的画面质量下,HEIC 文件体积大约只有 JPG 的 50%,一张 iPhone 拍的 12MB 照片转成 HEIC 大概只剩 5-6MB,这对 128GB / 256GB 的 iPhone 来说意味着能多存几千张照片。代价是兼容性:HEIC 不是一个公开标准,主要在 Apple 生态里跑得顺。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么在 Windows / Android / 上传到某些网站时 HEIC 打不开?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '三个层面的原因:① 系统层面,Windows 10/11 早期版本默认不支持 HEIC,要装 "HEIF Image Extensions" 才能看,Android 原生相册至今识别不稳;② 软件层面,老版本 Photoshop、Lightroom、部分网盘客户端、PC 版微信、企业邮箱附件预览都不认 HEIC;③ 网站层面,小红书、微博、淘宝商品图、抖音上传、跨境电商 ERP 等后端通常只接受 JPG/PNG,直接上传 HEIC 会显示空白或报错。所以 iPhone 用户经常遇到"截图发给 Windows 同事打不开"、"发朋友圈成功但对方收的是空白图"、"上电商平台主图传不上去"。',
      },
    },
    {
      '@type': 'Question',
      name: '转换后的 JPG 会有损画质吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG 本身是有损格式,但人眼几乎看不出差别。本工具默认用 92% 质量转码,这对屏幕查看、社交分享、电商主图来说足够。如果你要印刷、做海报、留存原片,建议保留原 HEIC 文件,JPG 只用于分享。文件大小方面,JPG 大约是 HEIC 的 2-3 倍,这是兼容性必须付的代价。如果在意体积,可以用 85% 质量档,肉眼差别极小但文件再小 30%。',
      },
    },
    {
      '@type': 'Question',
      name: '这个工具会上传我的照片到云端吗?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会,这是这个工具最重要的设计点。转换全程在浏览器本地完成:使用 ffmpeg.wasm + heic2any 这类 WebAssembly 库,把 HEIC 解码、再编码成 JPG,所有像素计算都在你的设备上跑,你的照片从来没有离开过浏览器,也不会经过任何服务器。对于隐私敏感场景(私人合影、未发布的商业产品图、医疗影像、合同扫描件、儿童照片)这是必须的。',
      },
    },
    {
      '@type': 'Question',
      name: '批量转换怎么操作?一次能转多少张?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '操作:① 点页面上的拖拽区,或者直接把一整个文件夹拖进去(支持多选 Shift/Cmd+A);② 顶部下拉选择 JPG 质量(100/92/85/75);③ 点 "转换" 按钮,所有 HEIC 会按顺序转成 JPG,每张可单独下载;④ 超过 1 张时会出现 "下载全部 (ZIP)" 按钮,一键打包。实测一次批量 200 张以内流畅,更大批建议分批以避免浏览器内存压力。整个过程不需要联网。',
      },
    },
  ],
}

const seoBodyZh = (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6 text-gray-700 leading-relaxed text-[15px] space-y-3">
      <p>
        <strong>HEIC 转 JPG</strong>解决 iPhone 用户最常碰到的尴尬:用 iPhone 拍的截图发给 Windows 同事发不出去、上传到小红书/微博/淘宝主图出现空白、把家庭合影存到网盘后相册打开一片灰、跨境电商 ERP 拒绝 HEIC 后台报错。本工具一键批量把 iPhone 默认的 HEIC/HEIF 格式转成兼容性最广的 JPG,无需安装任何软件,无需注册账号。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">iPhone 用户最痛的 5 个场景</h2>
      <p>
        <strong>场景 1:截图发给 Windows 同事</strong>。iPhone 自带的"隔空投送"只在 Apple 设备之间管用,微信发 HEIC 给 PC 用户,对方图片经常显示成灰色方块或直接转圈加载失败。
      </p>
      <p>
        <strong>场景 2:上电商平台主图</strong>。淘宝、天猫、拼多多、抖店后台只接受 JPG/PNG,直接拖 HEIC 进去会显示"图片格式不支持"。商品图一张张在 Mac 上"导出为"再上传,效率极低。
      </p>
      <p>
        <strong>场景 3:发小红书 / 微博 / 朋友圈</strong>。Android 用户刷到 iPhone 朋友发的 HEIC 原图,部分机型显示成转圈或黑屏;小红书博主批量发产品图前通常都要先转一道。
      </p>
      <p>
        <strong>场景 4:网盘 / 邮箱附件</strong>。百度网盘、阿里云盘、QQ 邮箱附件预览、企业微信文档,HEIC 经常打不开或显示成缩略图错位。
      </p>
      <p>
        <strong>场景 5:家庭儿童 / 私密照片</strong>。第三方在线 HEIC 转换器会把你的照片原图上传到他们的服务器,等于是把你的私人照片拱手送人。本工具完全在浏览器本地跑(ffmpeg.wasm),照片从未离开你的设备。
      </p>
      <h2 className="text-lg font-semibold text-gray-800 pt-2">为什么不用 iPhone 自带的"传输到 PC"?</h2>
      <p>
        iPhone 连数据线传到 Windows 时,iOS 默认仍然给你 HEIC 文件,需要在"设置 → 照片 → 自动传输到 PC 或 Mac"里手动改成"自动转换 JPG",而且只对当前一次连接生效。本工具不挑系统、不挑线材、不挑设置,把照片拖进浏览器,马上拿到 JPG。
      </p>
    </div>
  )


const faqSchemas = {
  zh: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'HEIC是什么？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HEIC是苹果iOS 11起的默认照片格式（高效图像格式）,文件小但部分设备和软件不兼容。',
        },
      },
      {
        '@type': 'Question',
        name: '为什么需要转JPG？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG兼容性最广,Windows、安卓、网页、邮件附件都支持。HEIC在这些场景可能打不开。',
        },
      },
      {
        '@type': 'Question',
        name: '会上传我的照片吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '不会。所有转换在您的浏览器本地完成,照片不上传任何服务器。',
        },
      },
      {
        '@type': 'Question',
        name: '支持批量转换吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持。可以一次选择多张HEIC照片,批量转JPG。',
        },
      },
      {
        '@type': 'Question',
        name: '转换后质量会下降吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG是有损格式,质量可调。默认92%,肉眼几乎无差别。文件大小比HEIC大2-3倍。',
        },
      },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is HEIC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "HEIC is Apple's default photo format since iOS 11. It offers better compression than JPG while maintaining similar quality, but it is not universally supported outside the Apple ecosystem.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why convert HEIC to JPG?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG is supported on virtually every device, app, and website. HEIC files may not open on Windows, Android, older software, or when uploaded to many web platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are my photos uploaded to a server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All conversion happens entirely in your browser. Your photos never leave your device, ensuring full privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I convert multiple files at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Drop a folder or select multiple HEIC files, and they will all convert to JPG in a single batch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the JPG quality be lower than HEIC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG is a lossy format, so there is some quality loss. We use a high-quality setting (95%) by default to minimize visible differences. Files are typically 2-3x larger than the original HEIC.',
        },
      },
    ],
  },
}

export default async function HeicToJpgPage({
  searchParams,
}: {
  
}) {
  const lang = 'zh'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemas[lang]) }}
      />
      <HeicToJpgClient initialLang={lang} seoBody={seoBodyZh} />
    </>
  )
}
