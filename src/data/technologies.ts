export type TechGroup = {
  category: string;
  items: string[];
};

export const technologyGroups: TechGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "APIs REST"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];
