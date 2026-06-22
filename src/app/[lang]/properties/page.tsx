import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertiesContent } from '@/components/properties/PropertiesContent'
import { getSEOKeywords } from '@/lib/seo-keywords'
import { RealEstateListingSchema } from '@/components/seo/RealEstateListingSchema'
import { serverFetch } from '@/lib/api/server'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el'
  const title = isEl ? 'Ενοικίαση Ακινήτων Ελλάδα | Διαμερίσματα & Βίλες | SMH Real Estate' : 'Property Rentals Greece | Apartments & Villas | SMH Real Estate'
  const description = isEl
    ? 'Εξερευνήστε 100+ ακίνητα για ενοικίαση σε όλη την Ελλάδα. Διαμερίσματα, σπίτια, βίλες. Μακροχρόνιες & βραχυχρόνιες μισθώσεις. Κάντε κράτηση online σήμερα!'
    : 'Explore 100+ properties for rent across Greece. Apartments, houses, villas. Long-term & short-term rentals. Online booking available. Find your perfect home today!'
  return {
    title,
    description,
    keywords: getSEOKeywords('properties', isEl ? 'el' : 'en'),
    alternates: { canonical: `${BASE_URL}/${lang}/properties`, languages: { 'el-GR': `${BASE_URL}/el/properties`, 'en-US': `${BASE_URL}/en/properties`, 'x-default': `${BASE_URL}/en/properties` } },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/properties`, type: 'website', locale: isEl ? 'el_GR' : 'en_US', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${BASE_URL}/og-image.png`] },
  }
}

export default async function PropertiesPage({ params, searchParams }: Props) {
  const { lang } = await params
  const search = await searchParams
  const isEl = lang === 'el'

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
    const response = await serverFetch<{ success: boolean; data: { properties: any[] } }>(
      '/properties?limit=20&page=1'
    )
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
        image: p.images[0],
        description: isEl ? p.descriptionGr : p.descriptionEn,
      }))
    }
  } catch {
    // Silently fail if API is unavailable
  }

  return (
    <>
      <RealEstateListingSchema properties={propertiesForSchema} lang={isEl ? 'el' : 'en'} />
      <Header />
      <main className="flex-1 min-h-screen bg-gray-50">
        <Suspense fallback={<PropertiesLoadingSkeleton />}>
          <PropertiesContent lang={lang} searchParams={search} />
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

