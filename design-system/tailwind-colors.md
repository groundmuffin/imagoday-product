# Tailwind Color Configuration

## Color Choices

- **Primary:** `sky` — Used for buttons, links, key accents, focus rings
- **Secondary:** `cyan` — Used for content highlights, secondary accents
- **Neutral:** `zinc` — Used for backgrounds, text, borders

## Section Backgrounds

Most sections use dark backgrounds (`bg-zinc-950`). Two sections use light backgrounds:
- **Venue** — Full-bleed photo with dark overlay
- **Partners** — Light background (`bg-zinc-50 dark:bg-zinc-900`)

## Usage Examples

### Primary Elements
```css
/* Primary button */
bg-sky-500 hover:bg-sky-400 text-white

/* Primary accent text */
text-sky-400

/* Focus ring */
focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
```

### Secondary Elements
```css
/* Highlighted text */
text-cyan-400

/* Secondary gradient */
bg-gradient-to-br from-sky-500/5 to-cyan-500/5
```

### Neutral Elements
```css
/* Dark background */
bg-zinc-950 text-white

/* Light background */
bg-zinc-50 dark:bg-zinc-900

/* Card */
bg-zinc-900/60 border border-zinc-800

/* Body text */
text-zinc-400

/* Muted text */
text-zinc-500

/* Borders */
border-zinc-700
```
