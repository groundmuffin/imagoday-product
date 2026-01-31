'use client'

import { Menu } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { NavigationItem } from './AppShell'

interface MainNavProps {
  navigationItems: NavigationItem[]
  registerUrl: string
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
  registerUrl,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate?.('#')
            }}
            className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-100 md:text-2xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {logoText}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate?.(item.href)
                }}
                className={`text-sm font-medium transition-colors ${
                  item.isActive
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: Language + Register */}
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {registerLabel}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}
