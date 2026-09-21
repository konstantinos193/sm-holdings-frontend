import { BASE_URL, BUSINESS } from '@/lib/seo/business'

type Props = {
  lang?: 'en' | 'el'
}

export function WebsiteSchema({ lang = 'en' }: Props) {
  const isEl = lang === 'el'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': BUSINESS.websiteId,
    url: BASE_URL,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateNames,
    description: isEl
      ? 'Διαχείριση ακινήτων, βραχυχρόνιες & μακροχρόνιες μισθώσεις και επενδυτική συμβουλευτική στην Ελλάδα.'
      : 'Property management, short-term & long-term rentals and investment consulting in Greece.',
    publisher: { '@id': BUSINESS.id },
    inLanguage: isEl ? 'el-GR' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      // The results page reads the `location` query parameter.
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/${lang}/results?location={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
