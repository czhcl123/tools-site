import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Technical SEO Case Notes',
  description:
    'Case notes from five live sites: dead-domain cleanup, indexing recovery, and 180 URLs submitted to IndexNow. Real numbers, no traffic claims.',
  alternates: {
    canonical: 'https://getpracticaltools.com/work',
    languages: { 'en-US': '/work', 'x-default': '/work' },
  },
  openGraph: {
    type: 'article',
    url: 'https://getpracticaltools.com/work',
    title: 'Technical SEO Case Notes',
    description:
      'Dead-domain cleanup, indexing recovery, and 180 URLs submitted to IndexNow. Real numbers, no traffic claims.',
    images: [
      {
        url: 'https://getpracticaltools.com/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Technical SEO case notes from five live sites',
      },
    ],
  },
}

const cases = [
  {
    label: 'Case 01',
    title: 'A migration that left 31 references to a dead host',
    site: 'coupons.getpracticaltools.com',
    problem:
      'A coupon site was rebuilt on a new subdomain, but the code still pointed at the old Railway host in 31 places: canonical tags, Open Graph URLs, sitemap entries, and internal links. Visitors on the new domain were fine; crawlers were being told the real version of every page lived on a host that returned 404.',
    action: [
      'Replaced all 31 hardcoded references and moved the base URL into a single environment variable.',
      'Rewrote canonical tags so every page self-references its own URL.',
      'Regenerated the sitemap and submitted it to Search Console and Bing.',
    ],
    result: [
      'Every canonicals now self-references; no page points at the retired host.',
      'Sitemap grew from 36 to 39 URLs after the new guides were added.',
      'Bing discovered all 39 URLs on the first crawl, with 0 errors and 0 warnings.',
    ],
  },
  {
    label: 'Case 02',
    title: 'A page nobody could index, rebuilt end to end',
    site: 'passport-photo.co',
    problem:
      'The passport photo tool had been live for weeks with almost no indexed pages. The page was thin, the metadata was generic, and the canonical tag disagreed with the URL being linked from the sitemap.',
    action: [
      'Rewrote the page around one search intent and one H1.',
      'Rebuilt the metadata: 50-character title, 133-character description, canonical pointing at the served URL.',
      'Added the page back to the sitemap and resubmitted it.',
    ],
    result: [
      'Live page returns 200 with a self-referencing canonical.',
      '37,786 bytes of HTML, roughly 632 words of body copy.',
      'Bing accepted all 12 URLs from the sitemap on the first crawl.',
    ],
  },
  {
    label: 'Case 03',
    title: 'Five sites, one indexing pipeline',
    site: 'all five properties',
    problem:
      'Publishing was not the bottleneck. Waiting for a crawler to notice a change was. Metadata edits sat for days, and there was no way to tell whether a search engine had even seen the new URLs.',
    action: [
      'Deployed an IndexNow key to the root of every host and verified each one returns 200.',
      'Built a script that reads each sitemap, verifies the key file, and submits the URL list.',
      'Registered all five properties in Bing Webmaster Tools and submitted each sitemap.',
    ],
    result: [
      '180 URLs submitted to IndexNow; all five hosts returned 202 Accepted.',
      '180 URLs discovered by Bing on the same day, 0 errors, 0 warnings.',
      'A repeatable command now pushes new URLs within minutes of a deploy.',
    ],
  },
]

export default function WorkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Work</span>
      </nav>

      <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-3">
        Technical SEO · case notes
      </p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        What I fixed, and what the numbers actually say
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        I run five small sites of my own. Three of them had a technical problem that
        stopped pages from being indexed properly: a dead host in the canonical tags of
        one, a thin page with conflicting metadata on another, and a publishing workflow
        that left every change waiting on a crawler.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        This page documents what I changed and what I could verify afterwards. It is
        written for people who need this kind of work done and want to see the reasoning
        before they pay for it.
      </p>

      <div className="rounded-xl border border-orange-100 bg-orange-50 px-5 py-4 mb-10">
        <p className="text-sm text-gray-800 leading-relaxed">
          <strong className="font-semibold">What I do not claim:</strong> I have not
          grown traffic on any of these sites. My largest property reported 1,285
          impressions and 0 clicks over seven days in Search Console, and its best page
          sits at an average position of 15.15. I fix what blocks indexing and crawling.
          I do not sell rankings I cannot deliver.
        </p>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">The numbers</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="py-2 pr-4 font-medium">Metric</th>
              <th className="py-2 pr-4 font-medium">Before</th>
              <th className="py-2 font-medium">After</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">References to a retired host</td>
              <td className="py-2 pr-4">31</td>
              <td className="py-2">0</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">Coupon site sitemap URLs</td>
              <td className="py-2 pr-4">36</td>
              <td className="py-2">39</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">URLs discovered by Bing (5 sites)</td>
              <td className="py-2 pr-4">0</td>
              <td className="py-2">180</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">IndexNow submissions accepted</td>
              <td className="py-2 pr-4">0</td>
              <td className="py-2">180 / 180</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Sites with sitemap errors in Bing</td>
              <td className="py-2 pr-4">—</td>
              <td className="py-2">0 of 5</td>
            </tr>
          </tbody>
        </table>
      </div>

      {cases.map((item) => (
        <section key={item.label} className="mb-10">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
            {item.label} · {item.site}
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>

          <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-1">Problem</h3>
          <p className="text-gray-700 leading-relaxed">{item.problem}</p>

          <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-1">
            What I changed
          </h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
            {item.action.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-1">
            What I could verify
          </h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
            {item.result.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      ))}

      <h2 className="text-xl font-bold text-gray-900 mt-12 mb-3">
        What I can do for you
      </h2>
      <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 mb-8">
        <li>
          <strong className="font-semibold">Migration cleanup.</strong> Find every
          reference to a retired domain in canonicals, sitemaps, Open Graph tags,
          redirects, and internal links, and remove it.
        </li>
        <li>
          <strong className="font-semibold">Indexing audit.</strong> Work through the
          pages Search Console refuses to index and fix the actual cause rather than
          resubmitting and hoping.
        </li>
        <li>
          <strong className="font-semibold">Next.js specifics.</strong> Metadata
          templates that silently append a brand suffix, canonicals that disagree with
          the served URL, and sitemaps that drift out of date as pages are added.
        </li>
        <li>
          <strong className="font-semibold">Indexing pipeline.</strong> IndexNow keys,
          sitemap submission, and Bing Webmaster setup so you can see what a crawler did
          with a deploy instead of guessing.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mb-3">How I work</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Fixed scope, fixed price, three to five days. Before I quote, I need two things:
        the domain, and read access to Search Console or Bing Webmaster Tools. Without
        the data I would be guessing, and guessing is what created most of the problems
        above.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Every number on this page can be checked against a live site or a Search Console
        export. The code for this site, including the IndexNow script, is public on{' '}
        <a
          href="https://github.com/czhcl123/tools-site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 underline decoration-orange-200 hover:decoration-orange-500"
        >
          GitHub
        </a>
        .
      </p>

      <div className="rounded-xl border border-gray-200 bg-white px-5 py-5">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Get in touch</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Describe the site and the problem in a few lines. If it is not something I can
          fix, I will say so rather than take the job.
        </p>
        <p className="text-sm text-gray-600">
          Email:{' '}
          <a href="mailto:czhcl@hotmail.com" className="text-orange-600 underline">
            czhcl@hotmail.com
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-1">Replies within one business day.</p>
      </div>

      <p className="text-xs text-gray-400 mt-8">
        Last updated 2026-10-24. All figures measured on live properties on that date.
      </p>

      <Footer lang="en" />
    </main>
  )
}
