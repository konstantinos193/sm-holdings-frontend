import type { Localized, PageContent } from './types'
import { COMMON } from './types'

const IMG_BUILDING = { src: '/images/lincanto-apartments-chroneika-preveza-building.jpg', width: 1600, height: 1067 }

export const about: Localized<PageContent> = {
  en: {
    metaTitle: 'About SM Holdings | Property & Hospitality in Preveza, Greece',
    metaDescription:
      'SM Holdings (S. M. HOLDINGS Ε.Ε.) is a Preveza-based property and hospitality company founded in 2025: who runs it, what it does, the building it operates, its registration details and how to reach it.',
    breadcrumb: 'About',
    h1: 'About SM Holdings',
    intro:
      'SM Holdings is a property and hospitality company based in Filippiada, in the Preveza region of Epirus. It operates L\'Incanto Apartments in Chroneika and manages residential and holiday-rental property for owners in the Preveza area. The company was founded in June 2025 by Stefanos Maleskos and Monika Ritsi and trades under the SMH Real Estate wordmark you see on the logo.',
    sections: [
      {
        heading: 'The company',
        facts: [
          { label: 'Legal name', value: 'S. M. HOLDINGS Ε.Ε. (limited partnership)' },
          { label: 'Trading names', value: 'SM Holdings · SMH Real Estate' },
          { label: 'Founded', value: '12 June 2025, Filippiada' },
          { label: 'ΓΕΜΗ', value: '185169449000 — Preveza Chamber of Commerce, reg. no. 12598' },
          { label: 'VAT (ΑΦΜ)', value: 'EL802912244' },
          { label: 'Registered activity', value: 'Real estate leasing and management (KAD 68.20); short-term rental of furnished apartments; purchase and sale of own real estate' },
          { label: 'Office', value: 'A. Panagouli 2, Filippiada 48200, Preveza — Tuesday & Thursday 9:00–13:00' },
          { label: 'Founders', value: 'Stefanos Maleskos (founder & managing partner), Monika Ritsi (founding partner)' },
        ],
      },
      {
        heading: 'What we do',
        tone: 'gray',
        cards: [
          { title: 'Property management', text: 'Short-term and long-term rental management, maintenance, guest and tenant operations, owner reporting.', href: '/en/property-management' },
          { title: 'Real estate', text: 'Rentals from the managed portfolio, rental valuations, support for buyers and investors, coordination with licensed professionals.', href: '/en/real-estate' },
          { title: 'Hospitality', text: "L'Incanto Apartments — ten holiday apartments at Chroneika, Preveza, operated by the company.", href: '/en/hospitality/lincanto-apartments' },
        ],
      },
      {
        heading: 'Why the company exists',
        paragraphs: [
          'The founders own and run a holiday-apartment building on the Preveza coast. Running it well — pricing, distribution, guests, cleaning, maintenance, the paperwork — turned out to be the thing other owners in the area needed most and could not find locally. SM Holdings offers that operation to them, with the same team and the same tradespeople.',
          'We are small and local on purpose. The service area is the one we can reach and inspect ourselves; the claims on this site are ones we can back with our own operation.',
        ],
        image: { ...IMG_BUILDING, alt: "L'Incanto Apartments, the building SM Holdings operates in Chroneika, Preveza" },
      },
      {
        heading: 'Market and geography',
        tone: 'gray',
        paragraphs: [
          'Preveza town, the Ionian coast north of it (Chroneika, Kalamitsi, Monolithi, Kanali) and the Filippiada / Ziros area inland. We take on properties elsewhere in Greece case by case.',
        ],
      },
      {
        heading: 'How we work',
        bullets: [
          'Written proposal before any agreement, with fees and approval thresholds stated',
          'Photos and a statement for everything we do on a property',
          'Licensed professionals — lawyers, notaries, engineers, accountants, certified valuers — for the work that needs them; we coordinate, we do not substitute',
          'Greek, English and Italian',
        ],
      },
    ],
    related: {
      title: 'More about us',
      links: [
        { key: 'team', title: 'The people' },
        { key: 'contact', title: 'Contact and office' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
        { key: 'preveza', title: 'Preveza' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Σχετικά με την SM Holdings | Ακίνητα & Φιλοξενία στην Πρέβεζα',
    metaDescription:
      'Η SM Holdings (S. M. HOLDINGS Ε.Ε.) είναι εταιρεία ακινήτων και φιλοξενίας με έδρα την Πρέβεζα, ιδρυθείσα το 2025: ποιοι τη διοικούν, τι κάνει, το κτίριο που λειτουργεί, τα στοιχεία μητρώου της και πώς θα την βρείτε.',
    breadcrumb: 'Σχετικά',
    h1: 'Σχετικά με την SM Holdings',
    intro:
      'Η SM Holdings είναι εταιρεία ακινήτων και φιλοξενίας με έδρα τη Φιλιππιάδα, στην Περιφερειακή Ενότητα Πρέβεζας. Λειτουργεί τα L\'Incanto Apartments στα Χρονέικα και διαχειρίζεται κατοικίες και καταλύματα διακοπών για ιδιοκτήτες στην περιοχή της Πρέβεζας. Ιδρύθηκε τον Ιούνιο του 2025 από τον Στέφανο Μαλέσκο και τη Μόνικα Ρίτσι και χρησιμοποιεί το λεκτικό SMH Real Estate που βλέπετε στο λογότυπο.',
    sections: [
      {
        heading: 'Η εταιρεία',
        facts: [
          { label: 'Επωνυμία', value: 'S. M. HOLDINGS Ε.Ε. (ετερόρρυθμη εταιρεία)' },
          { label: 'Διακριτικοί τίτλοι', value: 'SM Holdings · SMH Real Estate' },
          { label: 'Ίδρυση', value: '12 Ιουνίου 2025, Φιλιππιάδα' },
          { label: 'ΓΕΜΗ', value: '185169449000 — Επιμελητήριο Πρέβεζας, αρ. μητρώου 12598' },
          { label: 'ΑΦΜ', value: '802912244' },
          { label: 'Καταστατική δραστηριότητα', value: 'Εκμίσθωση και διαχείριση ακινήτων (ΚΑΔ 68.20)· βραχυχρόνια μίσθωση επιπλωμένων διαμερισμάτων· αγοραπωλησία ιδιόκτητων ακινήτων' },
          { label: 'Γραφείο', value: 'Α. Παναγούλη 2, Φιλιππιάδα 48200, Πρέβεζα — Τρίτη & Πέμπτη 9:00–13:00' },
          { label: 'Ιδρυτές', value: 'Στέφανος Μαλέσκος (ιδρυτής & διαχειριστής εταίρος), Μόνικα Ρίτσι (ιδρύτρια εταίρος)' },
        ],
      },
      {
        heading: 'Τι κάνουμε',
        tone: 'gray',
        cards: [
          { title: 'Διαχείριση ακινήτων', text: 'Διαχείριση βραχυχρόνιας και μακροχρόνιας μίσθωσης, συντήρηση, λειτουργία επισκεπτών και ενοικιαστών, αναφορές ιδιοκτήτη.', href: '/el/diaxeirisi-akiniton' },
          { title: 'Ακίνητα', text: 'Ενοικιάσεις από το χαρτοφυλάκιο υπό διαχείριση, εκτιμήσεις ενοικίου, υποστήριξη αγοραστών και επενδυτών, συντονισμός με αδειοδοτημένους επαγγελματίες.', href: '/el/akinita' },
          { title: 'Φιλοξενία', text: "L'Incanto Apartments — δέκα διαμερίσματα διακοπών στα Χρονέικα Πρέβεζας, που λειτουργεί η εταιρεία.", href: '/el/filoxenia/lincanto-apartments' },
        ],
      },
      {
        heading: 'Γιατί υπάρχει η εταιρεία',
        paragraphs: [
          'Οι ιδρυτές έχουν και λειτουργούν ένα κτίριο διαμερισμάτων διακοπών στην ακτή της Πρέβεζας. Η σωστή λειτουργία του — τιμολόγηση, διανομή, επισκέπτες, καθαριότητα, συντήρηση, γραφειοκρατία — αποδείχθηκε αυτό που χρειάζονταν περισσότερο οι άλλοι ιδιοκτήτες της περιοχής και δεν έβρισκαν τοπικά. Η SM Holdings τους προσφέρει αυτή τη λειτουργία, με την ίδια ομάδα και τους ίδιους τεχνικούς.',
          'Είμαστε μικροί και τοπικοί επίτηδες. Η περιοχή εξυπηρέτησης είναι αυτή που μπορούμε να φτάσουμε και να επιθεωρήσουμε οι ίδιοι· οι ισχυρισμοί σε αυτό το site είναι όσοι στηρίζονται στη δική μας λειτουργία.',
        ],
        image: { ...IMG_BUILDING, alt: "Τα L'Incanto Apartments, το κτίριο που λειτουργεί η SM Holdings στα Χρονέικα Πρέβεζας" },
      },
      {
        heading: 'Αγορά και γεωγραφία',
        tone: 'gray',
        paragraphs: [
          'Η πόλη της Πρέβεζας, η ακτή του Ιονίου βόρειά της (Χρονέικα, Καλαμίτσι, Μονολίθι, Κανάλι) και η περιοχή Φιλιππιάδας / Ζηρού στην ενδοχώρα. Αναλαμβάνουμε ακίνητα αλλού στην Ελλάδα κατά περίπτωση.',
        ],
      },
      {
        heading: 'Πώς δουλεύουμε',
        bullets: [
          'Γραπτή πρόταση πριν από κάθε συμφωνία, με αμοιβές και όρια έγκρισης',
          'Φωτογραφίες και κατάσταση για ό,τι κάνουμε σε ένα ακίνητο',
          'Αδειοδοτημένοι επαγγελματίες — δικηγόροι, συμβολαιογράφοι, μηχανικοί, λογιστές, πιστοποιημένοι εκτιμητές — για ό,τι τους χρειάζεται· συντονίζουμε, δεν υποκαθιστούμε',
          'Ελληνικά, αγγλικά και ιταλικά',
        ],
      },
    ],
    related: {
      title: 'Περισσότερα για εμάς',
      links: [
        { key: 'team', title: 'Οι άνθρωποι' },
        { key: 'contact', title: 'Επικοινωνία και γραφείο' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
        { key: 'preveza', title: 'Πρέβεζα' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}

export const team = {
  en: {
    metaTitle: 'The People Behind SM Holdings | Preveza',
    metaDescription: 'The founders of SM Holdings: Stefanos Maleskos, founder and managing partner, and Monika Ritsi, founding partner. A small, local team running property management and L\'Incanto Apartments in Preveza.',
    breadcrumb: 'Team',
    h1: 'The People Behind SM Holdings',
    intro: 'SM Holdings is run by its founders. There is no large staff roster to show you: the people below are the ones who answer the phone, visit your property and operate L\'Incanto every summer, with local cleaners and tradespeople they have worked with for years.',
    members: [
      { name: 'Stefanos Maleskos', role: 'Founder & Managing Partner', bio: 'General partner, manager and legal representative of S. M. HOLDINGS Ε.Ε. since its founding in June 2025. Responsible for the company\'s operations, including property management for owners and the running of L\'Incanto Apartments in Chroneika.' },
      { name: 'Monika Ritsi', role: 'Founding Partner', bio: 'Founding partner (limited partner) of S. M. HOLDINGS Ε.Ε. since June 2025.' },
    ],
    network: { title: 'The local network', text: 'Cleaning, linen, electrical, plumbing and general building work are done by local self-employed tradespeople we use on our own building. They are not employees and we do not list them here; you will meet them when they work on your property.' },
    contact: 'Contact the team',
  },
  el: {
    metaTitle: 'Οι Άνθρωποι της SM Holdings | Πρέβεζα',
    metaDescription: 'Οι ιδρυτές της SM Holdings: Στέφανος Μαλέσκος, ιδρυτής και διαχειριστής εταίρος, και Μόνικα Ρίτσι, ιδρύτρια εταίρος. Μικρή, τοπική ομάδα που λειτουργεί τη διαχείριση ακινήτων και τα L\'Incanto Apartments στην Πρέβεζα.',
    breadcrumb: 'Ομάδα',
    h1: 'Οι Άνθρωποι της SM Holdings',
    intro: 'Η SM Holdings διοικείται από τους ιδρυτές της. Δεν υπάρχει μεγάλο οργανόγραμμα να σας δείξουμε: οι παρακάτω είναι αυτοί που απαντούν στο τηλέφωνο, επισκέπτονται το ακίνητό σας και λειτουργούν το L\'Incanto κάθε καλοκαίρι, με τοπικούς καθαριστές και τεχνικούς με τους οποίους συνεργάζονται χρόνια.',
    members: [
      { name: 'Στέφανος Μαλέσκος', role: 'Ιδρυτής & Διαχειριστής Εταίρος', bio: 'Ομόρρυθμος εταίρος, διαχειριστής και νόμιμος εκπρόσωπος της S. M. HOLDINGS Ε.Ε. από την ίδρυσή της τον Ιούνιο του 2025. Υπεύθυνος για τη λειτουργία της εταιρείας, συμπεριλαμβανομένης της διαχείρισης ακινήτων για ιδιοκτήτες και της λειτουργίας των L\'Incanto Apartments στα Χρονέικα.' },
      { name: 'Μόνικα Ρίτσι', role: 'Ιδρύτρια Εταίρος', bio: 'Ιδρύτρια εταίρος (ετερόρρυθμη) της S. M. HOLDINGS Ε.Ε. από τον Ιούνιο του 2025.' },
    ],
    network: { title: 'Το τοπικό δίκτυο', text: 'Καθαριότητα, λευκά είδη, ηλεκτρολογικά, υδραυλικά και οικοδομικές εργασίες γίνονται από τοπικούς αυτοαπασχολούμενους τεχνικούς που χρησιμοποιούμε στο δικό μας κτίριο. Δεν είναι υπάλληλοι και δεν τους αναφέρουμε εδώ· θα τους γνωρίσετε όταν δουλέψουν στο ακίνητό σας.' },
    contact: 'Επικοινωνήστε με την ομάδα',
  },
}

export const careers = {
  en: {
    metaTitle: 'Careers at SM Holdings | Preveza',
    metaDescription: 'There are no open positions at SM Holdings at the moment. Seasonal cleaning, maintenance and guest-support work in the Preveza area is arranged directly; send a message if you would like to be considered.',
    h1: 'Careers',
    intro: 'SM Holdings is a small company run by its founders. We do not have open positions at the moment. When we do, they will be listed on this page with the role, location, hours and how to apply.',
    seasonal: { title: 'Seasonal work in Preveza', text: 'Each summer we work with local cleaners, maintenance tradespeople and guest-support help for L\'Incanto Apartments and the properties we manage. If you live in the Preveza area and would like to be considered for seasonal work, send us a short message with what you do and your availability.' },
    cta: 'Send a message',
  },
  el: {
    metaTitle: 'Καριέρα στην SM Holdings | Πρέβεζα',
    metaDescription: 'Δεν υπάρχουν ανοιχτές θέσεις στην SM Holdings αυτή τη στιγμή. Εποχική εργασία καθαριότητας, συντήρησης και υποστήριξης επισκεπτών στην περιοχή της Πρέβεζας συμφωνείται απευθείας· στείλτε μήνυμα αν θέλετε να σας έχουμε υπόψη.',
    h1: 'Καριέρα',
    intro: 'Η SM Holdings είναι μικρή εταιρεία που διοικείται από τους ιδρυτές της. Δεν έχουμε ανοιχτές θέσεις αυτή τη στιγμή. Όταν υπάρξουν, θα αναρτηθούν σε αυτή τη σελίδα με ρόλο, τοποθεσία, ωράριο και τρόπο αίτησης.',
    seasonal: { title: 'Εποχική εργασία στην Πρέβεζα', text: 'Κάθε καλοκαίρι συνεργαζόμαστε με τοπικούς καθαριστές, τεχνικούς συντήρησης και βοήθεια υποστήριξης επισκεπτών για τα L\'Incanto Apartments και τα ακίνητα που διαχειριζόμαστε. Αν μένετε στην περιοχή της Πρέβεζας και θέλετε να σας έχουμε υπόψη για εποχική εργασία, στείλτε μας ένα σύντομο μήνυμα με το τι κάνετε και τη διαθεσιμότητά σας.' },
    cta: 'Στείλτε μήνυμα',
  },
}

export const services: Localized<PageContent> = {
  en: {
    metaTitle: 'Services | SM Holdings, Preveza',
    metaDescription: 'All SM Holdings services in one place: short-term and long-term rental management, maintenance, guest management, owner reporting, rental valuation, real estate support, investment guidance and hospitality.',
    breadcrumb: 'Services',
    h1: 'Services',
    intro: 'Everything we do for owners, tenants, guests and investors in the Preveza area, with a page for each service that explains what is included, how it works and what it costs. What we do not do — legal, tax and financial advice, third-party brokerage — is stated on each page too.',
    heroCta: { primary: 'owner', secondary: 'seeker' },
    sections: [
      {
        heading: 'Property management',
        cards: [
          { title: 'Property management overview', text: 'Who it is for, what is included, inspections, repairs, pricing and onboarding.', href: '/en/property-management' },
          { title: 'Short-term rental management', text: 'Holiday apartments and villas let by the night.', href: '/en/property-management/short-term-rental-management' },
          { title: 'Long-term property management', text: 'Flats and houses on annual contracts.', href: '/en/property-management/long-term-property-management' },
          { title: 'Maintenance', text: 'Inspections, repairs, seasonal preparation, winter care.', href: '/en/property-management/maintenance' },
          { title: 'Guest management', text: 'Every guest contact from enquiry to review.', href: '/en/property-management/guest-management' },
          { title: 'Owner reporting', text: 'What you receive and when.', href: '/en/property-management/owner-reporting' },
        ],
      },
      {
        heading: 'Real estate and investment',
        tone: 'gray',
        cards: [
          { title: 'Real estate services', text: 'Rentals from the managed portfolio, group-owned sales, coordination of licensed professionals.', href: '/en/real-estate' },
          { title: 'Rental valuation', text: 'What a property can earn as a holiday let and as a long-term let.', href: '/en/real-estate/property-valuation' },
          { title: 'Investment in Preveza', text: 'Buy-to-let and holiday-rental purchases: process, due diligence, management.', href: '/en/investment' },
        ],
      },
      {
        heading: 'Hospitality',
        cards: [
          { title: "L'Incanto Apartments", text: 'Ten holiday apartments at Chroneika, Preveza, operated by SM Holdings.', href: '/en/hospitality/lincanto-apartments' },
        ],
      },
    ],
    related: { title: 'Start here', links: [{ key: 'owners', title: 'For property owners' }, { key: 'preveza', title: 'Preveza' }, { key: 'contact', title: 'Contact' }] },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Υπηρεσίες | SM Holdings, Πρέβεζα',
    metaDescription: 'Όλες οι υπηρεσίες της SM Holdings σε μία σελίδα: διαχείριση βραχυχρόνιας και μακροχρόνιας μίσθωσης, συντήρηση, διαχείριση επισκεπτών, αναφορές ιδιοκτήτη, εκτίμηση ενοικίου, υποστήριξη σε θέματα ακινήτων, επενδυτική καθοδήγηση και φιλοξενία.',
    breadcrumb: 'Υπηρεσίες',
    h1: 'Υπηρεσίες',
    intro: 'Ό,τι κάνουμε για ιδιοκτήτες, ενοικιαστές, επισκέπτες και επενδυτές στην περιοχή της Πρέβεζας, με μία σελίδα για κάθε υπηρεσία που εξηγεί τι περιλαμβάνει, πώς λειτουργεί και τι κοστίζει. Τι δεν κάνουμε — νομικές, φορολογικές και χρηματοοικονομικές συμβουλές, μεσιτεία τρίτων — αναφέρεται επίσης σε κάθε σελίδα.',
    heroCta: { primary: 'owner', secondary: 'seeker' },
    sections: [
      {
        heading: 'Διαχείριση ακινήτων',
        cards: [
          { title: 'Διαχείριση ακινήτων — επισκόπηση', text: 'Για ποιους είναι, τι περιλαμβάνει, επιθεωρήσεις, επισκευές, τιμολόγηση και ένταξη.', href: '/el/diaxeirisi-akiniton' },
          { title: 'Διαχείριση βραχυχρόνιας μίσθωσης', text: 'Διαμερίσματα και βίλες διακοπών με τη βραδιά.', href: '/el/diaxeirisi-akiniton/vraxyxronia-misthosi' },
          { title: 'Διαχείριση μακροχρόνιας μίσθωσης', text: 'Διαμερίσματα και σπίτια με ετήσιο συμβόλαιο.', href: '/el/diaxeirisi-akiniton/makroxronia-misthosi' },
          { title: 'Συντήρηση', text: 'Επιθεωρήσεις, επισκευές, εποχική προετοιμασία, χειμερινή φροντίδα.', href: '/el/diaxeirisi-akiniton/syntirisi' },
          { title: 'Διαχείριση επισκεπτών', text: 'Κάθε επαφή με επισκέπτη από το ερώτημα έως την κριτική.', href: '/el/diaxeirisi-akiniton/diaxeirisi-episkepton' },
          { title: 'Αναφορές ιδιοκτήτη', text: 'Τι λαμβάνετε και πότε.', href: '/el/diaxeirisi-akiniton/anafores-idioktiton' },
        ],
      },
      {
        heading: 'Ακίνητα και επενδύσεις',
        tone: 'gray',
        cards: [
          { title: 'Υπηρεσίες ακινήτων', text: 'Ενοικιάσεις από το χαρτοφυλάκιο υπό διαχείριση, πωλήσεις ιδιόκτητων, συντονισμός αδειοδοτημένων επαγγελματιών.', href: '/el/akinita' },
          { title: 'Εκτίμηση ενοικίου', text: 'Τι μπορεί να αποδώσει ένα ακίνητο ως διακοπές και ως μακροχρόνια.', href: '/el/akinita/ektimisi-akinitou' },
          { title: 'Επένδυση στην Πρέβεζα', text: 'Αγορά για εκμίσθωση: διαδικασία, έλεγχοι, διαχείριση.', href: '/el/ependyseis' },
        ],
      },
      {
        heading: 'Φιλοξενία',
        cards: [
          { title: "L'Incanto Apartments", text: 'Δέκα διαμερίσματα διακοπών στα Χρονέικα Πρέβεζας, που λειτουργεί η SM Holdings.', href: '/el/filoxenia/lincanto-apartments' },
        ],
      },
    ],
    related: { title: 'Ξεκινήστε εδώ', links: [{ key: 'owners', title: 'Για ιδιοκτήτες' }, { key: 'preveza', title: 'Πρέβεζα' }, { key: 'contact', title: 'Επικοινωνία' }] },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}
