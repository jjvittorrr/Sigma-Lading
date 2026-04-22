"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo-white.png"
              alt="Sigma"
              className="h-8 w-auto object-contain"
            />
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
