type PropertySchemaProps = {
  id: string
  title: string
  description: string
  address: string
  city: string
  country: string
  pricePerNight: number
  currency: string
  bedrooms: number
  bathrooms: number
  maxGuests: number
  images: string[]
  lang: string
  rating?: number
  reviewCount?: number
}

export function PropertySchema({
  id,
  title,
  description,
  address,
  city,
  country,
  pricePerNight,
  currency,
  bedrooms,
  bathrooms,
  maxGuests,
  images,
  lang,
  rating,
  reviewCount,
}: PropertySchemaProps) {
  const url = `https://smholdings.gr/${lang}/properties/${id}`

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': url,
    name: title,
    description,
    url,
    image: images.slice(0, 5),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      addressCountry: country,
    },
    numberOfRooms: bedrooms,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Bedrooms', value: bedrooms },
      { '@type': 'LocationFeatureSpecification', name: 'Bathrooms', value: bathrooms },
      { '@type': 'LocationFeatureSpecification', name: 'Max Guests', value: maxGuests },
    ],
    offers: {
      '@type': 'Offer',
      price: pricePerNight,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@id': 'https://smholdings.gr/#organization',
    },
  }

  if (rating && reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
