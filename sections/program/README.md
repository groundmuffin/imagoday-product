# Program

## Overview

A minimalist two-day conference schedule displayed in a side-by-side layout. Day 1 covers the evening program (keynotes, panel, Q&A) and Day 2 covers the full day (plenary sessions, workshops, networking & final panel).

## User Flows

- View the complete two-day schedule at a glance
- Scan session categories for each day

## Design Decisions

- Side-by-side layout on desktop for easy comparison
- Stacks vertically on mobile
- Minimalist session display (bullet points, not detailed cards)
- Decorative gradient accents
- Contemplative, clean aesthetic

## Data Used

**Entities:**
- `Day` — id, label, date, timeFrame, sessions[]
- `Session` — id, title

## Visual Reference

See screenshots in `product/sections/program/`:
- `program.png` — Desktop view (Romanian)
- `program-mobile.png` — Mobile view
- `program-en.png` — English version

## Components Provided

- `Program` — Main section component
- `DaySchedule` — Individual day card
- `SessionCard` — Session bullet item

## Props

```typescript
interface ProgramProps {
  days: Day[]
}
```
