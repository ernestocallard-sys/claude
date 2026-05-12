import { CHECKOUT_MAIN } from '../App'

export default function ReframeSection() {
  return (
    <section className="bg-night stars-bg py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-5">
          Reencuadre
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-moon mb-8 text-balance">
          No estás fallando.{' '}
          <span className="text-gold-light">Estás intentando resolver algo sin un mapa claro.</span>
        </h2>

        <p className="font-body text-gray-blue text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          El sueño infantil no mejora a base de adivinar. Mejora cuando entiendes qué está pasando, qué necesita tu bebé según su edad y qué ajuste tiene más sentido hacer primero.
        </p>

        {/* Highlight quote */}
        <div className="relative border border-gold/25 rounded-2xl px-8 py-7 mb-12 bg-navy-mid/60 backdrop-blur-sm">
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <p className="font-display text-xl sm:text-2xl text-moon italic leading-relaxed text-balance">
            "No se trata de dejar llorar ni de aguantar noches caóticas.{' '}
            <span className="text-gold-light not-italic font-normal">
              Se trata de observar, ordenar y avanzar con calma."
            </span>
          </p>
        </div>

        <a
          href={CHECKOUT_MAIN}
          className="inline-flex items-center justify-center gap-2 border border-gold/50 hover:border-gold text-gold-light hover:bg-gold/10 transition-all duration-300 font-body font-medium text-base px-8 py-3.5 rounded-full"
        >
          Quiero entender qué está pasando →
        </a>
      </div>
    </section>
  )
}
