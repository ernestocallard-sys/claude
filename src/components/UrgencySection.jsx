import { CHECKOUT_MAIN } from '../App'

export default function UrgencySection() {
  return (
    <section className="bg-[#060F1E] py-16 lg:py-24 border-t border-gold/10">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-moon mb-7 text-balance">
          Cada noche que improvisas,{' '}
          <span className="text-gold-light">terminas más cansada y con menos claridad</span>
        </h2>

        <p className="font-body text-gray-blue text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Cuando estás agotada, es fácil cambiar de estrategia cada madrugada: hoy pecho, mañana brazos, pasado dejarlo llorar, luego volver atrás por culpa. El problema no es que no quieras hacerlo bien. El problema es que necesitas un plan claro para saber qué mirar y qué ajustar primero.
        </p>

        <a
          href={CHECKOUT_MAIN}
          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light transition-all duration-300 text-night font-body font-semibold text-base px-9 py-4 rounded-full shadow-gold-strong hover:scale-[1.02] active:scale-100"
        >
          Quiero dejar de improvisar
        </a>
      </div>
    </section>
  )
}
