'use client'

import { useState, useEffect } from 'react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

export interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  registerLabel?: string
  languageLabel?: string
  logoText?: string
  currentLanguage?: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
  onNavigate?: (href: string) => void
}

export function AppShell({
  children,
  navigationItems,
  registerLabel = 'Register',
  languageLabel = 'Language',
  logoText = 'Imago Dei 2.0',
  currentLanguage = 'en',
  onLanguageChange,
  onNavigate,
}: AppShellProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (href: string) => {
    setIsMobileMenuOpen(false)
    onNavigate?.(href)
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#1A3A3A' }}
    >
      <ScrollProgress />

      <MainNav
        navigationItems={navigationItems}
        registerLabel={registerLabel}
        logoText={logoText}
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        onNavigate={handleNavigate}
        isScrolled={isScrolled}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <MobileNav
        isOpen={isMobileMenuOpen}
        navigationItems={navigationItems}
        registerLabel={registerLabel}
        languageLabel={languageLabel}
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        onNavigate={handleNavigate}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>{children}</main>
    </div>
  )
}
