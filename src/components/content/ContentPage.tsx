import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FAQSchema, type FAQItem } from '@/components/seo/FAQSchema'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'
import { CtaButtons, type CtaKind } from './Cta'

export type ContentSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  /** Small cards (title + text), rendered in a grid */
  cards?: { title: string; text: string; href?: string }[]
  /** Numbered steps */
  steps?: { title: string; text: string }[]
  /** Definition rows (label / value) */
  facts?: { label: string; value: string; href?: string }[]
  image?: { src: string; alt: string; width: number; height: number }
  tone?: 'white' | 'gray'
}

export type RelatedLink = { title: string; text?: string; href: string }

export type ContentPageProps = {
  lang: string
  breadcrumbs: Crumb[]
  h1: string
  intro: string
  /** Optional line under the H1 shown as an eyebrow (e.g. published date on articles) */
  eyebrow?: string
  heroCta?: { primary: CtaKind; secondary?: CtaKind }
  sections: ContentSection[]
  faq?: { title: string; items: FAQItem[] }
  related?: { title: string; links: RelatedLink[] }
  closing?: { title: string; text: string; primary: CtaKind; secondary?: CtaKind }
  /** Extra JSON-LD or other head-level nodes */
  schema?: ReactNode
  /** Rendered between hero and sections (e.g. property list) */
  children?: ReactNode
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

/**
 * Server-rendered template for service, location, hospitality and article
 * pages: everything Google needs (H1, copy, FAQ, breadcrumbs, links) is in the
 * initial HTML. Content objects live in src/content.
 */
export function ContentPage(p: ContentPageProps) {
  return (
    <>
      {p.schema}
      {p.faq && <FAQSchema faqs={p.faq.items} />}
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6"><Breadcrumbs items={p.breadcrumbs} /></div>
            <div className="max-w-3xl">
              {p.eyebrow && <p className="text-sm text-gray-500 mb-3">{p.eyebrow}</p>}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{p.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{p.intro}</p>
              {p.heroCta && (
                <div className="mt-8">
                  <CtaButtons lang={p.lang} primary={p.heroCta.primary} secondary={p.heroCta.secondary} align="left" />
                </div>
              )}
            </div>
          </div>
        </section>

        {p.children}

        {p.sections.map((s, i) => {
          const gray = s.tone ? s.tone === 'gray' : i % 2 === 1
          return (
            <section key={s.heading} className={`py-14 lg:py-20 ${gray ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={s.image ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-start' : 'max-w-4xl'}>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{s.heading}</h2>
                    {s.paragraphs?.map((para) => (
                      <p key={para.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                    ))}
                    {s.bullets && (
                      <ul className="space-y-3 mt-4">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-gray-700"><CheckIcon /><span>{b}</span></li>
                        ))}
                      </ul>
                    )}
                    {s.facts && (
                      <dl className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
                        {s.facts.map((f) => (
                          <div key={f.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-3">
                            <dt className="text-sm font-medium text-gray-500">{f.label}</dt>
                            <dd className="sm:col-span-2 text-gray-900">
                              {f.href ? <a href={f.href} className="text-accent-blue hover:underline" target={f.href.startsWith('http') ? '_blank' : undefined} rel={f.href.startsWith('http') ? 'noopener' : undefined}>{f.value}</a> : f.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                  {s.image && (
                    <Image src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} className="rounded-lg w-full h-auto object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                  )}
                </div>
                {s.cards && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {s.cards.map((c) => {
                      const inner = (
                        <>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
                        </>
                      )
                      return c.href ? (
                        <Link key={c.title} href={c.href} className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all">{inner}</Link>
                      ) : (
                        <div key={c.title} className="bg-white border border-gray-200 rounded-lg p-6">{inner}</div>
                      )
                    })}
                  </div>
                )}
                {s.steps && (
                  <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {s.steps.map((st, idx) => (
                      <li key={st.title} className="bg-white border border-gray-200 rounded-lg p-6">
                        <span className="text-sm font-semibold text-accent-blue">{String(idx + 1).padStart(2, '0')}</span>
                        <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{st.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{st.text}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </section>
          )
        })}

        {p.faq && (
          <section className="py-14 lg:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">{p.faq.title}</h2>
              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {p.faq.items.map((f) => (
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
        )}

        {p.related && p.related.links.length > 0 && (
          <section className="py-14 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{p.related.title}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {p.related.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block h-full bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors">
                      <span className="font-semibold text-gray-900">{l.title}</span>
                      {l.text && <span className="block text-sm text-gray-600 mt-1">{l.text}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.closing && (
          <section className="py-14 lg:py-20 bg-gray-900 text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{p.closing.title}</h2>
              <p className="text-lg text-gray-300 mb-8">{p.closing.text}</p>
              <CtaButtons lang={p.lang} primary={p.closing.primary} secondary={p.closing.secondary} tone="dark" />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
