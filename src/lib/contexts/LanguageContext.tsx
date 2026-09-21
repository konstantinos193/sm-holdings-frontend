'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { translatePathname } from '@/lib/seo/routes'

type Language = 'en' | 'el'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({
  children,
  initialLanguage
}: {
  children: ReactNode
  initialLanguage?: Language
}) => {
  const router = useRouter()
  const pathname = usePathname()

  // Prioritize initialLanguage from URL over localStorage
  const getInitialLanguage = (): Language => {
    if (initialLanguage) {
      return initialLanguage
    }
    if (typeof window === 'undefined') return 'en'
    try {
      const savedLanguage = localStorage.getItem('language') as Language | null
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'el')) {
        return savedLanguage
      }
    } catch {
      /* storage unavailable */
    }
    return 'en'
  }

  const [language, setLanguageState] = useState<Language>(getInitialLanguage())

  useEffect(() => {
    if (initialLanguage) {
      setLanguageState(initialLanguage)
      try {
        localStorage.setItem('language', initialLanguage)
      } catch {
        /* storage unavailable */
      }
    }
  }, [initialLanguage])

  // Navigate to the equivalent page in the other language. Greek pages have
  // Greek slugs (routes.config.js), so the path is translated rather than
  // prefix-swapped, and it is a real navigation so server-rendered content
  // (titles, copy, hreflang) is re-rendered in the new language — the old
  // pushState approach only changed the URL and left the page in the old one.
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      /* storage unavailable */
    }
    if (typeof window !== 'undefined') {
      const current = pathname || window.location.pathname
      const target = translatePathname(current, lang) + window.location.search
      router.push(target)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
