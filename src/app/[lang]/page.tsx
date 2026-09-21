import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroShell } from '@/components/sections/HeroShell'
import { PropertyTeaserGrid } from '@/components/home/PropertyTeaserGrid'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { WebsiteSchema } from '@/components/seo/WebsiteSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { CtaButtons } from '@/components/content/Cta'
import { searchPropertiesServer } from '@/lib/api/properties'
import { Property } from '@/types/property'
import { home } from '@/content/home'
import { ARTICLES, ARTICLE_KEYS } from '@/content/insights'
import { BUSINESS } from '@/lib/seo/business'
import { pageMetadata } from '@/lib/seo/metadata'
import { absoluteUrl, localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = home[toLocale(lang)]
  return pageMetadata({ lang, key: 'home', title: c.metaTitle, description: c.metaDescription })
}

async function fetchAvailableProperties(): Promise<Property[]> {
  try {
    const response = await searchPropertiesServer({ limit: '8', page: '1', sortBy: 'createdAt', sortOrder: 'desc' })
    return response.data.properties.filter((p) => !p.status || p.status === 'ACTIVE').slice(0, 8)
  } catch {
    return []
  }
}

const CardGrid = ({ lang, cards }: { lang: string; cards: { key: Parameters<typeof localePath>[1]; title: string; text: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {cards.map((c) => (
      <Link key={c.key} href={localePath(lang, c.key)} className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
      </Link>
    ))}
  </div>
)

export default async function HomePage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = home[locale]
  const properties = await fetchAvailableProperties()
  const btn = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors'

  return (
    <>
      <OrganizationSchema lang={locale} />
      <WebsiteSchema lang={locale} />
      <BreadcrumbSchema items={[{ name: locale === 'el' ? 'Αρχική' : 'Home', url: absoluteUrl(localePath(locale, 'home')) }]} />
      <FAQSchema faqs={c.faq.items} />
      <Header />
      <main className="flex-1 relative bg-white">
        {/* 1. Who we are, where, what, and what to do next — all in the first screen */}
        <HeroShell headline={c.h1} tagline={c.intro}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href={localePath(locale, 'owners')} className={`${btn} bg-gray-900 text-white hover:bg-gray-800`}>{c.ctaOwner}</Link>
            <Link href={localePath(locale, 'properties')} className={`${btn} bg-white border border-gray-300 text-gray-900 hover:bg-gray-50`}>{c.ctaSeeker}</Link>
          </div>
          {/* Proof strip — verifiable facts only */}
          <dl className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-left">
            {c.proof.map((p) => (
              <div key={p.label} className="bg-white/80 backdrop-blur rounded-lg border border-gray-200 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-gray-500">{p.label}</dt>
                <dd className="text-sm text-gray-900 mt-1">{p.value}</dd>
              </div>
            ))}
          </dl>
        </HeroShell>

        {/* 2. Property management */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                <Link href={localePath(locale, 'propertyManagement')} className="hover:underline underline-offset-4">{c.pm.title}</Link>
              </h2>
              <p className="text-gray-600 leading-relaxed">{c.pm.text}</p>
            </div>
            <CardGrid lang={locale} cards={c.pm.cards} />
          </div>
        </section>

        {/* 3. Real estate */}
        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                <Link href={localePath(locale, 'realEstate')} className="hover:underline underline-offset-4">{c.re.title}</Link>
              </h2>
              <p className="text-gray-600 leading-relaxed">{c.re.text}</p>
            </div>
            <CardGrid lang={locale} cards={c.re.cards} />
          </div>
        </section>

        {/* 4. Real inventory only */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{c.inventory.title}</h2>
                <p className="text-gray-600">{c.inventory.text}</p>
              </div>
              <Link href={localePath(locale, 'properties')} className="text-accent-blue font-medium hover:underline">{c.inventory.all} →</Link>
            </div>
            {properties.length ? <PropertyTeaserGrid properties={properties} lang={locale} /> : <p className="text-gray-600">{c.inventory.empty}</p>}
          </div>
        </section>

        {/* 5. Hospitality brand */}
        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Image src="/images/lincanto-apartments-chroneika-preveza-building.jpg" alt={locale === 'el' ? "Το κτίριο των L'Incanto Apartments στα Χρονέικα Πρέβεζας" : "L'Incanto Apartments building in Chroneika, Preveza"} width={1600} height={1067} className="rounded-lg w-full h-auto" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{c.hospitality.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{c.hospitality.text}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={localePath(locale, 'hospitality')} className={`${btn} bg-gray-900 text-white hover:bg-gray-800`}>{c.hospitality.link}</Link>
                <a href={BUSINESS.lincanto.url} target="_blank" rel="noopener" className={`${btn} border border-gray-300 text-gray-900 hover:bg-white`}>{c.hospitality.book}</a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why owners choose us */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">{c.why.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.why.items.map((w) => (
                <div key={w.title} className="border-l-4 border-accent-gold pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{w.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Areas served + company */}
        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{c.areas.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{c.areas.text}</p>
              <Link href={localePath(locale, 'preveza')} className="text-accent-blue font-medium hover:underline">{c.areas.link} →</Link>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{c.company.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{c.company.text}</p>
              <Link href={localePath(locale, 'about')} className="text-accent-blue font-medium hover:underline">{c.company.link} →</Link>
            </div>
          </div>
        </section>

        {/* 8. Insights */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{c.insights.title}</h2>
              <Link href={localePath(locale, 'insights')} className="text-accent-blue font-medium hover:underline">{c.insights.link} →</Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ARTICLE_KEYS.slice(0, 3).map((k) => (
                <li key={k}>
                  <Link href={localePath(locale, k)} className="block h-full border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-1">{ARTICLES[k][locale].h1}</h3>
                    <p className="text-sm text-gray-600">{ARTICLES[k][locale].summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{c.faq.title}</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {c.faq.items.map((f) => (
                <details key={f.question} className="group py-5">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900">{f.question}</h3>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl leading-none" aria-hidden>+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contact */}
        <section className="py-14 lg:py-20 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{c.closing.title}</h2>
            <p className="text-lg text-gray-300 mb-8">{c.closing.text}</p>
            <CtaButtons lang={locale} primary="owner" secondary="call" tone="dark" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
