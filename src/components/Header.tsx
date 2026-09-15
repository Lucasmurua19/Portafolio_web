"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="focus-ring rounded-md text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="focus-ring hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
        >
          Contactarme
        </a>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="border-t border-border bg-background md:hidden"
        >
          <div className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-2 py-2.5 text-sm text-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="focus-ring mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Contactarme
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
