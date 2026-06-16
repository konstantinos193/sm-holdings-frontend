'use client'

import { useEffect, useState } from 'react'

interface MobileOptimizationProps {
  children: React.ReactNode
}

export function MobileOptimization({ children }: MobileOptimizationProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setViewportHeight(window.innerHeight)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('orientationchange', checkMobile)

    // Fix viewport height issues on mobile browsers
    const handleViewportChange = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    handleViewportChange()
    window.addEventListener('resize', handleViewportChange)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
      window.removeEventListener('resize', handleViewportChange)
    }
  }, [])

  // Add touch-friendly enhancements
  useEffect(() => {
    if (isMobile) {
      // Add touch feedback to clickable elements
      const style = document.createElement('style')
      style.textContent = `
        @media (max-width: 768px) {
          button, a, input, textarea, select {
            min-height: 44px;
            min-width: 44px;
          }
          
          .clickable {
            position: relative;
          }
          
          .clickable::after {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
          }
          
          /* Prevent double-tap zoom on inputs */
          input, textarea, select {
            font-size: 16px !important;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Better touch targets */
          .touch-target {
            padding: 12px;
            margin: 4px;
          }
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [isMobile])

  return <>{children}</>
}
