import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PanelShowcase from "@/components/PanelShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades Completas para Gestão Condominial
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simplifique a administração do seu condomínio com nosso sistema
              integrado e personalizável
            </p>
          </div>
          <FeaturesGrid />
        </div>
      </section>

      {/* Panel Showcase */}
      <section className="w-full py-16 md:py-24 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Painéis Personalizados para Cada Função
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interfaces intuitivas e específicas para cada perfil de usuário do
              condomínio
            </p>
          </div>
          <PanelShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <TestimonialsSection />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
