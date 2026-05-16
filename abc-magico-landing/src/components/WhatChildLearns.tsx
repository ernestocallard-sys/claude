import { Pencil, Volume2, BookOpen, AlignLeft } from 'lucide-react';

const blocks = [
  {
    icon: <Pencil size={24} className="text-[#C9953A]" />,
    title: 'Coordinación y trazo',
    text: 'Líneas, curvas, círculos, espirales y movimientos base para preparar la escritura.',
  },
  {
    icon: <Volume2 size={24} className="text-[#6B9E78]" />,
    title: 'Sonidos y sílabas',
    text: 'Asociación entre sonidos, letras y combinaciones simples como MA, ME, MI, MO, MU.',
  },
  {
    icon: <BookOpen size={24} className="text-[#E9877E]" />,
    title: 'Palabras',
    text: 'Construcción y lectura inicial de palabras simples para ganar seguridad.',
  },
  {
    icon: <AlignLeft size={24} className="text-[#C9953A]" />,
    title: 'Frases',
    text: 'Primeras frases para avanzar hacia una lectura más natural y con sentido.',
  },
];

export default function WhatChildLearns() {
  return (
    <section className="bg-[#FAFAF7] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight">
            Qué empieza a trabajar tu hijo con ABC Mágico
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="bg-white rounded-3xl p-7 shadow-sm border border-[#F5E6E8] flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#F7E8D0] flex items-center justify-center">
                {b.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3D2B1F] mb-1">{b.title}</h3>
                <p className="text-sm text-[#6F6A64] leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
