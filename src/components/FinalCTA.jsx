import { CHECKOUT_FULL_GUIDE, PRICE_FULL_CURRENT } from '../constants'

export default function FinalCTA() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: '#8B4557' }}
    >
      <div className="section-container text-center">

        <p
          className="font-sans text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          style={{ color: '#C9953A' }}
        >
          Lunera · Mi Boda Inteligente
        </p>

        <h2
          className="font-serif font-bold leading-tight mb-4"
          style={{ color: '#FFFDF9', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}
        >
          Empieza hoy a organizar tu boda con más claridad
        </h2>

        <p
          className="font-sans text-base sm:text-lg leading-relaxed mb-9 max-w-xl mx-auto"
          style={{ color: '#FFFDF9', opacity: 0.8 }}
        >
          Recibe acceso inmediato a Mi Boda Inteligente + 3 bonuses por solo
          USD ${PRICE_FULL_CURRENT}. La oferta especial termina hoy.
        </p>

        <a
          href={CHECKOUT_FULL_GUIDE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans font-semibold text-base sm:text-lg py-4 px-10 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95 shadow-xl"
          style={{ backgroundColor: '#FFFDF9', color: '#8B4557' }}
        >
          Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
        </a>

        <p className="mt-4 font-sans text-xs" style={{ color: '#FFFDF9', opacity: 0.5 }}>
          Pago único · Acceso digital · Garantía 7 días
        </p>

      </div>
    </section>
  )
}
