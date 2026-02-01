'use client'

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'ro'
  onLanguageChange?: (lang: 'en' | 'ro') => void
}

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className="flex items-center gap-1 rounded-full p-1"
      style={{
        fontFamily: "'Inter', sans-serif",
        border: '1px solid rgba(245, 240, 224, 0.2)'
      }}
    >
      <button
        onClick={() => onLanguageChange?.('en')}
        className="rounded-full px-3 py-1 text-sm font-medium transition-colors"
        style={{
          backgroundColor: currentLanguage === 'en' ? '#F5B82E' : 'transparent',
          color: currentLanguage === 'en' ? '#0F1F2A' : 'rgba(245, 240, 224, 0.6)',
        }}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange?.('ro')}
        className="rounded-full px-3 py-1 text-sm font-medium transition-colors"
        style={{
          backgroundColor: currentLanguage === 'ro' ? '#F5B82E' : 'transparent',
          color: currentLanguage === 'ro' ? '#0F1F2A' : 'rgba(245, 240, 224, 0.6)',
        }}
      >
        RO
      </button>
    </div>
  )
}
