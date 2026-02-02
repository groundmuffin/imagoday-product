import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { WhyParticipate } from '@/components/sections/why-participate'
import { Speakers } from '@/components/sections/speakers'
import { Program } from '@/components/sections/program'
import { Venue } from '@/components/sections/venue'
import { Why } from '@/components/sections/why'
import { Footer } from '@/components/sections/footer'
import { SectionDivider } from '@/components/ui/SectionDivider'

type Params = Promise<{ locale: string }>

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const tHero = await getTranslations('sections.hero')
  const tAbout = await getTranslations('sections.about')
  const tWhyParticipate = await getTranslations('sections.whyParticipate')
  const tVenue = await getTranslations('sections.venue')
  const tSpeakers = await getTranslations('sections.speakers')
  const tProgram = await getTranslations('sections.program')
  const tFooter = await getTranslations('sections.footer')
  const tWhy = await getTranslations('sections.why')

  // Get hero section data from translations
  const heroData = {
    title: tHero('title'),
    subtitle: tHero('subtitle'),
    editionBadge: tHero('editionBadge'),
    dateWithDays: tHero('dateWithDays'),
    location: tHero('location'),
    introText: tHero('introText'),
    registerCta: {
      label: tHero('registerCta.label'),
    },
  }

  // Get about section data from translations
  const aboutData = {
    title: tAbout('title'),
    paragraphs: tAbout.raw('paragraphs'),
  }

  // Get why participate section data from translations
  const whyParticipateData = {
    title: tWhyParticipate('title'),
    paragraphs: tWhyParticipate.raw('paragraphs'),
    images: [
      { src: '/images/participate/ImagoDei2.0 - 0012.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0014.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0017.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0020.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0025.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0046.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0091.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0109.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0128.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0139.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0147.jpg', alt: 'Imago Dei Conference' },
      { src: '/images/participate/ImagoDei2.0 - 0182.jpg', alt: 'Imago Dei Conference' },
    ],
  }

  // Get program section data from translations
  const programData = {
    title: tProgram('title'),
    subtitle: tProgram('subtitle'),
    disclaimer: tProgram('disclaimer'),
    items: tProgram.raw('items'),
  }

  // Get venue section data from translations
  const venueData = {
    title: tVenue('title'),
    description: tVenue('description'),
    parkingInfo: tVenue('parkingInfo'),
    mapsLabel: tVenue('mapsLabel'),
    mapsUrl: 'https://maps.google.com/?q=Palatul+Baroc+Oradea',
    images: [
      { src: '/images/venue/venue1.jpg', alt: 'Palatul Baroc Oradea' },
      { src: '/images/venue/venue2.jpg', alt: 'Palatul Baroc Oradea' },
      { src: '/images/venue/venue3.jpg', alt: 'Palatul Baroc Oradea' },
      { src: '/images/venue/venue4.jpg', alt: 'Palatul Baroc Oradea' },
      { src: '/images/venue/venue5.jpg', alt: 'Palatul Baroc Oradea' },
      { src: '/images/venue/episcopal-palace-interior.jpg', alt: 'Palatul Baroc Interior' },
    ],
  }

  // Get speakers section data from translations
  const speakersData = {
    title: tSpeakers('title'),
    subtitle: tSpeakers('subtitle'),
    description: tSpeakers('description'),
    speakers: tSpeakers.raw('items'),
  }

  // Get why section data from translations
  const whyData = {
    title: tWhy('title'),
    description: tWhy('description'),
    pillars: tWhy.raw('pillars'),
  }

  // Get footer section data from translations
  const footerData = {
    organizersTitle: tFooter('organizersTitle'),
    partnersTitle: tFooter('partnersTitle'),
    copyright: tFooter('copyright'),
    organizers: [
      { name: 'Institutul Evanghelic', logo: '/logos/partners/institutul-evanghelic-logo.png', url: 'https://studiireligioase.ro/' },
      { name: 'Faithbase', logo: '/logos/partners/faith-base-logo.avif', url: 'https://faithbase.tech/' },
    ],
    partners: [
      { name: 'Episcopia', logo: '/logos/partners/episcopia-logo.png', url: 'https://varad.org/ro/' },
      { name: 'Makeit', logo: '/logos/partners/makeit.svg', url: 'https://makeitinoradea.ro/' },
    ],
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

      {/* About Section */}
      <About
        title={aboutData.title}
        paragraphs={aboutData.paragraphs}
        imageSrc="/images/about/about_teaser.png"
        imageAlt="Imago Dei Conference"
      />

      {/* Why Participate Section */}
      <WhyParticipate
        title={whyParticipateData.title}
        paragraphs={whyParticipateData.paragraphs}
        images={whyParticipateData.images}
      />

      {/* Speakers Section */}
      <Speakers
        title={speakersData.title}
        subtitle={speakersData.subtitle}
        description={speakersData.description}
        speakers={speakersData.speakers}
      />

      {/* Program Section */}
      <Program
        title={programData.title}
        subtitle={programData.subtitle}
        disclaimer={programData.disclaimer}
        items={programData.items}
      />

      {/* Venue Section */}
      <Venue
        title={venueData.title}
        description={venueData.description}
        parkingInfo={venueData.parkingInfo}
        mapsUrl={venueData.mapsUrl}
        mapsLabel={venueData.mapsLabel}
        images={venueData.images}
      />

      {/* Why Section */}
      <Why
        title={whyData.title}
        description={whyData.description}
        pillars={whyData.pillars}
      />

      {/* Footer */}
      <Footer
        organizersTitle={footerData.organizersTitle}
        partnersTitle={footerData.partnersTitle}
        organizers={footerData.organizers}
        partners={footerData.partners}
        copyright={footerData.copyright}
      />
    </div>
  )
}
