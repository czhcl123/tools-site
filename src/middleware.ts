import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Redirect old ?lang=zh URLs to /zh/<slug>
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const lang = url.searchParams.get('lang')

  if (lang === 'zh') {
    const path = url.pathname
    // Don't double-prefix /zh paths
    if (path.startsWith('/zh')) {
      const newUrl = new URL(path, request.url)
      newUrl.search = ''
      return NextResponse.redirect(newUrl, 301)
    }
    const newPath = path === '/' ? '/zh' : `/zh${path}`
    const newUrl = new URL(newPath, request.url)
    newUrl.search = ''
    return NextResponse.redirect(newUrl, 301)
  }

  const response = NextResponse.next()
  // Set language header for root layout to read
  const isZh = url.pathname.startsWith('/zh')
  response.headers.set('x-page-lang', isZh ? 'zh-CN' : 'en')
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.js|.*\\.css|.*\\.svg|.*\\.png).*)',
  ],
}