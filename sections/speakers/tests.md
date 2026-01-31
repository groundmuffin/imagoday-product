# Test Instructions: Speakers

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Two-tier speaker showcase with expandable bios. Test the two-tier layout, expand/collapse interactions, and accessibility.

---

## User Flow Tests

### Flow 1: View Speakers

**Scenario:** User scrolls to speakers section

**Setup:**
- Provide array with 2 featured and 3 non-featured speakers

**Expected Results:**
- [ ] Section title "Speakeri" is visible
- [ ] Subtitle "Keynote & Facilitatori" is visible
- [ ] Featured speakers appear at top in larger cards
- [ ] Other speakers appear below in grid

---

### Flow 2: Expand Speaker Bio

**Scenario:** User clicks a speaker card to read bio

**Setup:**
- Provide `onExpand` callback

**Steps:**
1. User sees "Click to read bio" hint
2. User clicks the speaker card

**Expected Results:**
- [ ] Card expands to show full bio
- [ ] `onExpand` callback is called with speaker id
- [ ] Hint text changes to "Click to collapse"
- [ ] Card gets ring highlight
- [ ] Smooth animation (500ms)

---

### Flow 3: Collapse Speaker Bio

**Scenario:** User clicks expanded card to collapse

**Setup:**
- Speaker card is already expanded

**Steps:**
1. User clicks the expanded card

**Expected Results:**
- [ ] Bio section collapses
- [ ] `onCollapse` callback is called with speaker id
- [ ] Card returns to initial state

---

## Component Interaction Tests

### Speakers

**Renders correctly:**
- [ ] Featured speakers in 2-column layout on desktop
- [ ] Other speakers in 3-column grid on desktop
- [ ] Responsive: stacks on mobile

### SpeakerCard

**Renders correctly:**
- [ ] Photo with duotone effect (grayscale + blue tint)
- [ ] Name in bold
- [ ] Title below name
- [ ] Expand hint visible

**Expand/collapse:**
- [ ] `aria-expanded` attribute reflects state
- [ ] Keyboard accessible (Enter/Space to toggle)
- [ ] Focus ring visible when focused

**Hover states:**
- [ ] Card background darkens
- [ ] Photo scales slightly
- [ ] Shadow appears

---

## Empty State Tests

### No Speakers

**Scenario:** Empty speakers array

**Expected Results:**
- [ ] Section renders without breaking
- [ ] Consider showing "Speakers coming soon" message

---

## Edge Cases

- [ ] Long names wrap appropriately
- [ ] Long bios don't break layout
- [ ] Missing photo shows placeholder
- [ ] Works with only featured speakers
- [ ] Works with only non-featured speakers

---

## Sample Test Data

```typescript
const mockSpeakers = [
  {
    id: "speaker-1",
    name: "Test Speaker",
    title: "Test Title",
    expertise: "Test Expertise",
    featured: true,
    photo: "/test.jpg",
    bio: "Test bio content"
  }
]
```
