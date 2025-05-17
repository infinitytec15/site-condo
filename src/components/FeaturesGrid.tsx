"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  MessageSquare,
  FileText,
  CreditCard,
  ShieldCheck,
  Bell,
  Users,
  Key,
  BarChart,
  Sparkles,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const FeatureCard = ({
  icon,
  title,
  description = "Descrição da funcionalidade",
  color,
  index,
}: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Card
      className={`bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div
          className={`mb-6 p-4 rounded-full feature-icon-pop shadow-lg`}
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}40)`,
            boxShadow: `0 10px 15px -3px ${color}20, 0 4px 6px -4px ${color}30`,
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 blur-sm opacity-40"
              style={{ color }}
            >
              {icon}
            </div>
            <div className="relative z-10 float" style={{ color }}>
              {icon}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesGrid = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const featureColors = {
    financial: "#4f46e5", // indigo
    reservations: "#0891b2", // cyan
    communication: "#2563eb", // blue
    assemblies: "#7c3aed", // violet
    property: "#059669", // emerald
    access: "#d97706", // amber
    occurrences: "#dc2626", // red
    residents: "#8b5cf6", // purple
    virtual: "#0d9488", // teal
    analytics: "#ea580c", // orange
  };

  const features = [
    {
      icon: <CreditCard size={28} strokeWidth={1.5} />,
      title: "Gestão Financeira",
      description:
        "Controle completo de receitas, despesas e prestação de contas com relatórios detalhados.",
      color: featureColors.financial,
    },
    {
      icon: <Calendar size={28} strokeWidth={1.5} />,
      title: "Reservas de Áreas",
      description:
        "Sistema intuitivo para agendamento de espaços comuns como salão de festas e churrasqueira.",
      color: featureColors.reservations,
    },
    {
      icon: <MessageSquare size={28} strokeWidth={1.5} />,
      title: "Comunicação",
      description:
        "Canal direto entre moradores, síndico e administração com notificações em tempo real.",
      color: featureColors.communication,
    },
    {
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: "Assembleias",
      description:
        "Organização e documentação de reuniões com votação online e registro de atas.",
      color: featureColors.assemblies,
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gestão Patrimonial",
      description:
        "Controle de manutenções preventivas e corretivas com histórico completo.",
      color: featureColors.property,
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Controle de Acesso",
      description:
        "Registro de visitantes, prestadores de serviço e entregas com máxima segurança.",
      color: featureColors.access,
    },
    {
      icon: <Bell size={28} strokeWidth={1.5} />,
      title: "Ocorrências",
      description:
        "Registro e acompanhamento de reclamações, sugestões e solicitações dos moradores.",
      color: featureColors.occurrences,
    },
    {
      icon: <Users size={28} strokeWidth={1.5} />,
      title: "Gestão de Moradores",
      description:
        "Cadastro completo de proprietários, inquilinos e veículos com dados atualizados.",
      color: featureColors.residents,
    },
    {
      icon: <Key size={28} strokeWidth={1.5} />,
      title: "Portaria Virtual",
      description:
        "Liberação remota de acessos e monitoramento de entradas e saídas em tempo real.",
      color: featureColors.virtual,
    },
    {
      icon: <BarChart size={28} strokeWidth={1.5} />,
      title: "Dashboards Analíticos",
      description:
        "Visualização clara de indicadores financeiros e operacionais para tomada de decisões.",
      color: featureColors.analytics,
    },
  ];

  return (
    <section className="py-16 px-4 section-gradient-light relative overflow-hidden">
      {/* Decorative elements with enhanced animations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float"></div>
      <div
        className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="absolute top-40 left-40 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 spin-slow"></div>

      {/* New decorative elements */}
      <div
        className="absolute bottom-40 right-40 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-60 left-1/4 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 spin-slow"
        style={{ animationDelay: "0.5s", animationDuration: "12s" }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${animateHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4 bounce-in">
            <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
            <span className="text-blue-800 font-medium">Módulos Poderosos</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent slide-up">
            Funcionalidades Completas para seu Condomínio
          </h2>
          <p
            className="text-xl text-slate-700 max-w-3xl mx-auto font-body fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Nosso sistema oferece todas as ferramentas necessárias para uma
            gestão eficiente e transparente do seu condomínio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
