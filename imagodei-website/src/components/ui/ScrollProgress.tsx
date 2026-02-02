'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px]"
      style={{ backgroundColor: 'rgba(150, 241, 217, 0.5)' }}
    >
      <div
        className="h-full transition-all duration-75"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(to right, #96F1D9, #DFC938)',
        }}
      />
    </div>
  )
}
