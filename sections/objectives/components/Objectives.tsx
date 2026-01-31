import type { ObjectivesProps } from '../types'
import { ObjectiveCard } from './ObjectiveCard'

// Typography from design tokens: Space Grotesk (heading), Inter (body)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }

// Consistent content width across all sections
const contentWidth = 'max-w-5xl mx-auto px-6'

export function Objectives({ sectionTitle, sectionDescription, objectives }: ObjectivesProps) {
  // Split objectives: first 3 on top row, last 2 centered on bottom row
  const topRow = objectives.slice(0, 3)
  const bottomRow = objectives.slice(3, 5)

  return (
    <section className="bg-zinc-950 py-20 sm:py-24 lg:py-32" aria-labelledby="objectives-heading">
      <div className={contentWidth}>
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            id="objectives-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up"
            style={fontHeading}
          >
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              {sectionDescription}
            </p>
          )}
        </header>

        {/* Objectives Grid - 3+2 pattern */}
        <div className="space-y-4 sm:space-y-6">
          {/* Top Row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topRow.map((objective, index) => (
              <div
                key={objective.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <ObjectiveCard objective={objective} />
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:max-w-[66%] lg:mx-auto">
            {bottomRow.map((objective, index) => (
              <div
                key={objective.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <ObjectiveCard objective={objective} />
              </div>
            ))}
          </div>
        </div>
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
      `}</style>
    </section>
  )
}
