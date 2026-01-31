'use client'

import { Speakers } from '@/components/sections/speakers'
import type { Speaker } from '@/types'

interface SpeakersTranslations {
  title: string
  subtitle: string
  description: string
  keynoteSpeakers: string
  facilitators: string
  clickToReadBio: string
  clickToCollapse: string
}

interface SpeakersSectionProps {
  speakers: Speaker[]
  translations: SpeakersTranslations
}

export function SpeakersSection({ speakers, translations }: SpeakersSectionProps) {
  return <Speakers speakers={speakers} translations={translations} />
}
