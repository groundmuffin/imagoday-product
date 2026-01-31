'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Speaker } from '@/types'
import { ChevronDown, User } from 'lucide-react'

interface SpeakerCardTranslations {
  clickToReadBio: string
  clickToCollapse: string
}

interface SpeakerCardProps {
  speaker: Speaker
  featured?: boolean
  translations: SpeakerCardTranslations
  onExpand?: () => void
  onCollapse?: () => void
}

export function SpeakerCard({
  speaker,
  featured = false,
  translations,
  onExpand,
  onCollapse,
}: SpeakerCardProps) {
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`
        group relative cursor-pointer
        bg-zinc-900/60 border border-zinc-800 rounded-2xl
        transition-all duration-500 ease-out
        hover:bg-zinc-900/80 hover:border-zinc-700 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1
        ${featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}
        ${isExpanded ? 'ring-1 ring-sky-500/30 shadow-2xl shadow-sky-500/10' : ''}
      `}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className={`relative flex ${featured ? 'flex-col sm:flex-row gap-6' : 'flex-col gap-4'}`}>
        {/* Photo with consistent duotone effect for all speakers */}
        <div
          className={`
            relative overflow-hidden rounded-xl flex-shrink-0
            ${featured ? 'w-full sm:w-40 md:w-48 aspect-square sm:aspect-auto sm:h-48 md:h-56' : 'w-full aspect-square'}
          `}
        >
          {/* Duotone base layer - consistent for all speakers */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-sky-900" />
          <Image
            src={speaker.photo}
            alt={speaker.name}
            fill
            sizes={featured ? '(max-width: 640px) 100vw, 192px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            className="object-cover object-center grayscale mix-blend-luminosity transition-all duration-500 group-hover:scale-105 group-hover:grayscale-[50%]"
          />
          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />

          {/* Featured badge indicator for keynote speakers */}
          {featured && (
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-sky-500/50 backdrop-blur-md border border-sky-400/30">
              <span className="text-[10px] font-medium text-white/90 uppercase tracking-wider">Keynote</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <h3
            className={`
              font-bold text-white tracking-tight mb-2 transition-colors duration-300 group-hover:text-sky-100 font-heading
              ${featured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'}
            `}
          >
            {speaker.name}
          </h3>

          {/* Title */}
          <p
            className={`text-zinc-400 leading-relaxed font-body ${featured ? 'text-sm sm:text-base' : 'text-sm'}`}
          >
            {speaker.title}
          </p>

          {/* Expand indicator with icon */}
          <div className="flex items-center gap-2 mt-4 text-xs text-zinc-500 transition-colors duration-300 group-hover:text-sky-400">
            <User className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="font-body">
              {isExpanded ? translations.clickToCollapse : translations.clickToReadBio}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
            />
          </div>

          {/* Bio (expandable) */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
            `}
          >
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-body">
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
