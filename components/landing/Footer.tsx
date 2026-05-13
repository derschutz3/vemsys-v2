import { siteContent } from "@/content/siteContent"
import { ArrowUpRight, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/85 px-6 py-8 shadow-[0_24px_80px_rgba(2,20,60,0.06)] backdrop-blur-md sm:px-8">
          
          {/* Glow */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_70%)]" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            
            {/* Left */}
            <div className="max-w-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="/logo-symbol.png"
                    alt="Vemsys"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <div className="font-display text-3xl font-black tracking-tight text-slate-950">
                    Vemsys
                  </div>

                  <div className="text-sm text-slate-500">
                    Tecnologia que vira resultado.
                  </div>
                </div>
              </div>

              <div className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Desenvolvimento web, suporte e manutenção, automação de processos e análise de dados com foco em performance, clareza e crescimento.
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Performance", "Confiabilidade", "Clareza"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-3 text-sm">
              <a
                className="group inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-blue-600"
                href="#servicos"
              >
                Serviços
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                className="group inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-blue-600"
                href="#cases"
              >
                Cases
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                className="group inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-blue-600"
                href="#contato"
              >
                Contato
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                className="group inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-blue-600"
                href="https://wa.me/5521977617952"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                className="font-semibold text-slate-700 transition hover:text-blue-600"
                href={`mailto:${siteContent.contact.email}`}
              >
                {siteContent.contact.email}
              </a>
            </div>
          </div>

          <div className="relative mt-8 border-t border-slate-200/80 pt-6">
            <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} Vemsys. Todos os direitos reservados.
              </div>

              <div className="text-slate-400">
                Feito com estratégia, performance e código limpo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}