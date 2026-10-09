# CLAUDE.md · Bertan Fisio (prueba técnica para Alma Digital)

Landing one-page para Bertan Fisio, clínica de fisioterapia ficticia en Indautxu, Bilbao. Es una prueba técnica: Alma Digital va a revisar el resultado, el código, los prompts y la nota de entrega. El encargo completo (concepto, textos y secciones) está en el prompt maestro, registrado en `prompts.md`.

## Diseño de referencia

- `design_reference/README.md` es la especificación del diseño aprobado en Claude Design (alta fidelidad): medidas, estados, textos de interfaz, validación del formulario y fuentes de las fotos. Reprodúcelo al píxel a 360 y 1440 px.
- `design_reference/bertan-tokens.css` tiene los tokens: cópialos tal cual a `:root`, con sus nombres (`--color-arena`, `--color-verde`, `--space-lg`, `--fs-h1`…), **sin** el `@import` de Google Fonts (las fuentes se autoalojan).
- Los `.dc.html` de `design_files/` son prototipos para verlos en el navegador: sirven de referencia visual, no de código. `support.js` no forma parte del sitio.
- Si algo choca, el orden de prioridad es: brief > este CLAUDE.md > README del diseño > prototipos. Las decisiones de este archivo que cambian el README están marcadas con «(cambia el README)».
- `design_reference/` y `_originales/` quedan fuera de git.

## Reglas del proceso (no negociables)

1. **100 % con IA.** Todo el código y todos los archivos los generas tú a partir de prompts. César dirige, revisa y corrige con nuevas instrucciones; nunca edita código a mano. Si algo requiere una acción manual de César (elegir fotos, pasar textos por el humanizador, publicar), díselo con pasos concretos.
2. **HTML, CSS y JavaScript puro.** Sin Next.js, React, Vue, Tailwind, Bootstrap, WordPress, constructores, plantillas ni librerías externas de JavaScript o CSS. Nada de CDN.
3. **Textos humanizados.** Los textos del brief se copian literales, sin las comillas «». Todo texto que crees o adaptes, por corto que sea, se registra en `textos-nuevos.md` para que César lo pase por el humanizador: metadatos, Open Graph, alt, mensajes de error y de confirmación del formulario, microtextos de interfaz (saltar al contenido, abrir y cerrar menú, etiquetas accesibles), textos del pie, `llms.txt` y descripciones del JSON-LD. Después sustituyes cada texto por la versión humanizada, sin volver a reescribirlo. Si la versión humanizada de `title` o `meta description` supera su límite de caracteres, avísale a César en lugar de recortarla tú.
4. **Registro de prompts.** Al empezar cada tarea, agrega al final de `prompts.md` el prompt de César tal cual, con un número y un título corto. Es un entregable.

## Cómo lo va a evaluar Alma Digital

Diseño (tipografía, espacios, jerarquía y fidelidad al branding) 30 % · Calidad del código (HTML semántico, CSS ordenado, sin código duplicado) 25 % · SEO, GEO y rendimiento según la sección 5 del brief 25 % · Responsive y accesibilidad 10 % · Plazo (48 horas) y claridad de la nota de entrega 10 %. El diseño es lo que más pesa: cuida la escala tipográfica, el ritmo de espacios y la jerarquía antes que cualquier efecto.

## Idioma y tono del sitio

Español de España, de tú, con "vosotros" cuando el plural lo pida (como en «¿Trabajáis con mutuas?»). Vocabulario de España: móvil, ordenador, cita. Tono cercano y tranquilo, frases cortas. No inventes datos, cifras, testimonios, nombres de fisioterapeutas ni reseñas: si un dato no está en el brief, no va. Los textos de apoyo del diseño (franja de datos clave, tarjeta de precio, chips de molestias, etiquetas de sección) solo reformulan datos del brief y van a `textos-nuevos.md` para el humanizador.

## Estructura de archivos

```
index.html
assets/css/styles.css      un solo archivo, ordenado (ver CSS)
assets/js/main.js          con defer; menú móvil, validación del formulario y, si hace falta, aparición al desplazar
assets/img/                AVIF + WebP en varios anchos, og.jpg
assets/fonts/              woff2 autoalojadas
favicon.svg  apple-touch-icon.png  favicon.ico
robots.txt  sitemap.xml  llms.txt
vercel.json                cabeceras de caché
README.md                  decisiones, créditos de imágenes, cómo verificar
prompts.md  textos-nuevos.md
```

No dejes `package.json`, `node_modules` ni archivos de herramientas en el entregable. Para tareas puntuales (convertir imágenes, Lighthouse, capturas) usa `npx` y no dejes rastro en el repositorio.

## Branding

| Token (bertan-tokens.css) | Valor | Uso |
|---|---|---|
| `--color-arena` | #F4F1EC | fondo |
| `--color-texto` | #1E2A2B | texto |
| `--color-verde` | #2F5D50 | enlaces, numeración, secciones oscuras, foco |
| `--color-terracota` | #E07A4F | **solo** el botón principal «Reservar valoración» |

Bordes y fondos secundarios: solo las transparencias de los tokens (`--verde-06`, `--texto-12`, etc.).

- Contraste medido: texto #1E2A2B sobre terracota = 4.97 (AA). **Blanco sobre terracota = 2.97: no cumple**, así que el botón principal lleva texto #1E2A2B. Terracota como color de texto no cumple sobre ningún fondo de la paleta: nunca lo uses para texto.
- Títulos en Fraunces (400, 400 cursiva y 500), texto en Inter (400 y 600), autoalojadas en woff2 con subconjunto latino. Si usas las versiones variables, recórtalas a esos pesos y fija los ejes que no se usan, para que pesen poco. Precarga solo las de la primera pantalla (Fraunces normal y cursiva, Inter 400). `font-display: swap` y fuentes de respaldo con `size-adjust` para que el cambio de fuente no mueva el diseño.
- Logo: no hay. El logotipo es el texto «Bertan Fisio» en Fraunces, verde bosque. No dibujes ni inventes un símbolo. El favicon es una «B» de Fraunces convertida a trazo, sobre verde bosque.
- Imágenes: luz natural, manos trabajando, gente real en movimiento. Nada de esqueletos 3D ni fotos de banco con sonrisas forzadas, ni gimnasios. Solo fotos gratuitas de Unsplash o Pexels, con la fuente de cada una en el README. Nunca fotos de Unsplash+ ni con marca de agua: son de pago y el brief pide fotos libres.
- Sensación: calma, cercanía y criterio profesional. Ni clínica fría ni gimnasio: mucho aire, bordes suaves y movimiento mínimo.
- «Reservar valoración» tiene que estar siempre a un toque, también en móvil con el menú cerrado.

## HTML

- Semántico: `header`, `nav`, `main`, `section` (cada una con su encabezado), `footer`. Un solo `h1` (el de la portada) y jerarquía sin saltos.
- `lang="es"`. Enlace "Saltar al contenido" como primer elemento enfocable.
- Debe pasar el validador del W3C sin errores. Valida con el servicio de validator.w3.org/nu después de cada fase.
- Anclas del README: «Reservar valoración» → `#reservar` (el h2 de la sección 7); Contacto → `#contacto`; Servicios → `#servicios`; Cómo trabajamos → `#como-trabajamos`; Preguntas → `#preguntas`; logotipo → `#inicio`. Las anclas compensan la cabecera fija con `scroll-margin-top: var(--header-h)`.
- El brief pide 8 secciones en orden: el HTML tiene exactamente 8 `<section>` (o `header`/`footer`) en ese orden. La franja de datos clave va dentro de la sección de portada; la banda de imagen va como `<figure>` al final de la sección de servicios, sin encabezado propio (cambia el README).
- Teléfono como enlace `tel:+34600000000` y correo como `mailto:`.
- Formulario: cada campo con su `<label>` visible, `autocomplete` adecuado y tipos correctos (`tel`, `email`).
- Preguntas frecuentes con `<details>`/`<summary>` y la pregunta como `<h3>` dentro del `summary` (el estándar lo permite): funciona sin JavaScript. `name` común para que solo quede una abierta, la primera con `open`. Aspecto igual al diseño (signo + que pasa a −); la animación de apertura con `::details-content` e `interpolate-size` donde el navegador lo soporte, sin JavaScript (cambia el README, que usa botones con JS).
- Mapa: tarjeta con la dirección y enlace a Google Maps, con `mapa-escritorio.svg` / `mapa-movil.svg` del diseño. Sin iframe ni scripts de mapas.

## CSS

- Un solo archivo, en este orden: fuentes (`@font-face`), tokens (`:root`), reset mínimo, base (tipografía, enlaces, foco), layout (contenedor, rejillas), componentes (cabecera, botones, tarjetas, pasos, acordeón, formulario, pie), utilidades.
- Sin código duplicado: todo valor repetido es un token (color, espacio, radio, tamaño de fuente con `clamp()`).
- Nombres de clases con BEM (Bloque, Elemento, Modificador; referencia: https://css-tricks.com/bem-101/):
  - Bloque: componente independiente, en minúsculas y con guiones: `.site-header`, `.hero`, `.service-card`, `.step`, `.faq`, `.booking-form`, `.site-footer`.
  - Elemento: parte de un bloque, con doble guion bajo: `.service-card__title`, `.booking-form__field`, `.hero__actions`.
  - Modificador: variante de un bloque o elemento, con doble guion: `.button--primary`, `.button--secondary`, `.section--dark`.
  - Nunca anidar elementos en el nombre (`.card__body__title` no; `.card__title` sí). Si una parte crece y se reutiliza, conviértela en su propio bloque.
  - Selectores de una sola clase, sin IDs ni selectores de etiqueta para dar estilo, y sin anidar bloques en el CSS (`.hero .button` no; `.hero__cta` o `.button--primary` sí). Solo el reset y la base usan selectores de etiqueta.
  - Estados interactivos con atributos ARIA y pseudoclases en lugar de clases nuevas: `.site-nav[aria-expanded="true"]`, `.booking-form__input[aria-invalid="true"]`, `:focus-visible`, `details[open]`.
  - JavaScript nunca se engancha a clases BEM: usa atributos `data-` (`data-menu-toggle`, `data-booking-form`), para poder cambiar estilos sin romper el comportamiento.
  - En el CSS, cada bloque en su propio apartado con un comentario de cabecera, dentro de la sección de componentes, y sus elementos y modificadores justo debajo.
- Mobile first. Perfecta a 360, 768, 1024 y 1440 px, sin scroll horizontal en ningún ancho. El diseño cambia de esquema a 800 px y sus medidas de escritorio están en px de 1440: entre 800 y 1440 todo debe escalar (la portada con sus dos fotos en arco, la tarjeta de precio) con porcentajes o `clamp()`, sin desbordar a 1024. A 768 (esquema móvil) limita el ancho de lectura para que no se estire.
- Foco visible en todo elemento interactivo (contorno verde bosque sobre fondo claro, arena sobre fondo oscuro). Respeta `prefers-reduced-motion`.
- Aparición al desplazar solo con CSS: `animation-timeline: view()` dentro de `@supports`, para que sin soporte el contenido se vea normal. Nunca contenido oculto por defecto que dependa de JavaScript (cambia el README, que usa IntersectionObserver). Nada que provoque saltos de diseño (CLS).

## JavaScript

Solo lo necesario según el brief (menú, acordeón y validación; el acordeón ya es nativo), sin librerías:

- Sin barra fija de reserva ni resaltado de sección activa en la navegación: la cabecera es fija y ya lleva «Reservar valoración» en móvil, y el brief limita el JavaScript a menú, acordeón y validación (cambia el README).
- Menú móvil: botón con `aria-expanded` y `aria-controls`, operable con teclado, se cierra con Escape (devolviendo el foco al botón) y al elegir un enlace.
- Formulario: en el HTML, atributos nativos (`required`, `type`, `pattern`) para que valide aunque falle el JavaScript; `main.js` añade `novalidate` al cargar y aplica las reglas y mensajes de la tabla del README, con `aria-invalid`, mensaje ligado con `aria-describedby`, foco en el primer campo con error y borrado del error al editar. Al enviar correctamente, la confirmación del README en una región `role="status"`. No envía datos a ningún sitio.
- Sin dependencias, sin `console.log` ni código muerto.

## Iconos y motivo gráfico

- Los iconos están en `design_reference/assets/icons/`. Cada archivo trae un bloque `<metadata>` de procedencia (C2PA) que ocupa casi todo su peso: quítalo junto con el `xmlns:c2pa` y deja solo el trazado. Van como SVG en línea, en un solo `<svg>` oculto con `<symbol>` al inicio del `body` y referenciados con `<use href="#icono-...">`, para no repetir el trazado.
- Color con `currentColor`, mismo grosor de trazo en todos. Decorativos con `aria-hidden="true"`; si un icono es la única señal de un dato, lleva texto accesible.
- Sin librerías de iconos ni archivos externos.
- Mapa: SVG abstracto en línea, sin calles reales, enlazado a Google Maps.

## Imágenes

- AVIF y WebP con `<picture>`, `srcset` y `sizes`, y `width`/`height` siempre.
- La imagen de la portada es la imagen LCP: sin carga diferida y con `fetchpriority="high"`. Todas las demás llevan `loading="lazy"` y `decoding="async"`.
- `alt` descriptivo en todas las fotos: qué se ve y en qué contexto, sin empezar por "imagen de". Solo las formas o íconos puramente decorativos llevan `alt=""` o `aria-hidden="true"`.
- Imagen Open Graph de 1200×630 en JPG, recortada de la foto de portada.

## SEO y GEO (sección 5 del brief: hay que cumplir todos los puntos)

- `title` de 60 caracteres como máximo y `meta description` de 155, ambos orientados a «fisioterapeuta en Bilbao». Cuenta los caracteres.
- Canonical absoluto, Open Graph completo (título, descripción, imagen, URL, `og:locale` es_ES), favicon.
- JSON-LD en un solo `<script type="application/ld+json">` con `@graph`:
  - `Physiotherapy` con nombre, URL, imagen, dirección (`PostalAddress`: Calle Ejemplo 12, 48011, Bilbao, ES), teléfono `+34 600 000 000`, correo, horario (`OpeningHoursSpecification` de lunes a viernes, 08:00 a 20:00) y `priceRange` «50 €».
  - `FAQPage` con preguntas y respuestas idénticas al texto visible.
  - Solo datos que se ven en la página.
- `robots.txt` con la línea `Sitemap:` y `sitemap.xml` con la URL absoluta.
- GEO: nombre, dirección, teléfono y horario con los mismos datos en el contenido, el pie y el JSON-LD (en el texto visible el teléfono va como en el brief, «600 000 000»; en `tel:` y JSON-LD, con prefijo +34). Cada respuesta de las preguntas frecuentes se entiende sin leer la pregunta. `llms.txt` breve con qué es la clínica, servicios, precio, zona y cómo reservar, solo con datos del brief.
- La URL pública está en el prompt maestro. Úsala en canonical, Open Graph, JSON-LD, robots y sitemap.

## Rendimiento

- Meta: 90 o más en PageSpeed Insights móvil, que es como lo mide Alma Digital. Apunta a 90 o más también en Accesibilidad, Buenas prácticas y SEO.
- Cero peticiones a terceros. JavaScript con `defer`. CSS pequeño y sin reglas sin usar.
- `vercel.json` con caché larga e inmutable para fuentes e imágenes, y caché corta para HTML.

## Verificación al cerrar cada fase

1. Validador del W3C sin errores.
2. Lighthouse móvil en local (`npx lighthouse`, 3 corridas, mediana) en las cuatro categorías.
3. Capturas a 360, 768, 1024 y 1440 px (`npx playwright screenshot`) y revisión de desbordes, espaciado y jerarquía.
4. Recorrido con teclado: menú, enlaces, acordeón, formulario.
5. Revisión de CSS: todas las clases siguen BEM, sin selectores anidados entre bloques, sin valores sueltos fuera de tokens y sin reglas sin usar.
6. Lista corta de lo que cumple y lo que falta, contra la sección 5 del brief.

Después de publicar, César mide en PageSpeed Insights sobre la URL pública. Esa es la cifra de la nota.

## Entrega

Enlace público (Vercel en modo estático), repositorio en GitHub, `prompts.md` con los prompts principales y nota de entrega de 5 líneas como máximo: decisiones tomadas, herramientas de IA y humanizador usados, y la puntuación de PageSpeed Insights en móvil.
