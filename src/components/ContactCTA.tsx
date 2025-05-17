"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function ContactCTA({
  title = "Pronto para transformar a gestão do seu condomínio?",
  subtitle = "Solicite uma demonstração gratuita e descubra como nossa plataforma pode simplificar o dia a dia do seu condomínio com soluções personalizadas.",
  buttonText = "Enviar Solicitação",
}: ContactCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {subtitle}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-300"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-200">
                  Implantação rápida e personalizada
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-300"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-200">
                  Suporte técnico especializado
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-300"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-200">
                  Garantia de satisfação de 30 dias
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full inline-flex mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 dark:text-green-300"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato
                    em breve para agendar sua demonstração.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar nova solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Solicite uma demonstração gratuita
                  </h3>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu condomínio e necessidades específicas"
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full button-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-heading font-bold shadow-3d"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : buttonText}
                  </Button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    Ao enviar, você concorda com nossa{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Política de Privacidade
                    </a>
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
