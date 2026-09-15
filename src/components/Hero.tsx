import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section-container flex min-h-[85vh] flex-col justify-center gap-8 py-20"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        {profile.role}
      </p>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Hola, soy {profile.name.split(" ")[0]}
        <span className="text-accent">.</span>
        <br />
        {profile.tagline}
      </h1>

      <p className="max-w-2xl text-lg text-muted">{profile.bio}</p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Ver proyectos
          <ArrowRight size={16} />
        </a>
        <a
          href="#contacto"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
        >
          Hablemos de tu proyecto
        </a>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Perfil de GitHub de Nahuel Vélez"
          className="focus-ring rounded-full p-2 text-muted transition-colors hover:text-foreground"
        >
          <GithubIcon size={22} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Perfil de LinkedIn de Nahuel Vélez"
          className="focus-ring rounded-full p-2 text-muted transition-colors hover:text-foreground"
        >
          <LinkedinIcon size={22} />
        </a>
      </div>
    </section>
  );
}
