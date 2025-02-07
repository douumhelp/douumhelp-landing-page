import React from "react";

const NavBar = () => {
  return (
<div className="bg-default flex flex-col">
      <nav className="bg-default-900 p-6">
        <div className="container mx-auto flex justify-between items-center">
        <img src="/img/logo-white.png" alt="logo" className="mr-2 ml-8" width="125" height="125"/>

          <ul className="flex space-x-6">
            <li>
            <button class="bg-[#FFE600] text-black px-4 py-2 rounded-full hover:bg-[#FFEB36]" style={{borderRadius: '15px'}}>
              Preciso de Ajuda
            </button>
            </li>
            <li>
            <button class="bg-[#FFE600] text-black px-4 py-2 rounded-full hover:bg-[#FFEB36]" style={{borderRadius: '15px'}}>
              Quero oferecer serviços
            </button>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
</div>
);

}

export default NavBar;