export const CHECKOUT_URL = "PON_AQUI_TU_LINK_DE_HOTMART";

export const PRODUCT = {
  brand: "Lunera",
  name: "Kit ABC Mágico: Leo y escribo - Técnica americana",
  price: "$9.99",
  oldPrice: "$27",
  guaranteeDays: 7,
  supportEmail: "luneradigit4l@mail.com",
};

export const IMAGES = {
  heroKit: "https://i.postimg.cc/6ySH0Q3b/KIT-portada.png",
  guiaMama: "https://i.postimg.cc/NKHdPw2F/Guia-para-mama.png",
  nivel1: "https://i.postimg.cc/nXD3wt9L/Cuaderno-Nivel-1-Mi-Primer-Trazo.png",
  nivel2: "https://i.postimg.cc/zLY0sPT2/Cuaderno-Nivel-2-Silabas-que-canto.png",
  nivel3: "https://i.postimg.cc/jWYZpky9/Cuaderno-Nivel-3-Palabras-y-Frases.png",
  nivel4: "https://i.postimg.cc/sMhT0RGz/Cuaderno-Nivel-4-Lector-Independiente.png",
  cajaMotivacion: "https://i.postimg.cc/BjKmwGPf/Caja-de-Motivacion.png",
};

export const SHOW_COUNTDOWN = true;

export function getCheckoutAction(sectionId = "oferta"): { href: string; isExternal: boolean } {
  if (CHECKOUT_URL === "PON_AQUI_TU_LINK_DE_HOTMART") {
    return { href: `#${sectionId}`, isExternal: false };
  }
  return { href: CHECKOUT_URL, isExternal: true };
}
