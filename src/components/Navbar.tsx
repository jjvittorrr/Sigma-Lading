"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Produto", href: "#produto" },
    { label: "Tecnologia", href: "#tech" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[var(--accent)] flex items-center justify-center rotate-45 group-hover:bg-[var(--accent)] transition-all duration-300">
            <span className="font-[family-name:var(--font-heading)] text-[var(--accent)] text-sm font-bold -rotate-45 group-hover:text-black transition-colors duration-300">
              S
            </span>
          </div>
          <span className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wider uppercase">
            Sigma
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-[family-name:var(--font-body)] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-[family-name:var(--font-mono)] px-5 py-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-300 tracking-wider"
          >
            Fale Conosco
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[var(--fg)] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--fg)] transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--fg)] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 p-6 flex flex-col gap-4 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-[family-name:var(--font-body)] text-[var(--muted)] hover:text-[var(--accent)] transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-[family-name:var(--font-mono)] px-5 py-2 border border-[var(--accent)] text-[var(--accent)] text-center hover:bg-[var(--accent)] hover:text-black transition-all duration-300 tracking-wider"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
