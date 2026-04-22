"use client";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos profundamente seu negócio, processos e desafios técnicos.",
    icon: "search",
  },
  {
    number: "02",
    title: "Arquitetura",
    description: "Desenhamos a solução ideal com as melhores tecnologias para seu caso.",
    icon: "architecture",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos com metodologia ágil, entregas incrementais e código limpo.",
    icon: "code",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Sustentação contínua, monitoramento e evolução permanente do seu software.",
    icon: "trending_up",
  },
];

export default function Process() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)] via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-6 block">
              <span className="w-8 h-[1px] bg-[var(--accent)]" />
              Como Trabalhamos
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              Nosso
              <br />
              <span className="text-gradient">Processo</span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-md font-[family-name:var(--font-body)] leading-relaxed">
              Uma metodologia clara e transparente, do primeiro contato à
              entrega contínua.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group flex gap-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 border border-[var(--border)] group-hover:border-[var(--accent)] flex items-center justify-center transition-colors duration-300 shrink-0">
                    <span className="material-symbols-outlined text-[var(--accent)] text-xl">
                      {step.icon}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[1px] flex-1 bg-[var(--border)] my-3" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent)] tracking-[0.3em]">
                    {step.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mt-2 mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed font-[family-name:var(--font-body)] max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
