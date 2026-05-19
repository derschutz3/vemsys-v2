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
      className="py-12 sm:py-16"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {siteContent.cases.map((c, idx) => (
          <Reveal key={c.title} delayMs={80 + idx * 70}>
            <button
              type="button"
              onClick={() => setSelected(c)}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 text-left shadow-[0_24px_70px_rgba(2,20,60,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_32px_90px_rgba(37,99,235,0.12)]"
            >
              {/* Glow */}
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_68%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    {c.tag}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition duration-300 group-hover:border-blue-200 group-hover:text-blue-600">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-[26px] font-bold leading-tight tracking-tight text-slate-950">
                  {c.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {c.summary}
                </p>

                <div className="mt-6 rounded-[1.4rem] border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm font-semibold leading-relaxed text-slate-800 transition duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/60">
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
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            onClick={() => setSelected(null)}
          />

          <div className="relative flex w-full max-w-3xl max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-[0_50px_140px_rgba(0,0,0,0.38)]">
            
            {/* Glow */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative flex shrink-0 items-start justify-between gap-4 border-b border-slate-200/80 p-6 sm:p-8">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">
                  {selected.tag}
                </div>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950">
                  {selected.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="relative flex-1 overscroll-contain overflow-y-auto p-6 sm:p-8">
              <div className="rounded-[2rem] bg-[linear-gradient(180deg,#050816_0%,#071226_100%)] p-6 text-white shadow-[0_24px_80px_rgba(2,8,24,0.30)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-300">
                  Impacto gerado
                </div>

                <div className="mt-3 text-2xl font-bold leading-tight">
                  {selected.impact}
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-relaxed text-slate-700">
                {selected.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="O que foi feito"
                  text="Arquitetura, implementação e acabamento visual com foco em performance."
                />

                <InfoCard
                  title="Como medimos"
                  text="Velocidade, estabilidade e clareza do fluxo de conversão."
                />

                <InfoCard
                  title="O que melhora"
                  text="Tempo de resposta, retrabalho e ruído operacional."
                />

                <InfoCard
                  title="Próximo passo"
                  text="Ajustar para o seu cenário e priorizar o que gera ROI primeiro."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

function InfoCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
        {title}
      </div>

      <div className="mt-3 text-sm leading-relaxed text-slate-700">
        {text}
      </div>
    </div>
  )
}
