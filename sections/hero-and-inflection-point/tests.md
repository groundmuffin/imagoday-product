# Test Instructions: Hero & Inflection Point

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

This section is the landing page hero with conference identity, CTAs, about statement, and manifesto. Focus on rendering, accessibility, and CTA interactions.

---

## User Flow Tests

### Flow 1: View Conference Information

**Scenario:** User lands on the page and sees the conference identity

**Setup:**
- Provide valid `conference`, `hero`, `about`, and `manifesto` data

**Expected Results:**
- [ ] Conference label "Conferință Internațională" is visible
- [ ] Conference name "Imago Dei 2.0" displays with "Dei" in accent color (sky-400)
- [ ] Tagline "Inflection Point" is visible in italic
- [ ] Date "6-7 Martie 2026" is visible
- [ ] Location "Oradea, România" is visible

---

### Flow 2: Click Register CTA

**Scenario:** User clicks the primary CTA to register

**Setup:**
- Provide `onRegisterClick` callback

**Steps:**
1. User sees "Înregistrare" button (primary, filled)
2. User clicks the button

**Expected Results:**
- [ ] `onRegisterClick` callback is called
- [ ] Button opens external URL in new tab (for external CTAs)

---

### Flow 3: Click View Program CTA

**Scenario:** User clicks the secondary CTA to view program

**Setup:**
- Provide `onViewProgramClick` callback

**Steps:**
1. User sees "Vezi Programul" button (secondary, outlined)
2. User clicks the button

**Expected Results:**
- [ ] `onViewProgramClick` callback is called

---

### Flow 4: Read About Statement

**Scenario:** User scrolls to the about section

**Expected Results:**
- [ ] About text is visible
- [ ] Key terms are highlighted in cyan: "inteligența artificială", "umanitate", "responsabilitate morală"

---

### Flow 5: Read Manifesto

**Scenario:** User views the manifesto section

**Expected Results:**
- [ ] Section title "Punctul de Inflexiune" is visible with "Inflexiune" in accent color
- [ ] Left column paragraphs are visible
- [ ] "Imago Dei" within paragraphs is highlighted in sky color
- [ ] Right column is displayed in italic style

---

## Component Interaction Tests

### HeroAndInflectionPoint

**Renders correctly:**
- [ ] Hero section takes full viewport height on mobile
- [ ] Background image loads and displays
- [ ] Scroll indicator with "Descoperă" label is visible at bottom
- [ ] Gradient overlays are applied for text readability

**Accessibility:**
- [ ] Hero section has `role="img"` and `aria-label` for background
- [ ] About section has screen-reader-only heading
- [ ] Manifesto section has `aria-labelledby` linking to heading
- [ ] All buttons are keyboard accessible
- [ ] Focus states are visible (ring-2 ring-sky-400)

**Animations:**
- [ ] Elements animate in with staggered delays
- [ ] Scroll indicator pulses

---

## Edge Cases

- [ ] Handles missing background image gracefully (fallback gradient)
- [ ] Long conference name wraps appropriately
- [ ] Works with different language content (RO/EN)
- [ ] Responsive layout works on mobile, tablet, desktop

---

## Sample Test Data

```typescript
const mockData = {
  conference: {
    label: "Conferință Internațională",
    nameParts: [
      { text: "Imago ", accent: false },
      { text: "Dei", accent: true },
      { text: " 2.0", accent: false }
    ],
    tagline: "Inflection Point",
    dateDisplay: "6-7 Martie 2026",
    startDate: "2026-03-06",
    endDate: "2026-03-07",
    location: "Oradea, România"
  },
  hero: {
    backgroundImageUrl: "/test-bg.jpg",
    backgroundAlt: "Test background",
    scrollHint: "Descoperă",
    primaryCta: {
      label: "Înregistrare",
      url: "https://register.test.com",
      external: true
    },
    secondaryCta: {
      label: "Vezi Programul",
      url: "#program",
      external: false
    }
  },
  about: {
    text: "Test about text",
    highlights: [
      { text: "highlighted term", highlighted: true },
      { text: ".", highlighted: false }
    ]
  },
  manifesto: {
    sectionTitle: "Test Title",
    leftColumn: { paragraphs: ["Paragraph 1"] },
    rightColumn: { paragraphs: ["Paragraph 2"], isItalic: true }
  }
}
```
