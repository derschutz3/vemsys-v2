import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"
import { ReactNode, useRef } from "react"

export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { rootMargin: "-10% 0px -10% 0px", once: true })

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={{ ["--reveal-delay" as never]: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

