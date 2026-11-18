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
