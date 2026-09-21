/**
 * Single source of truth for the business entity used in JSON-LD.
 *
 * Verified 2026-09-21 against:
 *  - Google Business Profile "SM HOLDINGS GR" (Property management company),
 *    Α. Παναγούλη 2, Filippiada 482 00 · 2683 022484 · Tue & Thu 09:00–13:00
 *    https://maps.google.com/?cid=12114050655462041812
 *  - ΓΕΜΗ 185169449000: S. M. HOLDINGS Ε.Ε., founded 12/06/2025, ΑΦΜ 802912244,
 *    KAD 68.20 (real estate leasing & management)
 *
 * Keep name / address / phone identical to the Business Profile — mismatched
 * NAP data weakens local ranking signals.
 */
export const BASE_URL = 'https://smholdings.gr'

export const BUSINESS = {
  id: `${BASE_URL}/#organization`,
  websiteId: `${BASE_URL}/#website`,
  // Umbrella brand (matches the legal name and the Google Business Profile).
  // "SMH Real Estate" — the wordmark on the logo — stays as an alternate name
  // because most brand searches still use it.
  name: 'SM Holdings',
  legalName: 'S. M. HOLDINGS Ε.Ε.',
  alternateNames: [
    'SM HOLDINGS GR',
    'SMH Real Estate',
    'SMH Holdings',
    'SMH Realty',
    'SMH Estate',
    'SMH Properties',
    'SMH Property Management',
    'smholdings',
  ],
  slogan: {
    en: 'Property management, real estate & hospitality in Preveza',
    el: 'Διαχείριση ακινήτων, ακίνητα & φιλοξενία στην Πρέβεζα',
  },
  founders: [
    { name: 'Stefanos Maleskos', nameEl: 'Στέφανος Μαλέσκος', role: 'Founder & Managing Partner', roleEl: 'Ιδρυτής & Διαχειριστής Εταίρος' },
    { name: 'Monika Ritsi', nameEl: 'Μόνικα Ρίτσι', role: 'Founding Partner', roleEl: 'Ιδρύτρια Εταίρος' },
  ],
  chamber: 'Επιμελητήριο Πρέβεζας, Αρ. Μητρώου 12598',
  vatID: 'EL802912244',
  gemiNumber: '185169449000',
  foundingDate: '2025-06-12',
  founder: 'Stefanos Maleskos',
  logo: `${BASE_URL}/logoetc.png`,
  // Hospitality brand operated by the group (own site: lincanto.gr)
  lincanto: {
    name: "L'Incanto Apartments",
    url: 'https://lincanto.gr',
    address: 'Aristotelous 26, Chroneika, Preveza 48100',
    addressEl: 'Αριστοτέλους 26, Χρονέικα, Πρέβεζα 48100',
    apartments: 10,
    season: { en: 'June to September', el: 'Ιούνιος έως Σεπτέμβριος' },
    email: 'lincantobook@gmail.com',
  },
  image: `${BASE_URL}/og-image.png`,
  email: 'smholdings.gr@gmail.com',
  telephone: '+302683022484',
  mobile: '+306984132555',
  address: {
    streetAddress: 'A. Panagouli 2',
    addressLocality: 'Filippiada',
    addressRegion: 'Preveza',
    postalCode: '48200',
    addressCountry: 'GR',
  },
  addressEl: {
    streetAddress: 'Α. Παναγούλη 2',
    addressLocality: 'Φιλιππιάδα',
    addressRegion: 'Πρέβεζα',
    postalCode: '48200',
    addressCountry: 'GR',
  },
  // Google Business Profile pin
  geo: { latitude: 39.207313, longitude: 20.8812982 },
  mapUrl: 'https://maps.google.com/?cid=12114050655462041812',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61575429243332',
    'https://maps.google.com/?cid=12114050655462041812',
  ],
  // Office hours as published on the Business Profile
  openingHours: [
    { days: ['Tuesday', 'Thursday'], opens: '09:00', closes: '13:00' },
  ],
} as const
