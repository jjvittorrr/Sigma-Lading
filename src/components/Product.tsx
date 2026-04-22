"use client";

import dynamic from "next/dynamic";

const Scene3DSmall = dynamic(() => import("./Scene3DSmall"), { ssr: false });

const features = [
  { icon: "dashboard", label: "Dashboard Inteligente" },
  { icon: "groups", label: "Gestão de Contatos" },
  { icon: "trending_up", label: "Analytics Avançado" },
  { icon: "automation", label: "Automação de Pipeline" },
  { icon: "handshake", label: "Gestão de Negócios" },
  { icon: "notifications_active", label: "Alertas em Tempo Real" },
];

export default function Product() {
  return (
    <section id="produto" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-4">
              <span className="w-8 h-[1px] bg-[var(--accent)]" />
              Nosso Produto
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              CRM
              <br />
              <span className="text-gradient">Revolucionário</span>
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8 font-[family-name:var(--font-body)] max-w-lg">
              Um CRM pensado para a era moderna. Interface intuitiva,
              automações inteligentes e insights que realmente importam para
              o crescimento do seu negócio.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300">
                    <span className="material-symbols-outlined text-[var(--accent)] text-sm">
                      {feature.icon}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors duration-300 font-[family-name:var(--font-body)]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--accent)] text-[var(--accent)] font-[family-name:var(--font-heading)] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[var(--accent)] hover:text-black hover:shadow-[0_0_30px_rgba(72,202,228,0.3)]"
            >
              Agendar Demo
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-[0.02] rounded-full blur-3xl" />
            <div className="glass-accent rounded-2xl p-8 border-glow w-full max-w-lg mx-auto">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] tracking-wider">
                  sigma-crm.app
                </span>
              </div>
              <div className="h-px bg-[var(--border)] mb-4" />
              <Scene3DSmall />
              <div className="mt-4 font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent)] text-center tracking-wider">
                // interface em construção
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
