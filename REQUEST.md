# CREAR LANDING PAGE PREMIUM — KIT ABC MÁGICO · LUNERA

Actúa como un senior full-stack developer, diseñador gráfico digital premium, experto en UI/UX, CRO, copywriting de respuesta directa y optimización mobile-first.

Necesito que construyas una landing page completa en español para vender un producto digital educativo infantil llamado:

“Kit ABC Mágico: Leo y escribo - Técnica americana · Lunera”

La landing debe sentirse como una versión española ultra premium, más clara, más profesional, más confiable y más persuasiva que una landing portuguesa validada de grafismo fonético.

Quiero modelar la estructura estratégica de esa landing portuguesa, no copiarla literalmente.

La landing portuguesa validada trabaja esta lógica:
- promesa arriba
- aprendizaje en pocos minutos al día
- dolor de padres/madres
- explicación del problema
- mecanismo educativo
- beneficios
- qué aprende el niño
- testimonios
- stack de producto
- acceso inmediato
- garantía
- FAQ

Quiero conservar esa base estratégica, pero mejorarla visualmente, emocionalmente y en claridad.

IMPORTANTE:
No hagas preguntas. Implementa directamente con el mejor criterio posible.

==================================================
1. OBJETIVO COMERCIAL
==================================================

Objetivo principal:
Vender el “Kit ABC Mágico: Leo y escribo - Técnica americana · Lunera” a madres hispanohablantes que quieren ayudar a sus hijos a aprender a leer y escribir desde casa.

Promesa central:
“Enséñale a leer y escribir desde casa sin que parezca tarea.”

Ángulo emocional:
La madre quiere ayudar a su hijo, pero no sabe por dónde empezar. Ha probado videos, apps, fichas sueltas o tareas escolares, pero todo se siente desordenado, frustrante o pesado. ABC Mágico le da una ruta clara, visual, progresiva y fácil de seguir.

El producto debe vender:
- claridad
- orden
- confianza
- acompañamiento
- progreso por niveles
- sesiones cortas
- material imprimible
- sensación premium
- facilidad para mamá

No vender:
- milagros
- resultados garantizados
- claims médicos
- promesas exageradas
- “tu hijo leerá sí o sí”
- “5 veces más rápido”
- beneficios relacionados con TDAH, autismo o diagnósticos

==================================================
2. STACK TÉCNICO
==================================================

Crear un proyecto completo con:

- React
- Vite
- TypeScript
- Tailwind CSS
- Componentes modulares
- Mobile-first
- SEO básico
- Open Graph
- Código limpio
- Build funcional

Estructura sugerida:

abc-magico-landing/
  package.json
  index.html
  vite.config.ts
  tsconfig.json
  tailwind.config.js
  postcss.config.js
  src/
    main.tsx
    App.tsx
    index.css
    data/
      content.ts
    components/
      TopBar.tsx
      Header.tsx
      Hero.tsx
      PainSection.tsx
      BeliefShiftSection.tsx
      MechanismSection.tsx
      BenefitsSection.tsx
      ProductStack.tsx
      WhatChildLearns.tsx
      HowItWorks.tsx
      Testimonials.tsx
      ValueStack.tsx
      OfferSection.tsx
      GuaranteeSection.tsx
      FAQSection.tsx
      StickyCTA.tsx
      Footer.tsx
      Section.tsx
      Button.tsx
      CountdownBar.tsx

No uses backend.
No uses formularios innecesarios.
No uses popups agresivos.
No uses dependencias innecesarias.
Puedes usar lucide-react para íconos.
Puedes usar framer-motion solo si mejora el resultado sin hacerlo pesado.

==================================================
3. CONFIGURACIÓN GLOBAL
==================================================

Crear en src/data/content.ts estas constantes editables:

export const CHECKOUT_URL = "PON_AQUI_TU_LINK_DE_HOTMART";

export const PRODUCT = {
  brand: "Lunera",
  name: "Kit ABC Mágico: Leo y escribo - Técnica americana",
  price: "$9.99",
  oldPrice: "$27",
  guaranteeDays: 7,
  supportEmail: "luneradigit4l@mail.com",
};

Regla para botones:
- Si CHECKOUT_URL sigue siendo "PON_AQUI_TU_LINK_DE_HOTMART", los CTAs deben hacer scroll suave hacia la sección de oferta.
- Si CHECKOUT_URL tiene un link real, todos los CTAs deben abrir ese link.

==================================================
4. IMÁGENES REMOTAS
==================================================

Usa estas imágenes directamente desde URLs públicas:

export const IMAGES = {
  heroKit: "https://i.postimg.cc/6ySH0Q3b/KIT-portada.png",
  guiaMama: "https://i.postimg.cc/NKHdPw2F/Guia-para-mama.png",
  nivel1: "https://i.postimg.cc/nXD3wt9L/Cuaderno-Nivel-1-Mi-Primer-Trazo.png",
  nivel2: "https://i.postimg.cc/zLY0sPT2/Cuaderno-Nivel-2-Silabas-que-canto.png",
  nivel3: "https://i.postimg.cc/jWYZpky9/Cuaderno-Nivel-3-Palabras-y-Frases.png",
  nivel4: "https://i.postimg.cc/sMhT0RGz/Cuaderno-Nivel-4-Lector-Independiente.png",
  cajaMotivacion: "https://i.postimg.cc/BjKmwGPf/Caja-de-Motivacion.png"
};

Reglas para imágenes:
- Hero image debe usar fetchpriority="high".
- Imágenes inferiores deben usar lazy loading.
- No deformar imágenes.
- Usar object-contain para portadas.
- Usar sombras suaves premium.
- Usar alt text descriptivo.
- En mobile, el hero debe verse grande pero no romper el layout.
- No crear espacios vacíos excesivos.
- Si alguna imagen externa no carga, mostrar un fallback elegante sin romper la landing.

==================================================
5. IDENTIDAD VISUAL
==================================================

Marca:
Lunera

Estilo:
Premium maternal/infantil, cálido, elegante, visualmente confiable, moderno, editorial, limpio.

Debe sentirse:
- profesional
- tierno sin ser barato
- educativo sin ser escolar genérico
- premium sin parecer frío
- ordenado y fácil de escanear

Paleta:
- Fondo crema cálido: #FAFAF7
- Marrón oscuro elegante: #3D2B1F
- Dorado suave: #C9953A
- Verde eucalipto: #6B9E78
- Coral suave: #E9877E
- Rosa empolvado: #F5E6E8
- Beige cálido: #F7E8D0
- Texto gris suave: #6F6A64

Diseño:
- Mucho aire visual
- Secciones con ritmo claro
- Cards con border-radius grande
- Sombras suaves
- Blobs orgánicos sutiles
- Detalles de estrellas, lunas o puntos decorativos muy discretos
- Nada saturado
- Nada chillón
- Nada que parezca plantilla barata
- Botones con contraste alto
- CTA siempre visible en mobile mediante sticky CTA

Tipografía:
- Usa Poppins desde Google Fonts.
- Pesos: 400, 500, 600, 700, 800.
- Títulos grandes, claros y cálidos.
- Body text legible en mobile.
- Evitar bloques enormes de texto.

==================================================
6. RESPONSIVE Y UX
==================================================

La página debe verse perfecta en:

- 360px
- 390px
- 430px
- 768px
- 1024px
- desktop grande

Reglas mobile:
- Hero debe entenderse en menos de 5 segundos.
- CTA principal visible en la primera pantalla.
- Imagen del kit visible sin cortar texto.
- Sticky CTA inferior desde que el usuario empieza a hacer scroll.
- Secciones con padding suficiente pero sin alargar innecesariamente.
- Cards en una columna.
- Texto máximo 2-4 líneas por bloque.
- Botones grandes y fáciles de tocar.
- No debe haber scroll horizontal.
- La oferta final debe ser fácil de leer en móvil.

Reglas desktop:
- Hero en dos columnas: texto a la izquierda, imagen a la derecha.
- Producto stack en grid elegante.
- Oferta final centrada y poderosa.
- Mucho espacio visual.
- No usar ancho completo para textos largos; limitar max-width.

==================================================
7. COPYWRITING: TONO Y REGLAS
==================================================

Tono:
- Español neutro latino
- Principalmente dirigido a mamás
- Cálido, directo, emocional y confiable
- No académico
- No exagerado
- No usar jerga pedagógica pesada
- No usar promesas absolutas

Lenguaje:
- “Tu hijo”
- “desde casa”
- “sin presión”
- “paso a paso”
- “10 a 15 minutos al día”
- “sin convertirlo en tarea”
- “sin pelear cada sesión”
- “una ruta clara”
- “actividades progresivas”

Prohibido:
- “garantizado”
- “cura”
- “diagnóstico”
- “TDAH”
- “autismo”
- “5 veces más rápido”
- “resultados asegurados”
- “método milagroso”

==================================================
8. SECCIONES DE LA LANDING
==================================================

Construye estas secciones en este orden.

--------------------------------------------------
A. TOP BAR / BARRA DE OFERTA
--------------------------------------------------

Texto:
“Oferta de lanzamiento · Kit completo por $9.99 · Antes $27 · Garantía de 7 días”

Diseño:
- Fondo marrón oscuro
- Texto crema/dorado
- Sticky top
- Elegante, no agresivo

Añadir mini contador opcional:
“Precio especial activo hoy”

Si implementas contador:
- Debe ser discreto.
- Debe poder desactivarse desde una constante.
- No debe romper la confianza.
- No debe resetear visualmente de forma absurda cada recarga.

--------------------------------------------------
B. HEADER
--------------------------------------------------

Logo texto:
“Lunera”

Links:
- Cómo funciona
- Qué incluye
- Testimonios
- Garantía

Botón:
“Empezar hoy”

En mobile:
- Header simple
- No menú complejo si no hace falta
- Botón visible o acceso rápido al sticky CTA

--------------------------------------------------
C. HERO
--------------------------------------------------

Headline:
“Enséñale a leer y escribir desde casa sin que parezca tarea”

Subheadline:
“ABC Mágico combina trazos, sonidos, sílabas, palabras y frases en un kit imprimible paso a paso para que acompañes a tu hijo con sesiones cortas de 10 a 15 minutos al día.”

Bullets:
- “Ideal para niños que están empezando a reconocer letras, sonidos y palabras”
- “Actividades progresivas por niveles: del trazo a la lectura”
- “PDFs imprimibles para usar desde casa”
- “Incluye guía práctica para mamá y caja de motivación”

CTA principal:
“Quiero empezar hoy por $9.99”

CTA secundario:
“Ver todo lo que incluye”

Debajo del CTA:
“Pago único · Acceso inmediato · Garantía de 7 días”

Imagen:
Usar heroKit.
Debe verse grande, premium y protagonista.

Añadir trust chips:
- “PDF imprimible”
- “Acceso inmediato”
- “10-15 min al día”
- “7 días de garantía”

--------------------------------------------------
D. SECCIÓN DE DOLOR
--------------------------------------------------

Título:
“Muchas mamás esperan a que la escuela lo resuelva… hasta que leer empieza a sentirse como una pelea”

Texto:
“Una tarde intentas ayudarlo, pero se distrae. Le señalas una letra, se frustra. Cambias de actividad, buscas videos, imprimes fichas sueltas… y aun así sientes que no hay un camino claro.”

Cards de dolor:
- “Tu hijo se distrae apenas ve letras o tareas”
- “Confunde sonidos, sílabas o palabras simples”
- “Se frustra cuando no le sale”
- “Tú quieres ayudar, pero no sabes por dónde empezar”
- “Las actividades sueltas no siguen un orden claro”

Cierre:
“El problema no es que tu hijo no pueda aprender. Muchas veces el problema es que nadie te dio una ruta simple, visual y progresiva para acompañarlo sin presión.”

--------------------------------------------------
E. SECCIÓN DE CAMBIO DE CREENCIA
--------------------------------------------------

Título:
“No necesitas convertirte en maestra. Necesitas un camino claro.”

Texto:
“Enseñar desde casa no debería sentirse como improvisar. Cuando el material sigue una progresión lógica, mamá sabe qué hacer y el niño entiende qué viene después.”

Tres columnas:
1. “Menos improvisación”
Texto: “Cada nivel tiene una función clara dentro del proceso.”

2. “Menos presión”
Texto: “Las sesiones son cortas y pensadas para avanzar sin pelea.”

3. “Más confianza”
Texto: “Tu hijo ve progreso pequeño, repetible y celebrable.”

--------------------------------------------------
F. MECANISMO
--------------------------------------------------

Título:
“ABC Mágico no empieza exigiendo lectura. Empieza preparando la mente y la mano.”

Explicación:
“El método guía al niño paso a paso: primero mejora el trazo y la coordinación, luego asocia sonidos, forma sílabas, reconoce palabras y finalmente avanza hacia frases con más seguridad.”

Crear flujo visual:
Trazo → Sonido → Sílaba → Palabra → Frase → Lectura independiente

Cards:
- “La mano se prepara con trazos, curvas y patrones”
- “El oído reconoce sonidos de forma más clara”
- “Las sílabas se trabajan en voz alta y con repetición”
- “Las palabras aparecen como una consecuencia natural”
- “Las frases ayudan a construir fluidez y seguridad”

--------------------------------------------------
G. BENEFICIOS
--------------------------------------------------

Título:
“Con pocos minutos al día, tu hijo empieza a construir una base real para leer y escribir”

Beneficios:
- “Más seguridad al enfrentarse a letras y sílabas”
- “Mejor coordinación para escribir”
- “Mayor familiaridad con sonidos y palabras”
- “Menos resistencia porque las actividades se sienten como juego”
- “Una rutina sencilla que mamá puede seguir sin ser maestra”
- “Material imprimible para repetir las páginas cuando lo necesite”

Diseño:
Grid de beneficios con íconos suaves.

--------------------------------------------------
H. QUÉ INCLUYE EL KIT
--------------------------------------------------

Título:
“Todo lo que recibes dentro del Kit ABC Mágico”

Subtítulo:
“Una ruta completa para acompañar el aprendizaje desde los primeros trazos hasta la lectura de palabras y frases.”

Crear cards visuales con imagen, título, subtítulo y descripción.

Producto 1:
Imagen: guiaMama
Título: “Guía para mamá”
Subtítulo: “Cómo enseñar a leer sin que parezca tarea”
Descripción:
“Una guía práctica para saber cómo acompañar a tu hijo, qué hacer cuando se frustra, cómo organizar sesiones cortas y cómo usar los cuadernos sin presión.”

Producto 2:
Imagen: nivel1
Título: “Cuaderno Nivel 1 — Mi primer trazo”
Subtítulo: “La base antes de escribir”
Descripción:
“Actividades de líneas, curvas, zigzag, círculos y trazos previos para preparar la mano antes de pasar a letras y sílabas.”

Producto 3:
Imagen: nivel2
Título: “Cuaderno Nivel 2 — Sílabas que canto”
Subtítulo: “Sonidos y sílabas paso a paso”
Descripción:
“Ejercicios para trabajar sílabas en voz alta, asociar sonidos con letras y empezar a construir una base fonética más clara.”

Producto 4:
Imagen: nivel3
Título: “Cuaderno Nivel 3 — Palabras y frases”
Subtítulo: “De sílabas a lectura inicial”
Descripción:
“Actividades para formar palabras, leer combinaciones simples y empezar a trabajar pequeñas frases con más seguridad.”

Producto 5:
Imagen: nivel4
Título: “Cuaderno Nivel 4 — Lector independiente”
Subtítulo: “Más confianza al leer”
Descripción:
“Actividades pensadas para reforzar combinaciones, lectura de palabras y avance hacia una lectura más fluida e independiente.”

Producto 6:
Imagen: cajaMotivacion
Título: “Caja de Motivación Lunera”
Subtítulo: “Bonus imprimible especial”
Descripción:
“Material de motivación para celebrar avances, reforzar la constancia y hacer que el niño sienta progreso sin presión.”

--------------------------------------------------
I. SECCIÓN “QUÉ APRENDERÁ”
--------------------------------------------------

Título:
“Qué empieza a trabajar tu hijo con ABC Mágico”

Crear cuatro bloques:

1. “Coordinación y trazo”
Texto:
“Líneas, curvas, círculos, espirales y movimientos base para preparar la escritura.”

2. “Sonidos y sílabas”
Texto:
“Asociación entre sonidos, letras y combinaciones simples como MA, ME, MI, MO, MU.”

3. “Palabras”
Texto:
“Construcción y lectura inicial de palabras simples para ganar seguridad.”

4. “Frases”
Texto:
“Primeras frases para avanzar hacia una lectura más natural y con sentido.”

--------------------------------------------------
J. CÓMO FUNCIONA
--------------------------------------------------

Título:
“Empezar es muy simple”

Pasos:

1. “Compras el kit”
Texto:
“Después del pago recibes el acceso al material digital.”

2. “Descargas los PDFs”
Texto:
“Tendrás los archivos listos para guardar e imprimir.”

3. “Imprimes las actividades”
Texto:
“Puedes repetir páginas cuando tu hijo necesite más práctica.”

4. “Practican 10 a 15 minutos”
Texto:
“Sesiones cortas, guiadas y sin presión.”

5. “Celebran pequeños avances”
Texto:
“La caja de motivación ayuda a reforzar el hábito y la confianza.”

--------------------------------------------------
K. TESTIMONIOS
--------------------------------------------------

Título:
“Lo que dicen algunos padres que ya probaron este tipo de método”

Usa formato testimonial premium, no comentarios falsos de Facebook.

Testimonios adaptados al español:

André Azevedo:
“Mis pequeños han tenido una evolución significativa gracias al grafismo fonético. Me pareció una compra muy útil.”

Ana Oliveira:
“Mi hija empezó a formar palabras en solo dos semanas usando el kit. Me sorprendió lo rápido que avanzó.”

Marisa Correia:
“De verdad, fue una de las mejores compras que hice este año. Vale mucho la pena.”

Camila Silva:
“Es increíble cómo algo tan simple puede hacer tanta diferencia. Estoy muy satisfecha con mi compra.”

Breno Souza:
“El método es fácil de seguir, incluso para padres sin experiencia enseñando. Ver a nuestro hijo leer sus primeras palabras fue muy gratificante.”

Debajo:
“Los resultados pueden variar según la edad, constancia y ritmo de cada niño.”

--------------------------------------------------
L. SECCIÓN DE VALOR / STACK
--------------------------------------------------

Título:
“Recapitulando todo lo que recibes hoy”

Lista:
- Guía para mamá
- Cuaderno Nivel 1 — Mi primer trazo
- Cuaderno Nivel 2 — Sílabas que canto
- Cuaderno Nivel 3 — Palabras y frases
- Cuaderno Nivel 4 — Lector independiente
- Caja de Motivación Lunera
- Acceso inmediato
- PDFs descargables e imprimibles
- Soporte por email
- Garantía de 7 días

Diseño:
Stack visual con checks.

Usar:
“Valor habitual: $27”
“Hoy: $9.99”

No exageres valores falsos como $297. Mantenerlo creíble y premium.

--------------------------------------------------
M. OFERTA FINAL
--------------------------------------------------

Esta debe ser la sección más fuerte de la landing.

Fondo:
Marrón oscuro #3D2B1F

Texto:
Crema y dorado.

Título:
“Empieza hoy con el Kit ABC Mágico completo”

Subtítulo:
“Una ruta clara, imprimible y fácil de seguir para acompañar a tu hijo desde los primeros trazos hasta sus primeras palabras y frases.”

Precio:
“Antes $27”
“Hoy $9.99”

CTA:
“Sí, quiero el Kit ABC Mágico”

Debajo:
“Pago único · Sin mensualidades · Acceso inmediato”

Confianza:
- “PDFs imprimibles”
- “Soporte: luneradigit4l@mail.com”
- “7 días de garantía”

Imagen:
Usar heroKit o mini collage de productos.

--------------------------------------------------
N. GARANTÍA
--------------------------------------------------

Título:
“Prueba el kit con tranquilidad durante 7 días”

Texto:
“Tienes 7 días de garantía por Hotmart. Si sientes que el material no era lo que esperabas o no se adapta a lo que necesitabas, puedes solicitar la devolución dentro del plazo disponible en la plataforma.”

Añadir:
“Tu compra está protegida. Empiezas hoy, revisas el material con calma y decides con seguridad.”

--------------------------------------------------
O. FAQ
--------------------------------------------------

Crear acordeón accesible.

Preguntas:

1. “¿Cómo recibo el material?”
Respuesta:
“Después de la confirmación del pago, recibes el acceso al material digital en Hotmart y puedes descargar los PDFs.”

2. “¿Tengo que pagar todos los meses?”
Respuesta:
“No. Es un pago único.”

3. “¿Puedo imprimir las actividades?”
Respuesta:
“Sí. El material está pensado para imprimirse y usarse desde casa.”

4. “¿Para qué edad es recomendado?”
Respuesta:
“Es ideal para niños de 3 a 6 años que están empezando a reconocer letras, sonidos, sílabas y palabras. También puede adaptarse a otros ritmos según el nivel del niño.”

5. “¿Necesito ser maestra para usarlo?”
Respuesta:
“No. La guía para mamá está pensada para que puedas acompañar a tu hijo paso a paso, sin formación pedagógica previa.”

6. “¿Cuánto tiempo debo practicar al día?”
Respuesta:
“Lo recomendado es trabajar en sesiones cortas de 10 a 15 minutos, manteniendo una rutina constante y sin presión.”

7. “¿Qué pasa si mi hijo se frustra?”
Respuesta:
“El kit está diseñado por niveles. Si una actividad le cuesta, puedes volver a páginas anteriores, repetir ejercicios y avanzar a su ritmo.”

8. “¿Tiene garantía?”
Respuesta:
“Sí. Tienes 7 días de garantía por Hotmart.”

9. “¿Cómo contacto soporte?”
Respuesta:
“Puedes escribir a: luneradigit4l@mail.com”

--------------------------------------------------
P. FOOTER
--------------------------------------------------

Incluir:
“Lunera”
“ABC Mágico: Leo y escribo - Técnica americana”
“Soporte: luneradigit4l@mail.com”

Texto legal:
“Este material tiene fines educativos e informativos. No sustituye la evaluación, diagnóstico ni acompañamiento de profesionales de la educación, salud o psicología infantil. Los resultados pueden variar según la edad, constancia y ritmo de cada niño.”

Añadir placeholders:
- Política de privacidad
- Términos de uso

==================================================
9. STICKY CTA MOBILE
==================================================

Crear barra sticky inferior en mobile.

Contenido:
- “Kit completo”
- “$9.99”
- Botón: “Empezar”

Debe aparecer después de hacer scroll un poco.
No debe tapar demasiado contenido.
Debe tener padding inferior seguro para móviles.

==================================================
10. SEO Y METADATA
==================================================

Meta title:
“Kit ABC Mágico · Leo y escribo desde casa | Lunera”

Meta description:
“Kit digital imprimible para ayudar a tu hijo a leer y escribir desde casa con actividades por niveles, guía para mamá y sesiones cortas de 10 a 15 minutos.”

Open Graph:
- title
- description
- image: heroKit
- type: website

Añadir favicon básico si es posible con texto “Lunera” o luna simple.

==================================================
11. PERFORMANCE
==================================================

Optimizar:
- No cargar imágenes innecesarias al inicio.
- Lazy loading en imágenes debajo del hero.
- Evitar layouts que salten.
- No usar animaciones pesadas.
- No usar librerías innecesarias.
- CSS limpio.
- Build final sin errores.

Objetivo:
- Carga rápida.
- Experiencia mobile fluida.
- Sin imágenes deformadas.
- Sin scroll horizontal.

==================================================
12. CRITERIOS DE CALIDAD FINAL
==================================================

Antes de terminar, revisa:

- ¿La página se entiende en menos de 5 segundos?
- ¿El CTA aparece claro arriba?
- ¿La imagen del kit se ve premium?
- ¿La oferta parece más valiosa que $9.99?
- ¿La página funciona en mobile?
- ¿Hay sticky CTA?
- ¿Los botones funcionan?
- ¿No hay textos en portugués?
- ¿No hay placeholders visibles salvo CHECKOUT_URL?
- ¿No hay errores de build?
- ¿No hay claims peligrosos?
- ¿No hay secciones demasiado largas?
- ¿El diseño se siente premium y coherente con Lunera?

==================================================
13. COMANDOS Y ENTREGA
==================================================

Al terminar, ejecuta:

npm install
npm run build

Si hay errores, corrígelos.

Después deja instrucciones breves para correr:

npm run dev

Y para exportar/subir a Lovable:
- comprimir el proyecto sin node_modules
- mantener package.json, src, index.html, configs y assets remotos

==================================================
14. RESULTADO ESPERADO
==================================================

El resultado final debe ser una landing page:
- profesional
- premium
- responsive
- rápida
- persuasiva
- clara
- lista para editar en Lovable
- lista para recibir tráfico de Meta Ads
- enfocada en conversión mobile
- visualmente coherente con Lunera

No quiero una página bonita pero débil.
No quiero una plantilla genérica.
No quiero una landing larga sin intención.
Quiero una página que venda claridad, orden y confianza, y que haga que el kit completo se perciba más valioso que $9.99.
