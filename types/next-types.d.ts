declare module 'next/types.js' {
  export interface ResolvingMetadata {
    icons?: Promise<import('next').Icons>;
    title?: Promise<import('next').Title>;
    description?: Promise<string>;
    keywords?: Promise<string[]>;
    authors?: Promise<import('next').Author[]>;
    openGraph?: Promise<import('next').OpenGraph>;
    twitter?: Promise<import('next').Twitter>;
    viewport?: Promise<import('next').Viewport>;
    robots?: Promise<import('next').Robots>;
    alternates?: Promise<import('next').Alternates>;
    metadataBase?: Promise<URL>;
    applicationName?: Promise<string>;
    category?: Promise<string>;
    classification?: Promise<string>;
    referrer?: Promise<string>;
    colorScheme?: Promise<'light' | 'dark' | 'normal'>;
    creator?: Promise<string>;
    publisher?: Promise<string>;
    formatDetection?: Promise<import('next').FormatDetection>;
    verification?: Promise<Record<string, string>>;
    other?: Promise<Record<string, any>>;
  }

  export interface ResolvingViewport {
    width?: Promise<string | number>;
    height?: Promise<string | number>;
    initialScale?: Promise<number>;
    minimumScale?: Promise<number>;
    maximumScale?: Promise<number>;
    viewportFit?: Promise<'auto' | 'contain' | 'cover'>;
    themeColor?: Promise<string | import('next').ColorScheme>;
    colorScheme?: Promise<'light' | 'dark' | 'normal'>;
  }
}
