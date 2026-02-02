import { SwipeableCards } from './SwipeableCards'

interface WhyParticipateProps {
  title: string
  paragraphs: string[]
  images?: {
    src: string
    alt: string
  }[]
}

export function WhyParticipate({ title, paragraphs, images }: WhyParticipateProps) {
  return (
    <section
      id="why-participate"
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#0F1F2A' }}
    >
      {/* Background blur accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(150, 241, 217, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(223, 201, 56, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
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
              background: 'linear-gradient(to right, #96F1D9, #DFC938)',
            }}
          />
        </div>

        {/* Content Grid - Text and Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left order-last md:order-first">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(245, 240, 224, 0.85)',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Swipeable Cards */}
          {images && images.length > 0 && (
            <div className="order-first md:order-last flex justify-center">
              <SwipeableCards images={images} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
