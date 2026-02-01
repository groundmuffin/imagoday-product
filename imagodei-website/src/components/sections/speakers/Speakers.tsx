import { SpeakerCard } from './SpeakerCard'

interface Speaker {
  id: string
  name: string
  title: string
  affiliation: string
  expertise: string
  photo: string
  alterPhoto: string
  bio: string
  linkedIn?: string
  website?: string
}

interface SpeakersProps {
  title: string
  subtitle: string
  description: string
  speakers: Speaker[]
}

export function Speakers({ title, subtitle, description, speakers }: SpeakersProps) {
  return (
    <section
      id="speakers"
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
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 184, 46, 0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(58, 90, 90, 0.25) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0',
            }}
          >
            {title}
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#F5B82E',
            }}
          >
            {subtitle}
          </p>
          <p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(245, 240, 224, 0.85)',
            }}
          >
            {description}
          </p>
          <div
            className="mx-auto mt-6 h-1 w-24 rounded-full"
            style={{
              background: 'linear-gradient(to right, #2A4A4A, #F5B82E)',
            }}
          />
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              title={speaker.title}
              affiliation={speaker.affiliation}
              expertise={speaker.expertise}
              photo={speaker.photo}
              alterPhoto={speaker.alterPhoto}
              bio={speaker.bio}
              linkedIn={speaker.linkedIn}
              website={speaker.website}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
