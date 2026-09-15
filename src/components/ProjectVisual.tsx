import { BedDouble, CalendarClock, Stethoscope, Timer, type LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const icons: Record<Project["icon"], LucideIcon> = {
  hotel: BedDouble,
  calendar: CalendarClock,
  stethoscope: Stethoscope,
  clock: Timer,
};

/**
 * Panel visual de respaldo para proyectos que todavía no tienen una captura
 * de pantalla real. Cuando haya una imagen, se puede reemplazar por
 * next/image apuntando a public/images/proyectos/.
 */
export default function ProjectVisual({
  icon,
  featured = false,
}: {
  icon: Project["icon"];
  featured?: boolean;
}) {
  const Icon = icons[icon];

  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent/15 via-surface to-accent-2/10 ${
        featured ? "h-64 sm:h-80" : "h-40"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--accent),transparent_55%)] opacity-25" />
      <Icon
        className="relative text-accent"
        size={featured ? 72 : 44}
        strokeWidth={1.5}
      />
    </div>
  );
}
