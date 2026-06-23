/* =========================================================================
 * YT Comment Auto-Scroll  -  content script
 *
 * Idea central: cargar TODOS los comentarios de YouTube (que usan lazy load)
 * haciendo scroll vertical automatico aprox. cada 3 segundos, pero imitando
 * el comportamiento de una persona para no disparar las protecciones
 * anti-bot de YouTube.
 *
 * Tacticas anti-bloqueo:
 *   - Intervalo base de ~3s con "jitter" aleatorio (nunca exactamente igual).
 *   - Scroll suave (behavior:smooth) y por pasos, no saltos secos al final.
 *   - Distancia de scroll variable (no siempre la misma cantidad de px).
 *   - Pausas largas ocasionales (como si el usuario leyera).
 *   - Deteccion de estancamiento: si no aparecen comentarios nuevos durante
 *     varios ciclos, se detiene solo en vez de seguir martilleando la pagina.
 *   - Se detiene tambien si se detecta una pantalla de verificacion/captcha.
 * ========================================================================= */

(() => {
  "use strict";

  // Evita doble inyeccion si el script se carga mas de una vez.
  if (window.__ytCommentAutoScrollLoaded) return;
  window.__ytCommentAutoScrollLoaded = true;

  // ---------------------------------------------------------------------
  // Configuracion por defecto (ajustable desde el popup -> chrome.storage)
  // ---------------------------------------------------------------------
  const DEFAULTS = {
    baseIntervalMs: 3000, // intervalo base entre scrolls (~3s pedido)
    jitterMs: 1200, // variacion aleatoria +/- aplicada al intervalo
    stallCycles: 6, // ciclos sin comentarios nuevos antes de parar
    longPauseEvery: 12, // cada N ciclos hace una pausa larga "de lectura"
    longPauseMs: 7000, // duracion de esa pausa larga
    expandReplies: true, // abrir automaticamente "Mostrar respuestas"
    autoStart: false, // arrancar solo al abrir un video
  };

  const state = {
    running: false,
    cfg: { ...DEFAULTS },
    timer: null,
    cycle: 0,
    lastCount: 0,
    stableCount: 0, // ciclos consecutivos sin crecimiento
    totalSeen: 0,
    startedAt: 0,
    stopReason: "",
  };

  // ---------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------
  const rand = (min, max) => Math.random() * (max - min) + min;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function countComments() {
    // Cada hilo de comentario de primer nivel.
    return document.querySelectorAll("ytd-comment-thread-renderer").length;
  }

  function isVerificationWall() {
    // Heuristica para detectar captcha / "confirma que no eres un robot".
    const txt = (document.body.innerText || "").toLowerCase();
    const flags = [
      "unusual traffic",
      "trafico inusual",
      "confirma que no eres un robot",
      "verify you're not a robot",
      "i'm not a robot",
      "recaptcha",
    ];
    if (flags.some((f) => txt.includes(f))) return true;
    if (document.querySelector("iframe[src*='recaptcha']")) return true;
    return false;
  }

  function commentsAvailable() {
    // ¿Existe ya la seccion de comentarios en la pagina?
    return !!document.querySelector("ytd-comments, ytd-item-section-renderer#sections");
  }

  // Expande los bloques "Mostrar X respuestas" visibles en el viewport.
  function expandVisibleReplies(limit = 3) {
    if (!state.cfg.expandReplies) return;
    const buttons = document.querySelectorAll(
      "ytd-comment-replies-renderer #more-replies button, " +
        "ytd-button-renderer#more-replies button, " +
        "#more-replies button"
    );
    let clicked = 0;
    for (const btn of buttons) {
      if (clicked >= limit) break;
      const r = btn.getBoundingClientRect();
      const inView = r.top >= 0 && r.top <= window.innerHeight;
      if (inView && btn.offsetParent !== null) {
        btn.click();
        clicked++;
      }
    }
  }

  // Scroll humano: en vez de saltar de golpe al fondo, baja en 2-4 pasos
  // suaves con distancias variables.
  async function humanScroll() {
    const steps = Math.round(rand(2, 4));
    for (let i = 0; i < steps; i++) {
      const vh = window.innerHeight;
      const delta = vh * rand(0.55, 0.95); // entre media pantalla y casi una
      window.scrollBy({ top: delta, left: 0, behavior: "smooth" });
      await sleep(rand(220, 520));
    }
    // De vez en cuando un pequeño "rebote" hacia arriba, como un humano.
    if (Math.random() < 0.18) {
      window.scrollBy({ top: -rand(40, 160), left: 0, behavior: "smooth" });
    }
  }

  // ---------------------------------------------------------------------
  // Bucle principal
  // ---------------------------------------------------------------------
  async function tick() {
    if (!state.running) return;

    if (isVerificationWall()) {
      stop("YouTube mostro una verificacion: detenido para no insistir.");
      return;
    }

    state.cycle++;

    expandVisibleReplies();
    await humanScroll();

    const now = countComments();
    state.totalSeen = now;

    if (now > state.lastCount) {
      state.lastCount = now;
      state.stableCount = 0;
    } else {
      state.stableCount++;
    }

    pushStatus();

    if (state.stableCount >= state.cfg.stallCycles) {
      stop(`Listo: no aparecen mas comentarios (${now} cargados).`);
      return;
    }

    // Calcula el proximo retardo: base +/- jitter, con pausa larga ocasional.
    let wait = state.cfg.baseIntervalMs + rand(-state.cfg.jitterMs, state.cfg.jitterMs);
    if (state.cycle % state.cfg.longPauseEvery === 0) {
      wait += state.cfg.longPauseMs * rand(0.7, 1.3);
    }
    wait = Math.max(1200, wait); // nunca por debajo de ~1.2s

    state.timer = setTimeout(tick, wait);
  }

  function start() {
    if (state.running) return;
    if (!commentsAvailable()) {
      // Aun no hay comentarios (p.ej. recien cargo la pagina): reintenta.
      pushStatus("Esperando a la seccion de comentarios...");
    }
    state.running = true;
    state.cycle = 0;
    state.lastCount = countComments();
    state.stableCount = 0;
    state.startedAt = Date.now();
    state.stopReason = "";
    showOverlay();
    pushStatus("En marcha");
    state.timer = setTimeout(tick, rand(600, 1400));
  }

  function stop(reason = "Detenido manualmente") {
    state.running = false;
    if (state.timer) clearTimeout(state.timer);
    state.timer = null;
    state.stopReason = reason;
    pushStatus(reason);
    updateOverlay();
  }

  function toggle() {
    state.running ? stop() : start();
  }

  // ---------------------------------------------------------------------
  // Estado compartido con el popup
  // ---------------------------------------------------------------------
  function snapshot() {
    return {
      running: state.running,
      cycle: state.cycle,
      total: state.totalSeen,
      stableCount: state.stableCount,
      stallCycles: state.cfg.stallCycles,
      elapsedSec: state.startedAt ? Math.round((Date.now() - state.startedAt) / 1000) : 0,
      stopReason: state.stopReason,
    };
  }

  function pushStatus(msg) {
    const snap = snapshot();
    if (msg) snap.message = msg;
    try {
      chrome.runtime.sendMessage({ type: "status", payload: snap }, () => void chrome.runtime.lastError);
    } catch (_) {}
    updateOverlay(msg);
  }

  // ---------------------------------------------------------------------
  // Overlay en pagina (indicador flotante)
  // ---------------------------------------------------------------------
  let overlay = null;
  function showOverlay() {
    if (overlay) {
      overlay.style.display = "flex";
      return;
    }
    overlay = document.createElement("div");
    overlay.id = "yt-cas-overlay";
    overlay.innerHTML = `
      <span class="yt-cas-dot"></span>
      <span class="yt-cas-text">Auto-scroll…</span>
      <button class="yt-cas-btn" type="button">Parar</button>
    `;
    Object.assign(overlay.style, {
      position: "fixed",
      zIndex: "2147483647",
      right: "16px",
      bottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 12px",
      background: "rgba(15,15,15,0.92)",
      color: "#fff",
      font: "13px/1.3 Roboto, Arial, sans-serif",
      borderRadius: "10px",
      boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
      cursor: "default",
      userSelect: "none",
    });
    document.documentElement.appendChild(overlay);

    const dot = overlay.querySelector(".yt-cas-dot");
    Object.assign(dot.style, {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      background: "#3ea6ff",
      boxShadow: "0 0 0 0 rgba(62,166,255,0.6)",
      animation: "yt-cas-pulse 1.4s infinite",
    });

    const btn = overlay.querySelector(".yt-cas-btn");
    Object.assign(btn.style, {
      marginLeft: "4px",
      border: "none",
      borderRadius: "6px",
      padding: "4px 10px",
      background: "#3ea6ff",
      color: "#0f0f0f",
      fontWeight: "600",
      cursor: "pointer",
    });
    btn.addEventListener("click", () => toggle());

    if (!document.getElementById("yt-cas-style")) {
      const st = document.createElement("style");
      st.id = "yt-cas-style";
      st.textContent =
        "@keyframes yt-cas-pulse{0%{box-shadow:0 0 0 0 rgba(62,166,255,.6)}70%{box-shadow:0 0 0 8px rgba(62,166,255,0)}100%{box-shadow:0 0 0 0 rgba(62,166,255,0)}}";
      document.head.appendChild(st);
    }
  }

  function updateOverlay(msg) {
    if (!overlay) return;
    const text = overlay.querySelector(".yt-cas-text");
    const dot = overlay.querySelector(".yt-cas-dot");
    const btn = overlay.querySelector(".yt-cas-btn");
    const snap = snapshot();
    if (text) {
      text.textContent = state.running
        ? `Comentarios: ${snap.total} · ciclo ${snap.cycle}`
        : msg || state.stopReason || "Detenido";
    }
    if (dot) {
      dot.style.background = state.running ? "#3ea6ff" : "#888";
      dot.style.animationPlayState = state.running ? "running" : "paused";
    }
    if (btn) btn.textContent = state.running ? "Parar" : "Iniciar";
  }

  // ---------------------------------------------------------------------
  // Mensajeria con el popup
  // ---------------------------------------------------------------------
  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    switch (msg && msg.type) {
      case "start":
        start();
        sendResponse(snapshot());
        break;
      case "stop":
        stop();
        sendResponse(snapshot());
        break;
      case "toggle":
        toggle();
        sendResponse(snapshot());
        break;
      case "getStatus":
        sendResponse(snapshot());
        break;
      case "updateConfig":
        state.cfg = { ...state.cfg, ...(msg.payload || {}) };
        sendResponse(snapshot());
        break;
      default:
        sendResponse({ ok: false });
    }
    return true; // respuesta async
  });

  // ---------------------------------------------------------------------
  // Carga de configuracion + arranque opcional
  // ---------------------------------------------------------------------
  chrome.storage?.sync.get(DEFAULTS, (cfg) => {
    state.cfg = { ...DEFAULTS, ...cfg };
    if (state.cfg.autoStart && location.pathname.startsWith("/watch")) {
      // Pequeña espera a que monte la seccion de comentarios.
      setTimeout(() => start(), 2500);
    }
  });

  // YouTube es una SPA: al cambiar de video se dispara este evento.
  window.addEventListener("yt-navigate-finish", () => {
    if (state.running) stop("Cambiaste de pagina: auto-scroll detenido.");
  });
})();
