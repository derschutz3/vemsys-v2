import { siteContent } from "@/content/siteContent"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [open, setOpen] = useState<string | null>(siteContent.faq[0]?.q ?? null)

  return (
    <Section
      id="faq"
      eyebrow="DÚVIDAS"
      title="FAQ direto ao ponto"
      className="py-16 sm:py-20"
    >
      <div className="grid gap-4">
        {siteContent.faq.map((item, idx) => {
          const isOpen = open === item.q
          return (
            <Reveal key={item.q} delayMs={60 + idx * 60}>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-950">{item.q}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900">
                    <ChevronDown
                      className="h-5 w-5 transition"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-5 text-sm leading-relaxed text-slate-700">
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

