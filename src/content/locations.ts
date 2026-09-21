import type { Localized, PageContent } from './types'
import { COMMON } from './types'

const IMG_SEAFRONT = { src: '/images/lincanto-apartments-chroneika-preveza-seafront.jpg', width: 1600, height: 1065 }
const IMG_BUILDING = { src: '/images/lincanto-apartments-chroneika-preveza-building.jpg', width: 1600, height: 1067 }

export const preveza: Localized<PageContent> = {
  en: {
    metaTitle: 'Property Management & Real Estate in Preveza | SM Holdings',
    metaDescription:
      'Property management, holiday-rental operations and real estate support in Preveza from a local team: the areas we serve, how the short-term rental market works here, what owners get, and the building we operate ourselves in Chroneika.',
    breadcrumb: 'Preveza',
    h1: 'Property Management in Preveza',
    intro:
      'Preveza is where SM Holdings operates. Our office is in Filippiada, 40 minutes inland; our own building, L\'Incanto Apartments, is on the coast at Chroneika; and the properties we manage for owners are spread between Preveza town and the beaches north of it. This page is for owners and buyers who want to understand the area before they decide anything.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Areas we serve',
        paragraphs: [
          'Preveza town — the old town, the harbour and the residential streets behind it, where flats let long-term all year and short-term in summer. The coast north of the town along the Ionian — Chroneika, Kalamitsi, Monolithi, Kanali — a strip of beach settlements where most holiday lets are. Nikopolis and the villages between the town and Filippiada. Filippiada and the Ziros municipality, where our office is and where demand is for permanent housing.',
        ],
        image: { ...IMG_SEAFRONT, alt: 'Seafront grounds at L\'Incanto Apartments in Chroneika, Preveza, at sunset' },
      },
      {
        heading: 'How the short-term rental market works here',
        tone: 'gray',
        paragraphs: [
          'Demand is seasonal and concentrated: June to September, with July and August full. Guests arrive through Aktion National Airport (PVK), a short drive from the coast, by car from Ioannina and the Egnatia motorway, and by ferry from Italy via Igoumenitsa. Italian families are a large share of the summer market, which is why we work in Italian as well as Greek and English.',
          'Most holiday lets close in winter. An owner\'s realistic calendar is therefore roughly four months of letting and eight months of care — which is why maintenance and winter checks are part of the service, not an extra.',
        ],
      },
      {
        heading: 'Airport and tourism context',
        paragraphs: [
          'Aktion airport, on the Lefkada side of the Preveza channel, brings charter and seasonal scheduled flights from northern and central Europe in summer. Preveza town is also the road gateway to Lefkada, and day trips to Parga, the Acheron river, Nikopolis and the Amvrakikos wetlands keep guests in the area for a week or more. None of this changes the fundamental point for an owner: the season is short and the property has to be ready for it.',
        ],
      },
      {
        heading: 'What owners get in Preveza',
        tone: 'gray',
        bullets: [
          'A management team based locally, with the same tradespeople we use on our own building',
          'Holiday-let operations tested every season at L\'Incanto: pricing calendar, cleaning, guest communication',
          'Long-term letting for flats in the town: tenant screening, myAADE lease registration, rent collection',
          'Maintenance and winter care for coastal properties',
          'Rental valuation before you let or buy',
        ],
      },
      {
        heading: 'The building we operate: L\'Incanto Apartments',
        paragraphs: [
          'Ten self-catering apartments in one building at Chroneika, four kilometres north of Preveza, open June to September, booked direct at lincanto.gr and through the platforms. It is where we test everything we do for owners.',
        ],
        image: { ...IMG_BUILDING, alt: 'L\'Incanto Apartments building in Chroneika, Preveza, operated by SM Holdings' },
        cards: [{ title: 'How we operate L\'Incanto', text: 'The property, our role and what the operation involves.', href: '/en/hospitality/lincanto-apartments' }],
      },
    ],
    faq: {
      title: 'Preveza — frequently asked questions',
      items: [
        { question: 'Do you manage properties in Preveza town or only on the coast?', answer: 'Both. Flats in the town are mostly long-term lets, sometimes short-term in summer; the coast north of the town is holiday lets. We manage both types.' },
        { question: 'When is the holiday season in Preveza?', answer: 'June to September, with July and August the peak. Some properties take bookings in May and October, but most close for winter.' },
        { question: 'How far is Aktion airport from the beaches?', answer: 'Aktion is on the far side of the Preveza channel; the coast north of the town is about 10 kilometres from the airport by road through the undersea tunnel.' },
        { question: 'Do you also cover Parga, Lefkada or Arta?', answer: 'Our day-to-day operation is the Preveza area. For properties further away we decide case by case whether we can do the job properly — ask us.' },
      ],
    },
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyManagement', title: 'Property management' },
        { key: 'shortTermRentalManagement', title: 'Short-term rental management' },
        { key: 'realEstate', title: 'Real estate services' },
        { key: 'investment', title: 'Investment in Preveza' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
        { key: 'properties', title: 'Properties for rent' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'seeker' },
  },
  el: {
    metaTitle: 'Διαχείριση Ακινήτων & Ακίνητα στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Διαχείριση ακινήτων, λειτουργία καταλυμάτων διακοπών και υποστήριξη σε θέματα ακινήτων στην Πρέβεζα από τοπική ομάδα: οι περιοχές που εξυπηρετούμε, πώς λειτουργεί εδώ η βραχυχρόνια μίσθωση, τι λαμβάνουν οι ιδιοκτήτες και το κτίριο που λειτουργούμε στα Χρονέικα.',
    breadcrumb: 'Πρέβεζα',
    h1: 'Διαχείριση Ακινήτων στην Πρέβεζα',
    intro:
      'Η Πρέβεζα είναι ο τόπος όπου δραστηριοποιείται η SM Holdings. Το γραφείο μας είναι στη Φιλιππιάδα, 40 λεπτά προς την ενδοχώρα· το δικό μας κτίριο, τα L\'Incanto Apartments, είναι στην ακτή στα Χρονέικα· και τα ακίνητα που διαχειριζόμαστε για ιδιοκτήτες βρίσκονται ανάμεσα στην πόλη της Πρέβεζας και τις παραλίες βόρειά της. Η σελίδα απευθύνεται σε ιδιοκτήτες και αγοραστές που θέλουν να καταλάβουν την περιοχή πριν αποφασίσουν οτιδήποτε.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Περιοχές που εξυπηρετούμε',
        paragraphs: [
          'Η πόλη της Πρέβεζας — παλιά πόλη, λιμάνι και οι κατοικημένοι δρόμοι πίσω τους, όπου τα διαμερίσματα εκμισθώνονται μακροχρόνια όλο τον χρόνο και βραχυχρόνια το καλοκαίρι. Η ακτή βόρεια της πόλης στο Ιόνιο — Χρονέικα, Καλαμίτσι, Μονολίθι, Κανάλι — μια λωρίδα παραθαλάσσιων οικισμών όπου βρίσκονται τα περισσότερα καταλύματα διακοπών. Η Νικόπολη και τα χωριά ανάμεσα στην πόλη και τη Φιλιππιάδα. Η Φιλιππιάδα και ο Δήμος Ζηρού, όπου είναι το γραφείο μας και όπου η ζήτηση είναι για μόνιμη κατοικία.',
        ],
        image: { ...IMG_SEAFRONT, alt: 'Ο παραθαλάσσιος χώρος των L\'Incanto Apartments στα Χρονέικα Πρέβεζας στο ηλιοβασίλεμα' },
      },
      {
        heading: 'Πώς λειτουργεί εδώ η βραχυχρόνια μίσθωση',
        tone: 'gray',
        paragraphs: [
          'Η ζήτηση είναι εποχική και συγκεντρωμένη: Ιούνιος έως Σεπτέμβριος, με Ιούλιο και Αύγουστο γεμάτους. Οι επισκέπτες φτάνουν από το αεροδρόμιο Ακτίου (PVK), λίγα λεπτά από την ακτή, οδικώς από τα Ιωάννινα και την Εγνατία, και με πλοίο από την Ιταλία μέσω Ηγουμενίτσας. Οι ιταλικές οικογένειες είναι μεγάλο μέρος της καλοκαιρινής αγοράς, γι\' αυτό δουλεύουμε και στα ιταλικά εκτός από ελληνικά και αγγλικά.',
          'Τα περισσότερα καταλύματα διακοπών κλείνουν τον χειμώνα. Το ρεαλιστικό ημερολόγιο ενός ιδιοκτήτη είναι επομένως περίπου τέσσερις μήνες εκμίσθωσης και οκτώ μήνες φροντίδας — γι\' αυτό η συντήρηση και οι χειμερινοί έλεγχοι είναι μέρος της υπηρεσίας, όχι έξτρα.',
        ],
      },
      {
        heading: 'Αεροδρόμιο και τουριστικό πλαίσιο',
        paragraphs: [
          'Το αεροδρόμιο Ακτίου, στην πλευρά της Λευκάδας του στενού της Πρέβεζας, φέρνει το καλοκαίρι πτήσεις charter και εποχικές τακτικές από τη βόρεια και κεντρική Ευρώπη. Η Πρέβεζα είναι επίσης η οδική πύλη προς τη Λευκάδα, και οι ημερήσιες εκδρομές σε Πάργα, Αχέροντα, Νικόπολη και Αμβρακικό κρατούν τους επισκέπτες στην περιοχή για μία εβδομάδα ή περισσότερο. Τίποτα από αυτά δεν αλλάζει το βασικό για τον ιδιοκτήτη: η σεζόν είναι σύντομη και το ακίνητο πρέπει να είναι έτοιμο γι\' αυτήν.',
        ],
      },
      {
        heading: 'Τι λαμβάνουν οι ιδιοκτήτες στην Πρέβεζα',
        tone: 'gray',
        bullets: [
          'Ομάδα διαχείρισης με τοπική έδρα, με τους ίδιους τεχνικούς που χρησιμοποιούμε στο δικό μας κτίριο',
          'Λειτουργία καταλυμάτων διακοπών που δοκιμάζεται κάθε σεζόν στο L\'Incanto: ημερολόγιο τιμών, καθαριότητα, επικοινωνία με επισκέπτες',
          'Μακροχρόνια μίσθωση για διαμερίσματα στην πόλη: έλεγχος ενοικιαστή, δήλωση μισθωτηρίου στο myAADE, είσπραξη ενοικίων',
          'Συντήρηση και χειμερινή φροντίδα παραθαλάσσιων ακινήτων',
          'Εκτίμηση ενοικίου πριν εκμισθώσετε ή αγοράσετε',
        ],
      },
      {
        heading: 'Το κτίριο που λειτουργούμε: L\'Incanto Apartments',
        paragraphs: [
          'Δέκα αυτόνομα διαμερίσματα σε ένα κτίριο στα Χρονέικα, τέσσερα χιλιόμετρα βόρεια της Πρέβεζας, ανοιχτό Ιούνιο έως Σεπτέμβριο, με απευθείας κρατήσεις στο lincanto.gr και μέσω πλατφορμών. Εκεί δοκιμάζουμε ό,τι κάνουμε για τους ιδιοκτήτες.',
        ],
        image: { ...IMG_BUILDING, alt: 'Το κτίριο των L\'Incanto Apartments στα Χρονέικα Πρέβεζας, που λειτουργεί η SM Holdings' },
        cards: [{ title: 'Πώς λειτουργούμε το L\'Incanto', text: 'Το ακίνητο, ο ρόλος μας και τι περιλαμβάνει η λειτουργία.', href: '/el/filoxenia/lincanto-apartments' }],
      },
    ],
    faq: {
      title: 'Πρέβεζα — συχνές ερωτήσεις',
      items: [
        { question: 'Διαχειρίζεστε ακίνητα στην πόλη της Πρέβεζας ή μόνο στην ακτή;', answer: 'Και τα δύο. Τα διαμερίσματα στην πόλη είναι κυρίως μακροχρόνιες μισθώσεις, ενίοτε βραχυχρόνιες το καλοκαίρι· η ακτή βόρεια της πόλης είναι καταλύματα διακοπών. Διαχειριζόμαστε και τους δύο τύπους.' },
        { question: 'Πότε είναι η τουριστική σεζόν στην Πρέβεζα;', answer: 'Ιούνιος έως Σεπτέμβριος, με Ιούλιο και Αύγουστο την αιχμή. Κάποια ακίνητα δέχονται κρατήσεις Μάιο και Οκτώβριο, αλλά τα περισσότερα κλείνουν τον χειμώνα.' },
        { question: 'Πόσο απέχει το αεροδρόμιο Ακτίου από τις παραλίες;', answer: 'Το Άκτιο είναι στην απέναντι πλευρά του στενού της Πρέβεζας· η ακτή βόρεια της πόλης απέχει περίπου 10 χιλιόμετρα οδικώς μέσω της υποθαλάσσιας σήραγγας.' },
        { question: 'Καλύπτετε και Πάργα, Λευκάδα ή Άρτα;', answer: 'Η καθημερινή μας λειτουργία είναι η περιοχή της Πρέβεζας. Για ακίνητα πιο μακριά αποφασίζουμε κατά περίπτωση αν μπορούμε να κάνουμε σωστά τη δουλειά — ρωτήστε μας.' },
      ],
    },
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων' },
        { key: 'shortTermRentalManagement', title: 'Διαχείριση βραχυχρόνιας μίσθωσης' },
        { key: 'realEstate', title: 'Υπηρεσίες ακινήτων' },
        { key: 'investment', title: 'Επένδυση στην Πρέβεζα' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
        { key: 'properties', title: 'Ακίνητα προς ενοικίαση' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'seeker' },
  },
}

export const hospitality: Localized<PageContent> = {
  en: {
    metaTitle: "L'Incanto Apartments, Chroneika: Hospitality Operations by SM Holdings",
    metaDescription:
      "L'Incanto Apartments is a ten-apartment building at Chroneika, Preveza, operated by SM Holdings: what the property is, our role, how bookings, guests, housekeeping and maintenance are run, and where to book a stay.",
    breadcrumb: "L'Incanto Apartments",
    h1: "L'Incanto Apartments: Hospitality Operations in Chroneika, Preveza",
    intro:
      "L'Incanto is the hospitality brand of SM Holdings: a single building of ten self-catering holiday apartments at Chroneika, four kilometres north of Preveza on the Ionian coast, open from June to September. It is our own property, run by our own team, and it is the operation every service we offer to owners is tested against. Guests book on the property's own site, lincanto.gr; this page is about how it is run.",
    heroCta: { primary: 'guest', secondary: 'owner' },
    sections: [
      {
        heading: 'The property',
        facts: [
          { label: 'What it is', value: 'Ten self-catering apartments in one building — not a hotel: no restaurant, bar or breakfast service' },
          { label: 'Where', value: 'Aristotelous 26, Chroneika, Preveza 48100 — on the coast, four kilometres north of Preveza town' },
          { label: 'Apartments', value: 'Sleep two to five; two ground-floor apartments with step-free access, which also accept pets' },
          { label: 'In every apartment', value: 'Sea view, fully equipped kitchen, washing machine, air-conditioning, WiFi, free parking' },
          { label: 'Season', value: 'June to September' },
          { label: 'Languages', value: 'Greek, English, Italian' },
          { label: 'Booking', value: 'Direct at lincanto.gr, and on the major booking platforms', href: 'https://lincanto.gr' },
        ],
        image: { ...IMG_BUILDING, alt: "L'Incanto Apartments building in Chroneika, Preveza" },
      },
      {
        heading: "SM Holdings' role",
        tone: 'gray',
        paragraphs: [
          "S. M. HOLDINGS Ε.Ε. owns and operates L'Incanto. There is no third-party operator: pricing, distribution, guest communication, housekeeping, maintenance and the direct-booking website are all run by the same team that manages properties for owners. The property is labelled \"by SM Holdings\" on its own site for that reason.",
        ],
      },
      {
        heading: 'Distribution and booking set-up',
        paragraphs: [
          'The apartments are listed on the major booking platforms and on a direct-booking site with live availability and online payment. Calendars are synchronised so a night sold on one channel is closed on all the others. Rates are set per apartment and per season, with minimum-stay rules in July and August. Direct bookings carry no platform commission, which is why the property\'s own site is promoted to returning guests.',
        ],
      },
      {
        heading: 'Guest operations',
        tone: 'gray',
        bullets: [
          'Enquiries answered in Greek, English and Italian',
          'Arrival instructions, check-in and a walk-through of the apartment',
          'A phone number answered throughout the stay',
          'Local information written by the team — beaches, Preveza town, day trips',
          'Review request after departure and a reply to every review',
        ],
      },
      {
        heading: 'Housekeeping and maintenance',
        paragraphs: [
          'Every apartment is cleaned and inspected between stays and linen is changed on a fixed schedule during longer stays. Maintenance during the season is handled the same day by the local electricians and plumbers we use across all managed properties. At the end of September the building is shut down for winter and checked monthly until it is prepared again in spring.',
        ],
        image: { ...IMG_SEAFRONT, alt: "Seafront grounds of L'Incanto Apartments at sunset" },
      },
      {
        heading: 'What this means for owners',
        tone: 'gray',
        paragraphs: [
          'When we propose a pricing calendar, a cleaning routine or a guest-communication process for your property, it is one we run ourselves every summer at L\'Incanto. We do not publish occupancy or revenue figures for the property; if you are considering us as a manager we will discuss the operation with you directly.',
        ],
      },
    ],
    related: {
      title: 'Related pages',
      links: [
        { key: 'shortTermRentalManagement', title: 'Short-term rental management' },
        { key: 'guestManagement', title: 'Guest management' },
        { key: 'preveza', title: 'Preveza' },
        { key: 'owners', title: 'For property owners' },
      ],
    },
    closing: { title: 'Planning a stay, or own a similar property?', text: 'Guests book direct at lincanto.gr. Owners: this is the operation we would run for you.', primary: 'guest', secondary: 'owner' },
  },
  el: {
    metaTitle: "L'Incanto Apartments, Χρονέικα: Λειτουργία Φιλοξενίας από την SM Holdings",
    metaDescription:
      "Τα L'Incanto Apartments είναι κτίριο δέκα διαμερισμάτων στα Χρονέικα Πρέβεζας που λειτουργεί η SM Holdings: τι είναι το ακίνητο, ο ρόλος μας, πώς γίνονται κρατήσεις, φιλοξενία, καθαριότητα και συντήρηση, και πού κλείνετε διαμονή.",
    breadcrumb: "L'Incanto Apartments",
    h1: "L'Incanto Apartments: Λειτουργία Φιλοξενίας στα Χρονέικα Πρέβεζας",
    intro:
      "Το L'Incanto είναι η μάρκα φιλοξενίας της SM Holdings: ένα κτίριο δέκα αυτόνομων διαμερισμάτων διακοπών στα Χρονέικα, τέσσερα χιλιόμετρα βόρεια της Πρέβεζας στο Ιόνιο, ανοιχτό από Ιούνιο έως Σεπτέμβριο. Είναι δικό μας ακίνητο, το λειτουργεί η δική μας ομάδα, και σε αυτό δοκιμάζεται κάθε υπηρεσία που προσφέρουμε σε ιδιοκτήτες. Οι επισκέπτες κλείνουν στο site του ακινήτου, lincanto.gr· αυτή η σελίδα αφορά το πώς λειτουργεί.",
    heroCta: { primary: 'guest', secondary: 'owner' },
    sections: [
      {
        heading: 'Το ακίνητο',
        facts: [
          { label: 'Τι είναι', value: 'Δέκα αυτόνομα διαμερίσματα σε ένα κτίριο — όχι ξενοδοχείο: χωρίς εστιατόριο, μπαρ ή πρωινό' },
          { label: 'Πού', value: 'Αριστοτέλους 26, Χρονέικα, Πρέβεζα 48100 — στην ακτή, τέσσερα χιλιόμετρα βόρεια της πόλης' },
          { label: 'Διαμερίσματα', value: 'Για δύο έως πέντε άτομα· δύο ισόγεια με πρόσβαση χωρίς σκαλιά, που δέχονται και κατοικίδια' },
          { label: 'Σε κάθε διαμέρισμα', value: 'Θέα θάλασσα, πλήρως εξοπλισμένη κουζίνα, πλυντήριο, κλιματισμός, WiFi, δωρεάν πάρκινγκ' },
          { label: 'Σεζόν', value: 'Ιούνιος έως Σεπτέμβριος' },
          { label: 'Γλώσσες', value: 'Ελληνικά, αγγλικά, ιταλικά' },
          { label: 'Κρατήσεις', value: 'Απευθείας στο lincanto.gr και στις μεγάλες πλατφόρμες', href: 'https://lincanto.gr' },
        ],
        image: { ...IMG_BUILDING, alt: "Το κτίριο των L'Incanto Apartments στα Χρονέικα Πρέβεζας" },
      },
      {
        heading: 'Ο ρόλος της SM Holdings',
        tone: 'gray',
        paragraphs: [
          "Η S. M. HOLDINGS Ε.Ε. έχει την ιδιοκτησία και τη λειτουργία του L'Incanto. Δεν υπάρχει τρίτος διαχειριστής: τιμολόγηση, διανομή, επικοινωνία με επισκέπτες, καθαριότητα, συντήρηση και το site απευθείας κρατήσεων τρέχουν από την ίδια ομάδα που διαχειρίζεται ακίνητα για ιδιοκτήτες. Γι' αυτό το ακίνητο φέρει την ένδειξη «by SM Holdings» στο δικό του site.",
        ],
      },
      {
        heading: 'Διανομή και κρατήσεις',
        paragraphs: [
          'Τα διαμερίσματα είναι καταχωρημένα στις μεγάλες πλατφόρμες και σε site απευθείας κρατήσεων με ζωντανή διαθεσιμότητα και online πληρωμή. Τα ημερολόγια συγχρονίζονται ώστε μια διανυκτέρευση που πωλείται σε ένα κανάλι να κλείνει σε όλα τα άλλα. Οι τιμές ορίζονται ανά διαμέρισμα και σεζόν, με ελάχιστη διαμονή Ιούλιο και Αύγουστο. Οι απευθείας κρατήσεις δεν έχουν προμήθεια πλατφόρμας, γι\' αυτό το site του ακινήτου προωθείται στους επαναλαμβανόμενους επισκέπτες.',
        ],
      },
      {
        heading: 'Λειτουργία φιλοξενίας',
        tone: 'gray',
        bullets: [
          'Απαντήσεις σε ερωτήματα στα ελληνικά, αγγλικά και ιταλικά',
          'Οδηγίες άφιξης, check-in και ξενάγηση στο διαμέρισμα',
          'Αριθμός τηλεφώνου που απαντάται σε όλη τη διαμονή',
          'Τοπικές πληροφορίες γραμμένες από την ομάδα — παραλίες, πόλη της Πρέβεζας, εκδρομές',
          'Αίτημα κριτικής μετά την αναχώρηση και απάντηση σε κάθε κριτική',
        ],
      },
      {
        heading: 'Καθαριότητα και συντήρηση',
        paragraphs: [
          'Κάθε διαμέρισμα καθαρίζεται και επιθεωρείται ανάμεσα στις διαμονές και τα λευκά είδη αλλάζουν σε σταθερό πρόγραμμα στις μεγαλύτερες διαμονές. Η συντήρηση κατά τη σεζόν γίνεται την ίδια μέρα από τους τοπικούς ηλεκτρολόγους και υδραυλικούς που χρησιμοποιούμε σε όλα τα ακίνητα υπό διαχείριση. Στο τέλος Σεπτεμβρίου το κτίριο κλείνει για τον χειμώνα και ελέγχεται μηνιαία μέχρι να προετοιμαστεί ξανά την άνοιξη.',
        ],
        image: { ...IMG_SEAFRONT, alt: "Ο παραθαλάσσιος χώρος των L'Incanto Apartments στο ηλιοβασίλεμα" },
      },
      {
        heading: 'Τι σημαίνει αυτό για τους ιδιοκτήτες',
        tone: 'gray',
        paragraphs: [
          'Όταν προτείνουμε ημερολόγιο τιμών, ρουτίνα καθαριότητας ή διαδικασία επικοινωνίας με επισκέπτες για το ακίνητό σας, είναι κάτι που τρέχουμε οι ίδιοι κάθε καλοκαίρι στο L\'Incanto. Δεν δημοσιεύουμε στοιχεία πληρότητας ή εσόδων για το ακίνητο· αν μας εξετάζετε ως διαχειριστή, θα συζητήσουμε τη λειτουργία μαζί σας απευθείας.',
        ],
      },
    ],
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'shortTermRentalManagement', title: 'Διαχείριση βραχυχρόνιας μίσθωσης' },
        { key: 'guestManagement', title: 'Διαχείριση επισκεπτών' },
        { key: 'preveza', title: 'Πρέβεζα' },
        { key: 'owners', title: 'Για ιδιοκτήτες' },
      ],
    },
    closing: { title: 'Σχεδιάζετε διαμονή ή έχετε παρόμοιο ακίνητο;', text: 'Οι επισκέπτες κλείνουν απευθείας στο lincanto.gr. Ιδιοκτήτες: αυτή είναι η λειτουργία που θα τρέχαμε για εσάς.', primary: 'guest', secondary: 'owner' },
  },
}
