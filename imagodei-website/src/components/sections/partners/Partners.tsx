'use client'

import type { Partner, PartnershipPhilosophy, PartnershipBenefit, TargetAudience } from '@/types'
import { BenefitCard } from './BenefitCard'
import { PartnerLogo } from './PartnerLogo'
import { useScrollAnimation, getStaggeredDelay } from '@/hooks/useScrollAnimation'

export interface PartnersProps {
  partnershipPhilosophy: PartnershipPhilosophy
  partnershipBenefits: PartnershipBenefit[]
  targetAudience: TargetAudience
  partners: Partner[]
  translations: {
    organizedBy: string
    inPartnershipWith: string
  }
}


export function Partners({
  partnershipPhilosophy,
  partnershipBenefits,
  targetAudience,
  partners,
  translations,
}: PartnersProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const organizers = partners.filter((p) => p.category === 'organizer')
  const institutional = partners.filter((p) => p.category === 'institutional')
  const hasPartners = organizers.length > 0 || institutional.length > 0

  return (
    <section
      id="partners"
      ref={ref}
      className="relative overflow-hidden bg-zinc-100 py-20 sm:py-24 lg:py-32"
      aria-labelledby="partners-heading"
      role="region"
    >
      {/* Decorative gradient accent */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-100/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-cyan-200/30 via-sky-100/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Partnership Philosophy Section */}
        <header className="mb-16 sm:mb-20 lg:mb-24">
          <h2
            id="partners-heading"
            className={`mb-8 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl md:text-5xl font-heading ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {partnershipPhilosophy.headline}
          </h2>
          <div className="space-y-4">
            <p
              className={`text-lg leading-relaxed text-zinc-700 sm:text-xl ${
                isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              {partnershipPhilosophy.description}
            </p>
            <p
              className={`text-base leading-relaxed text-zinc-500 ${
                isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              {partnershipPhilosophy.extendedDescription}
            </p>
          </div>
        </header>

        {/* Benefits Row */}
        {partnershipBenefits.length > 0 && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {partnershipBenefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                  style={isVisible ? getStaggeredDelay(index + 3) : undefined}
                >
                  <BenefitCard benefit={benefit} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Target Audience Section - Editorial Style */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div
            className={`rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12 ${
              isVisible ? 'animate-fade-in-up animation-delay-700' : 'opacity-0'
            }`}
          >
            <h3 className="mb-6 text-xl font-bold text-zinc-900 sm:text-2xl font-heading">
              {targetAudience.headline}
            </h3>
            <p className="text-lg leading-relaxed text-zinc-600 sm:text-xl">
              {targetAudience.audiences.map((audience, index) => (
                <span key={index}>
                  <span className="text-zinc-900">{audience}</span>
                  {index < targetAudience.audiences.length - 1 && (
                    <span className="mx-3 text-sky-500">•</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Partners Row with Labels */}
        {hasPartners && (
          <div
            className={`grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4 ${
              isVisible ? 'animate-fade-in-up animation-delay-900' : 'opacity-0'
            }`}
          >
            {/* Organizers */}
            {organizers.length > 0 && (
              <div className="col-span-2 grid grid-cols-2 gap-5 sm:gap-6">
                <p className="col-span-2 mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
                  {translations.organizedBy}
                </p>
                {organizers.map((partner) => (
                  <PartnerLogo key={partner.id} partner={partner} />
                ))}
              </div>
            )}
            {/* Institutional Partners */}
            {institutional.length > 0 && (
              <div className="col-span-2 grid grid-cols-2 gap-5 sm:gap-6">
                <p className="col-span-2 mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
                  {translations.inPartnershipWith}
                </p>
                {institutional.map((partner) => (
                  <PartnerLogo key={partner.id} partner={partner} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

    </section>
  )
}
