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

const C = {
  en: {
    title: 'Where SM Holdings Operates | Locations in Preveza, Greece',
    description: 'The areas SM Holdings serves and where its listed properties are: Preveza town, the Ionian coast at Chroneika, Kalamitsi and Monolithi, and Filippiada. Real listing counts from the current portfolio.',
    h1: 'Locations',
    intro: 'SM Holdings works in the Preveza area of Epirus. Below are the places with properties currently listed — counts come from the live portfolio, so a location appears only when something is actually available there — and the area page that explains how we operate locally.',
    listed: 'Properties currently listed',
    area: 'Service area',
    none: 'No properties are listed at the moment.',
    prevezaCard: { title: 'Property management in Preveza', text: 'Areas served, how the holiday-rental season works, the airport and tourism context, and the building we operate at Chroneika.' },
    other: { title: 'Property elsewhere in Greece?', text: 'We take on owners outside Preveza case by case. Tell us where the property is and we will say honestly whether we can cover it.' },
    unit: (n: number) => (n === 1 ? '1 property' : `${n} properties`),
  },
  el: {
    title: 'Πού Δραστηριοποιείται η SM Holdings | Περιοχές στην Πρέβεζα',
    description: 'Οι περιοχές που εξυπηρετεί η SM Holdings και πού βρίσκονται τα καταχωρημένα ακίνητά της: πόλη της Πρέβεζας, η ακτή του Ιονίου στα Χρονέικα, Καλαμίτσι και Μονολίθι, και η Φιλιππιάδα. Πραγματικός αριθμός καταχωρήσεων από το τρέχον χαρτοφυλάκιο.',
    h1: 'Περιοχές',
    intro: 'Η SM Holdings δραστηριοποιείται στην περιοχή της Πρέβεζας στην Ήπειρο. Παρακάτω είναι τα μέρη με ακίνητα καταχωρημένα αυτή τη στιγμή — οι αριθμοί προέρχονται από το ζωντανό χαρτοφυλάκιο, οπότε μια περιοχή εμφανίζεται μόνο όταν υπάρχει πράγματι κάτι διαθέσιμο εκεί — και η σελίδα περιοχής που εξηγεί πώς λειτουργούμε τοπικά.',
    listed: 'Ακίνητα καταχωρημένα τώρα',
    area: 'Περιοχή εξυπηρέτησης',
    none: 'Δεν υπάρχουν καταχωρημένα ακίνητα αυτή τη στιγμή.',
    prevezaCard: { title: 'Διαχείριση ακινήτων στην Πρέβεζα', text: 'Περιοχές που εξυπηρετούμε, πώς λειτουργεί η σεζόν διακοπών, το αεροδρόμιο και ο τουρισμός, και το κτίριο που λειτουργούμε στα Χρονέικα.' },
    other: { title: 'Ακίνητο αλλού στην Ελλάδα;', text: 'Αναλαμβάνουμε ιδιοκτήτες εκτός Πρέβεζας κατά περίπτωση. Πείτε μας πού είναι το ακίνητο και θα σας πούμε ειλικρινά αν μπορούμε να το καλύψουμε.' },
    unit: (n: number) => (n === 1 ? '1 ακίνητο' : `${n} ακίνητα`),
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = C[toLocale(lang)]
  return pageMetadata({ lang, key: 'locations', title: c.title, description: c.description })
}

export default async function LocationsPage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = C[locale]
  const properties = await fetchAllProperties()
  const cities = countBy(properties, (p) => p.city)

  return (
    <>
      <OrganizationSchema lang={locale} />
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6"><Breadcrumbs items={[{ name: COMMON.home[locale], href: localePath(locale, 'home') }, { name: c.h1, href: localePath(locale, 'locations') }]} /></div>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{c.area}</h2>
            <Link href={localePath(locale, 'preveza')} className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all max-w-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.prevezaCard.title}</h3>
              <p className="text-gray-600">{c.prevezaCard.text}</p>
            </Link>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{c.listed}</h2>
            {cities.length === 0 ? (
              <p className="text-gray-600">{c.none}</p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <li key={city.key}>
                    <Link href={`${localePath(locale, 'properties')}?location=${encodeURIComponent(city.key)}`} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors">
                      <span className="text-lg font-semibold text-gray-900">{city.key}</span>
                      <span className="text-sm text-gray-600">{c.unit(city.count)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{c.other.title}</h2>
            <p className="text-gray-600 mb-8">{c.other.text}</p>
            <CtaButtons lang={locale} primary="owner" secondary="call" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
