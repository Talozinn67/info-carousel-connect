
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy-light text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Seu Escritório de Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
