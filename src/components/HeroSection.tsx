import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";

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
    <section className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] section-gradient-blue flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden relative">
      {/* 3D Decorative elements - Responsive sizes */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-24 sm:w-36 h-24 sm:h-36 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

      {/* 3D Geometric shapes - Responsive sizes */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 border-2 sm:border-4 border-white/20 rounded-xl transform rotate-12 animate-float opacity-40"></div>
      <div className="absolute bottom-1/3 right-10 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 border-2 sm:border-4 border-white/20 rounded-full transform -rotate-12 animate-float opacity-40 animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 sm:w-24 h-16 sm:h-24 border-2 sm:border-4 border-white/20 transform rotate-45 animate-float opacity-40 animation-delay-3000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-4 sm:mb-6 md:mb-8 space-y-3 sm:space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-4">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <span className="text-sm sm:text-base text-white/90 font-medium">
              Solução Completa para Condomínios
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
          <Button
            size="lg"
            className="button-3d relative bg-white text-blue-600 hover:bg-blue-50 font-heading font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-4 md:py-6 h-auto shadow-3d"
          >
            {ctaText}
            <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-75"></div>
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-3d border-2 sm:border-4 border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
              alt="Dashboard do sistema de gestão condominial"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-400 rounded-full p-1 sm:p-2 shadow-lg animate-pulse">
              <Star className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
