interface AboutProps {
  title: string
  paragraphs: string[]
}

export function About({ title, paragraphs }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#1A3A3A' }}
    >
      {/* Background blur accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(42, 74, 74, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 184, 46, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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

        {/* Content */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(245, 240, 224, 0.85)',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
