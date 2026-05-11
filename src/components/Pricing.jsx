import {
  CHECKOUT_FULL_GUIDE,
  CHECKOUT_EBOOK_ONLY,
  PRICE_FULL_CURRENT,
  PRICE_EBOOK_CURRENT,
} from '../constants'
import Fade from './Fade'
import DiamondDivider from './DiamondDivider'

const INCLUDES = [
  { label: 'Ebook principal: Mi Boda Inteligente', main: true },
  { label: 'Bonus 1: Planner completo + Checklist cronológica', main: false },
  { label: 'Bonus 2: Matrimonio civil sin dramas', main: false },
  { label: 'Bonus 3: Decisiones del gran día', main: false },
  { label: 'Acceso digital inmediato', main: false },
  { label: 'Pago único', main: false },
  { label: 'Garantía de 7 días', main: false },
]

export default function Pricing() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF5F3' }}>
      <div className="max-w-lg mx-auto px-4 sm:px-6">

        {/* Heading */}
        <Fade>
          <div className="text-center mb-10">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-4"
              style={{ color: '#C4787A' }}
            >
              oferta especial
            </p>
            <h2
              className="font-serif font-bold"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.4rem)' }}
            >
              Empieza hoy por solo USD $6.99
            </h2>
          </div>
        </Fade>

        {/* ── TARJETA PRINCIPAL ── */}
        <Fade delay={80}>
          <div
            className="rounded-3xl overflow-hidden shadow-xl mb-4"
            style={{
              border: '2px solid #C9953A',
              boxShadow: '0 12px 50px rgba(139,69,87,0.18), 0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            {/* Header band */}
            <div
              className="flex flex-wrap items-center justify-between gap-2 px-7 py-3"
              style={{ backgroundColor: '#C9953A' }}
            >
              <span
                className="font-sans font-bold uppercase tracking-widest text-xs"
                style={{ color: '#FFFDF9' }}
              >
                Más recomendado
              </span>
              <span
                className="font-sans text-xs font-medium"
                style={{ color: 'rgba(255,253,249,0.8)' }}
              >
                Especial activo hoy
              </span>
            </div>

            {/* Card body */}
            <div className="px-7 py-7" style={{ backgroundColor: '#FFFDF9' }}>

              <h3
                className="font-serif font-bold leading-snug mb-1"
                style={{ color: '#3D2B2B', fontSize: '1.25rem' }}
              >
                Guía completa Mi Boda Inteligente + 3 bonuses
              </h3>

              {/* Price */}
              <div className="my-5 flex items-baseline gap-2">
                <span
                  className="font-serif font-bold leading-none"
                  style={{ color: '#8B4557', fontSize: '3.5rem' }}
                >
                  USD ${PRICE_FULL_CURRENT}
                </span>
                <span
                  className="font-sans text-xs"
                  style={{ color: '#3D2B2B', opacity: 0.4 }}
                >
                  pago único
                </span>
              </div>

              {/* Short pitch */}
              <p
                className="font-sans text-sm leading-relaxed mb-5"
                style={{ color: '#3D2B2B', opacity: 0.68 }}
              >
                Por tiempo limitado, llévate la guía completa para organizar
                tu boda con más claridad, prioridades y control.
              </p>

              {/* Includes list */}
              <ul className="space-y-2.5 mb-6">
                {INCLUDES.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-2.5 font-sans text-sm"
                    style={{ color: '#3D2B2B', opacity: item.main ? 1 : 0.72 }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#C9953A', fontWeight: 700 }}
                    >
                      ✓
                    </span>
                    <span style={{ fontWeight: item.main ? 500 : 400 }}>{item.label}</span>
                  </li>
                ))}
              </ul>

              {/* Emotional callout */}
              <div
                className="rounded-xl px-5 py-4 mb-6 text-sm font-sans italic"
                style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
              >
                Si ya estás preocupada por los precios, empezar con una guía
                clara por USD ${PRICE_FULL_CURRENT} puede ayudarte a evitar errores
                mucho más caros después.
              </div>

              {/* CTA */}
              <a
                href={CHECKOUT_FULL_GUIDE}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-sans font-bold py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-md"
                style={{
                  backgroundColor: '#8B4557',
                  color: '#FFFDF9',
                  fontSize: '1rem',
                  letterSpacing: '0.01em',
                }}
              >
                Sí, quiero todo por USD ${PRICE_FULL_CURRENT}
              </a>

              <p
                className="mt-3 text-center font-sans text-xs"
                style={{ color: '#3D2B2B', opacity: 0.38 }}
              >
                Acceso inmediato · Pago único · Garantía 7 días
              </p>
            </div>
          </div>
        </Fade>

        {/* ── OPCIÓN SECUNDARIA (muy sutil) ── */}
        <Fade delay={200}>
          <div
            className="rounded-2xl px-6 py-5 text-center"
            style={{ backgroundColor: '#F7ECEA' }}
          >
            <p
              className="font-sans text-xs mb-2 leading-relaxed"
              style={{ color: '#3D2B2B', opacity: 0.55 }}
            >
              Por solo USD $2 más, te llevas la guía completa con planner,
              checklist y 3 bonuses para planear con más claridad y evitar
              decisiones caras.
            </p>

            <DiamondDivider />

            <p
              className="font-sans text-xs mt-3 mb-1.5"
              style={{ color: '#3D2B2B', opacity: 0.45 }}
            >
              También puedes empezar solo con el ebook · USD ${PRICE_EBOOK_CURRENT}
            </p>

            <a
              href={CHECKOUT_EBOOK_ONLY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: '#3D2B2B', opacity: 0.4 }}
            >
              Empezar solo con el ebook por USD ${PRICE_EBOOK_CURRENT}
            </a>
          </div>
        </Fade>

      </div>
    </section>
  )
}
