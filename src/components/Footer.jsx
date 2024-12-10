import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Texto principal */}
          <p className="text-lg font-medium mb-4">
            © 2024 Minha Empresa. Todos os direitos reservados.
          </p>

          {/* Links do rodapé */}
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-300">Política de Privacidade</a>
            <a href="#terms" className="hover:text-gray-300">Termos de Serviço</a>
            <a href="#contact" className="hover:text-gray-300">Contato</a>
          </div>

          {/* Redes sociais */}
          <div className="mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 mx-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M22 12l-2 6h-4v-4h4l-2 6h-6l4-12h-4v4h4l-2 6h4z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 mx-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M23 3a10.1 10.1 0 0 1-2.828 1.055A4.72 4.72 0 0 0 22.458 1.35a10.4 10.4 0 0 1-3.132 1.188A4.77 4.77 0 0 0 16.616 0c-2.655 0-4.794 2.15-4.794 4.794 0 .375.043.742.126 1.094-3.99-.2-7.52-2.103-9.89-5.14-.413.706-.649 1.52-.649 2.395 0 1.654.84 3.12 2.108 3.98a4.75 4.75 0 0 1-2.17-.588v.058a4.786 4.786 0 0 0 3.837 4.687c-.228.064-.466.097-.706.097-.172 0-.34-.017-.506-.048.34 1.06 1.33 1.832 2.48 1.864A9.6 9.6 0 0 1 1 19.568a13.593 13.593 0 0 0 7.304 2.134c8.757 0 13.568-7.285 13.568-13.568 0-.207-.004-.415-.012-.622A9.692 9.692 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 mx-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M20 0h-16c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2zm-11 20h-3v-12h3v12zm-1.5-13c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm12 13h-3v-5.75c0-1.478-1.477-2.25-2.75-2.25-1.257 0-2.25.78-2.25 2.25v5.75h-3v-12h3v1.5c.415-.758 1.14-1.5 2.25-1.5 2.813 0 4.5 1.772 4.5 4.5v7.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
