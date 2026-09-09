# Portfolio Site — Implementation Plan & Current State

This documents what was actually built for the AnalogJS portfolio site, based on the
`public/Portfolio.png` mockup, plus the fixes discovered along the way. Written so it can be
reviewed outside the chat session.

## Stack

Angular 22 + Vite 8 + Tailwind CSS 4 + `@analogjs/content`, fully static (`ssr: false, static: true`
in `vite.config.ts` — no server, every route is prerendered to static HTML at build time).

## Content model

Projects are markdown files with frontmatter, rendered generically by one route — not hardcoded
data, not one page per project.

- **Location: `src/content/project-entries/*.md`** (not `src/content/projects/` — see "Gotcha 2"
  below for why).
- Frontmatter schema (`src/app/models/project.ts`):
  ```ts
  export interface ProjectAttributes {
    title: string;
    client: string;
    summary: string;
    role: string;
    tags: string[];
    coverImage?: string;   // empty string today → renders a solid #D5C8D2 placeholder block
    gallery?: string[];
    order: number;         // sort key for the home page card list
  }
  ```
- The filename is the slug (`move-a-head.md` → `/projects/move-a-head`), derived automatically by
  `@analogjs/content` — `slug` is not a frontmatter field.
- Four placeholder files exist today: `move-a-head.md`, `brucloud.md`, `checkin-at-work.md`,
  `project-4.md` (the last one uses obviously-placeholder title/client — it was a mislabeled 4th
  card in the mockup, rename it when real content is ready).
- Markdown body is a `## Problem` / `## Process` / `## Outcome` placeholder case-study structure.

## Routing

- **`src/app/pages/index.page.ts`** — home page. Loads all projects with
  `injectContentFiles<ProjectAttributes>()` filtered to `/content/project-entries/`, sorted by
  `attributes.order`, rendered via `<app-project-card>`.
- **`src/app/pages/about.page.ts`** — extended bio (placeholder) + hardcoded skills/tools list.
  No contact/social section, no photo (by design).
- **`src/app/pages/projects/[slug].page.ts`** — generic project detail route. Uses
  `injectContent<ProjectAttributes>({ param: 'slug', subdirectory: 'project-entries' })` for hero
  (title/role/tags/cover) + `<analog-markdown>` for the case-study body + a gallery grid when
  `attributes.gallery` is non-empty. No external-links section (by design).
- **Nav "Projects" link** is a plain `<a href="/#projects">` (same-page anchor scroll on `/`,
  cross-page nav + native scroll-to-id elsewhere). "About" is a real `routerLink="/about"`.

## Prerendering config (`vite.config.ts`)

```ts
analog({
  ssr: false,
  static: true,
  content: {
    highlighter: 'prism',
  },
  prerender: {
    routes: [
      '/',
      '/about',
      {
        contentDir: 'src/content/project-entries',
        transform: (file) => `/projects/${file.name}`,
      },
    ],
  },
})
```

## Design system

- **Fonts** (self-hosted via `@fontsource`, wired in `src/styles.css`):
  Playfair Display (`font-serif`, headings), Comfortaa (`font-nav`, wordmark/nav), Nunito
  (`font-sans`, body).
- **Palette** (Tailwind v4 `@theme` tokens in `src/styles.css`, no `tailwind.config.js`):
  - `--color-bg: #F9FAFF` (page background)
  - `--color-accent: #833F73` (purple accent / blobs)
  - `--color-card: #D5C8D2` (project card banner / placeholder cover blocks)
  - `--color-line: #AC92A6` (underline accents)
  - `--color-ink: #25282B` (body text)
- **`provideContent(withMarkdownRenderer())`** is registered in `app.config.ts` — required, or
  `<analog-markdown>` renders raw unrendered markdown text instead of HTML.

## Components (`src/app/components/`)

- **`header.ts`** — wordmark + nav. Rendered *inside* `hero.ts` (see below), and standalone on
  `/about` and project detail pages.
- **`hero.ts`** — renders `<app-header>` as its first child, then the hero text, with the hero
  blob absolutely positioned behind both — this is what lets the blob bleed up behind the nav bar,
  matching the mockup. (On `/about` and project pages, which don't have a hero, `<app-header>` is
  used standalone instead.)
- **`blob.ts`** — renders the two real Figma-exported SVGs from `public/` as plain `<img>` tags:
  `/Blob.svg` for the hero shape, `/Footer-blob.svg` for the footer wave. See "Gotcha 3" below for
  a scaling fix that was needed on the footer file itself.
- **`project-card.ts`** — rounded card, `bg-card` placeholder banner (or a real `coverImage` once
  set), title/summary/"View Project" pill link to `/projects/<slug>`.
- **`footer.ts`** — full-width wave image sized via `aspect-[1440/316]` (the SVG's native ratio)
  so it scales without cropping or squishing.

## Gotchas found during implementation (not in the original design doc)

1. **`content: { highlighter: 'prism' }` is required** in the `analog()` plugin options — without
   it, AnalogJS silently skips the markdown-to-JS transform for `.md` files and the production
   build fails trying to parse frontmatter as JavaScript.
2. **AnalogJS auto-generates a page route for every file under `src/content/`**, and a literal
   route (e.g. `/projects/move-a-head`) always wins over a custom dynamic route
   (`/projects/:slug`) at the same path. This shadowed our styled detail page with the framework's
   bare default markdown renderer. Fixed by moving content files to
   `src/content/project-entries/` — a directory name that doesn't collide with the `/projects/*`
   URL prefix our own page owns.
3. **`object-fit` on an `<img src="*.svg">` doesn't fully control internal SVG scaling** — the
   outer CSS box gets sized correctly, but the SVG's own `preserveAspectRatio` (default
   `xMidYMid meet`) independently letterboxes its content *inside* that box. Fixed by adding
   `preserveAspectRatio="none"` directly to the root `<svg>` in `public/Footer-blob.svg`.
4. **An empty `src/content/projects/vandevennebart.md`** (not part of this build) still exists in
   the repo — harmless (excluded from the site since it's not under `project-entries/`), but worth
   deleting if it's not needed.
5. **A stray Angular-CLI-generated `src/app/components/project-card/` directory** (with its own
   `.html`/`.css`/`.spec.ts`/`.ts` files) also exists alongside the real
   `src/app/components/project-card.ts` used by the app. It isn't imported anywhere — safe to
   delete if unneeded.

## Open decision

`footer.ts` currently overlays a live `Gitte Vandevenne {{ currentYear }}` text on top of
`Footer-blob.svg`, which already has "Gitte Vandevenne 2026" baked into it as vector paths. Today
both say "2026" so it looks fine, but the two will visibly disagree starting in 2027. Pick one:
- Drop the live text overlay and rely solely on the image (year stays fixed at 2026 until the SVG
  file is re-exported), or
- Keep the live text and remove/re-export the SVG without its baked-in text.

## Verification performed

- `npm run dev` + Playwright screenshots of `/`, `/about`, and a project detail page, compared
  against the mockup.
- `npm run build` — confirmed a prerendered `index.html` exists for `/`, `/about`, and all four
  `/projects/<slug>` routes.
- Checked browser console for runtime errors on all three page types.
