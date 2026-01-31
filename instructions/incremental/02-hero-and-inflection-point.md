# Milestone 2: Hero & Inflection Point

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Integration of the Hero & Inflection Point component
- Background image loading
- CTA button wiring
- Content from data source (static or CMS)

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing
- **DO** replace sample data with your content source

---

## Goal

Implement the Hero & Inflection Point section — the landing hero with conference identity, CTAs, about statement, and manifesto.

## Overview

The opening section creates the first impression with:
- Conference branding (Imago Dei 2.0, Inflection Point tagline)
- Dramatic Sistine Chapel background (Creation of Adam)
- Date and location
- Register and View Program CTAs
- About statement with highlighted keywords
- Philosophical manifesto in two columns

**Key Functionality:**
- Display conference identity with staggered entrance animations
- Load and display background image with graceful fallback
- Register button opens external URL in new tab
- View Program button scrolls to #program section
- About section highlights key terms in cyan
- Manifesto renders with styled text ({{Imago Dei}} syntax)

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/hero-and-inflection-point/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Component

Copy the component from `product-plan/sections/hero-and-inflection-point/components/`:

- `HeroAndInflectionPoint.tsx` — Complete section

### Data Layer

The component expects these data shapes:

```typescript
interface HeroAndInflectionPointProps {
  conference: Conference  // Name, tagline, dates, location
  hero: Hero              // Background, CTAs
  about: About            // Text with highlights
  manifesto: Manifesto    // Two-column content
  onRegisterClick?: () => void
  onViewProgramClick?: () => void
}
```

You'll need to:
- Provide the data from your content source (JSON, CMS, etc.)
- Handle translations (Romanian/English)

### Callbacks

Wire up these user actions:

| Callback | Implementation |
|----------|----------------|
| `onRegisterClick` | Optional tracking, then external URL opens |
| `onViewProgramClick` | Scroll to #program section |

### Background Image

The Sistine Chapel image URL is in `hero.backgroundImageUrl`. Consider:
- Hosting the image yourself for reliability
- Optimizing the image (WebP, responsive sizes)
- The component handles loading state and fallback

## Files to Reference

- `product-plan/sections/hero-and-inflection-point/README.md` — Feature overview
- `product-plan/sections/hero-and-inflection-point/tests.md` — Test-writing instructions
- `product-plan/sections/hero-and-inflection-point/components/` — React component
- `product-plan/sections/hero-and-inflection-point/types.ts` — TypeScript interfaces
- `product-plan/sections/hero-and-inflection-point/sample-data.json` — Test data
- `product/sections/hero-and-inflection-point/*.png` — Visual references

## Expected User Flows

### Flow 1: View Conference Information

1. User lands on the page
2. User sees entrance animations reveal content
3. **Outcome:** Conference identity, dates, location are visible

### Flow 2: Register for Conference

1. User clicks "Înregistrare" button
2. **Outcome:** External registration page opens in new tab

### Flow 3: View Program

1. User clicks "Vezi Programul" button
2. **Outcome:** Page smooth-scrolls to Program section

### Flow 4: Discover More Content

1. User sees scroll indicator "Descoperă"
2. User scrolls down
3. **Outcome:** About statement and manifesto become visible

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Hero section renders with background image
- [ ] Conference identity displays correctly
- [ ] CTAs work (register opens external, view program scrolls)
- [ ] About statement shows highlighted terms
- [ ] Manifesto renders in two columns
- [ ] Animations play on load
- [ ] Responsive on mobile
- [ ] Image has fallback gradient if it fails to load
