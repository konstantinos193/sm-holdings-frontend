import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './header-footer.css'
import { HtmlLangUpdater } from '@/components/layout/HtmlLangUpdater'
import { LanguageProvider } from '@/lib/contexts/LanguageContext'
import { StatsProvider } from '@/lib/contexts/StatsContext'
import { AuthInitializer } from '@/components/auth/AuthInitializer'
import { getGlobalSEOKeywords } from '@/lib/seo-keywords'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: 'SMH Real Estate | Ακίνητα στην Ελλάδα',
    template: '%s | SMH Real Estate',
  },
  description:
    'SMH Real Estate — Αξιόπιστη πλατφόρμα ακινήτων στην Ελλάδα. Μακροχρόνιες & βραχυχρόνιες μισθώσεις, διαχείριση ακινήτων, επενδύσεις. Trusted Greek real estate: long-term & short-term rentals, property management.',
  keywords: [...getGlobalSEOKeywords('en'), ...getGlobalSEOKeywords('el')],
  authors: [{ name: 'SMH Real Estate', url: 'https://smholdings.gr' }],
  creator: 'SMH Real Estate',
  publisher: 'SMH Real Estate',
  category: 'Real Estate',
  classification: 'Real Estate / Property Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smholdings.gr'),
  alternates: {
    canonical: 'https://smholdings.gr',
    languages: {
      'el-GR': 'https://smholdings.gr/el',
      'en-US': 'https://smholdings.gr/en',
      'x-default': 'https://smholdings.gr/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['el_GR'],
    url: 'https://smholdings.gr',
    title: 'SMH Real Estate | Properties in Greece',
    description:
      'Discover properties across Greece. Long-term & short-term rentals, property management, and investment consulting — in English and Greek.',
    siteName: 'SMH Real Estate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SMH Real Estate — Properties in Greece',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@smholdings',
    title: 'SMH Real Estate | Properties in Greece',
    description:
      'Discover properties across Greece. Long-term & short-term rentals, property management, and investment consulting.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider initialLanguage="en">
          <StatsProvider>
            <AuthInitializer />
            <HtmlLangUpdater />
            {children}
          </StatsProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
