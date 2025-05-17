"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  condominium: string;
  quote: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      position: "Síndica",
      condominium: "Residencial Parque Verde",
      quote:
        "Desde que implementamos este sistema, a gestão do condomínio ficou muito mais eficiente. Reduziu nosso tempo administrativo em 40%!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      position: "Administrador",
      condominium: "Edifício Horizonte",
      quote:
        "A transparência financeira e a facilidade de comunicação com os moradores transformaram completamente nossa gestão condominial.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    },
    {
      id: 3,
      name: "Mariana Costa",
      position: "Moradora",
      condominium: "Condomínio Solar",
      quote:
        "Agora consigo acompanhar tudo pelo celular: reservas, boletos, comunicados. Muito prático e intuitivo!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana",
    },
    {
      id: 4,
      name: "Roberto Almeida",
      position: "Síndico",
      condominium: "Residencial Atlântico",
      quote:
        "O módulo de assembleias virtuais foi um divisor de águas para aumentar a participação dos moradores nas decisões do condomínio.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    },
    {
      id: 5,
      name: "Juliana Ferreira",
      position: "Administradora",
      condominium: "Condomínio Jardins",
      quote:
        "O suporte é excelente e o sistema é extremamente personalizável para nossas necessidades específicas.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) =>
          current === testimonials.length - 1 ? 0 : current + 1,
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
    setAutoplay(false);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950 dark:via-indigo-950 dark:to-blue-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-70 dark:from-slate-900 dark:to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-70 dark:from-slate-900 dark:to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/50 px-4 py-2 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600 dark:text-purple-400"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
            <span className="text-purple-800 dark:text-purple-300 font-medium">
              Depoimentos
            </span>
          </div>

          <h2 className="text-3xl font-heading font-bold mb-2 text-slate-800 dark:text-slate-100 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            O que nossos clientes dizem
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-body">
            Conheça as experiências de quem já transformou a gestão do seu
            condomínio com nossa solução
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-3d hover:shadow-xl transition-all duration-300 border border-white/50 dark:border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-3">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <p className="text-slate-700 dark:text-slate-200 italic mb-4 text-lg font-body">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <h4 className="font-bold text-purple-600 dark:text-purple-400 font-heading">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {testimonial.position} • {testimonial.condominium}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
