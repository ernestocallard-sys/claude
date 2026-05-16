import { Layers, Wind, Star } from 'lucide-react';

const columns = [
  {
    icon: <Layers size={28} className="text-[#C9953A]" />,
    title: 'Menos improvisación',
    text: 'Cada nivel tiene una función clara dentro del proceso.',
  },
  {
    icon: <Wind size={28} className="text-[#6B9E78]" />,
    title: 'Menos presión',
    text: 'Las sesiones son cortas y pensadas para avanzar sin pelea.',
  },
  {
    icon: <Star size={28} className="text-[#E9877E]" />,
    title: 'Más confianza',
    text: 'Tu hijo ve progreso pequeño, repetible y celebrable.',
  },
];

export default function BeliefShiftSection() {
  return (
    <section className="bg-[#FAFAF7] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight mb-4">
            No necesitas convertirte en maestra. Necesitas un camino claro.
          </h2>
          <p className="text-[#6F6A64] text-base sm:text-lg leading-relaxed">
            Enseñar desde casa no debería sentirse como improvisar. Cuando el material sigue una progresión lógica, mamá sabe qué hacer y el niño entiende qué viene después.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {columns.map((c) => (
            <div key={c.title} className="bg-white rounded-3xl p-7 shadow-sm border border-[#F5E6E8] text-center">
              <div className="flex justify-center mb-4">{c.icon}</div>
              <h3 className="text-lg font-bold text-[#3D2B1F] mb-2">{c.title}</h3>
              <p className="text-sm text-[#6F6A64] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
