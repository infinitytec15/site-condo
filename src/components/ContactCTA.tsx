"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "framer-motion";
import { sendGTMEvent } from "@/lib/gtm";

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
    condominiumName: "",
    condominiumType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    // Start background animation after component mounts
    setAnimateBackground(true);

    // Add scroll reveal effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".reveal-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission event
    sendGTMEvent({
      event: "form_submission",
      form: {
        name: "contact_demo_request",
        data: formData,
      },
    });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        condominiumName: "",
        condominiumType: "",
      });
    }, 1500);
  };

  const backgroundClasses = animateBackground
    ? "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-900 transition-all duration-1000 ease-in-out"
    : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950";

  return (
    <section
      className={`w-full py-16 px-4 ${backgroundClasses} relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-blue-300 opacity-20 dark:bg-blue-600 dark:opacity-10"
          style={{ top: "10%", left: "5%" }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-300 opacity-20 dark:bg-purple-600 dark:opacity-10"
          style={{ bottom: "10%", right: "5%" }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-indigo-300 opacity-20 dark:bg-indigo-600 dark:opacity-10"
          style={{ top: "40%", right: "20%" }}
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="reveal-item"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">
              {title}
            </h2>
            <p className="text-lg text-white/90 mb-8">{subtitle}</p>
            <div className="space-y-5">
              <motion.div
                className="flex items-center reveal-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4 shadow-glow">
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
                    className="text-white"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-white font-medium text-lg">
                  Implantação rápida e personalizada
                </p>
              </motion.div>
              <motion.div
                className="flex items-center reveal-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4 shadow-glow">
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
                    className="text-white"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-white font-medium text-lg">
                  Suporte técnico especializado
                </p>
              </motion.div>
              <motion.div
                className="flex items-center reveal-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4 shadow-glow">
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
                    className="text-white"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-white font-medium text-lg">
                  Garantia de satisfação de 30 dias
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl border-0 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full inline-flex mb-6 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
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
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Solicitação Enviada!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Obrigado pelo seu interesse. Nossa equipe entrará em
                      contato em breve para agendar sua demonstração.
                    </p>
                    <Button
                      className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                      onClick={() => {
                        // Evento de clique no botão de nova solicitação
                        sendGTMEvent({
                          event: "new_request_click",
                          button_location: "contact_form_success",
                          button_text: "Enviar nova solicitação",
                          form_status: "success",
                        });

                        // Track directly in GA4
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "new_request_click", {
                            button_location: "contact_form_success",
                            button_text: "Enviar nova solicitação",
                            form_status: "success",
                          });
                        }

                        // Track in Meta Pixel
                        if (typeof window !== "undefined" && window.fbq) {
                          window.fbq("track", "StartTrial", {
                            content_name: "New Request After Success",
                            content_category: "Form Interaction",
                          });
                        }
                        setIsSubmitted(false);
                      }}
                    >
                      Enviar nova solicitação
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.h3
                      className="text-xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Solicite uma demonstração gratuita
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
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
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
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
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
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
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label
                        htmlFor="condominiumName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Nome do Condomínio
                      </label>
                      <Input
                        id="condominiumName"
                        name="condominiumName"
                        value={formData.condominiumName}
                        onChange={handleChange}
                        placeholder="Nome do seu condomínio"
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label
                        htmlFor="condominiumType"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Tipo de Condomínio
                      </label>
                      <Select
                        value={formData.condominiumType}
                        onValueChange={(value) =>
                          handleSelectChange(value, "condominiumType")
                        }
                      >
                        <SelectTrigger className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <SelectValue placeholder="Selecione o tipo de condomínio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vertical-single">
                            Vertical - Torre Única
                          </SelectItem>
                          <SelectItem value="vertical-multiple">
                            Vertical - Múltiplas Torres
                          </SelectItem>
                          <SelectItem value="houses">Casas</SelectItem>
                          <SelectItem value="commercial">Comercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="mixed">Uso Misto</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
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
                        rows={3}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          buttonText
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                      Ao enviar, você concorda com nossa{" "}
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                      >
                        Política de Privacidade
                      </a>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
