import type { ProgramProps } from '../types'
import { DaySchedule } from './DaySchedule'

// Typography from design tokens: Space Grotesk (heading), Inter (body)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }
const fontBody = { fontFamily: "'Inter', sans-serif" }

// Consistent content width across all sections
const contentWidth = 'max-w-5xl mx-auto px-6'

export function Program({ days }: ProgramProps) {
  return (
    <section className="bg-zinc-950 py-20 sm:py-24 lg:py-32" aria-labelledby="program-heading">
      <div className={contentWidth}>
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span
            className="inline-block text-sm font-medium uppercase tracking-widest text-sky-400 mb-4 animate-fade-in-up"
            style={fontBody}
          >
            Programul Conferinței
          </span>
          <h2
            id="program-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up animation-delay-100"
            style={fontHeading}
          >
            Două Zile de Reflecție
          </h2>
          <p
            className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
            style={fontBody}
          >
            O explorare profundă a relației dintre inteligența artificială și demnitatea umană
          </p>
        </header>

        {/* Days - Side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
      `}</style>
    </section>
  )
}
