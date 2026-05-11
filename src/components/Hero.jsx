import {
  CHECKOUT_FULL_GUIDE,
  PRICE_FULL_CURRENT,
  IMAGE_MAIN_COVER,
  IMAGE_BONUS_1,
  IMAGE_BONUS_2,
  IMAGE_BONUS_3,
} from '../constants'
import ProductImage from './ProductImage'
import Fade from './Fade'

const TRUST = ['Acceso inmediato', 'Pago único', 'Ebook + 3 bonuses', 'Garantía 7 días']

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#FAF5F3' }} className="relative overflow-hidden">

      {/* Decorative background blob — sutil, no distrae */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,120,122,0.08) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── Columna de texto ── */}
          <div>
            {/* Marca + label */}
            <Fade delay={0}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-sans font-light uppercase tracking-[0.25em]"
                  style={{ color: '#C9953A', fontSize: '0.65rem' }}
                >
                  Lunera
                </span>
                <div className="w-px h-3" style={{ backgroundColor: '#C9953A40' }} />
                <span
                  className="font-sans font-light uppercase tracking-[0.2em]"
                  style={{ color: '#C4787A', fontSize: '0.65rem' }}
                >
                  para novias inteligentes
                </span>
              </div>
            </Fade>

            {/* Heading principal */}
            <Fade delay={80}>
              <h1
                className="font-serif font-bold leading-[1.1] mb-5"
                style={{ color: '#3D2B2B', fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)' }}
              >
                Organiza una boda{' '}
                <span
                  className="font-serif italic"
                  style={{ color: '#8B4557' }}
                >
                  bonita
                </span>
                {' '}sin gastar de más ni tomar decisiones a ciegas.
              </h1>
            </Fade>

            {/* Thin gold accent line */}
            <Fade delay={140}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px" style={{ backgroundColor: '#C9953A' }} />
                <div className="w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ backgroundColor: '#C9953A60' }} />
                <div className="flex-1 h-px" style={{ backgroundColor: '#C9953A20' }} />
              </div>
            </Fade>

            {/* Subtítulo */}
            <Fade delay={180}>
              <p
                className="font-sans leading-relaxed mb-5"
                style={{ color: '#3D2B2B', opacity: 0.68, fontSize: '1rem' }}
              >
                Una guía práctica para novias que quieren saber qué priorizar,
                dónde ahorrar y cómo evitar gastos innecesarios sin que su
                boda se vea improvisada o barata.
              </p>
            </Fade>

            {/* Línea de oferta */}
            <Fade delay={220}>
              <p
                className="font-sans font-medium text-sm mb-7"
                style={{ color: '#8B4557' }}
              >
                Hoy puedes acceder a la guía completa con precio especial y
                empezar a organizar tu boda con más claridad.
              </p>
            </Fade>

            {/* Trust badges */}
            <Fade delay={260}>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-6">
                {TRUST.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 font-sans text-xs"
                    style={{ color: '#3D2B2B', opacity: 0.55 }}
                  >
                    <span style={{ color: '#C9953A', opacity: 1 }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </Fade>

            {/* Price + CTA box */}
            <Fade delay={320}>
              <div
                className="rounded-2xl p-5 mb-4"
                style={{ backgroundColor: '#FFFDF9', border: '1px solid rgba(201,149,58,0.25)' }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <p className="font-sans text-xs mb-0.5" style={{ color: '#3D2B2B', opacity: 0.45 }}>
                      precio especial · oferta hoy
                    </p>
                    <span
                      className="font-serif font-bold leading-none"
                      style={{ color: '#8B4557', fontSize: '2.5rem' }}
                    >
                      USD ${PRICE_FULL_CURRENT}
                    </span>
                  </div>
                  <span
                    className="font-sans text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
                  >
                    Día de las Madres
                  </span>
                </div>

                <a
                  href={CHECKOUT_FULL_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-sans font-semibold py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-md animate-pulse-cta"
                  style={{ backgroundColor: '#8B4557', color: '#FFFDF9', fontSize: '0.97rem' }}
                >
                  Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
                </a>

                <p className="mt-2.5 text-center font-sans text-xs" style={{ color: '#3D2B2B', opacity: 0.4 }}>
                  Precio especial activo hoy · Acceso inmediato · Garantía 7 días
                </p>
              </div>
            </Fade>
          </div>

          {/* ── Columna de producto ── */}
          <Fade delay={100}>
            <div className="flex flex-col items-center gap-4">

              {/* Main cover */}
              <div
                className="relative w-full max-w-[280px] md:max-w-full mx-auto"
                style={{ aspectRatio: '3/4' }}
              >
                <ProductImage
                  src={IMAGE_MAIN_COVER}
                  alt="Mi Boda Inteligente — portada principal"
                  className="w-full h-full rounded-2xl animate-float"
                  style={{ boxShadow: '0 20px 60px rgba(139,69,87,0.22), 0 8px 20px rgba(0,0,0,0.08)' }}
                />

                {/* Badge flotante */}
                <div
                  className="absolute -bottom-3 -right-3 rounded-xl px-3 py-2 shadow-lg"
                  style={{ backgroundColor: '#FFFDF9', border: '1px solid rgba(201,149,58,0.4)' }}
                >
                  <p className="font-sans text-xs font-semibold" style={{ color: '#8B4557' }}>
                    + 3 bonuses
                  </p>
                  <p className="font-sans" style={{ color: '#C9953A', fontSize: '0.6rem' }}>
                    incluidos hoy
                  </p>
                </div>
              </div>

              {/* Bonus thumbnails */}
              <div className="grid grid-cols-3 gap-2.5 w-full max-w-[280px] md:max-w-full mt-4">
                {[
                  { src: IMAGE_BONUS_1, alt: 'Bonus 1: Planner + Checklist' },
                  { src: IMAGE_BONUS_2, alt: 'Bonus 2: Matrimonio civil' },
                  { src: IMAGE_BONUS_3, alt: 'Bonus 3: Decisiones del gran día' },
                ].map((b, i) => (
                  <div key={i} style={{ aspectRatio: '3/4' }}>
                    <ProductImage
                      src={b.src}
                      alt={b.alt}
                      className="w-full h-full rounded-xl"
                      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  )
}
