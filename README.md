# Imago Dei 2.0

A bilingual conference website for an event exploring the intersection of AI, ethics, and theology.

## Overview

Imago Dei 2.0 is a modern, responsive website built for a conference examining artificial intelligence through ethical and theological lenses. The site supports both Romanian (default) and English languages.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Internationalization:** next-intl

## Getting Started

```bash
cd imagodei-website
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Commands

All commands run from `imagodei-website/`:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run test     # Run tests in watch mode
npm run test:run # Run tests once
npm start        # Start production server
```

## Project Structure

```
imagodei-website/src/
├── app/[locale]/          # Locale-based routing (ro, en)
├── components/
│   ├── shell/             # AppShell, MainNav, MobileNav, LanguageSwitcher
│   └── sections/          # Page sections (hero, speakers, venue, etc.)
├── messages/              # Translation JSON files (en.json, ro.json)
├── types/                 # TypeScript interfaces
└── i18n/                  # Locale config, routing, request handling
```

## Documentation

Supporting documentation for the design and implementation:

- `design-system/` — Color palette, typography, design tokens
- `data-model/` — TypeScript entity definitions and sample data
- `sections/` — Section specifications and test instructions
- `instructions/` — Implementation guides and milestones
