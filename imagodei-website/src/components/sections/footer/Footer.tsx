import Image from 'next/image'

interface Partner {
  name: string
  logo: string
  url?: string
}

interface FooterProps {
  organizersTitle: string
  partnersTitle: string
  organizers: Partner[]
  partners: Partner[]
  copyright: string
}

export function Footer({
  organizersTitle,
  partnersTitle,
  organizers,
  partners,
  copyright,
}: FooterProps) {
  return (
    <footer
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: '#0F1F2A' }}
    >
      {/* Background blur accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(150, 241, 217, 0.2) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(223, 201, 56, 0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Organizers Section */}
        <div className="mb-12">
          <h3
            className="text-xl md:text-2xl font-bold text-center mb-8"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#DFC938',
            }}
          >
            {organizersTitle}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {organizers.map((org) => (
              <a
                key={org.name}
                href={org.url || '#'}
                target={org.url ? '_blank' : undefined}
                rel={org.url ? 'noopener noreferrer' : undefined}
                className="relative h-16 md:h-20 w-auto transition-opacity hover:opacity-80"
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  height={80}
                  width={200}
                  className="h-full w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-auto h-px w-48 mb-12"
          style={{ backgroundColor: 'rgba(223, 201, 56, 0.2)' }}
        />

        {/* Partners Section */}
        <div className="mb-12">
          <h3
            className="text-lg md:text-xl font-bold text-center mb-8"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: 'rgba(245, 240, 224, 0.7)',
            }}
          >
            {partnersTitle}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url || '#'}
                target={partner.url ? '_blank' : undefined}
                rel={partner.url ? 'noopener noreferrer' : undefined}
                className="relative h-12 md:h-16 w-auto transition-opacity hover:opacity-80"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  height={64}
                  width={160}
                  className="h-full w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-sm pt-8 border-t"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(245, 240, 224, 0.4)',
            borderColor: 'rgba(223, 201, 56, 0.1)',
          }}
        >
          {copyright}
        </div>
      </div>
    </footer>
  )
}
