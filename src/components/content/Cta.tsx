import Link from 'next/link'
import { localePath, toLocale } from '@/lib/seo/routes'
import { BUSINESS } from '@/lib/seo/business'

/**
 * Journey-specific calls to action (audit: "do not mix all three into the
 * same CTA"). Each one lands on the contact form with the enquiry type
 * pre-selected, except the guest CTA which goes to the direct-booking site.
 */
export type CtaKind = 'owner' | 'seeker' | 'investor' | 'guest' | 'call'

const LABELS: Record<CtaKind, { en: string; el: string }> = {
  owner: { en: 'Request a Property Assessment', el: 'Ζητήστε Αξιολόγηση Ακινήτου' },
  seeker: { en: "Tell Us What You're Looking For", el: 'Πείτε μας τι Ψάχνετε' },
  investor: { en: 'Discuss an Investment', el: 'Συζητήστε μια Επένδυση' },
  guest: { en: 'View Availability at lincanto.gr', el: 'Δείτε Διαθεσιμότητα στο lincanto.gr' },
  call: { en: 'Call +30 2683 022 484', el: 'Καλέστε +30 2683 022 484' },
}

const TYPE_PARAM: Partial<Record<CtaKind, string>> = {
  owner: 'management',
  seeker: 'rent',
  investor: 'investment',
}

export function ctaHref(lang: string, kind: CtaKind): string {
  if (kind === 'guest') return BUSINESS.lincanto.url
  if (kind === 'call') return `tel:${BUSINESS.telephone}`
  return `${localePath(lang, 'contact')}?type=${TYPE_PARAM[kind]}`
}

export function ctaLabel(lang: string, kind: CtaKind): string {
  return LABELS[kind][toLocale(lang)]
}

type Props = {
  lang: string
  primary: CtaKind
  secondary?: CtaKind
  /** dark = on a dark background */
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

export function CtaButtons({ lang, primary, secondary, tone = 'light', align = 'center' }: Props) {
  const primaryCls =
    tone === 'dark'
      ? 'bg-white text-gray-900 hover:bg-gray-100'
      : 'bg-gray-900 text-white hover:bg-gray-800'
  const secondaryCls =
    tone === 'dark'
      ? 'border border-gray-600 text-white hover:bg-gray-800'
      : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors'

  const render = (kind: CtaKind, cls: string) => {
    const href = ctaHref(lang, kind)
    const external = kind === 'guest'
    return external ? (
      <a key={kind} href={href} target="_blank" rel="noopener" className={`${base} ${cls}`}>{ctaLabel(lang, kind)}</a>
    ) : kind === 'call' ? (
      <a key={kind} href={href} className={`${base} ${cls}`}>{ctaLabel(lang, kind)}</a>
    ) : (
      <Link key={kind} href={href} className={`${base} ${cls}`}>{ctaLabel(lang, kind)}</Link>
    )
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      {render(primary, primaryCls)}
      {secondary && render(secondary, secondaryCls)}
    </div>
  )
}
