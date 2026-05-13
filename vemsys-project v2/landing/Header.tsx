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

  const [active, setActive] = useState("")
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
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActive(visible.target.id)
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.35],
      },
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

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6 pt-5">
        <div className="rounded-[28px] border border-white/60 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex h-[82px] items-center justify-between px-6 lg:px-8">

            {/* LOGO */}
            <a
              href="#topo"
              onClick={(e) => {
                e.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <img
                  src="/logo-symbol.png"
                  alt="Vemsys"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <span className="text-[28px] font-bold leading-none tracking-[-0.05em] text-slate-950">
                Vemsys
              </span>
            </a>

            {/* MENU */}
            <nav
              className="hidden items-center gap-1 pl-4 lg:flex"
              aria-label="Navegação principal"
            >
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={cn(
                    "rounded-full px-5 py-3 text-[15px] font-medium tracking-[-0.01em] transition-all duration-200",
                    active === item.id
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA + MOBILE */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onCta}
                className="hidden rounded-full bg-slate-950 px-7 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] sm:inline-flex"
              >
                {siteContent.hero.primaryCta}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 transition hover:bg-slate-50 lg:hidden"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 lg:hidden",
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="grid gap-2 p-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                  active === item.id
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-800 hover:bg-slate-100",
                )}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                onCta()
              }}
              className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            >
              {siteContent.hero.primaryCta}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}