'use client'

import { Menu } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { RegisterButton } from '@/components/ui/RegisterButton'
import type { NavigationItem } from './AppShell'

interface MainNavProps {
  navigationItems: NavigationItem[]
  registerLabel: string
  logoText: string
  currentLanguage: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
  onNavigate?: (href: string) => void
  isScrolled: boolean
  onMobileMenuToggle: () => void
}

export function MainNav({
  navigationItems,
  registerLabel,
  logoText,
  currentLanguage,
  onLanguageChange,
  onNavigate,
  isScrolled,
  onMobileMenuToggle,
}: MainNavProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl shadow-lg'
          : 'backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled
          ? 'rgba(26, 58, 58, 0.65)'
          : 'rgba(26, 58, 58, 0.2)',
        borderBottom: isScrolled
          ? '1px solid rgba(223, 201, 56, 0.1)'
          : '1px solid transparent',
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo - Source Serif 4 */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate?.('#')
            }}
            className="text-xl font-bold md:text-2xl transition-all duration-300"
            style={{
              fontFamily: "'Source Serif 4', serif",
              color: '#F5F0E0',
              textShadow: isScrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            {logoText}
          </a>

          {/* Desktop Navigation - Inter font */}
          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate?.(item.href)
                }}
                className="text-sm font-medium transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: item.isActive ? '#DFC938' : 'rgba(245, 240, 224, 0.7)',
                }}
                onMouseEnter={(e) => {
                  if (!item.isActive) {
                    e.currentTarget.style.color = '#F5F0E0'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.isActive) {
                    e.currentTarget.style.color = 'rgba(245, 240, 224, 0.7)'
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: Language + Register - Inter font */}
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            <RegisterButton label={registerLabel} variant="nav" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="rounded-lg p-2 md:hidden backdrop-blur-sm"
            style={{
              color: '#F5F0E0',
              backgroundColor: 'rgba(150, 241, 217, 0.3)',
            }}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}
