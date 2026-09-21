// Single source of truth for public page paths in both locales (no leading
// slash, no locale prefix). Greek pages get Greek slugs — Google reads the
// slug as a relevance signal and Greek users see readable URLs.
//
// Consumed by next.config.js (rewrites: Greek slug -> internal route),
// middleware.ts (redirect English slug under /el -> Greek slug) and
// src/lib/seo/routes.ts (links, canonical, hreflang, language switcher).
//
// Plain CommonJS so next.config.js can require it.

/** @type {Record<string, { en: string; el: string }>} */
const routes = {
  home: { en: '', el: '' },

  propertyManagement: { en: 'property-management', el: 'diaxeirisi-akiniton' },
  shortTermRentalManagement: {
    en: 'property-management/short-term-rental-management',
    el: 'diaxeirisi-akiniton/vraxyxronia-misthosi',
  },
  longTermPropertyManagement: {
    en: 'property-management/long-term-property-management',
    el: 'diaxeirisi-akiniton/makroxronia-misthosi',
  },
  maintenance: { en: 'property-management/maintenance', el: 'diaxeirisi-akiniton/syntirisi' },
  guestManagement: {
    en: 'property-management/guest-management',
    el: 'diaxeirisi-akiniton/diaxeirisi-episkepton',
  },
  ownerReporting: {
    en: 'property-management/owner-reporting',
    el: 'diaxeirisi-akiniton/anafores-idioktiton',
  },

  realEstate: { en: 'real-estate', el: 'akinita' },
  propertyValuation: { en: 'real-estate/property-valuation', el: 'akinita/ektimisi-akinitou' },
  investment: { en: 'investment', el: 'ependyseis' },
  owners: { en: 'owners', el: 'idioktites' },

  locations: { en: 'locations', el: 'perioxes' },
  preveza: { en: 'locations/preveza', el: 'perioxes/preveza' },

  hospitality: { en: 'hospitality/lincanto-apartments', el: 'filoxenia/lincanto-apartments' },

  insights: { en: 'insights', el: 'arthra' },
  insightFeesGreece: {
    en: 'insights/property-management-fees-greece',
    el: 'arthra/amoives-diaxeirisis-akiniton-ellada',
  },
  insightShortVsLong: {
    en: 'insights/short-term-vs-long-term-rental-preveza',
    el: 'arthra/vraxyxronia-i-makroxronia-misthosi-preveza',
  },
  insightHolidayHomeMaintenance: {
    en: 'insights/holiday-home-maintenance-ionian-coast',
    el: 'arthra/syntirisi-exoxikou-ionio',
  },
  insightWhatIncludes: {
    en: 'insights/what-property-management-includes',
    el: 'arthra/ti-perilamvanei-i-diaxeirisi-akiniton',
  },
  insightSummerSeason: {
    en: 'insights/preparing-rental-property-summer-season',
    el: 'arthra/proetoimasia-akinitou-kalokairini-sezon',
  },
  insightOwnerReporting: {
    en: 'insights/owner-reporting-property-management',
    el: 'arthra/anafores-idioktiti-diaxeirisi-akiniton',
  },

  properties: { en: 'properties', el: 'enoikiaseis' },
  propertyTypes: { en: 'property-types', el: 'typoi-akiniton' },
  services: { en: 'services', el: 'ypiresies' },
  about: { en: 'about', el: 'sxetika' },
  team: { en: 'team', el: 'omada' },
  contact: { en: 'contact', el: 'epikoinonia' },
  careers: { en: 'careers', el: 'karriera' },
  privacy: { en: 'privacy', el: 'politiki-aporritou' },
  terms: { en: 'terms', el: 'oroi-xrisis' },
}

/**
 * Dynamic routes: the Greek slug prefix maps to the internal English prefix,
 * the remainder of the path (property slug) is passed through.
 */
const dynamicRoutes = {
  propertyDetail: { en: 'properties', el: 'enoikiaseis' },
}

module.exports = { routes, dynamicRoutes }
