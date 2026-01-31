import type { Day } from '../types'
import { SessionCard } from './SessionCard'

// Typography from design tokens: Space Grotesk (heading), Inter (body)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }
const fontBody = { fontFamily: "'Inter', sans-serif" }

interface DayScheduleProps {
  day: Day
}

export function DaySchedule({ day }: DayScheduleProps) {
  return (
    <article className="relative">
      {/* Day Card */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8">
        {/* Day Header */}
        <header className="mb-6 sm:mb-8">
          {/* Day label and date */}
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={fontHeading}
            >
              {day.label}
            </h3>
            <span
              className="text-sm font-medium text-sky-400 whitespace-nowrap"
              style={fontBody}
            >
              {day.date}
            </span>
          </div>

          {/* Time frame */}
          <p
            className="text-sm text-zinc-500 uppercase tracking-wide"
            style={fontBody}
          >
            {day.timeFrame}
          </p>

          {/* Decorative line */}
          <div className="mt-4 h-px bg-gradient-to-r from-sky-500/50 via-cyan-500/30 to-transparent" />
        </header>

        {/* Sessions List */}
        <ul className="space-y-3" role="list">
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
    </article>
  )
}
