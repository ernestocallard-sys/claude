const BENEFITS = [
  'Saber qué gastos sí valen la pena y cuáles puedes recortar sin culpa.',
  'Evitar compras impulsivas que inflan el presupuesto sin mejorar la boda.',
  'Tener una ruta clara para saber qué hacer primero y qué no dejar para última hora.',
  'Convertir ideas de Pinterest en decisiones realistas para tu presupuesto.',
  'Organizar una boda cuidada, bonita y coherente sin sentir que estás improvisando.',
]

export default function Benefits() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="section-container">
        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2
              className="font-serif font-bold"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
            >
              Lo que vas a lograr
            </h2>
          </div>

          {/* Lista */}
          <ul className="space-y-4">
            {BENEFITS.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{ backgroundColor: '#FFFDF9' }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: '#8B4557', color: '#FFFDF9' }}
                >
                  ✓
                </span>
                <p className="font-sans text-sm sm:text-base leading-relaxed" style={{ color: '#3D2B2B', opacity: 0.82 }}>
                  {benefit}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
