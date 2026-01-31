# Hero & Inflection Point

## Overview

The opening section of the conference website featuring a dark, cohesive design with the conference identity "Imago Dei 2.0", tagline "Inflection Point", dates (6-7 March 2026), and location (Oradea, Romania). Includes Register and View Program CTAs. Below, an About statement with highlighted key terms introduces the conference, followed by the "Punctul de Inflexiune" manifesto in a two-column layout exploring the philosophical significance of AI in relation to human identity.

## User Flows

- User lands on the page and sees entrance animations reveal the conference identity
- User scrolls down following the scroll indicator to discover more content
- User clicks "Înregistrare" to open external registration in new tab
- User clicks "Vezi Programul" to navigate to the Program section
- User reads the About statement and Inflection Point manifesto

## Design Decisions

- Full viewport hero with Sistine Chapel "Creation of Adam" background (zoomed to hands detail)
- Staggered entrance animations for dramatic reveal
- About section with highlighted key terms in cyan
- Manifesto in two-column layout with the philosophical framing
- Primary CTA (Register) is a filled sky button; secondary (View Program) is outlined

## Data Used

**Entities:**
- `Conference` — Name parts, tagline, dates, location
- `Hero` — Background image, CTAs
- `About` — Introductory text with highlights
- `Manifesto` — Two-column philosophical content

## Visual Reference

See screenshots in `product/sections/hero-and-inflection-point/`:
- `hero-and-inflection-point.png` — Desktop view
- `hero-and-inflection-point-tablet.png` — Tablet view
- `hero-and-inflection-point-mobile.png` — Mobile view

## Components Provided

- `HeroAndInflectionPoint` — Complete section component

## Callback Props

| Callback | Description |
|----------|-------------|
| `onRegisterClick` | Called when user clicks the primary CTA (Register) |
| `onViewProgramClick` | Called when user clicks the secondary CTA (View Program) |
