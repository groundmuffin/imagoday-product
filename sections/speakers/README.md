# Speakers

## Overview

A two-tier speaker showcase with keynote speakers featured prominently at the top and other speakers/facilitators displayed in a grid below. Each speaker card shows minimal info with expandable bios.

## User Flows

- View featured keynote speakers at the top of the section
- Scroll to see other speakers and facilitators in a grid below
- Click any speaker card to expand and reveal full bio
- Click again or elsewhere to collapse the expanded card

## Design Decisions

- Featured speakers get larger cards with horizontal layout on desktop
- Other speakers in a 3-column grid
- Photos use duotone effect (sky/cyan) with grayscale
- Expandable bios keep the initial view clean
- Smooth expand/collapse animations

## Data Used

**Entities:**
- `Speaker` — id, name, title, expertise, featured, photo, bio

## Visual Reference

See screenshots in `product/sections/speakers/`:
- `speakers.png` — Desktop view
- `speakers-mobile.png` — Mobile view
- `speakers-expanded.png` — Card expanded state

## Components Provided

- `Speakers` — Main section component
- `SpeakerCard` — Individual speaker card with expand/collapse

## Callback Props

| Callback | Description |
|----------|-------------|
| `onExpand` | Called when user expands a speaker card (receives speaker id) |
| `onCollapse` | Called when user collapses an expanded card (receives speaker id) |
