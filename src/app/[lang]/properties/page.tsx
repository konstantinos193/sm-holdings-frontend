import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertiesContent } from '@/components/properties/PropertiesContent'
import { RealEstateListingSchema } from '@/components/seo/RealEstateListingSchema'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { serverFetch } from '@/lib/api/server'
import { pageMetadata } from '@/lib/seo/metadata'
import { toLocale } from '@/lib/seo/routes'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const C = {
  en: {
    title: 'Properties for Rent in Preveza | SM Holdings',
    description: 'Properties currently available for rent from the portfolio SM Holdings manages in the Preveza area. Real, available listings only — no placeholder inventory.',
  },
  el: {
    title: 'Ακίνητα προς Ενοικίαση στην Πρέβεζα | SM Holdings',
    description: 'Ακίνητα διαθέσιμα προς ενοικίαση από το χαρτοφυλάκιο που διαχειρίζεται η SM Holdings στην περιοχή της Πρέβεζας. Μόνο πραγματικές, διαθέσιμες καταχωρήσεις.',
  },
}

// Query-parameter states (filters, sort, pagination) are UX, not landing
// pages: they canonicalise to the clean listing and are kept out of the index
// so faceted navigation cannot multiply thin URLs.
const FACET_KEYS = ['location', 'type', 'intention', 'rentalType', 'guests', 'checkIn', 'checkOut', 'minPrice', 'maxPrice', 'amenities', 'page', 'limit', 'sortBy', 'sortOrder', 'sort', 'mode']

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { lang } = await params
  const search = await searchParams
  const locale = toLocale(lang)
  const base = pageMetadata({ lang, key: 'properties', title: C[locale].title, description: C[locale].description })
  const hasFacet = FACET_KEYS.some((k) => typeof search[k] === 'string' && search[k] !== '')
  return hasFacet ? { ...base, robots: { index: false, follow: true } } : base
}

export default async function PropertiesPage({ params, searchParams }: Props) {
  const { lang } = await params
  const search = await searchParams
  const locale = toLocale(lang)

  // Fetch properties for schema
  let propertiesForSchema: Array<{
    id: string
    titleEn: string
    titleGr: string
    city: string
    propertyType: string
    price: number
    bedrooms?: number
    bathrooms?: number
    area?: number
    image?: string
    description?: string
  }> = []

  try {
    const response = await serverFetch<{ success: boolean; data: { properties: any[] } }>('/properties?limit=20&page=1')
    if (response.success) {
      propertiesForSchema = response.data.properties.map((p: any) => ({
        id: p.id,
        titleEn: p.titleEn,
        titleGr: p.titleGr,
        city: p.city,
        propertyType: p.type,
        price: p.basePrice,
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        area: p.area,
        image: p.images?.[0],
        description: locale === 'el' ? p.descriptionGr : p.descriptionEn,
      }))
    }
  } catch {
    // Silently fail if API is unavailable
  }

  return (
    <>
      <OrganizationSchema lang={locale} />
      <RealEstateListingSchema properties={propertiesForSchema} lang={locale} />
      <Header />
      <main className="flex-1 min-h-screen bg-gray-50">
        <Suspense fallback={<PropertiesLoadingSkeleton />}>
          <PropertiesContent lang={locale} searchParams={search} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

function PropertiesLoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
