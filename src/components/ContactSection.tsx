
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Entre em Contato</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Phone className="w-8 h-8 mb-4 text-gold" />
            <h3 className="text-xl mb-2">Telefone</h3>
            <p>(00) 0000-0000</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="w-8 h-8 mb-4 text-gold" />
            <h3 className="text-xl mb-2">E-mail</h3>
            <p>contato@seudominio.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 mb-4 text-gold" />
            <h3 className="text-xl mb-2">Endereço</h3>
            <p>Rua Example, 123<br />Cidade - Estado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
