'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SwipeableCardsProps {
  images: {
    src: string
    alt: string
  }[]
}

export function SwipeableCards({ images }: SwipeableCardsProps) {
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
    <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto">
      {/* Card stack */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px]">
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
          {images.map((image, index) => (
            <SwiperSlide key={image.src} className="rounded-2xl overflow-hidden">
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl select-none"
                style={{
                  border: '2px solid rgba(223, 201, 56, 0.2)',
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
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(15, 31, 42, 0.6) 0%, transparent 50%)',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Counter and controls */}
      <div className="flex items-center justify-between mt-6 px-2">
        {/* Back button */}
        <button
          onClick={goBack}
          disabled={currentIndex === 0}
          className="p-3 rounded-full transition-all disabled:opacity-30"
          style={{
            backgroundColor: 'rgba(150, 241, 217, 0.5)',
            color: '#F5F0E0',
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Counter */}
        <div
          className="px-4 py-2 rounded-full text-sm"
          style={{
            backgroundColor: 'rgba(15, 31, 42, 0.7)',
            color: '#F5F0E0',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* Forward button */}
        <button
          onClick={goForward}
          disabled={currentIndex === images.length - 1}
          className="p-3 rounded-full transition-all disabled:opacity-30"
          style={{
            backgroundColor: 'rgba(223, 201, 56, 0.3)',
            color: '#DFC938',
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Swipe hint */}
      <p
        className="text-center mt-4 text-sm"
        style={{
          color: 'rgba(245, 240, 224, 0.5)',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Swipe or use arrows
      </p>
    </div>
  )
}
