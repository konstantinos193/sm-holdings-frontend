'use client'

import Link from 'next/link'
import { FooterContact } from './FooterContact'
import { FooterSocial } from './FooterSocial'
import { FooterLinks } from './FooterLinks'
import { FooterCopyright } from './FooterCopyright'
import { useTranslation } from '@/lib/hooks/useTranslation'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { localePath, type PageKey } from '@/lib/seo/routes'
import { BUSINESS } from '@/lib/seo/business'

type Col = { titleKey: string; links: { key: PageKey; labelKey: string }[] }

// Internal-linking plan: every money page reachable from every page.
const COLUMNS: Col[] = [
  {
    titleKey: 'footer.sections.services',
    links: [
      { key: 'propertyManagement', labelKey: 'footer.links.propertyManagement' },
      { key: 'shortTermRentalManagement', labelKey: 'footer.links.shortTerm' },
      { key: 'longTermPropertyManagement', labelKey: 'footer.links.longTerm' },
      { key: 'maintenance', labelKey: 'footer.links.maintenance' },
      { key: 'ownerReporting', labelKey: 'footer.links.ownerReporting' },
      { key: 'services', labelKey: 'footer.links.allServices' },
    ],
  },
  {
    titleKey: 'footer.sections.realEstate',
    links: [
      { key: 'properties', labelKey: 'footer.links.properties' },
      { key: 'realEstate', labelKey: 'footer.links.realEstate' },
      { key: 'propertyValuation', labelKey: 'footer.links.valuation' },
      { key: 'investment', labelKey: 'footer.links.investmentConsulting' },
      { key: 'preveza', labelKey: 'footer.links.preveza' },
      { key: 'hospitality', labelKey: 'footer.links.lincanto' },
    ],
  },
  {
    titleKey: 'footer.sections.company',
    links: [
      { key: 'owners', labelKey: 'footer.links.owners' },
      { key: 'about', labelKey: 'footer.links.aboutUs' },
      { key: 'team', labelKey: 'footer.links.ourTeam' },
      { key: 'insights', labelKey: 'footer.links.insights' },
      { key: 'careers', labelKey: 'footer.links.careers' },
      { key: 'contact', labelKey: 'footer.links.contact' },
    ],
  },
]

export const Footer = () => {
  const t = useTranslation()
  const { language } = useLanguage()
  const isEl = language === 'el'

  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-1">
            <FooterLinks />
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">
              {BUSINESS.legalName}
              <br />
              ΓΕΜΗ {BUSINESS.gemiNumber} · {isEl ? 'ΑΦΜ' : 'VAT'} {BUSINESS.vatID}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.titleKey}>
              <h3 className="text-white font-semibold text-lg mb-6">{t(col.titleKey)}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.key}>
                    <Link href={localePath(language, l.key)} className="text-gray-400 hover:text-accent-blue transition-colors duration-200 text-sm">
                      {t(l.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <FooterContact />
            <div className="mt-8">
              <FooterSocial />
            </div>
          </div>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  )
}
