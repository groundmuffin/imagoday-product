'use client'

import { InflectionCurve } from './InflectionCurve'
import { RegisterButton } from '@/components/ui/RegisterButton'

interface HeroProps {
  title: string
  subtitle: string
  editionBadge: string
  dateWithDays: string
  location: string
  introText: string
  registerCta: {
    label: string
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
            background: 'radial-gradient(circle, rgba(150, 241, 217, 0.4) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(223, 201, 56, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 -left-20 w-[350px] h-[350px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(150, 241, 217, 0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(223, 201, 56, 0.12) 0%, transparent 70%)',
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
              backgroundColor: 'rgba(223, 201, 56, 0.15)',
              color: '#DFC938',
              border: '1px solid rgba(223, 201, 56, 0.3)',
            }}
          >
            {editionBadge}
          </div>*/}

          {/* Title */}
          <h1
            className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 whitespace-nowrap"
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
              className="text-3xl md:text-4xl lg:text-5xl font-medium italic"
              style={{
                fontFamily: "'Source Serif 4', serif",
                color: '#DFC938',
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
                stroke="#DFC938"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Date and Location */}
          <div className="mb-10">
            <p
              className="text-xl md:text-2xl mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#F5F0E0',
              }}
            >
              {dateWithDays}
            </p>
            <p
              className="text-lg md:text-xl"
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
            className="max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(245, 240, 224, 0.8)',
            }}
          >
            {introText}
          </p>

          {/* CTA Button */}
          <RegisterButton label={registerCta.label} variant="primary" />
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
