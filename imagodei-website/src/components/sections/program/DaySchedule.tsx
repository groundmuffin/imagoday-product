'use client'

import type { Day } from '@/types'
import { SessionCard } from './SessionCard'

interface DayScheduleProps {
  day: Day
}

export function DaySchedule({ day }: DayScheduleProps) {
  return (
    <article className="relative group">
      {/* Day Card with hover effects */}
      <div className="border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-sky-500/5 hover:-translate-y-1">
        {/* Subtle gradient glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Day Header */}
        <header className="mb-6 sm:mb-8 relative">
          {/* Day label and date */}
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-bold text-white sm:text-3xl transition-colors duration-300 group-hover:text-sky-50 font-heading">
              {day.label}
            </h3>
            <span className="whitespace-nowrap text-sm font-medium text-sky-400 transition-colors duration-300 group-hover:text-sky-300 font-body">
              {day.date}
            </span>
          </div>

          {/* Time frame */}
          {day.timeFrame && (
            <p className="text-sm uppercase tracking-wide text-zinc-500 font-body">
              {day.timeFrame}
            </p>
          )}

          {/* Decorative line */}
          <div className="mt-4 h-px bg-gradient-to-r from-sky-500/50 via-cyan-500/30 to-transparent" />
        </header>

        {/* Sessions List */}
        <ul className="space-y-3 relative" role="list">
          {day.sessions.map((session, index) => (
            <li
              key={session.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 5) * 50}ms` }}
            >
              <SessionCard session={session} />
            </li>
          ))}
        </ul>
      </div>

      {/* Accent line at bottom on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    </article>
  )
}
