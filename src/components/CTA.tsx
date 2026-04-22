"use client";

export default function CTA() {
  return (
    <section id="contato" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <span className="inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-8">
          <span className="w-8 h-[1px] bg-[var(--accent)]" />
          Vamos Conversar
        </span>

        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
          Pronto para
          <br />
          <span className="text-gradient">transformar</span> seu negócio?
        </h2>

        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto mb-14 font-[family-name:var(--font-body)] leading-relaxed">
          Seja um software do zero, a evolução de um sistema existente, ou nosso
          CRM revolucionário — estamos prontos para construir com você.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <a
            href="mailto:contato@sigmadev.com"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[var(--accent)] text-black font-[family-name:var(--font-heading)] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(72,202,228,0.4)]"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            Iniciar Projeto
          </a>
          <a
            href="mailto:contato@sigmadev.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-[var(--border)] text-[var(--fg)] font-[family-name:var(--font-heading)] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <span className="material-symbols-outlined text-lg">schedule</span>
            Agendar Demo
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {[
            { icon: "verified", text: "NDA Garantido" },
            { icon: "speed", text: "Resposta em 24h" },
            { icon: "security", text: "Código Seguro" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[var(--accent)] text-lg">
                {item.icon}
              </span>
              <span className="font-[family-name:var(--font-body)] text-sm text-[var(--muted)]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
