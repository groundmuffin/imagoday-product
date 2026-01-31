import { setRequestLocale, getTranslations } from 'next-intl/server'
import { HeroSection } from './HeroSection'
import { Objectives } from '@/components/sections/objectives'

type Params = Promise<{ locale: string }>

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('sections.hero')
  const tObjectives = await getTranslations('sections.objectives')

  // Get objectives section data from translations
  const objectivesData = {
    sectionTitle: tObjectives('title'),
    objectives: tObjectives.raw('items'),
  }

  // Get hero section data from translations
  const heroData = {
    conference: {
      label: t('conference.label'),
      nameParts: t.raw('conference.nameParts'),
      tagline: t('conference.tagline'),
      dateDisplay: t('conference.dateDisplay'),
      startDate: t('conference.startDate'),
      endDate: t('conference.endDate'),
      location: t('conference.location'),
    },
    hero: {
      backgroundImageUrl: t('hero.backgroundImageUrl'),
      backgroundAlt: t('hero.backgroundAlt'),
      scrollHint: t('hero.scrollHint'),
      primaryCta: t.raw('hero.primaryCta'),
      secondaryCta: t.raw('hero.secondaryCta'),
    },
    about: {
      text: t('about.text'),
      highlights: t.raw('about.highlights'),
    },
    manifesto: {
      sectionTitle: t('manifesto.sectionTitle'),
      leftColumn: t.raw('manifesto.leftColumn'),
      rightColumn: t.raw('manifesto.rightColumn'),
    },
  }

  return (
    <div>
      {/* Hero & Inflection Point Section */}
      <HeroSection data={heroData} />

      {/* Objectives Section */}
      <Objectives
        sectionTitle={objectivesData.sectionTitle}
        objectives={objectivesData.objectives}
      />

      {/* Speakers Section Placeholder */}
      <section
        id="speakers"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-800"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Speakers
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #speakers section placeholder
          </p>
        </div>
      </section>

      {/* Program Section Placeholder */}
      <section
        id="program"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-900"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Program
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #program section placeholder
          </p>
        </div>
      </section>

      {/* Venue Section Placeholder */}
      <section
        id="venue"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-800"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Venue
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #venue section placeholder
          </p>
        </div>
      </section>

      {/* Partners Section Placeholder */}
      <section
        id="partners"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-900"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Partners
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #partners section placeholder
          </p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section
        id="contact"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-800"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Contact
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #contact section placeholder
          </p>
        </div>
      </section>
    </div>
  )
}
