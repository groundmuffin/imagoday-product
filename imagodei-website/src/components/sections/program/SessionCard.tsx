'use client'

import type { Session } from '@/types'
import { Mic, Users, MessageCircle, Presentation, Wrench, Network } from 'lucide-react'

interface SessionCardProps {
  session: Session
}

const iconMap = {
  mic: Mic,
  users: Users,
  messageCircle: MessageCircle,
  presentation: Presentation,
  wrench: Wrench,
  network: Network,
} as const

// Infer icon from session title patterns
function getIconFromTitle(title: string): keyof typeof iconMap {
  const lowerTitle = title.toLowerCase()

  if (lowerTitle.includes('keynote')) return 'mic'
  if (lowerTitle.includes('panel')) return 'users'
  if (lowerTitle.includes('q&a') || lowerTitle.includes('sesiune q')) return 'messageCircle'
  if (lowerTitle.includes('plenar') || lowerTitle.includes('plenary')) return 'presentation'
  if (lowerTitle.includes('workshop')) return 'wrench'
  if (lowerTitle.includes('networking')) return 'network'

  // Default fallback
  return 'presentation'
}

export function SessionCard({ session }: SessionCardProps) {
  const iconKey = session.icon || getIconFromTitle(session.title)
  const IconComponent = iconMap[iconKey]

  return (
    <div className="group flex items-center gap-3 py-2 transition-colors duration-200 hover:bg-zinc-800/30 rounded-lg px-2 -mx-2">
      {/* Icon */}
      <div className="flex-shrink-0 p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 transition-all duration-200 group-hover:bg-sky-500/20 group-hover:border-sky-500/30">
        <IconComponent
          className="h-4 w-4 text-sky-400 transition-colors duration-200 group-hover:text-sky-300"
          strokeWidth={1.5}
        />
      </div>

      {/* Session title */}
      <span
        className="text-base text-zinc-300 sm:text-lg transition-colors duration-200 group-hover:text-white"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {session.title}
      </span>
    </div>
  )
}
