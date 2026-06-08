import type { MetadataRoute } from 'next'
import { serverFetch } from '@/lib/api/server'

const baseUrl = 'https://smholdings.gr'
const locales = ['en', 'el'] as const

const staticRoutes = [
  { path: '', priority: 1.0, changeFreq: 'daily' as const },
  { path: '/incanto', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/properties', priority: 0.9, changeFreq: 'daily' as const },
  { path: '/about', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/services', priority: 0.6, changeFreq: 'monthly' as const },
  { path: '/team', priority: 0.6, changeFreq: 'monthly' as const },
  { path: '/careers', priority: 0.5, changeFreq: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
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
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.priority,
      alternates: buildAlternates(route.path),
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
