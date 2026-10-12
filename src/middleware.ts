import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Redirect old ?lang=zh URLs to /zh/<slug>
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const host = (request.headers.get('host') ?? '').toLowerCase()

  // Old Railway subdomain → new domain (permanent migration 301)
  if (host.endsWith('.up.railway.app')) {
    return NextResponse.redirect(
      new URL(url.pathname + url.search, 'https://getpracticaltools.com'),
      301
    )
  }

  // www → non-www redirect
  if (host.startsWith('www.')) {
    return NextResponse.redirect(
      new URL(url.pathname + url.search, 'https://' + host.slice(4)),
      301
    )
  }

  const lang = url.searchParams.get('lang')

  if (lang === 'zh') {
    const path = url.pathname
    // Don't double-prefix /zh paths
    if (path.startsWith('/zh')) {
      const newUrl = new URL(path, request.url)
      newUrl.search = ''
      return NextResponse.redirect(newUrl, 301)
    }
    // Blog routes handle lang via searchParams internally, skip redirect
    if (path.startsWith('/blog')) {
      const response = NextResponse.next()
      response.headers.set('x-page-lang', 'zh-CN')
      return response
    }
    const newPath = path === '/' ? '/zh' : `/zh${path}`
    const newUrl = new URL(newPath, request.url)
    newUrl.search = ''
    return NextResponse.redirect(newUrl, 301)
  }

  if (lang === 'en') {
    // ?lang=en → clean URL (English is the default language; avoid duplicate indexing)
    const newUrl = new URL(url.pathname, request.url)
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