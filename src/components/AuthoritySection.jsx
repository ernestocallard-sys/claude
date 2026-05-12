const concepts = [
  'Ciclos de sueño infantil',
  'Ritmo circadiano',
  'Ventanas de vigilia',
  'Asociaciones de sueño',
  'Ambiente de sueño',
  'Colecho seguro',
  'Destete nocturno',
  'Rutinas por edad',
]

export default function AuthoritySection() {
  return (
    <section className="bg-navy py-16 lg:py-24 border-y border-gold/10">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-5">
          Base del contenido
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-moon mb-6 leading-tight text-balance">
          Basado en principios reales del sueño infantil,{' '}
          <span className="text-gold-light">explicado para madres cansadas</span>
        </h2>
        <p className="font-body text-gray-blue text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          El material organiza conceptos clave en un lenguaje claro y aplicable, para que puedas entender qué está pasando y qué ajustar sin necesitar un doctorado.
        </p>

        {/* Concept tags */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {concepts.map((c) => (
            <span
              key={c}
              className="font-body text-sm text-gold-light/80 border border-gold/20 rounded-full px-4 py-1.5"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto bg-navy-mid/60 border border-gold/10 rounded-xl px-6 py-4">
          <p className="font-body text-gray-blue/70 text-sm leading-relaxed">
            <span className="text-gold-light/60 font-medium">Nota importante: </span>
            Este material es educativo y no reemplaza la consulta con tu pediatra si tu bebé presenta señales de salud preocupantes como dificultad respiratoria, reflujo fuerte, pérdida de peso o llanto inconsolable.
          </p>
        </div>
      </div>
    </section>
  )
}
