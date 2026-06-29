export const dynamic = 'force-static'

export async function GET(): Promise<Response> {
  const base = 'https://tools-site-production.up.railway.app'
  const now = new Date().toUTCString()

  const items = [
    {
      title: 'Practical Tools - 10 Free Online Calculators',
      url: base,
      description: 'A collection of 10 fast, browser-based calculators and utilities. No signup, no installation, no tracking.',
      date: now,
    },
    {
      title: 'About Practical Tools',
      url: `${base}/about`,
      description: 'Learn about Practical Tools: mission, technology stack, and contact information.',
      date: now,
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Practical Tools</title>
    <link>${base}</link>
    <description>Free online calculators: discount, BMI, date countdown, lunar calendar, unit converter, QR code generator, word counter, JSON formatter, HEIC to JPG, invoice generator.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items.map(item => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.date}</pubDate>
      <guid isPermaLink="true">${item.url}</guid>
    </item>`).join('\n')}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}