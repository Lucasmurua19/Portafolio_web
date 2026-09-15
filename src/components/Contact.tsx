import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    label: "Correo",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: profile.whatsappDisplay,
    href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
      "Hola Nahuel, vi tu portafolio y quiero contarte sobre un proyecto."
    )}`,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "nahuel-lucas-velez",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "Lucasmurua19",
    href: profile.github,
    icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section-container py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">Contacto</h2>
      <p className="mt-2 max-w-2xl text-muted">
        ¿Tenés un proyecto en mente? Escribime por el canal que prefieras, te respondo a
        la brevedad.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="focus-ring flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Icon size={20} />
            </span>
            <span>
              <span className="block text-sm text-muted">{label}</span>
              <span className="block font-medium">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
