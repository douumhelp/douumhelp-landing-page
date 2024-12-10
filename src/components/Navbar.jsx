import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={`${process.env.PUBLIC_URL}/Navbar/ImgTeste.png`} // Caminho para imagem , process.env.PUBLIC_URL para Deploy, muito bom Utilizar
              alt="logo"
              className="rounded-full w-16 h-16"
              />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#about" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Sobre
            </a>
            <a href="#services" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Serviços
            </a>
            <a href="#contact" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Contato
            </a>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a
            href="#home"
            className="block px-4 py-2 text-sm hover:bg-blue-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-sm hover:bg-blue-500"
          >
            Sobre
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-sm hover:bg-blue-500"
          >
            Serviços
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-sm hover:bg-blue-500"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
