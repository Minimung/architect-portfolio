# Architect Portfolio

A trilingual (Thai/English/Chinese) landscape architecture portfolio built with Next.js, TypeScript, Tailwind CSS, and next-intl. Content ships as a mix of real and placeholder entries — replace the placeholders with your own before publishing.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/th`, `/en`, or `/zh` based on your browser language. Switch languages with the `th / en / zh` toggle in the header.

## Adding your own content

### 1. Site info (name, bio, contact)

Edit `content/site.ts`. Every text field is trilingual: `{ th: "...", en: "...", zh: "..." }`. This covers the studio/personal name, tagline, hero statement, about copy, education, experience, and contact details (email, phone, social links).

### 2. Projects

Edit `content/projects.ts`. Each project is an object matching the `Project` type:

```ts
{
  slug: "project-slug",              // used in the URL: /projects/project-slug
  title: { th: "...", en: "...", zh: "..." },
  category: "landscape-intern",      // "landscape-intern" | "landscape-planning" | "urban-planning" | "construction-drawing"
  tags: ["architecture", "landscape", "projects"], // shown as a dot-separated line on cards
  coverImage: "/images/project-slug/cover.webp",   // optional — omit to show a placeholder
  gallery: ["/images/project-slug/02.webp", "/images/project-slug/03.webp"], // optional extra photos on the detail page
  year: 2024,
  location: { th: "...", en: "...", zh: "..." },
  role: { th: "...", en: "...", zh: "..." },
  summary: { th: "...", en: "...", zh: "..." },      // shown in the homepage hero (only used when featured: true)
  description: { th: "...", en: "...", zh: "..." },  // shown on the project's detail page
  featured: true,                    // shows in the homepage hero carousel
}
```

Add, remove, or reorder entries freely — the projects list page, category filter, hero carousel, and detail pages are all generated from this file. It's fine to leave `summary`/`description` as empty strings for projects you haven't written up yet, as long as `featured` is `false` (see note above about where `summary` is used).

To add a new project category, add it to the `ProjectCategory` type and the `categoryLabels` map at the top of `content/projects.ts` — also update the category list + colors in `components/CategoryGrid.tsx` and `components/ProjectGrid.tsx`.

### 3. Real photos

A project with no `coverImage` renders a `PlaceholderImage` (a labeled gradient block) instead, so the site works before you have final images. Once you have photos:

1. Add your images under `public/images/<project-slug>/` (e.g. `public/images/quiet-house/cover.webp`).
2. Set `coverImage: "/images/<project-slug>/cover.webp"` on that project — it now shows automatically in the hero, project cards, and the detail page's main image (handled by `components/ProjectImage.tsx`).
3. For the two extra photos at the bottom of the detail page, add a `gallery: [...]` array of image paths on that project — when present, real photos replace the "— 02" / "— 03" placeholders there too.

### 4. UI text (navigation, labels, buttons)

Fixed interface strings (nav labels, filter labels, form labels, etc.) live in `messages/en.json`, `messages/th.json`, and `messages/zh.json`. Edit all three to keep translations in sync.

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
