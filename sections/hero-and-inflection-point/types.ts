// =============================================================================
// Data Types
// =============================================================================

export interface CtaButton {
  label: string
  url: string
  external: boolean
}

export interface ConferenceNamePart {
  text: string
  accent: boolean
}

export interface Conference {
  label: string
  nameParts: ConferenceNamePart[]
  tagline: string
  dateDisplay: string
  startDate: string
  endDate: string
  location: string
}

export interface Hero {
  backgroundImageUrl: string
  backgroundAlt: string
  scrollHint: string
  primaryCta: CtaButton
  secondaryCta: CtaButton
}

export interface AboutHighlight {
  text: string
  highlighted: boolean
}

export interface About {
  text: string
  highlights: AboutHighlight[]
}

export interface ManifestoColumn {
  paragraphs: string[]
  isItalic?: boolean
}

export interface Manifesto {
  sectionTitle: string
  leftColumn: ManifestoColumn
  rightColumn: ManifestoColumn
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeroAndInflectionPointProps {
  /** Core conference identity displayed in the hero */
  conference: Conference
  /** Hero section configuration with background and CTAs */
  hero: Hero
  /** About statement with highlighted key terms */
  about: About
  /** Manifesto section with two-column philosophical content */
  manifesto: Manifesto
  /** Called when user clicks the primary CTA (Register) */
  onRegisterClick?: () => void
  /** Called when user clicks the secondary CTA (View Program) */
  onViewProgramClick?: () => void
}
