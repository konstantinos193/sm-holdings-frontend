import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ServicesOverview } from '@/components/incanto/ServicesOverview'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el' || lang === 'gr'
  const title = isEl ? 'Υπηρεσίες | SMH Real Estate' : 'Services | SMH Real Estate'
  const description = isEl
    ? 'Ανακαλύψτε τις υπηρεσίες μας: διαχείριση ακινήτων, βραχυχρόνιες & μακροχρόνιες μισθώσεις, επενδυτικές συμβουλές και πολλά άλλα στην Ελλάδα.'
    : 'Explore SMH Real Estate services: property management, short-term & long-term rentals, investment consulting, and more across Greece.'
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${lang}/services`, languages: { 'el-GR': `${BASE_URL}/el/services`, 'en-US': `${BASE_URL}/en/services`, 'x-default': `${BASE_URL}/en/services` } },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/services`, type: 'website', locale: isEl ? 'el_GR' : 'en_US', images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params
  
  // Normalize lang parameter
  const normalizedLang = lang === 'el' || lang === 'gr' ? 'el' : 'en'

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <ServicesOverview lang={normalizedLang} />
      </main>
      <Footer />
    </>
  )
}

