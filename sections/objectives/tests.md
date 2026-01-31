# Test Instructions: Objectives

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

This section displays 5 numbered objectives in a 3+2 grid layout. Focus on correct rendering, grid layout, and hover interactions.

---

## User Flow Tests

### Flow 1: View Objectives

**Scenario:** User scrolls to objectives section

**Setup:**
- Provide `sectionTitle` and array of 5 objectives

**Expected Results:**
- [ ] Section title "Obiective" is visible
- [ ] All 5 objective cards are rendered
- [ ] Each card shows: number (01-05), title, description
- [ ] Numbers display with gradient styling

---

### Flow 2: Hover Objective Card

**Scenario:** User hovers over an objective card

**Expected Results:**
- [ ] Card lifts slightly (translate-y)
- [ ] Shadow increases
- [ ] Subtle glow effect appears
- [ ] Number scales up slightly

---

## Component Interaction Tests

### Objectives

**Renders correctly:**
- [ ] Section heading is visible with correct styling
- [ ] Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- [ ] Bottom row (2 cards) is centered on desktop

### ObjectiveCard

**Renders correctly:**
- [ ] Number displays with gradient (sky to cyan)
- [ ] Title in bold, white text
- [ ] Description in muted text
- [ ] Border and background visible

**Hover states:**
- [ ] Background darkens slightly
- [ ] Border color shifts
- [ ] Shadow appears
- [ ] Smooth transitions (300ms)

---

## Empty State Tests

### No Objectives

**Scenario:** Empty objectives array

**Expected Results:**
- [ ] Section title still renders
- [ ] Grid area is empty (no broken layout)
- [ ] Consider showing placeholder message

---

## Edge Cases

- [ ] Long objective titles wrap appropriately
- [ ] Long descriptions don't break card layout
- [ ] Works with fewer than 5 objectives
- [ ] Responsive grid adapts correctly

---

## Sample Test Data

```typescript
const mockObjectives = [
  {
    id: "obj-01",
    number: "01",
    title: "Test Objective 1",
    description: "Description for objective 1"
  },
  {
    id: "obj-02",
    number: "02",
    title: "Test Objective 2",
    description: "Description for objective 2"
  }
  // ... up to 5
]
```
