import { SubscribeBanner } from '@/components/subscribe-banner'
import { TesterPage } from '@/components/tester/tester-page'
import { useSeo } from '@/hooks/use-seo'
import { useI18n } from '@/lib/i18n'

export default function App() {
  useSeo()
  const { language } = useI18n()

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground focus:ring-1 focus:ring-primary"
      >
        {language === 'pl' ? 'Przejdź do testera' : 'Skip to tester'}
      </a>

      {/* Ambient background glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/3 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/2 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-0 py-0 sm:px-4 sm:py-6 md:py-10 lg:py-14">
        <div className="w-full overflow-hidden border-y border-border/60 bg-card/80 backdrop-blur-sm sm:border sm:rounded-2xl">
          <header>
            <SubscribeBanner />
          </header>
          <main id="main-content">
            <TesterPage />
          </main>
        </div>
      </div>
    </div>
  )
}
