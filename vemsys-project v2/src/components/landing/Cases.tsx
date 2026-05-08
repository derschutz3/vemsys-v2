import { siteContent, type CaseItem } from "@/content/siteContent"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"
import { ArrowUpRight, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Cases() {
  const [selected, setSelected] = useState<CaseItem | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selected])

  return (
    <Section
      id="cases"
      eyebrow="PROVAS"
      title="Cases e exemplos do que entregamos"
      className="py-16 sm:py-20"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {siteContent.cases.map((c, idx) => (
          <Reveal key={c.title} delayMs={80 + idx * 70}>
            <button
              type="button"
              onClick={() => setSelected(c)}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-[0_24px_70px_rgba(2,20,60,0.06)] transition hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(2,20,60,0.12)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,120,255,0.35),transparent_65%)] blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                    {c.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-slate-900" />
                </div>
                <div className="mt-4 font-display text-xl font-extrabold tracking-tight text-slate-950">
                  {c.title}
                </div>
                <div className="mt-3 text-sm text-slate-700">{c.summary}</div>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  {c.impact}
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes do case: ${selected.title}`}
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
              <div>
                <div className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                  {selected.tag}
                </div>
                <div className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950">
                  {selected.title}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="text-xs font-semibold tracking-[0.22em] text-white/70">
                  IMPACTO
                </div>
                <div className="mt-2 text-lg font-extrabold">{selected.impact}</div>
              </div>
              <div className="mt-5 text-base text-slate-700">{selected.summary}</div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <InfoCard title="O que foi feito" text="Arquitetura, implementação e acabamento visual com foco em performance." />
                <InfoCard title="Como medimos" text="Velocidade, estabilidade e clareza do fluxo de conversão." />
                <InfoCard title="O que melhora" text="Tempo de resposta, retrabalho e ruído operacional." />
                <InfoCard title="Próximo passo" text="Ajustar para o seu cenário e priorizar o que dá ROI primeiro." />
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold tracking-[0.22em] text-slate-500">{title}</div>
      <div className="mt-2 text-sm text-slate-700">{text}</div>
    </div>
  )
}

