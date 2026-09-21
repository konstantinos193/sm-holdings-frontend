import type { Localized, PageContent } from './types'
import { COMMON } from './types'

const FEES_EN =
  'Short-term management is charged as a percentage of the rental income actually collected, so we only earn when the property does. Long-term management is a fixed monthly fee per property. Cleaning, repairs and materials are passed through at cost with your approval. Every owner receives the exact figures in a written proposal before signing.'
const FEES_EL =
  'Η βραχυχρόνια διαχείριση χρεώνεται ως ποσοστό επί των εσόδων που πράγματι εισπράττονται — κερδίζουμε μόνο όταν αποδίδει το ακίνητο. Η μακροχρόνια διαχείριση είναι σταθερή μηνιαία αμοιβή ανά ακίνητο. Καθαριότητα, επισκευές και υλικά χρεώνονται στο κόστος τους, με την έγκρισή σας. Κάθε ιδιοκτήτης λαμβάνει τα ακριβή ποσά σε γραπτή πρόταση πριν υπογράψει.'

export const propertyManagement: Localized<PageContent> = {
  en: {
    metaTitle: 'Property Management in Preveza, Greece | SM Holdings',
    metaDescription:
      'Professional property management in Preveza for residential and short-term rental properties: inspections, maintenance, guest and tenant support, rent collection and owner reporting.',
    breadcrumb: 'Property Management',
    h1: 'Property Management in Preveza, Greece',
    intro:
      'SM Holdings manages residential property on behalf of its owners in the Preveza area: holiday apartments let by the night and houses or flats let on long-term contracts. We run the day-to-day — listings, guests and tenants, cleaning, maintenance, payments and reporting — from our office in Filippiada, and we operate our own ten-apartment building, L\'Incanto, in Chroneika.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Who the service is for',
        paragraphs: [
          'Owners who live away from Preveza, or who do not want to handle guests, tenants and tradespeople themselves. Typical clients are families with a holiday home on the coast that sits empty most of the year, owners of flats in Preveza town they want let on annual contracts, and investors who have bought to let and need someone on the ground.',
        ],
        bullets: [
          'Holiday apartments and villas in Preveza, Chroneika, Kalamitsi, Monolithi and the surrounding coast',
          'Flats and houses in Preveza town let to long-term tenants',
          'Buildings with several units, managed as one portfolio',
          'Owners abroad who need a single point of contact in Greece',
        ],
      },
      {
        heading: 'What is included',
        tone: 'gray',
        cards: [
          { title: 'Short-term rental management', text: 'Listings, pricing, calendar sync, guest communication, check-in, cleaning and changeover, monthly revenue report.', href: '#short-term' },
          { title: 'Long-term property management', text: 'Tenant search and screening, lease registration, rent collection, inspections, utilities and building fees, annual statement.', href: '#long-term' },
          { title: 'Maintenance & repairs', text: 'Preventive checks, emergency call-outs, vetted local tradespeople, photo documentation and your approval above an agreed threshold.', href: '#maintenance' },
          { title: 'Guest & tenant management', text: 'Enquiries, contracts, arrival and departure, issues during a stay or tenancy, deposits and reviews.', href: '#guests' },
          { title: 'Owner reporting', text: 'A statement for every period showing income, costs, occupancy and what needs a decision from you.', href: '#reporting' },
          { title: 'Rental pricing & market advice', text: 'Rate setting by season for holiday lets and rent-level assessment for long-term lets, reviewed each year.', href: '#pricing' },
        ],
      },
      {
        heading: 'Inspections',
        paragraphs: [
          'Every managed property is inspected on a fixed schedule — after each changeover for holiday lets, and quarterly for long-term lets — plus after storms or reported problems. Inspections are documented with photos and a short checklist (water, electrics, appliances, damp, exterior, garden or pool where present) so you can see the condition of the property without being there.',
        ],
      },
      {
        heading: 'Repairs and maintenance',
        tone: 'gray',
        paragraphs: [
          'Small repairs are handled immediately by our local electricians, plumbers and handymen. Anything above the spending threshold in your agreement is sent to you with a quote and photos for approval before work starts. Seasonal tasks — air-conditioning service before summer, shutter and balcony checks, winter shutdown of a holiday home — are planned in advance rather than left to break.',
        ],
      },
      {
        heading: 'Rent and booking administration',
        paragraphs: [
          'For holiday lets we manage the calendar across our direct-booking site and the booking platforms, collect payments and deposits, and reconcile platform payouts. For long-term lets we draft and register the lease on the tax authority\'s myAADE platform, collect rent by bank transfer, chase late payments and handle deposit returns at the end of the tenancy.',
        ],
      },
      {
        heading: 'Pricing model',
        tone: 'gray',
        paragraphs: [FEES_EN],
      },
      {
        heading: 'How onboarding works',
        steps: [
          { title: 'Tell us about the property', text: 'Location, type, condition and how you would like to rent it. We reply with a first view of its rental potential.' },
          { title: 'Visit and proposal', text: 'We visit the property, agree the service level (short-term, long-term or both) and send a written proposal with fees and the spending threshold.' },
          { title: 'Agreement and set-up', text: 'We sign the management agreement, collect keys and documents, photograph the property and set up listings or start the tenant search.' },
          { title: 'Operation and reporting', text: 'From the first booking or tenancy we run the day-to-day and send you regular statements.' },
        ],
      },
      {
        heading: 'Service area',
        tone: 'gray',
        paragraphs: [
          'Our office is at A. Panagouli 2, Filippiada, in the Preveza regional unit of Epirus. We manage properties in the Preveza area — Preveza town, Chroneika, the beaches north of the town towards Kalamitsi and Monolithi, and the Amvrakikos side — and we take on owners elsewhere in Greece when the property and distance allow us to do the job properly. Ask and we will tell you honestly whether we can cover your location.',
        ],
      },
    ],
    faq: {
      title: 'Property management — frequently asked questions',
      items: [
        { question: 'What does a property management company do?', answer: 'It looks after a rental property on behalf of the owner: finding and vetting guests or tenants, handling contracts and payments, arranging cleaning and repairs, inspecting the property and reporting the income and costs. SM Holdings provides all of this for residential properties in the Preveza area.' },
        { question: 'Do you manage both short-term and long-term rentals?', answer: 'Yes. We manage holiday apartments and villas let per night through booking platforms and our own site, and flats and houses let to tenants on annual contracts. Some owners combine the two: long-term in winter, holiday lets in summer.' },
        { question: 'How are property management fees charged?', answer: FEES_EN },
        { question: 'Do I need to register anything for short-term rental in Greece?', answer: 'Yes. A property let short-term must be registered in the Short-Term Rental Property Registry (Μητρώο Ακινήτων Βραχυχρόνιας Διαμονής) and its registration number shown on every listing. We handle the registration and the periodic declarations with you and your accountant.' },
        { question: 'Which areas of Greece do you cover?', answer: 'We are based in Filippiada and manage properties in the Preveza area, including our own L\'Incanto Apartments in Chroneika. We take on owners in other parts of Greece case by case — contact us and we will confirm whether we can cover your location.' },
        { question: 'How do I start?', answer: 'Use the contact form (choose "I need property management") or call +30 2683 022 484. Tell us where the property is and how you would like to rent it, and we will arrange a visit and send you a proposal.' },
      ],
    },
    related: {
      title: 'Property management services',
      links: [
        { key: 'shortTermRentalManagement', title: 'Short-term rental management', text: 'Holiday apartments and villas let by the night.' },
        { key: 'longTermPropertyManagement', title: 'Long-term property management', text: 'Flats and houses on annual contracts.' },
        { key: 'maintenance', title: 'Maintenance', text: 'Inspections, repairs and seasonal preparation.' },
        { key: 'guestManagement', title: 'Guest management', text: 'From enquiry to check-out.' },
        { key: 'ownerReporting', title: 'Owner reporting', text: 'What you receive and when.' },
        { key: 'preveza', title: 'Property management in Preveza', text: 'The area we work in.' },
        { key: 'hospitality', title: "L'Incanto Apartments", text: 'The building we operate ourselves.' },
        { key: 'owners', title: 'For property owners', text: 'Start here if you own a property.' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Διαχείριση Ακινήτων στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Επαγγελματική διαχείριση ακινήτων στην Πρέβεζα για κατοικίες και βραχυχρόνιες μισθώσεις: επιθεωρήσεις, συντήρηση, υποστήριξη επισκεπτών και ενοικιαστών, είσπραξη ενοικίων και αναφορές προς τον ιδιοκτήτη.',
    breadcrumb: 'Διαχείριση Ακινήτων',
    h1: 'Διαχείριση Ακινήτων στην Πρέβεζα',
    intro:
      'Η SM Holdings διαχειρίζεται κατοικίες για λογαριασμό των ιδιοκτητών τους στην περιοχή της Πρέβεζας: διαμερίσματα διακοπών που ενοικιάζονται με τη βραδιά και σπίτια ή διαμερίσματα με μακροχρόνια συμβόλαια. Αναλαμβάνουμε την καθημερινότητα — καταχωρήσεις, επισκέπτες και ενοικιαστές, καθαριότητα, συντήρηση, πληρωμές και αναφορές — από το γραφείο μας στη Φιλιππιάδα, ενώ λειτουργούμε και το δικό μας κτίριο δέκα διαμερισμάτων, το L\'Incanto, στα Χρονέικα.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Για ποιους είναι η υπηρεσία',
        paragraphs: [
          'Για ιδιοκτήτες που μένουν μακριά από την Πρέβεζα ή δεν θέλουν να ασχολούνται οι ίδιοι με επισκέπτες, ενοικιαστές και τεχνικούς. Συνήθεις πελάτες μας είναι οικογένειες με εξοχικό στην ακτή που μένει άδειο τον περισσότερο χρόνο, ιδιοκτήτες διαμερισμάτων στην πόλη της Πρέβεζας που θέλουν ετήσια μίσθωση, και επενδυτές που αγόρασαν για εκμίσθωση και χρειάζονται κάποιον επιτόπου.',
        ],
        bullets: [
          'Διαμερίσματα διακοπών και βίλες σε Πρέβεζα, Χρονέικα, Καλαμίτσι, Μονολίθι και τη γύρω ακτή',
          'Διαμερίσματα και σπίτια στην πόλη της Πρέβεζας με μακροχρόνιους ενοικιαστές',
          'Κτίρια με περισσότερες μονάδες, ως ενιαίο χαρτοφυλάκιο',
          'Ιδιοκτήτες στο εξωτερικό που χρειάζονται ένα σημείο επαφής στην Ελλάδα',
        ],
      },
      {
        heading: 'Τι περιλαμβάνει',
        tone: 'gray',
        cards: [
          { title: 'Διαχείριση βραχυχρόνιας μίσθωσης', text: 'Καταχωρήσεις, τιμολόγηση, συγχρονισμός ημερολογίου, επικοινωνία με επισκέπτες, check-in, καθαριότητα και αλλαγή, μηνιαία αναφορά εσόδων.', href: '#short-term' },
          { title: 'Διαχείριση μακροχρόνιας μίσθωσης', text: 'Εύρεση και έλεγχος ενοικιαστή, δήλωση μισθωτηρίου, είσπραξη ενοικίων, επιθεωρήσεις, λογαριασμοί και κοινόχρηστα, ετήσια κατάσταση.', href: '#long-term' },
          { title: 'Συντήρηση & επισκευές', text: 'Προληπτικοί έλεγχοι, έκτακτες κλήσεις, ελεγμένοι τοπικοί τεχνικοί, φωτογραφική τεκμηρίωση και έγκρισή σας πάνω από συμφωνημένο όριο.', href: '#maintenance' },
          { title: 'Διαχείριση επισκεπτών & ενοικιαστών', text: 'Ερωτήματα, συμβόλαια, άφιξη και αναχώρηση, προβλήματα κατά τη διαμονή ή τη μίσθωση, εγγυήσεις και κριτικές.', href: '#guests' },
          { title: 'Αναφορές προς τον ιδιοκτήτη', text: 'Κατάσταση για κάθε περίοδο με έσοδα, έξοδα, πληρότητα και ό,τι χρειάζεται απόφασή σας.', href: '#reporting' },
          { title: 'Τιμολόγηση & συμβουλές αγοράς', text: 'Ορισμός τιμών ανά σεζόν για διακοπές και εκτίμηση ενοικίου για μακροχρόνια, με ετήσια αναθεώρηση.', href: '#pricing' },
        ],
      },
      {
        heading: 'Επιθεωρήσεις',
        paragraphs: [
          'Κάθε ακίνητο επιθεωρείται σε σταθερό πρόγραμμα — μετά από κάθε αλλαγή επισκεπτών στις βραχυχρόνιες, ανά τρίμηνο στις μακροχρόνιες — και επιπλέον μετά από κακοκαιρία ή αναφορά προβλήματος. Οι επιθεωρήσεις τεκμηριώνονται με φωτογραφίες και σύντομη λίστα ελέγχου (νερό, ηλεκτρολογικά, συσκευές, υγρασία, εξωτερικοί χώροι, κήπος ή πισίνα όπου υπάρχει), ώστε να βλέπετε την κατάσταση του ακινήτου χωρίς να είστε εκεί.',
        ],
      },
      {
        heading: 'Επισκευές και συντήρηση',
        tone: 'gray',
        paragraphs: [
          'Οι μικρές επισκευές γίνονται άμεσα από τους τοπικούς ηλεκτρολόγους, υδραυλικούς και τεχνίτες μας. Ό,τι ξεπερνά το όριο δαπάνης της σύμβασής σας σας αποστέλλεται με προσφορά και φωτογραφίες για έγκριση πριν ξεκινήσει η εργασία. Οι εποχικές εργασίες — service κλιματιστικών πριν το καλοκαίρι, έλεγχος ρολών και μπαλκονιών, χειμερινό κλείσιμο εξοχικού — προγραμματίζονται εκ των προτέρων.',
        ],
      },
      {
        heading: 'Διαχείριση ενοικίων και κρατήσεων',
        paragraphs: [
          'Στις βραχυχρόνιες μισθώσεις διαχειριζόμαστε το ημερολόγιο στο site απευθείας κρατήσεων και στις πλατφόρμες, εισπράττουμε πληρωμές και εγγυήσεις και συμφωνούμε τις εκκαθαρίσεις των πλατφορμών. Στις μακροχρόνιες συντάσσουμε και δηλώνουμε το μισθωτήριο στο myAADE, εισπράττουμε το ενοίκιο με τραπεζική μεταφορά, παρακολουθούμε καθυστερήσεις και διαχειριζόμαστε την επιστροφή εγγύησης στη λήξη.',
        ],
      },
      {
        heading: 'Πώς χρεώνεται',
        tone: 'gray',
        paragraphs: [FEES_EL],
      },
      {
        heading: 'Πώς ξεκινάμε',
        steps: [
          { title: 'Πείτε μας για το ακίνητο', text: 'Τοποθεσία, τύπος, κατάσταση και πώς θέλετε να το ενοικιάσετε. Απαντάμε με μια πρώτη εικόνα της μισθωτικής του δυναμικής.' },
          { title: 'Επίσκεψη και πρόταση', text: 'Επισκεπτόμαστε το ακίνητο, συμφωνούμε το επίπεδο υπηρεσίας (βραχυχρόνια, μακροχρόνια ή και τα δύο) και στέλνουμε γραπτή πρόταση με αμοιβές και όριο δαπάνης.' },
          { title: 'Σύμβαση και προετοιμασία', text: 'Υπογράφουμε τη σύμβαση διαχείρισης, παραλαμβάνουμε κλειδιά και έγγραφα, φωτογραφίζουμε το ακίνητο και στήνουμε καταχωρήσεις ή ξεκινάμε την αναζήτηση ενοικιαστή.' },
          { title: 'Λειτουργία και αναφορές', text: 'Από την πρώτη κράτηση ή μίσθωση αναλαμβάνουμε την καθημερινότητα και σας στέλνουμε τακτικές καταστάσεις.' },
        ],
      },
      {
        heading: 'Περιοχή εξυπηρέτησης',
        tone: 'gray',
        paragraphs: [
          'Το γραφείο μας είναι στην Α. Παναγούλη 2, Φιλιππιάδα, στην Περιφερειακή Ενότητα Πρέβεζας. Διαχειριζόμαστε ακίνητα στην περιοχή της Πρέβεζας — πόλη της Πρέβεζας, Χρονέικα, τις παραλίες βόρεια της πόλης προς Καλαμίτσι και Μονολίθι, και την πλευρά του Αμβρακικού — και αναλαμβάνουμε ιδιοκτήτες αλλού στην Ελλάδα όταν το ακίνητο και η απόσταση μας επιτρέπουν να κάνουμε σωστά τη δουλειά. Ρωτήστε μας και θα σας πούμε ειλικρινά αν καλύπτουμε την περιοχή σας.',
        ],
      },
    ],
    faq: {
      title: 'Διαχείριση ακινήτων — συχνές ερωτήσεις',
      items: [
        { question: 'Τι κάνει μια εταιρεία διαχείρισης ακινήτων;', answer: 'Φροντίζει ένα ακίνητο προς εκμίσθωση για λογαριασμό του ιδιοκτήτη: βρίσκει και ελέγχει επισκέπτες ή ενοικιαστές, αναλαμβάνει συμβόλαια και πληρωμές, οργανώνει καθαριότητα και επισκευές, επιθεωρεί το ακίνητο και αποδίδει έσοδα και έξοδα. Η SM Holdings παρέχει όλα αυτά για κατοικίες στην περιοχή της Πρέβεζας.' },
        { question: 'Διαχειρίζεστε και βραχυχρόνιες και μακροχρόνιες μισθώσεις;', answer: 'Ναι. Διαχειριζόμαστε διαμερίσματα διακοπών και βίλες που ενοικιάζονται με τη βραδιά μέσω πλατφορμών και του δικού μας site, και διαμερίσματα και σπίτια με ετήσια συμβόλαια. Κάποιοι ιδιοκτήτες συνδυάζουν τα δύο: μακροχρόνια τον χειμώνα, διακοπές το καλοκαίρι.' },
        { question: 'Πώς χρεώνεται η διαχείριση ακινήτου;', answer: FEES_EL },
        { question: 'Χρειάζεται κάποια εγγραφή για βραχυχρόνια μίσθωση στην Ελλάδα;', answer: 'Ναι. Το ακίνητο πρέπει να εγγραφεί στο Μητρώο Ακινήτων Βραχυχρόνιας Διαμονής και ο αριθμός μητρώου να εμφανίζεται σε κάθε καταχώρηση. Αναλαμβάνουμε την εγγραφή και τις περιοδικές δηλώσεις μαζί με εσάς και τον λογιστή σας.' },
        { question: 'Ποιες περιοχές της Ελλάδας καλύπτετε;', answer: 'Έχουμε έδρα τη Φιλιππιάδα και διαχειριζόμαστε ακίνητα στην περιοχή της Πρέβεζας, όπως τα δικά μας L\'Incanto Apartments στα Χρονέικα. Αναλαμβάνουμε ιδιοκτήτες σε άλλες περιοχές κατά περίπτωση — επικοινωνήστε μαζί μας για να επιβεβαιώσουμε αν καλύπτουμε την περιοχή σας.' },
        { question: 'Πώς ξεκινώ;', answer: 'Χρησιμοποιήστε τη φόρμα επικοινωνίας (επιλέξτε «Χρειάζομαι διαχείριση ακινήτου») ή καλέστε στο +30 2683 022 484. Πείτε μας πού είναι το ακίνητο και πώς θέλετε να το ενοικιάσετε, και θα κανονίσουμε επίσκεψη και πρόταση.' },
      ],
    },
    related: {
      title: 'Υπηρεσίες διαχείρισης ακινήτων',
      links: [
        { key: 'shortTermRentalManagement', title: 'Διαχείριση βραχυχρόνιας μίσθωσης', text: 'Διαμερίσματα και βίλες με τη βραδιά.' },
        { key: 'longTermPropertyManagement', title: 'Διαχείριση μακροχρόνιας μίσθωσης', text: 'Διαμερίσματα και σπίτια με ετήσιο συμβόλαιο.' },
        { key: 'maintenance', title: 'Συντήρηση', text: 'Επιθεωρήσεις, επισκευές και εποχική προετοιμασία.' },
        { key: 'guestManagement', title: 'Διαχείριση επισκεπτών', text: 'Από το ερώτημα έως το check-out.' },
        { key: 'ownerReporting', title: 'Αναφορές ιδιοκτήτη', text: 'Τι λαμβάνετε και πότε.' },
        { key: 'preveza', title: 'Διαχείριση ακινήτων στην Πρέβεζα', text: 'Η περιοχή που δραστηριοποιούμαστε.' },
        { key: 'hospitality', title: "L'Incanto Apartments", text: 'Το κτίριο που λειτουργούμε οι ίδιοι.' },
        { key: 'owners', title: 'Για ιδιοκτήτες', text: 'Ξεκινήστε εδώ αν έχετε ακίνητο.' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}

export const shortTermRentalManagement: Localized<PageContent> = {
  en: {
    metaTitle: 'Short-Term Rental Management in Preveza | SM Holdings',
    metaDescription:
      'Short-term rental management in Preveza covering listing operations, pricing, bookings, guest communication, cleaning, maintenance and owner reporting — run by the team that operates L\'Incanto Apartments.',
    breadcrumb: 'Short-Term Rental Management',
    h1: 'Short-Term Rental Management in Preveza',
    intro:
      'We take a holiday apartment or villa on the Preveza coast and run it as a rental business: listed on the booking platforms and on a direct-booking site, priced by season, cleaned and checked between every stay, with guests looked after from enquiry to departure. We do this every summer for our own building, L\'Incanto Apartments in Chroneika, and we apply the same routine to the properties we manage for owners.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'What we handle',
        bullets: [
          'Listing creation and optimisation on Airbnb, Booking.com and the other platforms your property suits, plus a direct-booking page',
          'Photography and description in Greek and English (Italian on request — a large share of Preveza\'s summer guests are Italian)',
          'Pricing by season and by demand, with minimum-stay rules for peak weeks',
          'Channel distribution and calendar synchronisation so the property is never double-booked',
          'Guest messaging before, during and after the stay',
          'Check-in and check-out — in person or with a key box, as the property allows',
          'Cleaning, linen and changeover between stays; restocking of essentials',
          'Maintenance and emergency call-outs during the season',
          'Registration in the Short-Term Rental Property Registry and the periodic declarations',
          'Monthly owner report with bookings, income, platform commissions, costs and occupancy',
        ],
      },
      {
        heading: 'Is your property suitable?',
        tone: 'gray',
        paragraphs: [
          'Not every property should be a holiday let. Before we take one on we look at location (distance to a beach, to Preveza town and to Aktion airport), access and parking, whether it can be run without you (key handover, who cleans, who fixes things), and what it needs to reach the standard guests now expect: air-conditioning in every room, reliable WiFi, a fully equipped kitchen, a washing machine and outdoor space.',
          'If the property would earn more as a long-term let, or would need more investment than the income justifies, we say so.',
        ],
      },
      {
        heading: 'How pricing works',
        paragraphs: [
          'Our fee is a percentage of the rental income actually collected — nothing when the property is empty. Platform commissions are shown separately in your report so you see exactly what each channel costs. Cleaning is charged per changeover, and where the platform allows it, passed to the guest as a cleaning fee. The percentage depends on the property and the level of service and is fixed in your written proposal.',
        ],
      },
      {
        heading: 'Onboarding a holiday let',
        tone: 'gray',
        steps: [
          { title: 'Assessment visit', text: 'We check the property, note what needs buying or fixing before the first guest, and estimate what it can earn in a season.' },
          { title: 'Set-up', text: 'Registry number, photography, listings on the chosen channels, house rules, pricing calendar and key handover procedure.' },
          { title: 'Season', text: 'We run bookings, guests, cleaning and maintenance, and report monthly. At the end of the season we close the property down properly for winter.' },
        ],
      },
      {
        heading: 'Proof: L\'Incanto Apartments',
        paragraphs: [
          'L\'Incanto is a building of ten self-catering apartments at Chroneika, four kilometres north of Preveza, operated by SM Holdings and open from June to September. It is let through the major booking platforms and through its own direct-booking website, and it is where our cleaning routine, guest communication and pricing calendar are tested every season before we use them on a client\'s property.',
        ],
      },
    ],
    faq: {
      title: 'Short-term rental management — frequently asked questions',
      items: [
        { question: 'Do you manage Airbnb listings?', answer: 'Yes. We list on Airbnb and Booking.com as standard and add other channels when they fit the property. We also set up a direct-booking page so repeat guests can book without platform commission.' },
        { question: 'Can I still use the property myself?', answer: 'Yes. You block the dates you want in the calendar before the season and we keep them free. We ask for as much notice as possible because blocked peak weeks affect what the property earns.' },
        { question: 'Who pays for cleaning and repairs?', answer: 'Cleaning is charged per changeover and, where the platform allows, passed to the guest as a cleaning fee. Repairs and materials are passed through at cost; anything above the threshold in your agreement is approved by you first.' },
        { question: 'What happens in winter?', answer: 'Most holiday lets on the Preveza coast close from October to May. We shut the property down properly — water, electrics, shutters, humidity control — inspect it during the winter and prepare it again in spring. Some owners let long-term in winter instead; we can manage that too.' },
      ],
    },
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyManagement', title: 'Property management overview' },
        { key: 'guestManagement', title: 'Guest management' },
        { key: 'maintenance', title: 'Maintenance' },
        { key: 'hospitality', title: "L'Incanto Apartments — how we operate it" },
        { key: 'insightShortVsLong', title: 'Short-term vs long-term rental in Preveza' },
        { key: 'insightSummerSeason', title: 'Preparing a rental property for the summer season' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Διαχείριση Βραχυχρόνιας Μίσθωσης στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Διαχείριση βραχυχρόνιας μίσθωσης (Airbnb, Booking) στην Πρέβεζα: καταχωρήσεις, τιμολόγηση, κρατήσεις, επικοινωνία με επισκέπτες, καθαριότητα, συντήρηση και αναφορές ιδιοκτήτη — από την ομάδα που λειτουργεί τα L\'Incanto Apartments.',
    breadcrumb: 'Διαχείριση Βραχυχρόνιας Μίσθωσης',
    h1: 'Διαχείριση Βραχυχρόνιας Μίσθωσης στην Πρέβεζα',
    intro:
      'Αναλαμβάνουμε ένα διαμέρισμα ή μια βίλα διακοπών στην ακτή της Πρέβεζας και το λειτουργούμε ως επιχείρηση ενοικίασης: καταχωρημένο στις πλατφόρμες και σε site απευθείας κρατήσεων, τιμολογημένο ανά σεζόν, καθαρισμένο και ελεγμένο ανάμεσα σε κάθε διαμονή, με τους επισκέπτες να εξυπηρετούνται από το πρώτο μήνυμα έως την αναχώρηση. Το κάνουμε κάθε καλοκαίρι για το δικό μας κτίριο, τα L\'Incanto Apartments στα Χρονέικα, και εφαρμόζουμε την ίδια ρουτίνα στα ακίνητα που διαχειριζόμαστε για ιδιοκτήτες.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Τι αναλαμβάνουμε',
        bullets: [
          'Δημιουργία και βελτιστοποίηση καταχώρησης σε Airbnb, Booking.com και όποια άλλη πλατφόρμα ταιριάζει στο ακίνητο, συν σελίδα απευθείας κρατήσεων',
          'Φωτογράφιση και περιγραφή στα ελληνικά και αγγλικά (ιταλικά κατόπιν αιτήματος — μεγάλο μέρος των επισκεπτών της Πρέβεζας το καλοκαίρι είναι Ιταλοί)',
          'Τιμολόγηση ανά σεζόν και ζήτηση, με ελάχιστη διαμονή τις εβδομάδες αιχμής',
          'Διανομή σε κανάλια και συγχρονισμός ημερολογίου ώστε να μη γίνεται ποτέ διπλή κράτηση',
          'Μηνύματα προς τους επισκέπτες πριν, κατά και μετά τη διαμονή',
          'Check-in και check-out — με φυσική παρουσία ή με κλειδοθήκη, ανάλογα με το ακίνητο',
          'Καθαριότητα, λευκά είδη και αλλαγή ανάμεσα στις διαμονές· αναπλήρωση βασικών',
          'Συντήρηση και έκτακτες κλήσεις κατά τη σεζόν',
          'Εγγραφή στο Μητρώο Ακινήτων Βραχυχρόνιας Διαμονής και περιοδικές δηλώσεις',
          'Μηνιαία αναφορά ιδιοκτήτη με κρατήσεις, έσοδα, προμήθειες πλατφορμών, έξοδα και πληρότητα',
        ],
      },
      {
        heading: 'Είναι κατάλληλο το ακίνητό σας;',
        tone: 'gray',
        paragraphs: [
          'Δεν πρέπει κάθε ακίνητο να γίνει κατάλυμα διακοπών. Πριν το αναλάβουμε κοιτάμε την τοποθεσία (απόσταση από παραλία, από την πόλη της Πρέβεζας και από το αεροδρόμιο Ακτίου), την πρόσβαση και το πάρκινγκ, αν μπορεί να λειτουργήσει χωρίς εσάς (παράδοση κλειδιών, ποιος καθαρίζει, ποιος επισκευάζει) και τι χρειάζεται για το επίπεδο που περιμένουν σήμερα οι επισκέπτες: κλιματισμό σε κάθε δωμάτιο, αξιόπιστο WiFi, πλήρως εξοπλισμένη κουζίνα, πλυντήριο και εξωτερικό χώρο.',
          'Αν το ακίνητο θα απέδιδε περισσότερο με μακροχρόνια μίσθωση ή θα χρειαζόταν περισσότερη επένδυση από όση δικαιολογεί το εισόδημα, σας το λέμε.',
        ],
      },
      {
        heading: 'Πώς λειτουργεί η τιμολόγηση',
        paragraphs: [
          'Η αμοιβή μας είναι ποσοστό επί των εσόδων που πράγματι εισπράττονται — τίποτα όταν το ακίνητο είναι άδειο. Οι προμήθειες των πλατφορμών εμφανίζονται ξεχωριστά στην αναφορά σας ώστε να βλέπετε ακριβώς τι κοστίζει κάθε κανάλι. Η καθαριότητα χρεώνεται ανά αλλαγή και, όπου το επιτρέπει η πλατφόρμα, μετακυλίεται στον επισκέπτη ως τέλος καθαρισμού. Το ποσοστό εξαρτάται από το ακίνητο και το επίπεδο υπηρεσίας και ορίζεται στη γραπτή πρόταση.',
        ],
      },
      {
        heading: 'Ένταξη ενός καταλύματος διακοπών',
        tone: 'gray',
        steps: [
          { title: 'Επίσκεψη αξιολόγησης', text: 'Ελέγχουμε το ακίνητο, σημειώνουμε τι πρέπει να αγοραστεί ή να επισκευαστεί πριν τον πρώτο επισκέπτη και εκτιμούμε τι μπορεί να αποδώσει σε μια σεζόν.' },
          { title: 'Προετοιμασία', text: 'Αριθμός μητρώου, φωτογράφιση, καταχωρήσεις στα επιλεγμένα κανάλια, κανόνες σπιτιού, ημερολόγιο τιμών και διαδικασία παράδοσης κλειδιών.' },
          { title: 'Σεζόν', text: 'Τρέχουμε κρατήσεις, επισκέπτες, καθαριότητα και συντήρηση και αναφέρουμε μηνιαία. Στο τέλος της σεζόν κλείνουμε σωστά το ακίνητο για τον χειμώνα.' },
        ],
      },
      {
        heading: 'Απόδειξη: L\'Incanto Apartments',
        paragraphs: [
          'Το L\'Incanto είναι κτίριο δέκα αυτόνομων διαμερισμάτων στα Χρονέικα, τέσσερα χιλιόμετρα βόρεια της Πρέβεζας, που λειτουργεί η SM Holdings από Ιούνιο έως Σεπτέμβριο. Διατίθεται μέσω των μεγάλων πλατφορμών και μέσω της δικής του ιστοσελίδας απευθείας κρατήσεων, και εκεί δοκιμάζονται κάθε σεζόν η ρουτίνα καθαριότητας, η επικοινωνία με επισκέπτες και το ημερολόγιο τιμών πριν τα εφαρμόσουμε σε ακίνητο πελάτη.',
        ],
      },
    ],
    faq: {
      title: 'Διαχείριση βραχυχρόνιας μίσθωσης — συχνές ερωτήσεις',
      items: [
        { question: 'Διαχειρίζεστε καταχωρήσεις Airbnb;', answer: 'Ναι. Καταχωρούμε σε Airbnb και Booking.com ως βάση και προσθέτουμε άλλα κανάλια όταν ταιριάζουν στο ακίνητο. Στήνουμε επίσης σελίδα απευθείας κρατήσεων ώστε οι επαναλαμβανόμενοι επισκέπτες να κλείνουν χωρίς προμήθεια πλατφόρμας.' },
        { question: 'Μπορώ να χρησιμοποιώ το ακίνητο ο ίδιος;', answer: 'Ναι. Μπλοκάρετε τις ημερομηνίες που θέλετε στο ημερολόγιο πριν τη σεζόν και τις κρατάμε ελεύθερες. Ζητάμε όσο το δυνατόν μεγαλύτερη προειδοποίηση, γιατί οι μπλοκαρισμένες εβδομάδες αιχμής επηρεάζουν τα έσοδα.' },
        { question: 'Ποιος πληρώνει καθαριότητα και επισκευές;', answer: 'Η καθαριότητα χρεώνεται ανά αλλαγή και, όπου το επιτρέπει η πλατφόρμα, μετακυλίεται στον επισκέπτη. Επισκευές και υλικά χρεώνονται στο κόστος τους· ό,τι ξεπερνά το όριο της σύμβασης εγκρίνεται πρώτα από εσάς.' },
        { question: 'Τι γίνεται τον χειμώνα;', answer: 'Τα περισσότερα καταλύματα διακοπών στην ακτή της Πρέβεζας κλείνουν από Οκτώβριο έως Μάιο. Κλείνουμε σωστά το ακίνητο — νερό, ηλεκτρολογικά, ρολά, έλεγχος υγρασίας — το επιθεωρούμε τον χειμώνα και το προετοιμάζουμε ξανά την άνοιξη. Κάποιοι ιδιοκτήτες το εκμισθώνουν μακροχρόνια τον χειμώνα· το διαχειριζόμαστε κι αυτό.' },
      ],
    },
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων — επισκόπηση' },
        { key: 'guestManagement', title: 'Διαχείριση επισκεπτών' },
        { key: 'maintenance', title: 'Συντήρηση' },
        { key: 'hospitality', title: "L'Incanto Apartments — πώς το λειτουργούμε" },
        { key: 'insightShortVsLong', title: 'Βραχυχρόνια ή μακροχρόνια μίσθωση στην Πρέβεζα' },
        { key: 'insightSummerSeason', title: 'Προετοιμασία ακινήτου για την καλοκαιρινή σεζόν' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}

export const longTermPropertyManagement: Localized<PageContent> = {
  en: {
    metaTitle: 'Long-Term Property Management in Preveza | SM Holdings',
    metaDescription:
      'Management of flats and houses let on annual contracts in Preveza: tenant search and screening, lease registration on myAADE, rent collection, inspections, maintenance and an annual owner statement.',
    breadcrumb: 'Long-Term Property Management',
    h1: 'Long-Term Property Management in Preveza',
    intro:
      'For flats and houses let to tenants on annual contracts, we act as the owner\'s representative: we find and screen the tenant, prepare and register the lease, collect the rent, inspect the property, coordinate repairs and send you one clear statement a year — or monthly if you prefer.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'What we handle',
        bullets: [
          'Rent-level assessment against current asking rents in Preveza',
          'Advertising, viewings and tenant screening (income, references, previous landlord)',
          'Lease drafting and electronic registration on myAADE, including renewals and terminations',
          'Rent collection by bank transfer, reminders and follow-up of late payments',
          'Move-in and move-out inspections with photo inventory; deposit handling',
          'Quarterly inspections during the tenancy',
          'Maintenance coordination with vetted local tradespeople; owner approval above the agreed threshold',
          'Utilities, building (κοινόχρηστα) fees and ENFIA/tax paperwork coordination with your accountant',
          'Annual statement of income and costs for your tax return',
        ],
      },
      {
        heading: 'Pricing model',
        tone: 'gray',
        paragraphs: [
          'A fixed monthly fee per property, agreed in writing. Tenant placement (advertising, viewings, screening and lease) is charged once, when a new tenant signs. Repairs and materials are passed through at cost.',
        ],
      },
      {
        heading: 'Who it suits',
        paragraphs: [
          'Owners who live abroad or elsewhere in Greece, owners of several units in Preveza who want them handled as one portfolio, and holiday-home owners who prefer a winter tenant to an empty property from October to May.',
        ],
      },
    ],
    faq: {
      title: 'Long-term management — frequently asked questions',
      items: [
        { question: 'How do you screen tenants?', answer: 'We verify identity and income, ask for references from the previous landlord where there is one, and meet every prospective tenant at the viewing. You make the final decision on the basis of our summary.' },
        { question: 'What if the tenant stops paying?', answer: 'We follow up immediately, in writing and by phone, and keep you informed at each step. If it comes to formal notice or eviction we coordinate with a lawyer on your behalf; legal fees are separate and agreed with you first.' },
        { question: 'Can you switch a property between long-term and holiday letting?', answer: 'Yes, where the property and its registration allow it. Several owners let long-term from October to May and as a holiday let in summer; we manage both sides.' },
      ],
    },
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyManagement', title: 'Property management overview' },
        { key: 'ownerReporting', title: 'Owner reporting' },
        { key: 'maintenance', title: 'Maintenance' },
        { key: 'propertyValuation', title: 'Rental valuation' },
        { key: 'insightShortVsLong', title: 'Short-term vs long-term rental in Preveza' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Διαχείριση Μακροχρόνιας Μίσθωσης στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Διαχείριση διαμερισμάτων και σπιτιών με ετήσιο συμβόλαιο στην Πρέβεζα: εύρεση και έλεγχος ενοικιαστή, δήλωση μισθωτηρίου στο myAADE, είσπραξη ενοικίων, επιθεωρήσεις, συντήρηση και ετήσια κατάσταση ιδιοκτήτη.',
    breadcrumb: 'Διαχείριση Μακροχρόνιας Μίσθωσης',
    h1: 'Διαχείριση Μακροχρόνιας Μίσθωσης στην Πρέβεζα',
    intro:
      'Για διαμερίσματα και σπίτια που εκμισθώνονται με ετήσιο συμβόλαιο, ενεργούμε ως εκπρόσωπος του ιδιοκτήτη: βρίσκουμε και ελέγχουμε τον ενοικιαστή, συντάσσουμε και δηλώνουμε το μισθωτήριο, εισπράττουμε το ενοίκιο, επιθεωρούμε το ακίνητο, συντονίζουμε επισκευές και σας στέλνουμε μία καθαρή κατάσταση τον χρόνο — ή μηνιαία αν προτιμάτε.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Τι αναλαμβάνουμε',
        bullets: [
          'Εκτίμηση ενοικίου με βάση τις τρέχουσες ζητούμενες τιμές στην Πρέβεζα',
          'Αγγελία, επισκέψεις και έλεγχος ενοικιαστή (εισόδημα, συστάσεις, προηγούμενος ιδιοκτήτης)',
          'Σύνταξη μισθωτηρίου και ηλεκτρονική δήλωση στο myAADE, με ανανεώσεις και λύσεις',
          'Είσπραξη ενοικίου με τραπεζική μεταφορά, υπενθυμίσεις και παρακολούθηση καθυστερήσεων',
          'Επιθεωρήσεις εισόδου και εξόδου με φωτογραφική απογραφή· διαχείριση εγγύησης',
          'Τριμηνιαίες επιθεωρήσεις κατά τη μίσθωση',
          'Συντονισμός συντήρησης με ελεγμένους τοπικούς τεχνικούς· έγκριση ιδιοκτήτη πάνω από το συμφωνημένο όριο',
          'Λογαριασμοί, κοινόχρηστα και συντονισμός με τον λογιστή σας για ΕΝΦΙΑ και φορολογικά',
          'Ετήσια κατάσταση εσόδων και εξόδων για τη φορολογική σας δήλωση',
        ],
      },
      {
        heading: 'Πώς χρεώνεται',
        tone: 'gray',
        paragraphs: [
          'Σταθερή μηνιαία αμοιβή ανά ακίνητο, συμφωνημένη γραπτώς. Η τοποθέτηση ενοικιαστή (αγγελία, επισκέψεις, έλεγχος και μισθωτήριο) χρεώνεται εφάπαξ όταν υπογράφει νέος ενοικιαστής. Επισκευές και υλικά χρεώνονται στο κόστος τους.',
        ],
      },
      {
        heading: 'Σε ποιους ταιριάζει',
        paragraphs: [
          'Σε ιδιοκτήτες που μένουν στο εξωτερικό ή αλλού στην Ελλάδα, σε ιδιοκτήτες περισσότερων μονάδων στην Πρέβεζα που τις θέλουν ως ενιαίο χαρτοφυλάκιο, και σε ιδιοκτήτες εξοχικών που προτιμούν χειμερινό ενοικιαστή από άδειο ακίνητο Οκτώβριο–Μάιο.',
        ],
      },
    ],
    faq: {
      title: 'Μακροχρόνια διαχείριση — συχνές ερωτήσεις',
      items: [
        { question: 'Πώς ελέγχετε τους ενοικιαστές;', answer: 'Επαληθεύουμε ταυτότητα και εισόδημα, ζητάμε συστάσεις από τον προηγούμενο ιδιοκτήτη όπου υπάρχει, και συναντάμε κάθε υποψήφιο στην επίσκεψη. Την τελική απόφαση την παίρνετε εσείς με βάση τη σύνοψή μας.' },
        { question: 'Τι γίνεται αν ο ενοικιαστής σταματήσει να πληρώνει;', answer: 'Παρεμβαίνουμε άμεσα, γραπτά και τηλεφωνικά, και σας ενημερώνουμε σε κάθε βήμα. Αν φτάσει σε εξώδικο ή έξωση, συντονιζόμαστε με δικηγόρο για λογαριασμό σας· τα νομικά έξοδα είναι ξεχωριστά και συμφωνούνται πρώτα μαζί σας.' },
        { question: 'Μπορεί ένα ακίνητο να εναλλάσσεται μεταξύ μακροχρόνιας και βραχυχρόνιας;', answer: 'Ναι, όπου το επιτρέπουν το ακίνητο και η εγγραφή του. Αρκετοί ιδιοκτήτες εκμισθώνουν μακροχρόνια Οκτώβριο–Μάιο και ως κατάλυμα διακοπών το καλοκαίρι· διαχειριζόμαστε και τις δύο πλευρές.' },
      ],
    },
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων — επισκόπηση' },
        { key: 'ownerReporting', title: 'Αναφορές ιδιοκτήτη' },
        { key: 'maintenance', title: 'Συντήρηση' },
        { key: 'propertyValuation', title: 'Εκτίμηση ενοικίου' },
        { key: 'insightShortVsLong', title: 'Βραχυχρόνια ή μακροχρόνια μίσθωση στην Πρέβεζα' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}

export const maintenance: Localized<PageContent> = {
  en: {
    metaTitle: 'Property Maintenance in Preveza | SM Holdings',
    metaDescription:
      'Property maintenance in Preveza for managed rental properties: scheduled inspections, emergency repairs, vetted local tradespeople, owner approval thresholds, seasonal preparation and photo documentation.',
    breadcrumb: 'Maintenance',
    h1: 'Property Maintenance in Preveza',
    intro:
      'Coastal property in Preveza takes a beating: salt air, summer heat, winter humidity and long empty periods. Our maintenance service keeps a managed property in letting condition all year — with scheduled checks, a local trade network, clear approval rules and photos of everything we do.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'What is covered',
        bullets: [
          'Electrical, plumbing, air-conditioning, water heaters and appliances',
          'Shutters, doors, locks, windows and balcony railings',
          'Damp, mould and ventilation in closed-up properties',
          'Exterior: render, paint, gutters, terraces, gardens and pools where present',
          'Furniture, mattresses, linen and the inventory of a holiday let',
          'Internet, TV and key boxes',
        ],
      },
      {
        heading: 'How the emergency process works',
        tone: 'gray',
        paragraphs: [
          'Guests and tenants have a phone number that is answered during the season. A leak, power failure or lock-out is dealt with the same day by one of our local tradespeople. You are informed of what happened and what it cost; anything above your approval threshold is agreed with you before the work goes ahead unless it is needed to make the property safe.',
        ],
      },
      {
        heading: 'Approval thresholds',
        paragraphs: [
          'Your management agreement sets a spending limit. Below it we act immediately and show the cost in your next statement; above it we send a quote and photos and wait for your approval. Owners choose the threshold — most set it at a level that covers a typical call-out without a phone call.',
        ],
      },
      {
        heading: 'Inspection frequency',
        tone: 'gray',
        paragraphs: [
          'Holiday lets are checked after every changeover. Long-term lets are inspected quarterly with the tenant\'s agreement. Empty properties are visited monthly in winter to run water, air the rooms and check for damp or storm damage.',
        ],
      },
      {
        heading: 'Contractor vetting and documentation',
        paragraphs: [
          'We work with a small group of local electricians, plumbers, cleaners and general builders we use on our own building. Every job is documented with before-and-after photos and the invoice, and appears in your owner report.',
        ],
      },
      {
        heading: 'Seasonal preparation',
        tone: 'gray',
        bullets: [
          'Spring: air-conditioning service, water heater and appliance checks, deep clean, outdoor furniture, WiFi test, restock',
          'Autumn: shut-down of holiday lets, water and electrics, shutters, humidity control, storage of textiles',
          'Before a long-term tenancy: safety checks, keys, meter readings and photo inventory',
        ],
      },
    ],
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyManagement', title: 'Property management overview' },
        { key: 'shortTermRentalManagement', title: 'Short-term rental management' },
        { key: 'insightHolidayHomeMaintenance', title: 'Holiday home maintenance on the Ionian coast' },
        { key: 'insightSummerSeason', title: 'Preparing a rental property for the summer season' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Συντήρηση Ακινήτων στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Συντήρηση ακινήτων στην Πρέβεζα για ακίνητα υπό διαχείριση: προγραμματισμένες επιθεωρήσεις, έκτακτες επισκευές, ελεγμένοι τοπικοί τεχνικοί, όρια έγκρισης ιδιοκτήτη, εποχική προετοιμασία και φωτογραφική τεκμηρίωση.',
    breadcrumb: 'Συντήρηση',
    h1: 'Συντήρηση Ακινήτων στην Πρέβεζα',
    intro:
      'Τα παραθαλάσσια ακίνητα στην Πρέβεζα ταλαιπωρούνται: αλμύρα, καλοκαιρινή ζέστη, χειμωνιάτικη υγρασία και μεγάλες περίοδοι που μένουν άδεια. Η υπηρεσία συντήρησης κρατά ένα ακίνητο υπό διαχείριση σε κατάσταση εκμίσθωσης όλο τον χρόνο — με προγραμματισμένους ελέγχους, τοπικό δίκτυο τεχνικών, ξεκάθαρους κανόνες έγκρισης και φωτογραφίες για κάθε εργασία.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Τι καλύπτεται',
        bullets: [
          'Ηλεκτρολογικά, υδραυλικά, κλιματισμός, θερμοσίφωνες και συσκευές',
          'Ρολά, πόρτες, κλειδαριές, παράθυρα και κάγκελα μπαλκονιών',
          'Υγρασία, μούχλα και αερισμός σε κλειστά ακίνητα',
          'Εξωτερικά: σοβάδες, βαφές, υδρορροές, βεράντες, κήποι και πισίνες όπου υπάρχουν',
          'Έπιπλα, στρώματα, λευκά είδη και απογραφή καταλύματος διακοπών',
          'Internet, τηλεόραση και κλειδοθήκες',
        ],
      },
      {
        heading: 'Πώς λειτουργεί η διαδικασία έκτακτης ανάγκης',
        tone: 'gray',
        paragraphs: [
          'Επισκέπτες και ενοικιαστές έχουν έναν αριθμό τηλεφώνου που απαντάται κατά τη σεζόν. Διαρροή, διακοπή ρεύματος ή κλείδωμα απ\' έξω αντιμετωπίζονται την ίδια μέρα από τοπικό τεχνικό μας. Ενημερώνεστε για το τι συνέβη και τι κόστισε· ό,τι ξεπερνά το όριο έγκρισής σας συμφωνείται μαζί σας πριν προχωρήσει, εκτός αν χρειάζεται για την ασφάλεια του ακινήτου.',
        ],
      },
      {
        heading: 'Όρια έγκρισης',
        paragraphs: [
          'Η σύμβαση διαχείρισης ορίζει ένα όριο δαπάνης. Κάτω από αυτό ενεργούμε άμεσα και το κόστος εμφανίζεται στην επόμενη κατάσταση· πάνω από αυτό στέλνουμε προσφορά και φωτογραφίες και περιμένουμε την έγκρισή σας. Το όριο το επιλέγετε εσείς — οι περισσότεροι το ορίζουν ώστε να καλύπτει μια συνηθισμένη κλήση τεχνικού χωρίς τηλεφώνημα.',
        ],
      },
      {
        heading: 'Συχνότητα επιθεωρήσεων',
        tone: 'gray',
        paragraphs: [
          'Τα καταλύματα διακοπών ελέγχονται μετά από κάθε αλλαγή. Οι μακροχρόνιες μισθώσεις επιθεωρούνται ανά τρίμηνο σε συνεννόηση με τον ενοικιαστή. Τα άδεια ακίνητα επισκέπτονται μηνιαία τον χειμώνα για να τρέξει το νερό, να αεριστούν οι χώροι και να ελεγχθεί υγρασία ή ζημιά από κακοκαιρία.',
        ],
      },
      {
        heading: 'Επιλογή τεχνικών και τεκμηρίωση',
        paragraphs: [
          'Συνεργαζόμαστε με μια μικρή ομάδα τοπικών ηλεκτρολόγων, υδραυλικών, καθαριστών και οικοδόμων που χρησιμοποιούμε στο δικό μας κτίριο. Κάθε εργασία τεκμηριώνεται με φωτογραφίες πριν και μετά και με το τιμολόγιο, και εμφανίζεται στην αναφορά ιδιοκτήτη.',
        ],
      },
      {
        heading: 'Εποχική προετοιμασία',
        tone: 'gray',
        bullets: [
          'Άνοιξη: service κλιματιστικών, έλεγχος θερμοσίφωνα και συσκευών, γενικός καθαρισμός, έπιπλα εξωτερικού χώρου, τεστ WiFi, αναπλήρωση',
          'Φθινόπωρο: κλείσιμο καταλυμάτων διακοπών, νερό και ηλεκτρολογικά, ρολά, έλεγχος υγρασίας, αποθήκευση υφασμάτων',
          'Πριν από μακροχρόνια μίσθωση: έλεγχοι ασφαλείας, κλειδιά, ενδείξεις μετρητών και φωτογραφική απογραφή',
        ],
      },
    ],
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων — επισκόπηση' },
        { key: 'shortTermRentalManagement', title: 'Διαχείριση βραχυχρόνιας μίσθωσης' },
        { key: 'insightHolidayHomeMaintenance', title: 'Συντήρηση εξοχικού στο Ιόνιο' },
        { key: 'insightSummerSeason', title: 'Προετοιμασία ακινήτου για την καλοκαιρινή σεζόν' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}

export const guestManagement: Localized<PageContent> = {
  en: {
    metaTitle: 'Guest Management for Holiday Rentals in Preveza | SM Holdings',
    metaDescription:
      'Guest management for holiday rentals in Preveza: enquiries, booking confirmation, arrival instructions, check-in and check-out, support during the stay, deposits and reviews — in Greek, English and Italian.',
    breadcrumb: 'Guest Management',
    h1: 'Guest Management for Holiday Rentals in Preveza',
    intro:
      'Guests decide how a property is rated, and ratings decide how it ranks on the platforms. Our guest management covers every contact from the first enquiry to the review after departure, in Greek, English and Italian, using the routine we run at L\'Incanto Apartments each summer.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Before arrival',
        bullets: [
          'Answers to enquiries within the platform response windows',
          'Booking confirmation, house rules and cancellation terms in the guest\'s language',
          'Arrival instructions: directions from Aktion airport and the Preveza ferry, parking, key handover, WiFi',
          'Special requests — cots, early check-in, late check-out — agreed in advance where the calendar allows',
        ],
      },
      {
        heading: 'During the stay',
        tone: 'gray',
        bullets: [
          'Check-in in person or by key box, with a walk-through of the property when guests want one',
          'A phone number that is answered for problems during the stay',
          'Maintenance issues resolved through our local tradespeople the same day',
          'Local information: beaches, Preveza town, day trips, where to eat',
        ],
      },
      {
        heading: 'After departure',
        bullets: [
          'Check-out inspection and damage report with photos',
          'Deposit release or claim through the platform',
          'Review request and a reply to every review, good or bad',
          'Turnover: cleaning, linen and restocking before the next arrival',
        ],
      },
      {
        heading: 'Screening and house rules',
        tone: 'gray',
        paragraphs: [
          'We set house rules with you — occupancy, pets, parties, smoking, quiet hours — and apply them at booking. On platforms that allow it we review guest profiles and decline bookings that do not fit the property. Every rule that affects the guest is written in the listing so there are no surprises on arrival.',
        ],
      },
    ],
    related: {
      title: 'Related pages',
      links: [
        { key: 'shortTermRentalManagement', title: 'Short-term rental management' },
        { key: 'maintenance', title: 'Maintenance' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
        { key: 'ownerReporting', title: 'Owner reporting' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Διαχείριση Επισκεπτών για Καταλύματα Διακοπών στην Πρέβεζα | SM Holdings',
    metaDescription:
      'Διαχείριση επισκεπτών για καταλύματα διακοπών στην Πρέβεζα: ερωτήματα, επιβεβαίωση κράτησης, οδηγίες άφιξης, check-in και check-out, υποστήριξη κατά τη διαμονή, εγγυήσεις και κριτικές — στα ελληνικά, αγγλικά και ιταλικά.',
    breadcrumb: 'Διαχείριση Επισκεπτών',
    h1: 'Διαχείριση Επισκεπτών για Καταλύματα Διακοπών στην Πρέβεζα',
    intro:
      'Οι επισκέπτες καθορίζουν πώς βαθμολογείται ένα ακίνητο, και οι βαθμολογίες καθορίζουν πώς κατατάσσεται στις πλατφόρμες. Η διαχείριση επισκεπτών καλύπτει κάθε επαφή από το πρώτο ερώτημα έως την κριτική μετά την αναχώρηση, στα ελληνικά, αγγλικά και ιταλικά, με τη ρουτίνα που εφαρμόζουμε στα L\'Incanto Apartments κάθε καλοκαίρι.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Πριν την άφιξη',
        bullets: [
          'Απαντήσεις σε ερωτήματα μέσα στα χρονικά όρια απόκρισης των πλατφορμών',
          'Επιβεβαίωση κράτησης, κανόνες σπιτιού και όροι ακύρωσης στη γλώσσα του επισκέπτη',
          'Οδηγίες άφιξης: διαδρομή από το αεροδρόμιο Ακτίου και το πορθμείο, πάρκινγκ, παράδοση κλειδιών, WiFi',
          'Ειδικά αιτήματα — βρεφικές κούνιες, νωρίτερο check-in, αργότερο check-out — συμφωνημένα εκ των προτέρων όπου το επιτρέπει το ημερολόγιο',
        ],
      },
      {
        heading: 'Κατά τη διαμονή',
        tone: 'gray',
        bullets: [
          'Check-in με φυσική παρουσία ή με κλειδοθήκη, με ξενάγηση στο ακίνητο όταν το θέλουν οι επισκέπτες',
          'Αριθμός τηλεφώνου που απαντάται για προβλήματα κατά τη διαμονή',
          'Θέματα συντήρησης που λύνονται μέσω των τοπικών τεχνικών μας την ίδια μέρα',
          'Τοπικές πληροφορίες: παραλίες, πόλη της Πρέβεζας, ημερήσιες εκδρομές, πού να φάτε',
        ],
      },
      {
        heading: 'Μετά την αναχώρηση',
        bullets: [
          'Επιθεώρηση check-out και αναφορά ζημιών με φωτογραφίες',
          'Αποδέσμευση ή διεκδίκηση εγγύησης μέσω της πλατφόρμας',
          'Αίτημα κριτικής και απάντηση σε κάθε κριτική, καλή ή κακή',
          'Αλλαγή: καθαριότητα, λευκά είδη και αναπλήρωση πριν την επόμενη άφιξη',
        ],
      },
      {
        heading: 'Έλεγχος επισκεπτών και κανόνες σπιτιού',
        tone: 'gray',
        paragraphs: [
          'Ορίζουμε τους κανόνες σπιτιού μαζί σας — άτομα, κατοικίδια, πάρτι, κάπνισμα, ώρες κοινής ησυχίας — και τους εφαρμόζουμε στην κράτηση. Στις πλατφόρμες που το επιτρέπουν ελέγχουμε τα προφίλ και απορρίπτουμε κρατήσεις που δεν ταιριάζουν στο ακίνητο. Κάθε κανόνας που αφορά τον επισκέπτη είναι γραμμένος στην καταχώρηση ώστε να μην υπάρχουν εκπλήξεις στην άφιξη.',
        ],
      },
    ],
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'shortTermRentalManagement', title: 'Διαχείριση βραχυχρόνιας μίσθωσης' },
        { key: 'maintenance', title: 'Συντήρηση' },
        { key: 'hospitality', title: "L'Incanto Apartments" },
        { key: 'ownerReporting', title: 'Αναφορές ιδιοκτήτη' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}

export const ownerReporting: Localized<PageContent> = {
  en: {
    metaTitle: 'Owner Reporting for Managed Properties | SM Holdings',
    metaDescription:
      'What SM Holdings owners receive: monthly statements for holiday lets and annual statements for long-term lets, with bookings, income, platform commissions, costs, occupancy, inspection photos and items that need a decision.',
    breadcrumb: 'Owner Reporting',
    h1: 'Owner Reporting: What You Receive and When',
    intro:
      'Handing a property to a manager only works if you can see what is happening to it. Every managed property comes with a written statement on a fixed schedule, and the underlying documents — invoices, inspection photos, platform payouts — are available whenever you want them.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'What a statement contains',
        bullets: [
          'Bookings or tenancy for the period: dates, nights, guests or tenant',
          'Gross income, platform commissions and net income to you',
          'Costs: cleaning, maintenance, materials, utilities paid on your behalf, with invoices',
          'Our management fee, calculated as agreed',
          'Occupancy for the period and the season to date',
          'Inspection notes and photos',
          'Items that need a decision from you: repairs above the threshold, pricing changes, calendar blocks',
        ],
      },
      {
        heading: 'Schedule',
        tone: 'gray',
        facts: [
          { label: 'Holiday lets', value: 'Monthly during the season, plus a season summary in October' },
          { label: 'Long-term lets', value: 'Annual statement for your tax return; monthly on request' },
          { label: 'Payouts', value: 'Net income transferred to your account with the statement' },
          { label: 'Documents', value: 'Invoices, contracts, registry declarations and photos kept on file and sent on request' },
        ],
      },
      {
        heading: 'Why we report this way',
        paragraphs: [
          'Owners who live away from the property should never have to ask how it is doing. A clear statement also makes your accountant\'s work straightforward at tax time, and it is the record that shows whether the property is earning what we said it would when we took it on.',
        ],
      },
    ],
    related: {
      title: 'Related pages',
      links: [
        { key: 'propertyManagement', title: 'Property management overview' },
        { key: 'insightOwnerReporting', title: 'What an owner report should contain' },
        { key: 'insightFeesGreece', title: 'How property management fees work in Greece' },
      ],
    },
    closing: { ...COMMON.closingOwner.en, primary: 'owner', secondary: 'call' },
  },
  el: {
    metaTitle: 'Αναφορές Ιδιοκτήτη για Ακίνητα υπό Διαχείριση | SM Holdings',
    metaDescription:
      'Τι λαμβάνουν οι ιδιοκτήτες της SM Holdings: μηνιαίες καταστάσεις για καταλύματα διακοπών και ετήσιες για μακροχρόνιες μισθώσεις, με κρατήσεις, έσοδα, προμήθειες πλατφορμών, έξοδα, πληρότητα, φωτογραφίες επιθεώρησης και θέματα προς απόφαση.',
    breadcrumb: 'Αναφορές Ιδιοκτήτη',
    h1: 'Αναφορές Ιδιοκτήτη: Τι Λαμβάνετε και Πότε',
    intro:
      'Η ανάθεση ενός ακινήτου σε διαχειριστή δουλεύει μόνο αν μπορείτε να βλέπετε τι του συμβαίνει. Κάθε ακίνητο υπό διαχείριση συνοδεύεται από γραπτή κατάσταση σε σταθερό πρόγραμμα, και τα υποκείμενα έγγραφα — τιμολόγια, φωτογραφίες επιθεώρησης, εκκαθαρίσεις πλατφορμών — είναι διαθέσιμα όποτε τα ζητήσετε.',
    heroCta: { primary: 'owner', secondary: 'call' },
    sections: [
      {
        heading: 'Τι περιέχει μια κατάσταση',
        bullets: [
          'Κρατήσεις ή μίσθωση της περιόδου: ημερομηνίες, διανυκτερεύσεις, επισκέπτες ή ενοικιαστής',
          'Μικτά έσοδα, προμήθειες πλατφορμών και καθαρό ποσό προς εσάς',
          'Έξοδα: καθαριότητα, συντήρηση, υλικά, λογαριασμοί που πληρώθηκαν για λογαριασμό σας, με τιμολόγια',
          'Η αμοιβή διαχείρισης, υπολογισμένη όπως συμφωνήθηκε',
          'Πληρότητα περιόδου και σεζόν μέχρι σήμερα',
          'Σημειώσεις και φωτογραφίες επιθεώρησης',
          'Θέματα που χρειάζονται απόφασή σας: επισκευές πάνω από το όριο, αλλαγές τιμών, μπλοκαρίσματα ημερολογίου',
        ],
      },
      {
        heading: 'Πρόγραμμα',
        tone: 'gray',
        facts: [
          { label: 'Καταλύματα διακοπών', value: 'Μηνιαία κατά τη σεζόν, συν σύνοψη σεζόν τον Οκτώβριο' },
          { label: 'Μακροχρόνιες μισθώσεις', value: 'Ετήσια κατάσταση για τη φορολογική δήλωση· μηνιαία κατόπιν αιτήματος' },
          { label: 'Αποδόσεις', value: 'Το καθαρό ποσό μεταφέρεται στον λογαριασμό σας μαζί με την κατάσταση' },
          { label: 'Έγγραφα', value: 'Τιμολόγια, συμβόλαια, δηλώσεις μητρώου και φωτογραφίες τηρούνται σε αρχείο και αποστέλλονται κατόπιν αιτήματος' },
        ],
      },
      {
        heading: 'Γιατί αναφέρουμε έτσι',
        paragraphs: [
          'Ιδιοκτήτες που μένουν μακριά από το ακίνητο δεν θα έπρεπε ποτέ να χρειάζεται να ρωτούν πώς πάει. Μια καθαρή κατάσταση κάνει επίσης απλή τη δουλειά του λογιστή σας στη φορολογική περίοδο, και είναι το αρχείο που δείχνει αν το ακίνητο αποδίδει όσα είπαμε όταν το αναλάβαμε.',
        ],
      },
    ],
    related: {
      title: 'Σχετικές σελίδες',
      links: [
        { key: 'propertyManagement', title: 'Διαχείριση ακινήτων — επισκόπηση' },
        { key: 'insightOwnerReporting', title: 'Τι πρέπει να περιέχει μια αναφορά ιδιοκτήτη' },
        { key: 'insightFeesGreece', title: 'Πώς λειτουργούν οι αμοιβές διαχείρισης ακινήτων στην Ελλάδα' },
      ],
    },
    closing: { ...COMMON.closingOwner.el, primary: 'owner', secondary: 'call' },
  },
}
