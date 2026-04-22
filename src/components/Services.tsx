"use client";

const services = [
  {
    icon: "code",
    title: "Desenvolvimento Sob Medida",
    description:
      "Softwares personalizados construídos do zero com arquitetura escalável e código limpo.",
  },
  {
    icon: "sync",
    title: "Sustentação & Evolução",
    description:
      "Manutenção contínua, monitoramento proativo e evolução constante de sistemas legados ou novos.",
  },
  {
    icon: "rocket_launch",
    title: "Produtos Digitais",
    description:
      "Do conceito ao deploy. Construímos produtos digitais completos com foco em experiência e performance.",
  },
  {
    icon: "cloud",
    title: "Infraestrutura & Cloud",
    description:
      "Arquitetura em nuvem, DevOps, CI/CD e infraestrutura como código para máxima disponibilidade.",
  },
  {
    icon: "analytics",
    title: "Consultoria Tech",
    description:
      "Análise técnica, auditoria de código, definição de stack e estratégia tecnológica para seu negócio.",
  },
  {
    icon: "integration_instructions",
    title: "Integrações & APIs",
    description:
      "Conexão entre sistemas, automação de processos e APIs robustas para ecossistemas complexos.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--surface)] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-[var(--accent)]" />
            O que fazemos
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Serviços
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-xl text-lg font-[family-name:var(--font-body)]">
            Toda e qualquer coisa voltada para desenvolvimento nós fazemos.
            Da ideia ao deploy, estamos com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border)]">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-black p-8 lg:p-10 hover:bg-[rgba(72,202,228,0.02)] transition-all duration-500 hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300 mb-6">
                <span className="material-symbols-outlined text-[var(--accent)] text-xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-3 tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed font-[family-name:var(--font-body)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
