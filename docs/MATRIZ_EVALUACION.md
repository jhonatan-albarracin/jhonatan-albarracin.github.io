# Matriz de evaluación del POPE

> Relación entre los criterios de `docs/02_RUBRICA_POPE.md` y la evidencia concreta de este sitio. Se usa también como lista de comprobación antes de la exposición.

| Criterio (rúbrica) | Nivel máximo que se persigue | Evidencia en este repositorio | Verificación |
| --- | --- | --- | --- |
| **Análisis DAFO y CAME (0,5)** | 0,25 · “más de 5 elementos en cada apartado y explicando por qué” | `index.html#analisis`: 6 fortalezas, 6 debilidades, 6 oportunidades y 6 amenazas, cada una con justificación; matriz CAME con 6 acciones por bloque (C/A/M/E) y referencia al elemento DAFO de origen. | Contar los `<li>` de cada tarjeta: 6 en DAFO y 6 en cada bloque CAME. |
| **Originalidad y creatividad (1)** | 0,6 · “originalidad excepcional en el enfoque” | Tarjetas tipo bento incompleto, paleta huevo roto / borgoña / negro, iconos SVG propios, bloques de tamaños distintos y CAME conectado a la hoja de ruta. | Revisar `assets/css/styles.css` y la sección `#proyectos`. |
| **Análisis de competencias (0,5)** | 0,25 · “exposición clara y original de competencias, habilidades y logros” | `index.html#competencias`: tres categorías (duras, blandas, autodidactas), evidencia por categoría y franja de logros con datos verificables (4,0/5,0; 6 meses; B2; 3 muestras). | Contrastar con `docs/CV_Jhonatan_Albarracin_CORREGIDO.md`. |
| **Organización y estructura (1)** | 0,6 · “excepcionalmente bien organizado con estructura clara” | Menú fijo con secciones numeradas, `skip-link`, migas implícitas en los índices (`01 / Perfil`, etc.), pie con enlaces, `scroll-margin-top`, iconos SVG en cada bloque y diseño responsive. | Probar menú móvil, salto al contenido y navegación con teclado. |
| **Gestión de visibilidad y marca personal (1)** | 0,5 · “planificación clara y original” | `index.html#marca`: lema, tres pilares, enlaces a GitHub/LinkedIn/email, hoja de ruta de 90 días con acciones medibles y coherencia entre CV, web y guion. Metadatos Open Graph en `<head>`. | Ver `<title>`, `<meta name="description">` y `og:*` en `index.html`. |
| **Calidad de la presentación (1)** | 0,6 · “pulida, atractiva y altamente profesional” | CSS propio sin frameworks, tipografía con fallback, estados hover/focus, `prefers-reduced-motion`, estilos de impresión, contraste alto y tarjetas responsive. | Ver `assets/css/styles.css` y `assets/js/main.js`. |
| **Exposición oral** | 5 · “compromiso, tiempo, estilo, expresión y lenguaje no verbal” | `docs/GUION_EXPOSICION.md`: guion cronometrado, dos preguntas al público, notas de entrega, checklist y respuestas a preguntas frecuentes. | Ensayar tres veces con cronómetro; objetivo 4:45–5:00. |

## Criterios del documento de instrucciones

| Contenido exigido | Estado | Ubicación |
| --- | --- | --- |
| Curriculum vitae | ✔ | Versión corregida en MD + `#perfil`, `#trayectoria`, `#contacto` |
| Lista de habilidades (duras, blandas, autodidactas) | ✔ | `#competencias` |
| Información biográfica | ✔ | `#perfil` |
| Copias de títulos, licencias y certificaciones | ◐ | Datos y logro recogidos; copias escaneadas pendientes de añadir |
| Referencias y testimonios | ✔ | `#referencias` (dos contactos reales del CV) |
| Muestras de trabajo | ✔ | `#proyectos` (tres muestras con estado real) |
| Servicio comunitario | ◐ | Declaración honesta y plan en `#referencias` |
| Premios y logros | ✔ | `#competencias` y `#trayectoria` |
| Organización y tabla de contenido | ✔ | Menú de navegación y secciones numeradas |

**Leyenda:** ✔ atendido · ◐ atendido parcialmente o pendiente de evidencia adicional.

## Riesgos detectados antes de la entrega

1. **Copias de títulos:** el CV menciona el diploma de Estudiante Distinguido y el permiso de residencia, pero no hay escaneos. Si el centro los exige, añadirlos a `docs/` y enlazarlos.
2. **Demo en desarrollo:** los repositorios están enlazados, pero la web de citas aún no tiene demo desplegada. Terminarla convertiría la evidencia en verificable.
3. **Datos del CV:** el PDF original contenía una entrada ficticia (TechSolutions). La web y el CV corregido ya no la incluyen; hay que exportar un PDF nuevo antes de enviar candidaturas. El objetivo de multinacional aparece como meta, no como experiencia.
4. **Datos personales:** el sitio publica teléfono y correo de referencias. Si se quiere reducir exposición, cambiar esos bloques por “referencias disponibles a petición”.
