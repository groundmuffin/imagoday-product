'use client'

import type { Objective } from '@/types'
import { ObjectiveCard } from './ObjectiveCard'
import { useScrollAnimation, getStaggeredDelay } from '@/hooks/useScrollAnimation'

export interface ObjectivesProps {
  sectionTitle: string
  sectionDescription?: string
  objectives: Objective[]
}

export function Objectives({ sectionTitle, sectionDescription, objectives }: ObjectivesProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  // Split objectives: first 3 on top row, last 2 centered on bottom row
  const topRow = objectives.slice(0, 3)
  const bottomRow = objectives.slice(3, 5)

  return (
    <section
      id="objectives"
      ref={ref}
      className="bg-zinc-900 py-20 sm:py-24 lg:py-32"
      aria-labelledby="objectives-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            id="objectives-heading"
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p
              className={`text-lg text-zinc-400 max-w-2xl mx-auto ${
                isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              {sectionDescription}
            </p>
          )}
        </header>

        {/* Objectives Grid - 3+2 pattern */}
        {objectives.length > 0 && (
          <div className="space-y-4 sm:space-y-6">
            {/* Top Row: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {topRow.map((objective, index) => (
                <div
                  key={objective.id}
                  className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                  style={isVisible ? getStaggeredDelay(index + 2) : undefined}
                >
                  <ObjectiveCard objective={objective} />
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 cards centered */}
            {bottomRow.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:max-w-[66%] lg:mx-auto">
                {bottomRow.map((objective, index) => (
                  <div
                    key={objective.id}
                    className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                    style={isVisible ? getStaggeredDelay(index + 5) : undefined}
                  >
                    <ObjectiveCard objective={objective} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

    </section>
  )
}
