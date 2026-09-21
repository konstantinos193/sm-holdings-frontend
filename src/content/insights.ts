import type { ArticleContent, Localized } from './types'
import type { PageKey } from '@/lib/seo/routes'

export type ArticleKey =
  | 'insightFeesGreece'
  | 'insightShortVsLong'
  | 'insightHolidayHomeMaintenance'
  | 'insightWhatIncludes'
  | 'insightSummerSeason'
  | 'insightOwnerReporting'

const PUBLISHED = '2026-09-21'

const related = (keys: { key: PageKey; en: string; el: string }[]) => ({
  en: { title: 'Related pages', links: keys.map((k) => ({ key: k.key, title: k.en })) },
  el: { title: 'Σχετικές σελίδες', links: keys.map((k) => ({ key: k.key, title: k.el })) },
})

const closingOwner = {
  en: { title: 'Want this handled for your property?', text: 'Tell us where it is and how you would like to rent it. We will send a written proposal.', primary: 'owner' as const, secondary: 'call' as const },
  el: { title: 'Θέλετε να το αναλάβουμε για το ακίνητό σας;', text: 'Πείτε μας πού είναι και πώς θέλετε να το ενοικιάσετε. Θα σας στείλουμε γραπτή πρόταση.', primary: 'owner' as const, secondary: 'call' as const },
}

export const ARTICLES: Record<ArticleKey, Localized<ArticleContent>> = {
  insightFeesGreece: {
    en: {
      datePublished: PUBLISHED,
      summary: 'Percentage of income for holiday lets, fixed fee for long-term lets, and the extras that catch owners out.',
      metaTitle: 'How Property Management Fees Work in Greece | SM Holdings',
      metaDescription: 'How property managers in Greece charge: percentage of income for short-term rentals, fixed monthly fees for long-term lets, tenant placement fees, pass-through costs, and the questions to ask before signing.',
      breadcrumb: 'Property management fees in Greece',
      h1: 'How Property Management Fees Work in Greece',
      intro: 'Owners comparing managers usually get quoted a single number and no explanation. This article explains the fee structures used in Greece, what is normally inside the fee and what is charged on top, so you can compare proposals like for like.',
      eyebrow: 'Published 21 September 2026 · SM Holdings',
      sections: [
        { heading: 'The two basic models', paragraphs: ['Short-term (holiday) rental management is almost always charged as a percentage of rental income. The manager earns when the property earns, which aligns interests but means the fee rises in a good season. Long-term rental management is usually a fixed monthly fee per property, sometimes expressed as a percentage of the monthly rent. Because the work is steadier, the fee is too.'] },
        { heading: 'What the percentage is calculated on', tone: 'gray', paragraphs: ['This is where proposals differ most. Ask whether the percentage applies to gross booking value (before the platform commission) or to net income (after it). Ask whether cleaning fees paid by guests are counted as income. A lower percentage on gross can cost more than a higher percentage on net. Insist that the base is written in the agreement.'] },
        { heading: 'What is normally charged on top', bullets: ['Cleaning and linen per changeover (often passed to the guest as a cleaning fee where the platform allows)', 'Repairs, materials and tradespeople, at cost', 'Tenant placement for long-term lets: a one-off fee when a new tenant signs', 'Photography and listing set-up, sometimes waived if you sign for a season', 'Registration in the Short-Term Rental Registry if the manager does it for you', 'Legal or accounting work, which a manager should refer to licensed professionals'] },
        { heading: 'What should be inside the fee', tone: 'gray', bullets: ['Listing management, pricing and calendar synchronisation', 'Guest or tenant communication and check-in / check-out', 'Rent or booking payment collection', 'Scheduled inspections', 'Coordination of cleaning and maintenance', 'Owner statements on a fixed schedule'] },
        { heading: 'Questions to ask before you sign', bullets: ['Is the percentage on gross or net, and are guest-paid cleaning fees included?', 'What is the approval threshold for repairs, and who chooses it?', 'How often do I receive a statement, and does it include invoices?', 'What is the notice period, and what happens to bookings already made if I leave?', 'Are there minimum-term or exclusivity clauses?', 'Who holds the deposit and guest payments, and when is net income paid to me?'] },
        { heading: 'How SM Holdings charges', tone: 'gray', paragraphs: ['Percentage of collected income for holiday lets, with platform commissions shown separately; fixed monthly fee for long-term lets; cleaning, repairs and materials at cost with an approval threshold you set. The exact figures are in a written proposal before anything is signed.'] },
      ],
      related: related([{ key: 'propertyManagement', en: 'Property management', el: 'Διαχείριση ακινήτων' }, { key: 'ownerReporting', en: 'Owner reporting', el: 'Αναφορές ιδιοκτήτη' }, { key: 'owners', en: 'For owners', el: 'Για ιδιοκτήτες' }]).en,
      closing: closingOwner.en,
    },
    el: {
      datePublished: PUBLISHED,
      summary: 'Ποσοστό εσόδων για διακοπές, σταθερή αμοιβή για μακροχρόνια, και τα έξτρα που ξαφνιάζουν τους ιδιοκτήτες.',
      metaTitle: 'Πώς Λειτουργούν οι Αμοιβές Διαχείρισης Ακινήτων στην Ελλάδα | SM Holdings',
      metaDescription: 'Πώς χρεώνουν οι διαχειριστές ακινήτων στην Ελλάδα: ποσοστό εσόδων για βραχυχρόνια μίσθωση, σταθερή μηνιαία αμοιβή για μακροχρόνια, αμοιβή τοποθέτησης ενοικιαστή, μετακυλιόμενα κόστη και τι να ρωτήσετε πριν υπογράψετε.',
      breadcrumb: 'Αμοιβές διαχείρισης ακινήτων στην Ελλάδα',
      h1: 'Πώς Λειτουργούν οι Αμοιβές Διαχείρισης Ακινήτων στην Ελλάδα',
      intro: 'Οι ιδιοκτήτες που συγκρίνουν διαχειριστές συνήθως παίρνουν έναν αριθμό χωρίς εξήγηση. Το άρθρο εξηγεί τις δομές αμοιβών που χρησιμοποιούνται στην Ελλάδα, τι περιλαμβάνεται συνήθως στην αμοιβή και τι χρεώνεται επιπλέον, ώστε να συγκρίνετε προτάσεις ισότιμα.',
      eyebrow: 'Δημοσιεύθηκε 21 Σεπτεμβρίου 2026 · SM Holdings',
      sections: [
        { heading: 'Τα δύο βασικά μοντέλα', paragraphs: ['Η διαχείριση βραχυχρόνιας μίσθωσης χρεώνεται σχεδόν πάντα ως ποσοστό επί των εσόδων. Ο διαχειριστής κερδίζει όταν κερδίζει το ακίνητο, κάτι που ευθυγραμμίζει τα συμφέροντα αλλά σημαίνει ότι η αμοιβή ανεβαίνει σε καλή σεζόν. Η διαχείριση μακροχρόνιας μίσθωσης είναι συνήθως σταθερή μηνιαία αμοιβή ανά ακίνητο, ενίοτε ως ποσοστό του μηνιαίου ενοικίου. Επειδή η δουλειά είναι πιο σταθερή, το ίδιο και η αμοιβή.'] },
        { heading: 'Επί τίνος υπολογίζεται το ποσοστό', tone: 'gray', paragraphs: ['Εδώ διαφέρουν περισσότερο οι προτάσεις. Ρωτήστε αν το ποσοστό εφαρμόζεται στη μικτή αξία κράτησης (πριν την προμήθεια πλατφόρμας) ή στο καθαρό (μετά). Ρωτήστε αν τα τέλη καθαρισμού που πληρώνει ο επισκέπτης μετρούν ως έσοδο. Ένα χαμηλότερο ποσοστό επί του μικτού μπορεί να κοστίζει περισσότερο από ένα υψηλότερο επί του καθαρού. Επιμείνετε να αναγράφεται η βάση στη σύμβαση.'] },
        { heading: 'Τι χρεώνεται συνήθως επιπλέον', bullets: ['Καθαριότητα και λευκά είδη ανά αλλαγή (συχνά μετακυλίονται στον επισκέπτη ως τέλος καθαρισμού όπου το επιτρέπει η πλατφόρμα)', 'Επισκευές, υλικά και τεχνικοί, στο κόστος', 'Τοποθέτηση ενοικιαστή για μακροχρόνια: εφάπαξ αμοιβή όταν υπογράφει νέος ενοικιαστής', 'Φωτογράφιση και στήσιμο καταχώρησης, ενίοτε χωρίς χρέωση αν υπογράψετε για μια σεζόν', 'Εγγραφή στο Μητρώο Βραχυχρόνιας Διαμονής αν την κάνει ο διαχειριστής', 'Νομικές ή λογιστικές εργασίες, που ένας διαχειριστής πρέπει να παραπέμπει σε αδειοδοτημένους επαγγελματίες'] },
        { heading: 'Τι πρέπει να περιλαμβάνει η αμοιβή', tone: 'gray', bullets: ['Διαχείριση καταχωρήσεων, τιμολόγηση και συγχρονισμός ημερολογίου', 'Επικοινωνία με επισκέπτες ή ενοικιαστές και check-in / check-out', 'Είσπραξη ενοικίων ή πληρωμών κρατήσεων', 'Προγραμματισμένες επιθεωρήσεις', 'Συντονισμός καθαριότητας και συντήρησης', 'Καταστάσεις ιδιοκτήτη σε σταθερό πρόγραμμα'] },
        { heading: 'Ερωτήσεις πριν υπογράψετε', bullets: ['Το ποσοστό είναι επί του μικτού ή του καθαρού, και περιλαμβάνονται τα τέλη καθαρισμού του επισκέπτη;', 'Ποιο είναι το όριο έγκρισης επισκευών και ποιος το επιλέγει;', 'Πόσο συχνά λαμβάνω κατάσταση και περιλαμβάνει τιμολόγια;', 'Ποια η προθεσμία καταγγελίας και τι γίνεται με τις ήδη γενόμενες κρατήσεις αν φύγω;', 'Υπάρχουν ρήτρες ελάχιστης διάρκειας ή αποκλειστικότητας;', 'Ποιος κρατά την εγγύηση και τις πληρωμές των επισκεπτών, και πότε μου αποδίδεται το καθαρό;'] },
        { heading: 'Πώς χρεώνει η SM Holdings', tone: 'gray', paragraphs: ['Ποσοστό επί των εισπραχθέντων εσόδων για διακοπές, με τις προμήθειες πλατφορμών ξεχωριστά· σταθερή μηνιαία αμοιβή για μακροχρόνια· καθαριότητα, επισκευές και υλικά στο κόστος με όριο έγκρισης που ορίζετε εσείς. Τα ακριβή ποσά είναι σε γραπτή πρόταση πριν υπογραφεί οτιδήποτε.'] },
      ],
      related: related([{ key: 'propertyManagement', en: 'Property management', el: 'Διαχείριση ακινήτων' }, { key: 'ownerReporting', en: 'Owner reporting', el: 'Αναφορές ιδιοκτήτη' }, { key: 'owners', en: 'For owners', el: 'Για ιδιοκτήτες' }]).el,
      closing: closingOwner.el,
    },
  },

  insightShortVsLong: {
    en: {
      datePublished: PUBLISHED,
      summary: 'Income pattern, effort, wear, regulation and the mixed model that suits many Preveza properties.',
      metaTitle: 'Short-Term vs Long-Term Rental in Preveza: Which Suits Your Property? | SM Holdings',
      metaDescription: 'A practical comparison for Preveza owners: seasonal holiday letting versus annual tenancy — income pattern, workload, wear and tear, regulation, and when a mixed winter/summer model makes sense.',
      breadcrumb: 'Short-term vs long-term rental in Preveza',
      h1: 'Short-Term vs Long-Term Rental in Preveza',
      intro: 'The right answer depends on the property, its location and how much involvement you want. Here is how the two options compare in Preveza specifically — not in general.',
      eyebrow: 'Published 21 September 2026 · SM Holdings',
      sections: [
        { heading: 'Income pattern', paragraphs: ['A holiday let on the Preveza coast earns almost all of its income between June and September, with July and August carrying the season. Outside that window most properties are empty. A long-term let earns the same amount every month, all year, at a lower rate. Which totals more depends on the property: a sea-view apartment near a beach usually earns more as a holiday let; a flat in the town with no outdoor space often does better with a tenant.'] },
        { heading: 'Effort and cost', tone: 'gray', paragraphs: ['Holiday letting means a changeover every few days: cleaning, linen, guest messages, keys, repairs during the stay. It is a hospitality operation, which is why owners hire a manager. Long-term letting is quieter — a tenant search, a lease, monthly rent, occasional repairs — but a bad tenant is a bigger problem than a bad guest.'] },
        { heading: 'Wear, furnishing and standard', bullets: ['Holiday lets must be fully furnished and equipped to a hotel-like standard: air-conditioning in every room, WiFi, kitchen, washing machine, outdoor furniture', 'Long-term lets in Greece are often let unfurnished or part-furnished, which reduces your outlay', 'Holiday lets see more wear per year but are inspected after every stay; long-term lets are inspected less often'] },
        { heading: 'Regulation', tone: 'gray', paragraphs: ['Short-term letting requires registration in the Short-Term Rental Property Registry, a registration number on every listing and periodic declarations; the rules are updated regularly and a manager should keep you compliant. Long-term letting requires an electronic lease declaration on myAADE. Talk to your accountant about the tax treatment of each — it differs.'] },
        { heading: 'The mixed model', paragraphs: ['Many Preveza properties do both: a tenant from October to May (students, seasonal workers, people relocating) and holiday guests from June to September. It needs a tenant who accepts a fixed-term lease and a manager who can switch the property between modes. When it works, it removes the empty winter without giving up the summer.'] },
        { heading: 'How to decide', tone: 'gray', bullets: ['Ask for a rental valuation covering both options for your specific property', 'Be honest about how much involvement you want', 'Check what the property needs to reach holiday-let standard and whether the summer income justifies it', 'If in doubt, start with the lower-effort option and review after a year'] },
      ],
      related: related([{ key: 'shortTermRentalManagement', en: 'Short-term rental management', el: 'Διαχείριση βραχυχρόνιας μίσθωσης' }, { key: 'longTermPropertyManagement', en: 'Long-term property management', el: 'Διαχείριση μακροχρόνιας μίσθωσης' }, { key: 'propertyValuation', en: 'Rental valuation', el: 'Εκτίμηση ενοικίου' }]).en,
      closing: closingOwner.en,
    },
    el: {
      datePublished: PUBLISHED,
      summary: 'Μοτίβο εσόδων, κόπος, φθορά, ρύθμιση και το μικτό μοντέλο που ταιριάζει σε πολλά ακίνητα της Πρέβεζας.',
      metaTitle: 'Βραχυχρόνια ή Μακροχρόνια Μίσθωση στην Πρέβεζα; | SM Holdings',
      metaDescription: 'Πρακτική σύγκριση για ιδιοκτήτες στην Πρέβεζα: εποχική εκμίσθωση διακοπών ή ετήσια μίσθωση — μοτίβο εσόδων, φόρτος, φθορά, ρύθμιση, και πότε έχει νόημα το μικτό μοντέλο χειμώνα/καλοκαίρι.',
      breadcrumb: 'Βραχυχρόνια ή μακροχρόνια μίσθωση στην Πρέβεζα',
      h1: 'Βραχυχρόνια ή Μακροχρόνια Μίσθωση στην Πρέβεζα;',
      intro: 'Η σωστή απάντηση εξαρτάται από το ακίνητο, την τοποθεσία του και πόση εμπλοκή θέλετε. Δείτε πώς συγκρίνονται οι δύο επιλογές συγκεκριμένα στην Πρέβεζα — όχι γενικά.',
      eyebrow: 'Δημοσιεύθηκε 21 Σεπτεμβρίου 2026 · SM Holdings',
      sections: [
        { heading: 'Μοτίβο εσόδων', paragraphs: ['Ένα κατάλυμα διακοπών στην ακτή της Πρέβεζας κερδίζει σχεδόν όλα τα έσοδά του Ιούνιο–Σεπτέμβριο, με Ιούλιο και Αύγουστο να σηκώνουν τη σεζόν. Εκτός αυτού του παραθύρου τα περισσότερα ακίνητα είναι άδεια. Μια μακροχρόνια μίσθωση αποδίδει το ίδιο ποσό κάθε μήνα, όλο τον χρόνο, σε χαμηλότερη τιμή. Ποιο συνολικά αποδίδει περισσότερο εξαρτάται από το ακίνητο: διαμέρισμα με θέα θάλασσα κοντά σε παραλία συνήθως αποδίδει περισσότερο ως διακοπές· διαμέρισμα στην πόλη χωρίς εξωτερικό χώρο συχνά πάει καλύτερα με ενοικιαστή.'] },
        { heading: 'Κόπος και κόστος', tone: 'gray', paragraphs: ['Η εκμίσθωση διακοπών σημαίνει αλλαγή κάθε λίγες μέρες: καθαριότητα, λευκά είδη, μηνύματα επισκεπτών, κλειδιά, επισκευές κατά τη διαμονή. Είναι λειτουργία φιλοξενίας, γι\' αυτό οι ιδιοκτήτες προσλαμβάνουν διαχειριστή. Η μακροχρόνια είναι πιο ήσυχη — αναζήτηση ενοικιαστή, μισθωτήριο, μηνιαίο ενοίκιο, περιστασιακές επισκευές — αλλά ένας κακός ενοικιαστής είναι μεγαλύτερο πρόβλημα από έναν κακό επισκέπτη.'] },
        { heading: 'Φθορά, εξοπλισμός και επίπεδο', bullets: ['Τα καταλύματα διακοπών πρέπει να είναι πλήρως επιπλωμένα και εξοπλισμένα σε επίπεδο ξενοδοχείου: κλιματισμός σε κάθε δωμάτιο, WiFi, κουζίνα, πλυντήριο, έπιπλα εξωτερικού χώρου', 'Οι μακροχρόνιες στην Ελλάδα συχνά γίνονται χωρίς ή με μερική επίπλωση, που μειώνει τη δαπάνη σας', 'Τα καταλύματα διακοπών έχουν περισσότερη φθορά ανά έτος αλλά επιθεωρούνται μετά από κάθε διαμονή· οι μακροχρόνιες λιγότερο συχνά'] },
        { heading: 'Ρύθμιση', tone: 'gray', paragraphs: ['Η βραχυχρόνια μίσθωση απαιτεί εγγραφή στο Μητρώο Ακινήτων Βραχυχρόνιας Διαμονής, αριθμό μητρώου σε κάθε καταχώρηση και περιοδικές δηλώσεις· οι κανόνες ενημερώνονται τακτικά και ο διαχειριστής πρέπει να σας κρατά σύμφωνους. Η μακροχρόνια απαιτεί ηλεκτρονική δήλωση μισθωτηρίου στο myAADE. Μιλήστε με τον λογιστή σας για τη φορολογική μεταχείριση κάθε επιλογής — διαφέρει.'] },
        { heading: 'Το μικτό μοντέλο', paragraphs: ['Πολλά ακίνητα στην Πρέβεζα κάνουν και τα δύο: ενοικιαστής Οκτώβριο–Μάιο (φοιτητές, εποχικοί εργαζόμενοι, μετεγκαταστάσεις) και επισκέπτες διακοπών Ιούνιο–Σεπτέμβριο. Χρειάζεται ενοικιαστή που δέχεται μίσθωση ορισμένου χρόνου και διαχειριστή που μπορεί να εναλλάσσει το ακίνητο. Όταν δουλεύει, εξαλείφει τον άδειο χειμώνα χωρίς να θυσιάζει το καλοκαίρι.'] },
        { heading: 'Πώς να αποφασίσετε', tone: 'gray', bullets: ['Ζητήστε εκτίμηση ενοικίου και για τις δύο επιλογές για το συγκεκριμένο ακίνητο', 'Να είστε ειλικρινείς για το πόση εμπλοκή θέλετε', 'Ελέγξτε τι χρειάζεται το ακίνητο για επίπεδο διακοπών και αν το καλοκαιρινό εισόδημα το δικαιολογεί', 'Αν αμφιβάλλετε, ξεκινήστε με την επιλογή λιγότερου κόπου και επανεξετάστε μετά από έναν χρόνο'] },
      ],
      related: related([{ key: 'shortTermRentalManagement', en: 'Short-term rental management', el: 'Διαχείριση βραχυχρόνιας μίσθωσης' }, { key: 'longTermPropertyManagement', en: 'Long-term property management', el: 'Διαχείριση μακροχρόνιας μίσθωσης' }, { key: 'propertyValuation', en: 'Rental valuation', el: 'Εκτίμηση ενοικίου' }]).el,
      closing: closingOwner.el,
    },
  },

  insightHolidayHomeMaintenance: {
    en: {
      datePublished: PUBLISHED,
      summary: 'Salt, humidity, storms and eight empty months: what a coastal holiday home needs each year.',
      metaTitle: 'Holiday Home Maintenance on the Ionian Coast | SM Holdings',
      metaDescription: 'What a holiday home on the Ionian coast near Preveza needs each year: salt and humidity control, winter shut-down and checks, air-conditioning and water heater service, shutters and balconies, and the spring re-opening list.',
      breadcrumb: 'Holiday home maintenance on the Ionian coast',
      h1: 'Holiday Home Maintenance on the Ionian Coast',
      intro: 'A holiday home near Preveza is used for four months and left alone for eight. The damage happens in the eight. This is the maintenance calendar we use for the properties we manage and for our own building at Chroneika.',
      eyebrow: 'Published 21 September 2026 · SM Holdings',
      sections: [
        { heading: 'What the coast does to a building', paragraphs: ['Salt air corrodes metal — railings, hinges, air-conditioning units, outdoor lighting — faster than inland. Winter humidity in a closed house produces mould on walls, mattresses and inside wardrobes. Autumn and winter storms test shutters, gutters and terrace drainage. Summer sun fades textiles and cracks plastic furniture. None of it is dramatic on its own; all of it compounds if nobody visits.'] },
        { heading: 'Autumn shut-down', tone: 'gray', bullets: ['Switch off and drain what can freeze or stagnate; leave the water heater off', 'Deep clean, then leave wardrobes and interior doors open', 'Strip beds; store linen and towels in sealed containers away from external walls', 'Bring in or cover outdoor furniture; lock shutters', 'Photograph every room — the reference for the spring inspection', 'Take meter readings and check that no appliance is left on standby'] },
        { heading: 'Winter checks', bullets: ['A monthly visit: run taps, flush toilets, open windows for an hour, check for damp spots and leaks', 'After every storm: roof, gutters, terraces, shutters, any water inside', 'Move dehumidifiers or moisture absorbers between rooms; empty them', 'Check the exterior for salt corrosion on railings and fittings'] },
        { heading: 'Spring re-opening', tone: 'gray', bullets: ['Air-conditioning service — filters, gas, drainage — before the first guest, not after the first complaint', 'Water heater, boiler and appliances tested', 'WiFi speed tested in every room', 'Shutters, doors and locks oiled; railings checked', 'Outdoor furniture cleaned or replaced; garden and pool serviced where present', 'Full inventory against the autumn photos; restock consumables'] },
        { heading: 'During the season', paragraphs: ['Inspection after every changeover catches the small things — a dripping tap, a loose railing, a broken chair — before the next guest finds them. Keep a local electrician and plumber on call: on the coast in August they are busy, and a manager who already works with them gets served first.'] },
      ],
      related: related([{ key: 'maintenance', en: 'Maintenance service', el: 'Υπηρεσία συντήρησης' }, { key: 'insightSummerSeason', en: 'Preparing for the summer season', el: 'Προετοιμασία για τη σεζόν' }, { key: 'shortTermRentalManagement', en: 'Short-term rental management', el: 'Διαχείριση βραχυχρόνιας μίσθωσης' }]).en,
      closing: closingOwner.en,
    },
    el: {
      datePublished: PUBLISHED,
      summary: 'Αλμύρα, υγρασία, καταιγίδες και οκτώ άδειοι μήνες: τι χρειάζεται ένα παραθαλάσσιο εξοχικό κάθε χρόνο.',
      metaTitle: 'Συντήρηση Εξοχικού στο Ιόνιο | SM Holdings',
      metaDescription: 'Τι χρειάζεται κάθε χρόνο ένα εξοχικό στην ακτή του Ιονίου κοντά στην Πρέβεζα: έλεγχος αλμύρας και υγρασίας, χειμερινό κλείσιμο και έλεγχοι, service κλιματιστικών και θερμοσίφωνα, ρολά και μπαλκόνια, και η λίστα ανοίγματος την άνοιξη.',
      breadcrumb: 'Συντήρηση εξοχικού στο Ιόνιο',
      h1: 'Συντήρηση Εξοχικού στο Ιόνιο',
      intro: 'Ένα εξοχικό κοντά στην Πρέβεζα χρησιμοποιείται τέσσερις μήνες και μένει μόνο του οκτώ. Η ζημιά γίνεται στους οκτώ. Αυτό είναι το ημερολόγιο συντήρησης που χρησιμοποιούμε για τα ακίνητα που διαχειριζόμαστε και για το δικό μας κτίριο στα Χρονέικα.',
      eyebrow: 'Δημοσιεύθηκε 21 Σεπτεμβρίου 2026 · SM Holdings',
      sections: [
        { heading: 'Τι κάνει η ακτή σε ένα κτίριο', paragraphs: ['Η αλμύρα διαβρώνει τα μέταλλα — κάγκελα, μεντεσέδες, εξωτερικές μονάδες κλιματισμού, φωτιστικά — γρηγορότερα από την ενδοχώρα. Η χειμωνιάτικη υγρασία σε κλειστό σπίτι δημιουργεί μούχλα σε τοίχους, στρώματα και μέσα στις ντουλάπες. Οι καταιγίδες του φθινοπώρου και του χειμώνα δοκιμάζουν ρολά, υδρορροές και αποστράγγιση βεραντών. Ο καλοκαιρινός ήλιος ξεθωριάζει υφάσματα και σπάει πλαστικά έπιπλα. Τίποτα δεν είναι δραματικό από μόνο του· όλα συσσωρεύονται αν δεν επισκέπτεται κανείς.'] },
        { heading: 'Φθινοπωρινό κλείσιμο', tone: 'gray', bullets: ['Κλείστε και αδειάστε ό,τι μπορεί να παγώσει ή να λιμνάσει· αφήστε τον θερμοσίφωνα κλειστό', 'Γενικός καθαρισμός και μετά ντουλάπες και εσωτερικές πόρτες ανοιχτές', 'Ξεστρώστε κρεβάτια· αποθηκεύστε λευκά είδη σε σφραγισμένα κουτιά μακριά από εξωτερικούς τοίχους', 'Μαζέψτε ή καλύψτε τα έπιπλα εξωτερικού χώρου· κλειδώστε τα ρολά', 'Φωτογραφίστε κάθε δωμάτιο — η αναφορά για την ανοιξιάτικη επιθεώρηση', 'Πάρτε ενδείξεις μετρητών και ελέγξτε ότι καμία συσκευή δεν έμεινε σε αναμονή'] },
        { heading: 'Χειμερινοί έλεγχοι', bullets: ['Μηνιαία επίσκεψη: τρέξτε βρύσες, τραβήξτε καζανάκια, ανοίξτε παράθυρα για μία ώρα, ελέγξτε για υγρασία και διαρροές', 'Μετά από κάθε καταιγίδα: στέγη, υδρορροές, βεράντες, ρολά, νερό στο εσωτερικό', 'Μετακινήστε αφυγραντήρες ή απορροφητές υγρασίας μεταξύ δωματίων· αδειάστε τους', 'Ελέγξτε το εξωτερικό για διάβρωση από αλμύρα σε κάγκελα και εξαρτήματα'] },
        { heading: 'Ανοιξιάτικο άνοιγμα', tone: 'gray', bullets: ['Service κλιματιστικών — φίλτρα, φρέον, αποστράγγιση — πριν τον πρώτο επισκέπτη, όχι μετά το πρώτο παράπονο', 'Δοκιμή θερμοσίφωνα, λέβητα και συσκευών', 'Δοκιμή ταχύτητας WiFi σε κάθε δωμάτιο', 'Λάδωμα ρολών, πορτών και κλειδαριών· έλεγχος κάγκελων', 'Καθαρισμός ή αντικατάσταση επίπλων εξωτερικού χώρου· service κήπου και πισίνας όπου υπάρχουν', 'Πλήρης απογραφή με βάση τις φθινοπωρινές φωτογραφίες· αναπλήρωση αναλωσίμων'] },
        { heading: 'Κατά τη σεζόν', paragraphs: ['Η επιθεώρηση μετά από κάθε αλλαγή πιάνει τα μικρά — μια βρύση που στάζει, ένα χαλαρό κάγκελο, μια σπασμένη καρέκλα — πριν τα βρει ο επόμενος επισκέπτης. Έχετε τοπικό ηλεκτρολόγο και υδραυλικό σε ετοιμότητα: στην ακτή τον Αύγουστο είναι απασχολημένοι, και ένας διαχειριστής που ήδη συνεργάζεται μαζί τους εξυπηρετείται πρώτος.'] },
      ],
      related: related([{ key: 'maintenance', en: 'Maintenance service', el: 'Υπηρεσία συντήρησης' }, { key: 'insightSummerSeason', en: 'Preparing for the summer season', el: 'Προετοιμασία για τη σεζόν' }, { key: 'shortTermRentalManagement', en: 'Short-term rental management', el: 'Διαχείριση βραχυχρόνιας μίσθωσης' }]).el,
      closing: closingOwner.el,
    },
  },

  insightWhatIncludes: {
    en: {
      datePublished: PUBLISHED,
      summary: 'A plain list of what a property manager actually does, and the tasks that stay with the owner.',
      metaTitle: 'What Property Management Includes (and What It Doesn\'t) | SM Holdings',
      metaDescription: 'A plain-language list of what a property manager handles for a rental property in Greece — guests and tenants, money, inspections, repairs, compliance, reporting — and the decisions and costs that stay with the owner.',
      breadcrumb: 'What property management includes',
      h1: 'What Property Management Includes — and What It Doesn\'t',
      intro: 'Owners often assume a manager does everything, or nothing beyond handing over keys. The truth is a defined list of tasks, with a short list of decisions that always stay with you.',
      eyebrow: 'Published 21 September 2026 · SM Holdings',
      sections: [
        { heading: 'Guests and tenants', bullets: ['Listing the property and answering enquiries', 'Screening guests or tenants against the rules you set', 'Contracts: platform bookings or a registered lease', 'Check-in, check-out and the phone call in between', 'Deposits, damage claims and reviews'] },
        { heading: 'Money', tone: 'gray', bullets: ['Setting and adjusting prices', 'Collecting payments and rent; chasing late payments', 'Paying cleaners, tradespeople and utilities on your behalf, from income or a float', 'Reconciling platform payouts and paying you the net'] },
        { heading: 'The property', bullets: ['Scheduled inspections with photos', 'Cleaning and linen for holiday lets', 'Repairs up to your approval threshold; quotes above it', 'Seasonal preparation and winter checks', 'An inventory of what is in the property'] },
        { heading: 'Compliance and paperwork', tone: 'gray', bullets: ['Short-Term Rental Registry registration and declarations', 'Lease registration on myAADE for long-term lets', 'Records for your accountant: income, costs, invoices'] },
        { heading: 'What stays with the owner', bullets: ['Ownership costs: property tax (ENFIA), insurance, building fees not passed to a tenant', 'Capital decisions: renovations, replacing the kitchen, changing the use of the property', 'Approval of spending above the threshold', 'Tax returns — done by your accountant with the manager\'s records', 'Legal disputes — handled by a lawyer, coordinated by the manager'] },
        { heading: 'What a manager should never do', tone: 'gray', bullets: ['Give legal, tax or financial advice instead of referring you to a licensed professional', 'Spend above the threshold without asking', 'Hold your income without a statement', 'Promise a yield'] },
      ],
      related: related([{ key: 'propertyManagement', en: 'Property management', el: 'Διαχείριση ακινήτων' }, { key: 'insightFeesGreece', en: 'How fees work in Greece', el: 'Πώς λειτουργούν οι αμοιβές' }, { key: 'owners', en: 'For owners', el: 'Για ιδιοκτήτες' }]).en,
      closing: closingOwner.en,
    },
    el: {
      datePublished: PUBLISHED,
      summary: 'Μια απλή λίστα με το τι πραγματικά κάνει ένας διαχειριστής, και τι μένει στον ιδιοκτήτη.',
      metaTitle: 'Τι Περιλαμβάνει η Διαχείριση Ακινήτων (και τι όχι) | SM Holdings',
      metaDescription: 'Λίστα σε απλή γλώσσα με όσα αναλαμβάνει ένας διαχειριστής για ένα ακίνητο προς εκμίσθωση στην Ελλάδα — επισκέπτες και ενοικιαστές, χρήματα, επιθεωρήσεις, επισκευές, συμμόρφωση, αναφορές — και οι αποφάσεις και τα κόστη που μένουν στον ιδιοκτήτη.',
      breadcrumb: 'Τι περιλαμβάνει η διαχείριση ακινήτων',
      h1: 'Τι Περιλαμβάνει η Διαχείριση Ακινήτων — και τι όχι',
      intro: 'Οι ιδιοκτήτες συχνά υποθέτουν ότι ο διαχειριστής κάνει τα πάντα, ή τίποτα πέρα από την παράδοση κλειδιών. Η αλήθεια είναι μια συγκεκριμένη λίστα εργασιών, με μια σύντομη λίστα αποφάσεων που μένουν πάντα σε εσάς.',
      eyebrow: 'Δημοσιεύθηκε 21 Σεπτεμβρίου 2026 · SM Holdings',
      sections: [
        { heading: 'Επισκέπτες και ενοικιαστές', bullets: ['Καταχώρηση του ακινήτου και απάντηση σε ερωτήματα', 'Έλεγχος επισκεπτών ή ενοικιαστών με βάση τους κανόνες που ορίζετε', 'Συμβόλαια: κρατήσεις πλατφόρμας ή δηλωμένο μισθωτήριο', 'Check-in, check-out και το τηλεφώνημα ενδιάμεσα', 'Εγγυήσεις, διεκδικήσεις ζημιών και κριτικές'] },
        { heading: 'Χρήματα', tone: 'gray', bullets: ['Ορισμός και προσαρμογή τιμών', 'Είσπραξη πληρωμών και ενοικίων· παρακολούθηση καθυστερήσεων', 'Πληρωμή καθαριστών, τεχνικών και λογαριασμών για λογαριασμό σας, από τα έσοδα ή από ταμείο', 'Συμφωνία εκκαθαρίσεων πλατφορμών και απόδοση του καθαρού σε εσάς'] },
        { heading: 'Το ακίνητο', bullets: ['Προγραμματισμένες επιθεωρήσεις με φωτογραφίες', 'Καθαριότητα και λευκά είδη για καταλύματα διακοπών', 'Επισκευές μέχρι το όριο έγκρισής σας· προσφορές πάνω από αυτό', 'Εποχική προετοιμασία και χειμερινοί έλεγχοι', 'Απογραφή του τι υπάρχει στο ακίνητο'] },
        { heading: 'Συμμόρφωση και γραφειοκρατία', tone: 'gray', bullets: ['Εγγραφή και δηλώσεις στο Μητρώο Βραχυχρόνιας Διαμονής', 'Δήλωση μισθωτηρίου στο myAADE για μακροχρόνιες', 'Αρχείο για τον λογιστή σας: έσοδα, έξοδα, τιμολόγια'] },
        { heading: 'Τι μένει στον ιδιοκτήτη', bullets: ['Κόστη ιδιοκτησίας: ΕΝΦΙΑ, ασφάλιση, κοινόχρηστα που δεν μετακυλίονται σε ενοικιαστή', 'Κεφαλαιακές αποφάσεις: ανακαινίσεις, αλλαγή κουζίνας, αλλαγή χρήσης', 'Έγκριση δαπανών πάνω από το όριο', 'Φορολογικές δηλώσεις — από τον λογιστή σας με τα αρχεία του διαχειριστή', 'Νομικές διαφορές — από δικηγόρο, με συντονισμό του διαχειριστή'] },
        { heading: 'Τι δεν πρέπει ποτέ να κάνει ένας διαχειριστής', tone: 'gray', bullets: ['Να δίνει νομικές, φορολογικές ή χρηματοοικονομικές συμβουλές αντί να σας παραπέμπει σε αδειοδοτημένο επαγγελματία', 'Να ξοδεύει πάνω από το όριο χωρίς να ρωτήσει', 'Να κρατά τα έσοδά σας χωρίς κατάσταση', 'Να υπόσχεται απόδοση'] },
      ],
      related: related([{ key: 'propertyManagement', en: 'Property management', el: 'Διαχείριση ακινήτων' }, { key: 'insightFeesGreece', en: 'How fees work in Greece', el: 'Πώς λειτουργούν οι αμοιβές' }, { key: 'owners', en: 'For owners', el: 'Για ιδιοκτήτες' }]).el,
      closing: closingOwner.el,
    },
  },

  insightSummerSeason: {
    en: {
      datePublished: PUBLISHED,
      summary: 'The pre-season checklist we run in May for every holiday let we manage.',
      metaTitle: 'Preparing a Rental Property for the Summer Season in Preveza | SM Holdings',
      metaDescription: 'The May checklist for a holiday let in Preveza: registry and listings, pricing calendar, air-conditioning and WiFi, inventory and consumables, photography, house rules and the first-guest test.',
      breadcrumb: 'Preparing a rental property for summer',
      h1: 'Preparing a Rental Property for the Summer Season',
      intro: 'The season in Preveza is short. A property that opens late, or opens with a broken air-conditioner, loses weeks it cannot recover. This is the list we work through in May for every holiday let we manage.',
      eyebrow: 'Published 21 September 2026 · SM Holdings',
      sections: [
        { heading: 'Paperwork first', bullets: ['Short-Term Rental Registry number valid and shown on every listing', 'Listings live on the chosen platforms and the direct-booking page, with this year\'s photos and prices', 'Cancellation policy and house rules reviewed', 'Insurance in place; accountant informed that the season starts'] },
        { heading: 'Pricing calendar', tone: 'gray', paragraphs: ['Set rates per season band — early June, high season, late September — and minimum stays for July and August before the first enquiries arrive, then adjust as the calendar fills. Block your own dates now; blocking them in July costs bookings.'] },
        { heading: 'The property', bullets: ['Air-conditioning serviced in every room; water heater and appliances tested', 'WiFi speed measured in every room; router restarted and password card printed', 'Deep clean; mattresses and pillows checked; linen counted', 'Inventory against the autumn photos: plates, glasses, pans, remote controls, keys', 'Outdoor furniture, umbrellas and sun loungers cleaned or replaced', 'Consumables stocked: toilet paper, soap, dishwasher tablets, coffee, salt and oil'] },
        { heading: 'Guest experience', tone: 'gray', bullets: ['Arrival instructions written and tested by someone who has never been there', 'Key box code changed; spare keys with the manager', 'Local information sheet updated: beaches, supermarkets, pharmacies, emergency numbers', 'Welcome message templates ready in Greek, English and Italian'] },
        { heading: 'The first-guest test', paragraphs: ['Before the first booking, someone from the team stays a night — or at least spends an evening — in the property as a guest would. Shower pressure, hot water, mosquito screens, the noise of the fridge, whether the WiFi reaches the balcony. It is the cheapest way to avoid a bad first review.'] },
      ],
      related: related([{ key: 'shortTermRentalManagement', en: 'Short-term rental management', el: 'Διαχείριση βραχυχρόνιας μίσθωσης' }, { key: 'maintenance', en: 'Maintenance', el: 'Συντήρηση' }, { key: 'insightHolidayHomeMaintenance', en: 'Holiday home maintenance on the Ionian coast', el: 'Συντήρηση εξοχικού στο Ιόνιο' }]).en,
      closing: closingOwner.en,
    },
    el: {
      datePublished: PUBLISHED,
      summary: 'Η λίστα προετοιμασίας που τρέχουμε τον Μάιο για κάθε κατάλυμα διακοπών που διαχειριζόμαστε.',
      metaTitle: 'Προετοιμασία Ακινήτου για την Καλοκαιρινή Σεζόν στην Πρέβεζα | SM Holdings',
      metaDescription: 'Η λίστα του Μαΐου για κατάλυμα διακοπών στην Πρέβεζα: μητρώο και καταχωρήσεις, ημερολόγιο τιμών, κλιματισμός και WiFi, απογραφή και αναλώσιμα, φωτογράφιση, κανόνες σπιτιού και το τεστ του πρώτου επισκέπτη.',
      breadcrumb: 'Προετοιμασία ακινήτου για το καλοκαίρι',
      h1: 'Προετοιμασία Ακινήτου για την Καλοκαιρινή Σεζόν',
      intro: 'Η σεζόν στην Πρέβεζα είναι σύντομη. Ένα ακίνητο που ανοίγει αργά, ή ανοίγει με χαλασμένο κλιματιστικό, χάνει εβδομάδες που δεν ανακτά. Αυτή είναι η λίστα που περνάμε τον Μάιο για κάθε κατάλυμα που διαχειριζόμαστε.',
      eyebrow: 'Δημοσιεύθηκε 21 Σεπτεμβρίου 2026 · SM Holdings',
      sections: [
        { heading: 'Πρώτα τα χαρτιά', bullets: ['Αριθμός Μητρώου Βραχυχρόνιας Διαμονής σε ισχύ και εμφανής σε κάθε καταχώρηση', 'Καταχωρήσεις ενεργές στις επιλεγμένες πλατφόρμες και στη σελίδα απευθείας κρατήσεων, με φετινές φωτογραφίες και τιμές', 'Πολιτική ακύρωσης και κανόνες σπιτιού αναθεωρημένοι', 'Ασφάλιση σε ισχύ· ο λογιστής ενημερωμένος ότι ξεκινά η σεζόν'] },
        { heading: 'Ημερολόγιο τιμών', tone: 'gray', paragraphs: ['Ορίστε τιμές ανά περίοδο — αρχές Ιουνίου, υψηλή σεζόν, τέλη Σεπτεμβρίου — και ελάχιστες διαμονές για Ιούλιο και Αύγουστο πριν φτάσουν τα πρώτα ερωτήματα, και προσαρμόστε καθώς γεμίζει το ημερολόγιο. Μπλοκάρετε τις δικές σας ημερομηνίες τώρα· το μπλοκάρισμα τον Ιούλιο κοστίζει κρατήσεις.'] },
        { heading: 'Το ακίνητο', bullets: ['Service κλιματιστικών σε κάθε δωμάτιο· δοκιμή θερμοσίφωνα και συσκευών', 'Μέτρηση ταχύτητας WiFi σε κάθε δωμάτιο· επανεκκίνηση router και εκτύπωση κάρτας κωδικού', 'Γενικός καθαρισμός· έλεγχος στρωμάτων και μαξιλαριών· καταμέτρηση λευκών ειδών', 'Απογραφή με βάση τις φθινοπωρινές φωτογραφίες: πιάτα, ποτήρια, κατσαρόλες, τηλεχειριστήρια, κλειδιά', 'Καθαρισμός ή αντικατάσταση επίπλων εξωτερικού χώρου, ομπρελών και ξαπλωστρών', 'Απόθεμα αναλωσίμων: χαρτί υγείας, σαπούνι, ταμπλέτες πλυντηρίου πιάτων, καφές, αλάτι και λάδι'] },
        { heading: 'Εμπειρία επισκέπτη', tone: 'gray', bullets: ['Οδηγίες άφιξης γραμμένες και δοκιμασμένες από κάποιον που δεν έχει ξαναπάει', 'Αλλαγή κωδικού κλειδοθήκης· εφεδρικά κλειδιά στον διαχειριστή', 'Ενημερωμένο φύλλο τοπικών πληροφοριών: παραλίες, σούπερ μάρκετ, φαρμακεία, τηλέφωνα έκτακτης ανάγκης', 'Έτοιμα πρότυπα μηνυμάτων καλωσορίσματος στα ελληνικά, αγγλικά και ιταλικά'] },
        { heading: 'Το τεστ του πρώτου επισκέπτη', paragraphs: ['Πριν την πρώτη κράτηση, κάποιος από την ομάδα μένει μία νύχτα — ή τουλάχιστον περνά ένα απόγευμα — στο ακίνητο όπως θα έκανε ένας επισκέπτης. Πίεση ντους, ζεστό νερό, σίτες, ο θόρυβος του ψυγείου, αν το WiFi φτάνει στο μπαλκόνι. Είναι ο φθηνότερος τρόπος να αποφύγετε μια κακή πρώτη κριτική.'] },
      ],
      related: related([{ key: 'shortTermRentalManagement', en: 'Short-term rental management', el: 'Διαχείριση βραχυχρόνιας μίσθωσης' }, { key: 'maintenance', en: 'Maintenance', el: 'Συντήρηση' }, { key: 'insightHolidayHomeMaintenance', en: 'Holiday home maintenance on the Ionian coast', el: 'Συντήρηση εξοχικού στο Ιόνιο' }]).el,
      closing: closingOwner.el,
    },
  },

  insightOwnerReporting: {
    en: {
      datePublished: PUBLISHED,
      summary: 'The fields an owner statement must have, and the red flags when it doesn\'t.',
      metaTitle: 'What an Owner Report Should Contain | SM Holdings',
      metaDescription: 'The minimum an owner statement from a property manager should show — bookings, gross and net income, commissions, itemised costs with invoices, occupancy, inspection notes and pending decisions — and the red flags when it does not.',
      breadcrumb: 'What an owner report should contain',
      h1: 'What an Owner Report Should Contain',
      intro: 'A manager\'s statement is the only regular evidence an absent owner has that the property is being run properly. Here is what it must contain, and what its absence tells you.',
      eyebrow: 'Published 21 September 2026 · SM Holdings',
      sections: [
        { heading: 'The minimum fields', bullets: ['Period covered and date issued', 'Bookings or tenancy: dates, nights, number of guests or tenant name', 'Gross income by booking or by month', 'Platform commissions and payment fees, per booking', 'Costs, itemised: cleaning, maintenance, materials, utilities, with invoice references', 'Management fee and how it was calculated', 'Net amount paid to the owner and the date of transfer', 'Occupancy for the period and season to date', 'Inspection notes with photos', 'Open items needing the owner\'s decision'] },
        { heading: 'Why each one matters', tone: 'gray', paragraphs: ['Gross versus net shows whether the fee base is what you agreed. Per-booking commissions show what each channel really costs and whether direct bookings are growing. Itemised costs with invoices are what your accountant needs and what stops "miscellaneous" from becoming a habit. Occupancy against the season plan tells you whether pricing is right. Open items make sure decisions are yours, not the manager\'s by default.'] },
        { heading: 'Red flags', bullets: ['A single total with no breakdown', 'Costs without invoices, or invoices addressed to the manager\'s company rather than to the property', 'Fee calculated on a base other than the agreed one', 'Statements that arrive late or only when you ask', 'Repairs above the threshold that were not approved', 'No photos from inspections for months'] },
        { heading: 'A sensible schedule', tone: 'gray', paragraphs: ['Monthly during the season for holiday lets, with a season summary afterwards; annual for long-term lets, or monthly if you want it. Net income paid with the statement, not weeks later. Every document behind the statement available on request.'] },
      ],
      related: related([{ key: 'ownerReporting', en: 'Owner reporting service', el: 'Υπηρεσία αναφορών ιδιοκτήτη' }, { key: 'insightFeesGreece', en: 'How fees work in Greece', el: 'Πώς λειτουργούν οι αμοιβές' }, { key: 'propertyManagement', en: 'Property management', el: 'Διαχείριση ακινήτων' }]).en,
      closing: closingOwner.en,
    },
    el: {
      datePublished: PUBLISHED,
      summary: 'Τα πεδία που πρέπει να έχει μια κατάσταση ιδιοκτήτη, και τα σημάδια κινδύνου όταν λείπουν.',
      metaTitle: 'Τι Πρέπει να Περιέχει μια Αναφορά Ιδιοκτήτη | SM Holdings',
      metaDescription: 'Το ελάχιστο που πρέπει να δείχνει μια κατάσταση ιδιοκτήτη από διαχειριστή ακινήτων — κρατήσεις, μικτά και καθαρά έσοδα, προμήθειες, αναλυτικά κόστη με τιμολόγια, πληρότητα, σημειώσεις επιθεώρησης και εκκρεμείς αποφάσεις — και τα σημάδια κινδύνου όταν λείπουν.',
      breadcrumb: 'Τι πρέπει να περιέχει μια αναφορά ιδιοκτήτη',
      h1: 'Τι Πρέπει να Περιέχει μια Αναφορά Ιδιοκτήτη',
      intro: 'Η κατάσταση του διαχειριστή είναι η μόνη τακτική απόδειξη που έχει ένας απών ιδιοκτήτης ότι το ακίνητο λειτουργεί σωστά. Δείτε τι πρέπει να περιέχει, και τι σας λέει η απουσία της.',
      eyebrow: 'Δημοσιεύθηκε 21 Σεπτεμβρίου 2026 · SM Holdings',
      sections: [
        { heading: 'Τα ελάχιστα πεδία', bullets: ['Περίοδος και ημερομηνία έκδοσης', 'Κρατήσεις ή μίσθωση: ημερομηνίες, διανυκτερεύσεις, αριθμός επισκεπτών ή όνομα ενοικιαστή', 'Μικτά έσοδα ανά κράτηση ή ανά μήνα', 'Προμήθειες πλατφορμών και τέλη πληρωμών, ανά κράτηση', 'Κόστη αναλυτικά: καθαριότητα, συντήρηση, υλικά, λογαριασμοί, με αναφορές τιμολογίων', 'Αμοιβή διαχείρισης και πώς υπολογίστηκε', 'Καθαρό ποσό προς τον ιδιοκτήτη και ημερομηνία μεταφοράς', 'Πληρότητα περιόδου και σεζόν μέχρι σήμερα', 'Σημειώσεις επιθεώρησης με φωτογραφίες', 'Ανοιχτά θέματα που χρειάζονται απόφαση ιδιοκτήτη'] },
        { heading: 'Γιατί μετράει το καθένα', tone: 'gray', paragraphs: ['Μικτό έναντι καθαρού δείχνει αν η βάση της αμοιβής είναι αυτή που συμφωνήσατε. Οι προμήθειες ανά κράτηση δείχνουν τι κοστίζει πραγματικά κάθε κανάλι και αν οι απευθείας κρατήσεις αυξάνονται. Τα αναλυτικά κόστη με τιμολόγια είναι ό,τι χρειάζεται ο λογιστής σας και ό,τι εμποδίζει το «διάφορα» να γίνει συνήθεια. Η πληρότητα σε σχέση με το πλάνο σεζόν σας λέει αν η τιμολόγηση είναι σωστή. Τα ανοιχτά θέματα διασφαλίζουν ότι οι αποφάσεις είναι δικές σας, όχι του διαχειριστή εξ ορισμού.'] },
        { heading: 'Σημάδια κινδύνου', bullets: ['Ένα μόνο σύνολο χωρίς ανάλυση', 'Κόστη χωρίς τιμολόγια, ή τιμολόγια στο όνομα της εταιρείας του διαχειριστή αντί για το ακίνητο', 'Αμοιβή υπολογισμένη σε διαφορετική βάση από τη συμφωνημένη', 'Καταστάσεις που έρχονται αργά ή μόνο όταν ρωτάτε', 'Επισκευές πάνω από το όριο που δεν εγκρίθηκαν', 'Καμία φωτογραφία επιθεώρησης για μήνες'] },
        { heading: 'Ένα λογικό πρόγραμμα', tone: 'gray', paragraphs: ['Μηνιαία κατά τη σεζόν για διακοπές, με σύνοψη σεζόν μετά· ετήσια για μακροχρόνιες, ή μηνιαία αν το θέλετε. Το καθαρό ποσό καταβάλλεται μαζί με την κατάσταση, όχι εβδομάδες αργότερα. Κάθε έγγραφο πίσω από την κατάσταση διαθέσιμο κατόπιν αιτήματος.'] },
      ],
      related: related([{ key: 'ownerReporting', en: 'Owner reporting service', el: 'Υπηρεσία αναφορών ιδιοκτήτη' }, { key: 'insightFeesGreece', en: 'How fees work in Greece', el: 'Πώς λειτουργούν οι αμοιβές' }, { key: 'propertyManagement', en: 'Property management', el: 'Διαχείριση ακινήτων' }]).el,
      closing: closingOwner.el,
    },
  },
}

export const ARTICLE_KEYS = Object.keys(ARTICLES) as ArticleKey[]

export const insightsIndex = {
  en: {
    metaTitle: 'Insights for Property Owners in Greece | SM Holdings',
    metaDescription: 'Practical articles for property owners in Preveza and Greece: management fees, short-term vs long-term letting, coastal maintenance, season preparation and owner reporting — written from operating experience.',
    h1: 'Insights for Property Owners',
    intro: 'Short, practical answers to the questions owners ask before they hire a manager or let a property. Written by the team that operates L\'Incanto Apartments and manages property in Preveza — not assembled from other websites.',
  },
  el: {
    metaTitle: 'Άρθρα για Ιδιοκτήτες Ακινήτων στην Ελλάδα | SM Holdings',
    metaDescription: 'Πρακτικά άρθρα για ιδιοκτήτες ακινήτων στην Πρέβεζα και την Ελλάδα: αμοιβές διαχείρισης, βραχυχρόνια ή μακροχρόνια μίσθωση, συντήρηση παραθαλάσσιων, προετοιμασία σεζόν και αναφορές ιδιοκτήτη — από επιχειρησιακή εμπειρία.',
    h1: 'Άρθρα για Ιδιοκτήτες Ακινήτων',
    intro: 'Σύντομες, πρακτικές απαντήσεις στις ερωτήσεις που κάνουν οι ιδιοκτήτες πριν προσλάβουν διαχειριστή ή εκμισθώσουν ακίνητο. Γραμμένα από την ομάδα που λειτουργεί τα L\'Incanto Apartments και διαχειρίζεται ακίνητα στην Πρέβεζα — όχι συρραφή από άλλες ιστοσελίδες.',
  },
}
