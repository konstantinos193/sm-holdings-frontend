import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/content/Breadcrumbs'
import { CtaButtons } from '@/components/content/Cta'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { COMMON } from '@/content/types'
import { countBy, fetchAllProperties } from '@/lib/inventory'
import { pageMetadata } from '@/lib/seo/metadata'
import { localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string }> }

const TYPE_LABEL: Record<string, { en: string; el: string }> = {
  APARTMENT: { en: 'Apartments', el: 'Διαμερίσματα' },
  HOUSE: { en: 'Houses', el: 'Σπίτια' },
  ROOM: { en: 'Rooms', el: 'Δωμάτια' },
  COMMERCIAL: { en: 'Commercial', el: 'Επαγγελματικοί χώροι' },
  LUXURY: { en: 'Luxury', el: 'Πολυτελή' },
  STORAGE: { en: 'Storage', el: 'Αποθήκες' },
  PLOT: { en: 'Plots', el: 'Οικόπεδα' },
  GARAGE: { en: 'Garages', el: 'Γκαράζ' },
  INVESTMENT: { en: 'Investment', el: 'Επενδυτικά' },
}

const C = {
  en: {
    title: 'Property Types Available | SM Holdings, Preveza',
    description: 'Property types currently listed by SM Holdings in the Preveza area, with real counts from the live portfolio.',
    h1: 'Properties by Type',
    intro: 'Only types with at least one property currently listed are shown, with the real count. The portfolio is small and local; if you need a type that is not listed, tell us what you are looking for.',
    none: 'No properties are listed at the moment.',
    unit: (n: number) => (n === 1 ? '1 available' : `${n} available`),
  },
  el: {
    title: 'Διαθέσιμοι Τύποι Ακινήτων | SM Holdings, Πρέβεζα',
    description: 'Τύποι ακινήτων που καταχωρεί αυτή τη στιγμή η SM Holdings στην περιοχή της Πρέβεζας, με πραγματικούς αριθμούς από το ζωντανό χαρτοφυλάκιο.',
    h1: 'Ακίνητα ανά Τύπο',
    intro: 'Εμφανίζονται μόνο τύποι με τουλάχιστον ένα καταχωρημένο ακίνητο, με τον πραγματικό αριθμό. Το χαρτοφυλάκιο είναι μικρό και τοπικό· αν χρειάζεστε τύπο που δεν υπάρχει, πείτε μας τι ψάχνετε.',
    none: 'Δεν υπάρχουν καταχωρημένα ακίνητα αυτή τη στιγμή.',
    unit: (n: number) => (n === 1 ? '1 διαθέσιμο' : `${n} διαθέσιμα`),
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = C[toLocale(lang)]
  const types = countBy(await fetchAllProperties(), (p) => p.type)
  // A hub with fewer than two real categories is thin: keep it reachable but out of the index.
  return pageMetadata({ lang, key: 'propertyTypes', title: c.title, description: c.description, noindex: types.length < 2 })
}

export default async function PropertyTypesPage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = C[locale]
  const types = countBy(await fetchAllProperties(), (p) => p.type)

  return (
    <>
      <OrganizationSchema lang={locale} />
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6"><Breadcrumbs items={[{ name: COMMON.home[locale], href: localePath(locale, 'home') }, { name: c.h1, href: localePath(locale, 'propertyTypes') }]} /></div>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>
        </section>
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {types.length === 0 ? (
              <p className="text-gray-600">{c.none}</p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {types.map((t) => (
                  <li key={t.key}>
                    <Link href={`${localePath(locale, 'properties')}?type=${encodeURIComponent(t.key)}`} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors">
                      <span className="text-lg font-semibold text-gray-900">{TYPE_LABEL[t.key]?.[locale] ?? t.key}</span>
                      <span className="text-sm text-gray-600">{c.unit(t.count)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-12 text-center">
              <CtaButtons lang={locale} primary="seeker" secondary="owner" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
