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
          <FeaturesGrid />
        </div>
      </section>

      {/* Panel Showcase */}
      <section className="w-full py-16 md:py-24 bg-muted/50 px-4">
        <div className="container mx-auto">
          <PanelShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
