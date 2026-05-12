import { CHECKOUT_MAIN, IMAGE_MAIN_COVER, IMAGE_BONUS_1, IMAGE_BONUS_2, IMAGE_BONUS_3 } from '../App'

function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="inline-block text-gold-light">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" opacity="0.85"/>
    </svg>
  )
}

function StarDot({ className }) {
  return <span className={`inline-block rounded-full bg-gold-light/50 ${className}`} />
}

function ProductCover({ src, alt, className }) {
  const isPlaceholder = !src || src.startsWith('PEGAR')
  return (
    <div className={`relative overflow-hidden rounded-xl shadow-card-dark ${className}`}>
      {isPlaceholder ? (
        <div className="w-full h-full bg-navy-mid border border-gold/20 flex flex-col items-center justify-center gap-2 rounded-xl min-h-[180px]">
          <MoonIcon />
          <p className="text-gold-light/60 text-xs text-center px-2 font-body">{alt}</p>
          <p className="text-gray-blue/40 text-[10px] font-body">[Reemplazar con portada real]</p>
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-night stars-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-mid/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            {/* Brand */}
            <div className="flex items-center gap-2 mb-6">
              <MoonIcon />
              <span className="font-body text-gold-light/80 text-sm tracking-widest uppercase font-light">
                Lunera · Sueño Infantil
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] text-moon mb-6 text-balance">
              Tu bebé no necesita una madre perfecta.{' '}
              <em className="text-gold-light not-italic">Necesita una rutina que sí entienda su sueño.</em>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-gray-blue text-lg leading-relaxed mb-8 max-w-lg">
              Una guía práctica para madres de bebés y niños pequeños que quieren mejorar despertares, siestas y rutinas sin culpa, sin métodos agresivos y sin seguir consejos sueltos que no encajan con su realidad.
            </p>

            {/* Trust microcopy */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-8">
              {['Para bebés 0–3 años', 'Acceso digital inmediato', 'Guía principal + 3 bonuses'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-gray-blue/80 font-body">
                  <StarDot className="w-1 h-1" />
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={CHECKOUT_MAIN}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light transition-all duration-300 text-night font-body font-semibold text-base px-8 py-4 rounded-full shadow-gold-strong hover:shadow-gold-glow hover:scale-[1.02] active:scale-100"
            >
              Quiero empezar a mejorar sus noches
            </a>
            <p className="mt-3 text-xs text-gray-blue/60 font-body">
              Pago único · Acceso inmediato · Material digital
            </p>
          </div>

          {/* Right: Product visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main cover */}
              <ProductCover
                src={IMAGE_MAIN_COVER}
                alt="Manual del Sueño Infantil"
                className="w-full aspect-[3/4]"
              />

              {/* Bonus stack – bottom right */}
              <div className="absolute -bottom-5 -right-4 flex flex-col gap-2">
                {[
                  { src: IMAGE_BONUS_1, alt: 'Rutinas de Sueño por Edad' },
                  { src: IMAGE_BONUS_2, alt: '15 Problemas del Sueño Resueltos' },
                  { src: IMAGE_BONUS_3, alt: 'Diario Sueño Infantil Lunera' },
                ].map(({ src, alt }) => (
                  <ProductCover
                    key={alt}
                    src={src}
                    alt={alt}
                    className="w-20 h-28 sm:w-24 sm:h-32"
                  />
                ))}
              </div>

              {/* Glow ring behind main cover */}
              <div className="absolute inset-0 -z-10 scale-105 rounded-2xl bg-gold/8 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-night to-transparent pointer-events-none" />
    </section>
  )
}
