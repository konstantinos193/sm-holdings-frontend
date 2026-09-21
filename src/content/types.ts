import type { ContentSection } from '@/components/content/ContentPage'
import type { CtaKind } from '@/components/content/Cta'
import type { FAQItem } from '@/components/seo/FAQSchema'
import type { PageKey } from '@/lib/seo/routes'

export type Locale = 'en' | 'el'
export type Localized<T> = Record<Locale, T>

export type RelatedRef = { key: PageKey; title: string; text?: string }

export type PageContent = {
  metaTitle: string
  metaDescription: string
  breadcrumb: string
  h1: string
  intro: string
  eyebrow?: string
  heroCta?: { primary: CtaKind; secondary?: CtaKind }
  sections: ContentSection[]
  faq?: { title: string; items: FAQItem[] }
  related?: { title: string; links: RelatedRef[] }
  closing?: { title: string; text: string; primary: CtaKind; secondary?: CtaKind }
}

export type ArticleContent = PageContent & {
  /** ISO date; shown on the page and used in Article schema */
  datePublished: string
  dateModified?: string
  summary: string
}

export const COMMON = {
  home: { en: 'Home', el: 'Αρχική' },
  faqTitle: { en: 'Frequently asked questions', el: 'Συχνές ερωτήσεις' },
  relatedTitle: { en: 'Related pages', el: 'Σχετικές σελίδες' },
  closingOwner: {
    en: { title: 'Own a property in Preveza?', text: 'Tell us where it is and how you would like to rent it. We will visit, assess it and send you a written management proposal.' },
    el: { title: 'Έχετε ακίνητο στην Πρέβεζα;', text: 'Πείτε μας πού βρίσκεται και πώς θέλετε να το ενοικιάσετε. Θα το επισκεφθούμε, θα το αξιολογήσουμε και θα σας στείλουμε γραπτή πρόταση διαχείρισης.' },
  },
} as const
