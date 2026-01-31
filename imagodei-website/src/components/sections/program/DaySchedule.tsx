import type { Day } from '@/types'
import { SessionCard } from './SessionCard'

interface DayScheduleProps {
  day: Day
}

export function DaySchedule({ day }: DayScheduleProps) {
  return (
    <article className="relative">
      {/* Day Card */}
      <div className="border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
        {/* Day Header */}
        <header className="mb-6 sm:mb-8">
          {/* Day label and date */}
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h3
              className="text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {day.label}
            </h3>
            <span
              className="whitespace-nowrap text-sm font-medium text-sky-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {day.date}
            </span>
          </div>

          {/* Time frame */}
          {day.timeFrame && (
            <p
              className="text-sm uppercase tracking-wide text-zinc-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {day.timeFrame}
            </p>
          )}

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
