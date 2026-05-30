export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://smholdings.gr/#website',
    url: 'https://smholdings.gr',
    name: 'SMH Real Estate',
    description:
      'Trusted real estate platform in Greece. Long-term & short-term rentals, property management, and investment consulting.',
    publisher: {
      '@id': 'https://smholdings.gr/#organization',
    },
    inLanguage: ['en-US', 'el-GR'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://smholdings.gr/en/results?q={search_term_string}',
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
