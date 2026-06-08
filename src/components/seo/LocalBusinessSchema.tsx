export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://smholdings.gr/#localbusiness',
    name: 'SMH Properties',
    alternateName: ['SMH Real Estate', 'SMH Holdings'],
    url: 'https://smholdings.gr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://smholdings.gr/logoetc.png',
      width: 512,
      height: 512,
    },
    image: 'https://smholdings.gr/og-image.png',
    description: 'Premier real estate agency in Greece specializing in property rentals, management, and investment consulting.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GR',
      addressRegion: 'Attica',
      addressLocality: 'Athens',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.9838,
      longitude: 23.7275,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Greece',
    },
    serviceType: [
      'Real Estate Services',
      'Property Management',
      'Short-term Rentals',
      'Long-term Rentals',
      'Investment Consulting',
      'Property Sales',
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Greek' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+30-210-0000000',
      contactType: 'customer service',
      availableLanguage: ['English', 'Greek'],
      areaServed: 'GR',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'EUR',
    sameAs: ['https://smholdings.gr'],
    foundingDate: '2020',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
