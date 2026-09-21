'use client'

import Map, { Marker } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { PinIcon } from '@/components/icons'

export function OfficeMapInner({ latitude, longitude, label }: { latitude: number; longitude: number; label: string }) {
  return (
    <div className="h-72 rounded-lg overflow-hidden border border-gray-200" role="img" aria-label={label}>
      <Map
        initialViewState={{ latitude, longitude, zoom: 15 }}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
        style={{ width: '100%', height: '100%' }}
        attributionControl={false}
      >
        <Marker longitude={longitude} latitude={latitude}>
          <div className="bg-gray-900 text-white p-2 rounded-full shadow-lg" title={label}>
            <PinIcon className="w-4 h-4" />
          </div>
        </Marker>
      </Map>
    </div>
  )
}
