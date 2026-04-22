"use client";

const techs = [
  { name: "React", icon: "web" },
  { name: "Next.js", icon: "developer_guide" },
  { name: "TypeScript", icon: "data_object" },
  { name: "Node.js", icon: "hub" },
  { name: "Python", icon: "terminal" },
  { name: "PostgreSQL", icon: "database" },
  { name: "AWS", icon: "cloud_upload" },
  { name: "Docker", icon: "deployed_code" },
  { name: "Kubernetes", icon: "cluster" },
  { name: "GraphQL", icon: "schema" },
  { name: "Redis", icon: "bolt" },
  { name: "CI/CD", icon: "autorenew" },
];

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "99.9%", label: "Uptime Garantido" },
  { value: "< 200ms", label: "Latência Média" },
  { value: "24/7", label: "Suporte Contínuo" },
];

export default function Tech() {
  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--surface)] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-[var(--accent)]" />
            Stack & Capacidades
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Tecnologia de
            <br />
            <span className="text-gradient">Ponta</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-24">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group glass rounded-lg p-4 flex flex-col items-center gap-3 hover-lift cursor-default"
            >
              <span className="material-symbols-outlined text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-300 text-2xl">
                {tech.icon}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors duration-300 tracking-wider">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--border)]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black p-8 text-center">
              <div className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-body)] text-sm text-[var(--muted)] tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
