'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/hooks/useTranslation'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { localePath } from '@/lib/seo/routes'

export const FooterLinks = () => {
  const t = useTranslation()
  const { language } = useLanguage()
  
  return (
    <div>
      {/* Logo */}
      <div className="mb-6">
        <Link href={localePath(language, 'home')} className="inline-block">
          <Image
            src="/logoetc.png"
            alt="SMH Real Estate"
            width={200}
            height={80}
            className="h-auto w-auto max-w-[180px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
            unoptimized
          />
        </Link>
      </div>
      
      {/* Company Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {language === 'el'
          ? 'Διαχείριση ακινήτων, ακίνητα και φιλοξενία στην Πρέβεζα. Έδρα Φιλιππιάδα· λειτουργούμε τα L\'Incanto Apartments στα Χρονέικα.'
          : "Property management, real estate and hospitality in Preveza. Based in Filippiada; operator of L'Incanto Apartments in Chroneika."}
      </p>
    </div>
  )
}
