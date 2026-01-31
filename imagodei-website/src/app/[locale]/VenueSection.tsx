'use client'

import { VenueShowcase } from '@/components/sections/venue'
import type { Venue } from '@/types'

interface VenueTranslations {
  getDirections: string
}

interface VenueSectionProps {
  venue: Venue
  translations: VenueTranslations
}

export function VenueSection({ venue, translations }: VenueSectionProps) {
  const handleGetDirections = () => {
    window.open(venue.googleMapsUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <VenueShowcase
      venue={venue}
      translations={translations}
      onGetDirections={handleGetDirections}
    />
  )
}
