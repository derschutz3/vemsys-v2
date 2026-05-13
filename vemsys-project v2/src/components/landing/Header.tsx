import { cn } from "@/lib/utils"
import { siteContent } from "@/content/siteContent"
import { Menu, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

type NavItem = { id: string; label: string }

export function Header({ onCta }: { onCta: () => void }) {
  const items: NavItem[] = useMemo(
    () => [
      { id: "servicos", label: "Serviços" },
      { id: "solucoes", label: "Diferenciais" },
      { id: "processo", label: "Processo" },
      { id: "cases", label: "Cases" },
      { id: "depoimentos", label: "Depoimentos" },
      { id: "faq", label: "FAQ" },
      { id: "contato", label: "Contato" },
    ],
    [],
  )

  const [active, setActive] = useState<string>("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.08, 0.2, 0.35] },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/35 bg-white/70 backdrop-blur-md shadow-[0_24px_80px_rgba(2,20,60,0.14)]">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
            <a
              href="#topo"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="group inline-flex items-center gap-3"
              aria-label="Voltar ao topo"
            >
              <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(0,80,255,0.25)]">
                <img
                  src="/logo.png"
                  alt={siteContent.brand.name}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-xl tracking-tight text-slate-950">
                {siteContent.brand.name}
              </span>
              <span className="hidden text-xs font-semibold tracking-[0.18em] text-slate-500 sm:inline">
                {siteContent.brand.tagline}
              </span>
              <span className="ml-1 h-[2px] w-10 origin-left scale-x-0 rounded bg-[color:var(--accent)] transition group-hover:scale-x-100" />
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition",
                    active === item.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-900/5",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onCta}
                className="magnetic hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-[0_10px_40px_rgba(0,80,255,0.35)] sm:inline-flex"
              >
                {siteContent.hero.primaryCta}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-[max-height,opacity] duration-300 lg:hidden",
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
          )}
          aria-hidden={!menuOpen}
        >
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={cn(
                    "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                    active === item.id
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                  )}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={onCta}
                className="col-span-2 rounded-xl bg-[color:var(--accent)] px-3 py-2 text-sm font-extrabold text-white shadow-sm"
              >
                {siteContent.hero.primaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
