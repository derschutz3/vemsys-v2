import { siteContent } from "@/content/siteContent"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"

export function Process() {
  return (
    <Section
      id="processo"
      eyebrow="COMO TRABALHAMOS"
      title="Processo simples, visível e sem ruído"
      className="py-12 sm:py-16"
    >
      <div className="relative">
        <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-blue-500/0 via-blue-500/35 to-blue-500/0 sm:block" />

        <div className="space-y-5">
          {siteContent.process.map((step, idx) => (
            <Reveal key={step.title} delayMs={80 + idx * 80}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_rgba(2,20,60,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_28px_80px_rgba(37,99,235,0.10)] sm:pl-16">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.10),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute left-4 top-7 hidden h-5 w-5 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_0_8px_rgba(37,99,235,0.12)] sm:flex">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-600">
                        Etapa {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                      {step.text}
                    </p>
                  </div>

                  <div className="hidden text-[64px] font-black leading-none tracking-[-0.08em] text-slate-950/[0.04] sm:block">
                    {String(idx + 1).padStart(2, "0")}
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