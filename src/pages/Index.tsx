
import Carousel from "@/components/Carousel";
import { Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
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

      <main className="pt-16">
        <section id="inicio">
          <Carousel />
        </section>

        <section id="servicos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-16 text-navy">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
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
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-serif text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
      </main>

      <footer className="bg-navy-light text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Seu Escritório de Advocacia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
