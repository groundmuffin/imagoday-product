import type { Session } from '@/types'

interface SessionCardProps {
  session: Session
}

export function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      {/* Bullet point */}
      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/60" />

      {/* Session title */}
      <span
        className="text-base text-zinc-300 sm:text-lg"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {session.title}
      </span>
    </div>
  )
}
