# Milestone 4: Speakers

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-3 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)

**What you need to build:**
- Integration of the Speakers component
- Speaker photo hosting
- Content from data source
- Expand/collapse bio functionality

---

## Goal

Implement the Speakers section — a two-tier showcase with featured keynote speakers and facilitators.

## Overview

Two-tier speaker showcase with:
- Featured keynote speakers (larger, prominent cards)
- Other speakers/facilitators (grid below)
- Expandable bios on click

**Key Functionality:**
- Split speakers by `featured` status
- Click cards to expand/collapse bios
- Duotone photo effect
- Smooth animations

## Recommended Approach: Test-Driven Development

See `product-plan/sections/speakers/tests.md` for test-writing instructions.

## What to Implement

### Components

Copy from `product-plan/sections/speakers/components/`:

- `Speakers.tsx` — Main section
- `SpeakerCard.tsx` — Individual speaker card

### Data Layer

```typescript
interface SpeakersProps {
  speakers: Speaker[]
  onExpand?: (id: string) => void
  onCollapse?: (id: string) => void
}
```

### Callbacks

| Callback | Description |
|----------|-------------|
| `onExpand` | Analytics tracking when bio is expanded |
| `onCollapse` | Analytics tracking when bio is collapsed |

### Speaker Photos

You'll need to host speaker photos. The sample data references paths like `/speakers/noreen-herzfeld.jpg`.

### Empty States

If speakers array is empty, show a graceful message or hide the section.

## Files to Reference

- `product-plan/sections/speakers/README.md`
- `product-plan/sections/speakers/tests.md`
- `product-plan/sections/speakers/components/`
- `product-plan/sections/speakers/types.ts`
- `product-plan/sections/speakers/sample-data.json`

## Expected User Flows

### Flow 1: View Speakers

1. User scrolls to speakers section
2. User sees featured keynotes at top
3. User sees other speakers in grid below
4. **Outcome:** All speakers visible with photos, names, titles

### Flow 2: Expand Bio

1. User clicks a speaker card
2. Card expands to reveal full bio
3. **Outcome:** Bio is visible, card has highlight ring

### Flow 3: Collapse Bio

1. User clicks expanded card
2. Card collapses
3. **Outcome:** Bio hidden, card returns to normal state

## Done When

- [ ] Tests written and passing
- [ ] Section renders with correct heading
- [ ] Featured speakers display in 2-column layout
- [ ] Other speakers display in 3-column grid
- [ ] Click expands/collapses bios
- [ ] Photos display with duotone effect
- [ ] Keyboard accessible (Enter/Space to toggle)
- [ ] Responsive on mobile
