import Image from 'next/image'
import type { ReactNode } from 'react'

type HeroShellProps = {
  headline: string
  tagline: string
  children: ReactNode
}

/**
 * Server-rendered hero frame: background layers, the page <h1> and the intro
 * paragraph are all in the initial HTML. Only the interactive search form / stats
 * (children) are client-rendered.
 */
export const HeroShell = ({ headline, tagline, children }: HeroShellProps) => {
  return (
    <section className="relative bg-white min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-8">
      {/* Background image */}
      <div className="absolute inset-0 hero-bg-image" aria-hidden />
      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          <Image
            src="/logoetc.png"
            alt="SMH Real Estate"
            width={800}
            height={320}
            className="w-full h-full object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
      <div className="absolute inset-0 hero-bg-pattern" />
      <div className="absolute inset-0 pointer-events-none hero-radial-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full pt-6 pb-10 md:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center w-full">
          <div className="w-full max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 md:mb-4">
              {headline}
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {tagline}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
