import { siteContent } from "@/content/siteContent"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"
import { AtSign, MessageCircle, Send } from "lucide-react"
import { FormEvent, useMemo, useState } from "react"

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

const initial: FormState = { name: "", email: "", company: "", message: "" }

const whatsappDigits = "5521977617952"
const whatsappDisplay = "(21) 97761-7952"

export function Contact() {
  const reduced = usePrefersReducedMotion()
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<"idle" | "ok">("idle")

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(
      "Olá! Quero um orçamento com a Vemsys. Meu cenário é:",
    )

    return `https://wa.me/${whatsappDigits}?text=${text}`
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent("Orçamento — Vemsys")
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\nEmpresa: ${form.company}\n\nMensagem:\n${form.message}`,
    )

    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`

    setStatus("ok")
    setForm(initial)

    if (!reduced) {
      window.setTimeout(() => setStatus("idle"), 4200)
    }
  }

  return (
    <Section id="contato" className="py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-800/70 bg-[linear-gradient(180deg,#071226_0%,#081938_100%)] px-6 py-12 text-white shadow-[0_30px_100px_rgba(2,8,24,0.28)] sm:px-10">
        <div className="absolute inset-0">
          <div className="absolute -inset-32 opacity-70 blur-3xl">
            <div className="mesh-bg-dark h-full w-full" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_58%)]" />
          <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
        </div>

        <div className="relative">
          <Reveal delayMs={40}>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-300">
              CONTATO
            </div>

            <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-[42px] sm:leading-[1.08]">
              Vamos tirar do papel com estilo, velocidade e base técnica.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              Quer detalhar melhor? Chama direto no WhatsApp ou envie os detalhes pelo formulário.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal delayMs={140}>
              <div className="grid gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 px-5 py-4 text-white shadow-[0_24px_80px_rgba(2,8,24,0.20)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-white/[0.14]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_14px_35px_rgba(37,99,235,0.25)]">
                      <MessageCircle className="h-5 w-5" />
                    </span>

                    <div>
                      <div className="text-sm font-extrabold">
                        WhatsApp Comercial
                      </div>

                      <div className="text-sm text-white/70">
                        {whatsappDisplay}
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-slate-950 transition group-hover:bg-blue-600 group-hover:text-white">
                    Chamar agora
                  </span>
                </a>

                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="magnetic group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-white/[0.10]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/10">
                      <AtSign className="h-5 w-5" />
                    </span>

                    <div>
                      <div className="text-sm font-extrabold">E-mail</div>

                      <div className="text-sm text-white/70">
                        {siteContent.contact.email}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold tracking-[0.18em] text-white/60">
                    {siteContent.contact.availability}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={220}>
              <form
                onSubmit={onSubmit}
                className="rounded-[2.25rem] border border-white/10 bg-white p-6 text-slate-950 shadow-[0_24px_80px_rgba(2,8,24,0.24)] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">
                    Orçamento
                  </div>

                  <div
                    className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-700"
                    style={{
                      opacity: status === "ok" ? 1 : 0,
                      transition: "opacity 250ms ease",
                    }}
                    role="status"
                    aria-live="polite"
                  >
                    Pronto. Abrimos seu e-mail.
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Field
                    label="Nome"
                    value={form.name}
                    onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                    placeholder="Seu nome"
                    required
                  />

                  <Field
                    label="E-mail"
                    value={form.email}
                    onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                    placeholder="voce@empresa.com"
                    required
                    type="email"
                  />
                </div>

                <div className="mt-3">
                  <Field
                    label="Empresa"
                    value={form.company}
                    onChange={(v) => setForm((s) => ({ ...s, company: v }))}
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    Mensagem
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Conte rapidamente seu objetivo: site, sistema, automação, dados e prazo desejado."
                      required
                      className="mt-2 h-28 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="magnetic mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white shadow-[0_24px_70px_rgba(2,20,60,0.18)] transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_40px_120px_rgba(37,99,235,0.35)]"
                >
                  Enviar orçamento
                  <Send className="h-4 w-4" />
                </button>

                <div className="mt-4 text-xs leading-relaxed text-slate-500">
                  Ao enviar, seu e-mail padrão será aberto com a mensagem preenchida.
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
  type?: string
}) {
  return (
    <label className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
      />
    </label>
  )
}