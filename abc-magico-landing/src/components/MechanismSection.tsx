import { ArrowRight } from 'lucide-react';

const flowSteps = ['Trazo', 'Sonido', 'Sílaba', 'Palabra', 'Frase', 'Lectura'];

const cards = [
  'La mano se prepara con trazos, curvas y patrones',
  'El oído reconoce sonidos de forma más clara',
  'Las sílabas se trabajan en voz alta y con repetición',
  'Las palabras aparecen como una consecuencia natural',
  'Las frases ayudan a construir fluidez y seguridad',
];

export default function MechanismSection() {
  return (
    <section id="como-funciona" className="bg-[#F7E8D0] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight mb-4">
            ABC Mágico no empieza exigiendo lectura. Empieza preparando la mente y la mano.
          </h2>
          <p className="text-[#6F6A64] text-base sm:text-lg leading-relaxed">
            El método guía al niño paso a paso: primero mejora el trazo y la coordinación, luego asocia sonidos, forma sílabas, reconoce palabras y finalmente avanza hacia frases con más seguridad.
          </p>
        </div>

        {/* Flow visual */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-1 mb-10">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-1 sm:gap-2">
              <span className="bg-[#3D2B1F] text-[#FAFAF7] text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
                {step}
              </span>
              {i < flowSteps.length - 1 && (
                <ArrowRight size={16} className="text-[#C9953A] shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={c} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#C9953A] text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-sm sm:text-base text-[#3D2B1F] leading-snug">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
