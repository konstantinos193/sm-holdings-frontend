'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useMemo } from 'react'
import en from '@/messages/en.json'
import el from '@/messages/el.json'

type Messages = typeof en

// Both dictionaries are bundled statically so that `t()` resolves synchronously
// during server rendering. The previous async `useEffect` loader returned the raw
// key on the server (and on the first client paint), which leaked strings like
// `footer.links.aboutUs` / `servicesOverview.title` into the HTML Googlebot indexes.
const messagesByLang: Record<'en' | 'el', Messages> = { en, el: el as unknown as Messages }

// Hardcoded fallbacks for critical translations
const fallbacks: Record<string, Record<string, string>> = {
  'features.subtitle': {
    en: 'Reliable services with modern technology',
    el: 'Αξιόπιστες υπηρεσίες με σύγχρονη τεχνολογία',
  },
  'features.title': {
    en: 'Why Choose Us?',
    el: 'Γιατί να μας επιλέξετε;',
  },
}

export const useTranslation = () => {
  const { language } = useLanguage()

  const t = useMemo(() => {
    const messages = messagesByLang[language] ?? messagesByLang.en

    return (key: string, params?: Record<string, string | number>) => {
      const keys = key.split('.')
      let value: any = messages

      for (const k of keys) {
        value = value?.[k]
        if (value === undefined) {
          if (fallbacks[key] && fallbacks[key][language]) {
            return fallbacks[key][language]
          }
          return key
        }
      }

      // Replace params if provided
      if (params && typeof value === 'string') {
        return Object.entries(params).reduce(
          (str, [paramKey, paramValue]) =>
            str.replace(`{${paramKey}}`, String(paramValue)),
          value
        )
      }

      return value || (fallbacks[key] && fallbacks[key][language]) || key
    }
  }, [language])

  return t
}
