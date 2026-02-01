import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Hero } from '@/components/sections/hero'
import { Speakers } from '@/components/sections/speakers'
import { SectionDivider } from '@/components/ui/SectionDivider'

type Params = Promise<{ locale: string }>

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const tHero = await getTranslations('sections.hero')
  const tSpeakers = await getTranslations('sections.speakers')

  // Get hero section data from translations
  const heroData = {
    title: tHero('title'),
    subtitle: tHero('subtitle'),
    editionBadge: tHero('editionBadge'),
    dateWithDays: tHero('dateWithDays'),
    location: tHero('location'),
    introText: tHero('introText'),
    registerCta: tHero.raw('registerCta'),
  }

  // Get speakers section data from translations
  const speakersData = {
    title: tSpeakers('title'),
    subtitle: tSpeakers('subtitle'),
    speakers: tSpeakers.raw('items'),
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        editionBadge={heroData.editionBadge}
        dateWithDays={heroData.dateWithDays}
        location={heroData.location}
        introText={heroData.introText}
        registerCta={heroData.registerCta}
      />

      {/* Decorative Section Divider */}
      <SectionDivider />

      {/* Speakers Section */}
      <Speakers
        title={speakersData.title}
        subtitle={speakersData.subtitle}
        speakers={speakersData.speakers}
      />
    </div>
  )
}
