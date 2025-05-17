import React from "react";
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
}

const FeatureCard = ({
  icon,
  title,
  description = "Descrição da funcionalidade",
}: FeatureCardProps) => {
  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <CreditCard size={24} />,
      title: "Gestão Financeira",
      description:
        "Controle completo de receitas, despesas e prestação de contas com relatórios detalhados.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Reservas de Áreas",
      description:
        "Sistema intuitivo para agendamento de espaços comuns como salão de festas e churrasqueira.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Comunicação",
      description:
        "Canal direto entre moradores, síndico e administração com notificações em tempo real.",
    },
    {
      icon: <FileText size={24} />,
      title: "Assembleias",
      description:
        "Organização e documentação de reuniões com votação online e registro de atas.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Gestão Patrimonial",
      description:
        "Controle de manutenções preventivas e corretivas com histórico completo.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Controle de Acesso",
      description:
        "Registro de visitantes, prestadores de serviço e entregas com máxima segurança.",
    },
    {
      icon: <Bell size={24} />,
      title: "Ocorrências",
      description:
        "Registro e acompanhamento de reclamações, sugestões e solicitações dos moradores.",
    },
    {
      icon: <Users size={24} />,
      title: "Gestão de Moradores",
      description:
        "Cadastro completo de proprietários, inquilinos e veículos com dados atualizados.",
    },
    {
      icon: <Key size={24} />,
      title: "Portaria Virtual",
      description:
        "Liberação remota de acessos e monitoramento de entradas e saídas em tempo real.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Dashboards Analíticos",
      description:
        "Visualização clara de indicadores financeiros e operacionais para tomada de decisões.",
    },
  ];

  return (
    <section className="py-16 px-4 section-gradient-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Módulos Poderosos</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Funcionalidades Completas para seu Condomínio
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-body">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
