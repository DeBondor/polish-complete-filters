import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { REPO_URL, SUBSCRIBE_URL, useI18n } from '@/lib/i18n'
import { Shield, ExternalLink, Github } from 'lucide-react'

export function SubscribeBanner() {
  const { t } = useI18n()

  return (
    <div className="relative border-b border-border overflow-hidden gradient-border-bottom">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/6 via-transparent to-indigo-500/3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      
      <div className="relative px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-5 flex justify-center sm:justify-end">
          <LanguageSwitcher />
        </div>

        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
          {/* Logo with ambient glow */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse-glow" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/25 shadow-lg shadow-primary/10 sm:h-16 sm:w-16">
              <Shield className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h1 className="bg-linear-to-r from-foreground via-foreground to-foreground/50 bg-clip-text font-display text-[1.75rem] font-bold tracking-tight text-transparent sm:text-3xl">
              {t.banner.title}
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:max-w-md">
              {t.banner.description}
            </p>
          </div>
          
          <div className="grid w-full gap-3 sm:flex sm:w-auto sm:shrink-0 sm:flex-row">
            <Button
              asChild
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <a href={SUBSCRIBE_URL}>
                <ExternalLink className="h-4 w-4 mr-2" />
                {t.banner.addButton}
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto font-medium bg-card/50 backdrop-blur-sm border-border/80 hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                {t.banner.githubButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
