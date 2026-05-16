import { AlertCircle } from 'lucide-react';

const painCards = [
  'Tu hijo se distrae apenas ve letras o tareas',
  'Confunde sonidos, sílabas o palabras simples',
  'Se frustra cuando no le sale',
  'Tú quieres ayudar, pero no sabes por dónde empezar',
  'Las actividades sueltas no siguen un orden claro',
];

export default function PainSection() {
  return (
    <section className="bg-[#F5E6E8] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight mb-5">
            Muchas mamás esperan a que la escuela lo resuelva… hasta que leer empieza a sentirse como una pelea
          </h2>
          <p className="text-[#6F6A64] text-base sm:text-lg leading-relaxed">
            Una tarde intentas ayudarlo, pero se distrae. Le señalas una letra, se frustra. Cambias de actividad, buscas videos, imprimes fichas sueltas… y aun así sientes que no hay un camino claro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {painCards.map((pain) => (
            <div key={pain} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <AlertCircle size={20} className="text-[#E9877E] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-[#3D2B1F] font-medium leading-snug">{pain}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-l-4 border-[#C9953A] rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-[#3D2B1F] text-base sm:text-lg font-medium leading-relaxed">
            El problema no es que tu hijo no pueda aprender. Muchas veces el problema es que nadie te dio una <strong>ruta simple, visual y progresiva</strong> para acompañarlo sin presión.
          </p>
        </div>
      </div>
    </section>
  );
}
