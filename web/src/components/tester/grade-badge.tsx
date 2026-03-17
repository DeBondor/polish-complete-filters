import type { GradeInfo } from '@/hooks/use-adblocker-tester'
import { useI18n } from '@/lib/i18n'

interface GradeBadgeProps {
  grade: GradeInfo
}

export function GradeBadge({ grade }: GradeBadgeProps) {
  const { t } = useI18n()

  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-4xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6 md:py-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
            {t.tester.gradeTitle}
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground sm:text-3xl">
            {t.tester.gradeLabels[grade.labelKey]}
          </h3>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0">
            {t.tester.gradeSummary(grade.pct)}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 rounded-2xl border border-border bg-card px-4 py-4 sm:px-5 md:justify-start">
          <div
            className={`inline-flex h-15 w-15 items-center justify-center rounded-xl border text-[1.7rem] font-display font-extrabold sm:h-16 sm:w-16 sm:text-3xl ${grade.colorClass}`}
          >
            {grade.grade}
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-foreground">{t.tester.finalScore}</div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-foreground">
              {grade.pct}%
            </div>
            <div className="text-xs text-muted-foreground">{t.tester.blockingEffectiveness}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
