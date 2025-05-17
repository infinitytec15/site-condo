// Tipos para o dataLayer do GTM
type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

// Declaração global para TypeScript reconhecer o dataLayer
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
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
}
