'use client'

import type { PartnershipBenefit } from '@/types'
import { Compass, Users, Heart, Lightbulb } from 'lucide-react'

const iconMap = {
  compass: Compass,
  users: Users,
  heart: Heart,
  lightbulb: Lightbulb,
}

const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }

interface BenefitCardProps {
  benefit: PartnershipBenefit
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon]

  return (
    <article className="group relative flex h-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100/50 sm:p-6">
      {/* Icon Container */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-600 transition-colors duration-300 group-hover:from-sky-100 group-hover:to-cyan-100 sm:h-11 sm:w-11">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3
        className="text-base font-semibold leading-snug text-zinc-900 sm:text-lg"
        style={fontHeading}
      >
        {benefit.title}
      </h3>

      {/* Subtle corner accent on hover */}
      <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 rounded-sm bg-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
    </article>
  )
}
