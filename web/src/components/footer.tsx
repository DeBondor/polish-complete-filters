import { REPO_URL, useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/2" />
      <div className="relative px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
          <a
            href={REPO_URL}
            className="hover:text-foreground transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.github}
          </a>
        </div>
        <p className="mt-6 mx-auto max-w-2xl text-[11px] text-muted-foreground/50 leading-relaxed">
          {t.footer.note}
        </p>
      </div>
    </footer>
  )
}
