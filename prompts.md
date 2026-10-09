# Prompts

Prompts principales del proyecto, en el orden en que se usaron. Se copian literales.

- **Diseño** (Claude Design): 5 prompts, de la exploración de la portada a la página completa con el lenguaje visual.
- **Desarrollo** (Claude Code): el prompt maestro con el encargo completo. A partir de ahí, el trabajo se dirigió por fases con instrucciones cortas de revisión y aprobación.

## Diseño (Claude Design)

### 1 · Exploración de la portada

```text
Diseña la portada de una landing one-page para Bertan Fisio, una clínica de fisioterapia en el barrio de Indautxu, en Bilbao. Bertan significa «aquí» en euskera.

Concepto: «Aquí te escuchamos antes de tocarte». La página tiene que transmitir calma, cercanía y criterio profesional. Nada de clínica fría ni de gimnasio. Público: adultos de 30 a 55 años que trabajan y hacen deporte, que llegan desde el móvil buscando «fisioterapeuta en Bilbao» y deciden rápido. Objetivo único: que reserven su primera valoración.

Branding obligatorio, sin colores adicionales:
- Fondo #F4F1EC (arena claro)
- Texto #1E2A2B (verde casi negro)
- Principal #2F5D50 (verde bosque)
- Acento #E07A4F (terracota), solo en el botón principal «Reservar valoración», con el texto del botón en #1E2A2B
- Títulos en Fraunces, texto en Inter
- No hay logo: el logotipo es el texto «Bertan Fisio» en Fraunces, verde bosque. No dibujes ningún símbolo.
- Imágenes: luz natural, manos trabajando, gente real en movimiento. Nada de esqueletos 3D ni fotos de banco con sonrisas forzadas.

Contenido de la portada, textos literales:
- Cabecera fija: logotipo «Bertan Fisio», enlaces Servicios, Cómo trabajamos, Preguntas y Contacto, y botón «Reservar valoración». En móvil, botón de menú y «Reservar valoración» visible.
- Título: Aquí te escuchamos antes de tocarte
- Subtítulo: Fisioterapia en Indautxu, Bilbao. Sesiones de 50 minutos con el mismo fisioterapeuta de principio a fin.
- Botón principal: Reservar valoración
- Enlace secundario: Ver servicios

Propón 3 direcciones distintas de composición y tipografía (por ejemplo: editorial con imagen grande, asimétrica con mucho aire, centrada y sobria). Muestra cada una a 1440 px y a 360 px. Prioriza jerarquía clara, escala tipográfica cuidada y espacios generosos; sin efectos ni animaciones llamativas. No agregues textos que no estén aquí.
```

### 2 · Página completa (con la dirección elegida)

```text
Con la dirección [número o nombre], diseña la página completa con estas 8 secciones en este orden, a 1440 px y a 360 px. Textos literales, sin agregar otros.

1. Cabecera fija (la de la portada).

2. Portada (la aprobada).

3. Para quién es
   Título: ¿Llevas meses con la misma molestia?
   Texto: Dolor de espalda que vuelve, una lesión que no termina de curar o una rodilla que te avisa cada vez que sales a correr. No hace falta que sea grave para que merezca atención.

4. Servicios (3 tarjetas)
- Fisioterapia deportiva: Vuelve a entrenar sin miedo, con un plan adaptado a tu deporte.
- Suelo pélvico: Valoración y tratamiento en un espacio privado y tranquilo.
- Readaptación de lesiones: Del alta médica a tu vida normal, paso a paso.

5. Cómo trabajamos (3 pasos numerados)
1. Te escuchamos: La primera sesión empieza con una conversación y una valoración completa.
2. Tratamos: Sesiones de 50 minutos, siempre con la misma persona.
3. Te damos autonomía: Te vas con ejercicios claros para seguir mejorando en casa.

6. Preguntas frecuentes (acordeón, con la primera abierta)
- ¿Necesito prescripción médica? — No. Puedes venir directamente.
- ¿Cuánto cuesta una sesión? — 50 € la sesión de 50 minutos. La primera valoración también cuesta 50 €.
- ¿Cuántas sesiones voy a necesitar? — Te lo decimos al terminar la valoración, con un plan concreto.
- ¿Trabajáis con mutuas? — No. Te damos factura para que la presentes a tu seguro si lo tienes.

7. Reserva y contacto
   Título: Reserva tu primera valoración
   Formulario: nombre, teléfono, correo, motivo de consulta (desplegable con Fisioterapia deportiva, Suelo pélvico, Readaptación de lesiones y Otro) y casilla de privacidad obligatoria. Cada campo con su etiqueta visible. Muestra también un estado de error en un campo y el mensaje de confirmación tras enviar.
   Datos: Calle Ejemplo 12, 48011 Bilbao · 600 000 000 · hola@bertanfisio.es · lunes a viernes de 8:00 a 20:00.
   Mapa: tarjeta con la dirección y un enlace «Ver en Google Maps». Sin mapa incrustado.

8. Pie
   Logotipo, datos de contacto, enlaces a Aviso legal y Privacidad, y © 2026 Bertan Fisio.

Reglas: terracota solo en el botón principal; texto con contraste AA sobre cada fondo; foco visible en enlaces, botones y campos; «Reservar valoración» siempre a un toque en móvil. Ritmo de espacios consistente entre secciones y una sola escala tipográfica para toda la página.
```

### 3 · Hoja de estilo (al aprobar la página completa)

```text
Con la página aprobada, crea una hoja de estilo de una sola página que documente exactamente los valores usados en el diseño, sin inventar valores nuevos. Va a servir para implementar el sitio en CSS puro, así que cada valor debe ser concreto (px, rem o número), con su nombre de token.

1. Color: los 4 colores del branding con su uso, y los pares texto/fondo usados con su contraste. No agregues colores; si necesitas un tono para bordes o fondos de tarjeta, indícalo como transparencia de uno de los 4.
2. Tipografía: escala completa (h1, h2, h3, cuerpo, cuerpo pequeño, etiqueta de formulario, botón, enlaces de navegación), con familia, peso, tamaño en móvil (360 px) y en escritorio (1440 px), interlineado y espaciado entre letras. Lista los pesos de Fraunces e Inter que se usan; máximo 2 por familia.
3. Espacios: escala de espacios con nombre (por ejemplo, xs a 3xl), espacio vertical entre secciones en móvil y escritorio, y separación interna de tarjetas.
4. Layout: ancho máximo del contenedor, márgenes laterales en móvil y escritorio, columnas y separación de rejillas.
5. Radios y sombras: valores de radio por elemento (botón, tarjeta, campo, imagen) y sombras, si las hay.
6. Componentes con sus estados:
    - Botón principal (terracota, texto #1E2A2B) y enlace o botón secundario: normal, hover, foco y activo.
    - Enlaces de navegación: normal, hover, foco y sección activa.
    - Campos del formulario y desplegable: normal, foco, error con su mensaje, y casilla de privacidad marcada y sin marcar.
    - Tarjeta de servicio, paso numerado y elemento del acordeón abierto y cerrado.
    - Mensaje de confirmación del formulario.
7. Foco visible: estilo del contorno sobre fondo claro y sobre fondo oscuro.
8. Imágenes: proporciones usadas (por ejemplo, 4:5 en la portada) y tratamiento (recorte, radio).

Presenta cada sección con el valor escrito y una muestra visual al lado.
```

### 4 · Lenguaje visual (antes de rehacer la página)

```text
La página aprobada está bien ordenada pero se siente plana: solo foto, título y texto. Antes de rehacerla, define el lenguaje visual de Bertan Fisio en una sola hoja. Respeta el branding: solo los 4 colores (puedes usar transparencias de ellos), Fraunces para títulos, Inter para texto, terracota solo en el botón principal. El concepto manda: «Bertan» significa «aquí»; «Aquí te escuchamos antes de tocarte». Calma, cercanía y criterio profesional; ni clínica fría ni gimnasio.

1. Iconografía. Un set propio de 12 iconos de línea, mismo grosor de trazo (1.5 px a 24 px), terminaciones redondeadas, en verde bosque, estilo cálido y orgánico, nada de iconos médicos fríos (sin cruces, estetoscopios ni esqueletos). Iconos para: fisioterapia deportiva, suelo pélvico, readaptación de lesiones, escuchar/conversación, manos/tratamiento, ejercicios en casa/autonomía, reloj (50 minutos), misma persona, sin receta, factura, ubicación, teléfono, correo, horario. Muestra cada uno a 24 y 48 px, sobre arena y sobre verde bosque.

2. Motivo gráfico. Un recurso propio que conecte con «aquí» y con el cuidado: por ejemplo, una forma de arco o ventana para recortar fotos, un trazo orgánico a mano que subraye o rodee una palabra, o una marca de «aquí» que señale. Propón 2 opciones y elige una. Debe poder dibujarse en SVG simple, sin imágenes pesadas.

3. Tratamiento de imagen. Recortes (arco, esquinas suaves), composiciones con superposición de dos fotos o foto con tarjeta encima, y una banda de imagen a todo el ancho entre secciones. Estilo: luz natural, manos trabajando, gente real en movimiento. Nada de gimnasios, mancuernas, espalderas ni fotos con marca de agua.

4. Elementos de apoyo:
    - Etiqueta pequeña sobre cada título de sección (por ejemplo «01 · Servicios»).
    - Franja de datos clave bajo la portada, con icono: 50 minutos por sesión · Siempre la misma persona · Sin prescripción médica · Indautxu, Bilbao. Son datos del brief; no agregues datos nuevos.
    - Tarjeta de precio: primera valoración 50 €, sesión de 50 minutos.
    - Chips o tarjetas con icono para las tres molestias de «Para quién es»: espalda que vuelve, lesión que no termina de curar, rodilla al correr.
    - Barra fija inferior en móvil con «Reservar valoración».
    - Mapa: ilustración SVG abstracta y sencilla con una marca «aquí», sin calles reales, enlazada a Google Maps.

5. Ritmo de secciones. Alterna fondos (arena, arena con transparencia de verde, verde bosque) y composiciones (texto con foto, rejilla de tarjetas, banda de imagen, bloque centrado) para que no todas las secciones se vean igual.

6. Movimiento. Solo sutil: aparición suave al desplazar, elevación ligera en tarjetas al pasar el cursor, apertura suave del acordeón. Todo desactivable con reduced-motion.

No uses testimonios, reseñas, valoraciones con estrellas, nombres de fisioterapeutas ni cifras que no estén en el brief.
```

### 5 · Página completa con el lenguaje visual

```text
Rehaz la página completa (8 secciones, 1440 y 360 px) aplicando el lenguaje visual aprobado. Mantén los textos literales del brief. Usa los elementos de apoyo donde aporten: franja de datos bajo la portada, chips de molestias en «Para quién es», icono en cada servicio, iconos en los pasos de «Cómo trabajamos», tarjeta de precio junto al formulario, mapa ilustrado, iconos en datos de contacto y pie, y barra de reserva fija en móvil. Incluye al menos una banda de imagen a todo el ancho. Cambia cualquier foto con marca de agua o con aspecto de gimnasio. Muestra también el formulario con un error y el mensaje de confirmación.
```

## Desarrollo (Claude Code)

### 6 · Encargo (prompt maestro)

El encargo completo con el concepto, los textos del brief, las 8 secciones y las 4 fases de trabajo está en [`prompt-maestro.md`](prompt-maestro.md). Las reglas de proceso, tecnología, diseño, SEO, GEO y verificación que acompañan al encargo están en [`CLAUDE.md`](CLAUDE.md).
