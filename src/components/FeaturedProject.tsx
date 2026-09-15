import { ExternalLink } from "lucide-react";
import { featuredProject } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function FeaturedProject() {
  if (!featuredProject) return null;

  return (
    <section className="section-container py-16" aria-labelledby="featured-heading">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Proyecto destacado
      </p>

      <div className="mt-6 grid gap-8 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:grid-cols-2 md:items-center">
        <ProjectVisual icon={featuredProject.icon} featured />

        <div className="flex flex-col gap-4">
          <h2 id="featured-heading" className="text-2xl font-bold sm:text-3xl">
            {featuredProject.title}
          </h2>
          <p className="text-muted">{featuredProject.description}</p>

          <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
            {featuredProject.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>

          {featuredProject.demo && (
            <a
              href={featuredProject.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Ver demo en vivo
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
