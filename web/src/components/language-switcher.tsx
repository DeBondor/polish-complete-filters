import { Languages } from 'lucide-react'
import { type Language, useI18n } from '@/lib/i18n'

const options: Language[] = ['pl', 'en']

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n()

  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background/75 px-2.5 py-2 backdrop-blur-sm sm:rounded-full sm:px-2 sm:py-1.5">
      <span className="inline-flex items-center gap-1.5 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <Languages className="h-3.5 w-3.5" />
        {t.switcher.label}
      </span>

      <div className="flex items-center gap-1 rounded-full bg-muted/50 p-1">
        {options.map((option) => {
          const active = option === language
          const label = option === 'pl' ? t.switcher.pl : t.switcher.en

          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              aria-label={label}
              className={`min-w-12 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                active
                  ? 'bg-foreground text-background shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
