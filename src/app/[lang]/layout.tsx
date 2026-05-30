import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/contexts/LanguageContext'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el'

  const title = isEl
    ? 'SMH Real Estate | Ακίνητα στην Ελλάδα'
    : 'SMH Real Estate | Properties in Greece'

  const description = isEl
    ? 'Αξιόπιστη πλατφόρμα ακινήτων στην Ελλάδα. Μακροχρόνιες & βραχυχρόνιες μισθώσεις, διαχείριση ακινήτων και επενδυτικές ευκαιρίες σε όλη την Ελλάδα.'
    : 'Trusted real estate platform in Greece. Long-term & short-term rentals, property management, and investment opportunities across Greece.'

  const keywords = isEl
    ? [
        'ακίνητα Ελλάδα',
        'ενοικίαση ακινήτου',
        'βραχυχρόνια μίσθωση',
        'μακροχρόνια μίσθωση',
        'διαχείριση ακινήτων',
        'διαμερίσματα Ελλάδα',
        'σπίτια για ενοικίαση',
        'επενδυτικά ακίνητα',
        'SMH Real Estate',
        'smholdings',
      ]
    : [
        'real estate Greece',
        'rent property Greece',
        'short-term rental Greece',
        'long-term rental Greece',
        'property management Greece',
        'vacation rentals Greece',
        'apartments Greece',
        'houses for rent Greece',
        'investment property Greece',
        'SMH Real Estate',
      ]

  return {
    title: {
      default: title,
      template: '%s | SMH Real Estate',
    },
    description,
    keywords,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'el-GR': `${BASE_URL}/el`,
        'en-US': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      alternateLocale: isEl ? ['en_US'] : ['el_GR'],
      url: `${BASE_URL}/${lang}`,
      title,
      description,
      siteName: 'SMH Real Estate',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isEl ? 'SMH Real Estate — Ακίνητα στην Ελλάδα' : 'SMH Real Estate — Properties in Greece',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@smholdings',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params

  return (
    <LanguageProvider initialLanguage={lang as 'en' | 'el'}>
      <div className="min-h-screen flex flex-col" lang={lang}>
        {children}
      </div>
    </LanguageProvider>
  )
}
