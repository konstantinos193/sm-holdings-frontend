interface FAQSchemaProps {
  lang: 'en' | 'el'
}

export function FAQSchema({ lang }: FAQSchemaProps) {
  const faqs = lang === 'el' ? [
    {
      question: 'Τι είδους ακίνητα προσφέρει η SMH Properties;',
      answer: 'Η SMH Properties προσφέρει διαμερίσματα, σπίτια, βίλες και άλλα ακίνητα προς ενοικίαση σε όλη την Ελλάδα, τόσο για μακροχρόνιες όσο και για βραχυχρόνιες μισθώσεις.'
    },
    {
      question: 'Πώς μπορώ να ενοικιάσω ένα ακίνητο μέσω της SMH Properties;',
      answer: 'Μπορείτε να περιηγηθείτε στις καταχωρήσεις μας, να χρησιμοποιήσετε τα φίλτρα αναζήτησης για να βρείτε το ιδανικό ακίνητο, και να υποβάλετε αίτημα ενοικίασης απευθείας μέσω της πλατφόρμας μας.'
    },
    {
      question: 'Προσφέρετε υπηρεσίες διαχείρισης ακινήτων;',
      answer: 'Ναι, η SMH Properties παρέχει επαγγελματικές υπηρεσίες διαχείρισης ακινήτων για ιδιοκτήτες που επιθυμούν να ενοικιάσουν τα ακίνητά τους μακροχρόνια ή βραχυχρόνια.'
    }
  ] : [
    {
      question: 'What types of properties does SMH Properties offer?',
      answer: 'SMH Properties offers apartments, houses, villas and other properties for rent across Greece, both for long-term and short-term rentals.'
    },
    {
      question: 'How can I rent a property through SMH Properties?',
      answer: 'You can browse our listings, use search filters to find your ideal property, and submit a rental inquiry directly through our platform.'
    },
    {
      question: 'Do you offer property management services?',
      answer: 'Yes, SMH Properties provides professional property management services for owners who want to rent their properties long-term or short-term.'
    }
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
