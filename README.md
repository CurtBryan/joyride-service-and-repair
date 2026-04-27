# Joyride Service & Repair

This repository now contains a Next.js App Router app configured with Tailwind CSS v4 and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

## SEO configuration

The site uses `https://www.joyrideazsports.com` as its canonical production URL by default.

Optional environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.joyrideazsports.com
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
YANDEX_SITE_VERIFICATION=
PINTEREST_SITE_VERIFICATION=
FACEBOOK_DOMAIN_VERIFICATION=
```

Next.js App Router SEO assets included in this project:

- global metadata in `app/layout.tsx`
- `app/manifest.ts`
- `app/robots.ts`
- `app/sitemap.ts`
- generated Open Graph and Twitter images
- JSON-LD structured data on the homepage

## Included UI setup

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui with the `button` and `card` components
