'use client'

import { X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { RegisterButton } from '@/components/ui/RegisterButton'
import type { NavigationItem } from './AppShell'

interface MobileNavProps {
  isOpen: boolean
  navigationItems: NavigationItem[]
  registerLabel: string
  languageLabel: string
  currentLanguage: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
  onNavigate?: (href: string) => void
  onClose: () => void
}

export function MobileNav({
  isOpen,
  navigationItems,
  registerLabel,
  languageLabel,
  currentLanguage,
  onLanguageChange,
  onNavigate,
  onClose,
}: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(15, 31, 42, 0.5)' }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className="absolute right-0 top-0 h-full w-full max-w-sm p-6 shadow-xl"
        style={{ backgroundColor: '#1A3A3A' }}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <span
            className="text-xl font-bold"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0'
            }}
          >
            Menu
          </span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors"
            style={{ color: 'rgba(245, 240, 224, 0.7)' }}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links - Inter font */}
        <nav className="mb-8 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.(item.href)
              }}
              className="text-lg font-medium transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: item.isActive ? '#DFC938' : 'rgba(245, 240, 224, 0.85)'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="mb-8">
          <p
            className="mb-3 text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(245, 240, 224, 0.5)'
            }}
          >
            {languageLabel}
          </p>
          <div className="inline-block">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>
        </div>

        {/* Register Button - Inter font */}
        <RegisterButton label={registerLabel} variant="mobile" />
      </div>
    </div>
  )
}
