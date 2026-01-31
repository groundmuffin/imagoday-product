import { useState } from 'react'
import type { Speaker } from '../types'

// Typography from design tokens: Space Grotesk (heading), Inter (body)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }
const fontBody = { fontFamily: "'Inter', sans-serif" }

interface SpeakerCardProps {
  speaker: Speaker
  featured?: boolean
  onExpand?: () => void
  onCollapse?: () => void
}

export function SpeakerCard({ speaker, featured = false, onExpand, onCollapse }: SpeakerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    if (isExpanded) {
      setIsExpanded(false)
      onCollapse?.()
    } else {
      setIsExpanded(true)
      onExpand?.()
    }
  }

  return (
    <article
      onClick={handleClick}
      className={`
        group relative cursor-pointer
        bg-zinc-900/60 border border-zinc-800 rounded-2xl
        transition-all duration-500 ease-out
        hover:bg-zinc-900/80 hover:border-zinc-700 hover:shadow-xl hover:shadow-sky-500/10
        ${featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}
        ${isExpanded ? 'ring-1 ring-sky-500/30 shadow-2xl shadow-sky-500/10' : ''}
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-expanded={isExpanded}
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className={`relative flex ${featured ? 'flex-col sm:flex-row gap-6' : 'flex-col gap-4'}`}>
        {/* Photo with duotone effect */}
        <div
          className={`
            relative overflow-hidden rounded-xl flex-shrink-0
            ${featured ? 'w-full sm:w-40 md:w-48 aspect-square sm:aspect-auto sm:h-48 md:h-56' : 'w-full aspect-square'}
          `}
        >
          {/* Duotone base layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900 to-cyan-800" />
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="relative w-full h-full object-cover object-center grayscale mix-blend-luminosity transition-all duration-500 group-hover:scale-105 group-hover:grayscale-[50%]"
          />
          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <h3
            className={`
              font-bold text-white tracking-tight mb-2 transition-colors duration-300 group-hover:text-sky-100
              ${featured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'}
            `}
            style={fontHeading}
          >
            {speaker.name}
          </h3>

          {/* Title */}
          <p
            className={`text-zinc-400 leading-relaxed ${featured ? 'text-sm sm:text-base' : 'text-sm'}`}
            style={fontBody}
          >
            {speaker.title}
          </p>

          {/* Expand indicator */}
          <div className="flex items-center gap-2 mt-4 text-xs text-zinc-500 transition-colors duration-300 group-hover:text-sky-400">
            <span style={fontBody}>{isExpanded ? 'Click to collapse' : 'Click to read bio'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Bio (expandable) */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
            `}
          >
            <div className="pt-4 border-t border-zinc-800">
              <p
                className="text-sm sm:text-base text-zinc-300 leading-relaxed"
                style={fontBody}
              >
                {speaker.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accent line at bottom */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  )
}
