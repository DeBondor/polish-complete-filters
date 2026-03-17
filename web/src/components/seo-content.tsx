import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { REPO_URL, SUBSCRIBE_URL, useI18n } from '@/lib/i18n'
import { ExternalLink, Github, ShieldCheck, Radar, TriangleAlert } from 'lucide-react'

const featureIcons = [ShieldCheck, Radar, TriangleAlert]

export function SeoContent() {
  const { t } = useI18n()

  return (
    <section
      aria-labelledby="seo-content-title"
      className="border-t border-border/50 bg-linear-to-b from-background via-background to-card/60 px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 id="seo-content-title" className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.seo.title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            {t.seo.intro}
          </p>
        </div>

        <section aria-labelledby="features-title" className="space-y-5">
          <h3 id="features-title" className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t.seo.featureTitle}
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {t.seo.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? ShieldCheck
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm shadow-black/10"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-border/60 bg-card/70 p-6">
            <h3 className="text-xl font-semibold text-foreground">{t.seo.whyTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {t.seo.whyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card/70 p-6">
            <h3 className="text-xl font-semibold text-foreground">{t.seo.supportedTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t.seo.supportedDescription}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.seo.supportedBlockers.map((blocker) => (
                <span
                  key={blocker}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground"
                >
                  {blocker}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby="faq-title" className="space-y-4">
          <div>
            <h3 id="faq-title" className="text-2xl font-semibold text-foreground">
              {t.seo.faqTitle}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.seo.faqIntro}</p>
          </div>

          <Accordion type="multiple" defaultValue={[]} className="space-y-3">
            {t.seo.faq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-border/60 bg-card/80 px-5"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-card to-card p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-display font-bold text-foreground">{t.seo.ctaTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {t.seo.ctaDescription}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href={SUBSCRIBE_URL}>
                  <ExternalLink className="mr-1 h-4 w-4" />
                  {t.seo.ctaPrimary}
                </a>
              </Button>
              <Button variant="outline" asChild className="font-semibold bg-card/50">
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  {t.seo.ctaSecondary}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
