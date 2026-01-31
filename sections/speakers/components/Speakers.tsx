import type { SpeakersProps } from '../types'
import { SpeakerCard } from './SpeakerCard'

// Typography from design tokens: Space Grotesk (heading), Inter (body)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }
const fontBody = { fontFamily: "'Inter', sans-serif" }

// Consistent content width across all sections
const contentWidth = 'max-w-5xl mx-auto px-6'

export function Speakers({ speakers, onExpand, onCollapse }: SpeakersProps) {
  // Split speakers by featured status
  const featuredSpeakers = speakers.filter(s => s.featured)
  const otherSpeakers = speakers.filter(s => !s.featured)

  return (
    <section className="bg-zinc-950 py-20 sm:py-24 lg:py-32" aria-labelledby="speakers-heading">
      <div className={contentWidth}>
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span
            className="inline-block text-sm font-medium uppercase tracking-widest text-sky-400 mb-4 animate-fade-in-up"
            style={fontBody}
          >
            Keynote & Facilitatori
          </span>
          <h2
            id="speakers-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up animation-delay-100"
            style={fontHeading}
          >
            Speakeri
          </h2>
          <p
            className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
            style={fontBody}
          >
            Experți de renume internațional în inteligență artificială, etică și teologie
          </p>
        </header>

        {/* Featured Speakers - Larger, more prominent cards */}
        <div className="mb-12 sm:mb-16">
          <h3
            className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 animate-fade-in-up animation-delay-300"
            style={fontBody}
          >
            Keynote Speakers
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <SpeakerCard
                  speaker={speaker}
                  featured
                  onExpand={() => onExpand?.(speaker.id)}
                  onCollapse={() => onCollapse?.(speaker.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Other Speakers - Grid layout */}
        <div>
          <h3
            className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 animate-fade-in-up animation-delay-500"
            style={fontBody}
          >
            Facilitatori & Panelists
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherSpeakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <SpeakerCard
                  speaker={speaker}
                  onExpand={() => onExpand?.(speaker.id)}
                  onCollapse={() => onCollapse?.(speaker.id)}
                />
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
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  )
}
