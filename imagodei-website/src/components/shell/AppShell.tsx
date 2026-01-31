'use client'

import { useState, useEffect } from 'react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

export interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  registerUrl?: string
  registerLabel?: string
  logoText?: string
  currentLanguage?: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
  onNavigate?: (href: string) => void
}

export function AppShell({
  children,
  navigationItems,
  registerUrl = '#',
  registerLabel = 'Register',
  logoText = 'Imago Dei',
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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <MainNav
        navigationItems={navigationItems}
        registerUrl={registerUrl}
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
        registerUrl={registerUrl}
        registerLabel={registerLabel}
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        onNavigate={handleNavigate}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>{children}</main>
    </div>
  )
}
