import type { Metadata } from 'next'
import { BUSINESS, BASE_URL } from './business'
import { pageAlternates, toLocale, type PageKey } from './routes'

type PageMetadataInput = {
  lang: string
  key: PageKey
  /** Full title, brand included once, e.g. "Property Management in Preveza, Greece | SM Holdings" */
  title: string
  description: string
  /** Set for pages that must stay out of the index (careers without openings, utility pages). */
  noindex?: boolean
  ogImage?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export const OG_IMAGE = `${BASE_URL}/og-image.png`

/**
 * One helper for every static page: absolute title (the layout template would
 * otherwise duplicate the brand), self-referencing canonical, reciprocal
 * hreflang, Open Graph and Twitter cards.
 */
export function pageMetadata(input: PageMetadataInput): Metadata {
  const locale = toLocale(input.lang)
  const alternates = pageAlternates(locale, input.key)
  const image = input.ogImage ?? OG_IMAGE

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates,
    ...(input.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: input.title,
      description: input.description,
      url: alternates.canonical,
      type: input.type ?? 'website',
      siteName: BUSINESS.name,
      locale: locale === 'el' ? 'el_GR' : 'en_US',
      alternateLocale: locale === 'el' ? ['en_US'] : ['el_GR'],
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.type === 'article' && input.publishedTime
        ? { publishedTime: input.publishedTime, modifiedTime: input.modifiedTime ?? input.publishedTime, authors: [BUSINESS.name] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  }
}
