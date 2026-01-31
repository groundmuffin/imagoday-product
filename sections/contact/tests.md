# Test Instructions: Contact

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Contemplative closing section with quote and contact emails. Focus on rendering, email link behavior, and accessibility.

---

## User Flow Tests

### Flow 1: View Contact Information

**Scenario:** User scrolls to contact section

**Setup:**
- Provide closingQuote and contacts array

**Expected Results:**
- [ ] Large quotation mark is visible
- [ ] Closing quote text is displayed prominently
- [ ] Decorative divider separates quote from contacts
- [ ] Both email links are visible with labels

---

### Flow 2: Click Email Link

**Scenario:** User clicks to send email

**Setup:**
- Provide `onEmailClick` callback

**Steps:**
1. User clicks email link (e.g., "office@imagodei20.org")

**Expected Results:**
- [ ] `onEmailClick` callback is called with the email address
- [ ] mailto: link opens email client
- [ ] Link has proper accessibility attributes

---

## Component Interaction Tests

### Contact

**Renders correctly:**
- [ ] Section has minimum height (70vh mobile, 80vh desktop)
- [ ] Dark background (zinc-950)
- [ ] Ambient gradient glow visible
- [ ] Content is vertically and horizontally centered

**Email links:**
- [ ] Pill-shaped button styling
- [ ] Mail icon visible
- [ ] Label and email address displayed
- [ ] Hover state changes appearance

**Accessibility:**
- [ ] Section has aria-labelledby
- [ ] Email links are keyboard accessible
- [ ] Focus states visible
- [ ] Screen reader announces link purpose

---

## Empty State Tests

### No Contacts

**Scenario:** Empty contacts array

**Expected Results:**
- [ ] Quote still displays
- [ ] No broken layout
- [ ] Consider showing fallback message

---

## Edge Cases

- [ ] Long quote text wraps appropriately
- [ ] Many email contacts layout correctly
- [ ] Long email addresses don't break layout
- [ ] Works on very small screens

---

## Sample Test Data

```typescript
const mockContactProps = {
  closingQuote: "Test quote for the closing section.",
  contacts: [
    {
      id: "contact-1",
      email: "test@example.com",
      label: "Test Contact"
    }
  ]
}

// Empty state
const mockEmptyContacts = {
  closingQuote: "Test quote",
  contacts: []
}
```
