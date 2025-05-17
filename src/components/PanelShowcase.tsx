"use client";

import React, { useState } from "react";
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
} from "lucide-react";

interface PanelFeature {
  title: string;
  description: string;
}

interface PanelData {
  title: string;
  description: string;
  image: string;
  features: PanelFeature[];
  icon: React.ReactNode;
}

export default function PanelShowcase() {
  const [activeTab, setActiveTab] = useState("administrator");

  const panels: Record<string, PanelData> = {
    administrator: {
      title: "Painel do Administrador",
      description:
        "Controle total sobre todas as operações do condomínio com ferramentas avançadas de gestão e relatórios detalhados.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      icon: <Shield className="h-5 w-5" />,
      features: [
        {
          title: "Gestão Financeira Completa",
          description:
            "Controle de receitas, despesas e inadimplência com relatórios detalhados",
        },
        {
          title: "Administração de Usuários",
          description:
            "Gerencie permissões e acesso para síndicos, porteiros e moradores",
        },
        {
          title: "Relatórios Personalizados",
          description: "Visualize dados importantes em dashboards interativos",
        },
        {
          title: "Configurações do Sistema",
          description:
            "Personalize o sistema de acordo com as necessidades do condomínio",
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
      features: [
        {
          title: "Assembleias Digitais Simplificadas",
          description:
            "Edite pautas e envie convites automaticamente por e-mail e SMS",
        },
        {
          title: "Votação Online Segura",
          description:
            "Sistema de votação com quórum automático e apuração instantânea",
        },
        {
          title: "Transparência Financeira Total",
          description: "Relatórios de gastos aprovados em PDF com um clique",
        },
        {
          title: "Notificações Instantâneas",
          description:
            "Comunique-se diretamente com moradores e reduza conflitos",
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
      features: [
        {
          title: "Registro de Visitantes",
          description: "Controle de entrada e saída de visitantes com foto",
        },
        {
          title: "Gerenciamento de Entregas",
          description:
            "Registre e notifique moradores sobre encomendas recebidas",
        },
        {
          title: "Ocorrências e Incidentes",
          description: "Documentação de eventos importantes na portaria",
        },
        {
          title: "Comunicação com Moradores",
          description: "Chat direto com residentes para autorizações rápidas",
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
      features: [
        {
          title: "Reservas de Áreas Comuns",
          description: "Agende salão, quadra e churrasqueira com poucos toques",
        },
        {
          title: "Chamados de Manutenção com Fotos",
          description:
            "Reporte problemas com imagens e acompanhe em tempo real",
        },
        {
          title: "Boletos e Histórico Financeiro",
          description: "Visualize, pague e acompanhe todas suas finanças",
        },
        {
          title: "Notificações Push em Tempo Real",
          description: "Receba alertas importantes diretamente no seu celular",
        },
      ],
    },
  };

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Painéis Personalizados para Cada Usuário
          </h2>
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
          className="w-full max-w-5xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger
                value="administrator"
                className="flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Administrador</span>
              </TabsTrigger>
              <TabsTrigger value="manager" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Síndico</span>
              </TabsTrigger>
              <TabsTrigger value="doorman" className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                <span className="hidden md:inline">Porteiro</span>
              </TabsTrigger>
              <TabsTrigger value="resident" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden md:inline">Morador</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(panels).map(([key, panel]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <Badge
                      variant="outline"
                      className="mb-2 flex items-center gap-1 w-fit"
                    >
                      {panel.icon}
                      <span>{panel.title}</span>
                    </Badge>
                    <h3 className="text-2xl font-bold">{panel.title}</h3>
                    <p className="text-muted-foreground">{panel.description}</p>

                    <div className="grid gap-4 mt-6">
                      {panel.features.map((feature, index) => (
                        <Card
                          key={index}
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="mt-1 bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                                {index === 0 ? (
                                  <BarChart3 className="h-4 w-4 text-white" />
                                ) : index === 1 ? (
                                  <Settings className="h-4 w-4 text-white" />
                                ) : index === 2 ? (
                                  <UserCog className="h-4 w-4 text-white" />
                                ) : (
                                  <Check className="h-4 w-4 text-white" />
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
                  <div className="relative rounded-lg overflow-hidden shadow-xl border border-border">
                    <img
                      src={panel.image}
                      alt={`Interface do ${panel.title}`}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm font-medium">
                          Interface intuitiva e completa
                        </p>
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
