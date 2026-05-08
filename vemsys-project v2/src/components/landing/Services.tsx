import { siteContent } from "@/content/siteContent"
import { Section } from "@/components/landing/Section"
import { Reveal } from "@/components/landing/Reveal"
import { BarChart3, Code2, Workflow, Wrench } from "lucide-react"

const icons = [Code2, Wrench, Workflow, BarChart3]

export function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="O QUE FAZEMOS"
      title="Serviços para construir, sustentar e acelerar"
      className="py-16 sm:py-20"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.services.map((s, idx) => {
          const Icon = icons[idx] ?? Code2
          return (
            <Reveal key={s.title} delayMs={80 + idx * 70}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(2,20,60,0.08)] transition hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(2,20,60,0.14)]">
                <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,120,255,0.40),transparent_65%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-bold text-white">
                      <Icon className="h-4 w-4" />
                      <span>{s.title}</span>
                    </div>
                    <p className="mt-4 text-base text-slate-700">{s.description}</p>
                  </div>
                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm sm:flex">
                    <span className="text-sm font-extrabold text-slate-500">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-slate-500">
                  <span className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-200/40 to-transparent" />
                  <span>VEMSYS</span>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

