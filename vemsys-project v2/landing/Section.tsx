import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id: string
  title?: string
  eyebrow?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {(title || eyebrow) && (
          <div className="mb-10 sm:mb-14">
            {eyebrow && (
              <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--accent)]">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

