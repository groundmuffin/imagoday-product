// =============================================================================
// Data Types
// =============================================================================

export interface Objective {
  id: string
  number: string
  title: string
  description: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ObjectivesProps {
  /** Section heading displayed at the top */
  sectionTitle: string
  /** Optional introductory text before the objectives grid */
  sectionDescription?: string
  /** The list of 5 objectives to display */
  objectives: Objective[]
}
