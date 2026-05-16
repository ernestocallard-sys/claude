const steps = [
  {
    num: '01',
    title: 'Compras el kit',
    text: 'Después del pago recibes el acceso al material digital.',
  },
  {
    num: '02',
    title: 'Descargas los PDFs',
    text: 'Tendrás los archivos listos para guardar e imprimir.',
  },
  {
    num: '03',
    title: 'Imprimes las actividades',
    text: 'Puedes repetir páginas cuando tu hijo necesite más práctica.',
  },
  {
    num: '04',
    title: 'Practican 10 a 15 minutos',
    text: 'Sesiones cortas, guiadas y sin presión.',
  },
  {
    num: '05',
    title: 'Celebran pequeños avances',
    text: 'La caja de motivación ayuda a reforzar el hábito y la confianza.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona-pasos" className="bg-[#F7E8D0] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight">
            Empezar es muy simple
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-5 items-start mb-7 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#3D2B1F] text-[#C9953A] font-extrabold text-sm flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#C9953A]/30 mt-2 min-h-[28px]" />
                )}
              </div>
              <div className="pb-7 last:pb-0">
                <h3 className="text-lg font-bold text-[#3D2B1F] mb-1">{s.title}</h3>
                <p className="text-sm sm:text-base text-[#6F6A64] leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
