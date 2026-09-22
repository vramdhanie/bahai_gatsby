# Bahá’ís of Trinidad and Tobago

[![License: MIT](https://img.shields.io/github/license/vramdhanie/bahai_gatsby?color=green)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Hosting: Firebase](https://img.shields.io/badge/hosting-Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/docs/hosting)

The official website of the Bahá’ís of Trinidad and Tobago — a fully static
site built with Next.js (static export), TypeScript, and Tailwind CSS.
Originally a Gatsby 2 site (hence the repository name); migrated in 2026 with
the original design preserved.

Live at [bahaitt.com](https://bahaitt.com).

## How it works

There is no server and no database. `next build` writes the whole site to
`out/`, and Firebase Hosting serves it. Content lives in the repo:

- **Pages** are React components under `src/app/` (home, Bahá’u’lláh,
  ‘Abdu’l-Bahá, bicentenary, centenary, community, contact, legal).
- **Community-building activities** are MDX files in
  `src/content/activities/*/content.mdx`. Each file's frontmatter (title,
  slug, image, blurb, order) drives the cards on the home and community
  pages, and `src/app/[slug]/` renders one page per activity via
  `generateStaticParams`. Add an activity by adding a folder with a
  `content.mdx` and its `images/` (copied to `public/activities/`).
- **Styling** is `src/app/globals.css`: the design tokens, typography, and
  component classes carried over from the original site, with Tailwind
  available on top.
- The contact form posts to Formspree; analytics is a gtag snippet in
  `src/app/layout.tsx`.

## Local development

```bash
npm install
npm run dev
```

`npm run build` produces the static site in `out/` (serve it with any static
file server to test the production build).

## Deployment

Google Cloud Build deploys on push, mapping the branch to a Firebase Hosting
target of the same name (`cloudbuild.yaml` + `firebase.json`):

- `preview` → the preview site, for review
- `master` → [bahaitt.com](https://bahaitt.com)

The trigger supplies the substitutions `_NODE_VERSION` (must be ≥ 20 for
Next.js 16), `_TOKEN` (Firebase CI token), and `_SITE_ID`. The usual flow is
push to `preview`, check the preview site, then merge to `master`.
