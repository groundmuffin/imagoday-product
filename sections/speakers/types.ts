// =============================================================================
// Data Types
// =============================================================================

export interface Speaker {
  id: string
  name: string
  title: string
  expertise: string
  featured: boolean
  photo: string
  bio: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface SpeakersProps {
  /** The list of speakers to display */
  speakers: Speaker[]
  /** Called when user expands a speaker card to view bio */
  onExpand?: (id: string) => void
  /** Called when user collapses an expanded speaker card */
  onCollapse?: (id: string) => void
}
