# Test Instructions: Venue

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Full-bleed venue showcase with photo background. Focus on image loading, text readability, and directions button.

---

## User Flow Tests

### Flow 1: View Venue Information

**Scenario:** User scrolls to venue section

**Setup:**
- Provide venue object with all fields

**Expected Results:**
- [ ] Background photo is visible
- [ ] Location badge shows "Oradea, România"
- [ ] Venue name "Palatul Episcopal Romano Catolic" is prominent
- [ ] Description text is readable against the photo
- [ ] "Obține Indicații" button is visible

---

### Flow 2: Get Directions

**Scenario:** User clicks to get directions

**Setup:**
- Provide `onGetDirections` callback

**Steps:**
1. User clicks "Obține Indicații" button

**Expected Results:**
- [ ] `onGetDirections` callback is called
- [ ] (Implementation should open Google Maps in new tab)

---

## Component Interaction Tests

### VenueShowcase

**Renders correctly:**
- [ ] Full-screen height section
- [ ] Background image covers entire section
- [ ] Gradient overlays provide text contrast
- [ ] Content positioned in lower third
- [ ] Corner geometric accent visible

**Button interaction:**
- [ ] Hover state shows visual feedback
- [ ] Focus ring visible on keyboard focus
- [ ] External link icon visible

---

## Edge Cases

- [ ] Long venue name wraps appropriately
- [ ] Long description doesn't overflow
- [ ] Missing photo shows fallback (dark background)
- [ ] Works with different aspect ratio photos

---

## Sample Test Data

```typescript
const mockVenue = {
  id: "venue-1",
  name: "Test Venue Name",
  city: "Test City",
  country: "Test Country",
  description: "Test venue description text",
  photoUrl: "/test-venue.jpg",
  photoAlt: "Test venue photo",
  googleMapsUrl: "https://maps.google.com/?q=test"
}
```
