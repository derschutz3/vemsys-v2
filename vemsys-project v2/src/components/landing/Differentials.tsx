import { Section } from "@/components/landing/Section"
import { Reveal } from "@/components/landing/Reveal"
import { Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react"

const items = [
  {
    title: "Performance que dá gosto",
    text: "Carregamento rápido, UX limpa e atenção a detalhes que aumentam conversão.",
    Icon: Gauge,
  },
  {
    title: "Confiabilidade & manutenção",
    text: "Seu projeto não pode depender de sorte. Monitoramento, correções e evolução contínua.",
    Icon: ShieldCheck,
  },
  {
    title: "Automação com propósito",
    text: "Cortar etapas, reduzir erros e liberar tempo do time para o que realmente importa.",
    Icon: Zap,
  },
  {
    title: "Dados que contam história",
    text: "KPIs com contexto, painéis objetivos e análises que viram decisão.",
    Icon: Sparkles,
  },
]

export function Differentials() {
  return (
    <Section id="solucoes" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2.75rem] bg-slate-950 px-6 py-14 text-white sm:px-10">
        <div className="absolute inset-0">
          <div className="absolute -inset-32 opacity-80 blur-3xl">
            <div className="mesh-bg-dark h-full w-full" />
          </div>
          <div className="absolute inset-0 noise-overlay opacity-30" />
        </div>

        <div className="relative">
          <Reveal delayMs={60}>
            <div className="text-xs font-semibold tracking-[0.22em] text-white/70">
              O DIFERENCIAL
            </div>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Uma experiência visual forte, com base técnica sólida.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Chamativo para quem ama novidade e confortável para quem valoriza clareza.
              Sem complicar: só o que funciona, muito bem feito.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {items.map((it, idx) => (
              <Reveal key={it.title} delayMs={120 + idx * 70}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/8">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--accent)] opacity-0 blur-2xl transition group-hover:opacity-25" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <it.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold tracking-tight">{it.title}</div>
                      <div className="mt-2 text-sm text-white/75">{it.text}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

