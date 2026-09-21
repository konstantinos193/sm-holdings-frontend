import type { Metadata } from 'next'
import { ContentPage } from '@/components/content/ContentPage'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { contentMetadata, contentPageProps } from '@/lib/content-page'
import { absoluteUrl, localePath, toLocale, type PageKey } from '@/lib/seo/routes'
import type { Localized, PageContent } from '@/content/types'

type Params = { params: Promise<{ lang: string }> }

type Options = {
  parents?: PageKey[]
  /** Emit a schema.org Service entity for this page */
  service?: boolean
  noindex?: boolean
}

/**
 * Builds `generateMetadata` and the page component for a static content page.
 * Keeps every route file to a few lines and guarantees the SEO template is
 * identical across pages.
 */
export function createContentRoute(key: PageKey, content: Localized<PageContent>, options: Options = {}) {
  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { lang } = await params
    return contentMetadata(lang, key, content, { noindex: options.noindex })
  }

  async function Page({ params }: Params) {
    const { lang } = await params
    const locale = toLocale(lang)
    const c = content[locale]
    const props = contentPageProps(locale, key, content, { parents: options.parents })

    const schema = (
      <>
        <OrganizationSchema lang={locale} />
        {options.service && (
          <ServiceSchema
            lang={locale}
            url={absoluteUrl(localePath(locale, key))}
            name={c.breadcrumb}
            description={c.metaDescription}
            offers={c.sections.flatMap((s) => s.bullets ?? []).slice(0, 12)}
          />
        )}
      </>
    )

    return <ContentPage {...props} schema={schema} />
  }

  return { generateMetadata, Page }
}
