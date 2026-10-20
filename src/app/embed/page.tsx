import type { Metadata } from 'next'
import CopyBlock from '@/components/Embed/CopyBlock'

export const metadata: Metadata = {
  title: 'Embed a Free Word Counter',
  description:
    'Add a live word counter to your classroom, blog or writing-center page with one iframe. Counts words, Chinese characters and reading time.',
  alternates: { canonical: 'https://getpracticaltools.com/embed' },
}

const FIXED_SNIPPET = `<iframe
  src="https://getpracticaltools.com/embed/word-counter"
  title="Free word counter"
  style="width:100%;max-width:480px;height:265px;border:1px solid #e5e7eb;border-radius:12px"
  loading="lazy"
></iframe>`

const AUTO_SNIPPET = `<iframe
  id="word-counter-widget"
  src="https://getpracticaltools.com/embed/word-counter"
  title="Free word counter"
  style="width:100%;max-width:480px;height:265px;border:0"
  loading="lazy"
></iframe>
<script>
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://getpracticaltools.com') return;
    if (e.data && e.data.type === 'practical-tools-word-counter') {
      var el = document.getElementById('word-counter-widget');
      if (el) el.style.height = e.data.height + 'px';
    }
  });
</script>`

export default function EmbedPage() {
  return (
    <main className="mx-auto w-full max-w-3xl bg-white px-4 py-8 text-sm leading-relaxed text-gray-600">
      <style>{'html,body{background:#fff}'}</style>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Embed a free word counter on your site</h1>
      <p className="mb-4">
        One iframe that counts words, characters and reading time as your visitor types. Built for teachers, writing
        centers, editors and student resource pages that need a count without sending readers to a signup wall.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">What it counts</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>English words, Chinese characters and total characters — live, as the visitor types.</li>
        <li>Reading time, using 200 words or 300 Chinese characters per minute.</li>
        <li>The counting runs in the browser: the text is never uploaded, and there is no API key or quota.</li>
      </ul>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Live preview</h2>
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-3">
        <iframe
          src="/embed/word-counter"
          title="Free word counter preview"
          style={{ width: '100%', maxWidth: 480, height: 265, border: '1px solid #e5e7eb', borderRadius: 12 }}
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Snippet (fixed height)</h2>
      <p className="mb-2">Simplest option — pick a height that fits your layout.</p>
      <CopyBlock code={FIXED_SNIPPET} />

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Snippet (auto-resize)</h2>
      <p className="mb-2">
        The widget reports its own height, so the iframe grows when the number cells wrap on narrow screens. Paste both
        the iframe and the listener.
      </p>
      <CopyBlock code={AUTO_SNIPPET} />

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Notes</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Free to embed, including on commercial sites. No attribution required — the &quot;Powered by&quot; line is
          part of the widget.
        </li>
        <li>The count needs JavaScript, but nothing is sent over the network — no API call, no upload, no quota.</li>
        <li>
          Need the full tool instead?{' '}
          <a href="/word-counter" className="text-orange-500 underline underline-offset-2">
            Open the word counter
          </a>
          .
        </li>
      </ul>

      <p className="text-xs text-gray-400 mt-8 border-t border-gray-200 pt-3">
        Questions or a different embed size? <a href="/about" className="underline underline-offset-2">Contact</a>.
      </p>
    </main>
  )
}
