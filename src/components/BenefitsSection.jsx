const benefits = [
  'Saber si tu bebé está durmiendo según lo esperable para su edad.',
  'Identificar si el problema viene de horarios, siestas, ambiente, asociaciones o sobrecansancio.',
  'Dejar de cambiar todo cada noche por desesperación.',
  'Crear una rutina más predecible sin volverte rígida.',
  'Reducir la culpa al entender que muchos despertares tienen una explicación.',
  'Tomar decisiones más calmadas incluso cuando estás cansada.',
  'Empezar con pasos simples desde hoy, sin esperar a tener todo perfecto.',
]

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#C9953A" fillOpacity="0.15"/>
      <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#C9953A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function BenefitsSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            Lo que cambia
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-night text-balance">
            Lo que vas a poder hacer con más claridad
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-moon rounded-xl px-6 py-5 border border-beige-dark shadow-card"
            >
              <CheckIcon />
              <p className="font-body text-night/80 text-[15px] leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
