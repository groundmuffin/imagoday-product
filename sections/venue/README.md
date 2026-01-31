# Venue

## Overview

Showcase the Palatul Episcopal Romano Catolic as the conference venue using a full-bleed photo background that emphasizes the architectural beauty. The section highlights why this historic space is fitting for contemplation and deep dialogue about AI and humanity.

## User Flows

- View the venue name, location (Oradea, Romania), and description
- Read about the cultural significance and ecclesiastical art collection
- Click a button to open Google Maps for directions

## Design Decisions

- Full-bleed photo covering entire section
- Content positioned in lower third for cinematic effect
- Dark gradient overlays for text readability
- Location badge with map pin icon
- Large display typography for venue name
- Subtle geometric corner accent

## Data Used

**Entities:**
- `Venue` — id, name, city, country, description, photoUrl, photoAlt, googleMapsUrl

## Visual Reference

See screenshots in `product/sections/venue/`:
- `venue.png` — Desktop view
- `venue-mobile.png` — Mobile view

## Components Provided

- `VenueShowcase` — Full section component

## Callback Props

| Callback | Description |
|----------|-------------|
| `onGetDirections` | Called when user clicks "Get Directions" button |
