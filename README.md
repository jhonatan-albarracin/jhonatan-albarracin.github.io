# jhonatan-albarracin.github.io

**POPE** (Portafolio Personal para la Empleabilidad) en construcción. Ya están rellenados `00 · Portada`, `01 · Sobre mí` y `02 · Competencias`; los capítulos 03–06 y el apéndice siguen con huecos por completar.

Formato: **minimalista suizo**. Rejilla de 12 columnas, tipografía sans en mayúsculas, mucho espacio en blanco, reglas gruesas y un solo acento rojo. Sin tarjetas redondeadas, sombras ni iconos. Paleta: blanco roto, negro y rojo `#b3261e`. Las fichas con barra roja alternan claridad: el capítulo 00 es negro, el 01 blanco y el 02 negro de nuevo.

## Estructura del sitio

```text
#portada       00 · Identidad profesional (rellenado: nombre, título, puesto, frase y fecha)
#sobre-mi      01 · Presentación y objetivo + imagen del diploma (rellenado)
#competencias  02 · 5 técnicas, 4 personales, 3 autodidactas y evidencia (rellenado)
#proyectos     03 · Dos fichas de proyecto con seis campos cada una
#formacion     04 · Titulación, cursos, certificaciones e idiomas
#experiencia   05 · Prácticas, empleos o colaboraciones
#contacto      06 · Email, GitHub, LinkedIn, CV y teléfono opcional
#apendice      A · DAFO/CAME (A1), marca (A2), documentos (A3), referencias (A4)
```

Todo lo que aparece entre corchetes `[…]` y sobre una línea es un hueco. Sustitúyelo por información real; si algún apartado no aplica, déjalo marcado como “pendiente” en vez de inventar datos.

## Archivos del repositorio

```text
.
├── index.html                     # Portafolio (capítulos 00–02 rellenados)
├── assets/
│   ├── css/styles.css             # Estilo suizo, responsive, print
│   ├── js/main.js                 # Índice móvil + sección activa al desplazarse
│   ├── img/diplomaDistinguido.jpg # Prueba del logro del capítulo 01
│   └── favicon.svg
├── robots.txt
├── sitemap.xml
├── docs/
│   ├── Ficha_practica_Portfolio_IPE_ para hacer un portafolio.pdf  # Guía original
│   ├── 04_GUIA_FICHA_PRACTICA.md  # Guía transcrita, checklist y reflexión
│   ├── POPE.docx
│   ├── Rúbrica POPE pdf.pdf
│   ├── Rúbrica exposicón  oral del portafolio.docx
│   ├── CV_Jhonatan_Albarracin.pdf # Documento histórico (contiene un dato ficticio)
│   ├── CV_Jhonatan_Albarracin_CORREGIDO.md
│   ├── presentación.pdf
│   ├── 01_INSTRUCCIONES_POPE.md
│   ├── 02_RUBRICA_POPE.md
│   ├── 03_RUBRICA_EXPOSICION.md
│   ├── GUION_EXPOSICION.md        # Guion de apoyo (requiere datos rellenos)
│   └── MATRIZ_EVALUACION.md
├── PROCESO.md                     # Bitácora, incluye los diseños descartados
└── README.md
```

## Ver en local

No necesita instalación: HTML, CSS y JavaScript puro, sin fuentes externas.

```powershell
python -m http.server 8000
```

Abrir <http://localhost:8000/>.

## Publicar

El repositorio `jhonatan-albarracin.github.io` sirve la rama `main` desde la raíz:

1. Confirmar que `index.html` está en la raíz.
2. En GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**.
3. Hacer `git add .`, `git commit` y `git push origin main`.
4. Comprobar <https://jhonatan-albarracin.github.io/>.

## Antes de publicar

- Rellenar los seis capítulos y las dos fichas de proyecto.
- Completar el apéndice (DAFO/CAME con 6 elementos explicados por bloque, marca, documentos y referencias).
- Usar `docs/04_GUIA_FICHA_PRACTICA.md` como checklist final.
- No publicar datos personales innecesarios; el teléfono es opcional.
- Los commits los hace el usuario.
