import type { FAQItem } from '@/components/seo/FAQSchema'
import type { PageKey } from '@/lib/seo/routes'
import type { Localized } from './types'

type Card = { key: PageKey; title: string; text: string }

export type HomeContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  ctaOwner: string
  ctaSeeker: string
  proof: { label: string; value: string }[]
  pm: { title: string; text: string; cards: Card[] }
  re: { title: string; text: string; cards: Card[] }
  inventory: { title: string; text: string; empty: string; all: string }
  hospitality: { title: string; text: string; link: string; book: string }
  why: { title: string; items: { title: string; text: string }[] }
  areas: { title: string; text: string; link: string }
  company: { title: string; text: string; link: string }
  insights: { title: string; link: string }
  faq: { title: string; items: FAQItem[] }
  closing: { title: string; text: string }
}

export const home: Localized<HomeContent> = {
  en: {
    metaTitle: 'Property Management & Real Estate in Preveza | SM Holdings',
    metaDescription:
      'SM Holdings provides property management, short-term rental operations, real estate and hospitality services in Preveza, Greece. Based in Filippiada; operator of L\'Incanto Apartments in Chroneika.',
    h1: 'Property Management & Real Estate in Preveza, Greece',
    intro:
      'SM Holdings (SMH Real Estate) manages, lets and maintains residential and holiday-rental property in the Preveza area, and operates its own ten-apartment building, L\'Incanto, on the coast at Chroneika. One local team for owners, tenants, guests and investors.',
    ctaOwner: 'I own a property',
    ctaSeeker: "I'm looking for a property",
    proof: [
      { label: 'Company', value: 'S. M. HOLDINGS Ε.Ε., founded 2025 · ΓΕΜΗ 185169449000' },
      { label: 'Office', value: 'A. Panagouli 2, Filippiada 48200 · Tue & Thu 9:00–13:00' },
      { label: 'Operates', value: "L'Incanto Apartments — 10 holiday apartments, Chroneika" },
      { label: 'Service area', value: 'Preveza town and coast; Filippiada and Ziros' },
      { label: 'Languages', value: 'Greek · English · Italian' },
    ],
    pm: {
      title: 'Property management',
      text: 'We run the day-to-day of your property — guests or tenants, cleaning, repairs, payments and reporting — so it earns without taking up your time.',
      cards: [
        { key: 'shortTermRentalManagement', title: 'Short-term rentals', text: 'Listings, pricing, guests, cleaning and monthly reports for holiday lets.' },
        { key: 'longTermPropertyManagement', title: 'Long-term management', text: 'Tenants, myAADE leases, rent collection and inspections for annual lets.' },
        { key: 'maintenance', title: 'Maintenance', text: 'Scheduled checks, emergency repairs and winter care for coastal property.' },
        { key: 'guestManagement', title: 'Guest operations', text: 'Every guest contact from enquiry to review, in three languages.' },
      ],
    },
    re: {
      title: 'Real estate',
      text: 'Rentals from the portfolio we manage, rental valuations, and support for buyers and investors — with licensed brokers, lawyers and notaries for the parts that need them.',
      cards: [
        { key: 'properties', title: 'Properties for rent', text: 'Current listings from the managed portfolio.' },
        { key: 'propertyValuation', title: 'Rental valuation', text: 'What your property can earn as a holiday let and as a long-term let.' },
        { key: 'investment', title: 'Investment guidance', text: 'Buy-to-let and holiday-rental purchases in Preveza: process, due diligence, management.' },
      ],
    },
    inventory: { title: 'Available now', text: 'Only real, currently available properties are listed.', empty: 'No properties are listed at the moment. Tell us what you are looking for and we will contact you when something suitable comes up.', all: 'All properties' },
    hospitality: {
      title: "L'Incanto Apartments by SM Holdings",
      text: 'Ten self-catering apartments in one building at Chroneika, four kilometres north of Preveza, open June to September. Our own property, run by our own team — and the operation every service we offer owners is tested against.',
      link: 'How we operate it',
      book: 'Book a stay at lincanto.gr',
    },
    why: {
      title: 'Why owners choose SM Holdings',
      items: [
        { title: 'Reporting you can check', text: 'A statement for every period with income, itemised costs, invoices and inspection photos.' },
        { title: 'A local maintenance network', text: 'The electricians, plumbers and cleaners we use on our own building work on yours.' },
        { title: 'Pricing and distribution', text: 'Seasonal rate calendars and synchronised listings on the platforms and a direct-booking site.' },
        { title: 'Guest support that answers', text: 'Greek, English and Italian, before, during and after every stay.' },
      ],
    },
    areas: { title: 'Where we work', text: 'Preveza town, the Ionian coast north of it — Chroneika, Kalamitsi, Monolithi, Kanali — and Filippiada with the Ziros villages. Owners elsewhere in Greece case by case.', link: 'Property management in Preveza' },
    company: { title: 'The company', text: 'S. M. HOLDINGS Ε.Ε. was founded in June 2025 in Filippiada by Stefanos Maleskos and Monika Ritsi. Its registered activity is real estate leasing and management; it operates L\'Incanto Apartments and manages property for owners in the Preveza area.', link: 'About SM Holdings' },
    insights: { title: 'Insights for owners', link: 'All articles' },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { question: 'What does SM Holdings do?', answer: 'Property management (short-term and long-term), maintenance, real estate support and hospitality in the Preveza area of Greece. We operate L\'Incanto Apartments in Chroneika and manage property on behalf of owners.' },
        { question: 'Where are you based?', answer: 'Our office is at A. Panagouli 2, Filippiada 48200, in the Preveza regional unit. L\'Incanto Apartments is at Chroneika, on the coast north of Preveza town.' },
        { question: 'Do you manage properties outside Preveza?', answer: 'Our day-to-day operation is the Preveza area. We take on owners elsewhere in Greece case by case, when we can do the job properly.' },
        { question: 'How do I get a proposal for my property?', answer: 'Use the contact form (choose "I need property management") or call +30 2683 022 484. We visit the property and send a written proposal.' },
        { question: 'Is SMH Real Estate the same company?', answer: 'Yes. SMH Real Estate is the wordmark on our logo; the company is S. M. HOLDINGS Ε.Ε., trading as SM Holdings.' },
      ],
    },
    closing: { title: 'Talk to us about your property', text: 'Owners, tenants, guests and investors — one office, one phone number.' },
  },
  el: {
    metaTitle: 'Διαχείριση Ακινήτων & Ακίνητα στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Η SM Holdings παρέχει διαχείριση ακινήτων, λειτουργία βραχυχρόνιων μισθώσεων, υπηρεσίες ακινήτων και φιλοξενίας στην Πρέβεζα. Έδρα στη Φιλιππιάδα· λειτουργεί τα L\'Incanto Apartments στα Χρονέικα.',
    h1: 'Διαχείριση Ακινήτων & Ακίνητα στην Πρέβεζα',
    intro:
      'Η SM Holdings (SMH Real Estate) διαχειρίζεται, εκμισθώνει και συντηρεί κατοικίες και καταλύματα διακοπών στην περιοχή της Πρέβεζας, και λειτουργεί το δικό της κτίριο δέκα διαμερισμάτων, το L\'Incanto, στην ακτή στα Χρονέικα. Μία τοπική ομάδα για ιδιοκτήτες, ενοικιαστές, επισκέπτες και επενδυτές.',
    ctaOwner: 'Έχω ακίνητο',
    ctaSeeker: 'Ψάχνω ακίνητο',
    proof: [
      { label: 'Εταιρεία', value: 'S. M. HOLDINGS Ε.Ε., ίδρυση 2025 · ΓΕΜΗ 185169449000' },
      { label: 'Γραφείο', value: 'Α. Παναγούλη 2, Φιλιππιάδα 48200 · Τρ & Πέ 9:00–13:00' },
      { label: 'Λειτουργεί', value: "L'Incanto Apartments — 10 διαμερίσματα διακοπών, Χρονέικα" },
      { label: 'Περιοχή', value: 'Πόλη και ακτή Πρέβεζας· Φιλιππιάδα και Ζηρός' },
      { label: 'Γλώσσες', value: 'Ελληνικά · Αγγλικά · Ιταλικά' },
    ],
    pm: {
      title: 'Διαχείριση ακινήτων',
      text: 'Αναλαμβάνουμε την καθημερινότητα του ακινήτου σας — επισκέπτες ή ενοικιαστές, καθαριότητα, επισκευές, πληρωμές και αναφορές — ώστε να αποδίδει χωρίς να απασχολεί τον χρόνο σας.',
      cards: [
        { key: 'shortTermRentalManagement', title: 'Βραχυχρόνια μίσθωση', text: 'Καταχωρήσεις, τιμολόγηση, επισκέπτες, καθαριότητα και μηνιαίες αναφορές.' },
        { key: 'longTermPropertyManagement', title: 'Μακροχρόνια διαχείριση', text: 'Ενοικιαστές, μισθωτήρια myAADE, είσπραξη ενοικίων και επιθεωρήσεις.' },
        { key: 'maintenance', title: 'Συντήρηση', text: 'Προγραμματισμένοι έλεγχοι, έκτακτες επισκευές και χειμερινή φροντίδα παραθαλάσσιων ακινήτων.' },
        { key: 'guestManagement', title: 'Φιλοξενία επισκεπτών', text: 'Κάθε επαφή με επισκέπτη από το ερώτημα έως την κριτική, σε τρεις γλώσσες.' },
      ],
    },
    re: {
      title: 'Ακίνητα',
      text: 'Ενοικιάσεις από το χαρτοφυλάκιο που διαχειριζόμαστε, εκτιμήσεις ενοικίου και υποστήριξη αγοραστών και επενδυτών — με μεσίτες, δικηγόρους και συμβολαιογράφους για ό,τι τους χρειάζεται.',
      cards: [
        { key: 'properties', title: 'Ακίνητα προς ενοικίαση', text: 'Τρέχουσες καταχωρήσεις από το χαρτοφυλάκιο υπό διαχείριση.' },
        { key: 'propertyValuation', title: 'Εκτίμηση ενοικίου', text: 'Τι μπορεί να αποδώσει το ακίνητό σας ως διακοπές και ως μακροχρόνια.' },
        { key: 'investment', title: 'Επενδυτική καθοδήγηση', text: 'Αγορά για εκμίσθωση στην Πρέβεζα: διαδικασία, έλεγχοι, διαχείριση.' },
      ],
    },
    inventory: { title: 'Διαθέσιμα τώρα', text: 'Καταχωρούνται μόνο πραγματικά, διαθέσιμα ακίνητα.', empty: 'Δεν υπάρχουν καταχωρημένα ακίνητα αυτή τη στιγμή. Πείτε μας τι ψάχνετε και θα επικοινωνήσουμε όταν προκύψει κάτι κατάλληλο.', all: 'Όλα τα ακίνητα' },
    hospitality: {
      title: "L'Incanto Apartments by SM Holdings",
      text: 'Δέκα αυτόνομα διαμερίσματα σε ένα κτίριο στα Χρονέικα, τέσσερα χιλιόμετρα βόρεια της Πρέβεζας, ανοιχτά Ιούνιο έως Σεπτέμβριο. Δικό μας ακίνητο, με δική μας ομάδα — και η λειτουργία στην οποία δοκιμάζεται κάθε υπηρεσία που προσφέρουμε σε ιδιοκτήτες.',
      link: 'Πώς το λειτουργούμε',
      book: 'Κράτηση στο lincanto.gr',
    },
    why: {
      title: 'Γιατί οι ιδιοκτήτες επιλέγουν την SM Holdings',
      items: [
        { title: 'Αναφορές που ελέγχονται', text: 'Κατάσταση για κάθε περίοδο με έσοδα, αναλυτικά κόστη, τιμολόγια και φωτογραφίες επιθεώρησης.' },
        { title: 'Τοπικό δίκτυο συντήρησης', text: 'Οι ηλεκτρολόγοι, υδραυλικοί και καθαριστές του δικού μας κτιρίου δουλεύουν και στο δικό σας.' },
        { title: 'Τιμολόγηση και διανομή', text: 'Εποχικά ημερολόγια τιμών και συγχρονισμένες καταχωρήσεις σε πλατφόρμες και site απευθείας κρατήσεων.' },
        { title: 'Υποστήριξη επισκεπτών που απαντά', text: 'Ελληνικά, αγγλικά και ιταλικά, πριν, κατά και μετά από κάθε διαμονή.' },
      ],
    },
    areas: { title: 'Πού δραστηριοποιούμαστε', text: 'Πόλη της Πρέβεζας, η ακτή του Ιονίου βόρειά της — Χρονέικα, Καλαμίτσι, Μονολίθι, Κανάλι — και η Φιλιππιάδα με τα χωριά του Ζηρού. Ιδιοκτήτες αλλού στην Ελλάδα κατά περίπτωση.', link: 'Διαχείριση ακινήτων στην Πρέβεζα' },
    company: { title: 'Η εταιρεία', text: 'Η S. M. HOLDINGS Ε.Ε. ιδρύθηκε τον Ιούνιο του 2025 στη Φιλιππιάδα από τον Στέφανο Μαλέσκο και τη Μόνικα Ρίτσι. Καταστατική δραστηριότητα η εκμίσθωση και διαχείριση ακινήτων· λειτουργεί τα L\'Incanto Apartments και διαχειρίζεται ακίνητα για ιδιοκτήτες στην περιοχή της Πρέβεζας.', link: 'Σχετικά με την SM Holdings' },
    insights: { title: 'Άρθρα για ιδιοκτήτες', link: 'Όλα τα άρθρα' },
    faq: {
      title: 'Συχνές ερωτήσεις',
      items: [
        { question: 'Τι κάνει η SM Holdings;', answer: 'Διαχείριση ακινήτων (βραχυχρόνια και μακροχρόνια), συντήρηση, υποστήριξη σε θέματα ακινήτων και φιλοξενία στην περιοχή της Πρέβεζας. Λειτουργούμε τα L\'Incanto Apartments στα Χρονέικα και διαχειριζόμαστε ακίνητα για λογαριασμό ιδιοκτητών.' },
        { question: 'Πού έχετε έδρα;', answer: 'Το γραφείο μας είναι στην Α. Παναγούλη 2, Φιλιππιάδα 48200, στην Περιφερειακή Ενότητα Πρέβεζας. Τα L\'Incanto Apartments είναι στα Χρονέικα, στην ακτή βόρεια της πόλης της Πρέβεζας.' },
        { question: 'Διαχειρίζεστε ακίνητα εκτός Πρέβεζας;', answer: 'Η καθημερινή μας λειτουργία είναι η περιοχή της Πρέβεζας. Αναλαμβάνουμε ιδιοκτήτες αλλού στην Ελλάδα κατά περίπτωση, όταν μπορούμε να κάνουμε σωστά τη δουλειά.' },
        { question: 'Πώς θα λάβω πρόταση για το ακίνητό μου;', answer: 'Χρησιμοποιήστε τη φόρμα επικοινωνίας (επιλέξτε «Χρειάζομαι διαχείριση ακινήτου») ή καλέστε στο +30 2683 022 484. Επισκεπτόμαστε το ακίνητο και στέλνουμε γραπτή πρόταση.' },
        { question: 'Η SMH Real Estate είναι η ίδια εταιρεία;', answer: 'Ναι. Το SMH Real Estate είναι το λεκτικό του λογοτύπου μας· η εταιρεία είναι η S. M. HOLDINGS Ε.Ε., με διακριτικό τίτλο SM Holdings.' },
      ],
    },
    closing: { title: 'Μιλήστε μας για το ακίνητό σας', text: 'Ιδιοκτήτες, ενοικιαστές, επισκέπτες και επενδυτές — ένα γραφείο, ένα τηλέφωνο.' },
  },
}
