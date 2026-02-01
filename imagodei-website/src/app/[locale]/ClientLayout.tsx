'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { AppShell } from '@/components/shell'

interface ClientLayoutProps {
  children: React.ReactNode
  locale: 'ro' | 'en'
}

export function ClientLayout({ children, locale }: ClientLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()

  const navigationItems = [
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.speakers'), href: '#speakers' },
    { label: t('navigation.venue'), href: '#venue' },
  ]

  const handleLanguageChange = (newLocale: 'en' | 'ro') => {
    // Replace the locale in the current path
    const currentPath = pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${currentPath || '/'}`)
  }

  const handleNavigate = (href: string) => {
    if (href === '#') {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      registerUrl="https://register.imagodei20.org"
      registerLabel={t('actions.register')}
      languageLabel={t('actions.language')}
      logoText="Imago Dei 2.0"
      currentLanguage={locale}
      onLanguageChange={handleLanguageChange}
      onNavigate={handleNavigate}
    >
      {children}
    </AppShell>
  )
}
