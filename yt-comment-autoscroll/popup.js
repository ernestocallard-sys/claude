/* Popup: controla el content script de la pestaña activa de YouTube. */

const DEFAULTS = {
  baseIntervalMs: 3000,
  jitterMs: 1200,
  stallCycles: 6,
  longPauseEvery: 12,
  longPauseMs: 7000,
  expandReplies: true,
  autoStart: false,
};

const $ = (id) => document.getElementById(id);
const CFG_FIELDS = ["baseIntervalMs", "jitterMs", "stallCycles", "expandReplies", "autoStart"];

let tabId = null;

async function getYouTubeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function send(type, payload) {
  return new Promise((resolve) => {
    if (tabId == null) return resolve(null);
    chrome.tabs.sendMessage(tabId, { type, payload }, (resp) => {
      void chrome.runtime.lastError; // ignora "no receiver" silenciosamente
      resolve(resp || null);
    });
  });
}

function render(snap) {
  if (!snap) {
    $("s-state").textContent = "Sin conexión";
    $("s-msg").textContent = "Abre un video de YouTube y recarga la página.";
    $("dot").classList.remove("on");
    return;
  }
  $("dot").classList.toggle("on", !!snap.running);
  $("s-state").textContent = snap.running ? "En marcha" : "Detenido";
  $("s-total").textContent = snap.total ?? 0;
  $("s-cycle").textContent = snap.cycle ?? 0;
  $("s-time").textContent = `${snap.elapsedSec ?? 0}s`;
  $("s-msg").textContent = snap.message || snap.stopReason || "";
  $("btn-start").disabled = !!snap.running;
  $("btn-stop").disabled = !snap.running;
}

async function loadConfigIntoForm() {
  const cfg = await chrome.storage.sync.get(DEFAULTS);
  for (const k of CFG_FIELDS) {
    const el = $(k);
    if (!el) continue;
    if (el.type === "checkbox") el.checked = !!cfg[k];
    else el.value = cfg[k];
  }
}

async function saveConfigFromForm() {
  const patch = {};
  for (const k of CFG_FIELDS) {
    const el = $(k);
    if (!el) continue;
    patch[k] = el.type === "checkbox" ? el.checked : Number(el.value);
  }
  await chrome.storage.sync.set(patch);
  await send("updateConfig", patch);
}

async function init() {
  const tab = await getYouTubeTab();
  if (!tab || !/^https:\/\/(www|m)\.youtube\.com\//.test(tab.url || "")) {
    render(null);
    $("s-msg").textContent = "Esta no es una pestaña de YouTube.";
    return;
  }
  tabId = tab.id;

  await loadConfigIntoForm();
  render(await send("getStatus"));

  $("btn-start").addEventListener("click", async () => render(await send("start")));
  $("btn-stop").addEventListener("click", async () => render(await send("stop")));

  for (const k of CFG_FIELDS) {
    $(k)?.addEventListener("change", saveConfigFromForm);
  }

  // Actualiza el estado en vivo mientras el content script trabaja.
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg && msg.type === "status") render(msg.payload);
  });

  // Refresco periodico por si se pierde algun mensaje.
  setInterval(async () => render(await send("getStatus")), 1500);
}

init();
