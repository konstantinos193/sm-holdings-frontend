# smholdings.gr — SEO runbook

Companion to the September 2026 audit. Everything the audit asked for that lives
in code is implemented in this repo; this file tracks the parts that live
outside it (Google, directories, reviews) and the checks to keep running.

## Source of truth for business data

`src/lib/seo/business.ts`. Verified 2026-09-21 against ΓΕΜΗ 185169449000 and the
Google Business Profile "SM HOLDINGS GR". Change it there and nowhere else.

| Field | Value |
|---|---|
| Legal name | S. M. HOLDINGS Ε.Ε. |
| Trading names | SM Holdings · SMH Real Estate |
| Address | A. Panagouli 2, Filippiada 48200, Preveza |
| Phone / mobile | +30 2683 022 484 / +30 698 413 2555 |
| Email | smholdings.gr@gmail.com |
| Hours | Tuesday & Thursday 09:00–13:00 |
| Founded | 12 June 2025 · founders Stefanos Maleskos, Monika Ritsi |

Anything on a third-party listing that differs from this table is a NAP
mismatch and should be corrected to match.

## Google Business Profile (owner action)

- [ ] Rename to include both brands, e.g. **"SM Holdings – SMH Real Estate"**
      (brand searches are split between `sm holdings`, `smh real estate`, `smh realty`).
- [ ] Primary category: Property management company (already set). Add
      secondary "Vacation home rental agency" only if Google offers it for the
      listing; do not add "Real estate agency" — the company is not a licensed brokerage.
- [ ] Website link: `https://smholdings.gr/en` for the EN profile language; add
      the Greek site link in the Greek profile language settings.
- [ ] Add real photos: the L'Incanto exterior/garden set (already in
      `public/images/`), the office front, the founders.
- [ ] Services: copy the six items from the "What is included" cards on
      `/en/property-management`.
- [ ] Description: use the About page's first paragraph.
- [ ] Ask for reviews after real milestones (onboarding, first season, a
      resolved repair, an L'Incanto stay). Never manufacture reviews.
- [ ] Reply to every review.

## Other citations (keep NAP identical)

- [ ] Bing Places for Business
- [ ] Apple Business Connect
- [ ] Facebook page "SM Holdings | Filippiáda" — set address, hours, website, phone
- [ ] Preveza Chamber of Commerce member listing (reg. no. 12598)
- [ ] vrisko.gr / xo.gr business listing
- [ ] Link from lincanto.gr ("By SM Holdings") to `/en/hospitality/lincanto-apartments`
      and to `/en/property-management` — both sites are ours, so this is the one
      backlink we control.

## Search Console

- [ ] Resubmit `https://smholdings.gr/sitemap.xml` after deploy.
- [ ] Request indexing for: `/en`, `/el`, `/en/property-management`,
      `/el/diaxeirisi-akiniton`, `/en/locations/preveza`, `/el/perioxes/preveza`,
      `/en/hospitality/lincanto-apartments`, `/en/contact`, `/el/epikoinonia`.
- [ ] Add a Bing Webmaster Tools property (imports from Search Console).
- [ ] Watch the Pages report for: Crawled – currently not indexed; Duplicate
      without user-selected canonical; Alternate page with proper canonical;
      soft 404; parameter URLs (`/properties?…` should be excluded by robots).
- [ ] Track query groups separately:
  - Brand: `sm holdings`, `smh real estate`, `smh realty`, `smh estate`, `sm holdings preveza`
  - Property management: `property management preveza`, `short term rental management preveza`,
    `διαχείριση ακινήτων πρέβεζα`, `διαχείριση airbnb πρέβεζα`
  - Real estate: `real estate preveza`, `ακίνητα πρέβεζα`, `ενοικιάσεις ακινήτων πρέβεζα`
  - Hospitality: `lincanto`, `lincanto apartments`, `sm holdings lincanto`

## Checks to keep running

```bash
pnpm seo:check          # static guard — also runs automatically before every build
pnpm seo:check:live     # crawl the live sitemap after each deploy
```

The live check fails on: non-200 pages, missing/doubled title, ≠1 `<h1>`,
non-self-referencing canonical, missing hreflang, leaked translation keys,
placeholder strings, client "Loading…" shells, missing JSON-LD, sitemap
`lastmod` set to "now".

## Measurement (monthly)

- Non-brand clicks and impressions (Search Console, query group above)
- Indexed canonical pages vs sitemap count
- Enquiry-form submissions by type (backend email subjects: "Property management
  request", "Property owner — advice", "Looking to rent", "Looking to buy",
  "Investment guidance", "General enquiry")
- Calls from organic (Business Profile insights)
- Core Web Vitals field data (Search Console → Experience)

## What not to add

- City pages for places we do not operate in (Athens, Thessaloniki, islands).
- Generic articles ("Top 10 reasons…"). Every insight must come from operating
  L'Incanto or a managed property.
- Any metric, review or team member that is not real.

## Operational commitments written into the site (confirm internally)

The service pages state specific commitments. Keep them true or change the copy:

- Holiday lets inspected after every changeover; long-term lets quarterly;
  empty properties monthly in winter
- Same-day response to leaks / power failures / lock-outs during the season
- Owner statements monthly in season (holiday lets), annual (long-term), net
  income transferred with the statement
- Written proposal with fees and an owner-chosen spending threshold before signing
- Fee model: % of collected income (holiday lets), fixed monthly fee (long-term),
  costs at cost, one-off tenant placement fee
