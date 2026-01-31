import { X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { NavigationItem } from './AppShell'

interface MobileNavProps {
  isOpen: boolean
  navigationItems: NavigationItem[]
  registerUrl: string
  registerLabel: string
  currentLanguage: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
  onNavigate?: (href: string) => void
  onClose: () => void
}

export function MobileNav({
  isOpen,
  navigationItems,
  registerUrl,
  registerLabel,
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
        className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-zinc-50 p-6 shadow-xl dark:bg-zinc-900">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <span
            className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Menu
          </span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.(item.href)
              }}
              className={`text-lg font-medium transition-colors ${
                item.isActive
                  ? 'text-sky-600 dark:text-sky-400'
                  : 'text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="mb-8">
          <p
            className="mb-2 text-sm text-zinc-500 dark:text-zinc-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Language
          </p>
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>

        {/* Register Button */}
        <a
          href={registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-sky-600 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {registerLabel}
        </a>
      </div>
    </div>
  )
}
