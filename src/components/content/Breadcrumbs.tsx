import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { absoluteUrl } from '@/lib/seo/routes'

export type Crumb = { name: string; href: string }

/** Visible breadcrumb trail + BreadcrumbList JSON-LD (Search Console reports these as valid). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <BreadcrumbSchema items={items.map((c) => ({ name: c.name, url: absoluteUrl(c.href) }))} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((c, i) => {
            const last = i === items.length - 1
            return (
              <li key={c.href} className="flex items-center gap-1">
                {last ? (
                  <span className="text-gray-700" aria-current="page">{c.name}</span>
                ) : (
                  <Link href={c.href} className="hover:text-gray-900 underline-offset-2 hover:underline">{c.name}</Link>
                )}
                {!last && <span aria-hidden className="text-gray-300">/</span>}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
