export type ServiceItem = {
  title: string
  description: string
  bullets: string[]
}

export type CaseItem = {
  title: string
  tag: string
  summary: string
  impact: string
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
}

export type FaqItem = {
  q: string
  a: string
}

export const siteContent = {
  brand: {
    name: "Vemsys",
    tagline: "Tecnologia que vira resultado.",
  },
  hero: {
    headline: "Seu produto, sua operação e seus dados — em modo turbo.",
    subheadline:
      "Desenvolvimento web, suporte e manutenção, automação de processos e análise de dados com foco em performance, confiabilidade e clareza.",
    primaryCta: "Pedir orçamento",
    secondaryCta: "Ver serviços",
    proof: ["Entrega com transparência", "Ritmo e qualidade", "Foco em impacto real"],
  },
  services: [
    {
      title: "Desenvolvimento Web",
      description:
        "Sites, landing pages, sistemas e painéis sob medida — rápidos, responsivos e com UX impecável.",
      bullets: ["React/Next e stacks modernas", "SEO, performance e acessibilidade", "Integrações e APIs"],
    },
    {
      title: "Suporte & Manutenção",
      description:
        "Correções, evolução e monitoramento contínuo para você não parar quando algo quebra.",
      bullets: ["Correções com prioridade", "Prevenção e melhorias contínuas", "Observabilidade e estabilidade"],
    },
    {
      title: "Automação de Processos",
      description:
        "Menos planilhas, menos retrabalho. Fluxos automatizados que conectam ferramentas e times.",
      bullets: ["Mapeamento de processos", "Integrações e automações", "Redução de custos operacionais"],
    },
    {
      title: "Análise de Dados",
      description:
        "Dashboards, indicadores e análises que transformam dados em decisões rápidas e seguras.",
      bullets: ["KPIs e métricas acionáveis", "Modelagem e limpeza de dados", "Storytelling com dados"],
    },
  ] satisfies ServiceItem[],
  process: [
    { title: "Descoberta", text: "Entender o contexto, dores e objetivo. Alinhar o que importa." },
    { title: "Plano", text: "Arquitetura e proposta clara: escopo, prazos, prioridades e riscos." },
    { title: "Execução", text: "Desenvolvimento com checkpoints e visibilidade contínua." },
    { title: "Entrega", text: "Deploy, validação e documentação. Sem surpresas." },
    { title: "Evolução", text: "Suporte, manutenção e automações para escalar com segurança." },
  ],
  cases: [
    {
      title: "Portal institucional com SEO",
      tag: "Web",
      summary: "Estrutura editorial, performance e acessibilidade com foco em conversão.",
      impact: "Mais leads com páginas mais rápidas e claras.",
    },
    {
      title: "Automação de rotina operacional",
      tag: "Automação",
      summary: "Integração entre ferramentas e redução de tarefas manuais.",
      impact: "Processos mais previsíveis e menos retrabalho.",
    },
    {
      title: "Painel de indicadores",
      tag: "Dados",
      summary: "KPIs e visualizações objetivas para tomada de decisão diária.",
      impact: "Decisão mais rápida com dados confiáveis.",
    },
  ] satisfies CaseItem[],
  testimonials: [
    {
      quote: "A entrega foi rápida, bem comunicada e com qualidade acima do esperado.",
      name: "Cliente",
      role: "Gestão / Operações",
    },
    {
      quote: "Organizaram nosso processo e automatizaram o que mais consumia tempo.",
      name: "Cliente",
      role: "Backoffice",
    },
  ] satisfies TestimonialItem[],
  faq: [
    {
      q: "Vocês fazem manutenção em sistemas existentes?",
      a: "Sim. Podemos assumir manutenção, correções e melhorias, com um diagnóstico inicial e prioridades combinadas.",
    },
    {
      q: "Como funciona o suporte?",
      a: "Trabalhamos com SLAs e canais claros de atendimento. O formato é ajustado ao seu cenário (corretivo e evolutivo).",
    },
    {
      q: "Quais tecnologias vocês usam?",
      a: "Depende do projeto. Priorizamos stacks modernas e sustentáveis, com foco em performance, observabilidade e segurança.",
    },
    {
      q: "Vocês entregam com documentação?",
      a: "Sim. Entregamos documentação essencial, orientações de operação e, quando necessário, treinamento rápido.",
    },
  ] satisfies FaqItem[],
  contact: {
    whatsappNumber: "",
    email: "vemsys@outlook.com.br",
    availability: "Seg–Sex, 09:00–18:00",
  },
} as const
