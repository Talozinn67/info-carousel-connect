
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Direito Civil",
      description: "Especialistas em casos civis e familiares"
    },
    {
      title: "Direito Trabalhista",
      description: "Defendendo seus direitos trabalhistas"
    },
    {
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16 text-navy">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-serif text-navy mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
