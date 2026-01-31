// =============================================================================
// Data Types
// =============================================================================

export interface Contact {
  id: string
  email: string
  label: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ContactProps {
  /** The philosophical closing statement displayed prominently */
  closingQuote: string
  /** List of contact email addresses */
  contacts: Contact[]
  /** Called when user clicks an email link (for analytics tracking) */
  onEmailClick?: (email: string) => void
}
