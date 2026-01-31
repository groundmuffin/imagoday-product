# Contact

## Overview

A contemplative closing section featuring an inspirational quote about responsibility at this inflection point, followed by contact email addresses. Designed as a minimal, centered layout that encourages reflection.

## User Flows

- Visitor reads the closing philosophical statement
- Visitor clicks an email address to initiate contact

## Design Decisions

- Large decorative quotation mark sets the tone
- Quote displayed in display typography, centered
- Decorative divider separates quote from contacts
- Email links styled as pill buttons
- Minimal, reverent atmosphere
- Subtle ambient gradient background

## Data Used

**Entities:**
- `closingQuote` — The philosophical closing statement
- `Contact` — id, email, label

## Visual Reference

See screenshots in `product/sections/contact/`:
- `contact.png` — Desktop view
- `contact-mobile.png` — Mobile view
- `contact-ro.png` — Romanian version

## Components Provided

- `Contact` — Complete section component

## Callback Props

| Callback | Description |
|----------|-------------|
| `onEmailClick` | Called when user clicks an email link (for analytics) |
