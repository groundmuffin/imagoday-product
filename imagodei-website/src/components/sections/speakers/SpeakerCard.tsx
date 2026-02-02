'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SpeakerModal } from './SpeakerModal'

interface SpeakerCardProps {
  name: string
  title: string
  affiliation: string
  expertise: string
  photo: string
  alterPhoto: string
  bio: string
  linkedIn?: string
  website?: string
}

export function SpeakerCard({
  name,
  title,
  affiliation,
  expertise,
  photo,
  alterPhoto,
  bio,
  linkedIn,
  website,
}: SpeakerCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <article
        className="group p-4 rounded-lg cursor-pointer transition-colors"
        style={{
          backgroundColor: 'rgba(150, 241, 217, 0.3)',
          border: '1px solid rgba(223, 201, 56, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Photo - smaller square aspect */}
        <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden">
          {/* Alter photo (default) */}
          <Image
            src={alterPhoto}
            alt={name}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
          {/* Regular photo (on hover) */}
          <Image
            src={photo}
            alt={name}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>

        {/* Content - minimal */}
        <div className="text-center">
          <h3
            className="text-lg font-semibold"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0',
            }}
          >
            {name}
          </h3>
          <p
            className="text-sm mt-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#DFC938',
            }}
          >
            {title}
          </p>
        </div>
      </article>

      <SpeakerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        title={title}
        affiliation={affiliation}
        expertise={expertise}
        photo={photo}
        alterPhoto={alterPhoto}
        bio={bio}
        linkedIn={linkedIn}
        website={website}
      />
    </>
  )
}
