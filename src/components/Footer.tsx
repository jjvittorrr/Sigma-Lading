"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-[var(--accent)] flex items-center justify-center rotate-45">
              <span className="font-[family-name:var(--font-heading)] text-[var(--accent)] text-[10px] font-bold -rotate-45">
                S
              </span>
            </div>
            <span className="font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wider uppercase">
              Sigma
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] tracking-wider ml-2">
              v1.0
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: "link", label: "LinkedIn" },
              { icon: "code", label: "GitHub" },
              { icon: "mail", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
                aria-label={social.label}
              >
                <span className="material-symbols-outlined text-lg">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] tracking-wider">
            &copy; {new Date().getFullYear()} Sigma. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
