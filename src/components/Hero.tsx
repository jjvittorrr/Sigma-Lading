"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <Scene3D />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-8">
              <span className="w-8 h-[1px] bg-[var(--accent)]" />
              Software Development
            </span>
          </div>

          <h1
            className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Construímos
            <br />
            <span className="text-gradient">o futuro</span>
            <br />
            digital
          </h1>

          <p
            className="text-[var(--muted)] text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-[family-name:var(--font-body)] animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            Criação, sustentação e desenvolvimento de softwares que transformam
            negócios. Toda e qualquer coisa voltada para desenvolvimento — nós
            fazemos.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <a
              href="#produto"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent)] text-black font-[family-name:var(--font-heading)] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(72,202,228,0.3)]"
            >
              Conheça o CRM
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border)] text-[var(--fg)] font-[family-name:var(--font-heading)] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
