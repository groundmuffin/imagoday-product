'use client'

import { useEffect } from 'react'

const LUMA_EVENT_ID = 'evt-A4nq0AWg6H4n9eA'
const LUMA_EVENT_URL = `https://lu.ma/event/${LUMA_EVENT_ID}`

interface RegisterButtonProps {
  label: string
  variant?: 'primary' | 'nav' | 'mobile'
  className?: string
}

export function RegisterButton({ label, variant = 'primary', className = '' }: RegisterButtonProps) {
  useEffect(() => {
    // Load Luma checkout script if not already loaded
    if (!document.getElementById('luma-checkout')) {
      const script = document.createElement('script')
      script.id = 'luma-checkout'
      script.src = 'https://embed.lu.ma/checkout-button.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const baseStyles = {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#DFC938',
    color: '#0F1F2A',
  }

  const variantClasses = {
    primary: 'inline-block rounded-full px-10 py-4 text-lg font-semibold transition-all hover:scale-105',
    nav: 'rounded-full px-5 py-2 text-sm font-semibold transition-all backdrop-blur-sm',
    mobile: 'block w-full rounded-full py-3 text-center text-base font-semibold transition-colors',
  }

  return (
    <a
      href={LUMA_EVENT_URL}
      data-luma-action="checkout"
      data-luma-event-id={LUMA_EVENT_ID}
      className={`${variantClasses[variant]} ${className}`}
      style={baseStyles}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#E8D856'
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 0 30px rgba(245, 184, 46, 0.4)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#DFC938'
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = 'none'
        }
      }}
    >
      {label}
    </a>
  )
}
