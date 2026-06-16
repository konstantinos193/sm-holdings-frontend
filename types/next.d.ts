// Type declarations for Next.js metadata types
declare module 'next' {
  export interface Metadata {
    title?: string | {
      default?: string
      template?: string
    }
    description?: string
    keywords?: string[]
    authors?: Array<{
      name?: string
      url?: string
    }>
    creator?: string
    publisher?: string
    formatDetection?: {
      email?: boolean
      address?: boolean
      telephone?: boolean
    }
    metadataBase?: URL
    alternates?: {
      canonical?: string
      languages?: Record<string, string>
    }
    openGraph?: {
      type?: string
      locale?: string
      alternateLocale?: string[]
      url?: string
      siteName?: string
      title?: string
      description?: string
      images?: Array<{
        url?: string
        secureUrl?: string
        type?: string
        width?: number
        height?: number
        alt?: string
      }>
    }
    twitter?: {
      card?: 'summary' | 'summary_large_image'
      site?: string
      creator?: string
      title?: string
      description?: string
      images?: string[]
    }
    robots?: {
      index?: boolean
      follow?: boolean
      nocache?: boolean
      googleBot?: {
        index?: boolean
        follow?: boolean
        noimageindex?: boolean
        'max-video-preview'?: number | string
        'max-image-preview'?: 'large' | 'standard' | 'none'
        'max-snippet'?: number | string
      }
    }
    icons?: {
      icon?: string | Array<{
        url: string
        sizes?: string
        type?: string
      }>
      shortcut?: string
      apple?: string | Array<{
        url: string
        sizes?: string
        type?: string
      }>
    }
    verification?: {
      google?: string
      yandex?: string
      yahoo?: string
      bing?: string
    }
    category?: string
    classification?: string
  }

  export namespace MetadataRoute {
    interface Robots {
      rules?: Array<{
        userAgent?: string
        allow?: string[]
        disallow?: string[]
        crawlDelay?: number
      }>
      sitemap?: string
      host?: string
    }

    interface Sitemap {
      url: string
      lastModified?: string | Date
      changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
      priority?: number
      alternates?: {
        languages?: Record<string, string>
      }
    }

    interface Manifest {
      name?: string
      short_name?: string
      description?: string
      start_url?: string
      display?: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser'
      background_color?: string
      theme_color?: string
      orientation?: 'any' | 'natural' | 'landscape' | 'portrait' | 'primary' | 'secondary' | 'tertiary'
      icons?: Array<{
        src: string
        sizes?: string
        type?: string
        purpose?: string
      }>
    }
  }

  export interface Viewport {
    width?: string
    height?: string
    initialScale?: number
    minimumScale?: number
    maximumScale?: number
    userScalable?: boolean
    themeColor?: string
    colorScheme?: 'light' | 'dark' | 'normal'
  }
}
