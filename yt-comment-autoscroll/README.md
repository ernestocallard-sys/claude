# YT Comment Auto-Scroll

Extensión de Chrome (Manifest V3) que hace **scroll vertical automático cada ~3 segundos**
para cargar **todos los comentarios de YouTube** (que usan _lazy load_), imitando el
comportamiento de una persona para **no disparar el bloqueo anti-bot** de YouTube.

## Instalación (modo desarrollador)

1. Abre `chrome://extensions` en Chrome (o Edge/Brave).
2. Activa el **Modo de desarrollador** (arriba a la derecha).
3. Pulsa **Cargar descomprimida** y selecciona la carpeta `yt-comment-autoscroll/`.
4. Abre cualquier video de YouTube y baja hasta los comentarios.
5. Pulsa el icono de la extensión → **Iniciar** (o usa el botón flotante en la página).

## Cómo evita el bloqueo de YouTube

En lugar de hacer un scroll robótico y constante, la extensión imita a un humano:

| Táctica | Qué hace |
|---|---|
| **Jitter de tiempo** | El intervalo no es fijo: 3000 ms ± 1200 ms aleatorio. |
| **Scroll por pasos** | Baja en 2–4 tramos suaves (`behavior: smooth`), no de un salto. |
| **Distancia variable** | Cada tramo recorre entre media y casi una pantalla. |
| **Micro-rebotes** | A veces sube un poco, como cuando relees algo. |
| **Pausas de lectura** | Cada ~12 ciclos hace una pausa larga (~7 s). |
| **Parada por estancamiento** | Si en 6 ciclos no aparecen comentarios nuevos, se detiene solo. |
| **Detección de captcha** | Si YouTube muestra una verificación, para de inmediato. |

## Ajustes (desde el popup)

- **Intervalo (ms)** — base entre scrolls. Por defecto `3000`.
- **Aleatoriedad ±(ms)** — variación aplicada al intervalo. Por defecto `1200`.
- **Ciclos sin nuevos para parar** — sensibilidad del fin automático. Por defecto `6`.
- **Abrir respuestas** — pulsa "Mostrar respuestas" visibles para cargar hilos anidados.
- **Auto-iniciar en /watch** — arranca solo al abrir un video.

> Consejo: valores más altos = comportamiento más humano y más seguro. No bajes el
> intervalo de ~3 s si tu objetivo es no llamar la atención del sistema de YouTube.

## Archivos

```
yt-comment-autoscroll/
├── manifest.json     # MV3, permisos y registro del content script
├── content.js        # lógica de auto-scroll humano + overlay en página
├── popup.html        # interfaz de control y ajustes
├── popup.js          # comunica el popup con la pestaña activa
├── icons/            # iconos 16/48/128
└── README.md
```

## Notas

- Funciona en `www.youtube.com` y `m.youtube.com`.
- YouTube es una SPA: al cambiar de video el auto-scroll se detiene solo.
- Uso responsable: pensado para revisar/descubrir comentarios, respetando los
  Términos de YouTube. No realiza peticiones automatizadas a la API ni scraping masivo.
