import { siteContent } from "@/content/siteContent"

export function Footer() {
  return (
    <footer className="pb-12 pt-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_70px_rgba(2,20,60,0.06)] sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight text-slate-950">
                {siteContent.brand.name}
              </div>
              <div className="mt-2 max-w-md text-sm text-slate-600">
                Desenvolvimento web, suporte e manutenção, automação de processos e análise de dados.
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                  Performance
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                  Confiabilidade
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                  Clareza
                </span>
              </div>
            </div>

            <div className="grid gap-2 text-sm text-slate-700">
              <a className="hover:text-slate-950" href="#servicos">
                Serviços
              </a>
              <a className="hover:text-slate-950" href="#cases">
                Cases
              </a>
              <a className="hover:text-slate-950" href="#contato">
                Contato
              </a>
              <a className="hover:text-slate-950" href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} {siteContent.brand.name}. Todos os direitos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
