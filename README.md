# abhasbali — portfolio

Personal site of Abhas Bali, AI engineer at Havells CRI. Live at https://ai-portfolio-sage-seven.vercel.app

Designed as an engineering datasheet: numbered sheets, signal-path block diagrams for each
project, and a 16-pin IC pin-out for skills.

## Stack
Next.js 16 (App Router, static export of `/`), Tailwind CSS 4, framer-motion (diagram wiring only).
Type: Instrument Serif, IBM Plex Sans, IBM Plex Mono.

## Editing content
Everything on the page comes from `src/content/data.ts`. Update that file, not the components.
The résumé served at `/resume.pdf` lives in `public/`.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
