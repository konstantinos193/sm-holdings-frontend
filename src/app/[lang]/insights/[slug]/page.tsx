import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentPage } from '@/components/content/ContentPage'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { ARTICLES, ARTICLE_KEYS, type ArticleKey } from '@/content/insights'
import { contentPageProps } from '@/lib/content-page'
import { BUSINESS } from '@/lib/seo/business'
import { OG_IMAGE, pageMetadata } from '@/lib/seo/metadata'
import { PAGE_ROUTES, absoluteUrl, localePath, toLocale } from '@/lib/seo/routes'

type Props = { params: Promise<{ lang: string; slug: string }> }

// The internal route is always the English slug (Greek URLs are rewritten to
// it in next.config.js), so lookup is by the `en` path.
function articleKeyFromSlug(slug: string): ArticleKey | null {
  const path = `insights/${slug}`
  return ARTICLE_KEYS.find((k) => PAGE_ROUTES[k].en === path) ?? null
}

export function generateStaticParams() {
  return ARTICLE_KEYS.map((k) => ({ slug: PAGE_ROUTES[k].en.replace(/^insights\//, '') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const key = articleKeyFromSlug(slug)
  if (!key) return { title: 'Not found', robots: { index: false, follow: false } }
  const a = ARTICLES[key][toLocale(lang)]
  return pageMetadata({
    lang,
    key,
    title: a.metaTitle,
    description: a.metaDescription,
    type: 'article',
    publishedTime: a.datePublished,
    modifiedTime: a.dateModified,
  })
}

export default async function ArticlePage({ params }: Props) {
  const { lang, slug } = await params
  const key = articleKeyFromSlug(slug)
  if (!key) notFound()
  const locale = toLocale(lang)
  const a = ARTICLES[key][locale]
  const url = absoluteUrl(localePath(locale, key))
  const props = contentPageProps(locale, key, ARTICLES[key], { parents: ['insights'] })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    headline: a.h1,
    description: a.metaDescription,
    inLanguage: locale === 'el' ? 'el-GR' : 'en-US',
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    image: OG_IMAGE,
    author: { '@id': BUSINESS.id },
    publisher: { '@id': BUSINESS.id },
  }

  return (
    <ContentPage
      {...props}
      schema={
        <>
          <OrganizationSchema lang={locale} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        </>
      }
    />
  )
}
