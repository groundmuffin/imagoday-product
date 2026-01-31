'use client'

import type { Partner } from '@/types'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface PartnerLogoProps {
  partner: Partner
}

export function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/50 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-sky-500/50 dark:hover:shadow-sky-900/20 sm:p-6"
      title={partner.fullName || partner.name}
    >
      <div className="relative flex h-16 w-full items-center justify-center sm:h-24">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      </div>

      <ExternalLink
        className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        strokeWidth={2}
      />
    </a>
  )
}
