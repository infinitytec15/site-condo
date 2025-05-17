import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const HeroSection = ({
  title = "Gestão Condominial Inteligente e Eficiente",
  subtitle = "Solução 100% customizável para seu condomínio com ferramentas que simplificam a administração e melhoram a experiência dos moradores",
  ctaText = "Solicitar Demonstração",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[700px] section-gradient-blue flex items-center justify-center px-4 py-16 md:py-24 lg:py-32 overflow-hidden relative">
      {/* 3D Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

      {/* 3D Geometric shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-4 border-white/20 rounded-xl transform rotate-12 animate-float opacity-40"></div>
      <div className="absolute bottom-1/3 right-20 w-16 h-16 border-4 border-white/20 rounded-full transform -rotate-12 animate-float opacity-40 animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-white/20 transform rotate-45 animate-float opacity-40 animation-delay-3000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-white/90 font-medium">
              Solução Completa para Condomínios
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
          <Button
            size="lg"
            className="button-3d relative bg-white text-blue-600 hover:bg-blue-50 font-heading font-bold text-lg px-8 py-6 h-auto shadow-3d"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-75"></div>
          <div className="relative rounded-xl overflow-hidden shadow-3d border-4 border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
              alt="Dashboard do sistema de gestão condominial"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2 shadow-lg animate-pulse">
              <Star className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
