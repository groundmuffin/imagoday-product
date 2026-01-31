// =============================================================================
// Data Types
// =============================================================================

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

export interface Partner {
  id: string
  name: string
  fullName?: string
  category: 'organizer' | 'institutional' | 'sponsor'
  url: string
  logo: string
  description: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface PartnersProps {
  /** The partnership philosophy and value proposition */
  partnershipPhilosophy: PartnershipPhilosophy
  /** The 4 key benefits of partnering */
  partnershipBenefits: PartnershipBenefit[]
  /** Target audience information */
  targetAudience: TargetAudience
  /** List of partners (organizers and institutional) */
  partners: Partner[]
}
