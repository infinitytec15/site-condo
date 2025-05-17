// Global type definitions

// Google Tag Manager dataLayer, Google Analytics 4, and Meta Pixel
interface Window {
  dataLayer?: any[];
  fbq?: any;
  _fbq?: any;
  gtag?: (...args: any[]) => void;
}
