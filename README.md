# Portafolio — Nahuel Vélez

Portafolio profesional de una sola página, construido con Next.js (App Router),
TypeScript y Tailwind CSS. Ver [ROADMAP.md](./ROADMAP.md) para la hoja de ruta
completa del proyecto.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app`: rutas, layout, metadata, sitemap, robots e imagen Open Graph.
- `src/components`: componentes de la página (Header, Hero, Proyectos, etc.).
- `src/data`: contenido editable — perfil, proyectos y tecnologías. Agregar o
  actualizar un proyecto es editar `src/data/projects.ts`, no tocar componentes.
- `public/images`: capturas de proyectos y foto de perfil (aún no agregadas).

## Scripts

```bash
npm run dev     # servidor de desarrollo
npm run lint    # ESLint
npm run build   # build de producción
npm run start   # servidor de producción (tras build)
```

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar `NEXT_PUBLIC_SITE_URL` con el
dominio final una vez publicado.

## Despliegue

Publicado en [Vercel](https://vercel.com). Cada push a `main` genera un nuevo
despliegue; las ramas y pull requests generan previews.
