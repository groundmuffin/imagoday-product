# Application Shell

## Overview

A sticky top header navigation designed for the Imago Dei 2.0 conference marketing website. The header provides quick access to all sections via smooth scrolling, with a prominent registration CTA and bilingual support (Romanian/English).

## Navigation Structure

- **Speakers** → Speakers section (#speakers)
- **Program** → Program section (#program)
- **Venue** → Venue section (#venue)
- **Partners** → Partners section (#partners)
- **Contact** → Contact section (#contact)

## UI Elements

- **Logo** (left) → Scrolls to Hero/top
- **Language Toggle** (RO/EN) → Switches site language
- **Register Button** → External registration link (primary CTA)

## Layout Pattern

Sticky horizontal header that remains fixed at the top of the viewport as users scroll. The header has a semi-transparent background with backdrop blur for a modern glassmorphism effect.

### Header Structure
```
[Logo]                    [Speakers] [Program] [Venue] [Partners] [Contact]    [RO|EN] [Register]
```

## Responsive Behavior

### Desktop (lg and above)
- Full horizontal navigation with all items visible
- Logo on the left, nav items after logo
- Language toggle and Register button on the right
- Subtle backdrop blur effect

### Tablet (md)
- Same as desktop but with tighter spacing

### Mobile (below md)
- Logo on the left
- Hamburger menu icon on the right
- Full-screen overlay menu when open

## Components Provided

- `AppShell.tsx` — Main layout wrapper with scroll detection
- `MainNav.tsx` — Desktop navigation header
- `MobileNav.tsx` — Mobile menu overlay
- `LanguageSwitcher.tsx` — RO/EN language toggle
- `index.ts` — Exports

## Props

```typescript
interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  registerUrl?: string
  registerLabel?: string
  logoText?: string
  currentLanguage?: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
  onNavigate?: (href: string) => void
}
```

## Wire Up Navigation

Connect navigation to your routing/scrolling:

```tsx
const navigationItems = [
  { label: 'Speakers', href: '#speakers' },
  { label: 'Program', href: '#program' },
  { label: 'Venue', href: '#venue' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

<AppShell
  navigationItems={navigationItems}
  registerUrl="https://register.imagodei20.org"
  registerLabel="Înregistrare"
  logoText="Imago Dei"
  currentLanguage={language}
  onLanguageChange={setLanguage}
  onNavigate={(href) => {
    // Implement smooth scrolling to section
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }}
>
  {/* Page sections */}
</AppShell>
```
