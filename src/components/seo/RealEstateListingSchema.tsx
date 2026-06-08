interface RealEstateListingSchemaProps {
  properties: Array<{
    id: string
    titleEn: string
    titleGr: string
    city: string
    propertyType: string
    price: number
    bedrooms?: number
    bathrooms?: number
    area?: number
    image?: string
    description?: string
  }>
  lang: 'en' | 'el'
}

export function RealEstateListingSchema({ properties, lang }: RealEstateListingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lang === 'el' ? 'Ακίνητα SMH Properties' : 'SMH Properties Real Estate Listings',
    description: lang === 'el' 
      ? 'Λίστα ακινήτων προς ενοικίαση από την SMH Properties στην Ελλάδα'
      : 'List of rental properties from SMH Properties in Greece',
    url: `https://smholdings.gr/${lang}/properties`,
    numberOfItems: properties.length,
    itemListElement: properties.map((property, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': ['Product', 'RealEstateListing'],
        name: lang === 'el' ? property.titleGr : property.titleEn,
        description: property.description || (lang === 'el' ? property.titleGr : property.titleEn),
        url: `https://smholdings.gr/${lang}/properties/${property.id}`,
        image: property.image,
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: lang === 'el' ? 'Τύπος Ακινήτου' : 'Property Type',
            value: property.propertyType,
          },
          {
            '@type': 'PropertyValue',
            name: lang === 'el' ? 'Πόλη' : 'City',
            value: property.city,
          },
          ...(property.bedrooms ? [{
            '@type': 'PropertyValue',
            name: lang === 'el' ? 'Υπνοδωμάτια' : 'Bedrooms',
            value: property.bedrooms,
          }] : []),
          ...(property.bathrooms ? [{
            '@type': 'PropertyValue',
            name: lang === 'el' ? 'Μπάνια' : 'Bathrooms',
            value: property.bathrooms,
          }] : []),
          ...(property.area ? [{
            '@type': 'PropertyValue',
            name: lang === 'el' ? 'Εμβαδόν' : 'Area',
            value: `${property.area} m²`,
          }] : []),
        ],
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
