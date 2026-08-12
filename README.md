# ywow-ai Portfolio (Astro)

Portfolio rebuild dari [ywow-ai.vercel.app](https://ywow-ai.vercel.app/) — Astro 7 + Tailwind CSS v4.

## Fitur

- **Parallax geometris** — X, kotak, segitiga, lingkaran (purple · indigo · pink)
- **Light / dark mode** — toggle via `data-theme` on `<html>`
- **Scroll reveal** — fade/slide dengan utility Tailwind
- **Glass cards** — hover lift + shadow
- **Nav scroll spy** — highlight section aktif

## Stack

- Astro 7 + `@tailwindcss/vite` (Tailwind v4)
- Styling: **utility Tailwind only** — `global.css` hanya `@import "tailwindcss"`
- Shared class strings: `src/lib/tw.ts`

## Menjalankan

```bash
bun install
bun dev
```

## Build

```bash
bun build
bun preview
```

## Struktur

```
src/
├── components/     # Hero, About, Skills, Portfolio, dll.
├── data/site.ts    # Semua konten & data
├── lib/tw.ts       # Tailwind utility strings
├── layouts/        # Layout + SEO
├── pages/          # index.astro
└── styles/         # global.css (Tailwind import only)
public/image/       # Avatar + assets
```
