import {
  CHECKOUT_FULL_GUIDE,
  CHECKOUT_EBOOK_ONLY,
  PRICE_FULL_CURRENT,
  PRICE_EBOOK_CURRENT,
} from '../constants'

const INCLUDES = [
  'Ebook principal: Mi Boda Inteligente',
  'Bonus 1: Planner completo + Checklist cronológica',
  'Bonus 2: Matrimonio civil sin dramas',
  'Bonus 3: Decisiones del gran día',
  'Acceso digital inmediato',
  'Pago único',
  'Garantía de 7 días',
]

export default function Pricing() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-serif font-bold mb-3"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
          >
            Elige tu opción
          </h2>
          <p className="font-sans text-sm" style={{ color: '#3D2B2B', opacity: 0.55 }}>
            Oferta especial por el Día de las Madres
          </p>
        </div>

        {/* ── OFERTA PRINCIPAL ── */}
        <div
          className="relative rounded-3xl p-7 sm:p-9 shadow-xl mb-5"
          style={{
            backgroundColor: '#FFFDF9',
            border: '2px solid #C9953A',
            boxShadow: '0 8px 40px rgba(139,69,87,0.13)',
          }}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ backgroundColor: '#C9953A', color: '#FFFDF9' }}
            >
              Más recomendado
            </span>
            <span
              className="font-sans text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
            >
              Especial Día de las Madres
            </span>
          </div>

          {/* Título */}
          <h3
            className="font-serif font-bold leading-snug mb-3"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.3rem, 3vw, 1.7rem)' }}
          >
            Guía completa Mi Boda Inteligente + 3 bonuses
          </h3>

          {/* Precio */}
          <div className="my-5 flex items-baseline gap-2">
            <span
              className="font-serif font-bold"
              style={{ color: '#8B4557', fontSize: '3.25rem', lineHeight: 1 }}
            >
              USD ${PRICE_FULL_CURRENT}
            </span>
          </div>

          {/* Descripción corta */}
          <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: '#3D2B2B', opacity: 0.7 }}>
            Por tiempo limitado, llévate la guía completa para organizar tu
            boda con más claridad, prioridades y control por solo USD ${PRICE_FULL_CURRENT}.
          </p>

          {/* Lista de incluidos */}
          <ul className="space-y-2.5 mb-6">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-sans text-sm" style={{ color: '#3D2B2B', opacity: 0.8 }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: '#C9953A' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Frase emocional */}
          <p
            className="font-sans text-sm italic rounded-xl px-5 py-4 mb-6"
            style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
          >
            Si ya estás preocupada por los precios, empezar con una guía clara
            por USD ${PRICE_FULL_CURRENT} puede ayudarte a evitar errores mucho más
            caros después.
          </p>

          {/* CTA */}
          <a
            href={CHECKOUT_FULL_GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-full text-base sm:text-lg"
          >
            Sí, quiero todo por USD ${PRICE_FULL_CURRENT}
          </a>

          {/* Microcopy */}
          <p className="mt-3 text-center font-sans text-xs" style={{ color: '#3D2B2B', opacity: 0.4 }}>
            Acceso inmediato · Pago único · Garantía 7 días
          </p>
        </div>

        {/* ── OFERTA SECUNDARIA (muy sutil) ── */}
        <div
          className="rounded-2xl px-6 py-5 text-center"
          style={{ backgroundColor: '#F7ECEA' }}
        >
          {/* Argumento USD $2 */}
          <p className="font-sans text-xs mb-3 leading-relaxed" style={{ color: '#3D2B2B', opacity: 0.6 }}>
            Por solo USD $2 más, te llevas la guía completa con planner,
            checklist y 3 bonuses para planear con más claridad y evitar
            decisiones caras.
          </p>

          <p className="font-sans text-xs mb-2" style={{ color: '#3D2B2B', opacity: 0.5 }}>
            También puedes empezar solo con el ebook: USD ${PRICE_EBOOK_CURRENT}
          </p>

          <a
            href={CHECKOUT_EBOOK_ONLY}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: '#3D2B2B', opacity: 0.45 }}
          >
            Empezar solo con el ebook por USD ${PRICE_EBOOK_CURRENT}
          </a>
        </div>

      </div>
    </section>
  )
}
