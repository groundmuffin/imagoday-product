# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Imago Dei 2.0 is a bilingual (Romanian/English) conference website for an event on AI, ethics, and theology. The main application is in `imagodei-website/`.

## Commands

All commands run from `imagodei-website/`:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

### Tech Stack
- Next.js 16 with App Router
- React 19 with TypeScript 5 (strict mode)
- Tailwind CSS 4 with `@theme inline` syntax
- next-intl for i18n (Romanian default, English)

### Key Directories
```
imagodei-website/src/
├── app/[locale]/          # Locale-based routing (ro, en)
├── components/
│   ├── shell/             # AppShell, MainNav, MobileNav, LanguageSwitcher
│   └── sections/          # Page sections (hero-and-inflection-point, etc.)
├── messages/              # Translation JSON files (en.json, ro.json)
├── types/                 # TypeScript interfaces
└── i18n/                  # Locale config, routing, request handling
```

### Supporting Documentation
- `design-system/` — Color palette (sky, cyan, zinc), typography (Space Grotesk, Inter, JetBrains Mono)
- `data-model/` — TypeScript entity definitions and sample data
- `sections/` — Section specs and test instructions
- `instructions/incremental/` — Milestone-by-milestone build guides

## Development Patterns

### Internationalization
- Locales always prefixed (`/ro/`, `/en/`)
- Add translations to both `src/messages/en.json` and `src/messages/ro.json`
- Use `next-intl` hooks for translations

### Components
- Props-based, portable components
- `'use client'` directive for interactive components
- Server components for layouts and data fetching

### Styling
- Tailwind utilities with design tokens from `globals.css`
- Primary: `sky-400/500/600`, Secondary: `cyan-400/500`, Neutral: `zinc-*`
- Dark mode default

### Navigation
- Sections use anchor links (`#speakers`, `#program`, etc.) with smooth scroll
- Scroll-aware header (transparent → backdrop blur)

## Implementation Workflow

When implementing a new section:
1. Read `instructions/incremental/NN-{section-name}.md`
2. Check `sections/{section-id}/tests.md` for test specs
3. Reference types in `data-model/types.ts` and `src/types/index.ts`
4. Add translations to both message files
5. Run `npm run build` to verify
