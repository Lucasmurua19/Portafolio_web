import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-transform hover:-translate-y-1">
      <ProjectVisual icon={project.icon} />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="whitespace-nowrap rounded-full border border-border px-2.5 py-1 text-xs text-muted">
            {project.status}
          </span>
        </div>

        <p className="flex-1 text-sm text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center gap-4 text-sm">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              Ver demo
              <ExternalLink size={14} />
            </a>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-1.5 text-muted hover:text-foreground"
            >
              <GithubIcon size={14} />
              Repositorio
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
