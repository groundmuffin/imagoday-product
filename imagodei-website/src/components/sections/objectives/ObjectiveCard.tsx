'use client'

import type { Objective } from '@/types'

interface ObjectiveCardProps {
  objective: Objective
}

export function ObjectiveCard({ objective }: ObjectiveCardProps) {
  return (
    <article
      className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-zinc-900/80 hover:border-zinc-700 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Number */}
      <span
        className="relative block text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-cyan-500 mb-4 transition-transform duration-300 group-hover:scale-105 origin-left"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {objective.number}
      </span>

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
