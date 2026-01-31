'use client'

import type { Contact as ContactType } from '@/types'
import { Mail } from 'lucide-react'
import { useScrollAnimation, getStaggeredDelay } from '@/hooks/useScrollAnimation'

export interface ContactProps {
  /** The philosophical closing statement displayed prominently */
  closingQuote: string
  /** List of contact email addresses */
  contacts: ContactType[]
  /** Called when user clicks an email link (for analytics tracking) */
  onEmailClick?: (email: string) => void
}


export function Contact({ closingQuote, contacts, onEmailClick }: ContactProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 sm:min-h-[80vh] sm:py-32 lg:py-40"
      aria-labelledby="contact-heading"
      role="region"
    >
      {/* Subtle ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-sky-950/30 via-cyan-950/20 to-transparent blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Decorative Quotation Mark */}
        <div
          className={`mb-8 text-8xl font-bold leading-none text-sky-500/20 sm:mb-10 sm:text-9xl font-heading ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Closing Quote */}
        <blockquote className="mb-12 sm:mb-16">
          <p
            id="contact-heading"
            className={`text-xl font-medium italic leading-relaxed tracking-wide text-zinc-100 sm:text-2xl md:text-3xl lg:text-4xl font-heading ${
              isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
          >
            {closingQuote}
          </p>
        </blockquote>

        {/* Decorative Divider */}
        <div
          className={`mb-12 flex items-center gap-4 sm:mb-16 ${
            isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
          }`}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent sm:w-20" />
          <div className="h-1.5 w-1.5 rounded-full bg-sky-400/60" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent sm:w-20" />
        </div>

        {/* Contact Emails */}
        {contacts.length > 0 && (
          <nav
            className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
            aria-label="Contact email addresses"
          >
            {contacts.map((contact, index) => (
              <ContactLink
                key={contact.id}
                contact={contact}
                onClick={() => onEmailClick?.(contact.email)}
                delay={index}
                isVisible={isVisible}
              />
            ))}
          </nav>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

    </section>
  )
}

interface ContactLinkProps {
  contact: ContactType
  onClick?: () => void
  delay: number
  isVisible: boolean
}

function ContactLink({ contact, onClick, delay, isVisible }: ContactLinkProps) {
  return (
    <a
      href={`mailto:${contact.email}`}
      onClick={() => onClick?.()}
      className={`group flex items-center gap-3 rounded-full border border-zinc-700/50 bg-zinc-900/50 px-6 py-3 text-base font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-950/30 hover:text-white hover:shadow-lg hover:shadow-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:px-8 sm:py-4 sm:text-lg ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={isVisible ? getStaggeredDelay(delay + 3) : undefined}
    >
      <Mail className="h-4 w-4 text-sky-400 transition-colors duration-300 group-hover:text-sky-300 sm:h-5 sm:w-5" />
      <span className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-2">
        <span className="text-xs font-normal uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 sm:text-sm">
          {contact.label}
        </span>
        <span className="hidden text-zinc-600 sm:inline">·</span>
        <span>{contact.email}</span>
      </span>
    </a>
  )
}
