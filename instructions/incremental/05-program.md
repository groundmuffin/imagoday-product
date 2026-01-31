# Milestone 5: Program

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-4 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)

**What you need to build:**
- Integration of the Program component
- Content from data source

---

## Goal

Implement the Program section — the two-day conference schedule.

## Overview

A minimalist two-day schedule in side-by-side layout:
- Day 1: Evening (keynotes, panel, Q&A)
- Day 2: Full day (plenary, workshops, networking)

**Key Functionality:**
- Display two days side by side on desktop
- Stack vertically on mobile
- Show session list for each day
- Minimalist, contemplative design

## Recommended Approach: Test-Driven Development

See `product-plan/sections/program/tests.md` for test-writing instructions.

## What to Implement

### Components

Copy from `product-plan/sections/program/components/`:

- `Program.tsx` — Main section
- `DaySchedule.tsx` — Individual day card
- `SessionCard.tsx` — Session bullet item

### Data Layer

```typescript
interface ProgramProps {
  days: Day[]
}
```

### Empty States

- Empty days array: Show "Program coming soon"
- Day with no sessions: Show day header without sessions

## Files to Reference

- `product-plan/sections/program/README.md`
- `product-plan/sections/program/tests.md`
- `product-plan/sections/program/components/`
- `product-plan/sections/program/types.ts`
- `product-plan/sections/program/sample-data.json`

## Expected User Flows

### Flow 1: View Schedule

1. User scrolls to program section (or clicks nav link)
2. User sees "Două Zile de Reflecție" heading
3. User sees both days side by side
4. **Outcome:** Complete schedule is visible

## Done When

- [ ] Tests written and passing
- [ ] Section renders with correct heading
- [ ] Both days display with labels, dates, time frames
- [ ] Sessions listed with bullet points
- [ ] Side-by-side on desktop, stacked on mobile
- [ ] Animations on scroll into view
