'use client'

import type { Day } from '@/types'
import { DaySchedule } from './DaySchedule'

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
  return (
    <section
      id="program"
      className="bg-zinc-950 py-20 sm:py-24 lg:py-32"
      aria-labelledby="program-heading"
      role="region"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <header className="mb-12 text-center sm:mb-16 lg:mb-20">
          <span
            className="mb-4 inline-block animate-fade-in-up text-sm font-medium uppercase tracking-widest text-sky-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {translations.subtitle}
          </span>
          <h2
            id="program-heading"
            className="mb-4 animate-fade-in-up text-3xl font-bold text-white animation-delay-100 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {translations.title}
          </h2>
          <p
            className="mx-auto max-w-2xl animate-fade-in-up text-lg text-zinc-400 animation-delay-200"
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
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <DaySchedule day={day} />
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in-up text-center animation-delay-300">
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
