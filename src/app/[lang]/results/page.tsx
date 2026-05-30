import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ResultsContent } from '@/components/results/ResultsContent'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { lang } = await params
  const search = await searchParams
  const isEl = lang === 'el'
  const location = typeof search.location === 'string' ? search.location : ''

  const title = isEl
    ? location ? `Αποτελέσματα για "${location}" | SMH Real Estate` : 'Αποτελέσματα Αναζήτησης | SMH Real Estate'
    : location ? `Search Results for "${location}" | SMH Real Estate` : 'Property Search Results | SMH Real Estate'
  const description = isEl
    ? 'Αποτελέσματα αναζήτησης ακινήτων στην Ελλάδα. Βρείτε το ιδανικό σπίτι, διαμέρισμα ή επενδυτικό ακίνητο.'
    : 'Property search results in Greece. Find the perfect house, apartment, or investment property with SMH Real Estate.'

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/results`, type: 'website', locale: isEl ? 'el_GR' : 'en_US' },
  }
}

export default async function ResultsPage({ params, searchParams }: Props) {
  const { lang } = await params
  const search = await searchParams

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-gray-50">
        <Suspense fallback={<ResultsLoadingSkeleton />}>
          <ResultsContent lang={lang} searchParams={search} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

function ResultsLoadingSkeleton() {
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

