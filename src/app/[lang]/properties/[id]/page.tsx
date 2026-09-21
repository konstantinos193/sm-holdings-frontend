import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyDetailContent } from '@/components/properties/detail/PropertyDetailContent'
import { PropertyDetailSkeleton } from '@/components/properties/detail/PropertyDetailSkeleton'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { PropertySchema } from '@/components/seo/PropertySchema'
import { serverFetch } from '@/lib/api/server'
import type { Property } from '@/types/property'
import { BUSINESS } from '@/lib/seo/business'
import { OG_IMAGE } from '@/lib/seo/metadata'
import { absoluteUrl, localePath, parsePropertyId, propertyAlternates, propertyPath, propertySlug, toLocale } from '@/lib/seo/routes'

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
  const { lang, id: param } = await params
  const locale = toLocale(lang)
  const isEl = locale === 'el'
  const property = await fetchProperty(parsePropertyId(param))

  if (!property) {
    return {
      title: isEl ? 'Ακίνητο δεν βρέθηκε' : 'Property not found',
      robots: { index: false, follow: false },
    }
  }

  const title = isEl ? property.titleGr || property.titleEn : property.titleEn
  const fullTitle = `${title}, ${property.city} | ${BUSINESS.name}`
  const description =
    (isEl ? property.descriptionGr : property.descriptionEn)?.slice(0, 160).trim() ||
    (isEl
      ? `${title} — ${property.bedrooms} υπνοδωμάτια, ${property.bathrooms} μπάνια στην ${property.city}. Ενοικίαση από €${property.basePrice}/νύχτα.`
      : `${title} — ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms in ${property.city}. Rental from €${property.basePrice}/night.`)

  const realImages = (property.images ?? []).filter((img) => /^https?:\/\//.test(img) && !img.includes('logo'))
  const images = realImages.length
    ? realImages.slice(0, 3).map((img) => ({ url: img, width: 1200, height: 800, alt: `${title}, ${property.city}` }))
    : [{ url: OG_IMAGE, width: 1200, height: 630, alt: fullTitle }]

  const alternates = propertyAlternates(property, locale)

  return {
    title: { absolute: fullTitle },
    description,
    alternates,
    openGraph: {
      title: fullTitle,
      description,
      url: alternates.canonical,
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      alternateLocale: isEl ? ['en_US'] : ['el_GR'],
      images,
      siteName: BUSINESS.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [images[0].url],
    },
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { lang, id: param } = await params
  const locale = toLocale(lang)
  const isEl = locale === 'el'
  const id = parsePropertyId(param)
  const property = await fetchProperty(id)
  if (!property) notFound()

  // One canonical URL per property: `/properties/<slug>-<id>`. A bare id or a
  // stale slug is permanently redirected to the current slug.
  const expected = propertySlug(property, locale)
  if (param !== expected) {
    permanentRedirect(propertyPath(locale, property))
  }

  const pageUrl = absoluteUrl(propertyPath(locale, property))
  const title = isEl ? property.titleGr || property.titleEn : property.titleEn
  const breadcrumbItems = [
    { name: isEl ? 'Αρχική' : 'Home', url: absoluteUrl(localePath(locale, 'home')) },
    { name: isEl ? 'Ακίνητα' : 'Properties', url: absoluteUrl(localePath(locale, 'properties')) },
    { name: title, url: pageUrl },
  ]

  return (
    <>
      <OrganizationSchema lang={locale} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <PropertySchema
        id={property.id}
        pageUrl={pageUrl}
        title={title}
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
        lang={locale}
        rating={property.averageRating}
        reviewCount={property.reviewCount}
      />
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <Suspense fallback={<PropertyDetailSkeleton />}>
          <PropertyDetailContent lang={locale} propertyId={property.id} />
        </Suspense>
        {/* Links up to the location hub and the management context (audit: property pages link to parent location) */}
        <nav aria-label="Related" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li><Link href={localePath(locale, 'properties')} className="text-accent-blue hover:underline">{isEl ? 'Όλα τα ακίνητα' : 'All properties'}</Link></li>
            <li><Link href={localePath(locale, 'preveza')} className="text-accent-blue hover:underline">{isEl ? 'Ακίνητα στην Πρέβεζα' : 'Property in Preveza'}</Link></li>
            <li><Link href={localePath(locale, 'hospitality')} className="text-accent-blue hover:underline">{isEl ? "Πώς λειτουργούμε τα L'Incanto Apartments" : "How we operate L'Incanto Apartments"}</Link></li>
            <li><Link href={localePath(locale, 'owners')} className="text-accent-blue hover:underline">{isEl ? 'Έχετε παρόμοιο ακίνητο;' : 'Own a similar property?'}</Link></li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  )
}
