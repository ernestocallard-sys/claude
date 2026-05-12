import { CHECKOUT_MAIN } from '../App'

export default function FinalCTA() {
  return (
    <section className="relative bg-night stars-bg py-24 lg:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        {/* Moon icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/25 mb-8">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#C9953A" fillOpacity="0.9"/>
          </svg>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] text-moon mb-6 text-balance">
          Empieza hoy a entender mejor{' '}
          <span className="text-gold-light">el sueño de tu bebé</span>
        </h2>

        <p className="font-body text-gray-blue text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          No necesitas seguir probando consejos sueltos cada noche. Empieza con una guía clara, práctica y respetuosa para saber qué mirar, qué ordenar y qué ajustar primero.
        </p>

        <a
          href={CHECKOUT_MAIN}
          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light transition-all duration-300 text-night font-body font-bold text-lg px-10 py-5 rounded-full shadow-gold-strong hover:shadow-gold-glow hover:scale-[1.02] active:scale-100"
        >
          Quiero el Manual + 3 bonuses
        </a>

        <p className="mt-4 text-sm text-gray-blue/50 font-body">
          Acceso digital inmediato · Pago único · Material Lunera
        </p>

        {/* Stars decoration */}
        <div className="mt-16 flex items-center justify-center gap-3 opacity-30">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-gold-light" />
          ))}
        </div>
      </div>
    </section>
  )
}
