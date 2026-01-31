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
      className="flex items-center gap-1 rounded-full border border-zinc-200 p-1 dark:border-zinc-700"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <button
        onClick={() => onLanguageChange?.('en')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          currentLanguage === 'en'
            ? 'bg-cyan-600 text-white dark:bg-cyan-500'
            : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange?.('ro')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          currentLanguage === 'ro'
            ? 'bg-cyan-600 text-white dark:bg-cyan-500'
            : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
      >
        RO
      </button>
    </div>
  )
}
