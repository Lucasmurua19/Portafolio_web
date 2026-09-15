import { otherProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="section-container py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">Proyectos</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Una selección de repositorios propios en GitHub. Cada uno resuelve un problema
        concreto, de punta a punta.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
