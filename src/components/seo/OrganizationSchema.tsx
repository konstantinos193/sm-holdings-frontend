export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': 'https://smholdings.gr/#organization',
    name: 'SMH Real Estate',
    alternateName: ['SMH Holdings', 'smholdings'],
    url: 'https://smholdings.gr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://smholdings.gr/logoetc.png',
      width: 512,
      height: 512,
    },
    image: 'https://smholdings.gr/og-image.png',
    description:
      'Trusted real estate platform in Greece offering long-term and short-term rentals, property management, and investment consulting.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Greece',
    },
    serviceType: [
      'Real Estate',
      'Property Management',
      'Short-term Rental',
      'Long-term Rental',
      'Investment Consulting',
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Greek' },
    ],
    sameAs: ['https://smholdings.gr'],
    foundingDate: '2020',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
