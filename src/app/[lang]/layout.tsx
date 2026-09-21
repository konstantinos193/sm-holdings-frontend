import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/contexts/LanguageContext'
import { BUSINESS } from '@/lib/seo/business'
import { OG_IMAGE } from '@/lib/seo/metadata'
import { toLocale } from '@/lib/seo/routes'

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const locale = toLocale(lang)
  const isEl = locale === 'el'

  const title = isEl
    ? 'Διαχείριση Ακινήτων & Ακίνητα στην Πρέβεζα | SM Holdings'
    : 'Property Management & Real Estate in Preveza | SM Holdings'
  const description = isEl
    ? 'Η SM Holdings παρέχει διαχείριση ακινήτων, λειτουργία βραχυχρόνιων μισθώσεων, υπηρεσίες ακινήτων και φιλοξενίας στην Πρέβεζα.'
    : 'SM Holdings provides property management, short-term rental operations, real estate and hospitality services in Preveza, Greece.'

  return {
    title: {
      default: title,
      template: `%s | ${BUSINESS.name}`,
    },
    description,
    // canonical + hreflang are declared per page (see comment in app/layout.tsx)
    openGraph: {
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      alternateLocale: isEl ? ['en_US'] : ['el_GR'],
      title,
      description,
      siteName: BUSINESS.name,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)

  return (
    <LanguageProvider initialLanguage={locale}>
      <div className="min-h-screen flex flex-col" lang={locale}>
        {children}
      </div>
    </LanguageProvider>
  )
}
