import { siteContent } from "@/content/siteContent"
import { ArrowRight, Sparkles } from "lucide-react"
import { HeroBackdropCanvas } from "@/components/landing/HeroBackdropCanvas"
import { Reveal } from "@/components/landing/Reveal"

export function Hero({
  onPrimaryCta,
  onSecondaryCta,
}: {
  onPrimaryCta: () => void
  onSecondaryCta: () => void
}) {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -inset-20 opacity-[0.65] blur-3xl">
          <div className="mesh-bg h-full w-full" />
        </div>
        <div className="absolute inset-0 opacity-[0.85]">
          <HeroBackdropCanvas />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(0,120,255,0.18),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(0,40,140,0.10),transparent_60%)]" />
        <div className="absolute inset-0 noise-overlay opacity-[0.5]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--accent)] text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="tracking-[0.14em]">TECNOLOGIA APLICADA</span>
                <span className="hidden text-slate-500 sm:inline">
                  para web, automação e dados
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <h1 className="mt-7 font-display text-4xl leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">
                <span className="block">{siteContent.hero.headline}</span>
                <span className="mt-3 block text-[color:var(--accent-2)]">
                  <span className="glow-text">Design</span> que chama atenção.
                  <span className="ml-2 inline-block align-middle text-slate-700">
                    <span className="kinetic-underline">Código</span> que sustenta.
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {siteContent.hero.subheadline}
              </p>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onPrimaryCta}
                  className="magnetic inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-[0_30px_90px_rgba(0,80,255,0.35)] transition hover:shadow-[0_40px_120px_rgba(0,80,255,0.45)]"
                >
                  {siteContent.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onSecondaryCta}
                  className="magnetic inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-900 backdrop-blur transition hover:bg-white"
                >
                  {siteContent.hero.secondaryCta}
                  <span className="pill-scan inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)] text-white">
                    <span className="block h-2 w-2 rounded-full bg-white" />
                  </span>
                </button>
              </div>
            </Reveal>

            <Reveal delayMs={340}>
              <div className="mt-8 flex flex-wrap gap-2">
                {siteContent.hero.proof.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-slate-200 bg-white/65 px-3 py-2 text-xs font-semibold text-slate-700 backdrop-blur"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={180} className="lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_25%,rgba(0,120,255,0.35),transparent_60%),radial-gradient(circle_at_80%_55%,rgba(0,40,140,0.22),transparent_55%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/40 bg-white/60 p-6 shadow-[0_24px_80px_rgba(2,20,60,0.18)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                    SISTEMA EM TEMPO REAL
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.20)]" />
                </div>

                <div className="mt-6 grid gap-3">
                  <Metric
                    label="Tempo para publicar"
                    value="minutos"
                    hint="Deploy e evolução contínua"
                  />
                  <Metric
                    label="Rotinas automatizadas"
                    value="menos atrito"
                    hint="Processos repetitivos viram fluxo"
                  />
                  <Metric
                    label="Decisão com dados"
                    value="claridade"
                    hint="KPIs, painéis e direção"
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white">
                  <div className="text-xs font-semibold tracking-[0.2em] text-white/70">
                    PRÓXIMO PASSO
                  </div>
                  <div className="mt-2 text-lg font-extrabold">
                    Transformar o seu “agora” no seu melhor “depois”.
                  </div>
                  <div className="mt-3 text-sm text-white/75">
                    Resumo rápido do cenário e objetivo. A Vemsys cuida do resto.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-16 h-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-x-0 top-6 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
        <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
      </div>
    </section>
  )
}

function Metric({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur transition hover:bg-white">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[color:var(--accent)] opacity-0 blur-2xl transition group-hover:opacity-20" />
      <div className="text-xs font-semibold tracking-[0.22em] text-slate-500">{label}</div>
      <div className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{hint}</div>
    </div>
  )
}

