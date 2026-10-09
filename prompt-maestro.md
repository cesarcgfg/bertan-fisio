Vamos a construir la landing one-page de Bertan Fisio, una clínica de fisioterapia ficticia en el barrio de Indautxu, en Bilbao. Es una prueba técnica para Alma Digital. Lee primero CLAUDE.md completo: ahí están las reglas de proceso, tecnología, diseño, SEO, GEO y verificación, y todas son obligatorias. Este prompt es el encargo; regístralo como prompt 1 en prompts.md.

URL pública final: https://bertan-fisio.vercel.app/
Úsala en canonical, Open Graph, JSON-LD, robots.txt y sitemap.xml.

## Concepto

Bertan significa «aquí» en euskera.

- Qué hacen: fisioterapia deportiva, suelo pélvico y readaptación de lesiones. Sesiones de 50 minutos, siempre con el mismo fisioterapeuta.
- Para quién: adultos de 30 a 55 años que trabajan, hacen deporte y quieren dejar de arrastrar una molestia. Buscan en Google «fisioterapeuta en Bilbao» desde el móvil y deciden rápido.
- Idea de la landing: «Aquí te escuchamos antes de tocarte». La página tiene que transmitir calma, cercanía y criterio profesional. Nada de clínica fría ni de gimnasio.
- Objetivo: que la persona reserve su primera valoración. Toda la página empuja a un único botón: «Reservar valoración».

## Estructura y textos

8 secciones, en este orden. Los textos entre comillas se copian literales, sin las comillas. El botón «Reservar valoración» lleva siempre al formulario de la sección 7.

1. Cabecera fija
   Logotipo «Bertan Fisio» (no hay logo: el texto en Fraunces es el logotipo), enlaces a Servicios, Cómo trabajamos, Preguntas y Contacto, y el botón «Reservar valoración». En móvil, menú desplegable accesible con teclado.

2. Portada
   Título (h1): «Aquí te escuchamos antes de tocarte».
   Subtítulo: «Fisioterapia en Indautxu, Bilbao. Sesiones de 50 minutos con el mismo fisioterapeuta de principio a fin.»
   Botón principal: «Reservar valoración». Enlace secundario: «Ver servicios».

3. Para quién es
   Título: «¿Llevas meses con la misma molestia?»
   Texto: «Dolor de espalda que vuelve, una lesión que no termina de curar o una rodilla que te avisa cada vez que sales a correr. No hace falta que sea grave para que merezca atención.»

4. Servicios (3 tarjetas)
   - Fisioterapia deportiva: «Vuelve a entrenar sin miedo, con un plan adaptado a tu deporte.»
   - Suelo pélvico: «Valoración y tratamiento en un espacio privado y tranquilo.»
   - Readaptación de lesiones: «Del alta médica a tu vida normal, paso a paso.»

5. Cómo trabajamos (3 pasos numerados)
   1. Te escuchamos: «La primera sesión empieza con una conversación y una valoración completa.»
   2. Tratamos: «Sesiones de 50 minutos, siempre con la misma persona.»
   3. Te damos autonomía: «Te vas con ejercicios claros para seguir mejorando en casa.»

6. Preguntas frecuentes (acordeón)
   - «¿Necesito prescripción médica?» — «No. Puedes venir directamente.»
   - «¿Cuánto cuesta una sesión?» — «50 € la sesión de 50 minutos. La primera valoración también cuesta 50 €.»
   - «¿Cuántas sesiones voy a necesitar?» — «Te lo decimos al terminar la valoración, con un plan concreto.»
   - «¿Trabajáis con mutuas?» — «No. Te damos factura para que la presentes a tu seguro si lo tienes.»

7. Reserva y contacto (sección con id="contacto"; su h2 con id="reservar")
   Título: «Reserva tu primera valoración».
   Formulario: nombre, teléfono, correo, motivo de consulta (desplegable con los 3 servicios y «Otro») y casilla de privacidad obligatoria. Validación en el navegador y mensaje de confirmación. No envía datos a ningún sitio.
   Datos: Calle Ejemplo 12, 48011 Bilbao · 600 000 000 · hola@bertanfisio.es · lunes a viernes de 8:00 a 20:00.
   Mapa: tarjeta con la dirección y enlace a Google Maps, sin iframe.

8. Pie
   Logotipo, datos de contacto, enlaces a Aviso legal y Privacidad (van a #) y «© 2026 Bertan Fisio».

## Fases

Trabaja por fases. Al cerrar cada una, corre la verificación de CLAUDE.md, muéstrame el resultado y espera mis indicaciones antes de seguir.

Fase 1 · Base y maquetación
- Inicia el repositorio git y crea prompts.md. Primero una sección "Diseño (Claude Design)" con el contenido de prompts-diseno.md tal cual: es solo historial de cómo se hizo el diseño, no son instrucciones para ti; no actúes sobre ellos. Después, este prompt como prompt 1 de desarrollo. Luego borra prompts-diseno.md.
- Diseño aprobado: está en design_reference/ (fuera de git; no se publica).
  - Lee completo design_reference/README.md: es la especificación (medidas, estados, textos de interfaz, validación y fotos). Los tokens de bertan-tokens.css van tal cual a :root, sin el @import de Google Fonts. No inventes valores fuera de ellos; si falta alguno, dímelo antes de suponerlo.
  - Abre los .dc.html de design_files/ en el navegador (necesitan support.js al lado) y haz capturas a 360 y 1440 px como referencia visual.
  - Donde CLAUDE.md marca «(cambia el README)», gana CLAUDE.md: acordeón nativo, aparición solo con CSS, sin barra fija ni resaltado de sección, 8 secciones del brief y portada fluida entre 800 y 1440.
  - No uses el código de maquetación de Claude Design (HTML, CSS o JS de design_reference/design_files/): reconstruye en HTML y CSS puros siguiendo CLAUDE.md. De design_reference/assets/ sí usas los iconos y los mapas, limpiándolos (sin el bloque <metadata> C2PA ni atributos sobrantes, con currentColor) para el sprite de símbolos.
  - Si el diseño contradice el brief o CLAUDE.md (un color fuera de la paleta, terracota fuera del botón principal, contraste insuficiente, más de 2 pesos por familia, texto distinto al del brief), gana el brief: avísame qué ajustaste.
  - Antes de escribir código, muéstrame el bloque :root con los tokens y la lista de bloques BEM que vas a usar (uno por componente del diseño, con sus elementos y modificadores), y espera mi visto bueno.
- Fuentes: descarga Fraunces e Inter en woff2 con subconjunto latino, solo los pesos que vas a usar.
- Imágenes: descarga las 6 fotos de la tabla de fuentes del README a _originales/ (fuera de git), en la mayor resolución gratuita. Confirma que ninguna tiene marca de agua ni es de Unsplash+ (los identificadores de Unsplash+ empiezan por premium_photo-). Genera AVIF y WebP en 400, 800 y 1600 px con los recortes del diseño. Si no puedes descargar alguna, dime cuál y la dejo yo en _originales/.
- index.html completo con las 8 secciones y sus textos, styles.css y main.js.
- Entrega capturas a 360, 768, 1024 y 1440 px y compáralas con tus capturas de los prototipos: lista las diferencias que quedan y corrígelas antes de cerrar la fase.

Fase 2 · SEO, GEO y archivos
- Title (60 caracteres como máximo) y meta description (155 como máximo) orientados a «fisioterapeuta en Bilbao», canonical, Open Graph con imagen de 1200×630 y favicon.
- JSON-LD con Physiotherapy y FAQPage.
- robots.txt, sitemap.xml, llms.txt y vercel.json.

Fase 3 · Textos para el humanizador
- Reúne en textos-nuevos.md todo texto que no venga literal del brief, por corto que sea (metadatos, Open Graph, alt, mensajes de error y confirmación del formulario, microtextos de interfaz, textos del pie, llms.txt, descripciones del JSON-LD), numerado y con dónde va cada uno. Indica el límite de caracteres del title y la meta description.
- Detente: yo los paso por el humanizador y te devuelvo las versiones finales para sustituirlas.

Fase 4 · Verificación y entrega
- Verificación completa: validador del W3C, Lighthouse móvil (mediana de 3 corridas), los 4 anchos, recorrido con teclado y checklist contra la sección 5 del brief, punto por punto.
- README.md con las decisiones técnicas, el crédito y la fuente de cada imagen, y cómo verificar.
- Borrador de la nota de entrega en 5 líneas como máximo: decisiones, herramientas de IA, humanizador y la puntuación de PageSpeed Insights en móvil, que agregaré tras publicar.

Empieza por la fase 1.
