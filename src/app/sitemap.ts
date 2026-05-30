import type { MetadataRoute } from 'next'
import { serverFetch } from '@/lib/api/server'

const baseUrl = 'https://smholdings.gr'
const locales = ['en', 'el'] as const

const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/services',
  '/team',
  '/careers',
  '/incanto',
  '/properties',
  '/privacy',
  '/terms',
]

function buildAlternates(path: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [
        locale === 'el' ? 'el-GR' : 'en-US',
        `${baseUrl}/${locale}${path}`,
      ])
    ) as Record<string, string>,
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
      priority: route === '' ? 1.0 : route === '/properties' ? 0.9 : 0.7,
      alternates: buildAlternates(route),
    }))
  )

  let propertyEntries: MetadataRoute.Sitemap = []
  try {
    const response = await serverFetch<{
      success: boolean
      data: { properties: { id: string; updatedAt: string }[] }
    }>('/properties?limit=500&page=1')

    if (response.success) {
      propertyEntries = response.data.properties.flatMap((property) =>
        locales.map((locale) => ({
          url: `${baseUrl}/${locale}/properties/${property.id}`,
          lastModified: new Date(property.updatedAt),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
          alternates: buildAlternates(`/properties/${property.id}`),
        }))
      )
    }
  } catch {
    // silently skip property entries if API is unavailable
  }

  return [...staticEntries, ...propertyEntries]
}
