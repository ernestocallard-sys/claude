import { ShieldCheck, Pencil, Volume2, Smile, BookOpen, Printer } from 'lucide-react';

const benefits = [
  { icon: <ShieldCheck size={22} className="text-[#6B9E78]" />, text: 'Más seguridad al enfrentarse a letras y sílabas' },
  { icon: <Pencil size={22} className="text-[#C9953A]" />, text: 'Mejor coordinación para escribir' },
  { icon: <Volume2 size={22} className="text-[#E9877E]" />, text: 'Mayor familiaridad con sonidos y palabras' },
  { icon: <Smile size={22} className="text-[#6B9E78]" />, text: 'Menos resistencia porque las actividades se sienten como juego' },
  { icon: <BookOpen size={22} className="text-[#C9953A]" />, text: 'Una rutina sencilla que mamá puede seguir sin ser maestra' },
  { icon: <Printer size={22} className="text-[#E9877E]" />, text: 'Material imprimible para repetir las páginas cuando lo necesite' },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#FAFAF7] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight">
            Con pocos minutos al día, tu hijo empieza a construir una base real para leer y escribir
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.text} className="bg-white rounded-3xl p-6 shadow-sm border border-[#F5E6E8] flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#F7E8D0] flex items-center justify-center">
                {b.icon}
              </div>
              <p className="text-sm sm:text-base text-[#3D2B1F] font-medium leading-snug">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
