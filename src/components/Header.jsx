import React from "react";

const Header = () => {
  return (
<div className="bg-[#242424] min-h-screen text-white">
  {/* Header */}
  <header className="flex justify-between items-center p-4 bg-[#242424] shadow-md fixed w-full z-10">
    <img src="/img/logo-white.png" alt="Logo" className="w-20 h-20 object-contain" style={{ marginLeft: '15rem' }}/>
    <div className="space-x-5">
        <button className="text-black py-2 px-4 rounded-full" style={{ backgroundColor: '#FFE600' }}>Preciso de Ajuda</button>
        <button className="text-black py-2 px-4 rounded-full" style={{ backgroundColor: '#FFE600' }}>Quero oferecer serviços</button>
    </div>
  </header>
</div>

);

}

export default Header;