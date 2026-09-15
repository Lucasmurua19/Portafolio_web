export type Project = {
  title: string;
  description: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  icon: "hotel" | "calendar" | "stethoscope" | "clock";
  status: "En producción" | "En desarrollo" | "Proyecto académico";
  featured?: boolean;
};

/**
 * Agregar un proyecto nuevo solo requiere sumar un objeto a este arreglo:
 * el resto del sitio (tarjetas, conteo, orden) se genera automáticamente.
 */
export const projects: Project[] = [
  {
    title: "Hotel Sol de Piedra",
    description:
      "Sitio de reservas para un hotel boutique: presentación de habitaciones, tarifas y disponibilidad, pensado para convertir visitas en consultas reales.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    demo: "https://hotel-demo-tan.vercel.app/",
    icon: "hotel",
    status: "En producción",
    featured: true,
  },
  {
    title: "Turnos SaaS",
    description:
      "Plataforma SaaS para que profesionales independientes gestionen turnos, disponibilidad y clientes desde un panel centralizado.",
    technologies: ["Python"],
    repository: "https://github.com/Lucasmurua19/Turnos_Saas",
    icon: "calendar",
    status: "En desarrollo",
  },
  {
    title: "Sistema de Triaje",
    description:
      "Sistema pensado para un hospital pediátrico, orientado a priorizar la atención de pacientes según nivel de urgencia.",
    technologies: ["TypeScript"],
    repository: "https://github.com/Lucasmurua19/triaje_system",
    icon: "stethoscope",
    status: "En desarrollo",
  },
  {
    title: "Registro de Horarios",
    description:
      "Aplicación para el registro de horarios laborales de una empresa, resolviendo un caso de uso real de control de asistencia.",
    technologies: ["Vue.js"],
    repository: "https://github.com/Lucasmurua19/Registro_horarios",
    icon: "clock",
    status: "Proyecto académico",
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
