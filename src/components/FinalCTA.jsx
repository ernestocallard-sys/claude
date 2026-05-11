import { CHECKOUT_FULL_GUIDE, PRICE_FULL_CURRENT } from '../constants'
import Fade from './Fade'
import DiamondDivider from './DiamondDivider'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#3D2B2B' }}>

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-20 top-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,69,87,0.3) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,149,58,0.12) 0%, transparent 65%)' }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">

        <Fade>
          <p
            className="font-sans uppercase tracking-[0.25em] text-xs mb-5"
            style={{ color: 'rgba(201,149,58,0.7)' }}
          >
            Lunera · Mi Boda Inteligente
          </p>
        </Fade>

        <Fade delay={80}>
          <h2
            className="font-serif font-bold leading-tight mb-4"
            style={{ color: '#FFFDF9', fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            Empieza hoy a organizar tu boda con más claridad
          </h2>
        </Fade>

        <Fade delay={140}>
          <DiamondDivider light />
        </Fade>

        <Fade delay={200}>
          <p
            className="font-sans leading-relaxed mt-6 mb-9 text-sm sm:text-base"
            style={{ color: 'rgba(255,253,249,0.65)' }}
          >
            Recibe acceso inmediato a Mi Boda Inteligente + 3 bonuses por solo
            USD ${PRICE_FULL_CURRENT}. La oferta especial termina hoy.
          </p>
        </Fade>

        <Fade delay={270}>
          <a
            href={CHECKOUT_FULL_GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans font-bold py-5 px-12 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-2xl"
            style={{
              backgroundColor: '#FFFDF9',
              color: '#8B4557',
              fontSize: '1rem',
              boxShadow: '0 8px 40px rgba(255,253,249,0.15)',
            }}
          >
            Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
          </a>

          <p
            className="mt-4 font-sans text-xs"
            style={{ color: 'rgba(255,253,249,0.35)' }}
          >
            Pago único · Acceso digital · Garantía 7 días
          </p>
        </Fade>

      </div>
    </section>
  )
}
