import type { Metadata } from 'next'
import { IncantoHeader } from '@/components/incanto/IncantoHeader'
import { IncantoFooter } from '@/components/incanto/IncantoFooter'
import { IncantoHero } from '@/components/incanto/IncantoHero'
import { IncantoFacilities } from '@/components/incanto/IncantoFacilities'
import { IncantoBooking } from '@/components/incanto/IncantoBooking'
import { getSEOKeywords } from '@/lib/seo-keywords'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el' || lang === 'gr'
  const title = isEl ? 'Incanto | Πολυτελής Κατοικία | SMH Real Estate' : 'Incanto | Luxury Property | SMH Real Estate'
  const description = isEl
    ? 'Ανακαλύψτε το Incanto — μια εξαιρετική πολυτελής κατοικία στην Ελλάδα. Βιώστε μοναδική πολυτέλεια και άνεση με υπηρεσίες υψηλού επιπέδου.'
    : 'Discover Incanto — an exceptional luxury property in Greece. Experience unparalleled comfort and elegance with premium hospitality services.'
  return {
    title,
    description,
    keywords: getSEOKeywords('incanto', isEl ? 'el' : 'en'),
    alternates: { canonical: `${BASE_URL}/${lang}/incanto`, languages: { 'el-GR': `${BASE_URL}/el/incanto`, 'en-US': `${BASE_URL}/en/incanto`, 'x-default': `${BASE_URL}/en/incanto` } },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}/incanto`,
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${BASE_URL}/og-image.png`] },
  }
}

export default async function IncantoPage({ params }: Props) {
  const { lang } = await params
  
  // Normalize lang parameter to match component expectations
  const normalizedLang = lang === 'el' || lang === 'gr' ? 'el' : 'en'

  return (
    <>
      <IncantoHeader />
      <main className="flex-1 min-h-screen">
        <IncantoHero lang={normalizedLang}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <IncantoBooking lang={normalizedLang} variant="overlay" />
          </div>
        </IncantoHero>
        <IncantoFacilities lang={normalizedLang} />
      </main>
      <IncantoFooter />
    </>
  )
}

