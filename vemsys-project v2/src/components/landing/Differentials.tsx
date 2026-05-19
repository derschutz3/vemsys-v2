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
    <Section id="solucoes" className="py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-800/70 bg-[linear-gradient(180deg,#071226_0%,#081938_100%)] px-6 py-12 text-white shadow-[0_30px_100px_rgba(2,8,24,0.28)] sm:px-10">
        
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -inset-32 opacity-70 blur-3xl">
            <div className="mesh-bg-dark h-full w-full" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_58%)]" />

          <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
        </div>

        <div className="relative">
          <Reveal delayMs={60}>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-300">
              O DIFERENCIAL
            </div>

            <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-[42px] sm:leading-[1.08]">
              Uma experiência visual forte, com base técnica sólida.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              Chamativo para quem ama novidade e confortável para quem valoriza clareza.
              Sem complicar: só o que funciona, muito bem feito.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map((it, idx) => (
              <Reveal key={it.title} delayMs={120 + idx * 70}>
                <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
                  
                  {/* Glow */}
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-300 ring-1 ring-blue-500/20 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <it.Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-[22px] font-bold tracking-tight text-slate-100">
                        {it.title}
                      </div>

                      <div className="mt-3 text-[15px] leading-relaxed text-slate-300">
                        {it.text}
                      </div>
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