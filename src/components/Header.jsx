import React from "react";

const Header = () => {
  return (
    <div className="bg-[#242424] min-h-screen text-white">
    {/* Header */}
    <header className="flex justify-between items-center p-4 bg-[#242424] shadow-md fixed w-full z-10">
      <img src="/img/logo-white.png" alt="Logo" className="h-12 ml-4"/>

    </header>
  </div>
);

}

export default Header;