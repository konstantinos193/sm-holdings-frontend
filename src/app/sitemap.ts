import type { MetadataRoute } from 'next'
import { serverFetch } from '@/lib/api/server'
import { BASE_URL, LOCALES, PAGE_ROUTES, absoluteUrl, localePath, propertyPath, type PageKey } from '@/lib/seo/routes'

// Static pages carry a fixed lastmod: Google ignores <lastmod> entirely once it
// notices the value changes on every crawl. Bump when page content materially changes.
const STATIC_LAST_MODIFIED = new Date('2026-09-21T00:00:00Z')

type Entry = { key: PageKey; priority: number; changeFreq: 'daily' | 'weekly' | 'monthly' | 'yearly' }

// Only canonical, indexable pages. Excluded on purpose: careers (noindex until a
// real vacancy exists), results/filter states, account areas, property-types
// (indexable only when it has ≥2 real categories — see its generateMetadata).
const STATIC_PAGES: Entry[] = [
  { key: 'home', priority: 1.0, changeFreq: 'weekly' },
  { key: 'propertyManagement', priority: 0.9, changeFreq: 'monthly' },
  { key: 'shortTermRentalManagement', priority: 0.9, changeFreq: 'monthly' },
  { key: 'longTermPropertyManagement', priority: 0.8, changeFreq: 'monthly' },
  { key: 'maintenance', priority: 0.7, changeFreq: 'monthly' },
  { key: 'guestManagement', priority: 0.7, changeFreq: 'monthly' },
  { key: 'ownerReporting', priority: 0.7, changeFreq: 'monthly' },
  { key: 'realEstate', priority: 0.8, changeFreq: 'monthly' },
  { key: 'propertyValuation', priority: 0.7, changeFreq: 'monthly' },
  { key: 'investment', priority: 0.7, changeFreq: 'monthly' },
  { key: 'owners', priority: 0.8, changeFreq: 'monthly' },
  { key: 'preveza', priority: 0.9, changeFreq: 'monthly' },
  { key: 'locations', priority: 0.5, changeFreq: 'weekly' },
  { key: 'hospitality', priority: 0.8, changeFreq: 'monthly' },
  { key: 'properties', priority: 0.8, changeFreq: 'daily' },
  { key: 'insights', priority: 0.6, changeFreq: 'weekly' },
  { key: 'insightFeesGreece', priority: 0.6, changeFreq: 'monthly' },
  { key: 'insightShortVsLong', priority: 0.6, changeFreq: 'monthly' },
  { key: 'insightHolidayHomeMaintenance', priority: 0.6, changeFreq: 'monthly' },
  { key: 'insightWhatIncludes', priority: 0.6, changeFreq: 'monthly' },
  { key: 'insightSummerSeason', priority: 0.6, changeFreq: 'monthly' },
  { key: 'insightOwnerReporting', priority: 0.6, changeFreq: 'monthly' },
  { key: 'services', priority: 0.6, changeFreq: 'monthly' },
  { key: 'about', priority: 0.7, changeFreq: 'monthly' },
  { key: 'team', priority: 0.5, changeFreq: 'monthly' },
  { key: 'contact', priority: 0.8, changeFreq: 'monthly' },
  { key: 'privacy', priority: 0.2, changeFreq: 'yearly' },
  { key: 'terms', priority: 0.2, changeFreq: 'yearly' },
]

function alternatesFor(key: PageKey) {
  return {
    languages: {
      'en-US': absoluteUrl(localePath('en', key)),
      'el-GR': absoluteUrl(localePath('el', key)),
      'x-default': absoluteUrl(localePath('en', key)),
    } as Record<string, string>,
  }
}

type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: Entry['changeFreq']
  priority: number
  alternates: { languages: Record<string, string> }
  images?: string[]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: SitemapEntry[] = STATIC_PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(localePath(locale, page.key)),
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: alternatesFor(page.key),
    }))
  )

  let propertyEntries: SitemapEntry[] = []
  try {
    const response = await serverFetch<{
      success: boolean
      data: { properties: { id: string; titleEn: string; titleGr?: string; city?: string; status?: string; updatedAt: string; images?: string[] }[] }
    }>('/properties?limit=500&page=1')

    if (response.success) {
      propertyEntries = response.data.properties
        .filter((p) => !p.status || p.status === 'ACTIVE')
        .flatMap((property) => {
          const images = (property.images ?? []).filter((img) => /^https?:\/\//.test(img) && !img.includes('logo')).slice(0, 5)
          return LOCALES.map((locale) => ({
            url: absoluteUrl(propertyPath(locale, property)),
            lastModified: new Date(property.updatedAt),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
            alternates: {
              languages: {
                'en-US': absoluteUrl(propertyPath('en', property)),
                'el-GR': absoluteUrl(propertyPath('el', property)),
                'x-default': absoluteUrl(propertyPath('en', property)),
              },
            },
            ...(images.length ? { images } : {}),
          }))
        })
    }
  } catch {
    // silently skip property entries if API is unavailable
  }

  return [...staticEntries, ...propertyEntries] as unknown as MetadataRoute.Sitemap
}

// Keep the type import "used" for editors that flag it otherwise.
void PAGE_ROUTES
void BASE_URL
