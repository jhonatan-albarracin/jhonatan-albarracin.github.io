# jhonatan-albarracin.github.io

POPE · **Portafolio Personal para la Empleabilidad** de Jhonatan Stiven Albarracin Agudelo.

Sitio estático publicado con GitHub Pages en <https://jhonatan-albarracin.github.io/>. Incluye perfil profesional, competencias, trayectoria, muestras de trabajo, análisis DAFO/CAME, estrategia de marca personal, documentación y contacto.

## Estructura

```text
.
├── index.html                     # Portafolio (página principal)
├── assets/
│   ├── css/styles.css             # Sistema visual, responsive, print y accesibilidad
│   ├── js/main.js                 # Menú móvil y copia de email
│   └── favicon.svg                # Icono del sitio
├── robots.txt                     # Instrucciones para buscadores
├── sitemap.xml                    # URL pública del portafolio
├── docs/
│   ├── POPE.docx                  # Instrucciones originales de la actividad
│   ├── Rúbrica POPE pdf.pdf       # Rúbrica original del ejercicio
│   ├── Rúbrica exposicón  oral del portafolio.docx
│   ├── CV_Jhonatan_Albarracin.pdf # Original (contiene una entrada ficticia)
│   ├── CV_Jhonatan_Albarracin_CORREGIDO.md # CV vigente, sin esa entrada
│   ├── presentación.pdf           # Texto base de la exposición oral
│   ├── 01_INSTRUCCIONES_POPE.md   # Instrucciones extraídas en Markdown
│   ├── 02_RUBRICA_POPE.md         # Rúbrica extraída en Markdown
│   ├── 03_RUBRICA_EXPOSICION.md   # Rúbrica oral extraída en Markdown
│   ├── GUION_EXPOSICION.md        # Guion cronometrado (~5 min)
│   └── MATRIZ_EVALUACION.md       # Criterio → evidencia y pendientes
├── PROCESO.md                     # Bitácora de construcción y mantenimiento
└── README.md
```

## Ver en local

No necesita instalación: es HTML, CSS y JavaScript puro.

```powershell
python -m http.server 8000
```

Abrir <http://localhost:8000/>.

## Publicar

El repositorio se llama `jhonatan-albarracin.github.io`, por lo que GitHub Pages sirve la rama `main` desde la raíz:

1. Confirmar que `index.html` está en la raíz.
2. En GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**.
3. Hacer `git add .`, `git commit` y `git push origin main`.
4. Comprobar <https://jhonatan-albarracin.github.io/>.

## Antes de compartir el enlace

- Revisar que los datos personales publicados (teléfono, email y referencias) son los deseados.
- Usar `docs/CV_Jhonatan_Albarracin_CORREGIDO.md` como base del CV: el PDF original incluye una práctica ficticia ya eliminada.
- Completar los pendientes indicados en `docs/MATRIZ_EVALUACION.md` y `PROCESO.md`.
- Ensayar la exposición con `docs/GUION_EXPOSICION.md`.
