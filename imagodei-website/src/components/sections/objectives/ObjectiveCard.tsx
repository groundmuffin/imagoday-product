'use client'

import type { Objective } from '@/types'
import { Lightbulb, Users, GraduationCap, Compass, Scale } from 'lucide-react'

interface ObjectiveCardProps {
  objective: Objective
}

const iconMap = {
  lightbulb: Lightbulb,
  users: Users,
  graduationCap: GraduationCap,
  compass: Compass,
  scale: Scale,
} as const

// Default icons based on objective number
const defaultIconByNumber: Record<string, keyof typeof iconMap> = {
  '01': 'lightbulb',
  '02': 'users',
  '03': 'graduationCap',
  '04': 'compass',
  '05': 'scale',
}

export function ObjectiveCard({ objective }: ObjectiveCardProps) {
  // Use explicit icon or fallback to default based on number
  const iconKey = objective.icon || defaultIconByNumber[objective.number] || 'lightbulb'
  const IconComponent = iconMap[iconKey]

  return (
    <article
      className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-zinc-900/80 hover:border-zinc-700 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header with number and icon */}
      <div className="relative flex items-start justify-between mb-4">
        {/* Number */}
        <span
          className="block text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-cyan-500 transition-transform duration-300 group-hover:scale-105 origin-left"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {objective.number}
        </span>

        {/* Icon */}
        <div className="p-2 rounded-xl bg-zinc-800/50 border border-zinc-700/50 transition-all duration-300 group-hover:bg-sky-950/50 group-hover:border-sky-700/30">
          <IconComponent
            className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400/70 transition-colors duration-300 group-hover:text-sky-300"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Title */}
      <h3
        className="relative text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {objective.title}
      </h3>

      {/* Description */}
      <p
        className="relative text-sm sm:text-base text-zinc-400 leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {objective.description}
      </p>

      {/* Accent line at bottom */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  )
}
