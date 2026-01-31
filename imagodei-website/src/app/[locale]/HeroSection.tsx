'use client'

import { HeroAndInflectionPoint } from '@/components/sections/hero-and-inflection-point'
import type { Conference, Hero, About, Manifesto } from '@/types'

interface HeroSectionProps {
  data: {
    conference: Conference
    hero: Hero
    about: About
    manifesto: Manifesto
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  const handleViewProgramClick = () => {
    const programSection = document.getElementById('program')
    if (programSection) {
      // Get navbar height for offset (md:pt-20 = 80px, pt-16 = 64px)
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64
      const elementPosition = programSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <HeroAndInflectionPoint
      conference={data.conference}
      hero={data.hero}
      about={data.about}
      manifesto={data.manifesto}
      onViewProgramClick={handleViewProgramClick}
    />
  )
}
