# Proceso de construcción del POPE

Registro continuo del trabajo realizado para crear este **Portafolio Personal para la Empleabilidad (POPE)**. Sirve como bitácora para el centro, como memoria técnica para Jhonatan y como guía para mantener el sitio.

**Repositorio central:** `C:\Users\Estudiante.MAQUETAPA_EDU\Documents\DAW2\IPEI\jhonatan-albarracin.github.io`
**Destino de publicación:** `https://jhonatan-albarracin.github.io/`
**Fecha de inicio:** 18 de noviembre de 2026

---

## 0. Qué es un POPE

POPE significa **Portafolio Personal para la Empleabilidad**. No es solo un CV en PDF: es un sitio (o documento) visual donde se muestran juntos:

- el currículum y los datos de contacto;
- las habilidades organizadas por categorías;
- una biografía breve (“acerca de mí”);
- títulos, licencias y certificaciones;
- referencias y testimonios;
- muestras de trabajo;
- servicio comunitario, premios y logros.

Además, la rúbrica de la actividad exige un **DAFO y CAME**, análisis de competencias, originalidad, organización, marca personal y calidad de presentación. Por eso el sitio incluye secciones específicas para esos criterios y un documento de trazabilidad.

---

## 1. Fase de investigación (entradas)

| Paso | Acción | Resultado |
| --- | --- | --- |
| 1.1 | Listar el repositorio central. | Encontramos `README.md` (con la palabra `POPE`) y la carpeta `docs/`. |
| 1.2 | Inventariar `docs/`. | `POPE.docx`, `Rúbrica POPE pdf.pdf`, `Rúbrica exposicón oral del portafolio.docx`, `CV_Jhonatan_Albarracin.pdf`, `presentación.pdf`. |
| 1.3 | Extraer el texto de los DOCX. | Se leyó `word/document.xml` dentro del ZIP con Python (stdlib `zipfile` + `re`). No hacía falta instalar nada. |
| 1.4 | Extraer el texto de los PDF. | Se instaló `pypdf` y se extrajeron las páginas con `PdfReader(...).pages`. |
| 1.5 | Revisar los perfiles de GitHub con la API pública. | Se confirmaron repositorios en `jhonatan-albarracin` y `SoloK4tt` para elegir muestras reales. |
| 1.6 | Revisar el proyecto local de XAMPP (`C:\xampp\htdocs\pruebaopencode`). | Se valoró como posible muestra; finalmente se descartó por decisión del usuario. |

### Comandos utilizados (PowerShell / Python)

```powershell
python -c "import zipfile,re,html; z=zipfile.ZipFile(r'...\POPE.docx'); x=z.read('word/document.xml').decode('utf-8'); x=re.sub(r'</w:p>', '\n', x); x=re.sub(r'<[^>]+>', '', x); print(html.unescape(x))"
python -m pip install --user --quiet pypdf
python -c "from pypdf import PdfReader; print('\n'.join((p.extract_text() or '') for p in PdfReader(r'...\Rúbrica POPE pdf.pdf').pages))"
```

### Hallazgo relevante

La rúbrica puntúa el **análisis DAFO y CAME** con 0,25 sobre 0,5 solo si hay **más de 5 elementos en cada apartado y están explicados**. Por eso el sitio tiene exactamente 6 elementos justificados por cuadrante y 6 acciones por bloque CAME.

---

## 2. Fase de decisiones

| Decisión | Motivo |
| --- | --- |
| Publicar en la **raíz** del repo (`index.html`), no en `/docs`. | Los repositorios `usuario.github.io` sirven la rama `main` desde la raíz. La carpeta `docs/` se reserva para documentos de apoyo. |
| Usar HTML, CSS y JS propios, sin framework. | GitHub Pages es estático; así no hay build, dependencias ni coste. Además es una muestra de competencia técnica. |
| Idioma español. | Es el idioma de la actividad y del CV. |
| Honestidad con los datos. | La versión original del CV incluía una entrada ficticia (TechSolutions). Se eliminó de la web y se creó `docs/CV_Jhonatan_Albarracin_CORREGIDO.md`. La web distingue **realizado / en curso / objetivo**. |
| Muestras con etiqueta de estado. | El propio usuario consideraba sus proyectos “incompletos”. En lugar de ocultarlos, se muestran como evidencia de aprendizaje con estado real: es más creíble y responde al criterio de muestras de trabajo académicas. |
| Publicar el CV completo (teléfono, email y referencias). | Decisión explícita del usuario. Se documenta el riesgo de exposición en la matriz de evaluación. |
| Servicio comunitario sin inventar. | No hay datos reales de voluntariado; se declara el plan y se marca como pendiente. |
| Nombres de archivo ASCII en los enlaces (`GUION_EXPOSICION.md`, `MATRIZ_EVALUACION.md`). | Evita problemas de codificación de URLs con acentos en GitHub Pages. |

---

## 3. Fase de arquitectura de contenidos

Se definió una página única con nueve secciones numeradas y un menú fijo (distribución inicial; la versión definitiva está en la iteración 3):

1. **Portada** — tesis, lema, llamadas a la acción y tarjeta de identidad.
2. **Perfil** — biografía y ficha rápida.
3. **Competencias** — duras, blandas, autodidactas y logros.
4. **Trayectoria** — línea de tiempo con estados.
5. **Proyectos** — tres repositorios reales con el estado indicado.
6. **DAFO + CAME** — 6 + 6 + 6 + 6 elementos y 4 x 6 acciones.
7. **Marca personal** — lema, pilares y hoja de ruta de 90 días.
8. **Documentos** — CV, presentación, guion, proceso, matriz e instrucciones.
9. **Referencias y contacto** — dos referencias del CV y canales de contacto.

Cada sección corresponde a un requisito del documento `POPE.docx` o a un criterio de la rúbrica; la correspondencia está en `docs/MATRIZ_EVALUACION.md`.

---

## 4. Fase de implementación

### Archivos creados

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura semántica, textos y enlaces del portafolio. |
| `assets/css/styles.css` | Sistema visual, responsive, print y `prefers-reduced-motion`. |
| `assets/js/main.js` | Menú móvil y copia de email. |
| `docs/CV_Jhonatan_Albarracin_CORREGIDO.md` | CV en texto sin la entrada ficticia; base para exportar el PDF definitivo. |
| `assets/favicon.svg`, `robots.txt`, `sitemap.xml` | Icono y metadatos para buscadores; evitan peticiones 404 durante la auditoría. |
| `PROCESO.md` | Esta bitácora. |
| `docs/01_INSTRUCCIONES_POPE.md` | Instrucciones extraídas del DOCX original. |
| `docs/02_RUBRICA_POPE.md` | Rúbrica extraída del PDF original. |
| `docs/03_RUBRICA_EXPOSICION.md` | Rúbrica de exposición oral. |
| `docs/GUION_EXPOSICION.md` | Guion cronometrado para la defensa. |
| `docs/MATRIZ_EVALUACION.md` | Relación criterio → evidencia y riesgos. |

### Archivos conservados sin modificar

- `docs/CV_Jhonatan_Albarracin.pdf`
- `docs/presentación.pdf`
- `docs/POPE.docx`
- `docs/Rúbrica POPE pdf.pdf`
- `docs/Rúbrica exposicón  oral del portafolio.docx`

### Archivos modificados

- `README.md`: se mantuvo el cambio previo del usuario (`PEPO` → `POPE`) y se amplió con instrucciones de uso y publicación.

### Sistema visual inicial

> Sustituido por la paleta huevo roto / borgoña / negro en la iteración 3.

Paleta oscura (`#0a1220`) con acento verde menta (`#5ce1bd`), ámbar para estados previstos y azul para tecnologías. Tipografías `Space Grotesk` e `IBM Plex Mono` con fallbacks del sistema. La metáfora es un *build log*: etiquetas de sección tipo `01 / Perfil`, tarjeta `/perfil.json`, ventana de código y línea de tiempo con nodos.

---

## 5. Fase de verificación

Comprobaciones realizadas antes de dar por terminada la entrega:

- [x] Los nueve enlaces del menú apuntan a IDs existentes.
- [x] Los enlaces a documentos apuntan a archivos reales (sin acentos en la URL).
- [x] Los enlaces externos usan `target="_blank" rel="noopener"`.
- [x] La web es de una sola columna en móvil y el menú se abre/cierra con `aria-expanded`.
- [x] `skip-link`, `:focus-visible`, `aria-live` y `prefers-reduced-motion` están presentes.
- [x] No se usa `innerHTML` con datos externos ni se cargan scripts de terceros.
- [x] Las cifras del CV (4,0/5,0; 6 meses; B2) coinciden entre web y el CV corregido. El PDF original conserva una entrada ficticia y dejó de ser la fuente de la web.
- [x] Prueba en navegador real: menú móvil abre/cierra, los enlaces del menú navegan y cierran el panel, consola sin errores y sin desbordamiento horizontal a 512 px.
- [x] Lighthouse: accesibilidad 1,00 / buenas prácticas 1,00 / SEO 1,00 sin fallos (tras corregir el nombre accesible del enlace de marca).
- [ ] Verificar el despliegue en GitHub Pages después del `push`.

### Prueba local recomendada

```powershell
cd "C:\Users\Estudiante.MAQUETAPA_EDU\Documents\DAW2\IPEI\jhonatan-albarracin.github.io"
python -m http.server 8000
```

Abrir `http://localhost:8000/` y revisar menú, enlaces y vista móvil (F12 → device toolbar).

---

## 6. Fase de publicación en GitHub Pages

1. Guardar todos los archivos en la rama `main`.
2. Confirmar que `index.html` está en la **raíz** del repositorio.
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Esperar 1–2 minutos y abrir `https://jhonatan-albarracin.github.io/`.
5. Si aparece 404, revisar que el repo sea público y que el nombre del repositorio sea exactamente `jhonatan-albarracin.github.io`.

Comandos habituales:

```powershell
git status
git add .
git commit -m "POPE: portafolio personal, DAFO/CAME y documentación del proceso"
git push origin main
```

> No se hizo `push` automático: publicar deja los datos personales accesibles en internet y conviene que Jhonatan revise el resultado antes.

---

## 7. Mantenimiento

- **Cada cambio de proyecto:** actualizar `#proyectos` y la matriz de evaluación.
- **Cada mes:** revisar enlaces, estado del DAFO/CAME y la hoja de ruta.
- **Antes de cada entrevista:** adaptar el PDF del CV y resaltar en la web las competencias que pide el puesto (el documento original recomienda personalizar el portafolio).
- **Si un proyecto se termina:** añadir el enlace y una captura real en `#proyectos`.
- **Si se consigue un testimonio escrito:** añadirlo en `#referencias` y tachar la acción E3 del CAME.

---

## 8. Pendientes concretos

1. Escanear y añadir copias del diploma de Estudiante Distinguido y del permiso de residencia.
2. Cerrar la demo de `proyectoDWES` con README y despliegue.
4. Ensayar el guion de exposición tres veces con cronómetro.
5. Revisar el impacto de publicar teléfono y correos de referencias; decide si se mantienen o pasan a “bajo petición”.
6. Exportar el CV corregido a PDF y sustituir `CV_Jhonatan_Albarracin.pdf` antes de enviar candidaturas.
7. Mantener los commits bajo control del usuario: esta sesión no debe hacerlos.

---

## 9. Iteración 2 · correcciones del usuario (18/11/2026)

Después de revisar la primera versión se recibieron tres observaciones. Se registran aquí porque forman parte del proceso de diseño del portafolio.

| Observación | Corrección aplicada |
| --- | --- |
| “Prácticas de desarrollo web · TechSolutions” era **ficticio**. | Se eliminó el elemento de la línea de tiempo, del guion de exposición y de la matriz. Se creó `docs/CV_Jhonatan_Albarracin_CORREGIDO.md` sin esa entrada. El PDF original se conserva como documento histórico, pero la web ya no lo usa como enlace principal y se avisa de su error. |
| En lugar de prácticas, el objetivo es una **multinacional** (Indra, Google, Amazon…). | Se añadió el objetivo en portada, ficha rápida, línea de tiempo (“objetivo · 2027 en adelante”), marca personal, guion y contacto. Siempre redactado como meta, nunca como experiencia ya conseguida. |
| Demasiado texto, letra pequeña y colores que cansan / cuesta leer. | Se acortaron los textos de casi todas las secciones. Se subió el tamaño base de 16 px a 17 px y el de las listas DAFO/CAME a 1 rem. Se aclararon `--muted` y `--muted-dark`, se elevó el contraste de los comentarios de código y se aumentó el interlineado. El DAFO/CAME mantiene los 6 elementos explicados que exige la rúbrica, pero con frases de una línea. |

### Resultado de la segunda verificación

- [x] Enlaces locales y anclas revisados de nuevo tras la reescritura de `index.html`.
- [x] Sin 404 de `favicon.ico`, `robots.txt` ni `sitemap.xml`.
- [x] Lighthouse vuelto a ejecutar tras el cambio de tipografía y colores: accesibilidad 1,00 / buenas prácticas 1,00 / SEO 1,00, sin fallos.
- [x] Ninguna mención a TechSolutions queda en la web ni en los documentos de apoyo (salvo la nota que explica la corrección).

---

## 10. Iteración 3 · rediseño visual y alcance (18/11/2026)

Nuevas indicaciones del usuario antes de publicar:

| Observación | Corrección aplicada |
| --- | --- |
| Los commits los hace el usuario. | Se hicieron `git reset --soft origin/main` para devolver los dos commits locales al área de preparación. Esta sesión ya no crea commits; todo queda listo para que Jhonatan revise y confirme. |
| Quitar la muestra de temática lúdica que no gustaba. | Se eliminó por completo de `index.html`, del CV corregido, del guion, de la matriz y de esta bitácora. Las muestras son tres repositorios reales (`proyectoDWES`, `Flask-MongoDB-CRUD`, `triqui-acs`). |
| Nueva paleta: **huevo roto** de fondo, **borgoña** principal y **negro** complementario. | Se redefinieron las variables CSS: `--egg #f4eee2`, `--egg-light #fffaf2`, `--egg-dark #e8ddca`, `--wine #6f1f2e`, `--wine-dark #49131f`, `--wine-light #a84659`, `--ink #171313`. Los tonos extra son solo aclarados/oscurecidos de esos tres colores; el gris cálido `--muted #5d504a` permite leer texto secundario sin fatiga. |
| Diseño de **tarjetas**, tipo bento sin llegar a serlo. | Se reescribió `styles.css` con cuadrículas `bento-*` de 12 columnas: tarjetas anchas y estrechas conviven en la misma fila (perfil 7/5, competencias 6/3/3, proyectos 7/5 + una ancha, marca 6/2/2/2). Bordes finos, esquinas redondeadas y sombras suaves; sin degradados ni brillos. |
| Menos texto, más imágenes o iconos. | Se añadieron nueve iconos SVG propios y reutilizables en la cabecera de cada sección; la tarjeta de proyectos incluye una vista previa dibujada con CSS. Se acortaron los párrafos a una o dos frases y se conservaron los 6 elementos explicados por bloque DAFO/CAME que pide la rúbrica. |
| Texto fácil de leer. | Tamaño base 18 px, interlineado 1,6, listas DAFO/CAME de 0,98 rem y contraste alto (borgoña/negro sobre huevo roto). |
| No complicar el código. | `main.js` pasó de 70 a unas 30 líneas: solo menú móvil y copia de email. Se eliminaron el *scroll spy* y las animaciones de revelado. Se usó una sola hoja CSS plana y SVG en línea sin librerías externas. |

### Tercera verificación

- [x] Comprobar en navegador el menú móvil (abre/cierra y se cierra al pulsar un enlace) y el botón de copiar email; si el navegador bloquea el portapapeles, muestra el correo para copiarlo a mano.
- [x] Revisar que no haya desbordamiento horizontal a 497 px de ancho; se corrigió la prioridad de las reglas `nth-child` en las cuadrículas.
- [x] Confirmar que no queda ninguna referencia a la muestra eliminada (`grep` devuelve 0 coincidencias).
- [x] Todos los enlaces internos y a documentos devuelven 200; consola sin errores; contraste texto/fondo 15,96:1 y borgoña/fondo claro 10,57:1.
- [ ] El usuario revisa y crea los commits; después se hace `push` y se configura Pages.

---

## 11. Iteración 4 · reestructuración según la ficha de práctica (25/11/2026)

Apareció un documento nuevo en `docs/`: **`Ficha_practica_Portfolio_IPE_ para hacer un portafolio.pdf`**. Se extrajo su texto con `pypdf` y se guardó una versión de trabajo en `docs/04_GUIA_FICHA_PRACTICA.md` (incluye la checklist y las preguntas de reflexión con espacio para responder).

### Qué pedía la ficha y qué se cambió

| Requisito nuevo | Cambio aplicado |
| --- | --- |
| Seis apartados mínimos: sobre mí, competencias, proyectos, formación, experiencia y contacto | `index.html` se reescribió con ese orden exacto y numeración `01`–`06` en el menú. La antigua “Trayectoria” se dividió en `#formacion` y `#experiencia`. |
| Dos proyectos del ciclo con seis datos por tarjeta | `#proyectos` pasa de tres muestras a **dos tarjetas**. Cada una tiene huecos etiquetados para nombre, problema, tecnologías, parte propia, dificultad/solución y enlace o captura. Los huecos se ven en terracota y llevan comentarios HTML con instrucciones. |
| Al menos 4 técnicas y 3 personales; no inventar conocimientos | `#competencias` muestra 8 técnicas y 4 personales, cada categoría con evidencia. Se conserva la categoría autodidacta de la rúbrica POPE. |
| Frase profesional breve y titulación de Técnico Superior en DAW | Portada y tarjeta de identidad actualizadas con la frase de la ficha y el grado en curso. |
| No publicar datos personales innecesarios | Se retiró el teléfono del apartado `#contacto` y se dejó un comentario HTML para volver a añadirlo si se quiere. El CV de `docs/` lo mantiene para el proceso de selección. |
| DAFO/CAME, marca, documentos y referencias | Se movieron a un **apéndice** (`#apendice`) para que el núcleo del portafolio sea exactamente lo que pide la ficha. Se mantienen los 6 elementos explicados por cuadrante y las 4×6 acciones CAME que exige la rúbrica. |
| Diseño claro y legible; el usuario no estaba a gusto con las paletas anteriores | Nueva paleta **marfil (`#f7f4ec`) / pizarra (`#2f5065`) / terracota (`#b25c3d`)**. El pizarra estructura y la terracota señala los huecos y los acentos. Se descartan el negro/azul oscuro y el blanco/rojo que se probaron antes. Se actualizó también `assets/favicon.svg` y `meta theme-color`. |

### Estructura resultante

```text
#inicio → 01 sobre-mi → 02 competencias → 03 proyectos
        → 04 formacion → 05 experiencia → 06 contacto
        → #apendice (analisis, marca, documentos, referencias)
```

### Documentos actualizados en esta iteración

- `index.html`, `assets/css/styles.css`, `assets/favicon.svg`: sitio y sistema visual.
- `docs/04_GUIA_FICHA_PRACTICA.md`: nuevo; ficha transcrita, checklist y reflexión.
- `docs/01_INSTRUCCIONES_POPE.md`: tabla de correspondencia con los nuevos anclas.
- `docs/MATRIZ_EVALUACION.md`: evidencias, checklist de la ficha y riesgo de los proyectos sin rellenar.
- `docs/GUION_EXPOSICION.md`: anclas y guion del bloque de formación/experiencia y proyectos.
- `README.md`: estructura del sitio, inventario y pendientes.
- `assets/js/main.js`: sin cambios; siguen bastando el menú móvil y la copia de email.

### Verificación de esta iteración

- [x] Los siete enlaces del menú apuntan a IDs existentes (`sobre-mi`, `competencias`, `proyectos`, `formacion`, `experiencia`, `contacto`, `apendice`).
- [x] Los seis apartados de la ficha aparecen antes del apéndice y con su numeración.
- [x] Cada tarjeta de proyecto contiene los seis campos que pide la ficha y un espacio para captura.
- [x] `competencias` tiene 8 técnicas y 4 personales; el guion y la matriz reflejan “2 proyectos”.
- [x] No queda teléfono en `#contacto` ni anclas antiguas (`#perfil`, `#trayectoria`) en los documentos de apoyo.
- [x] Contraste del texto principal sobre marfil y de la terracota oscura sobre el fondo claro revisado; `focus-visible`, `skip-link`, `aria-expanded` y `prefers-reduced-motion` se mantienen.
- [ ] **Pendiente del usuario:** rellenar los huecos de `#proyectos`, testimonios, servicio comunitario, cursos y certificaciones; revisar ortografía y enlaces antes de exponer.
- [ ] El usuario revisa y crea los commits; después se hace `push` y se configura Pages.

---

## 12. Iteración 5 · plantilla vacía y nuevo estilo (25/11/2026)

El usuario indicó que el diseño anterior no le convencía y que el problema era **cómo estaba hecho**, no solo la paleta. También pidió **quitar la información** y dejar solo la estructura con huecos para rellenar. Se descarta, por tanto, la versión de tarjetas de la iteración 4.

### Decisión de estilo

| Antes | Ahora |
| --- | --- |
| Tarjetas redondeadas tipo bento, sombras, iconos SVG, 18 px y DM Sans | **Dossier editorial**: capítulos numerados con regla fina, tipografía serif del sistema, índice fijo, líneas para escribir y sin adornos |
| Datos reales ya redactados | **Plantilla vacía**: todo entre corchetes `[…]` o sobre una línea es un hueco pendiente |
| Marfil / pizarra / terracota | **Papel hueso `#f3efe6` / tinta grafito `#1d2426` / acento mostaza `#7d550f`**; se eliminan las fuentes externas |
| Menú con seis enlaces + CTA | Índice `00–06` + apéndice, desplegable en móvil |
| “Copiar email” en JavaScript | JavaScript reducido a abrir/cerrar el índice |

### Estructura actual de `index.html`

```text
#portada      00 · Nombre, titulación, puesto y frase
#sobre-mi     01 · Presentación, objetivo, ubicación, idiomas y logro
#competencias 02 · Técnicas, personales, autodidactas y evidencias
#proyectos    03 · Dos fichas: qué es, problema, tecnologías, mi parte, dificultad, solución y enlace
#formacion    04 · Dos bloques de estudios + cursos, certificaciones e idiomas
#experiencia  05 · Dos bloques de experiencia con resultados
#contacto     06 · Email, GitHub, LinkedIn, CV y teléfono opcional
#apendice     A1 DAFO/CAME · A2 Marca · A3 Documentos · A4 Referencias
```

Se conservan los seis apartados mínimos de la ficha de práctica y el apéndice con DAFO/CAME, pero ahora como **capítulos en blanco**. La rúbrica sigue teniendo cabida: 6 líneas por cuadrante DAFO y 6 por bloque CAME, con espacio para explicar cada elemento.

### Cambios en archivos

- `index.html`: reescrito como plantilla; se eliminaron todos los datos personales, enlaces externos y ejemplos.
- `assets/css/styles.css`: reescrito con el sistema visual de dossier; sin `border-radius`, `box-shadow` ni librerías.
- `assets/js/main.js`: solo el índice móvil.
- `assets/favicon.svg`: nueva paleta y letra “P” de portafolio.
- `README.md`, `docs/01_INSTRUCCIONES_POPE.md`, `docs/04_GUIA_FICHA_PRACTICA.md`, `docs/MATRIZ_EVALUACION.md` y `docs/GUION_EXPOSICION.md`: actualizados al estado de plantilla y al nuevo ancla `#portada`.

### Verificación

- [x] No queda información personal en `index.html`: solo etiquetas e instrucciones entre corchetes.
- [x] Dos fichas de proyecto con los siete campos visibles (los seis de la ficha + enlace) y espacio de captura.
- [x] Seis capítulos antes del apéndice, más el índice `00–06`.
- [x] Sin fuentes externas ni scripts de terceros.
- [ ] El usuario elige si mantiene este estilo o prueba otra variante; aún no se han rellenado los huecos.
- [ ] El usuario revisa y crea los commits; después se hace `push` y se configura Pages.

---

## 13. Iteración 6 · estilo minimalista suizo (25/11/2026)

El usuario descartó el dossier editorial y pidió expresamente la variante suiza que se le ofreció como opción. Se mantiene la **plantilla vacía** y la estructura de capítulos; cambia solo el sistema visual.

| Iteración 5 (descartada) | Iteración 6 (actual) |
| --- | --- |
| Dossier editorial, serif, papel hueso y mostaza | **Minimalismo suizo**: sans, rejilla de 12 columnas, blanco roto `#f7f7f4`, negro `#111318` y rojo `#b3261e` |
| Números de capítulo gigantes en mostaza | Números en cuadrado rojo de 42 px |
| Líneas finas y dobles reglas | Reglas gruesas de 4–10 px y módulos cuadrados |
| Serif del sistema | Helvetica / Arial mayúsculas, titulares `clamp(3.6rem, 10vw, 9rem)` |

`index.html` no se tocó: la estructura y los huecos son los mismos. Se reescribieron `assets/css/styles.css` y `assets/favicon.svg`, y se ajustaron `README.md`, `docs/01_INSTRUCCIONES_POPE.md` y `docs/MATRIZ_EVALUACION.md` para describir el nuevo estilo.

### Verificación

- [x] Plantilla sigue vacía: ningún dato personal en `index.html`; 129 líneas y 2 huecos de nombre de proyecto.
- [x] Rejilla de 12 columnas en portada y capítulos; una columna en móvil. Sin desbordamiento horizontal a 800 px (`scrollWidth` 785).
- [x] Un solo color de acento. Se ajustó `--blank` de `#666c71` a `#62686d` para que el texto de “Espacio para captura o demo” llegue a 4,70:1 sobre el gris de la captura.
- [x] Consola sin errores; Lighthouse: accesibilidad 1,00 / buenas prácticas 1,00 / SEO 1,00. Índice de 8 enlaces y toggle móvil comprobados.
- [x] El usuario prefiere este estilo suizo; se acepta como base definitiva.
- [ ] El usuario revisa y crea los commits; después se hace `push` y se configura Pages.

---

## 14. Iteración 7 · retoques finales dentro del estilo suizo (25/11/2026)

El usuario confirmó que el minimalismo suizo le gusta más, pero preguntó si hacía falta “un poco más de diseño”. La respuesta fue **sí, pero solo en detalles funcionales**: no se cambia la estructura, la paleta ni el carácter de la plantilla.

| Retoque | Por qué | Dónde |
| --- | --- | --- |
| Cuadrado rojo `00` en la portada | Da continuidad con los capítulos `01`–`06` y cierra el sistema de numeración | `index.html` + `.portada .numero` |
| Sección activa en el índice | Al desplazarse, el enlace correspondiente se marca con `aria-current="location"` y un cuadrado rojo; ayuda a orientarse durante la exposición sin añadir ruido | `assets/js/main.js` (`IntersectionObserver`) y `.indice a[aria-current]` |
| `text-wrap: balance` en titulares y `orphans/widows: 3` | Evita líneas huérfanas y rótulos desequilibrados; es invisible pero se nota al imprimir o en pantallas estrechas | `assets/css/styles.css` |
| `scroll-padding-top: 60px` | Los anclares no quedan tapados por la barra fija | `assets/css/styles.css` |

No se añadieron tarjetas, sombras, iconos ni fuentes nuevas. Sigue siendo una plantilla vacía: los únicos textos nuevos son el `00` decorativo (`aria-hidden`) y el estado del índice.

### Verificación

- [x] El `00` es decorativo y no entra en el árbol de accesibilidad.
- [x] `aria-current` se coloca en un solo enlace a la vez: al cargar marca `00 · Portada` y al desplazarse a `#experiencia` marca `05 · Experiencia`.
- [x] Consola sin errores; Lighthouse sigue en 1,00 / 1,00 / 1,00.
- [x] Sin desbordamiento horizontal y con 129 líneas en blanco intactas.
- [ ] El usuario rellena los huecos y hace los commits / `push`.

---

## 15. Iteración 8 · contenido del capítulo 00 (25/11/2026)

El usuario entregó los datos de identidad profesional y pidió revisar expresamente que **no se sobreponga nada** en la portada (UX/UI).

| Campo | Valor escrito |
| --- | --- |
| Nombre y apellidos | Jhonatan Stiven Albarracin Agudelo |
| Titulación | Técnico Superior en Desarrollo de Aplicaciones Web |
| Puesto al que aspiras | Desarrollador de software junior |
| Frase profesional | Ingeniería como base, DAW como especialización. |
| Fecha | Diciembre 2026 |

La fecha se interpreta como **el mes de la exposición**, no como la fecha actual ni la de creación del repositorio. Si la defensa se adelanta o se retrasa, hay que cambiar solo ese campo.

### Revisión de maquetación

Se comprobó la portada en tres escenarios: una columna a 800 px, dos columnas simulando escritorio y una columna estrecha simulando 343 px de contenido.

- Columnas escritorio: separación de **24 px** entre el bloque del título y el de campos; sin solape.
- Una columna: separación vertical de **24 px** entre título y campos; sin solape.
- Cada etiqueta (`dt`) mantiene **12 px** de distancia con su valor (`dd`); ningún texto se sale de su contenedor.
- La titulación y la frase profesional pasan a dos líneas en el escenario de escritorio sin invadir la etiqueta ni el campo siguiente: el borde inferior de `.linea` crece con el contenido.

### Verificación

- [x] Capítulo 00 rellenado; el resto de la plantilla sigue con huecos.
- [x] Sin solapes en portada en los tres escenarios probados.
- [x] Sin desbordamiento horizontal (`scrollWidth` 785 < `innerWidth` 800).
- [x] La fecha queda como `Diciembre 2026`, pendiente de confirmación del usuario si la exposición cambia.
- [ ] El usuario rellena los capítulos 01–06 y el apéndice.
- [ ] El usuario hace los commits / `push`.

---

## 16. Iteración 9 · ficha de identidad con diseño (25/11/2026)

El usuario indicó que los datos del capítulo 00 “parecen sin diseño, no se ven” y que **en pantalla completa se rompe el diseño**. Se revisaron dos causas reales:

1. El titular `PORTAFOLIO` desbordaba su columna de 7/12 a 1200 px: con `10vw` llegaba a 120 px y necesitaba 773 px en un hueco de 653 px.
2. Los valores eran gris cursiva sobre blanco con una línea fina: casi no se distinguían del resto de la plantilla.

### Solución aplicada

| Antes | Ahora |
| --- | --- |
| `clamp(3.6rem, 10vw, 9rem)`, desbordamiento de 120 px a 1200 px | `clamp(3.6rem, 9vw, 6rem)`: 96 px como máximo, cabe en 653 px sin desbordar |
| Campos sobre blanco, valores gris cursiva y línea inferior | **Ficha negra** con barra superior roja de 8 px; etiquetas blancas al 72 % y valores blancos, negrita y 1,12 rem, sin cursiva ni línea |
| Borde izquierdo fino en escritorio | Bloque con fondo propio y separación neta de 24 px respecto al título |
| CSS sin versión en el `<link>` | `styles.css?v=10` para evitar que el navegador sirva una copia antigua tras el cambio |

La ficha mantiene el sistema suizo: Negro `#111318`, rojo `#b3261e`, sin esquinas redondeadas, sin sombras y sin fuentes nuevas. En impresión se fuerza a blanco y negro para no gastar tinta.

### Verificación

- [x] A 1200 px simulados: titular 653/653 px, sin desbordamiento; separación de 24 px con la ficha.
- [x] A 800 px y a 343 px simulados: sin solapes; la etiqueta conserva 8 px de separación con su valor.
- [x] La titulación y la frase profesional pasan a dos líneas sin invadir otros campos.
- [x] Valores en blanco sobre negro: contraste máximo; Lighthouse 1,00 / 1,00 / 1,00 y consola limpia.
- [ ] El usuario rellena los capítulos 01–06 y el apéndice.
- [ ] El usuario hace los commits / `push`.

---

## 17. Iteración 10 · limpieza de texto de plantilla al completar el capítulo 00 (25/11/2026)

El usuario pidió estar pendiente de que, al completar un apartado, **desaparezca el texto que solo servía para indicar cómo rellenarlo**. Se aplica ahora al capítulo 00, que ya está terminado.

### Textos retirados del capítulo 00 y de la interfaz

| Antes | Estado |
| --- | --- |
| `Plantilla para rellenar con tu información real.` (bajo el H1) | Eliminado |
| `Sustituye los textos entre corchetes y escribe sobre las líneas…` | Eliminado |
| `/ plantilla de trabajo` en la barra superior | Sustituido por `/ portafolio personal` |
| `Plantilla de portafolio · completa los campos antes de exponer` en el pie | Sustituido por `Portafolio personal · Diciembre 2026` |
| `<title>Plantilla · Portafolio personal</title>` | Sustituido por el nombre completo del usuario |
| `description` y `og:*` que hablaban de “campos preparados para rellenar” | Reescritos como descripción real del portafolio |
| `theme-color` con el hueso del diseño descartado (`#f3efe6`) | Corregido al blanco roto suizo (`#f7f7f4`) |

### Compromiso de limpieza para los siguientes apartados

Cuando se complete cada sección, hay que retirar estos textos de apoyo y dejar solo el contenido:

| Apartado | Texto a retirar cuando se complete |
| --- | --- |
| `01 · Sobre mí` | `Consejo: aquí solo resumen. Las pruebas van en los capítulos 02 y 03.` y los corchetes `[…]` |
| `02 · Competencias` | `mínimo 4`, `mínimo 3` y las instrucciones de evidencia |
| `03 · Proyectos` | `Completa los seis campos de cada ficha`, `Espacio para captura o demo` y los comentarios `rellenar con un proyecto real` |
| `04 · Formación` | Corchetes de títulos, centros, cursos y certificaciones |
| `05 · Experiencia` | `(opcional)` y las instrucciones entre corchetes |
| `06 · Contacto` | `[correo@ejemplo.com]`, `[Enlace a tu perfil]` y `(opcional)` si se publica el teléfono |
| `A · Apéndice` | `Los seis capítulos anteriores son el mínimo que pide la ficha…` y todas las líneas `[Fortaleza 1 + por qué]`, `[Acción 1]`, etc. |
| Global | Cualquier `[texto entre corchetes]` y la palabra “plantilla” en títulos, metaetiquetas o navegación |

Mientras un apartado siga vacío, sus instrucciones se conservan porque ayudan a rellenarlo. En cuanto tenga contenido real, se eliminan en la misma iteración.

### Verificación

- [x] Capítulo 00 sin texto de “rellena / sustituye / plantilla”.
- [x] Título del navegador, barra y pie ya no dicen “plantilla”.
- [x] `theme-color` coincide con el fondo suizo.
- [x] Sin anclas rotas ni archivos locales ausentes tras el cambio.
- [ ] El usuario rellena los capítulos 02–06 y el apéndice; se aplica la tabla de limpieza anterior.
- [ ] El usuario hace los commits / `push`.

---

## 18. Iteración 11 · capítulo 01 completado (25/11/2026)

El usuario eligió el objetivo A, entregó su propia presentación para pulir y preguntó si su logro era válido. **Sí, sirve**: es verificable, cuantificable y encaja con la rúbrica (“resultados verificables”).

### Texto final escrito

| Campo | Contenido |
| --- | --- |
| Presentación | Soy Jhonatan, desarrollador de software junior con formación en DAW y graduado en ingeniería de sistemas y computación. Disfruto resolviendo problemas concretos con código. Estoy en Gijón y busco mi siguiente proyecto profesional. |
| Objetivo | Busco seguir mejorando mis habilidades como desarrollador de software para crecer como profesional y aportar soluciones claras y mantenibles en un entorno de trabajo real. |
| Ubicación | Gijón, Asturias, España |
| Idiomas | Español nativo e inglés B2 |
| Logro destacado | Obtuve el título de ingeniero en sistemas y computación en Colombia con el diploma de estudiante distinguido y una nota final de 4,0/5,0. |

### Correcciones aplicadas

- `profecional` → `profesional` en la versión elegida por el usuario.
- `ingenieria` → `ingeniería`, `computacion` → `computación`, `gradue` → `Obtuve` para evitar la redundancia de “me gradué… graduado”.
- `4.0/5.0` → `4,0/5,0` (coma decimal en español).
- Se evita repetir “en Colombia” dos veces: la presentación dice el título y el logro aporta el país, el diploma y la nota.

### Limpieza

Se retira `Consejo: aquí solo resumen. Las pruebas van en los capítulos 02 y 03.` y todos los corchetes del capítulo 01, según el compromiso de la iteración 10. Se marcan como completados el checklist de `docs/04_GUIA_FICHA_PRACTICA.md` y `docs/MATRIZ_EVALUACION.md`.

### Verificación

- [x] Capítulo 01 sin corchetes ni texto de instrucción.
- [x] El logro es verificable: título, distinción y nota; sin cifras inventadas.
- [x] Sin solapes: los textos largos de presentación y objetivo se ajustan a dos/tres líneas dentro de su columna.
- [ ] El usuario rellena los capítulos 02–06 y el apéndice.
- [ ] El usuario hace los commits / `push`.

---

## 19. Iteración 12 · ficha clara en el capítulo 01 (25/11/2026)

Al usuario le gustó la ficha negra del capítulo 00, pero pidió **la misma idea en versión clara** para ir alternando claro/oscuro, porque en el capítulo 01 “no se ve el texto y aquí sí hay bastante”.

| Capítulo | Tratamiento | Motivo |
| --- | --- | --- |
| `00 · Portada` | Ficha **negra**, barra roja, valores blancos | Identidad: impacto visual |
| `01 · Sobre mí` | Ficha **clara**, borde negro, barra roja, valores negros | Texto largo: máxima legibilidad y ritmo alterno |

### Cambios aplicados

- `<dl class="campos panel-claro">` en `#sobre-mi`.
- `.panel-claro`: fondo blanco, borde negro de 2 px, barra superior roja de 8 px y padding de 28/30 px.
- Valores en **negro, negrita, 1,08 rem y altura de línea 1,4**, sin cursiva ni línea inferior: se eliminó el gris `--blank` que hacía que el texto “no se viera”.
- `Presentación`, `Objetivo` y `Logro destacado` ocupan las **12 columnas** de la ficha (`.campo.ancho`); `Ubicación` e `Idiomas` van a media anchura.
- En móvil, todos los campos pasan a una columna.
- Se sube la versión del CSS a `styles.css?v=11` para forzar la recarga y evitar la caché del navegador.

Sigue siendo minimalismo suizo: mismos colores, sin esquinas redondeadas, sombras ni fuentes nuevas.

### Verificación

- [x] Contraste del texto principal: negro sobre blanco, sin avisos en Lighthouse.
- [x] Los tres textos largos usan todo el ancho disponible y no se solapan con las etiquetas.
- [x] Ficha 00 oscura y ficha 01 clara: alternancia conseguida sin cambiar la estructura.
- [x] El capítulo 02 vuelve a ficha oscura; se aplicó el mismo sistema al rellenarlo (iteración 13).
- [ ] El usuario hace los commits / `push`.

---

## 20. Iteración 13 · capítulo 02 completado con ficha oscura (25/11/2026)

El usuario entregó las 5 técnicas y las 4 personales, y pidió explícitamente **pulirlas para que pasen los filtros de las IAS** que usan para aceptar un perfil: “si falta agrega, si sobra quita”.

### Criterio aplicado

Se conservan solo competencias que el usuario dijo explícitamente, y se añaden **sinónimos y términos técnicos estándar** que un ATS/IA busca, sin inventar experiencia:

| Usuario escribió | Texto final en el sitio | Términos ATS añadidos |
| --- | --- | --- |
| `HTML5 y CSS3: maquetación adaptable con Flexbox y Grid` | `HTML5 y CSS3: maquetación responsive con Flexbox y CSS Grid` | `responsive`, `CSS Grid` |
| `JavaScript: DOM, eventos` | `JavaScript: manipulación del DOM y gestión de eventos` | `manipulación del DOM`, `gestión de eventos` |
| `Java paradigma de objetos (todo el primer año)` | `Java: programación orientada a objetos (POO/OOP) durante el primer curso` | `programación orientada a objetos`, `POO/OOP` |
| `SQL con MySQL/PostgreSQL: consultas, JOIN y diseño básico` | `SQL con MySQL y PostgreSQL: consultas, JOIN y diseño básico de bases de datos` | `bases de datos`, separación de motores |
| `Git y GitHub: commits, ramas y pull requests` | `Git y GitHub: control de versiones, commits, ramas y pull requests` | `control de versiones` |
| `Resolución de problemas: descomponer un error y probar hipótesis` | `Resolución de problemas: análisis y depuración (debugging) de errores mediante hipótesis y pruebas` | `análisis`, `depuración`, `debugging` |
| `Resiliensia` | `Resiliencia: perseverancia ante errores y cambios, manteniendo el foco en la entrega` | corrección ortográfica; `entrega` |
| `me adapto según las necesidades` | `Adaptabilidad: ajuste de prioridades y enfoque según las necesidades del equipo` | `adaptabilidad`, `prioridades` |
| `Trabajo en equipo: compartir avances y aceptar revisiones de código (metodología SCRUM)` | `Trabajo en equipo y colaboración: avances compartidos, revisiones de código (code review) y metodología Scrum` | `colaboración`, `code review`, `Scrum` |

**No se añadieron** React, Docker, Node.js, Spring Boot ni certificaciones: el usuario no las declaró y no se pueden justificar.

### Autodidactas y evidencia

Se aplican los tres ejemplos propuestos en la iteración anterior, pulidos con el mismo criterio:

- `Aprendizaje autónomo: consulto la documentación oficial y practico con proyectos pequeños antes de aplicar una tecnología nueva`
- `Práctica continua: resuelvo ejercicios de programación y publico las soluciones en GitHub`
- `Pensamiento crítico: comparo soluciones alternativas y justifico cuál conviene según el contexto`

Evidencia de técnicas y de personales redactadas sin inventar proyectos concretos: remiten al capítulo 03, que aún está pendiente.

### Diseño y limpieza

- `<div class="grupos panel-oscuro">`: ficha negra con barra roja, igual que la 00; secuencia **negro → blanco → negro**.
- Texto en blanco, negrita, 0,98 rem y altura de línea 1,35; sin cursiva ni línea inferior.
- Retirados `mínimo 4`, `mínimo 3`, los cinco corchetes de técnicas, los cuatro de personales, los tres de autodidactas y los dos de evidencia.
- La descripción ya no dice “Solo incluye lo que puedas justificar” (instrucción), sino “Conocimientos técnicos, habilidades personales y aprendizaje autónomo”.
- Regla de impresión extendida a `.panel-oscuro` para no imprimir fondo negro.
- CSS servido como `styles.css?v=12` para evitar caché.
- Checklists de `docs/04_GUIA_FICHA_PRACTICA.md` y `docs/MATRIZ_EVALUACION.md` marcados; `README.md` actualizado.

### Verificación

- [x] 5 técnicas, 4 personales, 3 autodidactas y 2 evidencias; cero corchetes en el capítulo 02.
- [x] Sin palabras de instrucción (`mínimo`, `Consejo`, `rellenar`) en el capítulo 02.
- [x] Ficha oscura `rgb(17, 19, 24)` con barra superior roja de 8 px; texto en blanco puro.
- [x] A 800 px: columnas de 204 px, sin desbordamiento horizontal (785 < 800) y sin solapes.
- [x] A 343 px simulados: una columna de 303 px, sin desbordes en los 12 elementos de lista ni en las evidencias.
- [x] Consola sin errores; Lighthouse 1,00 / 1,00 / 1,00.
- [ ] Confirmar con el usuario los tres ejemplos autodidactas y las dos líneas de evidencia.
- [x] El usuario aporta la imagen del diploma y se publica en el capítulo 01 (iteración 15).
- [ ] El usuario rellena los capítulos 03–06 y el apéndice.
- [ ] El usuario hace los commits / `push`.

---

## 21. Iteración 14 · corrección del solape del titular a pantalla completa (25/11/2026)

El usuario avisó de que `02 · Competencias` se superponía con la ficha en pantalla completa. Se reprodujo en un viewport real de **1920 × 1080** con una página de medida temporal (ya eliminada).

### Diagnóstico

| Elemento | Antes (1920 px) |
| --- | --- |
| `.capitulo h2` | `clamp(1.8rem, 3vw, 2.8rem)` → **44,8 px**, `line-height: 0,95` → 42,56 px |
| Cabecera | 3 columnas → **282 px** |
| `MIS COMPETENCIAS` | Se partía en dos líneas; cada glifo mide ~63 px y las líneas se solapaban **21 px** |

La colisión no estaba en la ficha oscura en sí, sino en el **titular de la cabecera**, que se partía y se montaba sobre sí mismo justo al lado de la ficha.

### Corrección

- `.capitulo-cabecera` pasa de **3 a 4 columnas** y `.capitulo-cuerpo` de **9 a 8**; la rejilla sigue siendo de 12 columnas.
- `.capitulo h2` → `clamp(1.6rem, 2.4vw, 2.1rem)` con `line-height: 1.45`.
- A 1920 px el titular mide **356 px dentro de 384 px** y cabe en una línea. A 1000 px mide 272 px dentro de 291 px.
- La altura de línea 1.45 evita también el solape del único título que sigue partiéndose en dos líneas (`Evidencia y proceso`: 2 px de separación entre líneas).
- CSS servido como `styles.css?v=14`.

### Verificación

- [x] 1920 × 1080: `h2lines=1`, `overlaps=none`, `overflow=none`, sin desbordamiento horizontal.
- [x] 1000 px: `h2lines=1`, `overlaps=none`, `overflow=none`.
- [x] 800 px: una columna, titular en una línea, sin solapes.
- [x] 343 px simulados: una columna, cero elementos con desbordamiento.
- [x] Ficha oscura y textos del capítulo 02 intactos; consola sin errores; Lighthouse 1,00 / 1,00 / 1,00.
- [ ] El usuario rellena los capítulos 03–06 y el apéndice.
- [ ] El usuario hace los commits / `push`.

---

## 22. Iteración 15 · evidencia visual del logro en el capítulo 01 (25/11/2026)

El usuario aportó `diplomaDistinguido.jpg` y pidió una sección propia **debajo de la ficha 01**, fácil de ver.

### Cambios aplicados

- Copia del archivo a `assets/img/diplomaDistinguido.jpg` (802 × 620 px, 49 KB; no hace falta optimización).
- Nuevo `<figure class="evidencia-logro">` dentro de `#sobre-mi`, justo después del `<dl class="campos panel-claro">`.
- La imagen se muestra con borde, `alt` descriptivo, `width`/`height` para evitar salto de layout y un enlace al archivo completo (`target="_blank"`, `rel="noopener"`) para ampliarla con un clic.
- Pie: `Diploma de estudiante distinguido · Ingeniería en sistemas y computación · 4,0/5,0`.
- Bloque con barra roja y borde negro, coherente con la ficha 01; sin sombras ni esquinas redondeadas.
- En móvil se elimina el tope de altura para que la imagen use todo el ancho; en impresión se fuerza a blanco y negro.
- CSS servido como `styles.css?v=15`.

### Verificación

- [x] Separación de **24 px** entre la ficha 01 y la nueva sección; sin solapes.
- [x] A 800 px: imagen renderizada a 667 × 516 px dentro de un bloque de 721 px; cabe entera.
- [x] Simulando 1920 px: imagen a 673 × 520 px dentro de 792 px; fácil de ver a pantalla completa.
- [x] A 343 px: imagen a 297 × 230 px, sin desbordamiento horizontal.
- [x] Imagen cargada (`naturalWidth=802`), consola sin errores y Lighthouse 1,00 / 1,00 / 1,00.
- [ ] Revisar que el diploma no muestre datos privados (DNI, correo personal, dirección) antes de la exposición pública.
- [ ] El usuario rellena los capítulos 03–06 y el apéndice.
- [ ] El usuario hace los commits / `push`.
