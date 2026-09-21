import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './header-footer.css'
import { HtmlLangUpdater } from '@/components/layout/HtmlLangUpdater'
import { LanguageProvider } from '@/lib/contexts/LanguageContext'
import { StatsProvider } from '@/lib/contexts/StatsContext'
import { AuthInitializer } from '@/components/auth/AuthInitializer'
import { WebVitalsReport } from '@/components/seo/WebVitalsReport'
import { reportWebVitals } from '@/lib/web-vitals'
import { MobileOptimization } from '@/components/seo/MobileOptimization'
import { GoogleAnalytics } from '@/components/seo/GoogleAnalytics'
import { BASE_URL, BUSINESS } from '@/lib/seo/business'

// Greek subset: without it Greek pages render in a fallback font until the
// browser fetches glyphs Inter does not ship in the latin subset (CLS + FOUT).
const inter = Inter({ subsets: ['latin', 'greek'], display: 'swap' })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const DEFAULT_TITLE = 'Property Management & Real Estate in Preveza | SM Holdings'
const DEFAULT_DESCRIPTION =
  'SM Holdings provides property management, short-term rental operations, real estate and hospitality services in Preveza, Greece.'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${BUSINESS.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: BASE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.legalName,
  category: 'Real Estate',
  formatDetection: { email: false, address: false, telephone: false },
  // No `alternates` here on purpose: canonical + hreflang are set per page.
  // A layout-level canonical would be inherited by any page that forgets its
  // own and silently tell Google that page is a duplicate of the home page.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['el_GR'],
    url: BASE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: BUSINESS.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SM Holdings — Property Management & Real Estate in Preveza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/logoetc.png', type: 'image/png' }],
    shortcut: '/logoetc.png',
    apple: [{ url: '/logoetc.png', sizes: '180x180', type: 'image/png' }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Report Web Vitals
  if (typeof window !== 'undefined') {
    reportWebVitals()
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleAnalytics />
        <MobileOptimization>
          <LanguageProvider initialLanguage="en">
            <StatsProvider>
              <AuthInitializer />
              <HtmlLangUpdater />
              {children}
              <WebVitalsReport />
            </StatsProvider>
          </LanguageProvider>
        </MobileOptimization>
      </body>
    </html>
  )
}
