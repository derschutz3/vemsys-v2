import { siteContent } from "@/content/siteContent"
import { Section } from "@/components/landing/Section"
import { Reveal } from "@/components/landing/Reveal"
import { BarChart3, Code2, Workflow, Wrench } from "lucide-react"

const icons = [Code2, Wrench, Workflow, BarChart3]

export function Services() {
  return (
    <Section
      id="servicos"
      className="bg-slate-50/70 py-16 sm:py-20"
    >
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[color:var(--accent)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          <span>O QUE FAZEMOS</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Serviços para construir, sustentar e acelerar
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {siteContent.services.map((s, idx) => {
          const Icon = icons[idx] ?? Code2
          return (
            <Reveal key={s.title} delayMs={80 + idx * 70}>
              <div className="group relative overflow-hidden rounded-[2.25rem] bg-slate-950 p-7 shadow-[0_30px_80px_rgba(2,20,60,0.25)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.38),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(29,78,216,0.25),transparent_60%)] opacity-90" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-white shadow-[0_14px_40px_rgba(0,80,255,0.35)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-white">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200">
                    {s.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-slate-200">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
