import { CHECKOUT_MAIN, PRICE_MAIN, IMAGE_MAIN_COVER, IMAGE_BONUS_1, IMAGE_BONUS_2, IMAGE_BONUS_3 } from '../App'

const includes = [
  { label: 'Manual del Sueño Infantil', sub: 'Guía principal completa' },
  { label: 'Rutinas de Sueño por Edad', sub: 'Bonus 1' },
  { label: '15 Problemas del Sueño Infantil Resueltos', sub: 'Bonus 2' },
  { label: 'Diario Sueño Infantil Lunera', sub: 'Bonus 3' },
  { label: 'Acceso digital inmediato', sub: 'Celular, tablet o computadora' },
  { label: 'Pago único · Sin suscripción', sub: 'Acceso permanente al material' },
]

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#C9953A" fillOpacity="0.2"/>
      <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#E4B75F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MiniCover({ src, alt }) {
  const isPlaceholder = !src || src.startsWith('PEGAR')
  return (
    <div className="w-14 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gold/20 shadow-card-dark">
      {isPlaceholder ? (
        <div className="w-full h-full bg-navy-mid flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold/40">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
          </svg>
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      )}
    </div>
  )
}

const showPlaceholderPrice = !PRICE_MAIN || PRICE_MAIN === 'PEGAR_PRECIO'

export default function OfferSection() {
  return (
    <section id="oferta" className="bg-night stars-bg py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            Oferta completa
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-moon text-balance">
            Manual del Sueño Infantil{' '}
            <span className="text-gold-light">+ 3 bonuses Lunera</span>
          </h2>
          <p className="mt-4 font-body text-gray-blue text-base max-w-lg mx-auto">
            Todo el material para empezar a entender, ordenar y mejorar el sueño de tu bebé con más calma.
          </p>
        </div>

        {/* Offer card */}
        <div className="relative bg-navy-mid rounded-3xl border border-gold/30 shadow-gold-strong overflow-hidden">
          {/* Top gold line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="p-8 lg:p-10">
            {/* Mini covers */}
            <div className="flex gap-3 justify-center mb-8">
              <MiniCover src={IMAGE_MAIN_COVER} alt="Manual del Sueño Infantil" />
              <MiniCover src={IMAGE_BONUS_1} alt="Bonus 1" />
              <MiniCover src={IMAGE_BONUS_2} alt="Bonus 2" />
              <MiniCover src={IMAGE_BONUS_3} alt="Bonus 3" />
            </div>

            {/* Includes list */}
            <ul className="space-y-3.5 mb-8">
              {includes.map(({ label, sub }) => (
                <li key={label} className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <span className="font-body font-medium text-moon text-sm">{label}</span>
                    <span className="font-body text-gray-blue text-xs ml-2">· {sub}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-gold/15 mb-8" />

            {/* Price */}
            <div className="text-center mb-6">
              {showPlaceholderPrice ? (
                <p className="font-body text-gray-blue text-sm mb-1">Precio</p>
              ) : (
                <p className="font-body text-gray-blue/70 text-sm mb-1">Hoy</p>
              )}
              <p className="font-display text-4xl font-bold text-gold-light">
                {showPlaceholderPrice ? '[PEGAR PRECIO]' : `USD $${PRICE_MAIN}`}
              </p>
              <p className="font-body text-gray-blue/60 text-xs mt-1">Pago único · Sin suscripción</p>
            </div>

            {/* CTA */}
            <a
              href={CHECKOUT_MAIN}
              className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-light transition-all duration-300 text-night font-body font-semibold text-base px-8 py-4 rounded-full shadow-gold-strong hover:shadow-gold-glow hover:scale-[1.01] active:scale-100"
            >
              Sí, quiero acceder al material
            </a>
            <p className="text-center mt-3 text-xs text-gray-blue/50 font-body">
              Acceso inmediato · Pago único · Material digital
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
