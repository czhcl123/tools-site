import { redirect } from 'next/navigation'

export default function ZhBlogIndex() {
  redirect('/blog?lang=zh')
}
