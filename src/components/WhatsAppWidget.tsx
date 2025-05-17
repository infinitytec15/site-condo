"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5511999999999"; // Replace with your actual WhatsApp number

  // Show widget after a small delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Track WhatsApp click in GTM
    if (typeof window !== "undefined") {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "whatsapp_click",
          button_location: "floating_widget",
        });
      }
      // Track directly in GA4
      if (window.gtag) {
        window.gtag("event", "whatsapp_click", {
          button_location: "floating_widget",
        });
      }
      // Track in Meta Pixel
      if (window.fbq) {
        window.fbq("track", "Contact", {
          content_name: "WhatsApp Click",
          content_category: "Contact",
        });
      }
    }

    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <button
        onClick={handleClick}
        className="relative group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        {/* 3D Effect with pseudo-elements */}
        <span className="absolute inset-0 rounded-full bg-white/20 blur-sm group-hover:blur-md transition-all duration-300"></span>
        <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-green-400 to-green-700 opacity-70 blur-sm group-hover:blur-md group-hover:opacity-80 transition-all duration-300"></span>

        {/* Icon */}
        <MessageCircle className="relative z-10 text-white w-8 h-8" />

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-25"></span>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 transform transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="bg-white text-slate-800 px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
          Fale conosco
        </div>
      </div>
    </div>
  );
}
