import type { PartnershipBenefit } from '../types'
import { Compass, Users, Heart, Lightbulb } from 'lucide-react'

/**
 * BenefitCard — Individual partnership benefit display
 *
 * Design: Light, editorial cards with subtle sky accents.
 * Each card features an icon and focused messaging about
 * the value proposition for potential partners.
 */

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
    <article className="group relative flex h-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100/50 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-sky-500/50 dark:hover:shadow-sky-900/20 sm:p-6">
      {/* Icon Container */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-600 transition-colors duration-300 group-hover:from-sky-100 group-hover:to-cyan-100 dark:from-sky-900/30 dark:to-cyan-900/30 dark:text-sky-400 dark:group-hover:from-sky-900/50 dark:group-hover:to-cyan-900/50 sm:h-11 sm:w-11">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3
        className="text-base font-semibold leading-snug text-zinc-900 dark:text-white sm:text-lg"
        style={fontHeading}
      >
        {benefit.title}
      </h3>

      {/* Subtle corner accent on hover */}
      <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 rounded-sm bg-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20 dark:bg-sky-500" />
    </article>
  )
}
