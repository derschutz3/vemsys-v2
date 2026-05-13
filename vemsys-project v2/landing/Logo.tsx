import { cn } from "@/lib/utils"

export function LogoMark({
  className,
  title = "Vemsys",
}: {
  className?: string
  title?: string
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn("logo-mark", className)}
      role="img"
      aria-label={title}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 54 L94 192 L120 164 L146 192 L200 54" strokeWidth="18" />
        <path d="M52 54 L106 192" strokeWidth="8" opacity="0.65" />
        <path d="M188 54 L134 192" strokeWidth="8" opacity="0.65" />

        <path d="M58 78 H92" strokeWidth="10" />
        <path d="M58 78 H42" strokeWidth="6" />
        <path d="M42 78 V88" strokeWidth="6" />

        <path d="M182 78 H148" strokeWidth="10" />
        <path d="M182 78 H198" strokeWidth="6" />
        <path d="M198 78 V88" strokeWidth="6" />

        <path d="M74 116 H104" strokeWidth="10" />
        <path d="M74 116 H58" strokeWidth="6" />
        <path d="M58 116 V128" strokeWidth="6" />

        <path d="M166 116 H136" strokeWidth="10" />
        <path d="M166 116 H182" strokeWidth="6" />
        <path d="M182 116 V128" strokeWidth="6" />

        <path d="M120 78 V124" strokeWidth="6" opacity="0.7" />
        <path d="M120 104 H132" strokeWidth="6" opacity="0.7" />
        <path d="M132 104 V116" strokeWidth="6" opacity="0.7" />
      </g>

      <g fill="currentColor">
        <circle cx="42" cy="78" r="7.5" />
        <circle cx="198" cy="78" r="7.5" />
        <circle cx="58" cy="116" r="7.5" />
        <circle cx="182" cy="116" r="7.5" />
        <circle cx="120" cy="78" r="6.5" opacity="0.75" />
        <circle cx="132" cy="104" r="6.5" opacity="0.75" />
      </g>
    </svg>
  )
}
