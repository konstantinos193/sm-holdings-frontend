import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SMH Real Estate',
    short_name: 'SMH',
    description: 'Trusted real estate platform in Greece — long-term & short-term rentals, property management, and investment consulting.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a5f',
    orientation: 'portrait-primary',
    lang: 'en',
    icons: [
      {
        src: '/logoetc.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logoetc.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['real estate', 'travel', 'business'],
    screenshots: [],
  }
}
