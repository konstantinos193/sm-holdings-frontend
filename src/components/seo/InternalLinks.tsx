import Link from 'next/link'

interface InternalLinksProps {
  currentPath: string
  lang: 'en' | 'el'
}

export function InternalLinks({ currentPath, lang }: InternalLinksProps) {
  const isEl = lang === 'el'
  
  const relatedLinks = [
    {
      href: `/${lang}/locations`,
      title: isEl ? 'Ακίνητα ανά Τοποθεσία' : 'Properties by Location',
      description: isEl ? 'Εξερευνήστε ακίνητα σε Αθήνα, Θεσσαλονίκη, Μύκονο' : 'Explore properties in Athens, Thessaloniki, Mykonos'
    },
    {
      href: `/${lang}/property-types`,
      title: isEl ? 'Τύποι Ακινήτων' : 'Property Types',
      description: isEl ? 'Διαμερίσματα, βίλες, σπίτια, και άλλα' : 'Apartments, villas, houses, and more'
    },
    {
      href: `/${lang}/properties`,
      title: isEl ? 'Όλα τα Ακίνητα' : 'All Properties',
      description: isEl ? 'Πλήρης κατάλογος διαθέσιμων ακινήτων' : 'Complete list of available properties'
    },
    {
      href: `/${lang}/incanto`,
      title: 'Incanto',
      description: isEl ? 'Αποκλειστική πολυτελής βίλα' : 'Exclusive luxury villa'
    }
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {isEl ? 'Σχετικές Σελίδες' : 'Related Pages'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <h4 className="font-medium text-gray-900 mb-1">{link.title}</h4>
            <p className="text-sm text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
