import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/content/Breadcrumbs'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { team } from '@/content/company'
import { COMMON } from '@/content/types'
import { BUSINESS } from '@/lib/seo/business'
import { pageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = team[toLocale(lang)]
  return pageMetadata({ lang, key: 'team', title: c.metaTitle, description: c.metaDescription })
}

export default async function TeamPage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = team[locale]
  const pageUrl = absoluteUrl(localePath(locale, 'team'))

  // Person entities for the real founders only (from the ΓΕΜΗ registry).
  const personSchema = BUSINESS.founders.map((f, i) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${pageUrl}#person-${i + 1}`,
    name: locale === 'el' ? f.nameEl : f.name,
    alternateName: locale === 'el' ? f.name : f.nameEl,
    jobTitle: locale === 'el' ? f.roleEl : f.role,
    worksFor: { '@id': BUSINESS.id },
    ...(i === 0 ? { affiliation: { '@id': BUSINESS.id } } : {}),
  }))

  return (
    <>
      <OrganizationSchema lang={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs items={[{ name: COMMON.home[locale], href: localePath(locale, 'home') }, { name: c.breadcrumb, href: localePath(locale, 'team') }]} />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.members.map((m) => (
                <li key={m.name} className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-semibold flex-shrink-0" aria-hidden>
                      {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{m.name}</h2>
                      <p className="text-accent-blue font-medium mb-3">{m.role}</p>
                      <p className="text-gray-600 leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{c.network.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{c.network.text}</p>
            <Link href={localePath(locale, 'contact')} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">{c.contact}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
