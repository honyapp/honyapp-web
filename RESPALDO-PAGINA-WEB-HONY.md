# Respaldo · Página web de HONY

Última actualización: 26 de septiembre de 2026

## 1. Resumen

| Qué | Dónde |
| --- | --- |
| Web publicada | https://www.honyapp.com (también responde `honyapp.com`, que redirige a `www`) |
| Código de la web | Repositorio de GitHub **honyapp/honyapp-web** · https://github.com/honyapp/honyapp-web |
| Alojamiento | GitHub Pages (gratis), con HTTPS activado |
| Dominio | Namecheap · `honyapp.com` |
| Contacto de la web | WhatsApp +58 412 241 9494 (el número no se muestra en la página, solo abre el chat) |

**Lo que está publicado hoy:** la página de expectativa ("Muy pronto").
**Lo que está guardado:** el sitio completo, en la rama `sitio-completo` del repositorio.

## 2. Versiones de la web

### 2.1 Página de expectativa (publicada, rama `main`)

Una sola pantalla con:

- Encabezado: logo HONY + "Tu belleza, a otro nivel" y una etiqueta dorada **"Muy pronto"**.
- Rótulo: **PRÓXIMAMENTE · VENEZUELA**
- Título: **Tu belleza está por subir de nivel.** ("de nivel." en vino)
- Texto: *Reserva, paga y gana recompensas en cada servicio de belleza. Todo desde tu teléfono.*
- Etiquetas: Clientes · Asesores · Centros de belleza · Marcas
- Botón: **Quiero enterarme primero** → WhatsApp con el mensaje *"Hola, quiero enterarme primero de HONY"*
- Nota: *Escríbenos por WhatsApp y sé de los primeros en conocer HONY.*
- Mosaico de 3 fotos: secado de cabello, barbería y manicura.
- Pie: **HONY TECHNOLOGY, C.A.** · © 2026 · Tu belleza, a otro nivel

### 2.2 Sitio completo (guardado, rama `sitio-completo`)

Hecho a partir del diseño de Claude Design (`HONY.dc.html`) y de la guía de marca. Secciones:

1. **Encabezado** fijo (se vuelve translúcido al bajar): Clientes, Asesores, Locales, Marcas y botón **Contáctanos**.
2. **Portada:** "HONY: tu belleza, a otro nivel", botones *Contáctanos* y *Cómo funciona*, teléfono con una pantalla de ejemplo de la app (datos inventados: María, próxima cita, código QR, billetera, puntos) y foto de secado de cabello.
3. **Cómo funciona:** 6 pasos (Agenda, Llega, Escanea, Disfruta, Confirma, Califica).
4. **Para clientes** (foto: mujer mirando su teléfono).
5. **Para asesores de imagen** (foto: barbero).
6. **Para centros de belleza** (foto: laptop con gráfico de barras y circular). Incluye la característica añadida:
   > **Alquila puestos por hora.** Ofrece tus puestos libres a asesores por hora y evita horas muertas: cada espacio de tu local genera ingresos.
7. **Para marcas** (foto: manicura).
8. **Validación de 3 vías** (bloque oscuro): QR, GPS y Presencia; "Tu dinero, protegido" y "Tus datos, privados".
9. **Niveles:** Bronce, Plata, Oro y Diamante.
10. **Contáctanos:** "Hablemos de tu belleza, a otro nivel." + botón **Escríbenos por WhatsApp**.
11. **Pie:** logo, enlaces a secciones, HONY TECHNOLOGY, C.A., Términos y condiciones y Política de privacidad (sin destino todavía).

Cambios respecto al diseño original: se quitó todo botón de "Descargar HONY" (la app aún no se publica) y se cambió por "Contáctanos".

**Para volver a publicar el sitio completo:** pedir a Claude que "publique la rama `sitio-completo`", o copiar la carpeta `site/` de esa rama a `main` en GitHub.

## 3. Identidad visual usada

- **Colores:** Vino `#721B3B` (botones, logo), Tinta `#2B1A20` (texto), Dorado `#C9A24A` (solo detalles), Marfil `#F5EDE3` (fondo), Crema `#EFE4D9`, Arena `#E7D9CE`, Taupe `#7C6B66`, Rosa empolvado `#F6EAEE`, Verde validado `#1F6B48` / `#E4F0EA`.
- **Tipografías (Google Fonts):** Manrope 500–600 para títulos y logo (logo con espaciado 0,28 em); DM Sans 400–600 para texto.
- **Formas:** botones en píldora de 52 px, tarjetas con radio 20 px, fotos con radio 24 px, sin sombras.

## 4. Fotos

Todas de **Pexels**: uso comercial gratis, sin obligación de dar crédito.

| Archivo | Uso | Foto |
| --- | --- | --- |
| `hero-resultado.jpg` | Portada / expectativa | https://www.pexels.com/photo/7440133/ |
| `asesores.jpg` | Asesores / expectativa | https://www.pexels.com/photo/3998397/ |
| `marcas.jpg` | Marcas / expectativa | https://www.pexels.com/photo/5238012/ |
| `clientes.jpg` | Clientes (sitio completo) | https://www.pexels.com/photo/6146957/ |
| `locales.jpg` | Centros de belleza (sitio completo) | https://www.pexels.com/photo/265087/ |
| `pedicura.jpg` | Guardada, sin usar | https://www.pexels.com/photo/17056221/ |

Las fotos están en `site/assets/img/`. El archivo `sources.txt` de esa carpeta lista qué foto de Pexels va en cada archivo. Si se edita, GitHub las descarga solo con el flujo **"Descargar fotos"**.

## 5. Configuración técnica

### 5.1 DNS en Namecheap (Domain List → honyapp.com → Manage → Advanced DNS)

Nameservers: **Namecheap BasicDNS** (no cambiar).

| Tipo | Host | Valor |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `honyapp.github.io.` |
| TXT Record | `privateemail._…` | Firma DKIM del correo Private Email. **No borrar.** |

### 5.2 GitHub Pages (repositorio → Settings → Pages)

- Source: **GitHub Actions**
- Custom domain: `www.honyapp.com` (también fijado por el archivo `site/CNAME`)
- **Enforce HTTPS:** activado

### 5.3 Cómo se publica

Cada cambio que se sube a la rama `main` se publica solo en 1–2 minutos (flujo **"Publicar en GitHub Pages"**, archivo `.github/workflows/pages.yml`). Solo se publica la carpeta `site/`.

### 5.4 Estructura del repositorio

```
.github/workflows/pages.yml          publica site/ en GitHub Pages
.github/workflows/fetch-images.yml   descarga las fotos de Pexels
site/index.html                      la página publicada
site/CNAME                           www.honyapp.com
site/assets/img/                     fotos, sources.txt y CREDITOS.txt
```

## 6. Problemas que ya resolvimos (por si vuelven a pasar)

- **La primera publicación salió en rojo** ("Get Pages site failed"): pasó porque Pages aún no estaba activado. Una vez activado con Source = GitHub Actions, las siguientes salieron bien. Ese error viejo se puede ignorar.
- **"DNS check unsuccessful" en GitHub:** GitHub comprobó antes de que se aplicaran los DNS. Se arregla con *Check again* o con *Remove* + volver a escribir el dominio + *Save*.
- **"Enforce HTTPS" gris:** GitHub tarda un rato (hasta horas) en emitir el certificado. Hay que esperar sin tocar nada.
- **La web no abría en la computadora (`ERR_NAME_NOT_RESOLVED`, el DNS respondía `0.0.0.0`):** era la **VPN**, que bloquea dominios nuevos. Sin la VPN abre bien.
- **Abre en Edge pero no en Chrome:** Chrome guarda su propia memoria de DNS. Revisar que no haya una VPN como extensión, borrar la memoria en `chrome://net-internals/#dns` (*Clear host cache*) y en `chrome://net-internals/#sockets` (*Flush socket pools*), y revisar "Usar DNS seguro" en `chrome://settings/security`.

## 7. Pendientes

- Enlace de descarga de la app (cuando esté publicada).
- Textos de **Términos y condiciones** y **Política de privacidad**.
- Captura real de la app para reemplazar la pantalla de ejemplo del sitio completo.
- Decidir cuándo pasar de la página de expectativa al sitio completo.
