# Invitación Interactiva de Quince Años

Sitio web de invitación de una sola página con formato de franja central angosta (estilo panel central de tríptico, ~432 px). Se compone de una **portada** que, al hacer clic, revela la **invitación completa**. Pensado como maqueta base para el cliente, con datos y fotos de ejemplo listos para reemplazar.

---

## Concepto

Invitación elegante y sobria en franja vertical estrecha, centrada sobre un fondo más oscuro para que la pieza destaque como una tarjeta. El motivo gráfico recurrente es una **línea vertical con un diamante al centro** que separa las secciones, y una **silueta de caballo** como marca de agua tenue detrás de los acompañantes (tema campestre/ecuestre).

---

## Paleta de colores

| Nombre | HEX | Uso sugerido |
|---|---|---|
| Esmeralda Oscuro | `#0F3D34` | Fondo del escenario, texto principal, botones |
| Esmeralda Medio | `#134E43` | Fondo de la franja, tarjetas, superficies secundarias |
| Crema Menta | `#E6F0E9` | Texto sobre esmeralda, detalles suaves, íconos claros |
| Blanco Crema | `#F7F6F1` | Fondos claros, marcos de fotos, texto sobre esmeralda |
| Dorado Elegante | `#C8A96A` | Acentos, diamantes, divisores, nombre en firma, líneas |

**Idea de aplicación:** franja sobre fondo Esmeralda Oscuro; superficies en Esmeralda Medio; textos y marcos en Blanco Crema / Crema Menta; y el Dorado Elegante reservado como único acento (nombre en firma, diamantes de los divisores, bordes de botones y marcadores). La disciplina está en usar el dorado con moderación para que siga sintiéndose elegante.

---

## Tipografía

- **Firma / display:** *Alex Brush* — nombre de la quinceañera y la palabra "Recepción".
- **Serif principal:** *Cormorant Garamond* — mensajes, horas, direcciones, números de la cuenta regresiva.
- **Mayúsculas / etiquetas:** *Cinzel* — "MIS QUINCE AÑOS", "CEREMONIA", "CÓDIGO DE VESTIMENTA" y demás rótulos en versalitas espaciadas.

---

## Estructura

### Página 1 · Portada

1. **Foto** de la quinceañera arriba, con desvanecido suave hacia el fondo.
2. Rótulo "Están cordialmente invitados a".
3. **"Mis Quince Años"** en tipografía de firma.
4. Ilustración de un **sobre de papel con sello de lacre**.
5. **Flecha de círculos** apuntando hacia el sobre + texto "Clic para abrir nuestra invitación".
6. Al hacer clic, se revela la invitación completa (Página 2).

### Página 2 · Invitación

1. **Foto** con margen de ~6 px que deja ver el fondo en los bordes.
2. **"MIS QUINCE AÑOS"** en mayúsculas → **divisor vertical con diamante** → **nombre** en firma (el doble de grande) → **apellidos** en mayúsculas (mismo tamaño que "MIS QUINCE AÑOS").
3. **Reproductor de música:** rótulo "Reproduce mi canción favorita", botón play/pausa y barra de progreso.
4. **Fecha** del evento + **mensaje** emotivo para el invitado + otra **foto**.
5. **Cuenta regresiva** "Faltan" con formato `DD : HH : MM : SS` y etiquetas.
6. **Acompañantes** (padres y padrinos) sobre la **silueta de caballo** como marca de agua.
7. **Ceremonia:** ícono de capilla, subtítulo "Ceremonia", hora en tamaño grande entre divisores de diamante, nombre de la parroquia y botón "Ver mapa".
8. **Recepción:** ícono de dos copas brindando (tono más oscuro que el fondo), "Recepción" en cursiva, lugar y hora entre divisores, botón "Ver mapa".
9. **Foto** con el mismo margen de ~6 px.
10. **Código de vestimenta:** subtítulo, dos siluetas (traje y vestido) y texto grande pidiendo **evitar el color verde**.
11. **Itinerario:** línea de tiempo vertical donde cada marcador de hora es un **corazón**.
12. **Confirmar asistencia:** cierre con botón de RSVP.

---

## Funcionalidad interactiva

- **Portada → invitación:** el clic en el sobre revela la Página 2.
- **Cuenta regresiva:** se calcula en vivo a partir de la fecha del evento.
- **Reproductor:** play/pausa con animación de barra y ecualizador (vista previa hasta añadir el MP3).
- **Botones de mapa y RSVP:** enlaces externos (Google Maps y WhatsApp).
- Diseño responsive y respeto por `prefers-reduced-motion`.

---

## Elementos a reemplazar

- **Fotos:** sustituir los marcadores por las imágenes reales de la quinceañera.
- **Datos:** nombre, apellidos, padres, padrinos, fecha, horas, parroquia y lugar de recepción (actualmente son de ejemplo).
- **Canción:** definir el `src` del elemento de audio.
- **Enlaces:** URL real del mapa y del botón de confirmación.
- **Fecha de la cuenta regresiva:** ajustar en el script.

---

## Nota sobre la paleta

Esta paleta esmeralda/dorado sustituye la versión crema/café de la maqueta actual. Es un giro hacia un tono más formal y señorial; si se aplica, conviene actualizar también la marca de agua del caballo y los íconos a los nuevos valores (silueta en Esmeralda Medio a baja opacidad, acentos en Dorado Elegante).