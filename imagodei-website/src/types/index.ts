// =============================================================================
// Core Entity Types
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

export interface Session {
  id: string
  title: string
  icon?: 'mic' | 'users' | 'messageCircle' | 'presentation' | 'wrench' | 'network'
}

export interface Day {
  id: string
  label: string
  date: string
  timeFrame: string
  sessions: Session[]
}

export interface Partner {
  id: string
  name: string
  fullName?: string
  category: 'organizer' | 'institutional' | 'sponsor'
  url: string
  logo: string
  description: string
}

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

export interface Objective {
  id: string
  number: string
  title: string
  description: string
  icon?: 'lightbulb' | 'users' | 'graduationCap' | 'compass' | 'scale'
}

// =============================================================================
// Section-Specific Types
// =============================================================================

// Hero & Inflection Point
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

// Partners
export interface PartnershipPhilosophy {
  headline: string
  description: string
  extendedDescription: string
}

export interface PartnershipBenefit {
  id: string
  title: string
  description: string
  icon: 'compass' | 'users' | 'heart' | 'lightbulb'
}

export interface TargetAudience {
  headline: string
  audiences: string[]
}

// Contact
export interface Contact {
  id: string
  email: string
  label: string
}
