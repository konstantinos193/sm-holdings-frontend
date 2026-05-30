<p align="center">
  <img src="https://smholdings.gr/logoetc.png" alt="SM Holdings" width="300" />
</p>

<h1 align="center">SM Holdings — Frontend</h1>

<p align="center">
  <strong>The frontend that promises a seamless user experience, and occasionally delivers.</strong>
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg" />
  <img alt="Node" src="https://img.shields.io/badge/node-18%2B-green.svg" />
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black.svg" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-blue.svg" />
  <img alt="React" src="https://img.shields.io/badge/React-19-cyan.svg" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-black.svg" />
</p>

---

## Overview

Frontend for the SM Holdings real estate platform. Property listings, bookings, multilingual support, maps, payments, and a hotel sub-brand that earned its own section.

Built with Next.js because we needed server-side rendering, client-side rendering, and static generation — and apparently the existential crisis of choosing between them on every page was part of the deal.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js | 16.1.6 | Does everything, whether you asked it to or not |
| **Language** | TypeScript | 5.9.3 | Pretending JavaScript has types |
| **UI Library** | React | 19.2.4 | Re-rendering the DOM so you do not have to |
| **Styling** | Tailwind CSS | 4.1.18 | Writing CSS without writing CSS |
| **State** | Zustand | 5.0.11 | Global state for people who survived Redux |
| **Validation** | Zod | 4.3.6 | Trust issues, but make it client-side |
| **i18n** | next-intl | 4.8.2 | The same bugs, now in two languages |
| **Maps** | Leaflet | 1.9.4 | Showing users where their money went |
| **Payments** | Stripe.js | 8.7.0 | Taking money from people, visually |
| **ORM** | Prisma | 7.3.0 | For when the frontend also needs database opinions |
| **CSS Utilities** | clsx | 2.1.1 | Conditional classnames, because ternaries in JSX are a war crime |

---

## Features

- **Property Listings** — Browse properties with filters. The photos are always better than reality. Always.
- **Booking System** — Calendar integration, date picking, conflict handling. Everything except the conflict between the designer and the developer.
- **Multilingual Support** — Greek and English. Bugs available in both.
- **Responsive Design** — Looks great on desktop, tablet, and mobile. Questionable on that one Samsung from 2019.
- **User Authentication** — Login, register, profile. The full identity crisis.
- **Interactive Maps** — So users can see exactly how far the property is from the nearest coffee shop.
- **Payments** — Stripe checkout. The part where the UI has to look trustworthy enough for a credit card number.
- **Dashboard** — Numbers, charts, bookings. A control panel for the illusion of control.
- **Incanto Hotel** — Dedicated section for the hotel sub-brand. Boutique, like the hotel.

---

## Getting Started

### Prerequisites

- **Node.js 18+** — If you are on Node 14, this README cannot help you. Nobody can.
- **yarn** — Pick one package manager. Commit to it. Do not switch mid-project.
- A running backend API and the will to live (only one is strictly required).

### Installation

```bash
git clone <repository-url>
cd sm-holdings-frontend

yarn install

cp .env.example .env.local
# Fill in .env.local — if you commit secrets to git, that is on you.
```

### Running

```bash
yarn dev       # Development server
yarn build     # Production build
yarn start     # Production server
```

Available at `http://localhost:3000`. If it is not, something else is squatting on that port. It usually is.

---

## Scripts

| Command | What it does |
|---|---|
| `yarn dev` | Dev server with Turbo. Your most-used command. |
| `yarn build` | Production build. Prays nothing breaks. |
| `yarn start` | Starts the production server. |
| `yarn lint` | ESLint. It will find problems you did not know you had. |
| `yarn type-check` | TypeScript without emitting. Pure judgement. |
| `yarn db:generate` | Regenerates the Prisma client. Again. |
| `yarn db:push` | Pushes schema to the database. No turning back. |
| `yarn db:migrate` | Runs migrations. Hope you tested locally first. |
| `yarn db:studio` | Prisma Studio. A GUI for your data. Revolutionary. |

---

## Project Structure

```
src/
  app/
    [lang]/           # Internationalized routes (Greek + English)
      about/
      admin/          # God mode, but with a nicer UI
      auth/
      bookings/
      careers/
      contact/
      dashboard/
      incanto/        # Hotel sub-brand
      properties/     # The reason this app exists
      results/
      services/
      settings/
      profile/

  components/
    auth/
    booking/
    editions/         # Dynamic content, CMS-adjacent
    forms/
    icons/
    incanto/
    layout/           # Header, Footer, Navigation
    properties/
    results/
    sections/
    ui/               # Buttons, cards, modals

  lib/
    api/              # HTTP client — 11 files of requests and hope
    contexts/
    hooks/
    i18n/
    store/            # Zustand — global state, minimal drama
    utils/
    mockData.ts       # 42KB of beautiful lies for development

  messages/           # Translation files — every string, twice
  types/
```

---

## Environment Variables

See `.env.example`. If that file does not exist, someone has made a grave mistake.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API. If this is wrong, everything is wrong. |
| `DATABASE_URL` | Treat it like a nuclear launch code. |
| `NODE_ENV` | `production` or `development`. There is no "works on my machine". |

---

## Deployment

Deployed on **Render**.

1. Create a Web Service, connect the repo.
2. Build command: `yarn build` — Start command: `yarn start`
3. Add all environment variables.
4. Deploy, check logs, fix the thing you forgot, redeploy.

---

## Contributing

1. Fork, create a branch, write code that works.
2. Check it on mobile. Actually check.
3. Open a PR, address feedback, merge.
4. Discover it broke something else.

---

## License

MIT. Do whatever you want with it. We are not responsible for the consequences.

---

<p align="center"><sub>Built with coffee and existential dread by the SM Holdings engineering team.</sub></p>

<p align="center">Created by <a href="https://adinfinity.gr/">adinfinity</a></p>
