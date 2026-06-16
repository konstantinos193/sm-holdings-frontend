'use client'

import { useEffect, useState } from 'react'
import { reportWebVitals, getWebVitalsScore } from '@/lib/web-vitals'

interface WebVitalMetric {
  name: string
  value: number
  id: string
  score: 'good' | 'needs-improvement' | 'poor'
}

export function WebVitalsReport() {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Only show in development
      setIsVisible(true)
      
      const handleMetric = (metric: any) => {
        const score = getWebVitalsScore(metric)
        setMetrics(prev => {
          const existing = prev.findIndex(m => m.name === metric.name)
          if (existing >= 0) {
            const updated = [...prev]
            updated[existing] = { ...metric, score }
            return updated
          }
          return [...prev, { ...metric, score }]
        })
      }

      // Override the sendToAnalytics function to capture metrics
      const originalReportWebVitals = reportWebVitals
      const customReport = () => {
        if (typeof window !== 'undefined') {
          import('web-vitals').then((webVitals) => {
            // Use available functions in web-vitals 5.3.0
            if (webVitals.onCLS) webVitals.onCLS(handleMetric)
            if (webVitals.onINP) webVitals.onINP(handleMetric)
            if (webVitals.onFCP) webVitals.onFCP(handleMetric)
            if (webVitals.onLCP) webVitals.onLCP(handleMetric)
            if (webVitals.onTTFB) webVitals.onTTFB(handleMetric)
          }).catch((error) => {
            console.warn('Failed to load web-vitals:', error)
          })
        }
      }
      
      customReport()
    }
  }, [])

  if (!isVisible || process.env.NODE_ENV === 'production') {
    return null
  }

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-600'
      case 'needs-improvement': return 'text-yellow-600'
      case 'poor': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const formatValue = (name: string, value: number) => {
    switch (name) {
      case 'CLS': return value.toFixed(3)
      case 'FID':
      case 'FCP':
      case 'LCP':
      case 'TTFB': return `${Math.round(value)}ms`
      default: return value.toString()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="font-semibold text-sm mb-2">Core Web Vitals</h3>
      <div className="space-y-1">
        {metrics.map((metric) => (
          <div key={metric.id} className="flex justify-between items-center text-xs">
            <span className="font-medium">{metric.name}</span>
            <div className="flex items-center gap-2">
              <span className={getScoreColor(metric.score)}>
                {formatValue(metric.name, metric.value)}
              </span>
              <span className={`w-2 h-2 rounded-full ${
                metric.score === 'good' ? 'bg-green-500' :
                metric.score === 'needs-improvement' ? 'bg-yellow-500' :
                'bg-red-500'
              }`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t text-xs text-gray-500">
        Development only
      </div>
    </div>
  )
}
