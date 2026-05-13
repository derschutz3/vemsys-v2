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
      <div className="grid gap-6 md:grid-cols-2">
        {siteContent.services.map((s, idx) => {
          const Icon = icons[idx] ?? Code2

          return (
            <Reveal key={s.title} delayMs={80 + idx * 70}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-800/80 bg-[linear-gradient(180deg,#050816_0%,#071226_100%)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_58%)] before:opacity-0 before:transition before:duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_32px_100px_rgba(37,99,235,0.18)] hover:before:opacity-100">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_70%)] opacity-70" />
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="pt-2 font-display text-[22px] font-bold tracking-tight text-slate-100">
                    {s.title}
                  </h3>
                </div>

                <p className="relative mt-6 max-w-[92%] text-[15px] font-medium leading-relaxed text-slate-300">
                  {s.description}
                </p>

                <ul className="relative mt-7 space-y-3 text-sm font-semibold tracking-tight text-slate-200">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}