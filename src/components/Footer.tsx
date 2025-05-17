import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
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
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                    <path d="M12 11v6"></path>
                    <path d="M8 11v2"></path>
                    <path d="M16 11v2"></path>
                  </svg>
                </div>
                <span className="text-xl font-heading font-bold">
                  CondoGest
                </span>
              </div>
            </div>
            <p className="text-slate-300 mb-4 font-body">
              Transformando a gestão condominial com tecnologia inteligente e
              soluções personalizadas para síndicos, administradores e
              moradores.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="#panels"
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  White-Label
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
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
                  className="text-blue-400 mr-3 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-slate-300">(11) 4321-1234</span>
              </li>
              <li className="flex items-start">
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
                  className="text-blue-400 mr-3 mt-1"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-slate-300">contato@condogest.com.br</span>
              </li>
              <li className="flex items-start">
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
                  className="text-blue-400 mr-3 mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-slate-300">
                  Av. Paulista, 1000, São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">
              Newsletter
            </h3>
            <p className="text-slate-300 mb-4 font-body">
              Inscreva-se para receber novidades e dicas sobre gestão
              condominial.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-slate-800 border-slate-700 text-white rounded-r-none focus-visible:ring-blue-500"
              />
              <Button className="button-3d bg-gradient-to-r from-blue-500 to-purple-600 rounded-l-none">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CondoGest. Todos os direitos
            reservados.
          </p>
          <div className="flex justify-center sm:justify-end space-x-4 text-sm">
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
