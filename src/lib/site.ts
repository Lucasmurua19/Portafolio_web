// URL pública del sitio. En Vercel, definir NEXT_PUBLIC_SITE_URL con el
// dominio final (por ejemplo https://nahuelvelez.dev) una vez publicado.
// Se usa "||" en vez de "??" porque Vercel puede inyectar la variable como
// string vacío en vez de dejarla undefined, y new URL("") revienta el build.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nahuel-next-portfolio.vercel.app";
