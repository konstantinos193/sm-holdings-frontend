'use client'

import { memo } from 'react'
import { Property } from '@/types/property'
import { PropertyCard } from './PropertyCard'
import { useTranslation } from '@/lib/hooks/useTranslation'
import Link from 'next/link'
import { propertyPath } from '@/lib/seo/routes'

interface PropertyListProps {
  properties: Property[]
  lang?: string
}

const PropertyListComponent = ({ properties, lang = 'en' }: PropertyListProps) => {
  const t = useTranslation()

  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">{t('results.noResults')}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {t('results.noResultsDescription')}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Link key={property.id} href={propertyPath(lang, property)} className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue">
          <PropertyCard property={property} lang={lang} />
        </Link>
      ))}
    </div>
  )
}

export const PropertyList = memo(PropertyListComponent)
