# Milestone 6: Venue

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-5 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)

**What you need to build:**
- Integration of the Venue component
- Venue photo hosting
- Get Directions button wiring

---

## Goal

Implement the Venue section — full-bleed showcase of Palatul Episcopal Romano Catolic.

## Overview

A full-screen photo background showcasing the historic venue:
- Architectural photo dominates
- Content in lower third
- Location badge with map pin
- Get Directions button

**Key Functionality:**
- Full-bleed background photo
- Gradient overlays for text readability
- Get Directions opens Google Maps

## Recommended Approach: Test-Driven Development

See `product-plan/sections/venue/tests.md` for test-writing instructions.

## What to Implement

### Component

Copy from `product-plan/sections/venue/components/`:

- `VenueShowcase.tsx` — Complete section

### Data Layer

```typescript
interface VenueProps {
  venue: Venue
  onGetDirections?: () => void
}
```

### Callbacks

| Callback | Implementation |
|----------|----------------|
| `onGetDirections` | Open Google Maps URL in new tab |

### Venue Photo

You'll need to source and host the venue interior photo. The sample data references `/images/venue/episcopal-palace-interior.jpg`.

Reference: https://sanctusladislaus.ro/ro/palatul-episcopal/

## Files to Reference

- `product-plan/sections/venue/README.md`
- `product-plan/sections/venue/tests.md`
- `product-plan/sections/venue/components/`
- `product-plan/sections/venue/types.ts`
- `product-plan/sections/venue/sample-data.json`

## Expected User Flows

### Flow 1: View Venue

1. User scrolls to venue section
2. User sees full-bleed photo of the palace interior
3. User sees location badge, venue name, description
4. **Outcome:** Venue information is clear and visually impactful

### Flow 2: Get Directions

1. User clicks "Obține Indicații" button
2. **Outcome:** Google Maps opens in new tab with venue location

## Done When

- [ ] Tests written and passing
- [ ] Full-bleed photo displays
- [ ] Gradient overlays ensure text readability
- [ ] Location badge shows city and country
- [ ] Venue name displays prominently
- [ ] Get Directions opens Google Maps
- [ ] Works on mobile (content still readable)
