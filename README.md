# Bertan Fisio · landing one-page

Landing de una clínica de fisioterapia ficticia en Indautxu, Bilbao. Es una prueba técnica para Alma Digital. La página tiene un único objetivo: que la persona reserve su primera valoración.

- Web: https://bertan-fisio.vercel.app/
- Repositorio: https://github.com/cesarcgfg/berta-fisio

HTML, CSS y JavaScript puro. Sin frameworks, sin librerías, sin CDN y sin peticiones a terceros.

## Estructura

```
index.html                 una sola página, 8 secciones semánticas
assets/css/styles.css      un solo archivo: fuentes, tokens, reset, base, layout, componentes, utilidades
assets/js/main.js          3 KB con defer: menú móvil y validación del formulario
assets/img/                AVIF + WebP en 400, 800 y 1600 px, y og.jpg (1200×630)
assets/fonts/              Fraunces e Inter en woff2, subconjunto latino
favicon.svg · favicon.ico · apple-touch-icon.png
robots.txt · sitemap.xml · llms.txt · vercel.json
textos-nuevos.md           textos no literales del brief, pasados por el humanizador
```

## Decisiones técnicas

### Diseño

- Se reproduce el diseño aprobado en Claude Design a 360 y 1440 px. Los tokens del diseño (colores, escala tipográfica con `clamp()`, espacios y radios) van tal cual en `:root`. Las medidas del diseño que no tenían token se añadieron como tokens, así que no hay valores sueltos en los componentes.
- Mobile first, con un solo cambio de esquema a 800 px. De 800 a 1440 todo escala con porcentajes, `clamp()` y unidades de contenedor:
  - los arcos de la portada y del precio usan `50cqi` (la mitad del ancho);
  - servicios, pasos y molestias pasan a 3 columnas fijas, para que a 1024 no queden en 2 + 1;
  - la separación de la navegación es fluida, para que la cabecera quepa a 800.
- En el esquema móvil, el ancho de lectura se limita a 560 px, de modo que a 768 los textos no se estiran.
- Solo 4 colores, más sus transparencias. El terracota aparece únicamente en «Reservar valoración», con texto `#1E2A2B`: el contraste es de 4,97:1, y con texto blanco no llegaría a AA.
- Cambios respecto al diseño, por el brief y CLAUDE.md:
  - exactamente 8 secciones: la franja de datos va dentro de la portada y la banda de imagen es un `<figure>` dentro de Servicios;
  - sin barra fija de reserva ni resaltado de sección activa;
  - acordeón nativo;
  - aparición al desplazar solo con CSS.

### HTML y accesibilidad

- `header`, `nav`, `main`, 6 `section` y `footer`. Un solo `h1` y jerarquía sin saltos. Las etiquetas de sección van en `hgroup`.
- Enlace «Saltar al contenido». Foco visible en todo: verde sobre fondo claro, arena sobre verde y texto sobre terracota.
- Menú móvil:
  - botón con `aria-expanded` y `aria-controls`;
  - se cierra con Escape (y el foco vuelve al botón) y al elegir un enlace;
  - sin JavaScript, el botón no aparece y «Reservar valoración» sigue visible.
- Preguntas frecuentes con `<details name="faq">` y la pregunta como `<h3>` dentro del `summary`. Funcionan sin JavaScript y solo queda una abierta. La apertura se anima con `::details-content` e `interpolate-size` donde hay soporte.
- Formulario:
  - etiquetas visibles, `autocomplete` y tipos `tel` y `email`;
  - validación nativa (`required`, `pattern`) si falla el JavaScript;
  - con JavaScript, se aplican las reglas del diseño con `aria-invalid`, el mensaje se liga con `aria-describedby`, el foco va al primer error y el error se borra al editar;
  - la confirmación aparece en una región `role="status"`;
  - no envía datos a ningún sitio.
- Aparición al desplazar con `animation-timeline: view()` dentro de `@supports` y solo con `prefers-reduced-motion: no-preference`. Sin soporte, el contenido se ve normal. Solo anima `opacity` y `transform`: CLS 0.

### CSS

- BEM con selectores de una sola clase. Los únicos selectores compuestos son estados dentro del mismo bloque (`[aria-expanded="true"]`, `[aria-invalid="true"]`, `[open]`).
- JavaScript se engancha solo a atributos `data-`, nunca a clases.
- Cada bloque tiene su apartado con comentario de cabecera. No hay reglas sin usar.

### Rendimiento

- Fuentes autoalojadas, 140 KB en total:
  - Fraunces variable, recortada a 400–500 (cursiva solo 400), con el tamaño óptico conservado y los ejes que no se usan, fijados;
  - Inter estática en 400 y 600;
  - se precargan solo las de la primera pantalla;
  - `font-display: swap` y fuentes de respaldo con `size-adjust` y `ascent-override`, para que el cambio de fuente no mueva el diseño.
- Imágenes:
  - `<picture>` con AVIF y WebP, `srcset`/`sizes` y `width`/`height`;
  - en la portada hay dirección de arte: recorte cuadrado en móvil y en arco en escritorio;
  - la imagen LCP lleva `fetchpriority="high"` y el resto, `loading="lazy"` y `decoding="async"`.
- Iconos en un sprite SVG de `<symbol>`, sin los metadatos C2PA de los originales. El mapa es un SVG abstracto en línea que hereda el color con `currentColor`. No hay iframe.
- `vercel.json`:
  - caché de un año inmutable para fuentes e imágenes;
  - el HTML se revalida siempre;
  - CSS y JS, un día, porque sus nombres no llevan versión;
  - `Content-Type` con UTF-8 para `robots.txt` y `llms.txt`.

### SEO y GEO

- `title` de 49 caracteres y `meta description` de 150, los dos orientados a «fisioterapeuta en Bilbao».
- Canonical absoluto, Open Graph completo (`og:locale` es_ES e imagen de 1200×630) y favicon (SVG, ICO y apple-touch).
- Un solo JSON-LD con `@graph`:
  - `Physiotherapy` con dirección, teléfono, correo, horario, `priceRange`, mapa y la oferta de la primera valoración;
  - `FAQPage` con preguntas y respuestas idénticas al texto visible.
- Nombre, dirección, teléfono y horario coinciden en el contenido, el pie y el JSON-LD.
- Las respuestas de las preguntas frecuentes se adaptaron para que cada una se entienda sin leer la pregunta.
- `robots.txt` con `Sitemap:`, `sitemap.xml` y `llms.txt`, este último solo con datos del brief.

### Textos

Los textos del brief van literales. Todos los textos nuevos (metadatos, alt, microtextos, errores, confirmación y `llms.txt`) están en `textos-nuevos.md` y pasaron por el humanizador [Undetectable.ai](https://undetectable.ai/) antes de sustituirse.

## Créditos de las imágenes

Son fotos gratuitas de Pexels y Unsplash; ninguna es de Unsplash+ ni tiene marca de agua. Se alojan en el propio sitio, recortadas y convertidas a AVIF y WebP.

| Uso | Autoría | Fuente |
|---|---|---|
| Portada, foto en arco (y `og.jpg`) | Yan Krukau | [Pexels 5793918](https://www.pexels.com/photo/5793918/) |
| Portada, foto de detalle | Funkcinės Terapijos Centras | [Pexels 20860586](https://www.pexels.com/photo/20860586/) |
| Servicio · Suelo pélvico | Funkcinės Terapijos Centras | [Pexels 20860610](https://www.pexels.com/photo/20860610/) |
| Servicio · Fisioterapia deportiva | [@sporlab](https://unsplash.com/es/@sporlab) | Unsplash `photo-1571008887538-b36bb32f4571` |
| Servicio · Readaptación de lesiones | [@bruno_nascimento](https://unsplash.com/es/@bruno_nascimento) | Unsplash `photo-1476480862126-209bfaa8edc8` |
| Banda de imagen (manos) | [@edwardmuntinga](https://unsplash.com/es/@edwardmuntinga) | Unsplash `photo-1699523229208-be1e1dd9252d` |

Fuentes tipográficas: [Fraunces](https://github.com/undercasetype/Fraunces) e [Inter](https://github.com/rsms/inter), con licencia SIL Open Font License.

## Cómo verificar

1. Servidor local:
   ```bash
   python -m http.server 8600
   ```
   Abre http://127.0.0.1:8600/.
2. HTML: sube `index.html` a https://validator.w3.org/nu/. Debe dar 0 errores.
3. Datos estructurados: pega la URL pública en https://validator.schema.org/ o en https://search.google.com/test/rich-results.
4. Lighthouse móvil en local (necesita Node), 3 corridas y mediana:
   ```bash
   npx lighthouse http://127.0.0.1:8600/ --form-factor=mobile --view
   ```
5. Capturas a 360, 768, 1024 y 1440 px (necesita Node):
   ```bash
   npx playwright screenshot --viewport-size=360,800 --full-page http://127.0.0.1:8600/ captura-360.png
   ```
   En las capturas de página completa, la aparición al desplazar puede dejar transparentes las secciones que no se han visto. Para revisar, activa «reducir movimiento» en el sistema o recorre la página.
6. Teclado: Tab desde el principio (saltar al contenido, menú, enlaces), Escape con el menú abierto, Enter y Espacio en las preguntas, y envío del formulario vacío, con errores y correcto.
7. Rendimiento real: PageSpeed Insights móvil sobre la URL pública.

## Resultados

| Prueba | Resultado |
|---|---|
| **PageSpeed Insights, móvil, URL pública (8 oct 2026)** | **Rendimiento 99 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100** · FCP 1,1 s · LCP 1,7 s · TBT 0 ms · CLS 0 |
| Validador del W3C | 0 errores, 0 avisos |
| Validador de schema.org | 0 errores |
| Lighthouse móvil en local (mediana de 3 corridas) | Rendimiento 98 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100 |
| Métricas | LCP 2,3 s · CLS 0 · TBT 0 ms · 10 peticiones · 0 a terceros |
| Anchos 360, 768, 1024 y 1440 | Sin scroll horizontal |

En local, Lighthouse da 98 de rendimiento porque el servidor no comprime ni cachea. En Vercel se suman la compresión y las cabeceras de `vercel.json`.

## Herramientas

- Diseño: Claude Design.
- Código: Claude Code (Claude Opus 5.5). Todo el código y los archivos se generaron a partir de prompts.
- Humanizador: Undetectable.ai.
- Verificación: validador del W3C, validador de schema.org, Lighthouse y Playwright (Chromium y WebKit), instalados en una carpeta temporal fuera del proyecto: no dejan rastro en el repositorio.
