'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, Linkedin, Globe } from 'lucide-react'

interface SpeakerModalProps {
  isOpen: boolean
  onClose: () => void
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

export function SpeakerModal({
  isOpen,
  onClose,
  name,
  title,
  affiliation,
  expertise,
  photo,
  alterPhoto,
  bio,
  linkedIn,
  website,
}: SpeakerModalProps) {
  const [isImageHovered, setIsImageHovered] = useState(false)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(15, 31, 42, 0.9)' }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl"
        style={{
          backgroundColor: '#1A3A3A',
          border: '1px solid rgba(223, 201, 56, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - absolute positioned */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full transition-colors"
          style={{
            backgroundColor: 'rgba(150, 241, 217, 0.9)',
            color: '#F5F0E0',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(223, 201, 56, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(150, 241, 217, 0.9)'
          }}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row md:items-stretch">
          {/* Left - Photo */}
          <div
            className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:self-stretch flex-shrink-0"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <Image
              src={photo}
              alt={name}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isImageHovered ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <Image
              src={alterPhoto}
              alt={name}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isImageHovered ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 p-6 md:p-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{
                fontFamily: "'Source Serif 4', serif",
                color: '#F5F0E0',
              }}
            >
              {name}
            </h2>

            <p
              className="text-lg mb-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#DFC938',
              }}
            >
              {title}
            </p>

            <p
              className="text-base mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(245, 240, 224, 0.6)',
              }}
            >
              {affiliation}
            </p>

            {/* Expertise tag */}
            <div
              className="inline-block px-3 py-1 rounded-full text-xs mb-6"
              style={{
                backgroundColor: 'rgba(223, 201, 56, 0.15)',
                color: '#DFC938',
                border: '1px solid rgba(223, 201, 56, 0.3)',
              }}
            >
              {expertise}
            </div>

            {/* Bio */}
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(245, 240, 224, 0.8)',
              }}
            >
              {bio}
            </p>

            {/* Social links */}
            {(linkedIn || website) && (
              <div className="flex gap-4 pt-4 border-t" style={{ borderColor: 'rgba(223, 201, 56, 0.1)' }}>
                {linkedIn && (
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: 'rgba(245, 240, 224, 0.6)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#DFC938'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245, 240, 224, 0.6)'}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: 'rgba(245, 240, 224, 0.6)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#DFC938'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245, 240, 224, 0.6)'}
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
