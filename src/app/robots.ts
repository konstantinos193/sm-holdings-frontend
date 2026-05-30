import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://smholdings.gr'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/el/',
          '/en/properties/',
          '/el/properties/',
          '/en/about',
          '/el/about',
          '/en/contact',
          '/el/contact',
          '/en/services',
          '/el/services',
          '/en/team',
          '/el/team',
          '/en/careers',
          '/el/careers',
          '/en/incanto',
          '/el/incanto',
          '/en/privacy',
          '/el/privacy',
          '/en/terms',
          '/el/terms',
        ],
        disallow: [
          '/en/admin/',
          '/el/admin/',
          '/en/dashboard/',
          '/el/dashboard/',
          '/en/profile/',
          '/el/profile/',
          '/en/settings/',
          '/el/settings/',
          '/en/bookings/',
          '/el/bookings/',
          '/en/auth/',
          '/el/auth/',
          '/test-styles/',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
