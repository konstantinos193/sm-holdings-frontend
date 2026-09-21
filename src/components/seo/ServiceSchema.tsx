import { BUSINESS } from '@/lib/seo/business'

type Props = {
  lang: 'en' | 'el'
  url: string
  name: string
  description: string
  offers?: string[]
}

/** schema.org Service provided by the site organization (#organization). */
export function ServiceSchema({ lang, url, name, description, offers = [] }: Props) {
  const isEl = lang === 'el'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    url,
    name,
    serviceType: name,
    description,
    inLanguage: isEl ? 'el-GR' : 'en-US',
    provider: { '@id': BUSINESS.id },
    areaServed: [
      { '@type': 'Country', name: isEl ? 'Ελλάδα' : 'Greece' },
      { '@type': 'AdministrativeArea', name: isEl ? 'Ήπειρος' : 'Epirus' },
      { '@type': 'City', name: isEl ? 'Πρέβεζα' : 'Preveza' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: isEl ? 'Ιδιοκτήτες ακινήτων' : 'Property owners',
    },
    ...(offers.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name,
            itemListElement: offers.map((offer) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: offer },
            })),
          },
        }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
