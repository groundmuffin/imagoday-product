import type { VenueProps } from '../types'
import { MapPin, ExternalLink } from 'lucide-react'

/**
 * VenueShowcase — Full-bleed venue presentation with photo background
 *
 * Design: Refined elegance with reverence for the historic space.
 * The architectural photo dominates, with restrained typography
 * positioned to complement rather than compete.
 *
 * Typography: Space Grotesk (headings), Inter (body)
 * Colors: sky (primary), cyan (secondary), zinc (neutral)
 * Background: Light section per design system
 */
export function VenueShowcase({ venue, onGetDirections }: VenueProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Photo with Artistic Overlay */}
      <div className="absolute inset-0">
        <img
          src={venue.photoUrl}
          alt={venue.photoAlt}
          className="h-full w-full object-cover"
        />
        {/* Gradient overlays for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content Positioned in Lower Third */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {/* Location Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-sky-400" />
            <span className="text-sm font-medium tracking-wide text-white/90">
              {venue.city}, {venue.country}
            </span>
          </div>

          {/* Venue Name — Display Typography */}
          <h2 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {venue.name}
          </h2>

          {/* Description with Refined Styling */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl">
            {venue.description}
          </p>

          {/* Get Directions Button */}
          <button
            onClick={onGetDirections}
            className="group inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-500/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-500/20 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>Obține Indicații</span>
            <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      {/* Corner Accent — Geometric Elegance */}
      <div className="pointer-events-none absolute right-8 top-8 opacity-30 sm:right-12 sm:top-12">
        <div className="h-24 w-24 border border-white/20 sm:h-32 sm:w-32">
          <div className="absolute right-0 top-0 h-4 w-4 bg-sky-400/40" />
        </div>
      </div>
    </section>
  )
}
