import type { Session } from '../types'

// Typography from design tokens: Space Grotesk (heading)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }

interface SessionCardProps {
  session: Session
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      {/* Bullet point */}
      <div className="w-1.5 h-1.5 rounded-full bg-sky-400/60 flex-shrink-0" />

      {/* Session title */}
      <span
        className="text-base sm:text-lg text-zinc-300"
        style={fontHeading}
      >
        {session.title}
      </span>
    </div>
  )
}
