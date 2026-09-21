import { BASE_URL, BUSINESS } from '@/lib/seo/business'

type Props = {
  lang?: 'en' | 'el'
}

/**
 * The one and only organization entity for the site (@id #organization).
 * Other schemas (WebSite, Service, property listings) reference it by @id.
 *
 * Deliberately NOT included: aggregateRating / review (Google forbids
 * self-serving review markup on LocalBusiness and it was previously
 * hard-coded to fictional values), placeholder phone numbers, and
 * numberOfEmployees (not public). All other values are verified — see
 * lib/seo/business.ts.
 */
export function OrganizationSchema({ lang = 'en' }: Props) {
  const isEl = lang === 'el'
  const address = isEl ? BUSINESS.addressEl : BUSINESS.address

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness', 'Organization'],
    '@id': BUSINESS.id,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.alternateNames,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS.logo,
    },
    image: BUSINESS.image,
    description: isEl
      ? 'Εταιρεία διαχείρισης ακινήτων και μεσιτικών υπηρεσιών με έδρα τη Φιλιππιάδα Πρέβεζας. Διαχείριση ακινήτων, βραχυχρόνιες & μακροχρόνιες μισθώσεις και επενδυτική συμβουλευτική σε όλη την Ελλάδα.'
      : 'Property management and real estate company based in Filippiada, Preveza. Property management, short-term & long-term rentals and investment consulting across Greece.',
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...BUSINESS.geo,
    },
    areaServed: [
      { '@type': 'Country', name: isEl ? 'Ελλάδα' : 'Greece' },
      { '@type': 'AdministrativeArea', name: isEl ? 'Ήπειρος' : 'Epirus' },
      { '@type': 'City', name: isEl ? 'Πρέβεζα' : 'Preveza' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.telephone,
        contactType: 'customer service',
        email: BUSINESS.email,
        availableLanguage: ['English', 'Greek'],
        areaServed: 'GR',
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.mobile,
        contactType: 'sales',
        availableLanguage: ['English', 'Greek'],
        areaServed: 'GR',
      },
    ],
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMap: BUSINESS.mapUrl,
    vatID: BUSINESS.vatID,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ΓΕΜΗ',
      value: BUSINESS.gemiNumber,
    },
    foundingDate: BUSINESS.foundingDate,
    founder: { '@type': 'Person', name: BUSINESS.founder },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    knowsLanguage: ['el', 'en'],
    sameAs: BUSINESS.sameAs,
    makesOffer: [
      'Property Management',
      'Short-term Rental Management',
      'Long-term Rental Management',
      'Real Estate Investment Consulting',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, areaServed: { '@type': 'Country', name: 'Greece' } },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
