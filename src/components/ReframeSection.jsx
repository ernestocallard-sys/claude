import { CHECKOUT_FULL_GUIDE } from '../constants'
import Fade from './Fade'
import DiamondDivider from './DiamondDivider'

export default function ReframeSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF5F3' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* Overline */}
        <Fade>
          <p
            className="font-sans uppercase tracking-[0.2em] text-xs mb-6"
            style={{ color: '#C4787A' }}
          >
            la verdad sobre tu presupuesto
          </p>
        </Fade>

        {/* Main reframe heading */}
        <Fade delay={80}>
          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4.5vw, 2.7rem)' }}
          >
            Una boda bonita no depende solo de{' '}
            <em className="not-italic" style={{ color: '#8B4557' }}>gastar más</em>.
            Depende de{' '}
            <em className="not-italic" style={{ color: '#8B4557' }}>decidir mejor</em>.
          </h2>
        </Fade>

        <Fade delay={140}>
          <p
            className="font-sans leading-relaxed mb-10"
            style={{ color: '#3D2B2B', opacity: 0.68, fontSize: '1rem' }}
          >
            No necesitas copiar una boda de lujo ni gastar sin control.
            Necesitas saber qué sí importa, qué puedes simplificar, dónde
            no conviene recortar y cómo convertir tu presupuesto en un
            plan claro.
          </p>
        </Fade>

        {/* Large callout quote */}
        <Fade delay={200}>
          <blockquote
            className="relative mx-auto max-w-2xl mb-10 px-6 md:px-10 py-8 rounded-2xl"
            style={{ backgroundColor: '#FFFDF9', border: '1px solid rgba(201,149,58,0.3)' }}
          >
            {/* Decorative open-quote */}
            <span
              aria-hidden="true"
              className="absolute top-3 left-5 font-serif leading-none select-none"
              style={{ color: 'rgba(201,149,58,0.2)', fontSize: '4rem', lineHeight: 1 }}
            >
              "
            </span>
            <p
              className="font-serif italic font-medium relative z-10"
              style={{ color: '#8B4557', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: 1.5 }}
            >
              No se trata de hacer una boda barata. Se trata de tomar
              mejores decisiones para que tu presupuesto rinda más.
            </p>
          </blockquote>
        </Fade>

        <DiamondDivider />

        <Fade delay={280}>
          <div className="mt-8">
            <a
              href={CHECKOUT_FULL_GUIDE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-semibold py-4 px-10 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md"
              style={{ backgroundColor: '#8B4557', color: '#FFFDF9' }}
            >
              Quiero planear mi boda con claridad
            </a>
          </div>
        </Fade>

      </div>
    </section>
  )
}
