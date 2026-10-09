# Textos nuevos para el humanizador

**Estado: humanizados.** Los n.º 1–33 volvieron del humanizador sin cambios. De los n.º 34–60 se han sustituido los que cambiaron: 42, 43, 44–49 y 54. En los títulos y etiquetas de `llms.txt` (52, 55–59) el humanizador solo añadió un punto final; no se ha aplicado porque rompe el formato de títulos, etiquetas y enlace. Humanizador usado: Undetectable.ai (https://undetectable.ai/). Por decisión de César, el n.º 51 pasa de «Atiende» a «Atendemos» para que `llms.txt` vaya entero en primera persona del plural, como el n.º 54 humanizado.

Aquí están todos los textos del sitio que no vienen literales del brief: los propone el diseño o los he redactado yo. Están numerados y cada uno indica dónde va. Cuando me devuelvas las versiones humanizadas con su número, las sustituyo tal cual, sin reescribirlas.

**Cómo pasarlos por el humanizador**

1. Pasa la columna «Texto» de cada tabla, conservando el número de cada línea.
2. Devuélveme la lista con el formato `N.º: texto humanizado`. Si un texto no cambia, basta con poner `N.º: igual`.
3. **Límites:** el n.º 1 (`title`) admite 60 caracteres como máximo y el n.º 2 (`meta description`), 155. Si la versión humanizada se pasa, no la recorto yo: te aviso.
4. **Etiquetas cortas:** las del formulario y la interfaz («Nombre», «Menú»…) conviene dejarlas tal cual o casi. Son nombres de campo y el lector de pantalla las lee así.

Lo que **no** está en esta lista viene literal del brief y no se toca: titular, subtítulo, textos de servicios y pasos, preguntas, la respuesta sobre el precio, datos de contacto, botones y enlaces del pie.

## 1. Metadatos

| N.º | Dónde va | Texto | Límite |
|---|---|---|---|
| 1 | `<title>` (y `og:title`) | Fisioterapeuta en Bilbao · Bertan Fisio, Indautxu | 60 (ahora 49) |
| 2 | `<meta name="description">` (y `og:description`) | Fisioterapeuta en Bilbao (Indautxu). Fisioterapia deportiva, suelo pélvico y readaptación de lesiones, en sesiones de 50 minutos con la misma persona. | 155 (ahora 150) |

`og:title` y `og:description` repiten los n.º 1 y 2. `og:image:alt` repite el n.º 44. Cambian con ellos.

## 2. Interfaz y etiquetas accesibles

| N.º | Dónde va | Texto |
|---|---|---|
| 3 | Enlace para saltar al contenido (primer elemento enfocable) | Saltar al contenido |
| 4 | `aria-label` del botón del menú móvil | Menú |
| 5 | `aria-label` de la navegación principal | Principal |
| 6 | `aria-label` de la navegación del pie | Legal |
| 7 | `aria-label` de la tarjeta del mapa (lo lee el lector de pantalla) | Calle Ejemplo 12, 48011 Bilbao. Ver en Google Maps |
| 8 | Enlace visible de la tarjeta del mapa | Ver en Google Maps |

## 3. Etiquetas de sección y títulos

| N.º | Dónde va | Texto |
|---|---|---|
| 9 | Etiqueta sobre «¿Llevas meses con la misma molestia?» | 01 · Para quién es |
| 10 | Etiqueta de Servicios | 02 · Servicios |
| 11 | Título (h2) de Servicios | Servicios |
| 12 | Etiqueta de Cómo trabajamos | 03 · Cómo trabajamos |
| 13 | Título (h2) de Cómo trabajamos | Cómo trabajamos |
| 14 | Etiqueta de Preguntas frecuentes | 04 · Preguntas |
| 15 | Título (h2) de Preguntas frecuentes | Preguntas frecuentes |
| 16 | Etiqueta de Reserva | 05 · Reserva |

## 4. Franja de datos clave (portada)

| N.º | Dónde va | Texto |
|---|---|---|
| 17 | Dato 1 (icono de reloj) | 50 minutos por sesión |
| 18 | Dato 2 (icono de misma persona) | Siempre la misma persona |
| 19 | Dato 3 (icono de sin receta) | Sin prescripción médica |
| 20 | Dato 4 (icono de ubicación) | Indautxu, Bilbao |

## 5. Chips de molestias (Para quién es)

| N.º | Dónde va | Texto |
|---|---|---|
| 21 | Chip 1 | Espalda que vuelve |
| 22 | Chip 2 | Lesión que no termina de curar |
| 23 | Chip 3 | Rodilla al correr |

## 6. Tarjeta de precio y contacto

| N.º | Dónde va | Texto |
|---|---|---|
| 24 | Etiqueta de la tarjeta de precio (también en `makesOffer.name` del JSON-LD) | Primera valoración |
| 25 | Precio | 50 € |
| 26 | Nota del precio (también en `makesOffer.description` del JSON-LD) | Sesión de 50 minutos |
| 27 | Horario en la reserva y en el pie (el brief lo escribe en minúscula, dentro de una frase) | Lunes a viernes de 8:00 a 20:00 |

## 7. Formulario

| N.º | Dónde va | Texto |
|---|---|---|
| 28 | Etiqueta del campo nombre | Nombre |
| 29 | Etiqueta del campo teléfono | Teléfono |
| 30 | Etiqueta del campo correo | Correo |
| 31 | Etiqueta del desplegable | Motivo de consulta |
| 32 | Opción vacía del desplegable | Elige una opción |
| 33 | Casilla de privacidad («política de privacidad» es el enlace) | He leído y acepto la política de privacidad. |
| 34 | Error: nombre vacío | Escribe tu nombre. |
| 35 | Error: teléfono con menos de 9 cifras | Escribe un teléfono de 9 cifras. |
| 36 | Error: correo no válido | Escribe un correo válido, por ejemplo nombre@correo.es. |
| 37 | Error: sin motivo | Elige un motivo de consulta. |
| 38 | Error: privacidad sin marcar | Acepta la política de privacidad para enviar la solicitud. |
| 39 | Confirmación tras enviar: título | Gracias, hemos recibido tu solicitud. |
| 40 | Confirmación tras enviar: texto | Te llamaremos para confirmar el día y la hora de tu primera valoración. |

## 8. Respuestas de preguntas frecuentes adaptadas para GEO

Son adaptaciones de las respuestas del brief para que se entiendan sin leer la pregunta. César las aprobó en la fase 2. Van en la página y en el `FAQPage` del JSON-LD, que tienen que seguir siendo idénticos.

| N.º | Pregunta | Texto |
|---|---|---|
| 41 | ¿Necesito prescripción médica? | No necesitas prescripción médica: puedes venir directamente a Bertan Fisio. |
| 42 | ¿Cuántas sesiones voy a necesitar? | Te diremos cuántas sesiones necesitas al terminar la primera valoración, con un plan concreto. |
| 43 | ¿Trabajáis con mutuas? | No trabajamos con mutuas. Te damos una factura para que la presentes a tu seguro si lo tienes. |

## 9. Textos alternativos (alt)

| N.º | Imagen | Texto |
|---|---|---|
| 44 | Portada, foto en arco (también en `og:image:alt`) | Fisioterapeuta guiando el movimiento del brazo de una paciente tumbada en camilla. |
| 45 | Portada, foto de detalle | Paciente señalando dónde le duele mientras el fisioterapeuta escucha. |
| 46 | Tarjeta Fisioterapia deportiva | Piernas de una persona corriendo por la calle. |
| 47 | Tarjeta Suelo pélvico | Fisioterapeuta trabajando la movilidad de cadera de un paciente tumbado de lado. |
| 48 | Tarjeta Readaptación de lesiones | Persona subiendo unas escaleras de piedra. |
| 49 | Banda de imagen | Manos de fisioterapeuta trabajando sobre la espalda de un paciente. |

## 10. llms.txt

Las líneas de servicios, precio y datos de contacto copian el brief. Estas son las redactadas:

| N.º | Dónde va | Texto |
|---|---|---|
| 50 | Resumen (línea que empieza por «>») | Clínica de fisioterapia en Indautxu, Bilbao. Sesiones de 50 minutos, siempre con el mismo fisioterapeuta. La primera valoración cuesta 50 €. |
| 51 | Párrafo de presentación | Bertan significa «aquí» en euskera. Atendemos a adultos que trabajan, hacen deporte y quieren dejar de arrastrar una molestia. La primera sesión empieza con una conversación y una valoración completa. |
| 52 | Título de apartado | Precio y condiciones |
| 53 | Condición 1 | No hace falta prescripción médica. |
| 54 | Condición 2 | No trabajamos con mutuas: entregamos factura para presentarla al seguro. |
| 55 | Título de apartado | Dónde y cuándo |
| 56 | Etiqueta del dato de dirección | Dirección |
| 57 | Etiqueta del dato de horario | Horario |
| 58 | Título de apartado | Cómo reservar |
| 59 | Texto del enlace al formulario | Formulario de reserva de la primera valoración |
| 60 | Otra vía de reserva | También por teléfono o por correo. |

En `llms.txt`, «Servicios», «Teléfono» y «Correo» repiten los n.º 11, 29 y 30, y el horario repite el n.º 27 en minúscula.

## JSON-LD: nada que humanizar

- La descripción de `Physiotherapy` es el subtítulo del brief, literal.
- Las preguntas de `FAQPage` son las del brief; las respuestas son la del precio, literal, y los n.º 41 a 43.
- `knowsAbout` lleva los nombres de los servicios.
- La oferta repite los n.º 24 y 26.
