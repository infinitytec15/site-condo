"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Users,
  Home,
  Shield,
  Key,
  BarChart3,
  Settings,
  UserCog,
  Zap,
  Bell,
  FileText,
  Calendar,
  MessageSquare,
  Package,
  AlertTriangle,
  CreditCard,
} from "lucide-react";

interface PanelFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

interface PanelData {
  title: string;
  description: string;
  image: string;
  features: PanelFeature[];
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
}

export default function PanelShowcase() {
  const [activeTab, setActiveTab] = useState("administrator");
  const [isVisible, setIsVisible] = useState(false);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimateFeatures(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset animations when tab changes
    setAnimateFeatures(false);
    const timer = setTimeout(() => {
      setAnimateFeatures(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const panels: Record<string, PanelData> = {
    administrator: {
      title: "Painel do Administrador",
      description:
        "Controle total sobre todas as operações do condomínio com ferramentas avançadas de gestão e relatórios detalhados.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      icon: <Shield className="h-5 w-5" />,
      color: "from-blue-600 to-indigo-800",
      bgGradient:
        "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      features: [
        {
          title: "Gestão Financeira Completa",
          description:
            "Controle de receitas, despesas e inadimplência com relatórios detalhados",
          icon: <BarChart3 />,
          color: "from-blue-500 to-blue-700",
        },
        {
          title: "Administração de Usuários",
          description:
            "Gerencie permissões e acesso para síndicos, porteiros e moradores",
          icon: <UserCog />,
          color: "from-indigo-500 to-indigo-700",
        },
        {
          title: "Relatórios Personalizados",
          description: "Visualize dados importantes em dashboards interativos",
          icon: <FileText />,
          color: "from-violet-500 to-violet-700",
        },
        {
          title: "Configurações do Sistema",
          description:
            "Personalize o sistema de acordo com as necessidades do condomínio",
          icon: <Settings />,
          color: "from-blue-600 to-indigo-600",
        },
      ],
    },
    manager: {
      title: "Síndico no Controle Absoluto",
      description:
        "Convocações, votações e transparência financeira em um único painel para uma gestão sem complicações.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      icon: <Users className="h-5 w-5" />,
      color: "from-emerald-600 to-teal-800",
      bgGradient:
        "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      features: [
        {
          title: "Assembleias Digitais Simplificadas",
          description:
            "Edite pautas e envie convites automaticamente por e-mail e SMS",
          icon: <Calendar />,
          color: "from-emerald-500 to-emerald-700",
        },
        {
          title: "Votação Online Segura",
          description:
            "Sistema de votação com quórum automático e apuração instantânea",
          icon: <Check />,
          color: "from-teal-500 to-teal-700",
        },
        {
          title: "Transparência Financeira Total",
          description: "Relatórios de gastos aprovados em PDF com um clique",
          icon: <FileText />,
          color: "from-green-500 to-green-700",
        },
        {
          title: "Notificações Instantâneas",
          description:
            "Comunique-se diretamente com moradores e reduza conflitos",
          icon: <Bell />,
          color: "from-emerald-600 to-teal-600",
        },
      ],
    },
    doorman: {
      title: "Painel do Porteiro",
      description:
        "Interface simplificada para controle de acesso, entregas e ocorrências, garantindo a segurança do condomínio.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      icon: <Key className="h-5 w-5" />,
      color: "from-amber-600 to-orange-700",
      bgGradient:
        "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      features: [
        {
          title: "Registro de Visitantes",
          description: "Controle de entrada e saída de visitantes com foto",
          icon: <Users />,
          color: "from-amber-500 to-amber-700",
        },
        {
          title: "Gerenciamento de Entregas",
          description:
            "Registre e notifique moradores sobre encomendas recebidas",
          icon: <Package />,
          color: "from-orange-500 to-orange-700",
        },
        {
          title: "Ocorrências e Incidentes",
          description: "Documentação de eventos importantes na portaria",
          icon: <AlertTriangle />,
          color: "from-yellow-500 to-yellow-700",
        },
        {
          title: "Comunicação com Moradores",
          description: "Chat direto com residentes para autorizações rápidas",
          icon: <MessageSquare />,
          color: "from-amber-600 to-orange-600",
        },
      ],
    },
    resident: {
      title: "Conveniência na Palma da Mão",
      description:
        "Solicite serviços, reserve áreas e acompanhe finanças com uma interface mobile-first e intuitiva.",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      icon: <Home className="h-5 w-5" />,
      color: "from-purple-600 to-fuchsia-700",
      bgGradient:
        "bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20",
      features: [
        {
          title: "Reservas de Áreas Comuns",
          description: "Agende salão, quadra e churrasqueira com poucos toques",
          icon: <Calendar />,
          color: "from-purple-500 to-purple-700",
        },
        {
          title: "Chamados de Manutenção com Fotos",
          description:
            "Reporte problemas com imagens e acompanhe em tempo real",
          icon: <Zap />,
          color: "from-fuchsia-500 to-fuchsia-700",
        },
        {
          title: "Boletos e Histórico Financeiro",
          description: "Visualize, pague e acompanhe todas suas finanças",
          icon: <CreditCard />,
          color: "from-violet-500 to-violet-700",
        },
        {
          title: "Notificações Push em Tempo Real",
          description: "Receba alertas importantes diretamente no seu celular",
          icon: <Bell />,
          color: "from-purple-600 to-fuchsia-600",
        },
      ],
    },
  };

  return (
    <section className="w-full py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur-xl"></div>
              <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-1">
                Painéis Personalizados para Cada Usuário
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Nossa plataforma oferece interfaces específicas para cada perfil de
            usuário, garantindo a melhor experiência e funcionalidades
            relevantes para cada papel no condomínio.
          </p>
        </div>

        <Tabs
          defaultValue="administrator"
          value={activeTab}
          onValueChange={setActiveTab}
          className={`w-full max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 rounded-xl bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30">
              {Object.entries(panels).map(([key, panel]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`flex items-center gap-2 transition-all duration-300 ${activeTab === key ? "shadow-lg scale-105" : ""}`}
                >
                  <div
                    className={`p-1.5 rounded-full bg-gradient-to-br ${panel.color} text-white`}
                  >
                    {panel.icon}
                  </div>
                  <span className="hidden md:inline">
                    {key === "administrator"
                      ? "Administrador"
                      : key === "manager"
                        ? "Síndico"
                        : key === "doorman"
                          ? "Porteiro"
                          : "Morador"}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(panels).map(([key, panel]) => (
            <TabsContent
              key={key}
              value={key}
              className={`mt-0 rounded-2xl ${panel.bgGradient} p-6 shadow-lg border border-white/20 dark:border-white/5 transition-all duration-500`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <Badge
                      variant="outline"
                      className={`mb-2 flex items-center gap-1 w-fit bg-gradient-to-r ${panel.color} text-white border-0 px-3 py-1.5 shadow-md`}
                    >
                      {panel.icon}
                      <span>{panel.title}</span>
                    </Badge>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300">
                      {panel.title}
                    </h3>
                    <p className="text-muted-foreground">{panel.description}</p>

                    <div className="grid gap-4 mt-6">
                      {panel.features.map((feature, index) => (
                        <Card
                          key={index}
                          className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${animateFeatures ? "slide-up opacity-100" : "opacity-0 translate-y-10"}`}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div
                                className={`mt-1 bg-gradient-to-br ${feature.color || panel.color} p-2.5 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-6 feature-icon-pop`}
                              >
                                {feature.icon ? (
                                  React.cloneElement(
                                    feature.icon as React.ReactElement,
                                    { className: "h-5 w-5 text-white" },
                                  )
                                ) : (
                                  <Check className="h-5 w-5 text-white" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-slate-800 dark:text-slate-200">
                                  {feature.title}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-body">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10"></div>
                    <img
                      src={panel.image}
                      alt={`Interface do ${panel.title}`}
                      className="w-full h-auto object-cover aspect-[4/3] transform transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end z-20">
                      <div className="p-5 text-white w-full">
                        <div className="flex items-center gap-2">
                          <div
                            className={`p-1 rounded-full bg-gradient-to-br ${panel.color}`}
                          >
                            {panel.icon}
                          </div>
                          <p className="text-sm font-medium">
                            Interface intuitiva e completa
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
