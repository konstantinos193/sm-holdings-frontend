import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/content/Breadcrumbs'
import { CtaButtons } from '@/components/content/Cta'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { ARTICLES, ARTICLE_KEYS, insightsIndex } from '@/content/insights'
import { COMMON } from '@/content/types'
import { pageMetadata } from '@/lib/seo/metadata'
import { localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = insightsIndex[toLocale(lang)]
  return pageMetadata({ lang, key: 'insights', title: c.metaTitle, description: c.metaDescription })
}

export default async function InsightsIndexPage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = insightsIndex[locale]
  const dateFmt = new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <OrganizationSchema lang={locale} />
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs items={[{ name: COMMON.home[locale], href: localePath(locale, 'home') }, { name: locale === 'el' ? 'Άρθρα' : 'Insights', href: localePath(locale, 'insights') }]} />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ARTICLE_KEYS.map((key) => {
                const a = ARTICLES[key][locale]
                return (
                  <li key={key}>
                    <Link href={localePath(locale, key)} className="block h-full bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all">
                      <p className="text-xs text-gray-500 mb-2">{dateFmt.format(new Date(a.datePublished))}</p>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{a.h1}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed">{a.summary}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{COMMON.closingOwner[locale].title}</h2>
            <p className="text-gray-300 mb-8">{COMMON.closingOwner[locale].text}</p>
            <CtaButtons lang={locale} primary="owner" secondary="call" tone="dark" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
