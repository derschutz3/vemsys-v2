import { siteContent } from "@/content/siteContent"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { Reveal } from "@/components/landing/Reveal"
import { Section } from "@/components/landing/Section"
import { AtSign, Send, Smartphone } from "lucide-react"
import { FormEvent, useMemo, useState } from "react"

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

const initial: FormState = { name: "", email: "", company: "", message: "" }

export function Contact() {
  const reduced = usePrefersReducedMotion()
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<"idle" | "ok">("idle")

  const whatsappDigits = useMemo(
    () => siteContent.contact.whatsappNumber.replace(/\D/g, ""),
    [],
  )
  const hasWhatsapp = whatsappDigits.length >= 10
  const whatsappLink = useMemo(() => {
    if (!hasWhatsapp) return ""
    const text = encodeURIComponent("Olá! Quero um orçamento com a Vemsys. Meu cenário é:")
    return `https://wa.me/${whatsappDigits}?text=${text}`
  }, [hasWhatsapp, whatsappDigits])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Orçamento — Vemsys")
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\nEmpresa: ${form.company}\n\nMensagem:\n${form.message}`,
    )
    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`
    setStatus("ok")
    setForm(initial)
    if (!reduced) window.setTimeout(() => setStatus("idle"), 4200)
  }

  return (
    <Section id="contato" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2.75rem] bg-slate-950 px-6 py-14 text-white sm:px-10">
        <div className="absolute inset-0">
          <div className="absolute -inset-32 opacity-80 blur-3xl">
            <div className="mesh-bg-dark h-full w-full" />
          </div>
          <div className="absolute inset-0 noise-overlay opacity-30" />
        </div>

        <div className="relative">
          <Reveal delayMs={40}>
            <div className="text-xs font-semibold tracking-[0.22em] text-white/70">
              CONTATO
            </div>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Vamos tirar do papel com estilo, velocidade e base técnica.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Quer detalhar melhor? Formulário que abre seu e-mail com tudo pronto. WhatsApp
              entra em breve.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal delayMs={140}>
              <div className="grid gap-3">
                {hasWhatsapp ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="magnetic flex items-center justify-between gap-4 rounded-3xl bg-white px-5 py-4 text-slate-950 shadow-[0_30px_90px_rgba(0,80,255,0.25)] transition hover:shadow-[0_40px_120px_rgba(0,80,255,0.35)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-white">
                        <Smartphone className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-extrabold">WhatsApp</div>
                        <div className="text-sm text-slate-600">{siteContent.contact.whatsappNumber}</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-extrabold text-white">
                      {siteContent.hero.primaryCta}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/15 bg-white/5 px-5 py-4 text-white/90 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Smartphone className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-extrabold">WhatsApp</div>
                        <div className="text-sm text-white/70">Em breve</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white/80">
                      Disponível em breve
                    </span>
                  </div>
                )}

                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="magnetic flex flex-col items-start justify-between gap-3 rounded-3xl border border-white/15 bg-white/5 px-5 py-4 text-white backdrop-blur transition hover:bg-white/8 sm:flex-row sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <AtSign className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-extrabold">E-mail</div>
                      <div className="text-sm text-white/70">{siteContent.contact.email}</div>
                    </div>
                  </div>
                  <span className="w-full break-words text-xs font-semibold tracking-[0.18em] text-white/70 sm:w-auto">
                    {siteContent.contact.availability}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={220}>
              <form onSubmit={onSubmit} className="rounded-[2.25rem] bg-white p-6 text-slate-950 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                    ORÇAMENTO
                  </div>
                  <div
                    className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-700"
                    style={{ opacity: status === "ok" ? 1 : 0, transition: "opacity 250ms ease" }}
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
                    label="Empresa (opcional)"
                    value={form.company}
                    onChange={(v) => setForm((s) => ({ ...s, company: v }))}
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-semibold tracking-[0.22em] text-slate-500">
                    Mensagem
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Conte rapidamente seu objetivo (site, sistema, automação, dados) e prazo desejado."
                      required
                      className="mt-2 h-28 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-950"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="magnetic mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white shadow-[0_24px_70px_rgba(2,20,60,0.18)] transition hover:shadow-[0_40px_120px_rgba(0,80,255,0.35)]"
                >
                  Enviar
                  <Send className="h-4 w-4" />
                </button>

                <div className="mt-4 text-xs text-slate-500">
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
    <label className="block text-xs font-semibold tracking-[0.22em] text-slate-500">
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-950"
      />
    </label>
  )
}
