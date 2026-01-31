# Objectives

## Overview

A grid section displaying the conference's 5 core objectives. Each objective appears as a numbered card (01-05) with title and description. The layout uses a 3+2 grid pattern with subtle hover interactions.

## User Flows

- User scrolls to the Objectives section and sees the heading
- User views 5 numbered cards arranged in a responsive grid (3 on top, 2 centered below on desktop)
- User hovers over a card and sees subtle visual feedback (scale, shadow, glow)

## Design Decisions

- 3+2 grid pattern centers the bottom row for visual balance
- Large gradient numbers create visual hierarchy
- Cards have subtle hover effects with sky/cyan glow
- Staggered entrance animations

## Data Used

**Entities:**
- `Objective` — id, number, title, description

## Visual Reference

See screenshots in `product/sections/objectives/`:
- `objectives.png` — Desktop view
- `objectives-mobile.png` — Mobile view

## Components Provided

- `Objectives` — Main section component
- `ObjectiveCard` — Individual objective card

## Props

```typescript
interface ObjectivesProps {
  sectionTitle: string
  sectionDescription?: string
  objectives: Objective[]
}
```
