# abhasbali — portfolio

Personal site of Abhas Bali, AI engineer at Havells CRI. Live at https://ai-portfolio-sage-seven.vercel.app

Bold editorial layout: velocity-reactive tickers, scroll-scrubbed hero and manifesto, a pinned
horizontal builds rail, before/after counters and signal-path diagrams. All motion is tied to
scroll position, so it plays forward going down and rewinds going up; reduced-motion is respected.

## Stack
Next.js 16 (App Router, static `/`), Tailwind CSS 4, framer-motion.
Type: Big Shoulders (display), Geist (text), Geist Mono (labels).
Colour roles: sun = action/highlight, copper = data, mint = success, on paper/ink neutrals.

## Editing content
Everything on the page comes from `src/content/data.ts`. Update that file, not the components.
The résumé served at `/resume.pdf` lives in `public/`.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
