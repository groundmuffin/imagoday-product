import Image from 'next/image'

interface VenueProps {
  title: string
  description: string
}

export function Venue({ title, description }: VenueProps) {
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
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/venue/episcopal-palace-interior.jpg"
              alt="Palatul Baroc din Oradea"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle overlay for better integration */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(26, 58, 58, 0.3) 0%, transparent 50%)',
              }}
            />
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
          </div>
        </div>
      </div>
    </section>
  )
}
