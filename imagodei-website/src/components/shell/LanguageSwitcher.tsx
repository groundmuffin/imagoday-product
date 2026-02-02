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
      className="inline-flex items-center gap-1 rounded-full p-1"
      style={{
        fontFamily: "'Inter', sans-serif",
        border: '1px solid rgba(245, 240, 224, 0.2)',
        backgroundColor: 'rgba(15, 31, 42, 0.3)',
      }}
    >
      <button
        onClick={() => onLanguageChange?.('en')}
        className="rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95"
        style={{
          backgroundColor: currentLanguage === 'en' ? '#DFC938' : 'transparent',
          color: currentLanguage === 'en' ? '#0F1F2A' : 'rgba(245, 240, 224, 0.6)',
        }}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange?.('ro')}
        className="rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95"
        style={{
          backgroundColor: currentLanguage === 'ro' ? '#DFC938' : 'transparent',
          color: currentLanguage === 'ro' ? '#0F1F2A' : 'rgba(245, 240, 224, 0.6)',
        }}
      >
        RO
      </button>
    </div>
  )
}
