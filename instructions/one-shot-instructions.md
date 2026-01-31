# Imago Dei 2.0 — Complete Implementation Instructions

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
- Content management (static or CMS)
- Bilingual support (Romanian/English)
- Integration of the provided UI components

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with your content source
- **DO** implement proper error handling and loading states
- The components are props-based and ready to integrate — focus on the infrastructure

---

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic** — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests based on the instructions
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

---

## Product Overview

A conference website for Imago Dei 2.0 — an international event bringing together technology, ethics, and theology to discuss AI, humanity, and moral responsibility. March 6-7, 2026 in Oradea, Romania.

### Sections (in order):
1. **Hero & Inflection Point** — Conference identity, CTAs, about statement, manifesto
2. **Objectives** — 5 numbered conference objectives
3. **Speakers** — Keynote speakers and facilitators
4. **Program** — Two-day schedule
5. **Venue** — Palatul Episcopal Romano Catolic
6. **Partners** — Partnership showcase
7. **Contact** — Closing quote and emails

### Data Model:
- Speaker, Session, Day, Partner, Venue, Objective, Contact
- See `product-plan/data-model/` for types and sample data

### Design System:
- Primary: `sky` | Secondary: `cyan` | Neutral: `zinc`
- Fonts: Space Grotesk (headings), Inter (body)
- See `product-plan/design-system/` for tokens

---

# Milestone 1: Foundation

## Goal
Set up design tokens, data model types, routing, and application shell.

## What to Implement

### 1. Design Tokens
- See `product-plan/design-system/tokens.css`
- See `product-plan/design-system/fonts.md` for Google Fonts

### 2. Data Model Types
- See `product-plan/data-model/types.ts`

### 3. Routing Structure
Single-page site with anchor navigation:
- `#speakers`, `#program`, `#venue`, `#partners`, `#contact`
- Smooth scrolling
- Language parameter for RO/EN

### 4. Application Shell
Copy from `product-plan/shell/components/`:
- `AppShell.tsx`, `MainNav.tsx`, `MobileNav.tsx`, `LanguageSwitcher.tsx`

Wire up:
```tsx
<AppShell
  navigationItems={[
    { label: 'Speakers', href: '#speakers' },
    { label: 'Program', href: '#program' },
    { label: 'Venue', href: '#venue' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ]}
  registerUrl="https://register.imagodei20.org"
  registerLabel="Înregistrare"
  logoText="Imago Dei"
  currentLanguage={language}
  onLanguageChange={setLanguage}
  onNavigate={(href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
>
```

## Done When
- [ ] Design tokens configured
- [ ] Google Fonts loading
- [ ] Data model types defined
- [ ] Routes with anchor navigation
- [ ] Shell renders with working navigation
- [ ] Language toggle works
- [ ] Responsive mobile menu

---

# Milestone 2: Hero & Inflection Point

## Goal
Conference identity hero with CTAs, about statement, and manifesto.

## Component
`product-plan/sections/hero-and-inflection-point/components/HeroAndInflectionPoint.tsx`

## Key Features
- Full viewport hero with Sistine Chapel background
- Staggered entrance animations
- Register opens external URL
- View Program scrolls to #program
- About section with cyan highlights
- Two-column manifesto

## Callbacks
- `onRegisterClick` → optional tracking
- `onViewProgramClick` → scroll to #program

## Done When
- [ ] Hero displays with background image
- [ ] CTAs work correctly
- [ ] About and manifesto render
- [ ] Responsive on mobile

---

# Milestone 3: Objectives

## Goal
5 numbered objectives in 3+2 grid layout.

## Components
- `Objectives.tsx`, `ObjectiveCard.tsx`

## Key Features
- 3+2 grid pattern
- Large gradient numbers
- Hover effects on cards

## Done When
- [ ] 5 objectives display
- [ ] Grid layout correct
- [ ] Hover effects work

---

# Milestone 4: Speakers

## Goal
Two-tier speaker showcase with expandable bios.

## Components
- `Speakers.tsx`, `SpeakerCard.tsx`

## Key Features
- Featured speakers (larger cards)
- Other speakers (grid)
- Click to expand/collapse bio
- Duotone photo effect

## Callbacks
- `onExpand`, `onCollapse` → analytics

## Done When
- [ ] Two-tier layout works
- [ ] Expand/collapse bios
- [ ] Keyboard accessible

---

# Milestone 5: Program

## Goal
Two-day schedule in side-by-side layout.

## Components
- `Program.tsx`, `DaySchedule.tsx`, `SessionCard.tsx`

## Key Features
- Side-by-side on desktop
- Stack on mobile
- Minimalist session bullets

## Done When
- [ ] Both days display
- [ ] Responsive layout
- [ ] Sessions listed

---

# Milestone 6: Venue

## Goal
Full-bleed venue showcase.

## Component
- `VenueShowcase.tsx`

## Key Features
- Full-bleed background photo
- Content in lower third
- Get Directions button

## Callbacks
- `onGetDirections` → open Google Maps

## Done When
- [ ] Photo displays full-bleed
- [ ] Text readable
- [ ] Get Directions works

---

# Milestone 7: Partners

## Goal
Partnership showcase with logos.

## Components
- `Partners.tsx`, `BenefitCard.tsx`, `PartnerLogo.tsx`

## Key Features
- Light background
- 4 benefit cards
- Target audience list
- Partner logos with links

## Done When
- [ ] Light background contrast
- [ ] Benefits display with icons
- [ ] Logos link to websites
- [ ] Light/dark mode works

---

# Milestone 8: Contact

## Goal
Closing quote and contact emails.

## Component
- `Contact.tsx`

## Key Features
- Inspirational quote
- Email links (mailto:)
- Contemplative design

## Callbacks
- `onEmailClick` → analytics

## Done When
- [ ] Quote displays
- [ ] Email links work
- [ ] Responsive

---

## Final Checklist

- [ ] All 8 milestones complete
- [ ] Smooth navigation between sections
- [ ] Language toggle switches all content
- [ ] External registration link works
- [ ] Mobile responsive throughout
- [ ] Performance optimized (images, fonts)
- [ ] Accessibility (keyboard nav, screen readers)
