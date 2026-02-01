'use client'

import { InflectionCurve } from './InflectionCurve'

interface HeroProps {
  title: string
  subtitle: string
  editionBadge: string
  dateWithDays: string
  location: string
  introText: string
  registerCta: {
    label: string
    url: string
  }
}

export function Hero({
  title,
  subtitle,
  editionBadge,
  dateWithDays,
  location,
  introText,
  registerCta,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A3A3A 0%, #0F1F2A 50%, #1A3A3A 100%)',
      }}
    >
      {/* Background blur accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(42, 74, 74, 0.4) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 184, 46, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 -left-20 w-[350px] h-[350px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(58, 90, 90, 0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(229, 188, 106, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Inflection Curve background element */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl pointer-events-none"
      >
        <InflectionCurve className="opacity-25" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Edition Badge */}
         {/* <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: 'rgba(245, 184, 46, 0.15)',
              color: '#F5B82E',
              border: '1px solid rgba(245, 184, 46, 0.3)',
            }}
          >
            {editionBadge}
          </div>*/}

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0',
            }}
          >
            {title}
          </h1>

          {/* Subtitle with curve accent */}
          <div className="relative mb-8">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium italic"
              style={{
                fontFamily: "'Source Serif 4', serif",
                color: '#F5B82E',
              }}
            >
              {subtitle}
            </h2>
            <svg
              viewBox="0 0 200 30"
              className="mx-auto mt-2 w-32 h-6"
              style={{ opacity: 0.6 }}
            >
              <path
                d="M 10 20 Q 100 5, 190 20"
                fill="none"
                stroke="#F5B82E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Date and Location */}
          <div className="mb-10">
            <p
              className="text-lg md:text-xl mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#F5F0E0',
              }}
            >
              {dateWithDays}
            </p>
            <p
              className="text-base md:text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(245, 240, 224, 0.6)',
              }}
            >
              {location}
            </p>
          </div>

          {/* Intro Text */}
          <p
            className="max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(245, 240, 224, 0.8)',
            }}
          >
            {introText}
          </p>

          {/* CTA Button */}
          <a
            href={registerCta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: '#F5B82E',
              color: '#0F1F2A',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFCB45'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(245, 184, 46, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F5B82E'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {registerCta.label}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5F0E0"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
