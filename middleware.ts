import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { canonicalPublicPath } from '@/lib/seo/routes'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // `/el/property-management` -> `/el/diaxeirisi-akiniton` (and vice versa for
  // /en): one public URL per page per language, so hreflang/canonical stay clean.
  const canonicalPath = canonicalPublicPath(pathname)
  if (canonicalPath && canonicalPath !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = canonicalPath
    return NextResponse.redirect(url, 308)
  }

  // Exclude technical files from locale redirection
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/manifest.json' ||
    pathname === '/manifest.webmanifest'
  ) {
    return NextResponse.next()
  }

  // Check if there is any supported locale in the pathname
  const isMissingLocale = !pathname.startsWith('/en') && !pathname.startsWith('/el')

  // Redirect if there is no locale
  if (isMissingLocale) {
    // Get the preferred language from the user's browser
    const acceptLanguage = request.headers.get('accept-language')
    let preferredLanguage = 'en' // default to English

    if (acceptLanguage) {
      // Parse accept-language header to get preferred language
      const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().toLowerCase())

      // Check if Greek is preferred
      if (languages.some(lang => lang.startsWith('el'))) {
        preferredLanguage = 'el'
      }
      // Check if English is preferred
      else if (languages.some(lang => lang.startsWith('en'))) {
        preferredLanguage = 'en'
      }
    }

    // Create the new URL with the preferred language
    let newPath = `/${preferredLanguage}${pathname}`

    // Remove the trailing slash if it's just the root
    if (newPath === `/${preferredLanguage}/`) {
      newPath = `/${preferredLanguage}`
    }

    // 308 (permanent) so Google consolidates `https://smholdings.gr/` into the
    // locale URL instead of indexing both (Search Console showed `/` and `/en`
    // competing for the same brand queries). Googlebot sends no Accept-Language,
    // so it always lands on `/en`, which is also the hreflang x-default.
    // `Vary` tells caches the target depends on the browser language.
    const response = NextResponse.redirect(new URL(newPath, request.url), 308)
    response.headers.set('Vary', 'Accept-Language')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|bmp|txt|xml|webmanifest)).*)',
  ],
}
