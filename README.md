# Atul Yadav — Portfolio

A single-page portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Editorial design: cream paper palette, Fraunces display serif, terracotta accent, scroll-reveal
animations, and a sticky scrollspy nav.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

> The build fetches Fraunces & Inter via `next/font/google`, so the build machine needs internet
> access to `fonts.googleapis.com` / `fonts.gstatic.com` (standard for any Next.js project).

## Edit your content

**Everything you'd want to change lives in one file:** [`data/content.ts`](./data/content.ts).
It's fully typed, so your editor will guide you. You can update:

- `profile` — name, role, tagline, location, links, the "open to opportunities" badge (`openToWork`)
- `stats`, `about` — the About section
- `education` — school, CGPA, coursework chips
- `jobs` — the experience timeline (set `current: true` on the active role)
- `projects` — case studies, including each `diagram` (rows of nodes; use `hl: true` to highlight,
  and `"→"`, `"↓"`, `"·"` as connectors)
- `sideProjects` — GitHub repos
- `skillGroups`, `languages`, `achievements`, `competitiveProfiles`

You won't need to touch the components for normal content edits.

### Swap the photo

Replace `public/atul.jpg` with your headshot (keep the same filename, or update
`profile.photo` in `data/content.ts`).

## Project structure

```
app/
  layout.tsx       fonts + metadata
  page.tsx         composes all sections
  globals.css      design tokens + component classes
components/         one file per section (Nav, Hero, About, …) + Reveal, Diagram
lib/useScrollSpy   active-section tracking for the nav
data/content.ts    ← all site content
public/atul.jpg    headshot
```

## Design tokens

Defined in `tailwind.config.ts` (colors, fonts) and `app/globals.css` (CSS variables).
Palette: `paper #F4EFE7`, `ink #1C1A17`, `rust #BE4A2B`, `green #3F8F5B`.

## Deploy

Easiest is **Vercel**:

1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com/new — framework auto-detected as Next.js.
3. Deploy. Add a custom domain in the Vercel dashboard if you have one.

## Accessibility & polish

- Responsive down to mobile (nav collapses to a menu button)
- Visible keyboard focus rings
- `prefers-reduced-motion` respected (reveals and the badge pulse disable)
