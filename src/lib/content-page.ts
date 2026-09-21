import type { Metadata } from 'next'
import type { ContentPageProps } from '@/components/content/ContentPage'
import type { Crumb } from '@/components/content/Breadcrumbs'
import { pageMetadata } from '@/lib/seo/metadata'
import { localePath, toLocale, type PageKey } from '@/lib/seo/routes'
import { COMMON, type Localized, type PageContent } from '@/content/types'

type Options = {
  /** Parent pages for the breadcrumb trail (in order, excluding Home and the page itself) */
  parents?: PageKey[]
  parentLabels?: Partial<Record<PageKey, Localized<string>>>
  noindex?: boolean
}

export function contentMetadata(lang: string, key: PageKey, content: Localized<PageContent>, options: Options = {}): Metadata {
  const c = content[toLocale(lang)]
  return pageMetadata({ lang, key, title: c.metaTitle, description: c.metaDescription, noindex: options.noindex })
}

export function contentPageProps(lang: string, key: PageKey, content: Localized<PageContent>, options: Options = {}): Omit<ContentPageProps, 'schema' | 'children'> {
  const locale = toLocale(lang)
  const c = content[locale]

  const breadcrumbs: Crumb[] = [{ name: COMMON.home[locale], href: localePath(locale, 'home') }]
  for (const parent of options.parents ?? []) {
    const label = options.parentLabels?.[parent]?.[locale] ?? PARENT_LABELS[parent]?.[locale] ?? parent
    breadcrumbs.push({ name: label, href: localePath(locale, parent) })
  }
  breadcrumbs.push({ name: c.breadcrumb, href: localePath(locale, key) })

  return {
    lang: locale,
    breadcrumbs,
    h1: c.h1,
    intro: c.intro,
    eyebrow: c.eyebrow,
    heroCta: c.heroCta,
    sections: c.sections,
    faq: c.faq,
    related: c.related
      ? {
          title: c.related.title,
          links: c.related.links.map((l) => ({ title: l.title, text: l.text, href: localePath(locale, l.key) })),
        }
      : undefined,
    closing: c.closing,
  }
}

/** Default breadcrumb labels for hub pages. */
export const PARENT_LABELS: Partial<Record<PageKey, Localized<string>>> = {
  propertyManagement: { en: 'Property Management', el: 'Διαχείριση Ακινήτων' },
  realEstate: { en: 'Real Estate', el: 'Ακίνητα' },
  locations: { en: 'Locations', el: 'Περιοχές' },
  insights: { en: 'Insights', el: 'Άρθρα' },
  services: { en: 'Services', el: 'Υπηρεσίες' },
}
