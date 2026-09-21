# Architect Portfolio

A bilingual (Thai/English) architecture portfolio built with Next.js, TypeScript, Tailwind CSS, and next-intl. All content currently ships as realistic placeholders — replace it with your own before publishing.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/th` or `/en` based on your browser language. Switch languages with the `th / en` toggle in the header.

## Adding your own content

### 1. Site info (name, bio, contact)

Edit `content/site.ts`. Every text field is bilingual: `{ th: "...", en: "..." }`. This covers the studio/personal name, tagline, hero statement, about copy, education, experience, and contact details (email, phone, social links).

### 2. Projects

Edit `content/projects.ts`. Each project is an object matching the `Project` type:

```ts
{
  slug: "project-slug",              // used in the URL: /projects/project-slug
  title: { th: "...", en: "..." },
  category: "residential",           // "residential" | "commercial" | "urban" | "interior"
  year: 2024,
  location: "...",
  role: { th: "...", en: "..." },
  summary: { th: "...", en: "..." },      // shown on cards
  description: { th: "...", en: "..." },  // shown on the project's detail page
  featured: true,                    // shows on the homepage
}
```

Add, remove, or reorder entries freely — the projects list page, category filter, and detail pages are all generated from this file.

To add a new project category (beyond residential/commercial/urban/interior), add it to the `ProjectCategory` type and the `categoryLabels` map at the top of `content/projects.ts`.

### 3. Real photos

Every project currently renders a `PlaceholderImage` (a labeled gradient block) instead of a real photo, so the site works before you have final images.

To swap in real photos:
1. Add your images under `public/images/<project-slug>/` (e.g. `public/images/quiet-house/01.jpg`).
2. In `components/ProjectCard.tsx` and `app/[locale]/projects/[slug]/page.tsx`, replace the `<PlaceholderImage ... />` usage with Next's `<Image>` component, e.g.:
   ```tsx
   import Image from "next/image";

   <Image
     src={`/images/${project.slug}/01.jpg`}
     alt={project.title[locale]}
     width={1200}
     height={800}
     className="aspect-[4/3] w-full object-cover"
   />
   ```
3. You can then delete `components/PlaceholderImage.tsx` once every usage is replaced.

### 4. UI text (navigation, labels, buttons)

Fixed interface strings (nav labels, "View all projects", form labels, etc.) live in `messages/en.json` and `messages/th.json`. Edit both files to keep translations in sync.

## Project structure

```
app/[locale]/          # routes, one tree shared by /th and /en via next-intl
components/            # Header, Footer, ProjectCard, ProjectGrid, etc.
content/               # site.ts (bio/contact) and projects.ts (project data)
messages/              # en.json / th.json — fixed UI strings
i18n/                  # next-intl routing + request config
proxy.ts               # locale detection/redirect (Next.js 16's renamed middleware)
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click Deploy.
4. Once live, add a custom domain under the project's Settings → Domains.

Alternatively, deploy from the CLI:

```bash
npx vercel
```

## Build & lint

```bash
npm run build   # production build + type check
npm run lint    # eslint
```
