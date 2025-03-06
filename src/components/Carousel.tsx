
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920",
    title: "Excelência em Direito",
    description: "Defendendo seus direitos com dedicação e profissionalismo"
  },
  {
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920",
    title: "Experiência Comprovada",
    description: "Anos de experiência em casos complexos"
  },
  {
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920",
    title: "Compromisso com Resultados",
    description: "Focados em alcançar os melhores resultados para nossos clientes"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr + 1) % slides.length);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h2 className="font-serif text-5xl mb-4 animate-fade-up">{slide.title}</h2>
            <p className="text-xl max-w-2xl text-center animate-fade-up">{slide.description}</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Carousel;
