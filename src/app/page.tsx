import { permanentRedirect } from 'next/navigation'

// Normally unreachable: middleware.ts already redirects `/` to a locale.
// Kept as a safety net and aligned with the hreflang x-default (`/en`).
export default function RootPage() {
  permanentRedirect('/en')
}
