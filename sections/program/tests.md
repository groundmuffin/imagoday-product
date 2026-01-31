# Test Instructions: Program

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Two-day schedule displayed in side-by-side layout. Focus on correct day/session rendering and responsive layout.

---

## User Flow Tests

### Flow 1: View Schedule

**Scenario:** User scrolls to program section

**Setup:**
- Provide array with 2 days, each with sessions

**Expected Results:**
- [ ] Section title "Două Zile de Reflecție" is visible
- [ ] Both day cards are displayed
- [ ] Day 1 shows "6 Martie" and "Seara"
- [ ] Day 2 shows "7 Martie" and "Întreaga Zi"
- [ ] All sessions are listed with bullet points

---

## Component Interaction Tests

### Program

**Renders correctly:**
- [ ] Two-column layout on desktop
- [ ] Single column on mobile
- [ ] Proper spacing between days

### DaySchedule

**Renders correctly:**
- [ ] Day label (e.g., "Ziua 1") is prominent
- [ ] Date in accent color (sky-400)
- [ ] Time frame in uppercase tracking
- [ ] Decorative gradient line below header
- [ ] Sessions list with bullets

### SessionCard

**Renders correctly:**
- [ ] Bullet point in sky color
- [ ] Session title visible
- [ ] Consistent spacing

---

## Empty State Tests

### No Days

**Scenario:** Empty days array

**Expected Results:**
- [ ] Section renders without breaking
- [ ] Consider showing "Program coming soon"

### Day with No Sessions

**Scenario:** Day exists but sessions array is empty

**Expected Results:**
- [ ] Day card renders with header
- [ ] Empty sessions area (no broken layout)

---

## Edge Cases

- [ ] Long session titles wrap appropriately
- [ ] Works with more than 2 days
- [ ] Works with many sessions per day
- [ ] Handles missing timeFrame gracefully

---

## Sample Test Data

```typescript
const mockDays = [
  {
    id: "day-1",
    label: "Day 1",
    date: "March 6",
    timeFrame: "Evening",
    sessions: [
      { id: "s1", title: "Keynotes" },
      { id: "s2", title: "Panel Discussion" }
    ]
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "March 7",
    timeFrame: "Full Day",
    sessions: [
      { id: "s3", title: "Plenary Sessions" },
      { id: "s4", title: "Workshops" }
    ]
  }
]
```
