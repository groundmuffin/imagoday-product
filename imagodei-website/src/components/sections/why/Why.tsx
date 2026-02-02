interface WhyProps {
  title: string
  description: string
  pillars: {
    title: string
    description: string
  }[]
}

export function Why({ title, description, pillars }: WhyProps) {
  return (
    <section
      id="why"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#1A3A3A' }}
    >
      {/* Background blur accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(223, 201, 56, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0',
            }}
          >
            {title}
          </h2>
          <div
            className="mx-auto h-1 w-24 rounded-full mb-6 sm:mb-8"
            style={{
              background: 'linear-gradient(to right, #96F1D9, #DFC938)',
            }}
          />
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(245, 240, 224, 0.85)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl"
              style={{
                backgroundColor: 'rgba(150, 241, 217, 0.4)',
                border: '1px solid rgba(223, 201, 56, 0.2)',
              }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  color: '#DFC938',
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(245, 240, 224, 0.8)',
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
