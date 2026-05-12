const pillars = [
  {
    number: '01',
    title: 'Entender',
    description:
      'Aprende cómo funcionan los ciclos de sueño, las ventanas de vigilia, el sobrecansancio y las asociaciones de sueño para dejar de adivinar.',
  },
  {
    number: '02',
    title: 'Ordenar',
    description:
      'Usa rutinas por edad, horarios orientativos y pasos claros para dejar de probar cosas al azar y crear una estructura que funcione.',
  },
  {
    number: '03',
    title: 'Ajustar',
    description:
      'Detecta patrones reales con el diario de seguimiento y cambia una cosa a la vez, sin obsesionarte ni dar pasos en falso.',
  },
]

export default function MethodSection() {
  return (
    <section className="bg-beige py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            El método Lunera
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-night text-balance">
            Claridad antes que desesperación
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
          {pillars.map(({ number, title, description }) => (
            <div key={number} className="relative bg-moon rounded-2xl p-8 shadow-card border border-beige-dark">
              {/* Gold number */}
              <span className="font-display text-5xl font-bold text-gold/20 leading-none block mb-4">
                {number}
              </span>
              {/* Gold accent line */}
              <div className="w-10 h-0.5 bg-gold mb-5 rounded-full" />
              <h3 className="font-display text-2xl text-night mb-3">{title}</h3>
              <p className="font-body text-night/70 text-[15px] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
