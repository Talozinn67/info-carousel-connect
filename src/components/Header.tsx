
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif text-navy">Seu Logo</h1>
          <div className="hidden md:flex gap-8">
            <a href="#inicio" className="text-navy hover:text-gold transition-colors">Início</a>
            <a href="#sobre" className="text-navy hover:text-gold transition-colors">Sobre</a>
            <a href="#servicos" className="text-navy hover:text-gold transition-colors">Serviços</a>
            <a href="#contato" className="text-navy hover:text-gold transition-colors">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
