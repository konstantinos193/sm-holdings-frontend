import type { Localized, PageContent } from './types'

// Wording note: S. M. HOLDINGS Ε.Ε. is registered for leasing/managing real
// estate (KAD 68.20) and buying/selling its own real estate (68.11) — it is
// not registered as an estate agency (68.31). The copy below therefore
// describes rentals from managed stock, group-owned sales, and coordination
// with licensed brokers, lawyers and notaries — not brokerage.

export const realEstate: Localized<PageContent> = {
  en: {
    metaTitle: 'Real Estate Services in Preveza, Greece | SM Holdings',
    metaDescription:
      'Real estate in Preveza with local support from SM Holdings: properties for rent from the portfolio we manage, rental valuations, help for buyers and investors, and coordination with licensed brokers, lawyers and notaries.',
    breadcrumb: 'Real Estate',
    h1: 'Real Estate Services in Preveza, Greece',
    intro:
      'SM Holdings is a property management company, not an estate agency. On the real-estate side we let the properties in our managed portfolio, value rental property for owners, help buyers and investors understand the Preveza market, and coordinate the licensed professionals a purchase in Greece requires. This page explains exactly what we do and what we hand to others.',
    heroCta: { primary: 'seeker', secondary: 'call' },
    sections: [
      {
        heading: 'Geographic focus',
        paragraphs: [
          'Preveza town and the coast north of it — Chroneika, Kalamitsi, Monolithi, Kanali — plus the villages of the Ziros municipality around Filippiada where our office is. We know the rental market here because we operate in it every season; we do not claim the same knowledge of Athens, Thessaloniki or the islands.',
        ],
      },
      {
        heading: 'Rentals',
        tone: 'gray',
        paragraphs: [
          'Properties available for rent are the ones we manage on behalf of owners or own ourselves. Holiday stays at L\'Incanto Apartments are booked on lincanto.gr. Long-term flats and houses are listed on this site as they become available; tell us what you need and we will let you know when something suitable comes up.',
        ],
        cards: [
          { title: 'Properties for rent', text: 'Current listings from the managed portfolio.', href: '/en/properties' },
          { title: "L'Incanto Apartments", text: 'Holiday apartments at Chroneika, June–September.', href: '/en/hospitality/lincanto-apartments' },
        ],
      },
      {
        heading: 'Sales',
        paragraphs: [
          'We sell property the group owns or develops. We do not act as a broker for third-party sales. If you are looking to buy in Preveza we will point you to licensed local estate agents, and where a purchase leads to a rental — a holiday home you will let in summer, a flat you will let long-term — we advise on rental potential before you commit and manage the property afterwards.',
        ],
      },
      {
        heading: 'Valuations',
        tone: 'gray',
        paragraphs: [
          'We produce rental valuations: what a property can earn as a holiday let by season and as a long-term let by month, based on the rates we set and observe in Preveza. For a certified market valuation (bank, tax, court) we refer you to a certified valuer.',
        ],
        cards: [{ title: 'Rental valuation', text: 'What your property can earn, and what it needs to get there.', href: '/en/real-estate/property-valuation' }],
      },
      {
        heading: 'Documentation and professionals',
        paragraphs: [
          'A purchase in Greece involves a lawyer (title search, contract), a notary (deed), an engineer (building compliance certificate, energy certificate) and an accountant (tax number, tax declarations). We do not provide these services. We coordinate the professionals we work with, in English where needed, and keep the process moving — nothing more, nothing less.',
        ],
      },
      {
        heading: 'Investor support',
        tone: 'gray',
        paragraphs: [
          'For buyers whose goal is rental income we assess the property\'s letting potential, the work needed to reach letting standard, and the running costs, and we manage it after purchase. See the investment page for how that works.',
        ],
        cards: [{ title: 'Real estate investment in Preveza', text: 'Process, due-diligence scope and what we do not do.', href: '/en/investment' }],
      },
    ],
    faq: {
      title: 'Real estate — frequently asked questions',
      items: [
        { question: 'Are you an estate agency?', answer: 'No. S. M. HOLDINGS Ε.Ε. is registered for real estate leasing and management and for buying and selling its own property. We do not broker third-party sales. For a purchase we refer you to licensed agents and coordinate the lawyer, notary and engineer.' },
        { question: 'Can I rent a flat in Preveza through you?', answer: 'Yes, from the portfolio we manage. Availability changes; use the contact form and tell us what you are looking for, and we will contact you when a suitable property comes up.' },
        { question: 'Do you help foreign buyers?', answer: 'We help with the practical side: assessing rental potential, coordinating English-speaking professionals and managing the property after purchase. Legal, tax and notarial work is done by the licensed professionals themselves.' },
      ],
    },
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyValuation', title: 'Rental valuation' },
        { key: 'investment', title: 'Real estate investment' },
        { key: 'preveza', title: 'Preveza' },
        { key: 'propertyManagement', title: 'Property management' },
      ],
    },
    closing: { title: 'Looking for a property in Preveza?', text: 'Tell us what you need — rental, long-term, or a property to buy and let — and we will tell you what we can do and who else you need.', primary: 'seeker', secondary: 'investor' },
  },
  el: {
    metaTitle: 'Υπηρεσίες Ακινήτων στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Ακίνητα στην Πρέβεζα με τοπική υποστήριξη από την SM Holdings: ακίνητα προς ενοικίαση από το χαρτοφυλάκιο που διαχειριζόμαστε, εκτιμήσεις ενοικίου, βοήθεια για αγοραστές και επενδυτές, και συντονισμός με μεσίτες, δικηγόρους και συμβολαιογράφους.',
    breadcrumb: 'Ακίνητα',
    h1: 'Υπηρεσίες Ακινήτων στην Πρέβεζα',
    intro:
      'Η SM Holdings είναι εταιρεία διαχείρισης ακινήτων, όχι μεσιτικό γραφείο. Στο κομμάτι των ακινήτων εκμισθώνουμε τα ακίνητα του χαρτοφυλακίου που διαχειριζόμαστε, εκτιμούμε τη μισθωτική αξία για ιδιοκτήτες, βοηθάμε αγοραστές και επενδυτές να κατανοήσουν την αγορά της Πρέβεζας και συντονίζουμε τους αδειοδοτημένους επαγγελματίες που απαιτεί μια αγορά στην Ελλάδα. Η σελίδα εξηγεί ακριβώς τι κάνουμε και τι αναθέτουμε σε άλλους.',
    heroCta: { primary: 'seeker', secondary: 'call' },
    sections: [
      {
        heading: 'Γεωγραφική εστίαση',
        paragraphs: [
          'Η πόλη της Πρέβεζας και η ακτή βόρεια από αυτήν — Χρονέικα, Καλαμίτσι, Μονολίθι, Κανάλι — καθώς και τα χωριά του Δήμου Ζηρού γύρω από τη Φιλιππιάδα όπου βρίσκεται το γραφείο μας. Γνωρίζουμε την αγορά ενοικίασης εδώ γιατί λειτουργούμε σε αυτήν κάθε σεζόν· δεν ισχυριζόμαστε την ίδια γνώση για Αθήνα, Θεσσαλονίκη ή τα νησιά.',
        ],
      },
      {
        heading: 'Ενοικιάσεις',
        tone: 'gray',
        paragraphs: [
          'Τα ακίνητα προς ενοικίαση είναι αυτά που διαχειριζόμαστε για λογαριασμό ιδιοκτητών ή που μας ανήκουν. Οι διακοπές στα L\'Incanto Apartments κλείνονται στο lincanto.gr. Διαμερίσματα και σπίτια για μακροχρόνια μίσθωση καταχωρούνται σε αυτό το site όταν είναι διαθέσιμα· πείτε μας τι χρειάζεστε και θα σας ενημερώσουμε όταν προκύψει κάτι κατάλληλο.',
        ],
        cards: [
          { title: 'Ακίνητα προς ενοικίαση', text: 'Τρέχουσες καταχωρήσεις από το χαρτοφυλάκιο υπό διαχείριση.', href: '/el/enoikiaseis' },
          { title: "L'Incanto Apartments", text: 'Διαμερίσματα διακοπών στα Χρονέικα, Ιούνιος–Σεπτέμβριος.', href: '/el/filoxenia/lincanto-apartments' },
        ],
      },
      {
        heading: 'Πωλήσεις',
        paragraphs: [
          'Πουλάμε ακίνητα που ανήκουν στον όμιλο ή που αναπτύσσει ο όμιλος. Δεν μεσιτεύουμε πωλήσεις τρίτων. Αν ψάχνετε να αγοράσετε στην Πρέβεζα, θα σας παραπέμψουμε σε αδειοδοτημένους τοπικούς μεσίτες, και όπου η αγορά οδηγεί σε εκμίσθωση — εξοχικό που θα ενοικιάζετε το καλοκαίρι, διαμέρισμα για μακροχρόνια — συμβουλεύουμε για τη μισθωτική δυναμική πριν δεσμευτείτε και διαχειριζόμαστε το ακίνητο μετά.',
        ],
      },
      {
        heading: 'Εκτιμήσεις',
        tone: 'gray',
        paragraphs: [
          'Συντάσσουμε εκτιμήσεις μισθωτικής αξίας: τι μπορεί να αποδώσει ένα ακίνητο ως κατάλυμα διακοπών ανά σεζόν και ως μακροχρόνια μίσθωση ανά μήνα, με βάση τις τιμές που ορίζουμε και παρατηρούμε στην Πρέβεζα. Για πιστοποιημένη εκτίμηση αγοραίας αξίας (τράπεζα, εφορία, δικαστήριο) σας παραπέμπουμε σε πιστοποιημένο εκτιμητή.',
        ],
        cards: [{ title: 'Εκτίμηση ενοικίου', text: 'Τι μπορεί να αποδώσει το ακίνητό σας και τι χρειάζεται για να φτάσει εκεί.', href: '/el/akinita/ektimisi-akinitou' }],
      },
      {
        heading: 'Έγγραφα και επαγγελματίες',
        paragraphs: [
          'Μια αγορά στην Ελλάδα απαιτεί δικηγόρο (έλεγχος τίτλων, συμβόλαιο), συμβολαιογράφο (πράξη), μηχανικό (βεβαίωση μηχανικού, ενεργειακό πιστοποιητικό) και λογιστή (ΑΦΜ, δηλώσεις). Δεν παρέχουμε αυτές τις υπηρεσίες. Συντονίζουμε τους επαγγελματίες με τους οποίους συνεργαζόμαστε, στα αγγλικά όπου χρειάζεται, και κρατάμε τη διαδικασία σε κίνηση — τίποτα περισσότερο, τίποτα λιγότερο.',
        ],
      },
      {
        heading: 'Υποστήριξη επενδυτών',
        tone: 'gray',
        paragraphs: [
          'Για αγοραστές με στόχο το μισθωτικό εισόδημα, αξιολογούμε τη δυναμική εκμίσθωσης του ακινήτου, τις εργασίες που χρειάζεται για να φτάσει σε επίπεδο εκμίσθωσης και τα λειτουργικά κόστη, και το διαχειριζόμαστε μετά την αγορά. Δείτε τη σελίδα επενδύσεων για το πώς λειτουργεί.',
        ],
        cards: [{ title: 'Επένδυση σε ακίνητα στην Πρέβεζα', text: 'Διαδικασία, εύρος ελέγχου και τι δεν κάνουμε.', href: '/el/ependyseis' }],
      },
    ],
    faq: {
      title: 'Ακίνητα — συχνές ερωτήσεις',
      items: [
        { question: 'Είστε μεσιτικό γραφείο;', answer: 'Όχι. Η S. M. HOLDINGS Ε.Ε. είναι καταχωρημένη για εκμίσθωση και διαχείριση ακινήτων και για αγοραπωλησία ιδιόκτητων ακινήτων. Δεν μεσιτεύουμε πωλήσεις τρίτων. Για αγορά σας παραπέμπουμε σε αδειοδοτημένους μεσίτες και συντονίζουμε δικηγόρο, συμβολαιογράφο και μηχανικό.' },
        { question: 'Μπορώ να νοικιάσω διαμέρισμα στην Πρέβεζα μέσω εσάς;', answer: 'Ναι, από το χαρτοφυλάκιο που διαχειριζόμαστε. Η διαθεσιμότητα αλλάζει· χρησιμοποιήστε τη φόρμα επικοινωνίας, πείτε μας τι ψάχνετε και θα επικοινωνήσουμε όταν προκύψει κατάλληλο ακίνητο.' },
        { question: 'Βοηθάτε αγοραστές από το εξωτερικό;', answer: 'Βοηθάμε στο πρακτικό κομμάτι: αξιολόγηση μισθωτικής δυναμικής, συντονισμός αγγλόφωνων επαγγελματιών και διαχείριση του ακινήτου μετά την αγορά. Το νομικό, φορολογικό και συμβολαιογραφικό έργο γίνεται από τους ίδιους τους αδειοδοτημένους επαγγελματίες.' },
      ],
    },
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyValuation', title: 'Εκτίμηση ενοικίου' },
        { key: 'investment', title: 'Επένδυση σε ακίνητα' },
        { key: 'preveza', title: 'Πρέβεζα' },
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων' },
      ],
    },
    closing: { title: 'Ψάχνετε ακίνητο στην Πρέβεζα;', text: 'Πείτε μας τι χρειάζεστε — ενοικίαση, μακροχρόνια ή ακίνητο για αγορά και εκμίσθωση — και θα σας πούμε τι μπορούμε να κάνουμε και ποιον άλλο χρειάζεστε.', primary: 'seeker', secondary: 'investor' },
  },
}

export const propertyValuation: Localized<PageContent> = {
  en: {
    metaTitle: 'Rental Valuation in Preveza | SM Holdings',
    metaDescription:
      'Rental valuation for property in Preveza: what a house or apartment can earn as a holiday let per season and as a long-term let per month, the work needed to reach letting standard, and the running costs.',
    breadcrumb: 'Rental Valuation',
    h1: 'Rental Valuation for Property in Preveza',
    intro:
      'Before you let a property — or buy one to let — you need a realistic number. We assess what a property in the Preveza area can earn as a holiday let and as a long-term let, what it needs to get there, and what it will cost to run. The valuation is based on rates we set and observe every season, not on national averages.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'What the valuation covers',
        bullets: [
          'Achievable nightly rates by season for a holiday let, and the realistic number of let nights',
          'Achievable monthly rent for a long-term let against current asking rents in Preveza',
          'Work needed to reach letting standard, with rough costs',
          'Running costs: cleaning, utilities, maintenance, platform commissions, management',
          'A net-income range for each option so you can compare them',
        ],
      },
      {
        heading: 'What it is not',
        tone: 'gray',
        paragraphs: [
          'It is not a certified market valuation. For a bank, tax or court valuation you need a certified valuer registered with the Ministry of Finance; we can refer you to one.',
        ],
      },
      {
        heading: 'How it works',
        steps: [
          { title: 'Visit', text: 'We see the property, its condition, access and surroundings.' },
          { title: 'Assessment', text: 'We compare it with what we let and what is on the market, and estimate income and costs for each letting option.' },
          { title: 'Written valuation', text: 'You receive a short document with the numbers and our recommendation. If you go on to appoint us, the valuation is free.' },
        ],
      },
    ],
    related: {
      title: 'Related pages',
      links: [
        { key: 'realEstate', title: 'Real estate services' },
        { key: 'investment', title: 'Real estate investment' },
        { key: 'insightShortVsLong', title: 'Short-term vs long-term rental in Preveza' },
      ],
    },
    closing: { title: 'Want a number for your property?', text: 'Ask for a rental valuation. We visit, assess and send you a written estimate.', primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Εκτίμηση Ενοικίου στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Εκτίμηση μισθωτικής αξίας ακινήτου στην Πρέβεζα: τι μπορεί να αποδώσει ένα σπίτι ή διαμέρισμα ως κατάλυμα διακοπών ανά σεζόν και ως μακροχρόνια μίσθωση ανά μήνα, οι εργασίες που χρειάζεται και τα λειτουργικά κόστη.',
    breadcrumb: 'Εκτίμηση Ενοικίου',
    h1: 'Εκτίμηση Ενοικίου για Ακίνητα στην Πρέβεζα',
    intro:
      'Πριν εκμισθώσετε ένα ακίνητο — ή αγοράσετε ένα για εκμίσθωση — χρειάζεστε έναν ρεαλιστικό αριθμό. Αξιολογούμε τι μπορεί να αποδώσει ένα ακίνητο στην περιοχή της Πρέβεζας ως κατάλυμα διακοπών και ως μακροχρόνια μίσθωση, τι χρειάζεται για να φτάσει εκεί και τι θα κοστίζει η λειτουργία του. Η εκτίμηση βασίζεται σε τιμές που ορίζουμε και παρατηρούμε κάθε σεζόν, όχι σε εθνικούς μέσους όρους.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Τι καλύπτει η εκτίμηση',
        bullets: [
          'Εφικτές τιμές ανά διανυκτέρευση και σεζόν για κατάλυμα διακοπών, και ρεαλιστικός αριθμός διανυκτερεύσεων',
          'Εφικτό μηνιαίο ενοίκιο για μακροχρόνια μίσθωση σε σχέση με τις τρέχουσες ζητούμενες τιμές στην Πρέβεζα',
          'Εργασίες που χρειάζονται για επίπεδο εκμίσθωσης, με ενδεικτικά κόστη',
          'Λειτουργικά κόστη: καθαριότητα, λογαριασμοί, συντήρηση, προμήθειες πλατφορμών, διαχείριση',
          'Εύρος καθαρού εισοδήματος για κάθε επιλογή ώστε να τις συγκρίνετε',
        ],
      },
      {
        heading: 'Τι δεν είναι',
        tone: 'gray',
        paragraphs: [
          'Δεν είναι πιστοποιημένη εκτίμηση αγοραίας αξίας. Για τράπεζα, εφορία ή δικαστήριο χρειάζεστε πιστοποιημένο εκτιμητή εγγεγραμμένο στο Μητρώο του Υπουργείου Οικονομικών· μπορούμε να σας παραπέμψουμε.',
        ],
      },
      {
        heading: 'Πώς γίνεται',
        steps: [
          { title: 'Επίσκεψη', text: 'Βλέπουμε το ακίνητο, την κατάστασή του, την πρόσβαση και το περιβάλλον.' },
          { title: 'Αξιολόγηση', text: 'Το συγκρίνουμε με όσα εκμισθώνουμε και όσα είναι στην αγορά, και εκτιμούμε έσοδα και κόστη για κάθε επιλογή.' },
          { title: 'Γραπτή εκτίμηση', text: 'Λαμβάνετε ένα σύντομο έγγραφο με τους αριθμούς και τη σύστασή μας. Αν μας αναθέσετε τη διαχείριση, η εκτίμηση είναι δωρεάν.' },
        ],
      },
    ],
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'realEstate', title: 'Υπηρεσίες ακινήτων' },
        { key: 'investment', title: 'Επένδυση σε ακίνητα' },
        { key: 'insightShortVsLong', title: 'Βραχυχρόνια ή μακροχρόνια μίσθωση στην Πρέβεζα' },
      ],
    },
    closing: { title: 'Θέλετε έναν αριθμό για το ακίνητό σας;', text: 'Ζητήστε εκτίμηση ενοικίου. Επισκεπτόμαστε, αξιολογούμε και σας στέλνουμε γραπτή εκτίμηση.', primary: 'owner', secondary: 'call' },
  },
}

export const investment: Localized<PageContent> = {
  en: {
    metaTitle: 'Real Estate Investment in Preveza | SM Holdings',
    metaDescription:
      'Buy-to-let and holiday-rental investment in Preveza: the property types that let well, our assessment process, what due diligence we cover, what we hand to lawyers and accountants, and how we manage the property afterwards.',
    breadcrumb: 'Investment',
    h1: 'Real Estate Investment in Preveza',
    intro:
      'We help people who want to buy property in the Preveza area for rental income. Our part is the operational one: whether a specific property will let, what it will earn, what it needs, and running it afterwards. Legal, tax and financial advice come from licensed professionals we coordinate with — we are clear about that boundary because it protects you.',
    heroCta: { primary: 'investor', secondary: 'call' },
    sections: [
      {
        heading: 'Investment geography',
        paragraphs: [
          'Preveza town and the coast between the town and Monolithi, where summer demand is driven by the beaches, Aktion airport and the Ionian ferries; and Filippiada and the Ziros villages, where demand is year-round residential. We do not advise on areas we do not operate in.',
        ],
      },
      {
        heading: 'Typical asset classes',
        tone: 'gray',
        bullets: [
          'Apartments in small buildings near the coast for holiday letting',
          'Houses with outdoor space for holiday letting to families',
          'Flats in Preveza town for long-term letting',
          'Small multi-unit buildings run as one portfolio — the model we operate at L\'Incanto',
        ],
      },
      {
        heading: 'Process',
        steps: [
          { title: 'Brief', text: 'Your budget, goal (holiday let, long-term let, mixed), timeframe and how involved you want to be.' },
          { title: 'Property assessment', text: 'For each candidate property: location, condition, letting potential, works needed, running costs and a net-income range.' },
          { title: 'Due diligence coordination', text: 'We coordinate the lawyer, engineer, notary and accountant and keep a checklist of what has been done.' },
          { title: 'Set-up and management', text: 'After completion we bring the property to letting standard, register it and manage it under a management agreement.' },
        ],
      },
      {
        heading: 'Due-diligence scope',
        tone: 'gray',
        paragraphs: [
          'What we check ourselves: physical condition, access, orientation and sea view, noise and neighbours, parking, internet, seasonal issues (damp, water pressure, power), the realistic letting calendar and the local competition. What licensed professionals check: title and encumbrances (lawyer), planning and building compliance and the energy certificate (engineer), tax status and ownership structure (accountant), and the deed itself (notary).',
        ],
      },
      {
        heading: 'What we do not provide',
        bullets: [
          'Legal advice, contract drafting or title searches',
          'Tax planning, accounting or advice on ownership structures',
          'Mortgage brokerage or financial planning',
          'Guaranteed returns — we give ranges based on what we observe, never a promise',
        ],
      },
      {
        heading: 'Sample analysis structure',
        tone: 'gray',
        facts: [
          { label: 'Property', value: 'Type, size, condition, location, distance to beach / town / airport' },
          { label: 'Letting option A — holiday let', value: 'Nightly rates by season, let nights, gross income, platform commission, cleaning, management, net' },
          { label: 'Letting option B — long-term', value: 'Monthly rent, vacancy allowance, management, net' },
          { label: 'One-off costs', value: 'Works to letting standard, furniture and equipment, registration' },
          { label: 'Risks', value: 'Seasonality, regulation of short-term rental, maintenance exposure of a coastal property' },
        ],
      },
    ],
    faq: {
      title: 'Investment — frequently asked questions',
      items: [
        { question: 'Can you tell me what a property will yield?', answer: 'We give a net-income range for each letting option, based on rates and occupancy we observe in Preveza. We do not quote a single guaranteed yield; anyone who does is guessing.' },
        { question: 'Do you sell properties to investors?', answer: 'Only property the group owns or develops. For other purchases we refer you to licensed local agents and take over once you own the property.' },
        { question: 'Can you manage the property after I buy it?', answer: 'Yes — that is the point. See the property management page for what the service includes and how fees work.' },
      ],
    },
    related: {
      title: 'Related pages',
      links: [
        { key: 'realEstate', title: 'Real estate services' },
        { key: 'propertyValuation', title: 'Rental valuation' },
        { key: 'propertyManagement', title: 'Property management' },
        { key: 'preveza', title: 'Preveza' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
      ],
    },
    closing: { title: 'Considering a purchase in Preveza?', text: 'Tell us your budget and goal and we will tell you what is realistic here.', primary: 'investor', secondary: 'call' },
  },
  el: {
    metaTitle: 'Επένδυση σε Ακίνητα στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Επένδυση σε ακίνητα για εκμίσθωση στην Πρέβεζα: ποιοι τύποι ακινήτων εκμισθώνονται καλά, η διαδικασία αξιολόγησης, τι ελέγχουμε εμείς, τι αναθέτουμε σε δικηγόρους και λογιστές, και πώς διαχειριζόμαστε το ακίνητο μετά.',
    breadcrumb: 'Επενδύσεις',
    h1: 'Επένδυση σε Ακίνητα στην Πρέβεζα',
    intro:
      'Βοηθάμε όσους θέλουν να αγοράσουν ακίνητο στην περιοχή της Πρέβεζας για μισθωτικό εισόδημα. Το δικό μας κομμάτι είναι το λειτουργικό: αν ένα συγκεκριμένο ακίνητο θα εκμισθωθεί, τι θα αποδώσει, τι χρειάζεται και πώς λειτουργεί μετά. Νομικές, φορολογικές και χρηματοοικονομικές συμβουλές δίνουν αδειοδοτημένοι επαγγελματίες με τους οποίους συντονιζόμαστε — είμαστε σαφείς για αυτό το όριο γιατί σας προστατεύει.',
    heroCta: { primary: 'investor', secondary: 'call' },
    sections: [
      {
        heading: 'Γεωγραφία επένδυσης',
        paragraphs: [
          'Η πόλη της Πρέβεζας και η ακτή μεταξύ πόλης και Μονολιθίου, όπου η καλοκαιρινή ζήτηση καθορίζεται από τις παραλίες, το αεροδρόμιο Ακτίου και τα πορθμεία του Ιονίου· και η Φιλιππιάδα με τα χωριά του Ζηρού, όπου η ζήτηση είναι μόνιμης κατοικίας όλο τον χρόνο. Δεν συμβουλεύουμε για περιοχές στις οποίες δεν δραστηριοποιούμαστε.',
        ],
      },
      {
        heading: 'Συνήθεις κατηγορίες ακινήτων',
        tone: 'gray',
        bullets: [
          'Διαμερίσματα σε μικρά κτίρια κοντά στην ακτή για εκμίσθωση διακοπών',
          'Σπίτια με εξωτερικό χώρο για εκμίσθωση διακοπών σε οικογένειες',
          'Διαμερίσματα στην πόλη της Πρέβεζας για μακροχρόνια μίσθωση',
          'Μικρά πολυκατοικιακά κτίρια ως ενιαίο χαρτοφυλάκιο — το μοντέλο που λειτουργούμε στο L\'Incanto',
        ],
      },
      {
        heading: 'Διαδικασία',
        steps: [
          { title: 'Ενημέρωση', text: 'Προϋπολογισμός, στόχος (διακοπές, μακροχρόνια, μικτό), χρονοδιάγραμμα και πόσο θέλετε να εμπλέκεστε.' },
          { title: 'Αξιολόγηση ακινήτου', text: 'Για κάθε υποψήφιο ακίνητο: τοποθεσία, κατάσταση, δυναμική εκμίσθωσης, εργασίες, λειτουργικά κόστη και εύρος καθαρού εισοδήματος.' },
          { title: 'Συντονισμός ελέγχων', text: 'Συντονίζουμε δικηγόρο, μηχανικό, συμβολαιογράφο και λογιστή και τηρούμε λίστα με όσα έχουν γίνει.' },
          { title: 'Προετοιμασία και διαχείριση', text: 'Μετά την αγορά φέρνουμε το ακίνητο σε επίπεδο εκμίσθωσης, το καταχωρούμε και το διαχειριζόμαστε με σύμβαση διαχείρισης.' },
        ],
      },
      {
        heading: 'Εύρος ελέγχου',
        tone: 'gray',
        paragraphs: [
          'Τι ελέγχουμε εμείς: φυσική κατάσταση, πρόσβαση, προσανατολισμός και θέα, θόρυβος και γείτονες, πάρκινγκ, internet, εποχικά θέματα (υγρασία, πίεση νερού, ρεύμα), ρεαλιστικό ημερολόγιο εκμίσθωσης και τοπικός ανταγωνισμός. Τι ελέγχουν οι αδειοδοτημένοι επαγγελματίες: τίτλοι και βάρη (δικηγόρος), πολεοδομική νομιμότητα και ενεργειακό πιστοποιητικό (μηχανικός), φορολογική κατάσταση και δομή ιδιοκτησίας (λογιστής), και η ίδια η πράξη (συμβολαιογράφος).',
        ],
      },
      {
        heading: 'Τι δεν παρέχουμε',
        bullets: [
          'Νομικές συμβουλές, σύνταξη συμβολαίων ή έλεγχο τίτλων',
          'Φορολογικό σχεδιασμό, λογιστική ή συμβουλές για δομές ιδιοκτησίας',
          'Μεσιτεία δανείων ή χρηματοοικονομικό σχεδιασμό',
          'Εγγυημένες αποδόσεις — δίνουμε εύρη με βάση όσα παρατηρούμε, ποτέ υπόσχεση',
        ],
      },
      {
        heading: 'Ενδεικτική δομή ανάλυσης',
        tone: 'gray',
        facts: [
          { label: 'Ακίνητο', value: 'Τύπος, μέγεθος, κατάσταση, τοποθεσία, απόσταση από παραλία / πόλη / αεροδρόμιο' },
          { label: 'Επιλογή Α — διακοπές', value: 'Τιμές ανά διανυκτέρευση και σεζόν, διανυκτερεύσεις, μικτά έσοδα, προμήθεια πλατφόρμας, καθαριότητα, διαχείριση, καθαρό' },
          { label: 'Επιλογή Β — μακροχρόνια', value: 'Μηνιαίο ενοίκιο, πρόβλεψη κενού, διαχείριση, καθαρό' },
          { label: 'Εφάπαξ κόστη', value: 'Εργασίες για επίπεδο εκμίσθωσης, έπιπλα και εξοπλισμός, εγγραφή' },
          { label: 'Κίνδυνοι', value: 'Εποχικότητα, ρύθμιση βραχυχρόνιας μίσθωσης, έκθεση παραθαλάσσιου ακινήτου σε συντήρηση' },
        ],
      },
    ],
    faq: {
      title: 'Επενδύσεις — συχνές ερωτήσεις',
      items: [
        { question: 'Μπορείτε να μου πείτε τι απόδοση θα έχει ένα ακίνητο;', answer: 'Δίνουμε εύρος καθαρού εισοδήματος για κάθε επιλογή εκμίσθωσης, με βάση τιμές και πληρότητα που παρατηρούμε στην Πρέβεζα. Δεν αναφέρουμε μία εγγυημένη απόδοση· όποιος το κάνει, μαντεύει.' },
        { question: 'Πουλάτε ακίνητα σε επενδυτές;', answer: 'Μόνο ακίνητα που ανήκουν στον όμιλο ή που αναπτύσσει ο όμιλος. Για άλλες αγορές σας παραπέμπουμε σε αδειοδοτημένους τοπικούς μεσίτες και αναλαμβάνουμε μόλις αποκτήσετε το ακίνητο.' },
        { question: 'Μπορείτε να διαχειριστείτε το ακίνητο αφού το αγοράσω;', answer: 'Ναι — αυτό είναι το ζητούμενο. Δείτε τη σελίδα διαχείρισης ακινήτων για το τι περιλαμβάνει η υπηρεσία και πώς χρεώνεται.' },
      ],
    },
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'realEstate', title: 'Υπηρεσίες ακινήτων' },
        { key: 'propertyValuation', title: 'Εκτίμηση ενοικίου' },
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων' },
        { key: 'preveza', title: 'Πρέβεζα' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
      ],
    },
    closing: { title: 'Σκέφτεστε αγορά στην Πρέβεζα;', text: 'Πείτε μας προϋπολογισμό και στόχο και θα σας πούμε τι είναι ρεαλιστικό εδώ.', primary: 'investor', secondary: 'call' },
  },
}

export const owners: Localized<PageContent> = {
  en: {
    metaTitle: 'For Property Owners in Preveza | SM Holdings',
    metaDescription:
      'Own a property in Preveza? What SM Holdings does for owners: holiday-let and long-term management, maintenance, reporting, rental valuation — and how to get a written proposal.',
    breadcrumb: 'For Owners',
    h1: 'For Property Owners in Preveza',
    intro:
      'Start here if you own a house or apartment in the Preveza area and want it to earn without becoming a second job. This page lays out what we can take off your hands, what it costs, and how to get a proposal for your specific property.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'What we take off your hands',
        cards: [
          { title: 'Short-term rental management', text: 'Listings, pricing, guests, cleaning and reporting for holiday lets.', href: '/en/property-management/short-term-rental-management' },
          { title: 'Long-term property management', text: 'Tenants, leases, rent collection and inspections for annual lets.', href: '/en/property-management/long-term-property-management' },
          { title: 'Maintenance', text: 'Repairs, seasonal preparation and winter checks of empty properties.', href: '/en/property-management/maintenance' },
          { title: 'Rental valuation', text: 'What your property can earn under each option.', href: '/en/real-estate/property-valuation' },
          { title: 'Owner reporting', text: 'Statements on a fixed schedule with every invoice behind them.', href: '/en/property-management/owner-reporting' },
          { title: 'Guest management', text: 'Every contact with guests, in Greek, English and Italian.', href: '/en/property-management/guest-management' },
        ],
      },
      {
        heading: 'Why owners choose SM Holdings',
        tone: 'gray',
        bullets: [
          'We operate our own ten-apartment building in Chroneika — the same team, routine and tradespeople work on your property',
          'A local office in Filippiada and people on the ground in Preveza, not a call centre',
          'Fees tied to income for holiday lets; a fixed fee for long-term lets; every cost itemised',
          'Photos and a written statement for everything we do on your property',
          'Greek, English and Italian for owners and guests',
        ],
      },
      {
        heading: 'How to get a proposal',
        steps: [
          { title: 'Contact us', text: 'Use the form (choose "I need property management") or call. Tell us where the property is and how you would like to rent it.' },
          { title: 'Visit', text: 'We see the property and discuss the options with you.' },
          { title: 'Written proposal', text: 'Service level, fees, spending threshold and what the property needs before the first guest or tenant.' },
        ],
      },
    ],
    faq: {
      title: 'Owners — frequently asked questions',
      items: [
        { question: 'How much does property management cost?', answer: 'Holiday lets: a percentage of the income collected. Long-term lets: a fixed monthly fee. Cleaning, repairs and materials at cost with your approval. The exact figures are in your written proposal.' },
        { question: 'How long is the management agreement?', answer: 'Typically one season for a holiday let or one year for a long-term let, renewed by agreement. Notice periods and termination terms are written in the agreement.' },
        { question: 'Do I keep control of my property?', answer: 'Yes. You set the spending threshold, you block dates for your own use, you approve pricing changes and repairs above the threshold, and you receive a statement for every period.' },
      ],
    },
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyManagement', title: 'Property management' },
        { key: 'preveza', title: 'Preveza' },
        { key: 'insightWhatIncludes', title: 'What property management includes' },
        { key: 'insightFeesGreece', title: 'How property management fees work in Greece' },
      ],
    },
    closing: { title: 'Ready to hand over the day-to-day?', text: 'Tell us about your property and we will come back with a written proposal.', primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Για Ιδιοκτήτες Ακινήτων στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Έχετε ακίνητο στην Πρέβεζα; Τι κάνει η SM Holdings για ιδιοκτήτες: διαχείριση βραχυχρόνιας και μακροχρόνιας μίσθωσης, συντήρηση, αναφορές, εκτίμηση ενοικίου — και πώς να λάβετε γραπτή πρόταση.',
    breadcrumb: 'Για Ιδιοκτήτες',
    h1: 'Για Ιδιοκτήτες Ακινήτων στην Πρέβεζα',
    intro:
      'Ξεκινήστε εδώ αν έχετε σπίτι ή διαμέρισμα στην περιοχή της Πρέβεζας και θέλετε να αποδίδει χωρίς να γίνει δεύτερη δουλειά. Η σελίδα εξηγεί τι μπορούμε να αναλάβουμε, τι κοστίζει και πώς θα λάβετε πρόταση για το δικό σας ακίνητο.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Τι αναλαμβάνουμε',
        cards: [
          { title: 'Διαχείριση βραχυχρόνιας μίσθωσης', text: 'Καταχωρήσεις, τιμολόγηση, επισκέπτες, καθαριότητα και αναφορές για καταλύματα διακοπών.', href: '/el/diaxeirisi-akiniton/vraxyxronia-misthosi' },
          { title: 'Διαχείριση μακροχρόνιας μίσθωσης', text: 'Ενοικιαστές, μισθωτήρια, είσπραξη ενοικίων και επιθεωρήσεις για ετήσιες μισθώσεις.', href: '/el/diaxeirisi-akiniton/makroxronia-misthosi' },
          { title: 'Συντήρηση', text: 'Επισκευές, εποχική προετοιμασία και χειμερινοί έλεγχοι άδειων ακινήτων.', href: '/el/diaxeirisi-akiniton/syntirisi' },
          { title: 'Εκτίμηση ενοικίου', text: 'Τι μπορεί να αποδώσει το ακίνητό σας σε κάθε επιλογή.', href: '/el/akinita/ektimisi-akinitou' },
          { title: 'Αναφορές ιδιοκτήτη', text: 'Καταστάσεις σε σταθερό πρόγραμμα με κάθε τιμολόγιο πίσω τους.', href: '/el/diaxeirisi-akiniton/anafores-idioktiton' },
          { title: 'Διαχείριση επισκεπτών', text: 'Κάθε επαφή με επισκέπτες, στα ελληνικά, αγγλικά και ιταλικά.', href: '/el/diaxeirisi-akiniton/diaxeirisi-episkepton' },
        ],
      },
      {
        heading: 'Γιατί οι ιδιοκτήτες επιλέγουν την SM Holdings',
        tone: 'gray',
        bullets: [
          'Λειτουργούμε το δικό μας κτίριο δέκα διαμερισμάτων στα Χρονέικα — η ίδια ομάδα, ρουτίνα και τεχνικοί δουλεύουν και στο δικό σας ακίνητο',
          'Τοπικό γραφείο στη Φιλιππιάδα και άνθρωποι επιτόπου στην Πρέβεζα, όχι τηλεφωνικό κέντρο',
          'Αμοιβές συνδεδεμένες με τα έσοδα για διακοπές· σταθερή αμοιβή για μακροχρόνια· κάθε κόστος αναλυτικά',
          'Φωτογραφίες και γραπτή κατάσταση για ό,τι κάνουμε στο ακίνητό σας',
          'Ελληνικά, αγγλικά και ιταλικά για ιδιοκτήτες και επισκέπτες',
        ],
      },
      {
        heading: 'Πώς θα λάβετε πρόταση',
        steps: [
          { title: 'Επικοινωνήστε', text: 'Χρησιμοποιήστε τη φόρμα (επιλέξτε «Χρειάζομαι διαχείριση ακινήτου») ή καλέστε. Πείτε μας πού είναι το ακίνητο και πώς θέλετε να το ενοικιάσετε.' },
          { title: 'Επίσκεψη', text: 'Βλέπουμε το ακίνητο και συζητάμε τις επιλογές μαζί σας.' },
          { title: 'Γραπτή πρόταση', text: 'Επίπεδο υπηρεσίας, αμοιβές, όριο δαπάνης και τι χρειάζεται το ακίνητο πριν τον πρώτο επισκέπτη ή ενοικιαστή.' },
        ],
      },
    ],
    faq: {
      title: 'Ιδιοκτήτες — συχνές ερωτήσεις',
      items: [
        { question: 'Πόσο κοστίζει η διαχείριση ακινήτου;', answer: 'Διακοπές: ποσοστό επί των εσόδων που εισπράττονται. Μακροχρόνια: σταθερή μηνιαία αμοιβή. Καθαριότητα, επισκευές και υλικά στο κόστος τους με την έγκρισή σας. Τα ακριβή ποσά είναι στη γραπτή πρόταση.' },
        { question: 'Πόσο διαρκεί η σύμβαση διαχείρισης;', answer: 'Συνήθως μία σεζόν για κατάλυμα διακοπών ή ένα έτος για μακροχρόνια μίσθωση, με ανανέωση κατόπιν συμφωνίας. Προθεσμίες και όροι λύσης αναγράφονται στη σύμβαση.' },
        { question: 'Διατηρώ τον έλεγχο του ακινήτου μου;', answer: 'Ναι. Εσείς ορίζετε το όριο δαπάνης, μπλοκάρετε ημερομηνίες για δική σας χρήση, εγκρίνετε αλλαγές τιμών και επισκευές πάνω από το όριο, και λαμβάνετε κατάσταση για κάθε περίοδο.' },
      ],
    },
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων' },
        { key: 'preveza', title: 'Πρέβεζα' },
        { key: 'insightWhatIncludes', title: 'Τι περιλαμβάνει η διαχείριση ακινήτων' },
        { key: 'insightFeesGreece', title: 'Πώς λειτουργούν οι αμοιβές διαχείρισης στην Ελλάδα' },
      ],
    },
    closing: { title: 'Έτοιμοι να αναθέσετε την καθημερινότητα;', text: 'Πείτε μας για το ακίνητό σας και θα επανέλθουμε με γραπτή πρόταση.', primary: 'owner', secondary: 'call' },
  },
}
