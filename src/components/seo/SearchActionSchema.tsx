import { OrganizationSchema } from './OrganizationSchema'

interface SearchActionSchemaProps {
  baseUrl: string
  lang: 'en' | 'el'
}

export function SearchActionSchema({ baseUrl, lang }: SearchActionSchemaProps) {
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": lang === 'el' ? "SMH Real Estate - Ακίνητα στην Ελλάδα" : "SMH Real Estate - Properties in Greece",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/${lang}/properties?location={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(searchActionSchema, null, 2)
      }}
    />
  )
}
