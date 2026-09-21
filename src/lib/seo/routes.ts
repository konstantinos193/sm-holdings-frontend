import { routes, dynamicRoutes } from '../../../routes.config.js'

export type Locale = 'en' | 'el'
export type PageKey = keyof typeof routes

export const BASE_URL = 'https://smholdings.gr'
export const LOCALES: Locale[] = ['en', 'el']

export const PAGE_ROUTES = routes as Record<PageKey, { en: string; el: string }>

export function toLocale(lang: string): Locale {
  return lang === 'el' || lang === 'gr' ? 'el' : 'en'
}

/** Public (browser) path for a page key in a locale, e.g. `/el/diaxeirisi-akiniton`. */
export function localePath(lang: string, key: PageKey): string {
  const locale = toLocale(lang)
  const slug = PAGE_ROUTES[key][locale]
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

export function absoluteUrl(path: string): string {
  return `${BASE_URL}${path}`
}

/** Canonical + hreflang set for a static page. */
export function pageAlternates(lang: string, key: PageKey) {
  return {
    canonical: absoluteUrl(localePath(lang, key)),
    languages: {
      'en-US': absoluteUrl(localePath('en', key)),
      'el-GR': absoluteUrl(localePath('el', key)),
      'x-default': absoluteUrl(localePath('en', key)),
    },
  }
}

// ── Property detail URLs ─────────────────────────────────────────────────────
// `/en/properties/lincanto-apartments-preveza-<uuid>` — a readable slug in front
// of the id the backend needs. The id is parsed back out of the last 36 chars.

const UUID_RE = /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i

export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents (Greek tonos, Latin diacritics)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9α-ω]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

export function propertySlug(property: { id: string; titleEn: string; titleGr?: string; city?: string }, lang: string): string {
  const title = toLocale(lang) === 'el' && property.titleGr ? property.titleGr : property.titleEn
  const base = slugify(`${title} ${property.city ?? ''}`) || 'property'
  return `${base}-${property.id}`
}

export function propertyPath(lang: string, property: { id: string; titleEn: string; titleGr?: string; city?: string }): string {
  const locale = toLocale(lang)
  return `/${locale}/${dynamicRoutes.propertyDetail[locale]}/${propertySlug(property, locale)}`
}

/** Extract the backend id from a `[id]` route param that may carry a slug prefix. */
export function parsePropertyId(param: string): string {
  const m = param.match(UUID_RE)
  return m ? m[1] : param
}

export function propertyAlternates(property: { id: string; titleEn: string; titleGr?: string; city?: string }, lang: string) {
  return {
    canonical: absoluteUrl(propertyPath(lang, property)),
    languages: {
      'en-US': absoluteUrl(propertyPath('en', property)),
      'el-GR': absoluteUrl(propertyPath('el', property)),
      'x-default': absoluteUrl(propertyPath('en', property)),
    },
  }
}

// ── Translating an arbitrary pathname (language switcher) ───────────────────

function stripLocale(pathname: string): { locale: Locale | null; rest: string } {
  const m = pathname.match(/^\/(en|el)(?=\/|$)(.*)$/)
  if (!m) return { locale: null, rest: pathname.replace(/^\//, '') }
  return { locale: m[1] as Locale, rest: m[2].replace(/^\//, '') }
}

/**
 * Map a browser pathname in one locale to the equivalent pathname in another.
 * Unknown paths fall back to swapping the locale prefix.
 */
export function translatePathname(pathname: string, toLang: string): string {
  const target = toLocale(toLang)
  const { locale, rest } = stripLocale(pathname.split('?')[0].replace(/\/+$/, ''))
  const from: Locale = locale ?? 'en'

  for (const key of Object.keys(PAGE_ROUTES) as PageKey[]) {
    // Match against both locales' slugs so the function also works when the
    // internal (rewritten) path leaks through, e.g. `/el/property-management`.
    if (rest === PAGE_ROUTES[key][from] || rest === PAGE_ROUTES[key].en || rest === PAGE_ROUTES[key].el) {
      return localePath(target, key)
    }
  }

  for (const prefix of [dynamicRoutes.propertyDetail[from], dynamicRoutes.propertyDetail.en, dynamicRoutes.propertyDetail.el]) {
    if (rest.startsWith(`${prefix}/`)) {
      const tail = rest.slice(prefix.length + 1)
      return `/${target}/${dynamicRoutes.propertyDetail[target]}/${tail}`
    }
  }

  return rest ? `/${target}/${rest}` : `/${target}`
}

/**
 * For middleware: if a Greek URL uses an English slug (or an English URL uses a
 * Greek slug), return the correct public path to redirect to; otherwise null.
 */
export function canonicalPublicPath(pathname: string): string | null {
  const { locale, rest } = stripLocale(pathname.replace(/\/+$/, ''))
  if (!locale) return null
  const other: Locale = locale === 'en' ? 'el' : 'en'

  for (const key of Object.keys(PAGE_ROUTES) as PageKey[]) {
    const own = PAGE_ROUTES[key][locale]
    const foreign = PAGE_ROUTES[key][other]
    if (foreign && rest === foreign && foreign !== own) {
      return localePath(locale, key)
    }
  }

  const foreignPrefix = dynamicRoutes.propertyDetail[other]
  const ownPrefix = dynamicRoutes.propertyDetail[locale]
  if (foreignPrefix !== ownPrefix && rest.startsWith(`${foreignPrefix}/`)) {
    return `/${locale}/${ownPrefix}/${rest.slice(foreignPrefix.length + 1)}`
  }
  return null
}
