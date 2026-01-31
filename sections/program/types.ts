// =============================================================================
// Data Types
// =============================================================================

export interface Session {
  id: string
  title: string
}

export interface Day {
  id: string
  label: string
  date: string
  timeFrame: string
  sessions: Session[]
}

// =============================================================================
// Component Props
// =============================================================================

export interface ProgramProps {
  /** The list of conference days with their sessions */
  days: Day[]
}
