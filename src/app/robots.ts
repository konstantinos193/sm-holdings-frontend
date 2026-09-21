import type { MetadataRoute } from 'next'
import { PAGE_ROUTES } from '@/lib/seo/routes'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://smholdings.gr'

  // One wildcard rule. Everything is crawlable except private/account areas,
  // internal search results and faceted listing states (query strings on the
  // property listing multiply thin URLs — Google's faceted-navigation guidance
  // recommends keeping crawlers out of them). `/_next/` is intentionally NOT
  // blocked: Googlebot needs the CSS/JS to render pages.
  const privateAreas = ['admin', 'dashboard', 'profile', 'settings', 'bookings', 'auth']
  const disallow = [
    '/api/',
    ...privateAreas.flatMap((a) => [`/en/${a}/`, `/el/${a}/`]),
    '/en/results',
    '/el/results',
    `/en/${PAGE_ROUTES.properties.en}?`,
    `/el/${PAGE_ROUTES.properties.el}?`,
  ]

  return {
    rules: [{ userAgent: '*', allow: '/', disallow }],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
