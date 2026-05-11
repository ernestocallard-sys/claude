import { CHECKOUT_FULL_GUIDE, PRICE_FULL_CURRENT } from '../constants'
import Fade from './Fade'

export default function UrgencySection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#8B4557' }}>

      {/* Decorative element */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,149,58,0.12) 0%, transparent 70%)',
          transform: 'translate(40%, -50%)',
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">

        <Fade>
          <p
            className="font-sans uppercase tracking-[0.2em] text-xs mb-5"
            style={{ color: 'rgba(201,149,58,0.8)' }}
          >
            no lo dejes para después
          </p>
        </Fade>

        <Fade delay={80}>
          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{ color: '#FFFDF9', fontSize: 'clamp(1.7rem, 4.5vw, 2.6rem)' }}
          >
            No dejes tu boda en manos de decisiones improvisadas
          </h2>
        </Fade>

        <Fade delay={150}>
          <p
            className="font-sans leading-relaxed mb-9 text-sm sm:text-base"
            style={{ color: 'rgba(255,253,249,0.72)' }}
          >
            Si ya estás preocupada por los precios, esta oferta especial es
            una forma simple de empezar hoy con claridad. La guía completa
            te ayuda a ordenar tus prioridades, evitar gastos innecesarios
            y tomar mejores decisiones antes de que el presupuesto se te vaya
            en cosas que no eran tan importantes.
          </p>
        </Fade>

        <Fade delay={220}>
          <a
            href={CHECKOUT_FULL_GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans font-bold py-4 px-10 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-xl"
            style={{ backgroundColor: '#FFFDF9', color: '#8B4557', fontSize: '0.97rem' }}
          >
            Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
          </a>
        </Fade>

      </div>
    </section>
  )
}
