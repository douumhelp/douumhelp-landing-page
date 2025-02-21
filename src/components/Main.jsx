import React from "react";
import './Main.css';

const Main = () => {
  return (
    <div className="bg-default text-white flex flex-row justify-between items-center p-8 h-[50vh]">
      <div className="max-w-lg ml-16">
        <h1 className="text-[#FFE600] text-4xl font-bold leading-tight">
          Encontre ou ofereça ajuda para tarefas do dia a dia!
        </h1>
        <p className="mt-4 text-lg text-white-300">
          Conectamos quem precisa de serviços domésticos com profissionais especializados. 
          Tudo de forma rápida, prática e segura.
        </p>
        <div className="mt-6 flex col gap-4">
          <button className="bg-[#FFE600] text-black px-4 py-2 hover:bg-[#FFEB36]" style={{borderRadius: '15px'}}>
            Preciso de Ajuda
          </button>
          <button className="bg-[#FFE600] text-black px-6 py-2 hover:bg-[#FFEB36]" style={{borderRadius: '15px'}}>
            Quero oferecer serviços
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src="/img/logo-bg.png" alt="logo" className="mr-20 ml-8"/>
      </div>
    </div>
  );
};

export default Main;
