import React from "react";
import Navbar from "../../components/Navbar";  // Ajuste o caminho conforme a estrutura de pastas
import Footer from "../../components/Footer"; // Ajuste o caminho conforme a estrutura de pastas

const Home = () => {
  return (
    <div>
      {/* Navbar no topo */}
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        {/* Conteúdo da página */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold text-blue-600">Bem-vindo ao Nosso Site!</h1>
          <p className="mt-4 text-lg text-gray-700">
            Aqui você pode encontrar informações sobre nossos produtos e serviços.
          </p>
        </section>

        {/* Outros conteúdos ou seções podem ser adicionados aqui */}
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Home;
