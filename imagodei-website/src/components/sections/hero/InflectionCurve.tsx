'use client'

import { useEffect, useState } from 'react'

interface InflectionCurveProps {
  className?: string
}

export function InflectionCurve({ className = '' }: InflectionCurveProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = window.innerHeight * 0.5
      const progress = Math.min(scrollTop / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animate the curve path based on scroll
  const animatedY = 120 + (scrollProgress * 30)
  const animatedControlY = 80 - (scrollProgress * 20)

  return (
    <svg
      viewBox="0 0 400 200"
      className={`w-full max-w-md ${className}`}
      style={{
        opacity: 0.2 + (scrollProgress * 0.15),
        transform: `translateY(${scrollProgress * -10}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <defs>
        <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#96F1D9" />
          <stop offset="30%" stopColor="#96F1D9" />
          <stop offset="50%" stopColor="#DFC938" />
          <stop offset="70%" stopColor="#E8D856" />
          <stop offset="100%" stopColor="#DFC938" />
        </linearGradient>
        <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#96F1D9" />
          <stop offset="50%" stopColor="#DFC938" />
          <stop offset="100%" stopColor="#96F1D9" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background swirl accents */}
      <path
        d={`M 0 150
            Q 50 100, 100 130
            Q 150 160, 200 100`}
        fill="none"
        stroke="#96F1D9"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d={`M 200 100
            Q 250 40, 300 70
            Q 350 100, 400 50`}
        fill="none"
        stroke="#96F1D9"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Main S-curve representing inflection point */}
      <path
        d={`M 20 ${animatedY}
            Q 100 ${animatedControlY}, 200 100
            Q 300 ${200 - animatedControlY}, 380 ${200 - animatedY}`}
        fill="none"
        stroke="url(#curveGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Secondary parallel curve */}
      <path
        d={`M 30 ${animatedY + 15}
            Q 105 ${animatedControlY + 10}, 200 108
            Q 295 ${200 - animatedControlY - 10}, 370 ${200 - animatedY - 15}`}
        fill="none"
        stroke="url(#curveGradient2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Inflection point marker with glow */}
      <circle
        cx="200"
        cy="100"
        r="8"
        fill="#DFC938"
        filter="url(#glow)"
        style={{
          opacity: 0.7 + (scrollProgress * 0.3),
        }}
      />
      <circle
        cx="200"
        cy="100"
        r="4"
        fill="#F5F0E0"
        style={{
          opacity: 0.9,
        }}
      />

      {/* Small accent dots along the curve */}
      <circle cx="80" cy={animatedControlY + 30} r="2" fill="#DFC938" opacity="0.4" />
      <circle cx="140" cy={animatedControlY + 5} r="1.5" fill="#E8D856" opacity="0.3" />
      <circle cx="260" cy={200 - animatedControlY - 5} r="1.5" fill="#E8D856" opacity="0.3" />
      <circle cx="320" cy={200 - animatedControlY - 30} r="2" fill="#DFC938" opacity="0.4" />
    </svg>
  )
}
