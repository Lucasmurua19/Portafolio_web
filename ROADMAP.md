# Portafolio de Nahuel Vélez — Hoja de ruta con Next.js

Este documento describe cómo reconstruir y publicar un portafolio profesional de una sola página utilizando **Next.js**, **TypeScript** y **Vercel**. El objetivo es presentar experiencia, proyectos y datos de contacto de forma clara, rápida y fácil de mantener.

## 1. Objetivo del proyecto

Construir un sitio que permita:

- Presentar a Nahuel Vélez como desarrollador Full Stack.
- Mostrar trabajos reales y proyectos de GitHub.
- Destacar la demo de Hotel Sol de Piedra.
- Explicar tecnologías y metodología de trabajo.
- Facilitar el contacto mediante correo, WhatsApp y LinkedIn.
- Funcionar correctamente en celulares, tablets y computadoras.
- Poder actualizar proyectos sin rehacer toda la página.
- Publicarse inicialmente en Vercel y admitir un dominio propio más adelante.

## 2. Stack recomendado

| Área | Tecnología | Motivo |
| --- | --- | --- |
| Framework | Next.js con App Router | Estructura profesional, rendimiento y SEO |
| Lenguaje | TypeScript | Código más seguro y mantenible |
| Estilos | Tailwind CSS o CSS Modules | Diseño responsive y componentes reutilizables |
| Iconos | Lucide React | Iconos livianos y consistentes |
| Repositorio | GitHub | Control de versiones y presentación profesional |
| Hosting | Vercel | Despliegue automático desde GitHub |
| Formularios | Formspree, Resend o API propia | Recepción de consultas sin exponer credenciales |
| Métricas | Vercel Analytics o Google Analytics | Conocer visitas y proyectos más vistos |

Para la primera versión no se necesita base de datos ni un servidor separado. El portafolio puede generarse como un sitio mayormente estático.

## 3. Contenido necesario

Antes de desarrollar, reunir:

- Nombre y título profesional.
- Descripción breve de perfil.
- Fotografía profesional en formato WebP o AVIF.
- Currículum en PDF, si se desea ofrecer una descarga.
- Enlaces a GitHub, LinkedIn, correo y WhatsApp.
- Entre tres y seis proyectos relevantes.
- Para cada proyecto: nombre, problema, solución, tecnologías, imagen, repositorio y demo.
- Logo personal opcional.
- Dominio propio opcional, por ejemplo `nahuelvelez.dev`.

### Información confirmada

- **Nombre:** Nahuel Vélez
- **Rol:** Desarrollador Full Stack
- **GitHub:** <https://github.com/Lucasmurua19>
- **LinkedIn:** <https://www.linkedin.com/in/nahuel-lucas-velez/>
- **Correo:** <veleznahuel515@gmail.com>
- **WhatsApp:** +54 9 351 809-3473
- **Demo hotel:** <https://hotel-demo-tan.vercel.app/>

## 4. Estructura de la página

La página será una landing de una sola página con las siguientes secciones:

1. **Navegación:** enlaces internos y botón de contacto.
2. **Presentación:** propuesta de valor y llamadas a la acción.
3. **Proyecto destacado:** demo del Hotel Sol de Piedra.
4. **Proyectos:** selección de repositorios de GitHub.
5. **Tecnologías:** frontend, backend, bases de datos y despliegue.
6. **Proceso de trabajo:** entender, diseñar, construir y entregar.
7. **Sobre mí:** presentación personal y fotografía, ubicada al final.
8. **Contacto:** correo, WhatsApp, LinkedIn y GitHub.
9. **Pie de página:** nombre, especialidad y año actual.

## 5. Crear el proyecto

Requisitos locales:

- Node.js en una versión LTS vigente.
- Git.
- Una cuenta de GitHub.
- Una cuenta de Vercel.
- Visual Studio Code u otro editor.

Crear el proyecto:

```bash
npx create-next-app@latest nahuel-velez-portfolio
cd nahuel-velez-portfolio
npm run dev
```

Al configurar `create-next-app`, seleccionar:

- TypeScript: sí.
- ESLint: sí.
- Tailwind CSS: según preferencia.
- App Router: sí.
- Directorio `src`: sí.
- Alias de importación: `@/*`.

Luego abrir <http://localhost:3000>.

## 6. Estructura sugerida

```text
nahuel-velez-portfolio/
├── public/
│   ├── images/
│   │   ├── nahuel-velez.webp
│   │   ├── sol-de-piedra.webp
│   │   └── proyectos/
│   └── nahuel-velez-cv.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Technologies.tsx
│   │   ├── WorkProcess.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── projects.ts
├── .env.example
├── next.config.ts
├── package.json
└── README.md
```

## 7. Plan de migración

### Fase 1 — Preparación

- Crear el repositorio `nahuel-velez-portfolio` en GitHub.
- Crear el proyecto de Next.js.
- Definir colores, tipografías, espaciados y componentes básicos.
- Optimizar las imágenes antes de agregarlas.
- Preparar una fotografía personal real para reemplazar el avatar provisional.

**Resultado:** proyecto vacío funcionando localmente y conectado con GitHub.

### Fase 2 — Migración visual

- Convertir la cabecera y navegación en componentes.
- Migrar la presentación principal.
- Crear componentes reutilizables para proyectos y botones.
- Migrar tecnologías, proceso de trabajo, sección personal y contacto.
- Mantener la fotografía personal en la sección final.
- Reemplazar etiquetas `<img>` por el componente `Image` de Next.js.
- Comprobar el diseño desde 320 px hasta pantallas de escritorio.

**Resultado:** el portafolio conserva la apariencia actual, pero ya funciona en Next.js.

### Fase 3 — Datos y mantenimiento

- Mover la información de los proyectos a `src/data/projects.ts`.
- Definir un tipo `Project` en TypeScript.
- Renderizar las tarjetas mediante `.map()`.
- Agregar campos para demo, repositorio, tecnologías, imagen y estado.
- Mantener en primer lugar el caso del Hotel Sol de Piedra.

Ejemplo:

```ts
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  image: string;
  featured?: boolean;
};
```

**Resultado:** agregar un proyecto nuevo requiere modificar un solo archivo de datos.

### Fase 4 — SEO y presentación profesional

- Configurar título, descripción y metadata en `layout.tsx`.
- Crear una imagen Open Graph para compartir en LinkedIn y WhatsApp.
- Agregar `sitemap.ts` y `robots.ts`.
- Usar HTML semántico: `header`, `nav`, `main`, `section` y `footer`.
- Escribir textos alternativos descriptivos para las imágenes.
- Incluir un favicon o monograma `NV`.
- Añadir datos estructurados básicos de tipo `Person`.
- Verificar que todos los enlaces externos utilicen HTTPS.

**Resultado:** una presentación correcta en buscadores y redes sociales.

### Fase 5 — Contacto

Primera versión:

- Botón de correo con `mailto:`.
- Botón de WhatsApp con mensaje inicial.
- Enlaces a LinkedIn y GitHub.

Versión posterior:

- Formulario con nombre, correo, empresa y mensaje.
- Validación de datos.
- Protección contra spam.
- Confirmación visual luego del envío.
- Envío mediante Formspree, Resend o una ruta API de Next.js.

Nunca colocar claves secretas directamente en el código o en GitHub. Guardarlas como variables de entorno en Vercel.

### Fase 6 — Calidad

- Ejecutar `npm run lint`.
- Ejecutar `npm run build`.
- Probar navegación con teclado.
- Revisar contraste, foco visible y textos alternativos.
- Comprobar enlaces, correo y WhatsApp.
- Probar Chrome, Firefox, Safari y navegadores móviles.
- Revisar rendimiento y accesibilidad con Lighthouse.
- Confirmar que no haya errores en la consola.

**Resultado:** versión lista para presentar a clientes.

### Fase 7 — Publicación en Vercel

1. Subir el proyecto a GitHub.
2. Ingresar a Vercel.
3. Seleccionar **Add New Project**.
4. Importar el repositorio del portafolio.
5. Revisar variables de entorno, si existen.
6. Ejecutar el primer despliegue.
7. Probar la URL pública generada por Vercel.

Cada `push` a la rama principal producirá una nueva versión del sitio. Las ramas y pull requests pueden generar previews para revisar cambios antes de publicarlos.

### Fase 8 — Dominio y mantenimiento

- Comprar o utilizar un dominio propio.
- Conectarlo desde la configuración de Vercel.
- Configurar la versión con `www` y sin `www`.
- Confirmar el certificado HTTPS.
- Revisar proyectos y tecnologías cada uno o dos meses.
- Actualizar dependencias de forma periódica.
- Mantener copias del contenido y las imágenes en GitHub.
- Comprobar regularmente que las demos y los enlaces sigan disponibles.

## 8. Flujo de trabajo con Git

```bash
git checkout -b feature/nueva-seccion
git add .
git commit -m "Add portfolio section"
git push -u origin feature/nueva-seccion
```

Convenciones de ramas sugeridas:

- `feature/`: funcionalidades nuevas.
- `fix/`: correcciones.
- `content/`: cambios de textos, proyectos o imágenes.
- `chore/`: mantenimiento técnico.

Antes de integrar cambios a `main`, revisar el preview generado por Vercel.

## 9. Orden recomendado de implementación

| Prioridad | Entregable | Estado inicial |
| --- | --- | --- |
| 1 | Proyecto Next.js y repositorio | Pendiente |
| 2 | Componentes y diseño responsive | Pendiente |
| 3 | Proyecto destacado y proyectos de GitHub | Pendiente |
| 4 | Sección personal con fotografía real | Pendiente |
| 5 | Contacto y enlaces | Pendiente |
| 6 | SEO, accesibilidad y Open Graph | Pendiente |
| 7 | Pruebas y optimización | Pendiente |
| 8 | Despliegue en Vercel | Pendiente |
| 9 | Dominio propio y métricas | Opcional |

## 10. Definición de terminado

El portafolio se considera listo cuando:

- [ ] Funciona localmente con `npm run dev`.
- [ ] Compila sin errores con `npm run build`.
- [ ] Se adapta correctamente a celular y escritorio.
- [ ] Contiene una fotografía personal real en la sección final.
- [ ] Presenta al menos tres proyectos relevantes.
- [ ] La demo del Hotel Sol de Piedra funciona.
- [ ] Los enlaces de GitHub, LinkedIn, correo y WhatsApp son correctos.
- [ ] Tiene metadata, favicon e imagen para compartir.
- [ ] Cumple controles básicos de accesibilidad.
- [ ] Está conectado a GitHub.
- [ ] Está publicado en Vercel con una URL pública.
- [ ] No contiene secretos ni datos sensibles dentro del repositorio.

## 11. Mejoras futuras

- Blog técnico con MDX.
- Panel para administrar proyectos.
- Contenido en español e inglés.
- Descarga de currículum.
- Animaciones sutiles respetando `prefers-reduced-motion`.
- Integración automática con la API de GitHub.
- Testimonios de clientes.
- Casos de estudio detallados.
- Dominio y correo profesional.

## 12. Próximo paso inmediato

Crear el repositorio en GitHub y generar el proyecto base con `create-next-app`. Después se debe migrar primero la estructura visual, y recién entonces agregar formularios, métricas o integraciones. Esto permite obtener rápidamente una versión pública y mejorarla de forma progresiva.

