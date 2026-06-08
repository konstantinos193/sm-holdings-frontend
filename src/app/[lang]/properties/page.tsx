import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertiesContent } from '@/components/properties/PropertiesContent'
import { getSEOKeywords } from '@/lib/seo-keywords'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el'
  const title = isEl ? 'Ακίνητα στην Ελλάδα | SMH Real Estate' : 'Properties in Greece | SMH Real Estate'
  const description = isEl
    ? 'Περιηγηθείτε σε εκατοντάδες ακίνητα στην Ελλάδα. Διαμερίσματα, σπίτια, βίλες για μακροχρόνια & βραχυχρόνια ενοικίαση. Βρείτε το ιδανικό ακίνητο σήμερα.'
    : 'Browse hundreds of properties in Greece. Apartments, houses, villas for long-term & short-term rental. Find your ideal property today with SMH Real Estate.'
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

  return (
    <>
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

