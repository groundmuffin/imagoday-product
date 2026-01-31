# Milestone 8: Contact

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-7 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)

**What you need to build:**
- Integration of the Contact component
- Email link functionality

---

## Goal

Implement the Contact section — contemplative closing with quote and contact emails.

## Overview

A minimal closing section with:
- Inspirational quote about responsibility
- Decorative quotation mark
- Contact email links

**Key Functionality:**
- Centered, reverent layout
- Quote displays prominently
- Email links open mail client
- Optional analytics callback

## Recommended Approach: Test-Driven Development

See `product-plan/sections/contact/tests.md` for test-writing instructions.

## What to Implement

### Component

Copy from `product-plan/sections/contact/components/`:

- `Contact.tsx` — Complete section

### Data Layer

```typescript
interface ContactProps {
  closingQuote: string
  contacts: Contact[]
  onEmailClick?: (email: string) => void
}
```

### Callbacks

| Callback | Description |
|----------|-------------|
| `onEmailClick` | Track which email was clicked (analytics) |

### Dependencies

Component uses `lucide-react` for Mail icon.

## Files to Reference

- `product-plan/sections/contact/README.md`
- `product-plan/sections/contact/tests.md`
- `product-plan/sections/contact/components/`
- `product-plan/sections/contact/types.ts`
- `product-plan/sections/contact/sample-data.json`

## Expected User Flows

### Flow 1: Read Closing Quote

1. User scrolls to contact section
2. User sees quote with decorative styling
3. **Outcome:** Quote invites reflection

### Flow 2: Contact via Email

1. User clicks an email link
2. **Outcome:** Email client opens with recipient filled in

## Done When

- [ ] Tests written and passing
- [ ] Section renders with dark background
- [ ] Quote displays with quotation mark decoration
- [ ] Both email links work
- [ ] Links open mailto:
- [ ] Hover states on email buttons
- [ ] Responsive on mobile
- [ ] Subtle ambient gradient visible
