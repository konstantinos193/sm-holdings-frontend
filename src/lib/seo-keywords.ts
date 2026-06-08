export interface SEOKeywords {
  global: {
    en: string[]
    el: string[]
  }
  pages: {
    home: {
      en: string[]
      el: string[]
    }
    properties: {
      en: string[]
      el: string[]
    }
    propertyDetail: {
      en: (title: string, city: string, propertyType: string) => string[]
      el: (title: string, city: string, propertyType: string) => string[]
    }
    incanto: {
      en: string[]
      el: string[]
    }
    about: {
      en: string[]
      el: string[]
    }
    contact: {
      en: string[]
      el: string[]
    }
    careers: {
      en: string[]
      el: string[]
    }
    privacy: {
      en: string[]
      el: string[]
    }
    results: {
      en: string[]
      el: string[]
    }
    services: {
      en: string[]
      el: string[]
    }
    team: {
      en: string[]
      el: string[]
    }
    terms: {
      en: string[]
      el: string[]
    }
  }
}

export const seoKeywords: SEOKeywords = {
  global: {
    en: [
      'real estate Greece',
      'rent property Greece',
      'short-term rental Greece',
      'long-term rental Greece',
      'property management Greece',
      'vacation rentals Greece',
      'SMH Real Estate',
      'smholdings',
      'smh properties',
      'smh estate',
      'smh property',
      'smh realty',
      'smh property management',
      'smh real estate',
      'smh locations',
      'sm real estate',
      'Greek properties',
      'apartments Greece',
      'houses for rent Greece',
      'investment property Greece',
      'luxury rentals Greece',
    ],
    el: [
      'ακίνητα Ελλάδα',
      'ενοικίαση ακινήτου',
      'βραχυχρόνια μίσθωση',
      'μακροχρόνια μίσθωση',
      'διαχείριση ακινήτων',
      'SMH Real Estate',
      'smholdings',
      'smh properties',
      'smh estate',
      'smh property',
      'smh realty',
      'smh property management',
      'smh real estate',
      'smh locations',
      'sm real estate',
      'ελληνικά ακίνητα',
      'διαμερίσματα Ελλάδα',
      'σπίτια για ενοικίαση',
      'επενδυτικά ακίνητα',
      'πολυτελείς κατοικίες',
    ],
  },
  pages: {
    home: {
      en: [
        'SMH Real Estate',
        'properties Greece',
        'real estate Greece',
        'property rental Greece',
        'long-term rental Greece',
        'short-term rental Greece',
        'vacation rentals Greece',
        'property management Greece',
        'investment property Greece',
        'Greek real estate',
      ],
      el: [
        'SMH Real Estate',
        'ακίνητα Ελλάδα',
        'ακίνητα ενοικίαση',
        'ενοικίαση ακινήτου',
        'μακροχρόνια μίσθωση',
        'βραχυχρόνια μίσθωση',
        'διαχείριση ακινήτων',
        'επενδυτικά ακίνητα',
        'ελληνικά ακίνητα',
      ],
    },
    properties: {
      en: [
        'properties Greece',
        'apartments for rent Greece',
        'houses Greece',
        'villas Greece',
        'property rental Greece',
        'SMH Real Estate',
        'real estate Greece',
        'vacation rentals Greece',
        'long-term rental Greece',
        'short-term rental Greece',
      ],
      el: [
        'ακίνητα Ελλάδα',
        'διαμερίσματα ενοικίαση',
        'σπίτια Ελλάδα',
        'βίλες Ελλάδα',
        'ενοικίαση ακινήτου',
        'SMH Real Estate',
        'μακροχρόνια μίσθωση',
        'βραχυχρόνια μίσθωση',
      ],
    },
    propertyDetail: {
      en: (title: string, city: string, propertyType: string) => [
        title,
        city,
        'property rental Greece',
        'SMH Real Estate',
        propertyType.toLowerCase(),
        'vacation rental Greece',
        'short-term rental Greece',
        'long-term rental Greece',
      ],
      el: (title: string, city: string, propertyType: string) => [
        title,
        city,
        'ενοικίαση ακινήτου',
        'SMH Real Estate',
        propertyType.toLowerCase(),
        'βραχυχρόνια μίσθωση',
        'μακροχρόνια μίσθωση',
      ],
    },
    incanto: {
      en: [
        'Incanto',
        'luxury property Greece',
        'luxury villa rental',
        'SMH Real Estate',
        'premium short-term rental Greece',
        'luxury rentals Greece',
        'vacation rental Greece',
        'high-end property Greece',
      ],
      el: [
        'Incanto',
        'πολυτελής κατοικία Ελλάδα',
        'luxury villa Greece',
        'SMH Real Estate',
        'βραχυχρόνια μίσθωση πολυτελείας',
        'πολυτελείς κατοικίες',
        'ενοικίαση πολυτελείας',
      ],
    },
    about: {
      en: [
        'SMH Real Estate',
        'about us',
        'real estate company Greece',
        'property management Greece',
        'real estate services Greece',
        'trusted real estate Greece',
        'Greek property experts',
        'real estate investment Greece',
      ],
      el: [
        'SMH Real Estate',
        'σχετικά με εμάς',
        'εταιρεία ακινήτων Ελλάδα',
        'διαχείριση ακινήτων',
        'υπηρεσίες ακινήτων',
        'αξιόπιστη εταιρεία ακινήτων',
        'ειδικοί ακινήτων',
        'επενδύσεις ακινήτων',
      ],
    },
    contact: {
      en: [
        'SMH Real Estate',
        'contact us',
        'real estate contact Greece',
        'property inquiry Greece',
        'rental inquiry Greece',
        'real estate services Greece',
        'property management contact',
      ],
      el: [
        'SMH Real Estate',
        'επικοινωνία',
        'επικοινωνία ακίνητα Ελλάδα',
        'ερώτηση ακινήτων',
        'ερώτηση ενοικίασης',
        'υπηρεσίες ακινήτων',
        'επικοινωνία διαχείρισης ακινήτων',
      ],
    },
    careers: {
      en: [
        'SMH Real Estate',
        'careers',
        'real estate jobs Greece',
        'property management careers',
        'real estate agent jobs',
        'work at SMH Real Estate',
        'real estate careers Greece',
      ],
      el: [
        'SMH Real Estate',
        'καριέρα',
        'δουλειά ακίνητα Ελλάδα',
        'καριέρα διαχείρισης ακινήτων',
        'θέσεις εργασίας ακινήτων',
        'δουλειά στη SMH Real Estate',
        'καριέρα ακινήτων',
      ],
    },
    privacy: {
      en: [
        'SMH Real Estate',
        'privacy policy',
        'data protection Greece',
        'real estate privacy',
        'privacy policy Greece',
        'GDPR compliance Greece',
        'user privacy SMH Real Estate',
      ],
      el: [
        'SMH Real Estate',
        'πολιτική απορρήτου',
        'προστασία δεδομένων Ελλάδα',
        'απόρρητο ακινήτων',
        'πολιτική απορρήτου Ελλάδα',
        'συμμόρφωση GDPR',
        'απόρρητο χρηστών SMH Real Estate',
      ],
    },
    results: {
      en: [
        'SMH Real Estate',
        'property search results',
        'real estate search Greece',
        'property listings Greece',
        'search results properties',
        'find properties Greece',
        'property search engine',
      ],
      el: [
        'SMH Real Estate',
        'αποτελέσματα αναζήτησης',
        'αναζήτηση ακινήτων Ελλάδα',
        'καταχωρήσεις ακινήτων',
        'αποτελέσματα ακινήτων',
        'εύρεση ακινήτων',
        'μηχανή αναζήτησης ακινήτων',
      ],
    },
    services: {
      en: [
        'SMH Real Estate',
        'real estate services',
        'property management Greece',
        'real estate consulting',
        'property investment services',
        'rental management Greece',
        'real estate solutions',
      ],
      el: [
        'SMH Real Estate',
        'υπηρεσίες ακινήτων',
        'διαχείριση ακινήτων Ελλάδα',
        'συμβουλευτική ακινήτων',
        'υπηρεσίες επενδύσεων',
        'διαχείριση ενοικιάσεων',
        'λύσεις ακινήτων',
      ],
    },
    team: {
      en: [
        'SMH Real Estate',
        'our team',
        'real estate team Greece',
        'property experts',
        'real estate professionals',
        'SMH Real Estate agents',
        'real estate specialists',
      ],
      el: [
        'SMH Real Estate',
        'η ομάδα μας',
        'ομάδα ακινήτων Ελλάδα',
        'ειδικοί ακινήτων',
        'επαγγελματίες ακινήτων',
        'συνεργάτες SMH Real Estate',
        'ειδικοί ακινήτων',
      ],
    },
    terms: {
      en: [
        'SMH Real Estate',
        'terms of service',
        'real estate terms Greece',
        'rental terms conditions',
        'property terms service',
        'legal terms SMH Real Estate',
        'terms conditions Greece',
      ],
      el: [
        'SMH Real Estate',
        'όροι χρήσης',
        'όροι ακινήτων Ελλάδα',
        'όροι ενοικίασης',
        'όροι υπηρεσίας ακινήτων',
        'νομικοί όροι SMH Real Estate',
        'όροι και προϋποθέσεις',
      ],
    },
  },
}

export function getSEOKeywords(page: keyof SEOKeywords['pages'], lang: 'en' | 'el', dynamicParams?: { title?: string; city?: string; propertyType?: string }): string[] {
  const pageKeywords = seoKeywords.pages[page]
  
  if (typeof pageKeywords[lang] === 'function') {
    const func = pageKeywords[lang] as (title: string, city: string, propertyType: string) => string[]
    return func(
      dynamicParams?.title || '',
      dynamicParams?.city || '',
      dynamicParams?.propertyType || ''
    )
  }
  
  return pageKeywords[lang] as string[]
}

export function getGlobalSEOKeywords(lang: 'en' | 'el'): string[] {
  return seoKeywords.global[lang]
}
