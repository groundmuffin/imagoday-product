interface ProgramProps {
  title: string
  subtitle: string
  items: string[]
}

export function Program({ title, subtitle, items }: ProgramProps) {
  return (
    <section
      id="program"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#0F1F2A' }}
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
        <div className="space-y-8">
          {/* Highlighted Question */}
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5B82E',
            }}
          >
            {subtitle}
          </h3>

          {/* Bullet List */}
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg md:text-xl leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(245, 240, 224, 0.85)',
                }}
              >
                <span
                  className="mt-2.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#F5B82E' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
