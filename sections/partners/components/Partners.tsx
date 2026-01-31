import type { PartnersProps } from '../types'
import { BenefitCard } from './BenefitCard'
import { PartnerLogo } from './PartnerLogo'

/**
 * Partners — Partnership showcase section
 *
 * Design: Editorial aesthetic with strong typography hierarchy.
 * Presents the partnership value proposition, benefits,
 * target audience as refined inline list, and partner logos.
 *
 * Typography: Space Grotesk (headings), Inter (body)
 * Colors: sky (primary), cyan (secondary), zinc (neutral)
 * Background: Light section per design system
 */

const fontHeading = { fontFamily: "'Space Grotesk', sans-serif" }

export function Partners({
  partnershipPhilosophy,
  partnershipBenefits,
  targetAudience,
  partners,
}: PartnersProps) {
  return (
    <section
      className="relative overflow-hidden bg-zinc-50 py-20 dark:bg-zinc-900 sm:py-24 lg:py-32"
      aria-labelledby="partners-heading"
    >
      {/* Decorative gradient accent */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-100/20 to-transparent blur-3xl dark:from-sky-900/20 dark:via-cyan-900/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-cyan-200/30 via-sky-100/20 to-transparent blur-3xl dark:from-cyan-900/15 dark:via-sky-900/10" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Partnership Philosophy Section */}
        <header className="mb-16 sm:mb-20 lg:mb-24">
          <h2
            id="partners-heading"
            className="animate-fade-in-up mb-8 text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl"
            style={fontHeading}
          >
            {partnershipPhilosophy.headline}
          </h2>
          <div className="space-y-4">
            <p className="animation-delay-100 animate-fade-in-up text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-xl">
              La <strong className="font-semibold text-zinc-900 dark:text-white">Imago Dei 2.0</strong>, partenerii nu sunt simpli susținători financiari, ci actori implicați într-un dialog de substanță despre impactul inteligenței artificiale asupra umanității. Credem că responsabilitatea pentru viitorul tehnologiei și al societății se construiește împreună, prin discernământ, reflecție și colaborare între domenii.
            </p>
            <p className="animation-delay-200 animate-fade-in-up text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              Un parteneriat cu <strong className="font-semibold text-zinc-600 dark:text-zinc-300">Imago Dei 2.0</strong> înseamnă aliniere cu valori, acces la o comunitate de lideri și profesioniști preocupați de etică, sens și impact pe termen lung, precum și contribuția reală la modelarea unei conversații esențiale pentru anii care urmează.
            </p>
          </div>
        </header>

        {/* Benefits Row */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <BenefitCard benefit={benefit} />
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience Section - Editorial Style */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div
            className="animate-fade-in-up rounded-2xl border border-zinc-200 bg-white/80 p-8 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/50 sm:p-10 lg:p-12"
            style={{ animationDelay: '700ms' }}
          >
            <h3
              className="mb-6 text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl"
              style={fontHeading}
            >
              {targetAudience.headline}
            </h3>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
              {targetAudience.audiences.map((audience, index) => (
                <span key={index}>
                  <span className="text-zinc-900 dark:text-white">{audience}</span>
                  {index < targetAudience.audiences.length - 1 && (
                    <span className="mx-3 text-sky-400 dark:text-sky-500">•</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Partners Row with Labels */}
        <div
          className="animate-fade-in-up grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4"
          style={{ animationDelay: '900ms' }}
        >
          {/* Organizers */}
          <div className="col-span-2 grid grid-cols-2 gap-5 sm:gap-6">
            <p className="col-span-2 mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Organizat de
            </p>
            {partners
              .filter((p) => p.category === 'organizer')
              .map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
          </div>
          {/* Institutional Partners */}
          <div className="col-span-2 grid grid-cols-2 gap-5 sm:gap-6">
            <p className="col-span-2 mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              În parteneriat cu
            </p>
            {partners
              .filter((p) => p.category === 'institutional')
              .map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
