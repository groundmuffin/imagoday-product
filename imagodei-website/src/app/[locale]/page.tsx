import { setRequestLocale } from 'next-intl/server'

type Params = Promise<{ locale: string }>

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section Placeholder */}
      <section
        id="hero"
        className="flex min-h-screen items-center justify-center bg-zinc-900"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-zinc-100 md:text-6xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Imago Dei 2.0
          </h1>
          <p
            className="mt-4 text-xl text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hero Section Placeholder
          </p>
        </div>
      </section>

      {/* Speakers Section Placeholder */}
      <section
        id="speakers"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-800"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Speakers
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #speakers section placeholder
          </p>
        </div>
      </section>

      {/* Program Section Placeholder */}
      <section
        id="program"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-900"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Program
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #program section placeholder
          </p>
        </div>
      </section>

      {/* Venue Section Placeholder */}
      <section
        id="venue"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-800"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Venue
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #venue section placeholder
          </p>
        </div>
      </section>

      {/* Partners Section Placeholder */}
      <section
        id="partners"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-900"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Partners
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #partners section placeholder
          </p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section
        id="contact"
        className="flex min-h-[50vh] items-center justify-center bg-zinc-800"
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-zinc-100 md:text-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Contact
          </h2>
          <p
            className="mt-2 text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            #contact section placeholder
          </p>
        </div>
      </section>
    </div>
  )
}
