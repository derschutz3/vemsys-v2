import { siteContent } from "@/content/siteContent"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [open, setOpen] = useState<string | null>(siteContent.faq[0]?.q ?? null)

  return (
    <Section
      id="faq"
      eyebrow="DÚVIDAS"
      title="FAQ direto ao ponto"
      className="py-12 sm:py-16"
    >
      <div className="grid gap-4">
        {siteContent.faq.map((item, idx) => {
          const isOpen = open === item.q

          return (
            <Reveal key={item.q} delayMs={60 + idx * 60}>
              <div className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/85 shadow-[0_18px_60px_rgba(2,20,60,0.04)] backdrop-blur-md transition duration-300 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(37,99,235,0.08)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 ring-1 ring-blue-600/10">
                      <HelpCircle className="h-5 w-5" />
                    </span>

                    <span className="text-[16px] font-bold tracking-tight text-slate-950">
                      {item.q}
                    </span>
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition group-hover:border-blue-200">
                    <ChevronDown
                      className="h-5 w-5 transition duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600 sm:px-20">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}