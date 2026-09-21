import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/content/Breadcrumbs'
import { careers } from '@/content/company'
import { COMMON } from '@/content/types'
import { pageMetadata } from '@/lib/seo/metadata'
import { localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string }> }

// No open positions -> the page stays reachable for people but out of the
// index (and out of the sitemap) until a real vacancy is published here with
// JobPosting structured data.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = careers[toLocale(lang)]
  return pageMetadata({ lang, key: 'careers', title: c.metaTitle, description: c.metaDescription, noindex: true })
}

export default async function CareersPage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = careers[locale]

  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs items={[{ name: COMMON.home[locale], href: localePath(locale, 'home') }, { name: c.h1, href: localePath(locale, 'careers') }]} />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>
        </section>
        <section className="py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{c.seasonal.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{c.seasonal.text}</p>
            <Link href={`${localePath(locale, 'contact')}?type=other`} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">{c.cta}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
