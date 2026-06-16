import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getSEOKeywords } from '@/lib/seo-keywords'
import Link from 'next/link'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
}

const propertyTypes = [
  { 
    name: 'Διαμερίσματα', 
    nameEn: 'Apartments', 
    slug: 'apartment',
    description: 'Σύγχρονα διαμερίσματα στο κέντρο των πόλεων και σε ήσυχες περιοχές',
    descriptionEn: 'Modern apartments in city centers and quiet neighborhoods',
    icon: '🏢',
    propertyCount: 65
  },
  { 
    name: 'Βίλες', 
    nameEn: 'Villas', 
    slug: 'villa',
    description: 'Πολυτελείς βίλες με ιδιωτικές πισίνες και υπέροχους κήπους',
    descriptionEn: 'Luxury villas with private pools and beautiful gardens',
    icon: '🏡',
    propertyCount: 22
  },
  { 
    name: 'Σπίτια', 
    nameEn: 'Houses', 
    slug: 'house',
    description: 'Ανεξάρτητα σπίτια για οικογένειες σε προαστιακές περιοχές',
    descriptionEn: 'Independent houses for families in suburban areas',
    icon: '🏠',
    propertyCount: 18
  },
  { 
    name: 'Studio', 
    nameEn: 'Studio', 
    slug: 'studio',
    description: 'Compact και οικονομικά studio ιδανικά για φοιτητές και επαγγελματίες',
    descriptionEn: 'Compact and economical studios ideal for students and professionals',
    icon: '🏘️',
    propertyCount: 15
  },
  { 
    name: 'Penthouses', 
    nameEn: 'Penthouses', 
    slug: 'penthouse',
    description: 'Αποκλειστικά penthouses με υπέροχη θέα και πολυτελείς παροχές',
    descriptionEn: 'Exclusive penthouses with stunning views and luxury amenities',
    icon: '🌆',
    propertyCount: 8
  },
  { 
    name: 'Townhouses', 
    nameEn: 'Townhouses', 
    slug: 'townhouse',
    description: 'Townhouses με πολλαπλά επίπεδα και ιδιωτικές εισόδους',
    descriptionEn: 'Multi-level townhouses with private entrances',
    icon: '🏘️',
    propertyCount: 12
  }
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el'
  
  const title = isEl 
    ? 'Τύποι Ακινήτων | Διαμερίσματα, Βίλες, Σπίτια | SMH Real Estate'
    : 'Property Types | Apartments, Villas, Houses | SMH Real Estate'
    
  const description = isEl
    ? 'Εξερευνήστε όλους τους τύπους ακινήτων στην Ελλάδα. Διαμερίσματα, βίλες, σπίτια, studio, penthouses. Βρείτε το ιδανικό ακίνητο για εσάς.'
    : 'Explore all property types in Greece. Apartments, villas, houses, studios, penthouses. Find your ideal property type.'

  return {
    title,
    description,
    keywords: [
      ...getSEOKeywords('home', isEl ? 'el' : 'en'),
      'διαμερίσματα ενοικίαση', 'apartments for rent', 'βίλες ενοικίαση', 'villas for rent',
      'σπίτια ενοικίαση', 'houses for rent', 'studio ενοικίαση', 'studio for rent'
    ],
    alternates: { 
      canonical: `${BASE_URL}/${lang}/property-types`, 
      languages: { 
        'el-GR': `${BASE_URL}/el/property-types`, 
        'en-US': `${BASE_URL}/en/property-types`, 
        'x-default': `${BASE_URL}/en/property-types` 
      } 
    },
    openGraph: { 
      title, 
      description, 
      url: `${BASE_URL}/${lang}/property-types`, 
      type: 'website', 
      locale: isEl ? 'el_GR' : 'en_US', 
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }] 
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${BASE_URL}/og-image.png`] },
  }
}

export default async function PropertyTypesPage({ params }: Props) {
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
              {isEl ? 'Ακίνητα ανά Τύπο' : 'Properties by Type'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEl 
                ? 'Βρείτε το τέλειο ακίνητο για τις ανάγκες σας από τους διαθέσιμους τύπους κατοικιών'
                : 'Find the perfect property for your needs from our available home types'
              }
            </p>
          </div>

          {/* Property Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyTypes.map((type) => (
              <Link 
                key={type.slug}
                href={`/${lang}/properties?type=${type.slug}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{type.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {isEl ? type.name : type.nameEn}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {type.propertyCount} {isEl ? 'διαθέσιμα' : 'available'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {isEl ? type.description : type.descriptionEn}
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

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isEl ? 'Γρήγορη Κράτηση' : 'Fast Booking'}
              </h3>
              <p className="text-gray-600">
                {isEl 
                  ? 'Κάντε κράτηση online σε λίγα λεπτά'
                  : 'Book online in just a few minutes'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isEl ? 'Επαληθευμένες Ιδιοκτήτες' : 'Verified Owners'}
              </h3>
              <p className="text-gray-600">
                {isEl 
                  ? 'Όλες οι ιδιοκτησίες είναι επαληθευμένες'
                  : 'All properties are verified'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {isEl ? 'Ασφαλείς Πληρωμές' : 'Secure Payments'}
              </h3>
              <p className="text-gray-600">
                {isEl 
                  ? 'Ασφαλείς μέθοδοι πληρωμής'
                  : 'Secure payment methods'
                }
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
