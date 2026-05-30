import type { Metadata } from 'next'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyDetailContent } from '@/components/properties/detail/PropertyDetailContent'
import { PropertyDetailSkeleton } from '@/components/properties/detail/PropertyDetailSkeleton'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { PropertySchema } from '@/components/seo/PropertySchema'
import { serverFetch } from '@/lib/api/server'
import type { Property } from '@/types/property'

const BASE_URL = 'https://smholdings.gr'

type Props = {
  params: Promise<{ lang: string; id: string }>
}

async function fetchProperty(id: string): Promise<Property | null> {
  try {
    const res = await serverFetch<{ success: boolean; data: Property }>(`/properties/${id}`)
    return res.success ? res.data : null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params
  const isEl = lang === 'el'
  const property = await fetchProperty(id)

  if (!property) {
    return {
      title: isEl ? 'Ακίνητο δεν βρέθηκε | SMH Real Estate' : 'Property not found | SMH Real Estate',
      robots: { index: false, follow: false },
    }
  }

  const title = isEl ? property.titleGr : property.titleEn
  const description =
    (isEl ? property.descriptionGr : property.descriptionEn)
      ?.slice(0, 160)
      .trim() ||
    (isEl
      ? `${title} — ${property.bedrooms} υπνοδωμάτια, ${property.bathrooms} μπάνια στην ${property.city}. Ενοικίαση από €${property.basePrice}/${isEl ? 'νύχτα' : 'night'}.`
      : `${title} — ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms in ${property.city}. Rental from €${property.basePrice}/night.`)

  const images = property.images.length
    ? property.images.slice(0, 3).map((img) => ({ url: img, width: 1200, height: 800, alt: title }))
    : [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: title }]

  return {
    title: `${title} | SMH Real Estate`,
    description,
    keywords: isEl
      ? [title, property.city, 'ενοικίαση ακινήτου', 'SMH Real Estate', property.type.toLowerCase()]
      : [title, property.city, 'property rental Greece', 'SMH Real Estate', property.type.toLowerCase()],
    alternates: {
      canonical: `${BASE_URL}/${lang}/properties/${id}`,
      languages: {
        'el-GR': `${BASE_URL}/el/properties/${id}`,
        'en-US': `${BASE_URL}/en/properties/${id}`,
        'x-default': `${BASE_URL}/en/properties/${id}`,
      },
    },
    openGraph: {
      title: `${title} | SMH Real Estate`,
      description,
      url: `${BASE_URL}/${lang}/properties/${id}`,
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      alternateLocale: isEl ? ['en_US'] : ['el_GR'],
      images,
      siteName: 'SMH Real Estate',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | SMH Real Estate`,
      description,
      images: [images[0].url],
    },
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { lang, id } = await params
  const property = await fetchProperty(id)

  const isEl = lang === 'el'
  const breadcrumbItems = [
    { name: isEl ? 'Αρχική' : 'Home', url: `${BASE_URL}/${lang}` },
    { name: isEl ? 'Ακίνητα' : 'Properties', url: `${BASE_URL}/${lang}/properties` },
    { name: property ? (isEl ? property.titleGr : property.titleEn) : id, url: `${BASE_URL}/${lang}/properties/${id}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {property && (
        <PropertySchema
          id={property.id}
          title={isEl ? property.titleGr : property.titleEn}
          description={(isEl ? property.descriptionGr : property.descriptionEn) ?? ''}
          address={property.address}
          city={property.city}
          country={property.country}
          pricePerNight={property.basePrice}
          currency={property.currency}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          maxGuests={property.maxGuests}
          images={property.images}
          lang={lang}
          rating={property.averageRating}
          reviewCount={property.reviewCount}
        />
      )}
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <Suspense fallback={<PropertyDetailSkeleton />}>
          <PropertyDetailContent lang={lang} propertyId={id} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
