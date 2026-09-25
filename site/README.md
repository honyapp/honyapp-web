# HONY — sitio web

Sitio estático (HTML + CSS + JS, sin dependencias). Se publica subiendo el contenido de esta carpeta tal cual.

## Fotos

Coloca los archivos en `assets/img/` con estos nombres; mientras falten, se ve un marcador con la descripción:

| Archivo | Uso |
| --- | --- |
| `hero-resultado.jpg` | Portada: resultado real (manos, cabello, maquillaje o piel) |
| `hero-app.png` | Portada: captura de la app (proporción ~9:19) |
| `clientes.jpg` | Clienta durante un servicio (4:5) |
| `asesores.jpg` | Asesor de imagen trabajando (4:5) |
| `locales.jpg` | Interior de un centro de belleza (4:5) |
| `marcas.jpg` | Productos de marca en uso (4:5) |

## Pendiente

- Enlace real de "Descargar HONY" (hoy apunta a `#descargar`).
- Páginas de Términos y condiciones y Política de privacidad (hoy `#`).

## Publicar en www.honyapp.com (Namecheap)

**Opción A: hosting compartido de Namecheap.** cPanel → Administrador de archivos → `public_html/` → sube `index.html`, `styles.css`, `main.js` y la carpeta `assets/`. Si el dominio y el hosting están en la misma cuenta, el DNS ya queda apuntado.

**Opción B: GitHub Pages (gratis).** Sube este repositorio a GitHub y en Settings → Pages elige "Source: GitHub Actions" (el flujo `.github/workflows/pages.yml` publica `site/` en cada push a `main`; el archivo `site/CNAME` ya fija `www.honyapp.com`). Luego en Namecheap → Domain List → Manage → Advanced DNS crea:

| Tipo | Host | Valor |
| --- | --- | --- |
| CNAME | `www` | `<tu-usuario>.github.io.` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Borra antes los registros por defecto de Namecheap (el CNAME `www` a `parkingpage.namecheap.com` y el URL Redirect de `@`). Luego activa "Enforce HTTPS" en GitHub Pages.
