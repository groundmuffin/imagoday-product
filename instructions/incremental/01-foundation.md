# Milestone 1: Foundation

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Project setup and configuration
- Design tokens integration
- Data model types
- Routing structure
- Application shell integration
- Bilingual support (Romanian/English)

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- The components are props-based and ready to integrate — focus on the infrastructure

---

## Goal

Set up the foundational elements: design tokens, data model types, routing structure, and application shell.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

**Key tokens:**
- Primary: `sky` (buttons, links, accents)
- Secondary: `cyan` (highlights)
- Neutral: `zinc` (backgrounds, text, borders)
- Headings: Space Grotesk
- Body: Inter

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

**Core entities:**
- Speaker
- Session / Day
- Partner
- Venue
- Objective
- Contact

### 3. Routing Structure

Create routes for a single-page marketing site with section anchors:

- `/` — Home page with all sections
- `#speakers` — Speakers section
- `#program` — Program section
- `#venue` — Venue section
- `#partners` — Partners section
- `#contact` — Contact section

Consider:
- Smooth scrolling to anchors
- URL hash updates as user scrolls
- Language parameter (e.g., `?lang=ro` or `/en/`)

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper with scroll detection
- `MainNav.tsx` — Desktop navigation header
- `MobileNav.tsx` — Mobile menu overlay
- `LanguageSwitcher.tsx` — RO/EN toggle

**Wire Up Navigation:**

```tsx
const navigationItems = [
  { label: 'Speakers', href: '#speakers' },
  { label: 'Program', href: '#program' },
  { label: 'Venue', href: '#venue' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

<AppShell
  navigationItems={navigationItems}
  registerUrl="https://register.imagodei20.org"
  registerLabel="Înregistrare"
  logoText="Imago Dei"
  currentLanguage={language}
  onLanguageChange={setLanguage}
  onNavigate={(href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }}
>
  {/* Page sections */}
</AppShell>
```

### 5. Bilingual Support

Implement Romanian/English translations:

- Romanian is the primary language
- English for international visitors
- Consider using a translation library (react-i18next, next-intl) or simple JSON files
- All text content is provided in the sample data files

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/data-model/` — Type definitions
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components

## Dependencies

The shell components use:
- `lucide-react` — for icons (Menu, X)
- React 18+ with hooks

## Done When

- [ ] Design tokens are configured (colors, fonts)
- [ ] Google Fonts are loading (Space Grotesk, Inter)
- [ ] Data model types are defined
- [ ] Routes exist with anchor navigation
- [ ] Shell renders with navigation
- [ ] Navigation smooth-scrolls to sections
- [ ] Language toggle switches between RO/EN
- [ ] Responsive on mobile (hamburger menu works)
- [ ] Register button links to external URL
