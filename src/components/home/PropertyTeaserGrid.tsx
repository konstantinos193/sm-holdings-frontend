import Link from 'next/link'
import type { Property } from '@/types/property'
import { propertyPath, toLocale } from '@/lib/seo/routes'

const TYPE_LABEL: Record<string, { en: string; el: string }> = {
  APARTMENT: { en: 'Apartment', el: 'Διαμέρισμα' },
  HOUSE: { en: 'House', el: 'Σπίτι' },
  ROOM: { en: 'Room', el: 'Δωμάτιο' },
  COMMERCIAL: { en: 'Commercial', el: 'Επαγγελματικός χώρος' },
  LUXURY: { en: 'Luxury', el: 'Πολυτελές' },
}

/**
 * Server-rendered, crawlable property cards. Each card is a real link to the
 * property page (the previous client cards had no link at all).
 */
export function PropertyTeaserGrid({ properties, lang }: { properties: Property[]; lang: string }) {
  const locale = toLocale(lang)
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((p) => {
        const title = locale === 'el' ? p.titleGr || p.titleEn : p.titleEn
        const image = p.images?.find((i) => i && !i.includes('logo')) ?? p.images?.[0]
        const type = TYPE_LABEL[p.type]?.[locale] ?? p.type
        return (
          <li key={p.id}>
            <Link href={propertyPath(locale, p)} className="group block h-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-400 hover:shadow-md transition-all">
              <div className="relative h-44 bg-gray-100">
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image} alt={`${title}, ${p.city}`} className="w-full h-full object-cover" loading="lazy" width={640} height={352} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">{type}</div>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{type} · {p.city}</p>
                <h3 className="font-semibold text-gray-900 group-hover:underline underline-offset-2">{title}</h3>
                {p.bedrooms ? (
                  <p className="text-sm text-gray-600 mt-1">
                    {p.bedrooms} {locale === 'el' ? 'υ/δ' : 'bed'} · {p.bathrooms} {locale === 'el' ? 'μπάνια' : 'bath'}
                    {p.maxGuests ? ` · ${p.maxGuests} ${locale === 'el' ? 'άτομα' : 'guests'}` : ''}
                  </p>
                ) : null}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
