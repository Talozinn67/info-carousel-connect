
import React from "react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16 text-navy">Sobre Nós</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            Com anos de experiência no mercado jurídico, nossa equipe de advogados altamente qualificados está comprometida em oferecer serviços jurídicos de excelência, sempre priorizando os interesses de nossos clientes.
          </p>
          <p className="text-lg text-gray-600">
            Nossa missão é proporcionar soluções jurídicas eficientes e personalizadas, mantendo os mais altos padrões éticos e profissionais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
