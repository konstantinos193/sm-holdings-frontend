import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getSEOKeywords } from '@/lib/seo-keywords'
import Link from 'next/link'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
}

const locations = [
  { 
    name: 'Αθήνα', 
    nameEn: 'Athens', 
    slug: 'athens',
    description: 'Η καρδιά της Ελλάδας - σύγχρονα διαμερίσματα και ιστορικές κατοικίες',
    descriptionEn: 'The heart of Greece - modern apartments and historic homes',
    propertyCount: 45
  },
  { 
    name: 'Θεσσαλονίκη', 
    nameEn: 'Thessaloniki', 
    slug: 'thessaloniki',
    description: 'Η πρωτεύουσα της Βόρειας Ελλάδας - ακίνητα κοντά στη θάλασσα',
    descriptionEn: 'Capital of Northern Greece - properties near the sea',
    propertyCount: 28
  },
  { 
    name: 'Μύκονος', 
    nameEn: 'Mykonos', 
    slug: 'mykonos',
    description: 'Απολαυστικές βίλες και πολυτελείς κατοικίες για διακοπές',
    descriptionEn: 'Luxurious villas and premium holiday homes',
    propertyCount: 15
  },
  { 
    name: 'Σαντορίνη', 
    nameEn: 'Santorini', 
    slug: 'santorini',
    description: 'Μοναδικές κατοικίες με θέα το ηφαίστειο και την Καλντέρα',
    descriptionEn: 'Unique homes with volcano and Caldera views',
    propertyCount: 12
  },
  { 
    name: 'Κρήτη', 
    nameEn: 'Crete', 
    slug: 'crete',
    description: 'Μεγάλο νησί με ποικιλία ακινήτων από παραθαλάσσια μέχρι ορεινά',
    descriptionEn: 'Large island with diverse properties from seaside to mountain',
    propertyCount: 32
  },
  { 
    name: 'Κέρκυρα', 
    nameEn: 'Corfu', 
    slug: 'corfu',
    description: 'Πράσινο νησί με βενετσιάνικη αρχιτεκτονική και όμορφες παραλίες',
    descriptionEn: 'Green island with Venetian architecture and beautiful beaches',
    propertyCount: 18
  }
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el'
  
  const title = isEl 
    ? 'Τοποθεσίες Ακινήτων Ελλάδα | Αθήνα, Θεσσαλονίκη, Μύκονος | SMH Real Estate'
    : 'Property Locations Greece | Athens, Thessaloniki, Mykonos | SMH Real Estate'
    
  const description = isEl
    ? 'Βρείτε ακίνητα στις καλύτερες τοποθεσίες της Ελλάδας. Αθήνα, Θεσσαλονίκη, Μύκονος, Σαντορίνη, Κρήτη, Κέρκυρα. Διαμερίσματα, βίλες, σπίτια για ενοικίαση.'
    : 'Find properties in the best locations in Greece. Athens, Thessaloniki, Mykonos, Santorini, Crete, Corfu. Apartments, villas, houses for rent.'

  return {
    title,
    description,
    keywords: [
      ...getSEOKeywords('home', isEl ? 'el' : 'en'),
      'ακίνητα αθήνα', 'properties athens', 'ενοικίαση θεσσαλονίκη', 'rental thessaloniki',
      'βίλες μύκονος', 'villas mykonos', 'κατοικίες σαντορίνη', 'homes santorini'
    ],
    alternates: { 
      canonical: `${BASE_URL}/${lang}/locations`, 
      languages: { 
        'el-GR': `${BASE_URL}/el/locations`, 
        'en-US': `${BASE_URL}/en/locations`, 
        'x-default': `${BASE_URL}/en/locations` 
      } 
    },
    openGraph: { 
      title, 
      description, 
      url: `${BASE_URL}/${lang}/locations`, 
      type: 'website', 
      locale: isEl ? 'el_GR' : 'en_US', 
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }] 
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${BASE_URL}/og-image.png`] },
  }
}

export default async function LocationsPage({ params }: Props) {
  const { lang } = await params
  const isEl = lang === 'el'

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {isEl ? 'Ακίνητα ανά Τοποθεσία' : 'Properties by Location'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEl 
                ? 'Εξερευνήστε τα καλύτερα ακίνητα στις πιο δημοφιλείς τοποθεσίες της Ελλάδας'
                : 'Explore the best properties in Greece\'s most popular destinations'
              }
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link 
                key={location.slug}
                href={`/${lang}/properties?location=${location.slug}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {isEl ? location.name : location.nameEn}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {location.propertyCount} {isEl ? 'ακίνητα' : 'properties'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {isEl ? location.description : location.descriptionEn}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    {isEl ? 'Δείτε τα ακίνητα' : 'View properties'}
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isEl ? 'Δεν βρήκατε την τοποθεσία που ψάχνετε;' : 'Didn\'t find the location you\'re looking for?'}
            </h2>
            <p className="text-gray-600 mb-6">
              {isEl 
                ? 'Επικοινωνήστε μαζί μας και θα σας βοηθήσουμε να βρείτε το ιδανικό ακίνητο σε οποιαδήποτε περιοχή της Ελλάδας.'
                : 'Contact us and we\'ll help you find the perfect property in any area of Greece.'
              }
            </p>
            <Link 
              href={`/${lang}/contact`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {isEl ? 'Επικοινωνία' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
