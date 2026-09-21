'use client'

import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { apiClient } from '@/lib/api/client'
import { BUSINESS } from '@/lib/seo/business'

export type EnquiryType = 'owner' | 'rent' | 'buy' | 'management' | 'investment' | 'other'

const TYPES: { value: EnquiryType; en: string; el: string }[] = [
  { value: 'management', en: 'I need property management', el: 'Χρειάζομαι διαχείριση ακινήτου' },
  { value: 'owner', en: 'I own a property and want advice', el: 'Έχω ακίνητο και θέλω συμβουλή' },
  { value: 'rent', en: 'I am looking to rent', el: 'Ψάχνω να νοικιάσω' },
  { value: 'buy', en: 'I am looking to buy', el: 'Ψάχνω να αγοράσω' },
  { value: 'investment', en: 'I want investment guidance', el: 'Θέλω επενδυτική καθοδήγηση' },
  { value: 'other', en: 'Other', el: 'Άλλο' },
]

const T = {
  en: {
    name: 'Full name', email: 'Email', phone: 'Phone (optional)', type: 'What is this about?', location: 'Property location (optional)', locationPh: 'e.g. Chroneika, Preveza', message: 'Message', messagePh: 'Tell us about the property or what you are looking for.',
    submit: 'Send message', sending: 'Sending…',
    success: 'Thank you — your message has been sent. We reply by email or phone.',
    error: 'The message could not be sent. Please email us directly or call.',
    privacy: 'We use your details only to reply to this enquiry.',
  },
  el: {
    name: 'Ονοματεπώνυμο', email: 'Email', phone: 'Τηλέφωνο (προαιρετικό)', type: 'Τι αφορά;', location: 'Τοποθεσία ακινήτου (προαιρετικό)', locationPh: 'π.χ. Χρονέικα, Πρέβεζα', message: 'Μήνυμα', messagePh: 'Πείτε μας για το ακίνητο ή τι ψάχνετε.',
    submit: 'Αποστολή', sending: 'Αποστολή…',
    success: 'Ευχαριστούμε — το μήνυμά σας στάλθηκε. Απαντάμε με email ή τηλέφωνο.',
    error: 'Το μήνυμα δεν στάλθηκε. Στείλτε μας email απευθείας ή καλέστε.',
    privacy: 'Χρησιμοποιούμε τα στοιχεία σας μόνο για να απαντήσουμε σε αυτό το αίτημα.',
  },
}

const input = 'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue bg-white'

/**
 * Segmented enquiry form (audit: separate paths for owners and property
 * seekers). Posts to the backend contact endpoint, which emails the office.
 */
export function ContactForm({ lang }: { lang: 'en' | 'el' }) {
  const t = T[lang]
  const searchParams = useSearchParams()
  const preset = (searchParams?.get('type') ?? '') as EnquiryType
  const [type, setType] = useState<EnquiryType>(TYPES.some((x) => x.value === preset) ? preset : 'management')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    // Honeypot for bots
    if (data.website) return
    setStatus('sending')
    try {
      await apiClient.post('/inquiries/contact', {
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        subject: type,
        propertyLocation: data.location || undefined,
        message: data.message,
        lang,
      })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p role="status" className="rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-3">{t.success}</p>
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="cf-type" className="block text-sm font-medium text-gray-700 mb-2">{t.type}</label>
        <select id="cf-type" name="type" value={type} onChange={(e) => setType(e.target.value as EnquiryType)} className={input} required>
          {TYPES.map((o) => <option key={o.value} value={o.value}>{o[lang]}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
          <input id="cf-name" name="name" type="text" required minLength={2} autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+30" className={input} />
        </div>
        {(type === 'management' || type === 'owner' || type === 'investment') && (
          <div>
            <label htmlFor="cf-location" className="block text-sm font-medium text-gray-700 mb-2">{t.location}</label>
            <input id="cf-location" name="location" type="text" placeholder={t.locationPh} className={input} />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
        <textarea id="cf-message" name="message" rows={6} required minLength={10} placeholder={t.messagePh} className={input} />
      </div>
      <div className="hidden" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === 'error' && (
        <p role="alert" className="rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3">
          {t.error} <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> · <a className="underline" href={`tel:${BUSINESS.telephone}`}>+30 2683 022 484</a>
        </p>
      )}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-gray-500">{t.privacy}</p>
        <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 disabled:opacity-60 transition-colors">
          {status === 'sending' ? t.sending : t.submit}
        </button>
      </div>
    </form>
  )
}
