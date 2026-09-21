'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useTranslation } from '@/lib/hooks/useTranslation'
import { localePath } from '@/lib/seo/routes'
import { NAV_ITEMS } from './Navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = useTranslation()
  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={clsx(
          'lg:hidden fixed bottom-0 left-0 right-0 z-[70] bg-black border-t border-gray-800 rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-y-0' : 'translate-y-full'
        )}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing" onClick={onClose}>
          <div className="w-12 h-1 bg-gray-700 rounded-full" />
        </div>

        <div className="px-4 pt-2 pb-6 space-y-1 max-h-[calc(90vh-60px)] overflow-y-auto overscroll-contain">
          {/* Home */}
          <Link
            href={localePath(language, 'home')}
            onClick={onClose}
            className={clsx(
              'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98]',
              pathname === `/${language}` || pathname === `/${language}/`
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 active:bg-gray-900 active:text-white'
            )}
          >
            {t('navigation.home')}
          </Link>

          {[...NAV_ITEMS, { key: 'about' as const, labelKey: 'navigation.about' }].map((item) => {
            const href = localePath(language, item.key)
            const isActive = pathname === href || (pathname?.startsWith(`${href}/`) ?? false)
            return (
              <Link
                key={item.key}
                href={href}
                onClick={onClose}
                className={clsx(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98]',
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-300 active:bg-gray-900 active:text-white'
                )}
              >
                {t(item.labelKey)}
              </Link>
            )
          })}

          {/* Incanto Hotel link */}
          <a
            href="https://lincanto.gr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium bg-gray-900/90 border border-gray-600 text-white hover:bg-gray-800 hover:border-accent-gold hover:text-accent-gold transition-all duration-200 active:scale-[0.98] shadow-lg"
          >
            <Image
              src="/incanto-logo.png"
              alt="L'Incanto Apartments"
              width={22}
              height={22}
              className="rounded-sm object-contain"
              unoptimized
            />
            L&apos;Incanto Apartments
          </a>

          <div className="pt-4 mt-2 border-t border-gray-800">
            {/* Mobile menu footer content can go here if needed */}
          </div>
        </div>
      </div>
    </>
  )
}
