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
    // Blog posts have no Chinese variant any more (they were dropped so the
    // 63 posts could be statically rendered). Redirect the legacy
    // /blog/<slug>?lang=zh URLs to the English post instead of silently
    // serving different content at the same URL.
    if (path.startsWith('/blog')) {
      const newUrl = new URL(path, request.url)
      newUrl.search = ''
      return NextResponse.redirect(newUrl, 301)
    }
    const newPath = path === '/' ? '/zh' : `/zh${path}`
    const newUrl = new URL(newPath, request.url)
    newUrl.search = ''
    return NextResponse.redirect(newUrl, 301)
  }

  // en is default — no redirect needed (avoids Coverage auto-redirect entries)
  // Note: no language header is set here any more. The root layout used to
  // read `x-page-lang` through `await headers()`, which forced every route to
  // be dynamically rendered. Each route group now sets its own <html lang>.
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.js|.*\\.css|.*\\.svg|.*\\.png).*)',
  ],
}