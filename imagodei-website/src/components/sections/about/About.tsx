import Image from 'next/image'
import { ReactNode } from 'react'

interface AboutProps {
  title: string
  paragraphs: string[]
  imageSrc?: string
  imageAlt?: string
}

const highlightedLinks: { text: string; url: string }[] = [
  { text: 'Institutul Evanghelic de Studii Religioase', url: 'https://studiireligioase.ro/' },
  { text: 'Evangelical Institute for Religious Studies', url: 'https://studiireligioase.ro/' },
  { text: 'Faithbase', url: 'https://faithbase.tech/' },
]

function parseTextWithLinks(text: string): ReactNode[] {
  const result: ReactNode[] = []
  let remainingText = text
  let key = 0

  while (remainingText.length > 0) {
    let earliestMatch: { index: number; link: typeof highlightedLinks[0] } | null = null

    for (const link of highlightedLinks) {
      const index = remainingText.indexOf(link.text)
      if (index !== -1 && (earliestMatch === null || index < earliestMatch.index)) {
        earliestMatch = { index, link }
      }
    }

    if (earliestMatch) {
      if (earliestMatch.index > 0) {
        result.push(remainingText.substring(0, earliestMatch.index))
      }
      result.push(
        <a
          key={key++}
          href={earliestMatch.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#DFC938] hover:underline"
        >
          {earliestMatch.link.text}
        </a>
      )
      remainingText = remainingText.substring(earliestMatch.index + earliestMatch.link.text.length)
    } else {
      result.push(remainingText)
      break
    }
  }

  return result
}

export function About({ title, paragraphs, imageSrc, imageAlt = '' }: AboutProps) {
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

        {/* Content with Image */}
        <div className={`${imageSrc ? 'flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 items-center' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-4 sm:space-y-6 order-last sm:order-first text-center sm:text-left ${imageSrc ? 'sm:flex-1 sm:min-w-0' : ''}`}>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(245, 240, 224, 0.85)',
                }}
              >
                {parseTextWithLinks(paragraph)}
              </p>
            ))}
          </div>

          {/* Image */}
          {imageSrc && (
            <div className="order-first sm:order-last flex-shrink-0 w-48 sm:w-1/3 md:w-2/5">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
