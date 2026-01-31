# Milestone 7: Partners

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-6 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)

**What you need to build:**
- Integration of the Partners component
- Partner logo hosting
- Content from data source

---

## Goal

Implement the Partners section — partnership showcase with philosophy, benefits, and logos.

## Overview

Partnership section with:
- Philosophy and value proposition
- 4 benefit cards
- Target audience list
- Partner logos (organizers and institutional)

**Key Functionality:**
- Light background (contrast with other sections)
- Benefits in horizontal card layout
- Partner logos with external links
- Dark mode support

## Recommended Approach: Test-Driven Development

See `product-plan/sections/partners/tests.md` for test-writing instructions.

## What to Implement

### Components

Copy from `product-plan/sections/partners/components/`:

- `Partners.tsx` — Main section
- `BenefitCard.tsx` — Benefit card with icon
- `PartnerLogo.tsx` — Logo with link

### Data Layer

```typescript
interface PartnersProps {
  partnershipPhilosophy: PartnershipPhilosophy
  partnershipBenefits: PartnershipBenefit[]
  targetAudience: TargetAudience
  partners: Partner[]
}
```

### Partner Logos

You'll need to host partner logos. The sample data references paths like `/logos/partners/faith-base-logo.jpg`.

### Dependencies

Components use `lucide-react` for icons: Compass, Users, Heart, Lightbulb, ExternalLink.

## Files to Reference

- `product-plan/sections/partners/README.md`
- `product-plan/sections/partners/tests.md`
- `product-plan/sections/partners/components/`
- `product-plan/sections/partners/types.ts`
- `product-plan/sections/partners/sample-data.json`

## Expected User Flows

### Flow 1: View Partnership Info

1. User scrolls to partners section
2. User sees partnership philosophy
3. User sees 4 benefits
4. User sees target audience
5. **Outcome:** Value proposition is clear

### Flow 2: Visit Partner Website

1. User clicks a partner logo
2. **Outcome:** Partner website opens in new tab

## Done When

- [ ] Tests written and passing
- [ ] Section renders with light background
- [ ] Partnership philosophy displays
- [ ] 4 benefit cards with icons
- [ ] Target audience in inline list
- [ ] Partner logos display in two groups
- [ ] Logo clicks open partner websites
- [ ] Light and dark modes work
- [ ] Responsive on mobile
