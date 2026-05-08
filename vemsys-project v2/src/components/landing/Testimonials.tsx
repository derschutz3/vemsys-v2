import { siteContent } from "@/content/siteContent"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

export function Testimonials() {
  const reduced = usePrefersReducedMotion()
  const items = useMemo(() => siteContent.testimonials, [])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = window.setInterval(() => setIdx((v) => (v + 1) % items.length), 5200)
    return () => window.clearInterval(t)
  }, [items.length, reduced])

  const prev = () => setIdx((v) => (v - 1 + items.length) % items.length)
  const next = () => setIdx((v) => (v + 1) % items.length)

  return (
    <Section
      id="depoimentos"
      eyebrow="CONFIANÇA"
      title="O que as pessoas sentem quando a entrega é boa"
      className="py-16 sm:py-20"
    >
      <Reveal delayMs={80}>
        <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(2,20,60,0.08)] sm:p-10">
          <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,120,255,0.40),transparent_65%)] blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white">
                <Quote className="h-4 w-4" />
                <span>Depoimentos</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="min-h-[160px]">
                <div className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  “{items[idx]?.quote}”
                </div>
                <div className="mt-5 text-sm font-semibold text-slate-700">
                  {items[idx]?.name}
                </div>
                <div className="text-sm text-slate-500">{items[idx]?.role}</div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="text-xs font-semibold tracking-[0.22em] text-white/70">
                  SINAL DE QUALIDADE
                </div>
                <div className="mt-3 text-base text-white/85">
                  Comunicação clara, entrega consistente e um visual que não parece “mais do mesmo”.
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIdx(i)}
                      className="h-2 rounded-full bg-white/20 transition hover:bg-white/40"
                      aria-label={`Ir para depoimento ${i + 1}`}
                      aria-current={idx === i}
                      style={{ opacity: idx === i ? 1 : 0.55 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

