'use client'

import { VenueSwiper } from './VenueSwiper'
import { MapPin, Car } from 'lucide-react'

interface VenueProps {
  title: string
  description: string
  parkingInfo: string
  mapsUrl: string
  mapsLabel: string
  images: {
    src: string
    alt: string
  }[]
}

export function Venue({ title, description, parkingInfo, mapsUrl, mapsLabel, images }: VenueProps) {
  return (
    <section
      id="venue"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#1A3A3A' }}
    >
      {/* Background blur accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(42, 74, 74, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 184, 46, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0',
            }}
          >
            {title}
          </h2>
          <div
            className="mx-auto h-1 w-24 rounded-full"
            style={{
              background: 'linear-gradient(to right, #2A4A4A, #F5B82E)',
            }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Swipeable Images */}
          <div className="order-first md:order-first">
            <VenueSwiper images={images} />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(245, 240, 224, 0.85)',
              }}
            >
              {description}
            </p>

            {/* Parking Info */}
            <div
              className="flex items-start gap-3"
              style={{ color: 'rgba(245, 240, 224, 0.85)' }}
            >
              <Car
                className="w-5 h-5 mt-1 flex-shrink-0"
                style={{ color: '#F5B82E' }}
              />
              <p
                className="text-base md:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {parkingInfo}
              </p>
            </div>

            {/* Google Maps Link */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all hover:scale-105"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: 'rgba(245, 184, 46, 0.15)',
                color: '#F5B82E',
                border: '1px solid rgba(245, 184, 46, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(245, 184, 46, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(245, 184, 46, 0.15)'
              }}
            >
              <MapPin className="w-5 h-5" />
              {mapsLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
