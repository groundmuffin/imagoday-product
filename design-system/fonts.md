# Typography Configuration

## Google Fonts Import

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or import in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

## Font Usage

- **Space Grotesk** — Headings, navigation, buttons, conference branding
- **Inter** — Body text, descriptions, labels
- **JetBrains Mono** — Code snippets (if needed)

## CSS Variables

```css
:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Tailwind Configuration (if needed)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

## Usage in Components

The provided components use inline styles for font-family:

```tsx
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }
const fontBody = { fontFamily: "'Inter', sans-serif" }

<h1 style={fontHeading}>Heading</h1>
<p style={fontBody}>Body text</p>
```
