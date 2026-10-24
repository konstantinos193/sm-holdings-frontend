'use client'

import dynamic from 'next/dynamic'

const PropertyMap = dynamic(() => import('./PropertyMap').then((m) => m.PropertyMap), {
  ssr: false,
  loading: () => <div className="h-64 rounded-lg bg-gray-100 border border-gray-200" aria-hidden />,
})

export default PropertyMap
