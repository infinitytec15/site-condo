// Tipos para o dataLayer do GTM
type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

// Declaração global para TypeScript reconhecer o dataLayer e fbq
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    fbq: any;
  }
}

/**
 * Envia um evento para o Google Tag Manager
 */
export function sendGTMEvent(event: DataLayerEvent): void {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(event);
  } else {
    console.warn("GTM dataLayer not available");
  }
}

/**
 * Envia um evento para o Meta Pixel
 */
export function sendMetaPixelEvent(eventName: string, params?: object): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  } else {
    console.warn("Meta Pixel fbq not available");
  }
}

/**
 * Rastreia visualização de página
 */
export function trackPageView(url: string, title: string): void {
  sendGTMEvent({
    event: "page_view",
    page: {
      path: url,
      title: title,
    },
  });

  // Também rastreia no Meta Pixel
  sendMetaPixelEvent("PageView");
}

/**
 * Rastreia interação com elementos
 */
export function trackElementInteraction(
  elementType: string,
  elementId: string,
  action: string,
): void {
  sendGTMEvent({
    event: "element_interaction",
    element: {
      type: elementType,
      id: elementId,
      action: action,
    },
  });
}

/**
 * Rastreia envio de formulário
 */
export function trackFormSubmission(
  formName: string,
  formData: Record<string, any>,
): void {
  sendGTMEvent({
    event: "form_submission",
    form: {
      name: formName,
      data: formData,
    },
  });

  // Também rastreia no Meta Pixel
  sendMetaPixelEvent("Lead", { form_name: formName });
}

/**
 * Rastreia cliques em links
 */
export function trackLinkClick(
  linkUrl: string,
  linkText: string,
  linkLocation: string,
): void {
  sendGTMEvent({
    event: "link_click",
    link: {
      url: linkUrl,
      text: linkText,
      location: linkLocation,
    },
  });
}

/**
 * Rastreia visualização de seção
 */
export function trackSectionView(sectionName: string, sectionId: string): void {
  sendGTMEvent({
    event: "section_view",
    section: {
      name: sectionName,
      id: sectionId,
    },
  });

  // Também rastreia no GA4 diretamente
  sendGA4Event("section_view", {
    section_name: sectionName,
    section_id: sectionId,
  });
}
