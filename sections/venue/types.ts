// =============================================================================
// Data Types
// =============================================================================

export interface Venue {
  id: string
  name: string
  city: string
  country: string
  description: string
  photoUrl: string
  photoAlt: string
  googleMapsUrl: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface VenueProps {
  /** The venue data to display */
  venue: Venue
  /** Called when user clicks the "Get Directions" button */
  onGetDirections?: () => void
}
