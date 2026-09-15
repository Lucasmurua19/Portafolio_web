import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que Turbopack detecte un package-lock.json ajeno en una carpeta
  // superior (fuera de este repositorio) como raíz del workspace.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
