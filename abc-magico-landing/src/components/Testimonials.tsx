import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'André Azevedo',
    initials: 'AA',
    text: 'Mis pequeños han tenido una evolución significativa gracias al grafismo fonético. Me pareció una compra muy útil.',
  },
  {
    name: 'Ana Oliveira',
    initials: 'AO',
    text: 'Mi hija empezó a formar palabras en solo dos semanas usando el kit. Me sorprendió lo rápido que avanzó.',
  },
  {
    name: 'Marisa Correia',
    initials: 'MC',
    text: 'De verdad, fue una de las mejores compras que hice este año. Vale mucho la pena.',
  },
  {
    name: 'Camila Silva',
    initials: 'CS',
    text: 'Es increíble cómo algo tan simple puede hacer tanta diferencia. Estoy muy satisfecha con mi compra.',
  },
  {
    name: 'Breno Souza',
    initials: 'BS',
    text: 'El método es fácil de seguir, incluso para padres sin experiencia enseñando. Ver a nuestro hijo leer sus primeras palabras fue muy gratificante.',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className="text-[#C9953A] fill-[#C9953A]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#FAFAF7] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight">
            Lo que dicen algunos padres que ya probaron este tipo de método
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-6 shadow-sm border border-[#F5E6E8] flex flex-col">
              <Stars />
              <p className="text-sm sm:text-base text-[#3D2B1F] leading-relaxed flex-1 mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F7E8D0] flex items-center justify-center text-xs font-bold text-[#C9953A] shrink-0">
                  {t.initials}
                </div>
                <span className="text-sm font-semibold text-[#3D2B1F]">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#6F6A64]">
          Los resultados pueden variar según la edad, constancia y ritmo de cada niño.
        </p>
      </div>
    </section>
  );
}
