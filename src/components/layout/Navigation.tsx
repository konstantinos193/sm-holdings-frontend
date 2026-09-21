'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useTranslation } from '@/lib/hooks/useTranslation'
import { localePath, type PageKey } from '@/lib/seo/routes'

interface NavigationProps {
  className?: string
}

// Commercial pathways first (audit: explicit owner / seeker / investor routes).
export const NAV_ITEMS: { key: PageKey; labelKey: string }[] = [
  { key: 'propertyManagement', labelKey: 'navigation.propertyManagement' },
  { key: 'realEstate', labelKey: 'navigation.realEstate' },
  { key: 'owners', labelKey: 'navigation.owners' },
  { key: 'properties', labelKey: 'navigation.properties' },
  { key: 'insights', labelKey: 'navigation.insights' },
  { key: 'contact', labelKey: 'navigation.contact' },
]

export const Navigation = ({ className = '' }: NavigationProps) => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = useTranslation()

  const linkClass = (isActive: boolean) =>
    clsx(
      'relative px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap',
      'focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-black',
      isActive ? 'text-white' : 'text-gray-400 hover:text-accent-gold'
    )

  return (
    <nav className={clsx('flex items-center justify-center space-x-1', className)} aria-label="Main">
      {NAV_ITEMS.map((item) => {
        const href = localePath(language, item.key)
        const isActive = pathname === href || (href !== `/${language}` && (pathname?.startsWith(`${href}/`) ?? false))
        return (
          <Link key={item.key} href={href} className={linkClass(isActive)} aria-current={isActive ? 'page' : undefined}>
            {t(item.labelKey)}
            {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold rounded-full" />}
          </Link>
        )
      })}
    </nav>
  )
}
