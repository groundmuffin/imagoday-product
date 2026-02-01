'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface VenueSwiperProps {
  images: {
    src: string
    alt: string
  }[]
}

export function VenueSwiper({ images }: VenueSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex)
  }

  const goBack = () => {
    swiperRef?.slidePrev()
  }

  const goForward = () => {
    swiperRef?.slideNext()
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative w-full h-[350px] md:h-[400px]">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          cardsEffect={{
            slideShadows: true,
            perSlideOffset: 8,
            perSlideRotate: 2,
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.src} className="rounded-2xl overflow-hidden">
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl select-none"
                style={{
                  border: '2px solid rgba(245, 184, 46, 0.2)',
                  backgroundColor: '#1A3A3A',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(15, 31, 42, 0.4) 0%, transparent 40%)',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Counter and controls */}
      <div className="flex items-center justify-between mt-4 px-2">
        <button
          onClick={goBack}
          disabled={currentIndex === 0}
          className="p-2 rounded-full transition-all disabled:opacity-30"
          style={{
            backgroundColor: 'rgba(42, 74, 74, 0.5)',
            color: '#F5F0E0',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          className="px-3 py-1 rounded-full text-sm"
          style={{
            backgroundColor: 'rgba(15, 31, 42, 0.7)',
            color: '#F5F0E0',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={goForward}
          disabled={currentIndex === images.length - 1}
          className="p-2 rounded-full transition-all disabled:opacity-30"
          style={{
            backgroundColor: 'rgba(245, 184, 46, 0.3)',
            color: '#F5B82E',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
