'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useTranslation } from '@/lib/hooks/useTranslation'
import { localePath } from '@/lib/seo/routes'
import { BUSINESS } from '@/lib/seo/business'

export const FooterCopyright = () => {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = useTranslation()

  return (
    <div className="site-footer-copyright flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-center md:text-left">
        © {currentYear} {BUSINESS.legalName} ({BUSINESS.name}). {t('footer.allRightsReserved')}
        {' '}
        <span className="text-gray-500">
          · {t('footer.websiteBy')}{' '}
          <a href="https://adinfinity.gr/" target="_blank" rel="noopener noreferrer">adinfinity</a>
        </span>
      </p>
      <div className="flex items-center gap-6">
        <Link href={localePath(language, 'terms')}>{t('footer.links.termsOfService')}</Link>
        <Link href={localePath(language, 'privacy')}>{t('footer.links.privacyPolicy')}</Link>
      </div>
    </div>
  )
}
