import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroWrapper } from '@/components/sections/HeroWrapper'
import { RecentAdditionsSection } from '@/components/sections/RecentAdditionsSection'
import { searchPropertiesServer } from '@/lib/api/properties'
import { Property } from '@/types/property'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { WebsiteSchema } from '@/components/seo/WebsiteSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { getSEOKeywords } from '@/lib/seo-keywords'

const BASE_URL = 'https://smholdings.gr'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEl = lang === 'el'

  const title = isEl
    ? 'SMH Properties Greece | SMH Real Estate — Ακίνητα & Ενοικιάσεις'
    : 'SMH Properties Greece | SMH Real Estate — Properties & Rentals'
  const description = isEl
    ? 'SMH Properties: Εξειδικευμένη ενοικίαση ακινήτων σε όλη την Ελλάδα. Μακροχρόνιες & βραχυχρόνιες μισθώσεις, διαχείριση ακινήτων. SMH Real Estate αξιοπιστία.'
    : 'SMH Properties: Specialized property rentals across Greece. Long-term & short-term rentals, property management. SMH Real Estate trusted service.'

  return {
    title,
    description,
    keywords: getSEOKeywords('home', isEl ? 'el' : 'en'),
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'el-GR': `${BASE_URL}/el`,
        'en-US': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}`,
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${BASE_URL}/og-image.png`] },
  }
}

// Dynamically import sections for optimal performance - matching requirements structure
const IntentionsSection = dynamic(() => import('@/components/sections/IntentionsSection').then(mod => ({ default: mod.IntentionsSection })), { ssr: true })
const ShortTermRentalsSection = dynamic(() => import('@/components/sections/ShortTermRentalsSection').then(mod => ({ default: mod.ShortTermRentalsSection })), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection').then(mod => ({ default: mod.ServicesSection })), { ssr: true })
const PersonalizedRecommendationsSection = dynamic(() => import('@/components/sections/PersonalizedRecommendationsSection').then(mod => ({ default: mod.PersonalizedRecommendationsSection })), { ssr: true })

type Props = {
  params: Promise<{ lang: string }>
}

async function fetchRecentProperties(): Promise<Property[]> {
  try {
    const response = await searchPropertiesServer({
      limit: '8',
      page: '1',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    })
    const allProperties = response.data.properties
    const incantoProperty = allProperties.find(p =>
      p.titleEn.toLowerCase().includes('incanto') ||
      p.titleGr.toLowerCase().includes('incanto')
    )
    if (incantoProperty) {
      return [incantoProperty, ...allProperties.filter(p => p.id !== incantoProperty.id)].slice(0, 8)
    }
    return allProperties.slice(0, 8)
  } catch {
    return []
  }
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params
  const recentProperties = await fetchRecentProperties()
  const isEl = lang === 'el'

  const breadcrumbItems = [
    { name: isEl ? 'Αρχική' : 'Home', url: `https://smholdings.gr/${lang}` },
  ]

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema lang={isEl ? 'el' : 'en'} />
      <Header />
      <main className="flex-1 relative bg-white">
        {/* Landing Page Structure - Optimized for Real Estate Platform */}
        {/* 1. Hero Section - Real estate search form */}
        <HeroWrapper />

        {/* 2. Intentions Section - Rent - Core real estate actions */}
        <IntentionsSection />

        {/* 3. Recent Additions Section - New properties (server-fetched) */}
        <RecentAdditionsSection properties={recentProperties} />

        {/* 4. Short-term Rentals Section - Vacation rentals and short stays */}
        <ShortTermRentalsSection />

        {/* 5. Services Section - Property Management, Investment Consulting, etc. */}
        <ServicesSection />

        {/* 6. Personalized Recommendations - Based on user preferences */}
        <PersonalizedRecommendationsSection />
      </main>
      <Footer />
    </>
  )
}
