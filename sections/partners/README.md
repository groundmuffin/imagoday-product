# Partners

## Overview

A section showcasing partnership opportunities and the organizations behind Imago Dei 2.0. Explains the philosophy that partners are more than financial supporters—they join a meaningful dialogue about AI, ethics, and theology at a pivotal moment in history.

## User Flows

- View the partnership philosophy and value proposition
- Browse the 4 partnership benefits
- See the target audience description
- View organizers and institutional partners with their logos

## Design Decisions

- Light background (contrast with dark sections)
- Editorial typography hierarchy
- Benefits displayed as compact horizontal cards
- Target audience as flowing inline list
- Partner logos with hover effects
- Decorative gradient accents

## Data Used

**Entities:**
- `PartnershipPhilosophy` — headline, description, extendedDescription
- `PartnershipBenefit` — id, title, description, icon
- `TargetAudience` — headline, audiences[]
- `Partner` — id, name, fullName, category, url, logo, description

## Visual Reference

See screenshots in `product/sections/partners/`:
- `partners.png` — Desktop view (light mode)
- `partners-dark.png` — Dark mode
- `partners-mobile.png` — Mobile view
- `partners-en.png` — English version

## Components Provided

- `Partners` — Main section component
- `BenefitCard` — Individual benefit card
- `PartnerLogo` — Partner logo with link

## Props

```typescript
interface PartnersProps {
  partnershipPhilosophy: PartnershipPhilosophy
  partnershipBenefits: PartnershipBenefit[]
  targetAudience: TargetAudience
  partners: Partner[]
}
```
