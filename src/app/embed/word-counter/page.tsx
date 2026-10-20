import type { Metadata } from 'next'
import EmbedWordCounter from '@/components/Embed/EmbedWordCounter'

export const metadata: Metadata = {
  title: 'Word Counter Widget',
  description: 'Live word, character and reading-time count for any text. Free, no signup.',
  alternates: { canonical: 'https://getpracticaltools.com/embed/word-counter' },
  robots: { index: false, follow: true },
}

export default function EmbedWordCounterPage() {
  return (
    <main className="w-full bg-white p-3 text-gray-800">
      <style>{'html,body{background:#fff}'}</style>
      <EmbedWordCounter />
    </main>
  )
}
