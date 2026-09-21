import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/content/Breadcrumbs'
import { ContactForm } from '@/components/contact/ContactForm'
import { OfficeMap } from '@/components/contact/OfficeMap'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { COMMON } from '@/content/types'
import { BUSINESS } from '@/lib/seo/business'
import { pageMetadata } from '@/lib/seo/metadata'
import { localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string }> }

const C = {
  en: {
    metaTitle: 'Contact SM Holdings | Preveza, Greece',
    metaDescription: 'Contact SM Holdings in Filippiada, Preveza: address, phone, mobile, email, office hours (Tuesday & Thursday 9:00–13:00), company details and an enquiry form for owners, tenants, buyers and investors.',
    breadcrumb: 'Contact',
    h1: 'Contact SM Holdings',
    intro: 'One office, one phone number, for owners, tenants, guests and investors in the Preveza area. Use the form and tell us what your enquiry is about — it goes straight to the people who will handle it.',
    details: 'Office and company details',
    formTitle: 'Send an enquiry',
    map: 'Office location: A. Panagouli 2, Filippiada',
    rows: {
      legal: 'Legal name', address: 'Address', phone: 'Phone', mobile: 'Mobile', email: 'Email', hours: 'Office hours', area: 'Service area', response: 'How we respond', gemi: 'ΓΕΜΗ', vat: 'VAT',
    },
    hours: 'Tuesday & Thursday, 9:00–13:00. Visits outside these hours by appointment.',
    area: 'Preveza town and the Ionian coast north of it; Filippiada and the Ziros villages. Elsewhere in Greece case by case.',
    response: 'We answer email and phone messages ourselves. Property visits are arranged by phone.',
    guests: "Guests of L'Incanto Apartments: bookings and stay questions go to lincanto.gr.",
  },
  el: {
    metaTitle: 'Επικοινωνία με την SM Holdings | Πρέβεζα',
    metaDescription: 'Επικοινωνήστε με την SM Holdings στη Φιλιππιάδα Πρέβεζας: διεύθυνση, τηλέφωνο, κινητό, email, ωράριο γραφείου (Τρίτη & Πέμπτη 9:00–13:00), στοιχεία εταιρείας και φόρμα για ιδιοκτήτες, ενοικιαστές, αγοραστές και επενδυτές.',
    breadcrumb: 'Επικοινωνία',
    h1: 'Επικοινωνία με την SM Holdings',
    intro: 'Ένα γραφείο, ένα τηλέφωνο, για ιδιοκτήτες, ενοικιαστές, επισκέπτες και επενδυτές στην περιοχή της Πρέβεζας. Χρησιμοποιήστε τη φόρμα και πείτε μας τι αφορά το αίτημά σας — πηγαίνει απευθείας στους ανθρώπους που θα το χειριστούν.',
    details: 'Στοιχεία γραφείου και εταιρείας',
    formTitle: 'Στείλτε αίτημα',
    map: 'Τοποθεσία γραφείου: Α. Παναγούλη 2, Φιλιππιάδα',
    rows: {
      legal: 'Επωνυμία', address: 'Διεύθυνση', phone: 'Τηλέφωνο', mobile: 'Κινητό', email: 'Email', hours: 'Ωράριο γραφείου', area: 'Περιοχή εξυπηρέτησης', response: 'Πώς απαντάμε', gemi: 'ΓΕΜΗ', vat: 'ΑΦΜ',
    },
    hours: 'Τρίτη & Πέμπτη, 9:00–13:00. Επισκέψεις εκτός ωραρίου κατόπιν ραντεβού.',
    area: 'Πόλη της Πρέβεζας και η ακτή του Ιονίου βόρειά της· Φιλιππιάδα και τα χωριά του Ζηρού. Αλλού στην Ελλάδα κατά περίπτωση.',
    response: 'Απαντάμε οι ίδιοι σε email και τηλεφωνικά μηνύματα. Οι επισκέψεις σε ακίνητα κανονίζονται τηλεφωνικά.',
    guests: "Επισκέπτες των L'Incanto Apartments: κρατήσεις και ερωτήσεις διαμονής στο lincanto.gr.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const c = C[toLocale(lang)]
  return pageMetadata({ lang, key: 'contact', title: c.metaTitle, description: c.metaDescription })
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params
  const locale = toLocale(lang)
  const c = C[locale]
  const addr = locale === 'el' ? BUSINESS.addressEl : BUSINESS.address

  const rows: { label: string; value: string; href?: string }[] = [
    { label: c.rows.legal, value: `${BUSINESS.legalName} (${BUSINESS.name})` },
    { label: c.rows.address, value: `${addr.streetAddress}, ${addr.addressLocality} ${addr.postalCode}, ${addr.addressRegion}` },
    { label: c.rows.phone, value: '+30 2683 022 484', href: `tel:${BUSINESS.telephone}` },
    { label: c.rows.mobile, value: '+30 698 413 2555', href: `tel:${BUSINESS.mobile}` },
    { label: c.rows.email, value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
    { label: c.rows.hours, value: c.hours },
    { label: c.rows.area, value: c.area },
    { label: c.rows.response, value: c.response },
    { label: c.rows.gemi, value: BUSINESS.gemiNumber },
    { label: c.rows.vat, value: BUSINESS.vatID },
  ]

  return (
    <>
      <OrganizationSchema lang={locale} />
      <Header />
      <main className="flex-1 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs items={[{ name: COMMON.home[locale], href: localePath(locale, 'home') }, { name: c.breadcrumb, href: localePath(locale, 'contact') }]} />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{c.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{c.details}</h2>
              <dl className="divide-y divide-gray-200 border-y border-gray-200 mb-8">
                {rows.map((r) => (
                  <div key={r.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-3">
                    <dt className="text-sm font-medium text-gray-500">{r.label}</dt>
                    <dd className="sm:col-span-2 text-gray-900">{r.href ? <a href={r.href} className="text-accent-blue hover:underline">{r.value}</a> : r.value}</dd>
                  </div>
                ))}
              </dl>
              <OfficeMap label={c.map} />
              <p className="text-sm text-gray-500 mt-6">{c.guests} <a href={BUSINESS.lincanto.url} className="text-accent-blue hover:underline" target="_blank" rel="noopener">lincanto.gr</a></p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{c.formTitle}</h2>
              <Suspense fallback={null}>
                <ContactForm lang={locale} />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
