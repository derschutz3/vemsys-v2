import { siteContent } from "@/content/siteContent"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"

export function Process() {
  return (
    <Section
      id="processo"
      eyebrow="COMO TRABALHAMOS"
      title="Processo simples, visível e sem ruído"
      className="py-16 sm:py-20"
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent sm:block" />
        <div className="space-y-4">
          {siteContent.process.map((step, idx) => (
            <Reveal key={step.title} delayMs={80 + idx * 80}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50/70 sm:pl-14">
                <div className="absolute left-0 top-0 hidden h-full w-1 bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--accent-2)] to-transparent opacity-0 transition group-hover:opacity-100 sm:block" />
                <div className="absolute left-4 top-7 hidden h-3 w-3 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_6px_rgba(0,120,255,0.12)] sm:block" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="font-display text-xl font-extrabold tracking-tight text-slate-950">
                      {step.title}
                    </div>
                    <div className="mt-2 max-w-2xl text-sm text-slate-700 sm:text-base">
                      {step.text}
                    </div>
                  </div>
                  <div className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-600">
                    Etapa {idx + 1}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

