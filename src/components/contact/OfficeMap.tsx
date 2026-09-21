'use client'

import dynamic from 'next/dynamic'
import { BUSINESS } from '@/lib/seo/business'

const MapInner = dynamic(() => import('./OfficeMapInner').then((m) => m.OfficeMapInner), {
  ssr: false,
  loading: () => <div className="h-72 rounded-lg bg-gray-100 border border-gray-200" aria-hidden />,
})

/** Map of the real office location (Google Business Profile pin). Tiles from OpenFreeMap; no Google embed, no CSP change. */
export function OfficeMap({ label }: { label: string }) {
  return (
    <div>
      <MapInner latitude={BUSINESS.geo.latitude} longitude={BUSINESS.geo.longitude} label={label} />
      <a href={BUSINESS.mapUrl} target="_blank" rel="noopener" className="inline-block mt-3 text-sm text-accent-blue hover:underline">
        Google Maps →
      </a>
    </div>
  )
}
