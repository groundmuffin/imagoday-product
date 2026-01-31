# Test Instructions: Partners

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Partnership showcase with philosophy, benefits, audience, and logos. Focus on rendering, light/dark mode, and link behavior.

---

## User Flow Tests

### Flow 1: View Partnership Information

**Scenario:** User scrolls to partners section

**Setup:**
- Provide all props: partnershipPhilosophy, partnershipBenefits, targetAudience, partners

**Expected Results:**
- [ ] Headline "De ce să deveniți parteneri?" is visible
- [ ] Philosophy description paragraphs are visible
- [ ] 4 benefit cards are displayed
- [ ] Target audience headline and list are visible
- [ ] Partner logos are displayed in two groups

---

### Flow 2: Click Partner Logo

**Scenario:** User clicks on a partner logo

**Expected Results:**
- [ ] Partner website opens in new tab
- [ ] Link has proper `target="_blank"` and `rel="noopener noreferrer"`

---

## Component Interaction Tests

### Partners

**Renders correctly:**
- [ ] Light background (zinc-50 light, zinc-900 dark)
- [ ] Decorative gradient blobs in corners
- [ ] Proper spacing between sections

### BenefitCard

**Renders correctly:**
- [ ] Icon displays correctly (compass, users, heart, lightbulb)
- [ ] Title text visible
- [ ] Horizontal layout (icon + title)

**Hover states:**
- [ ] Border color changes
- [ ] Shadow appears

### PartnerLogo

**Renders correctly:**
- [ ] Logo image displays
- [ ] Card with border and hover effect
- [ ] External link icon on hover

**Link behavior:**
- [ ] Opens in new tab
- [ ] Title attribute shows partner name

---

## Empty State Tests

### No Partners

**Scenario:** Empty partners array

**Expected Results:**
- [ ] Section renders without partner logos area
- [ ] Philosophy and benefits still display

### No Benefits

**Scenario:** Empty benefits array

**Expected Results:**
- [ ] Benefits section is hidden or shows empty state
- [ ] Other content still displays

---

## Edge Cases

- [ ] Long partner names handled gracefully
- [ ] Missing logo shows placeholder
- [ ] Different logo aspect ratios handled
- [ ] Light and dark modes work correctly

---

## Sample Test Data

```typescript
const mockProps = {
  partnershipPhilosophy: {
    headline: "Test Headline",
    description: "Test description",
    extendedDescription: "Extended description"
  },
  partnershipBenefits: [
    {
      id: "benefit-1",
      title: "Test Benefit",
      description: "Benefit description",
      icon: "compass" as const
    }
  ],
  targetAudience: {
    headline: "Target Headline",
    audiences: ["Audience 1", "Audience 2"]
  },
  partners: [
    {
      id: "partner-1",
      name: "Test Partner",
      category: "organizer" as const,
      url: "https://test.com",
      logo: "/test-logo.png",
      description: "Partner description"
    }
  ]
}
```
