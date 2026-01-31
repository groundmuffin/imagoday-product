'use client'

import type { Day } from '@/types'
import { DaySchedule } from './DaySchedule'
import { useScrollAnimation, getStaggeredDelay } from '@/hooks/useScrollAnimation'

export interface ProgramTranslations {
  title: string
  subtitle: string
  description: string
  comingSoon: string
}

interface ProgramProps {
  days: Day[]
  translations: ProgramTranslations
}

export function Program({ days, translations }: ProgramProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="program"
      ref={ref}
      className="relative bg-zinc-900 py-20 sm:py-24 lg:py-32"
      aria-labelledby="program-heading"
      role="region"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <header className="mb-12 text-center sm:mb-16 lg:mb-20">
          <span
            className={`mb-4 inline-block text-sm font-medium uppercase tracking-widest text-sky-400 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {translations.subtitle}
          </span>
          <h2
            id="program-heading"
            className={`mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl ${
              isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {translations.title}
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg text-zinc-400 ${
              isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {translations.description}
          </p>
        </header>

        {/* Days - Side by side on desktop, stacked on mobile */}
        {days.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {days.map((day, index) => (
              <div
                key={day.id}
                className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                style={isVisible ? getStaggeredDelay(index + 3) : undefined}
              >
                <DaySchedule day={day} />
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
            <p
              className="text-lg text-zinc-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {translations.comingSoon}
            </p>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  )
}
