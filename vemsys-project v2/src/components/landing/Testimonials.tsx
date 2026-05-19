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
    if (reduced || !items.length) return

    const t = window.setInterval(() => {
      setIdx((v) => (v + 1) % items.length)
    }, 5200)

    return () => window.clearInterval(t)
  }, [items.length, reduced])

  const prev = () => setIdx((v) => (v - 1 + items.length) % items.length)
  const next = () => setIdx((v) => (v + 1) % items.length)

  return (
    <Section
      id="depoimentos"
      eyebrow="CONFIANÇA"
      title="O que as pessoas sentem quando a entrega é boa"
      className="py-12 sm:py-16"
    >
      <Reveal delayMs={80}>
        <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_28px_90px_rgba(2,20,60,0.08)] backdrop-blur-md sm:p-10">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.20),transparent_68%)] blur-2xl" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-sm">
                <Quote className="h-4 w-4 text-blue-300" />
                <span>Depoimentos</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
              <div className="flex min-h-[210px] flex-col justify-between">
                <div>
                  <div className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[40px]">
                    “{items[idx]?.quote}”
                  </div>

                  <div className="mt-7">
                    <div className="text-sm font-bold text-slate-800">
                      {items[idx]?.name}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      {items[idx]?.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#050816_0%,#071226_100%)] p-7 text-white shadow-[0_24px_80px_rgba(2,8,24,0.28)]">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-300">
                    Sinal de qualidade
                  </div>

                  <div className="mt-4 text-[17px] font-medium leading-relaxed text-slate-200">
                    Comunicação clara, entrega consistente e um visual que não parece “mais do mesmo”.
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-2">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIdx(i)}
                        className="h-2 rounded-full bg-white/20 transition hover:bg-white/40"
                        aria-label={`Ir para depoimento ${i + 1}`}
                        aria-current={idx === i}
                        style={{ opacity: idx === i ? 1 : 0.45 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}