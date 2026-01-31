'use client'

import { useState, useEffect, useRef } from 'react'
import type {
  Conference,
  Hero,
  About,
  Manifesto,
  CtaButton,
} from '@/types'

// Typography from design tokens: Space Grotesk (heading), Inter (body)
const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }
const fontBody = { fontFamily: "'Inter', sans-serif" }

// Consistent content width across all sections
const contentWidth = 'max-w-5xl mx-auto px-6'

/**
 * Renders text with {{highlighted}} portions styled distinctively.
 * This avoids dangerouslySetInnerHTML and XSS risks.
 */
function renderStyledText(text: string, className: string, style: React.CSSProperties, key: number) {
  const parts = text.split(/(\{\{[^}]+\}\})/)
  return (
    <p key={key} className={className} style={style}>
      {parts.map((part, index) => {
        if (part.startsWith('{{') && part.endsWith('}}')) {
          const content = part.slice(2, -2)
          return (
            <span key={index} className="text-sky-400 font-medium not-italic">
              {content}
            </span>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </p>
  )
}

function CtaButtonComponent({
  cta,
  variant,
  onClick,
}: {
  cta: CtaButton
  variant: 'primary' | 'secondary'
  onClick?: () => void
}) {
  const baseClasses =
    'inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950'

  const variantClasses =
    variant === 'primary'
      ? 'bg-sky-500 text-white hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98]'
      : 'bg-zinc-800/80 border border-zinc-600 text-zinc-200 hover:bg-zinc-700/80 hover:border-zinc-500 hover:text-white active:scale-[0.98]'

  const handleClick = () => {
    onClick?.()
    if (cta.external) {
      window.open(cta.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses}`}
      style={fontHeading}
    >
      {cta.label}
    </button>
  )
}

function Divider() {
  return (
    <div className={contentWidth}>
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </div>
  )
}

function ScrollIndicator({ label }: { label: string }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-700">
      <span
        className="text-xs tracking-[0.2em] uppercase text-zinc-500"
        style={fontHeading}
      >
        {label}
      </span>
      <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
    </div>
  )
}

export interface HeroAndInflectionPointProps {
  conference: Conference
  hero: Hero
  about: About
  manifesto: Manifesto
  onRegisterClick?: () => void
  onViewProgramClick?: () => void
}

export function HeroAndInflectionPoint({
  conference,
  hero,
  about,
  manifesto,
  onRegisterClick,
  onViewProgramClick,
}: HeroAndInflectionPointProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Check if image is already cached/loaded on mount
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setImageLoaded(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Preload background image */}
      <img
        ref={imgRef}
        src={hero.backgroundImageUrl}
        alt=""
        className="hidden"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[100svh] md:min-h-[85vh] flex flex-col items-center justify-center"
        role="img"
        aria-label={hero.backgroundAlt}
      >
        {/* Background Image */}
        <div
          className={`hero-background absolute inset-0 bg-no-repeat transition-opacity duration-1000 ${
            imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${hero.backgroundImageUrl})`,
            backgroundPosition: '52% 35%',
          }}
        />

        {/* Fallback gradient if image fails */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900" />
        )}

        {/* Gradient Overlay - strong at top for nav, smooth blend to about */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.5) 15%, rgba(9,9,11,0.4) 50%, rgba(9,9,11,0.55) 70%, rgba(9,9,11,0.75) 85%, rgb(24,24,27) 100%)'
          }}
        />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Hero Content */}
        <div className={`relative z-10 text-center ${contentWidth}`}>
          {/* Conference Label */}
          <p
            className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8 animate-fade-in-up"
            style={fontHeading}
          >
            {conference.label}
          </p>

          {/* Conference Name */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2 animate-fade-in-up animation-delay-100"
            style={fontHeading}
          >
            {conference.nameParts.map((part, index) => (
              <span
                key={index}
                className={part.accent ? 'text-sky-400' : 'text-white'}
              >
                {part.text}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-400 font-light italic mb-8 animate-fade-in-up animation-delay-200"
            style={fontBody}
          >
            {conference.tagline}
          </p>

          {/* Date & Location */}
          <p
            className="text-sm sm:text-base text-zinc-400 mb-12 animate-fade-in-up animation-delay-300"
            style={fontBody}
          >
            <span className="font-medium text-zinc-300">{conference.dateDisplay}</span>
            <span className="mx-3 text-zinc-600">|</span>
            <span>{conference.location}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <CtaButtonComponent
              cta={hero.primaryCta}
              variant="primary"
              onClick={onRegisterClick}
            />
            <CtaButtonComponent
              cta={hero.secondaryCta}
              variant="secondary"
              onClick={onViewProgramClick}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator label={hero.scrollHint} />
      </section>

      <Divider />

      {/* About Section */}
      <section className="bg-zinc-900/50 py-16" aria-labelledby="about-heading">
        <h2 id="about-heading" className="sr-only">Despre conferință</h2>
        <div className={contentWidth}>
          <p
            className="text-xl sm:text-2xl leading-relaxed text-zinc-300"
            style={fontBody}
          >
            {about.text}{' '}
            {about.highlights.map((segment, index) =>
              segment.highlighted ? (
                <span key={index} className="text-cyan-400 font-semibold">
                  {segment.text}
                </span>
              ) : (
                <span key={index}>{segment.text}</span>
              )
            )}
          </p>
        </div>
      </section>

      <Divider />

      {/* Manifesto Section */}
      <section className="py-24" aria-labelledby="manifesto-heading">
        <div className={contentWidth}>
          {/* Section Title - last word highlighted in secondary color */}
          <h2
            id="manifesto-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
            style={fontHeading}
          >
            {(() => {
              const words = manifesto.sectionTitle.split(' ')
              const lastWord = words.pop()
              return (
                <>
                  <span className="text-white">{words.join(' ')}</span>
                  <br />
                  <span className="text-cyan-400">{lastWord}</span>
                </>
              )
            })()}
          </h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left Column */}
            <div className="space-y-5">
              {manifesto.leftColumn.paragraphs.map((paragraph, index) =>
                renderStyledText(
                  paragraph,
                  'text-base sm:text-lg leading-relaxed text-zinc-400',
                  fontBody,
                  index
                )
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              {manifesto.rightColumn.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-lg leading-relaxed text-zinc-400 ${
                    manifesto.rightColumn.isItalic ? 'italic' : ''
                  }`}
                  style={fontBody}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-700 { animation-delay: 0.7s; }

        /* Responsive hero background */
        .hero-background {
          background-size: cover;
        }
        @media (min-width: 768px) {
          .hero-background {
            background-size: 200%;
          }
        }
      `}</style>
    </div>
  )
}
